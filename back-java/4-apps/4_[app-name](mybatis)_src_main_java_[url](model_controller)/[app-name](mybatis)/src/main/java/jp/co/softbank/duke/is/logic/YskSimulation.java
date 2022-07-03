/**
 * Copyright (C) ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.logic;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.Graphics2D;
import java.awt.geom.Point2D;
import java.awt.geom.Rectangle2D;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.nio.ByteBuffer;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Hashtable;
import java.util.List;
import java.util.TreeSet;

import javax.imageio.ImageIO;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;

import jp.co.[company_name].[main_system_name].is.entity.Antenna;
import jp.co.[company_name].[main_system_name].is.entity.AntennaPattern;
import jp.co.[company_name].[main_system_name].is.entity.AntennaPower;
import jp.co.[company_name].[main_system_name].is.entity.Atrium;
import jp.co.[company_name].[main_system_name].is.entity.CalculationSet;
import jp.co.[company_name].[main_system_name].is.entity.Floor;
import jp.co.[company_name].[main_system_name].is.entity.FloorImage;
import jp.co.[company_name].[main_system_name].is.entity.FrequencyService;
import jp.co.[company_name].[main_system_name].is.entity.IsdocAntennas;
import jp.co.[company_name].[main_system_name].is.entity.Legend;
import jp.co.[company_name].[main_system_name].is.entity.MaterialLoss;
import jp.co.[company_name].[main_system_name].is.entity.Partition;
import jp.co.[company_name].[main_system_name].is.entity.PartitionSetting;
import jp.co.[company_name].[main_system_name].is.entity.Point;
import jp.co.[company_name].[main_system_name].is.entity.YskAntCalculationItem;
import jp.co.[company_name].[main_system_name].is.entity.YskAntHashtableSet;
import jp.co.[company_name].[main_system_name].is.entity.YskMeshCalculationItem;
import jp.co.[company_name].[main_system_name].is.entity.YskMeshSet;

/**
 * 예측도 시뮬레이션
 *
 * @author [author]
 * @version [version] [update_date]09/08
 */
@Component
public class YskSimulation {

	public final class RefObject<T> {
		private T argValue;

		public RefObject(T refArg) {
			argValue = refArg;
		}
	}

	/**
	 * 시뮬레이션을 실행한다.
	 *
	 * @param specId 제원정보
	 * @param iscom Iscommon
	 * @param isdoc Isdoc
	 * @param simResult 시물레이션 결과
	 * @param simStatus 시뮬레이션 스테이터스
	 * @throws Exception 예외
	 */
	public final void doWork(String specId, YskIscommon iscom, YskIsdoc isdoc, YskSimulationResult simResult, YskSimulationStatus simStatus) throws Exception {

		YskProgressInfo progressInfo = new YskProgressInfo();

		// DB의 시뮬레이션 진척상황 갱신
		simStatus.info.progress = progressInfo.getProgress().intValue();
		simStatus.updateSimulationProgress(simStatus.info);

		// DB의 시뮬레이션 스테이터스 갱신
		simStatus.info.status = "RUNNING";
		simStatus.updateSimulationStatus(simStatus.info);

		simStatus.info.result = "SUCCESS";

		Boolean isCreateDirectory = true;

		simResult.setSimlationModeDirPath(simResult.specIdDirPath.toString(), isdoc.calSet.simulationMode, isCreateDirectory,
				isdoc.calSet.deleteExistingSimulation);

		float powerLoss = 0;
		float nlosLoss = 0;
		float bodyLoss = 0;
		float ueGain = 0;
		float pfn = isdoc.calSet.pfn;

		if (isdoc.calSet.isAdditionalPowerLoss) {
			powerLoss = isdoc.calSet.powerLoss;
		}
		if (isdoc.calSet.isAdditionalNLOSLoss) {
			nlosLoss = isdoc.calSet.nlosLoss;
		}
		if (isdoc.calSet.isAdditionalBodyLoss) {
			bodyLoss = isdoc.calSet.bodyLoss;
		}
		if (isdoc.calSet.isAdditionalUeGain) {
			ueGain = isdoc.calSet.ueGain;
		}

		String[] aryTargetFrequencyName = new String[isdoc.calSet.frequencyServices.size()];
		isdoc.calSet.frequencyServices.toArray(aryTargetFrequencyName);
		List<String> lstTargetFrequencyName = Arrays.asList(aryTargetFrequencyName);

		String[] aryBaseFloorId = new String[isdoc.calSet.targetFloorIds.size()];
		isdoc.calSet.targetFloorIds.toArray(aryBaseFloorId);

		CommunicationStandardType comStandardType = null;

		Dimension imgSize = new Dimension();

		// 다음 레벨의 진척의 초기화
		progressInfo.levelNext(aryBaseFloorId.length);

		for (String baseFloorId : aryBaseFloorId) {

			// 진척정보 갱신
			progressInfo.setIndex();

			// 시뮬레이션 중단 판단
			if (simStatus.selectSimulationCommand(specId).equals("STOP")) {
				simStatus.info.result = "USER_STOP";
				break;
			}

			simResult.setFloorDirPath(simResult.simlationModeDirPath.toString(), baseFloorId, isCreateDirectory);
			Floor baseFloor = isdoc.findFloor(baseFloorId);
			FloorImage floorImage = isdoc.findFloorImages(baseFloor.image);
			imgSize.width = floorImage.width;
			imgSize.height = floorImage.height;

			if (imgSize.width == 0 || imgSize.height == 0) {
				continue;
			}

			float MeshSize = isdoc.calSet.meshSize;
			float MeshHeight = isdoc.calSet.meshHeight;

			IsdocAntennas targetAntSet = new IsdocAntennas();
			targetAntSet.antennas = new ArrayList<Antenna>();
			RefObject<IsdocAntennas> refTargetAntSet = new RefObject<IsdocAntennas>(targetAntSet);
			setTargetAntSet(isdoc, baseFloorId, refTargetAntSet);

			TreeSet<String> ssFrequencyName = getFrequencyName(iscom, targetAntSet);

			YskMeshSet meshSet = getMeshSetting(baseFloor, imgSize, MeshSize, MeshHeight, ssFrequencyName);

			progressInfo.levelNext(lstTargetFrequencyName.size());

			for (String frequencyName : lstTargetFrequencyName) {

				// 진척정보 갱신
				progressInfo.setIndex();

				// 시뮬레이션 중단 판단
				if (simStatus.selectSimulationCommand(specId).equals("STOP")) {
					simStatus.info.result = "USER_STOP";
					break;
				}

				if (meshSet.lstFrequencyName.contains(frequencyName)) {

					FrequencyService comFreqService = iscom.findFrequencyService(frequencyName);

					if ((comFreqService == null) == false) {

						float frq = comFreqService.centerFrequency;
						String frequencyBand = comFreqService.fB;
						float bandWidth = new Float(comFreqService.bW.toString().replace("M", "")).floatValue();
						String comStandard = comFreqService.rAT;

						float defaultEirpValue = 0;

						comStandardType = CommunicationStandardType.fromString(comStandard);

						switch (comStandardType) {
						case FIVEG:
							defaultEirpValue = IsdocAntennas.defaultFivegRsPower;
							break;
						case LTE:
							defaultEirpValue = IsdocAntennas.defaultLteRsPower;
							break;
						case WCDMA:
							defaultEirpValue = IsdocAntennas.defaultWcdmaCpichPower;
							break;
						default:
							break;
						}

						YskAntHashtableSet antHashtableSet = getAntHashtableSet(
								iscom, isdoc, baseFloor, frequencyName, comStandard, targetAntSet);

						simResult.setFrequencyBandDirPath(simResult.floorDirPath.toString(), frequencyBand, isCreateDirectory);
						simResult.setPathlossesDirPath(simResult.frequencyBandDirPath.toString(), isCreateDirectory);
						simResult.setPredictionDirPath(simResult.frequencyBandDirPath.toString(), isCreateDirectory);
						simResult.setServiceBandDirPath(simResult.predictionDirPath.toString(), comFreqService.name, isCreateDirectory);

						RefObject<YskProgressInfo> refProgressInfo = new RefObject<YskProgressInfo>(progressInfo);

						createMeshJsonFile(simResult, meshSet);

						createSimulationMeshFile(iscom, isdoc, simResult,
								meshSet, frequencyName, frq, frequencyBand, bandWidth, comStandardType,
								powerLoss, nlosLoss, bodyLoss, ueGain, pfn, defaultEirpValue,
								antHashtableSet, refProgressInfo);

						createSimulationImageFile(iscom, simResult, comStandardType, imgSize, meshSet);

					}

				}

				// 시뮬레이션 진척상황 갱신 처리
				simStatus.info.progress = progressInfo.getProgress().intValue();
				simStatus.updateSimulationProgress(simStatus.info);

			}

			// 진척레벨 복귀
			progressInfo.levelBack();

			// 시뮬레이션 진척상황 갱신 처리
			simStatus.info.progress = progressInfo.getProgress().intValue();
			simStatus.updateSimulationProgress(simStatus.info);

		}

		// 진척레벨 복귀
		progressInfo.levelBack();

		// 시뮬레이션 진척상황 갱신 처리
		simStatus.info.progress = progressInfo.getProgress().intValue();
		simStatus.updateSimulationProgress(simStatus.info);

	}

	private final YskMeshSet getMeshSetting(Floor baseFloor, Dimension ImageSize,
			float MeshSize, float MeshHeight, TreeSet<String> ssFrequencyName) {

		YskMeshSet meshSet = null;

		// 1m에 들어갈 픽셀 수
		float pixcelPerMHor = (1 / baseFloor.scaleX);
		float pixcelPerMVer = (1 / baseFloor.scaleY);

		// 1메쉬에 들어갈 픽셀 수
		float pixelMeshSize_Hor = pixcelPerMHor * MeshSize;
		float pixelMeshSIze_Ver = pixcelPerMVer * MeshSize;

		// 도면 내에 들어갈 메쉬 수
		int meshCount_Hor = (int)Math.floor(ImageSize.width / pixelMeshSize_Hor);
		int meshCount_Ver = (int)Math.floor(ImageSize.height / pixelMeshSIze_Ver);

		Point2D.Float startPos = new Point2D.Float(0.0f, 0.0f);
		startPos.x = (float)(ImageSize.width / 2.0 - (meshCount_Hor * pixelMeshSize_Hor) / 2);
		startPos.y = (float)(ImageSize.height / 2.0 - (meshCount_Ver * pixelMeshSIze_Ver) / 2);

		meshSet = new YskMeshSet();
		meshSet.baseFloor = baseFloor;
		meshSet.imageSize = ImageSize;
		meshSet.lstFrequencyName = new ArrayList<String>();

		for (String frequencyName : ssFrequencyName) {
			meshSet.lstFrequencyName.add(frequencyName);
		}

		meshSet.startPos = startPos;
		meshSet.meshSize = MeshSize;
		meshSet.meshHeight = MeshHeight;
		meshSet.meshCount_Ver = meshCount_Ver;
		meshSet.meshCount_Hor = meshCount_Hor;
		meshSet.pixcelMeshSize_Ver = pixelMeshSIze_Ver;
		meshSet.pixcelMeshSize_Hor = pixelMeshSize_Hor;

		return meshSet;

	}

	private final YskAntHashtableSet getAntHashtableSet(
			YskIscommon iscom, YskIsdoc isdoc,
			Floor baseFloor, String TargetFrequencyName,
			String TargetComStandard, IsdocAntennas targetAntSet) {

		YskAntHashtableSet result = new YskAntHashtableSet();
		result.htAnt = new Hashtable<Integer, Antenna>();
		result.htPatnIndex = new Hashtable<Integer, Integer>();
		result.htAtrium = new Hashtable<String, List<Atrium>>();
		result.htPartition = new Hashtable<String, List<Partition>>();
		result.atriumFloorIds = new ArrayList<String>();

		String[] aryAntPatnName = null;
		String[] aryComStandard = null;

		TreeSet<String> tsFrequencyName = null;

		int i = 0;

		int antIndex = 0;
		int patnIndex = 0;

		for (Antenna antenna : targetAntSet.antennas) {

			// 안테나 패턴 정보 작성
			aryAntPatnName = new String[antenna.antennaPowers.size()];
			aryComStandard = new String[antenna.antennaPowers.size()];

			for (i = 0; i < antenna.antennaPowers.size(); i++) {

				AntennaPower antPower = antenna.antennaPowers.get(i);
				aryAntPatnName[i] = antPower.antennaPatternName;

				if (antPower.fivegActive && TargetComStandard.equals("5G")) {
					aryComStandard[i] = CommunicationStandardType.FIVEG.getString();
				} else if (antPower.lteActive && TargetComStandard.equals("LTE")) {
					aryComStandard[i] = CommunicationStandardType.LTE.getString();
				} else if (antPower.wcdmaActive && TargetComStandard.equals("WCDMA")) {
					aryComStandard[i] = CommunicationStandardType.WCDMA.getString();
				} else {
					aryComStandard[i] = "";
				}
			}

			for (patnIndex = 0; patnIndex < aryAntPatnName.length; patnIndex++) {

				if (TargetComStandard.equals(aryComStandard[patnIndex])) {

					tsFrequencyName = getFrequencyNameFromAntPattern(iscom, aryAntPatnName[patnIndex]);

					if (tsFrequencyName != null) {

						if (tsFrequencyName.contains(TargetFrequencyName)) {

							antIndex = result.htAnt.size();
							result.htAnt.put(antIndex, antenna);
							result.htPatnIndex.put(antIndex, patnIndex);

						}

					}

				}

			}

		}

		if (targetAntSet.antennas.size() > 0) {

			Antenna antenna = targetAntSet.antennas.get(targetAntSet.antennas.size() - 1);

			// 안테나와 기준 플루어의 사이의 아트리움 플루어 일람 작성
			if (!baseFloor.floorId.equals(antenna.floorId)) {

				// 기준 플루어와 안테나의 최상층 이외의 플루어는 아트리움은 있지만, 안테나가 없는 경우가 있기 때문에,
				// 기준 플루어 위층부터 최상층까지의 아트리움을 검색
				int indexLower = isdoc.indexOfFloors(baseFloor.floorId) + 1;
				int indexUpper = isdoc.indexOfFloors(antenna.floorId);
				for (i = indexLower; i <= indexUpper; i++) {
					Floor floor = isdoc.findFloor(i);
					result.atriumFloorIds.add(floor.floorId);
				}
				String upperFloorId = result.atriumFloorIds.get(result.atriumFloorIds.size() - 1);
				String lowerFloorId = result.atriumFloorIds.get(0);

				// 플루어마다 아트리움 폴리곤 정보를 취득
				result.htAtrium = getHtAtrium(isdoc, lowerFloorId, upperFloorId);
			}
			result.htPartition = getHtPartition(isdoc, baseFloor.floorId, antenna.floorId);
		}
		return result;
	}

	public final Hashtable<String, List<Atrium>> getHtAtrium(
			YskIsdoc isdoc, String baseFloorId, String upperFloorId) {

		Hashtable<String, List<Atrium>> htAtrium = new Hashtable<String, List<Atrium>>();

		int IndexLower = isdoc.indexOfFloors(baseFloorId);
		int IndexUpper = isdoc.indexOfFloors(upperFloorId);

		String floorId = null;
		Atrium atrium = null;
		List<Atrium> alAtrium = null;

		for (int i = IndexLower; i <= IndexUpper; i++) {

			floorId = isdoc.findFloor(i).floorId;
			alAtrium = new ArrayList<Atrium>();

			for (int a = 0; a < isdoc.atriums.size(); a++) {

				atrium = isdoc.atriums.get(a);

				if (atrium.floorId.equals(floorId)) {
					alAtrium.add(atrium);
				}
			}

			htAtrium.put(floorId, alAtrium);
		}

		return htAtrium;

	}

	public final Hashtable<String, List<Partition>> getHtPartition(
			YskIsdoc isdoc, String baseFloorId,
			String upperFloorId) {

		Hashtable<String, List<Partition>> htObstacle = new Hashtable<String, List<Partition>>();

		int indexBase = isdoc.indexOfFloors(baseFloorId);
		int indexAnt = isdoc.indexOfFloors(upperFloorId);

		String floorId = null;
		Partition partition = null;
		List<Partition> alPartition = null;

		for (int i = indexBase; i <= indexAnt; i++) {

			floorId = isdoc.findFloor(i).floorId;
			alPartition = new ArrayList<Partition>();

			for (int a = 0; a < isdoc.partitions.size(); a++) {

				partition = isdoc.partitions.get(a);

				if (partition.floorId.equals(floorId)) {
					alPartition.add(partition);
				}
			}

			htObstacle.put(floorId, alPartition);

		}

		return htObstacle;

	}

	private final float getFloorHeight(YskIsdoc isdoc, String floorId) {

		Floor floor = isdoc.findFloor(floorId);

		float Result = floor.floorHeight.get(floor.floorHeight.size() - 1);
		return Result;

	}

	private final float getAntHeight_fromBaseFloor(YskIsdoc isdoc, Antenna antenna, String BaseFloorID) {

		float Result = antenna.antennaHeight;

		String AntFloorID = antenna.floorId;

		Floor baseFloor = isdoc.findFloor(BaseFloorID);
		Floor upperFloor = isdoc.findFloor(AntFloorID);

		if ((baseFloor == null) == false && (upperFloor == null) == false) {

			int baseIndex = isdoc.indexOfFloors(baseFloor);
			int upperIndex = isdoc.indexOfFloors(upperFloor);

			Floor floor = null;

			// 안테나가 있는 플루어 높이는 포함하지 않는다.
			for (int i = baseIndex + 1; i <= upperIndex; i++) {
				floor = isdoc.findFloor(i);
				if (floor != null) {
					// 미터 단위
					Result += floor.floorHeight.get(floor.floorHeight.size() - 1);
				}
			}
		}
		return Result;
	}

	private final String getFloorID_fromAntHeightDistance(
			YskIsdoc isdoc, String baseFloorId,
			String antFloorId, List<String> atriumFloorIds,
			float antRelativeHeightM, float targetDistanceM) {

		String result = null;
		float totalDistanceM = 0;

		if (baseFloorId.equals(antFloorId)) {
			result = baseFloorId;
		} else {
			result = baseFloorId;
			// +안테나 높이
			totalDistanceM = antRelativeHeightM;
			if (totalDistanceM > targetDistanceM) {
				result = antFloorId;
			} else {
				String wFloorID = null;
				int IndexMax = atriumFloorIds.indexOf(antFloorId);

				// +하위 플루어 높이 합계（안테나 플루어 높이는 포함하지 않음）
				for (int i = 0; i <= IndexMax - 1; i++) {
					wFloorID = atriumFloorIds.get(i);
					totalDistanceM += getFloorHeight(isdoc, wFloorID);
					if (totalDistanceM > targetDistanceM) {
						result = wFloorID;
						break;
					}
				}
			}
		}
		return result;
	}

	private final Point2D.Float getPixcelLocation_byBaseFloor(
			YskIsdoc isdoc, Point2D.Float currentFloorLocationPixel,
			String currentFloorID, String baseFloorID) {

		Point2D.Float Result = currentFloorLocationPixel;

		Floor currentFloor = isdoc.findFloor(currentFloorID);
		Floor baseFloor = isdoc.findFloor(baseFloorID);

		Point2D.Float axisCurrentPixel = new Point2D.Float();
		Point2D.Float axisBasePixel = new Point2D.Float();

		Point2D.Float axisCurrentOffsetPixel = new Point2D.Float();
		Point2D.Float axisCurrentOffsetM = new Point2D.Float();

		float rotationOffset = 0;

		Point2D.Float axisBaseOffsetM = new Point2D.Float();
		Point2D.Float axisBaseOffsetPixel = new Point2D.Float();

		Point2D.Float pixelLocationBase = new Point2D.Float();

		if ((currentFloor == null) == false && (baseFloor == null) == false) {

			axisCurrentPixel.x = currentFloor.originX;
			axisCurrentPixel.y = currentFloor.originY;
			axisBasePixel.x = baseFloor.originX;
			axisBasePixel.y = baseFloor.originY;

			axisCurrentOffsetPixel.x = currentFloorLocationPixel.x - axisCurrentPixel.x;
			axisCurrentOffsetPixel.y = currentFloorLocationPixel.y - axisCurrentPixel.y;
			axisCurrentOffsetM.x = axisCurrentOffsetPixel.x * currentFloor.scaleX;
			axisCurrentOffsetM.y = axisCurrentOffsetPixel.y * currentFloor.scaleY;

			// 기준플루어의 N방위에의 오차（도）
			rotationOffset = baseFloor.direction - currentFloor.direction;

			// 기준플루어의 축 중심을 N방위에의 오차만큼 회전
			axisBaseOffsetM = Rotation(axisCurrentOffsetM.x, axisCurrentOffsetM.y, rotationOffset);

			// 해상도에서 기준플루어의 축으로부터 픽셀 오프셋 좌표에 변환
			axisBaseOffsetPixel.x = axisBaseOffsetM.x / baseFloor.scaleX;
			axisBaseOffsetPixel.y = axisBaseOffsetM.y / baseFloor.scaleY;

			// 기준플루어의 도면좌표(픽셀)에 변환
			pixelLocationBase.x = axisBasePixel.x + axisBaseOffsetPixel.x;
			pixelLocationBase.y = axisBasePixel.y + axisBaseOffsetPixel.y;

			Result = pixelLocationBase;
		}

		return Result;

	}

	private final Point2D.Float Rotation(double tx, double ty, double deg) {

		double rad;
		rad = deg / 180 * Math.PI;

		Point2D.Float Result = new Point2D.Float();

		Result.x = (float)(tx * Math.cos(rad) - ty * Math.sin(rad));
		Result.y = (float)(tx * Math.sin(rad) + ty * Math.cos(rad));

		return Result;

	}

	private final float getRS_CPICH_Power(
			Antenna antenna, int PatnIndex, String ServiceBand,
			CommunicationStandardType comStandardType,
			CalculationSet calSet,
			float defaultCPIEIRP) {

		float RS_CPICH_Power = defaultCPIEIRP;

		AntennaPower antennaPower = antenna.antennaPowers.get(PatnIndex);

		switch (comStandardType) {
		case FIVEG:
			if (calSet.simulationMode == 2) {
				RS_CPICH_Power = antennaPower.fivegRsPower2;
			} else {
				RS_CPICH_Power = antennaPower.fivegRsPower1;
			}
			break;
		case LTE:
			if (calSet.simulationMode == 2) {
				RS_CPICH_Power = antennaPower.lteRsPower2;
			} else {
				RS_CPICH_Power = antennaPower.lteRsPower1;
			}
			break;
		case WCDMA:
			if (calSet.simulationMode == 2) {
				RS_CPICH_Power = antennaPower.wcdmaCpichPower2;
			} else {
				RS_CPICH_Power = antennaPower.wcdmaCpichPower1;
			}
			break;
		}

		return RS_CPICH_Power;

	}

	private final int getSignalCode(
			Antenna antenna, int PatnIndex,
			CommunicationStandardType comStandardType,
			CalculationSet calSet) {

		int result = -1;
		AntennaPower antennaPower = antenna.antennaPowers.get(PatnIndex);

		switch (comStandardType) {
		case FIVEG:
			if (calSet.simulationMode == 2) {
				if (antennaPower.fivegPci2 != null) {
					result = antennaPower.fivegPci2;
				}
			} else {
				if (antennaPower.fivegPci1 != null) {
					result = antennaPower.fivegPci1;
				}
			}
			break;
		case LTE:
			if (calSet.simulationMode == 2) {
				if (antennaPower.ltePci2 != null) {
					result = antennaPower.ltePci2;
				}
			} else {
				if (antennaPower.ltePci1 != null) {
					result = antennaPower.ltePci1;
				}
			}
			break;
		case WCDMA:
			if (calSet.simulationMode == 2) {
				if (antennaPower.wcdmaPsc2 != null) {
					result = antennaPower.wcdmaPsc2;
				}
			} else {
				if (antennaPower.wcdmaPsc1 != null) {
					result = antennaPower.wcdmaPsc1;
				}
			}
			break;
		}

		return result;

	}

	private final void setTargetAntSet(YskIsdoc isdoc, String floorId, RefObject<IsdocAntennas> targetAntSet) {

		for (int i = 0; i < isdoc.antennas.size(); i++) {

			Antenna ant = isdoc.antennas.get(i);
			if (ant.floorId.equals(floorId)) {
				// 시뮬레이션 대상의 안테나 정보 추가
				targetAntSet.argValue.antennas.add(ant);
			}
		}

		if (isdoc.calSet.isAtrium) {

			int FloorIndex = isdoc.indexOfFloors(floorId);

			if (FloorIndex >= 0 && isdoc.floors.size() - 1 > FloorIndex) {

				// 상위플루어ID 취득
				int UpperIndex = FloorIndex + 1;
				String UpperFloorID = null;

				if (UpperIndex < isdoc.floors.size()) {
					Floor UpperFloor = isdoc.findFloor(UpperIndex);
					UpperFloorID = UpperFloor.floorId;

					// 아트리움 파티션 정보 취득
					Boolean isFoundAtrium = false;
					for (Atrium atrium : isdoc.atriums) {
						if (atrium.floorId.equals(UpperFloorID)) {
							isFoundAtrium = true;
							break;
						}
					}

					if (isFoundAtrium) {
						setTargetAntSet(isdoc, UpperFloorID, targetAntSet);
					}
				}
			}
		}
	}

	private final TreeSet<String> getFrequencyName(YskIscommon iscom, IsdocAntennas isdocAntennas) {
		TreeSet<String> Result = new TreeSet<String>();
		// String[] AryFrequencyName = null;
		if (isdocAntennas.antennas != null) {
			for (Antenna targetAntenna : isdocAntennas.antennas) {
				for (AntennaPower antPower : targetAntenna.antennaPowers) {
					TreeSet<String> tsFreqencyName = getFrequencyNameFromAntPattern(iscom, antPower.antennaPatternName);
					for (String frequencyName : tsFreqencyName) {
						Result.add(frequencyName);
					}
				}
			}
		}

		return Result;
	}

	private final TreeSet<String> getFrequencyNameFromAntPattern(YskIscommon iscom, String AntPatternName) {
		TreeSet<String> Result = new TreeSet<String>();
		AntennaPattern antPatn = iscom.findAntennaPattern(AntPatternName);
		if ((antPatn == null) == false) {
			float fMin = new Float(antPatn.fMin.toString().replace(",", "")).floatValue();
			float fMax = new Float(antPatn.fMax.toString().replace(",", "")).floatValue();
			float frq = 0;
			for (FrequencyService freqService : iscom.frequencyServices) {
				frq = freqService.centerFrequency;
				if (fMin <= frq && frq <= fMax) {
					Result.add(freqService.name);
				}
			}
		}

		return Result;
	}

	private final Hashtable<String, List<Point2D.Float>> getViewPolygon(
			YskIsdoc isdoc, String baseFloorID, float baseFloorHeightM, float meshHeightM,
			String antFloorId, String antId, Point2D.Float antBaseLocation, float antHeightM,
			Hashtable<String, List<Atrium>> hsAtrium, List<String> atriumFloorIds) {

		Hashtable<String, List<Point2D.Float>> htViewPolygon = new Hashtable<String, List<Point2D.Float>>();

		int IndexMax = atriumFloorIds.indexOf(antFloorId);

		String wFloorID = null;
		String partitionId = null;

		List<Atrium> lstAtrium;
		List<Point2D.Float> lstPolygonPoints = new ArrayList<Point2D.Float>();

		Point2D.Float atriumPointPixel = new Point2D.Float();
		Point2D.Float atriumPointBasePixel = new Point2D.Float();

		Point2D.Float PolygonPoint = new Point2D.Float();

		Point2D.Float antOffsetBase = new Point2D.Float();
		float antHeightBase = 0;

		float viewDistanceM = 0;
		float viewScale = 0;

		if (baseFloorID.equals(antFloorId)) {

			viewDistanceM = antHeightM - meshHeightM;

		} else {

			// +안테나 높이
			viewDistanceM = antHeightM;

			// +하위플루어 높이 합산(안테나 플루어 높이는 포함하지 않는다）
			for (int i = 0; i <= IndexMax - 1; i++) {
				wFloorID = atriumFloorIds.get(i);
				viewDistanceM += getFloorHeight(isdoc, wFloorID);
			}

			// +계산 대상의 메쉬 높이로부터 천장까지의 높이
			viewDistanceM += baseFloorHeightM - meshHeightM;

		}

		if (!hsAtrium.isEmpty()) {

			// ViewPolygon 작성(안테나 플루어 높이를 포함한다）
			for (int i = 0; i <= IndexMax; i++) {

				wFloorID = atriumFloorIds.get(i);
				lstAtrium = hsAtrium.get(wFloorID);

				if (i == 0) {
					antHeightBase = antHeightM;
					viewScale = viewDistanceM / antHeightBase;
				} else {
					antHeightBase += getFloorHeight(isdoc, wFloorID);
					viewScale = viewDistanceM / antHeightBase;
				}

				for (Atrium atrium : lstAtrium) {

					partitionId = atrium.atriumId;
					lstPolygonPoints = new ArrayList<Point2D.Float>();

					for (Point p : atrium.points) {

						atriumPointPixel.x = p.px;
						atriumPointPixel.y = p.py;

						atriumPointBasePixel = getPixcelLocation_byBaseFloor(isdoc, atriumPointPixel, wFloorID, baseFloorID);

						antOffsetBase.x = (atriumPointBasePixel.x - antBaseLocation.x) * viewScale;
						antOffsetBase.y = (atriumPointBasePixel.y - antBaseLocation.y) * viewScale;

						PolygonPoint = new Point2D.Float();
						PolygonPoint.x = antBaseLocation.x + antOffsetBase.x;
						PolygonPoint.y = antBaseLocation.y + antOffsetBase.y;

						lstPolygonPoints.add(PolygonPoint);

					}

					htViewPolygon.put(partitionId, lstPolygonPoints);

				}

			}

		}

		return htViewPolygon;

	}

	/**
	 * YskMeshSet을 JSON파일로 출력한다.
	 *
	 * @param simResult YskSimulationResult
	 * @param meshSet YskMeshSet
	 * @throws IOException 예외
	 */
	private void createMeshJsonFile(YskSimulationResult simResult, YskMeshSet meshSet) throws IOException {
		Path path = null;
		File file = null;
		FileWriter fileWriter = null;
		try {
			path = Paths.get(simResult.serviceBandDirPath.toString(), "MESH.json");
			file = new File(path.toString());
			fileWriter = new FileWriter(file);
			ObjectMapper objectMapper = new ObjectMapper();
			fileWriter.write(objectMapper.writeValueAsString(meshSet));
		} finally {
			if (fileWriter != null) {
				fileWriter.close();
			}
		}
	}

	private final void createSimulationMeshFile(
			YskIscommon iscom, YskIsdoc isdoc, YskSimulationResult simResult,
			YskMeshSet meshSet,
			String serviceBand, float f_MHz, String frequencyBand, float bandWidth, CommunicationStandardType comStandardType,
			float powerLoss, float nlosLoss, float bodyLoss, float ueGain, float pfn, float defaultCPIEIRP,
			YskAntHashtableSet antHashtableSet, RefObject<YskProgressInfo> progressInfo) throws IOException {

		Hashtable<String, RfsAntennaPatternSet> hsAntPatn = new Hashtable<String, RfsAntennaPatternSet>();

		Antenna antenna = null;
		String antPatnName = null;

		int patnIndex = 0;
		RfsAntennaPatternSet antPatn = null;
		YskAntCalculationItem ant = new YskAntCalculationItem();
		YskMeshCalculationItem msh = new YskMeshCalculationItem();

		RfsCalculationSet CST = new RfsCalculationSet();

		float OffsetDegree = meshSet.baseFloor.direction;

		float baseFloorHeight = getFloorHeight(isdoc, meshSet.baseFloor.floorId);

		float RSRP = 0;
		float RS_CPICH_Power = 0;

		float TopValue = 0;
		short TopPCI = 0;
		short TopAntNo = 0;

		byte[] Bytes = null;

		ByteBuffer bb;

		RandomAccessFile fs = null;
		RandomAccessFile fs_rsrp = null;
		RandomAccessFile fs_TSC = null;

		Path pathSignalLevelMesh = null;
		Path pathSignalCodeMesh = null;

		switch (comStandardType) {
		case FIVEG:
			pathSignalLevelMesh = Paths.get(simResult.serviceBandDirPath.toString(), "RSRP.mesh");
			pathSignalCodeMesh = Paths.get(simResult.serviceBandDirPath.toString(), "PCI.mesh");
			break;
		case LTE:
			pathSignalLevelMesh = Paths.get(simResult.serviceBandDirPath.toString(), "RSRP.mesh");
			pathSignalCodeMesh = Paths.get(simResult.serviceBandDirPath.toString(), "PCI.mesh");
			break;
		case WCDMA:
			pathSignalLevelMesh = Paths.get(simResult.serviceBandDirPath.toString(), "RSCP.mesh");
			pathSignalCodeMesh = Paths.get(simResult.serviceBandDirPath.toString(), "PSC.mesh");
			break;
		default:
			pathSignalLevelMesh = Paths.get(simResult.serviceBandDirPath.toString(), "RSRP.mesh");
			pathSignalCodeMesh = Paths.get(simResult.serviceBandDirPath.toString(), "PCI.mesh");
			break;
		}

		try {
			// 탑 RSRP의 결과
			fs = new RandomAccessFile(pathSignalLevelMesh.toString(), "rw");
			// 탑 PCI의 결과
			fs_TSC = new RandomAccessFile(pathSignalCodeMesh.toString(), "rw");

			if ((fs == null) == false && (fs_TSC == null) == false) {

				Point2D.Float antFloorLocation = new Point2D.Float();
				String antFloorId = null;
				Point2D.Float baseFloorLocation_Pixel = new Point2D.Float();
				Hashtable<String, List<Point2D.Float>> htViewPolygon = null;

				msh.height = meshSet.meshHeight;

				boolean IsInitialValue = true;

				List<Float> lstRSRP = new ArrayList<Float>(meshSet.meshCount_Ver * meshSet.meshCount_Hor);

				for (int antIndex : antHashtableSet.htAnt.keySet()) {

					antenna = antHashtableSet.htAnt.get(antIndex);

					ant.id = antenna.nodeId;

					antFloorId = antenna.floorId;
					antFloorLocation.x = antenna.px;
					antFloorLocation.y = antenna.py;

					if (!meshSet.baseFloor.floorId.equals(antFloorId)) {
						baseFloorLocation_Pixel = getPixcelLocation_byBaseFloor(isdoc, antFloorLocation, antFloorId, meshSet.baseFloor.floorId);
					} else {
						baseFloorLocation_Pixel = antFloorLocation;
					}

					ant.location = baseFloorLocation_Pixel;
					ant.relativeHeight = antenna.antennaHeight;
					ant.height = getAntHeight_fromBaseFloor(isdoc, antenna, meshSet.baseFloor.floorId);
					ant.azimuth = antenna.devAzimuth + OffsetDegree;
					ant.tiltE = 0; // antenna.devETilt
					ant.tiltM = antenna.devMTilt;
					ant.isHiding = antenna.isHiding;

					patnIndex = antHashtableSet.htPatnIndex.get(antIndex);
					antPatnName = antenna.antennaPowers.get(patnIndex).antennaPatternName;

					antPatn = null;

					if (!DnfStringHelper.isNullOrEmpty(antPatnName) && (iscom.antennaPatterns == null) == false) {

						if (hsAntPatn.containsKey(antPatnName)) {
							antPatn = hsAntPatn.get(antPatnName);
						} else {
							antPatn = new RfsAntennaPatternSet(iscom, antPatnName);
							hsAntPatn.put(antPatnName, antPatn);
						}

					}

					htViewPolygon = getViewPolygon(
							isdoc, meshSet.baseFloor.floorId, baseFloorHeight, msh.height,
							antFloorId, ant.id, ant.location, ant.height,
							antHashtableSet.htAtrium, antHashtableSet.atriumFloorIds);

					RS_CPICH_Power = getRS_CPICH_Power(antenna, patnIndex, serviceBand, comStandardType, isdoc.calSet, defaultCPIEIRP);

					short antNo = Short.parseShort(antenna.yosokuzuAntennaNo);
					short signalCode = (short)getSignalCode(antenna, patnIndex, comStandardType, isdoc.calSet);

					Path filePath_RSRP = null;
					try {
						filePath_RSRP = Paths.get(simResult.pathlossesDirPath.toString(), ant.id + ".mesh");
						// 각 안테나의 RSRP결과
						fs_rsrp = new RandomAccessFile(filePath_RSRP.toString(), "rw");

						if ((fs_rsrp == null) == false) {

							int fm = 0;

							for (int v = 0; v < meshSet.meshCount_Ver; v++) {

								for (int h = 0; h < meshSet.meshCount_Hor; h++) {

									fm = v * meshSet.meshCount_Hor + h;

									msh.id = String.valueOf(fm);
									msh.location.x = (float)(meshSet.startPos.x + meshSet.pixcelMeshSize_Hor * (h + 0.5));
									msh.location.y = (float)(meshSet.startPos.y + meshSet.pixcelMeshSize_Ver * (v + 0.5));

									if (IsInitialValue) {
										TopValue = -Float.MAX_VALUE;
										lstRSRP.add(fm, TopValue);
									} else {
										TopValue = lstRSRP.get(fm);
									}

									// 각 플루어의 아트리움 통과 판정
									boolean IsEnable = checkLineOfSight(antFloorId, antHashtableSet, htViewPolygon, msh);

									if (IsEnable) {

										RSRP = getRSRP_AntToTarget(
												iscom, isdoc, meshSet.baseFloor, meshSet.baseFloor.floorId, antFloorId,
												ant, antPatn, antHashtableSet,
												f_MHz, frequencyBand, powerLoss, nlosLoss, bodyLoss, ueGain, pfn,
												msh, CST, RS_CPICH_Power);

									} else {

										RSRP = TopValue;

									}

									// 탑 RSRP의 결과
									if (TopValue <= RSRP) {

										TopValue = RSRP;
										bb = ByteBuffer.allocate(4);
										Bytes = bb.putFloat(TopValue).array();

										fs.seek(fm * 4); // 4바이트 폭
										fs.write(Bytes, 0, Bytes.length);
										lstRSRP.set(fm, TopValue);

										if (IsEnable) {
											TopAntNo = antNo;
											TopPCI = signalCode;
										} else if (IsInitialValue) {
											TopAntNo = Short.MIN_VALUE;
											TopPCI = Short.MIN_VALUE;
										}

										if (IsEnable || IsInitialValue) {

											// TopAntNo
											bb = ByteBuffer.allocate(2);
											Bytes = bb.putShort(TopAntNo).array();

											fs_TSC.seek(fm * 4);// 2바이트 폭(AntNo)
											fs_TSC.write(Bytes, 0, Bytes.length);

											// TopPCI
											bb = ByteBuffer.allocate(2);
											Bytes = bb.putShort(TopPCI).array();

											fs_TSC.seek(fm * 4 + 2);// +2바이트 폭(PCI)
											fs_TSC.write(Bytes, 0, Bytes.length);

										}

									} else {
										// Stop
									}

									// 각 안테나의 RSRP결과
									bb = ByteBuffer.allocate(4);
									Bytes = bb.putFloat(RSRP).array();

									fs_rsrp.seek(fm * 4);// 4바이트 폭
									fs_rsrp.write(Bytes, 0, Bytes.length);

								}

							}
							IsInitialValue = false;
						}
					} finally {
						if (fs_rsrp != null) {
							fs_rsrp.close();
						}
					}
				}

			}
		} finally {
			if ((fs == null) == false) {
				fs.close();
			}
			if ((fs_TSC == null) == false) {
				fs_TSC.close();
			}
		}
	}

	private final Boolean checkLineOfSight(
			String antFloorId, YskAntHashtableSet antHashtableSet,
			Hashtable<String, List<Point2D.Float>> htViewPolygon,
			YskMeshCalculationItem msh) {

		Boolean result = false;

		int f = antHashtableSet.atriumFloorIds.indexOf(antFloorId);

		if (f > -1) {

			String fId = null;
			List<Atrium> atrium = null;
			String atriumId = null;
			List<Point2D.Float> lstPolyPoint = null;

			for (int g = f; g >= 0; g--) {

				result = false;
				fId = antHashtableSet.atriumFloorIds.get(g);
				atrium = antHashtableSet.htAtrium.get(fId);

				if ((atrium == null) == false) {

					for (int r = 0; r < atrium.size(); r++) {

						atriumId = atrium.get(r).atriumId;
						lstPolyPoint = htViewPolygon.get(atriumId);

						if (Common2d.insideOfPolygon(lstPolyPoint, msh.location)) {
							result = true;
							break;
						}

					}

				}

				if (result == false) {
					break;
				}

			}

		} else {
			result = true;
		}

		return result;

	}

	private final float getRSRP_AntToTarget(
			YskIscommon iscom, YskIsdoc isdoc, Floor floor, String baseFloorId, String antFloorId,
			YskAntCalculationItem ant, RfsAntennaPatternSet antPatn, YskAntHashtableSet antHashtableSet,
			float fMhz, String frequencyBand, float powerLoss, float nlosLoss, float bodyLoss, float ueGain,
			float pfn, YskMeshCalculationItem tgt, RfsCalculationSet cst, float rsCpichPower) {

		float baseDistance = 0; // 안테나 지점으로부터 대상 메쉬 중앙의 저변거리
		float beamDistance = 0; // 안테나 지점으로부터 대상 메쉬 중앙의 빗변거리
		float direction = 0;
		float targetTilt = 0;

		float n = powerLoss + bodyLoss; // N_NLOSLoss는 각 안테나의 은폐한 경우에 적용 'N_PowerLoss
										// + N_NLOSLoss + N_BodyLoss
		float horLoss = 0;
		float verLoss = 0;
		float modelLoss = 0;
		float partitionLoss = 0;
		float totalLoss = 0;

		float rsrp = 0;

		// 저변거리
		baseDistance = getBaseDistance(ant.location.x, ant.location.y, tgt.location.x, tgt.location.y, floor);
		// 빗변거리
		beamDistance = getBeamDistance(ant.location.x, ant.location.y, ant.height, tgt.location.x, tgt.location.y, tgt.height, floor);
		// 방향
		direction = getBeamDirection(ant.location.x, ant.location.y, tgt.location.x, tgt.location.y, floor);
		// 파티션 손실
		partitionLoss = getObstacleLoss(
				iscom, isdoc, baseFloorId, baseDistance, antFloorId, ant.height, ant.relativeHeight,
				ant.location.x, ant.location.y, tgt.location.x, tgt.location.y,
				antHashtableSet.atriumFloorIds, antHashtableSet.htPartition, floor, frequencyBand);

		if ((antPatn == null) == false) {

			cst.src.lon = ant.location.x * floor.scaleX;
			cst.src.lat = ant.location.y * floor.scaleY;
			cst.src.gl = 0; // Floor 높이
			cst.src.height = ant.height;
			cst.src.tiltE = antPatn.rpi.default_E_Tilt; // ANT.Tilt_E
			cst.src.tiltM = ant.tiltM;
			cst.src.azimuth = ant.azimuth;
			cst.src.beam = 0; // 여기서는 특별히 필요하지 않음
			cst.src.frequency = 0; // 여기서는 특별히 필요하지 않음

			cst.sst.api = antPatn.api;
			cst.sst.rpi = antPatn.rpi;

			cst.tgt.lon = tgt.location.x * floor.scaleX;
			cst.tgt.lat = tgt.location.y * floor.scaleY;
			cst.tgt.gl = 0; // Floor 높이
			cst.tgt.height = tgt.height;

			targetTilt = cst.getTargetTilt(baseDistance);

			verLoss = cst.getTargetVerticalLoss(targetTilt);
			horLoss = cst.getTargetHolizontalLoss(direction);

		} else {
			verLoss = 0;
			horLoss = 0;
		}

		if (ant.isHiding) {
			// 은폐
			modelLoss = getLossTotal(fMhz, beamDistance, n + nlosLoss, partitionLoss);
		} else {
			// 노출
			modelLoss = getLossTotal(fMhz, beamDistance, n, partitionLoss);
		}

		totalLoss = modelLoss - (verLoss + horLoss); // 수직감쇠, 수평감쇠는 마이너스 값이기 때문에 꺼낸다.

		if (27000f <= fMhz) {
			rsrp = getRsrp(rsCpichPower, totalLoss, ueGain);
		} else {
			rsrp = getRsrp(rsCpichPower, totalLoss, 0f);
		}

		if (rsrp > rsCpichPower) {
			rsrp = rsCpichPower;
		}

		return rsrp;

	}

	private final float getDistance(float srcValue, float tgtValue, float scaleValue) {

		float result = (tgtValue - srcValue) * scaleValue;
		return result;

	}

	private final float getBaseDistance(float srcX, float srcY, float tgtX, float tgtY, Floor floor) {

		float distanceHor = getDistance(srcX, tgtX, floor.scaleX);
		float DistanceVer = getDistance(srcY, tgtY, floor.scaleY);

		// 안테나 지점으로부터 대상 메쉬 중앙의 저변거리
		float distanceTS = (float)Math.sqrt(Math.pow(distanceHor, 2) + Math.pow(DistanceVer, 2));

		return distanceTS;

	}

	private final float getBeamDistance(float srcX, float srcY, float srcH, float tgtX, float tgtY, float tgtH, Floor floor) {

		float distanceHor = getDistance(srcX, tgtX, floor.scaleX);
		float distanceVer = getDistance(srcY, tgtY, floor.scaleY);

		// 안테나 지점으로부터 대상 메쉬 중앙의 저변거리
		float distanceTS = (float)Math.sqrt(Math.pow(distanceHor, 2) + Math.pow(distanceVer, 2));

		// 계산 대상(Mesh)의 높이로부터 안테나 높이의 거리
		float distanceHS = srcH - tgtH;

		// 안테나 높이로부터 대상 메쉬 중앙의 빗변거리
		float distance = (float)Math.sqrt(Math.pow(distanceTS, 2) + Math.pow(distanceHS, 2));

		return distance;

	}

	private final float getBeamDirection(float srcX, float srcY, float tgtX, float tgtY, Floor floor) {

		float distanceHor = getDistance(srcX, tgtX, floor.scaleX);
		float distanceVer = getDistance(srcY, tgtY, floor.scaleY);

		float direction = (float)((Math.atan2(distanceVer, distanceHor) * (180 / Math.PI) + 90 + 360) % 360);

		return direction;

	}

	private final float getObstacleLoss(
			YskIscommon iscom, YskIsdoc isdoc, String baseFloorId, float baseDistance,
			String antFloorId, float antHeightM, float antRelativeHeightM, float antX, float antY,
			float meshX, float meshY, List<String> atriumFloorIds, Hashtable<String, List<Partition>> htPartition,
			Floor floor, String frequencyBand) {

		float Result = 0;

		List<Partition> lstPartition = null;
		PartitionSetting materialSetting = null;
		MaterialLoss materialLoss = null;

		String materialId = null;
		float partitionLoss = 0;

		Point pA;
		Point pB;

		Point2D.Float partitionPixelA = new Point2D.Float();
		Point2D.Float partitionPixelB = new Point2D.Float();

		Point2D.Float partitionBaseA = new Point2D.Float();
		Point2D.Float partitionBaseB = new Point2D.Float();

		float _X = antX;
		float _Y = antY;
		float spdX = meshX - antX;
		float spdY = meshY - antY;
		float defaultX = -Float.MAX_VALUE;
		float defaultY = -Float.MAX_VALUE;

		Point2D.Float cP = new Point2D.Float();
		Point2D.Float crossPointOffsetM = new Point2D.Float();
		float crossPointDistanceM = 0;

		for (String partitionFloorId : htPartition.keySet()) {

			lstPartition = htPartition.get(partitionFloorId);

			for (Partition partition : lstPartition) {

				partitionLoss = 0;

				materialId = partition.materialId;

				materialSetting = iscom.findPartitionSetting(materialId);
				if ((materialSetting != null) == true) {
					materialLoss = materialSetting.find(frequencyBand);
					if ((materialLoss != null) == true) {
						partitionLoss = materialLoss.loss;
					}
				}

				for (int r = 1; r < partition.points.size(); r++) {

					pA = partition.points.get(r - 1);

					partitionPixelA.x = pA.px;
					partitionPixelA.y = pA.py;
					partitionBaseA = getPixcelLocation_byBaseFloor(isdoc, partitionPixelA, antFloorId, baseFloorId);

					pB = partition.points.get(r);

					partitionPixelB.x = pB.px;
					partitionPixelB.y = pB.py;
					partitionBaseB = getPixcelLocation_byBaseFloor(isdoc, partitionPixelB, antFloorId, baseFloorId);

					cP = Common2d.getCrossPoint(partitionBaseA.x, partitionBaseA.y, partitionBaseB.x, partitionBaseB.y, _X, _Y, spdX, spdY, true, defaultX,
							defaultY);

					if (cP.x != defaultX && cP.y != defaultY) {

						crossPointOffsetM.x = (cP.x - antX) * floor.scaleX;
						crossPointOffsetM.y = (cP.y - antY) * floor.scaleY;

						crossPointDistanceM = (float)Math.sqrt(Math.pow(crossPointOffsetM.x, 2) + Math.pow(crossPointOffsetM.y, 2));

						if (getCrossPointFloorID(isdoc, baseFloorId, antFloorId, atriumFloorIds, baseDistance, antHeightM, antRelativeHeightM,
								crossPointDistanceM).equals(partitionFloorId)) {

							Result += partitionLoss;

						}

					}

				}

			}

		}

		return Result;

	}

	private final String getCrossPointFloorID(
			YskIsdoc isdoc, String baseFloorId, String antFloorId, List<String> atriumFloorIds,
			float baseDistanceM, float antHeightM, float antRelativeHeightM, float clossPointDistanceM) {

		String result = null;

		float CrossPointHeight_m = clossPointDistanceM / baseDistanceM * antHeightM;
		result = getFloorID_fromAntHeightDistance(isdoc, baseFloorId, antFloorId, atriumFloorIds, antRelativeHeightM, CrossPointHeight_m);

		return result;

	}

	private final float getLossTotal(float fMhz, float distanceM, float n, float lfn) {

		// 参考資料：R-REC-P.1238-8-201507-I!!PDF-E.pdf
		// The basic model has the following form
		// Ltotal = L(do) + N log10 (d/do) + Lf  (n)                    dB -1

		// where:
		// N : distance power loss coefficient
		// f : frequency(MHz)
		// d : separation distance(m) between the base station And portable
		// terminal (where d > 1 m)
		// do : reference distance(m) ※基準距離（1m）
		// L(do) : path Loss at do (dB), for a reference distance do at 1 m, And
		// assuming free‑space propagation L(do) = 20 log10 f −28 where f Is in
		// MHz
		// Lf : floor penetration loss factor (dB)
		// n : Number of floors between base station And portable terminal (n ³
		// 0),
		// Lf = 0 dB For n = 0. ※n=0とする

		// 참고 URL：http://www.den-gyo.com/labo/tool/keisan6.html
		// 계산식 - 전파손실（옥내 환경）
		// 감쇠정수 Ltotal = 20logf + Nlogd + Lf(n) −28

		// 파라미터
		// f : 주파수[MHz]
		// N : 전파손실모델 파라미터
		// d : 기지국 단말간 거리[m]
		// Lf : 바닥의 투과 손실[dB]
		// n : 기지국 단말간 바닥수

		// 전파손실모델 파라미터 N
		// 주파수 : 주택 오피스 상업시설
		// 900MHz : 33 20
		// 1.2～1.3GHz : 32 22
		// 1.8～2.0GHz : 28 30 22
		// 4GHz : 28 22
		// 5.2GHz : 31 -
		// 60GHz : 22 17
		// * 값이 주어지지 않으면, 오피스의 파라미터를 준용한다.

		float ldZero = getLossDZero(fMhz);
		float result = (float)(ldZero + n * Math.log10(distanceM) + lfn);

		return result;

	}

	private final float getLossDZero(float fMhz) {

		float loss = (float)(20 * Math.log10(fMhz) - 28);

		return loss;

	}

	private final float getRsrp(float eirp, float loss, float ueGain) {

		float rsrp = eirp - loss + ueGain;

		return rsrp;

	}

	public enum CommunicationStandardType {

		FIVEG("5G"), LTE("LTE"), WCDMA("WCDMA");

		public int getValue() {
			return this.ordinal();
		}

		public static CommunicationStandardType forValue(int value) {
			return values()[value];
		}

		private final String text;

		private CommunicationStandardType(final String text) {
			this.text = text;
		}

		public String getString() {
			return this.text;
		}

		public static CommunicationStandardType fromString(String text) {
			for (CommunicationStandardType b : CommunicationStandardType.values()) {
				if (b.text.equalsIgnoreCase(text)) {
					return b;
				}
			}
			return null;
		}
	}

	private final void createSimulationImageFile(
			YskIscommon iscom, YskSimulationResult simResult, CommunicationStandardType comStandardType, Dimension imgSize, YskMeshSet meshSet)
			throws IOException {

		createImageBestSignalLevel(iscom, simResult, comStandardType, imgSize, meshSet);
		createImageBestSignalCode(iscom, simResult, comStandardType, imgSize, meshSet);

	}

	private final void createImageBestSignalLevel(
			YskIscommon iscom, YskSimulationResult simResult, CommunicationStandardType comStandardType, Dimension imgSize, YskMeshSet meshSet)
			throws IOException {

		BufferedImage img = new BufferedImage(imgSize.width, imgSize.height, BufferedImage.TYPE_INT_ARGB);
		Graphics2D g = (Graphics2D)img.getGraphics();

		Path pathSignalLevelMesh = null;
		Path pathSignalLevelPng = null;

		switch (comStandardType) {
		case FIVEG:
			pathSignalLevelMesh = Paths.get(simResult.serviceBandDirPath.toString(), "RSRP.mesh");
			pathSignalLevelPng = Paths.get(simResult.serviceBandDirPath.toString(), "RSRP.png");
			break;
		case LTE:
			pathSignalLevelMesh = Paths.get(simResult.serviceBandDirPath.toString(), "RSRP.mesh");
			pathSignalLevelPng = Paths.get(simResult.serviceBandDirPath.toString(), "RSRP.png");
			break;
		case WCDMA:
			pathSignalLevelMesh = Paths.get(simResult.serviceBandDirPath.toString(), "RSCP.mesh");
			pathSignalLevelPng = Paths.get(simResult.serviceBandDirPath.toString(), "RSCP.png");
			break;
		default:
			pathSignalLevelMesh = Paths.get(simResult.serviceBandDirPath.toString(), "RSRP.mesh");
			pathSignalLevelPng = Paths.get(simResult.serviceBandDirPath.toString(), "RSRP.png");
			break;
		}

		if (CommonIo.fileExist(pathSignalLevelMesh.toString())) {

			String legendName = "RSRP";
			Legend legend = iscom.findDefaultLegend(legendName);

			Color defaultColor = new Color(
					legend.exceptionColor.get(0),
					legend.exceptionColor.get(1),
					legend.exceptionColor.get(2),
					legend.exceptionColor.get(3) * 255);

			Color clr = new Color(0, 0, 0, 0);

			byte b[] = new byte[4];
			int pos = 0;
			int off = 0;
			int len = b.length;

			int stepBytes = 4;

			int h = 0;
			int v = 0;

			int fm = 0;

			float x = 0;
			float y = 0;
			float width = 0;
			float height = 0;

			Float value;

			RandomAccessFile raf = null;

			try {
				// bestRSRP의 결과
				raf = new RandomAccessFile(pathSignalLevelMesh.toString(), "r");

				if (raf != null) {

					width = meshSet.pixcelMeshSize_Hor;
					height = meshSet.pixcelMeshSize_Ver;

					while (raf.getFilePointer() < raf.length()) {

						raf.seek(pos);
						raf.read(b, off, len);

						ByteBuffer buffer = ByteBuffer.wrap(b);
						value = buffer.getFloat();

						clr = RfsLegend.GetColor(legend, Float.toString(value), defaultColor);

						fm = pos / stepBytes;
						v = fm / meshSet.meshCount_Hor;
						h = fm % meshSet.meshCount_Hor;

						x = (float)(meshSet.startPos.x + meshSet.pixcelMeshSize_Hor * h);
						y = (float)(meshSet.startPos.y + meshSet.pixcelMeshSize_Ver * v);

						Rectangle2D.Float square = new Rectangle2D.Float(x, y, width, height);

						g.setColor(clr);
						g.fill(square);

						pos += stepBytes;

					}
				}
			} finally {
				if (raf != null) {
					raf.close();
				}
			}
		}

		g.dispose();

		ImageIO.write(img, "png", new File(pathSignalLevelPng.toString()));
		img = null;

	}

	private final void createImageBestSignalCode(
			YskIscommon iscom, YskSimulationResult simResult, CommunicationStandardType comStandardType, Dimension imgSize, YskMeshSet meshSet)
			throws IOException {

		BufferedImage img = new BufferedImage(imgSize.width, imgSize.height, BufferedImage.TYPE_INT_ARGB);
		Graphics2D g = (Graphics2D)img.getGraphics();

		Path pathSignalCodeMesh = null;
		Path pathSignalCodePng = null;

		switch (comStandardType) {
		case FIVEG:
			pathSignalCodeMesh = Paths.get(simResult.serviceBandDirPath.toString(), "PCI.mesh");
			pathSignalCodePng = Paths.get(simResult.serviceBandDirPath.toString(), "PCI.png");
			break;
		case LTE:
			pathSignalCodeMesh = Paths.get(simResult.serviceBandDirPath.toString(), "PCI.mesh");
			pathSignalCodePng = Paths.get(simResult.serviceBandDirPath.toString(), "PCI.png");
			break;
		case WCDMA:
			pathSignalCodeMesh = Paths.get(simResult.serviceBandDirPath.toString(), "PSC.mesh");
			pathSignalCodePng = Paths.get(simResult.serviceBandDirPath.toString(), "PSC.png");
			break;
		default:
			pathSignalCodeMesh = Paths.get(simResult.serviceBandDirPath.toString(), "PCI.mesh");
			pathSignalCodePng = Paths.get(simResult.serviceBandDirPath.toString(), "PCI.png");
			break;
		}

		if (CommonIo.fileExist(pathSignalCodeMesh.toString())) {

			String legendName = "PCI";
			Legend legend = iscom.findDefaultLegend(legendName);

			Color defaultColor = new Color(
					legend.exceptionColor.get(0),
					legend.exceptionColor.get(1),
					legend.exceptionColor.get(2),
					legend.exceptionColor.get(3) * 255);

			Color clr = new Color(0, 0, 0, 0);

			byte b[] = new byte[2];
			int pos = 0;
			int off = 0;
			int len = b.length;

			int stepBytes = 4;

			int h = 0;
			int v = 0;

			int fm = 0;

			float x = 0;
			float y = 0;
			float width = 0;
			float height = 0;

			Short value;

			RandomAccessFile raf = null;

			try {
				// bestRSRP의 결과
				raf = new RandomAccessFile(pathSignalCodeMesh.toString(), "r");

				if (raf != null) {

					width = meshSet.pixcelMeshSize_Hor;
					height = meshSet.pixcelMeshSize_Ver;

					while (raf.getFilePointer() < raf.length()) {

						raf.seek(pos + 2);
						raf.read(b, off, len);

						ByteBuffer buffer = ByteBuffer.wrap(b);
						value = buffer.getShort(); // DfnBitConverter.toInt16(b,
													// 0);

						clr = RfsLegend.GetColor(legend, Short.toString(value), defaultColor);

						fm = pos / stepBytes;
						v = fm / meshSet.meshCount_Hor;
						h = fm % meshSet.meshCount_Hor;

						x = (float)(meshSet.startPos.x + meshSet.pixcelMeshSize_Hor * h);
						y = (float)(meshSet.startPos.y + meshSet.pixcelMeshSize_Ver * v);

						Rectangle2D.Float square = new Rectangle2D.Float(x, y, width, height);

						g.setColor(clr);
						g.fill(square);

						pos += stepBytes;

					}
				}
			} finally {
				if (raf != null) {
					raf.close();
				}
			}
		}

		g.dispose();

		ImageIO.write(img, "png", new File(pathSignalCodePng.toString()));
		img = null;

	}

}
