/**
 * Copyright (C) ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.service;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Timestamp;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;

import jp.co.[company_name].[main_system_name].is.config.MessageConst;
import jp.co.[company_name].[main_system_name].is.entity.Antenna;
import jp.co.[company_name].[main_system_name].is.entity.Atrium;
import jp.co.[company_name].[main_system_name].is.entity.DialogSettings;
import jp.co.[company_name].[main_system_name].is.entity.Floor;
import jp.co.[company_name].[main_system_name].is.entity.FloorImage;
import jp.co.[company_name].[main_system_name].is.entity.IscommonAntennaPatterns;
import jp.co.[company_name].[main_system_name].is.entity.IscommonDefaultLegends;
import jp.co.[company_name].[main_system_name].is.entity.IscommonFrequencyServices;
import jp.co.[company_name].[main_system_name].is.entity.IscommonPartitionSettings;
import jp.co.[company_name].[main_system_name].is.entity.IsdocAntennas;
import jp.co.[company_name].[main_system_name].is.entity.IsdocAtriums;
import jp.co.[company_name].[main_system_name].is.entity.IsdocDialogSettings;
import jp.co.[company_name].[main_system_name].is.entity.IsdocFloorImages;
import jp.co.[company_name].[main_system_name].is.entity.IsdocFloors;
import jp.co.[company_name].[main_system_name].is.entity.IsdocPartitions;
import jp.co.[company_name].[main_system_name].is.entity.Partition;
import jp.co.[company_name].[main_system_name].is.entity.TbHisIsTaskListEntity;
import jp.co.[company_name].[main_system_name].is.logic.CommonIo;
import jp.co.[company_name].[main_system_name].is.logic.JsonConverter;
import jp.co.[company_name].[main_system_name].is.logic.YskIscommon;
import jp.co.[company_name].[main_system_name].is.logic.YskIscommonLoader;
import jp.co.[company_name].[main_system_name].is.logic.YskIsdoc;
import jp.co.[company_name].[main_system_name].is.logic.YskSimulation;
import jp.co.[company_name].[main_system_name].is.logic.YskSimulationResult;
import jp.co.[company_name].[main_system_name].is.logic.YskSimulationStatus;
import jp.co.[company_name].[main_system_name].is.mapper.YskSimulationMapper;
import jp.co.[company_name].[main_system_name].is.repository.TbHisIsTaskListRepository;
import jp.co.[company_name].[main_system_name].model.Message;
import jp.co.[company_name].[main_system_name].model.WebApiResponse;

/**
 * 예측도 시뮬레이션 서비스 클래스
 *
 * @author [author]
 * @version [version] [update_date]
 *
 */
@Service
public class YskSimulationService {

	/** 로그출력 */
	private static final Logger log = LoggerFactory.getLogger(YskSimulationService.class);

	@Autowired
	YskSimulation yskSimulation;

	/** 시뮬레이션용 IsCommon 정보 로더 */
	@Autowired
	YskIscommonLoader yskIscommonLoader;

	@Autowired
	YskSimulationMapper yskSimulationMapper;

	@Autowired
	private Environment env;

	/** 태스크 리스트(tb_his_is_task_list) 레포지토리 */
	@Autowired
	private TbHisIsTaskListRepository tbHisIsTaskListRepository;

	/**
	 * 시뮬레이션 커맨드를 실행한다.
	 *
	 * @param specId 제원번호
	 * @param command 시뮬레이션 커맨드
	 * @param userId 유저ID
	 * @param siteId 사이트ID
	 * @return WEB-API의 레스폰스
	 */
	public WebApiResponse<Object> runCommand(String specId, String command, String userId, String siteId) {
		TbHisIsTaskListEntity tbHisIsTaskListEntity = new TbHisIsTaskListEntity();

		if (!"STOP".equals(command)) {
			Timestamp beginTime = new Timestamp(System.currentTimeMillis());
			tbHisIsTaskListEntity.setSpecId(specId);
			tbHisIsTaskListEntity.setSiteId(siteId);
			tbHisIsTaskListEntity.setBeginTime(beginTime);
			tbHisIsTaskListEntity.setTaskName("予測図 / シミュレーション");
			tbHisIsTaskListEntity.setCreateUser(userId);
			tbHisIsTaskListEntity.setUpdateUser(userId);

			tbHisIsTaskListRepository.insert(tbHisIsTaskListEntity);
		}

		WebApiResponse<Object> response = new WebApiResponse<>();
		Message msg = null;

		YskSimulationStatus simStatus = new YskSimulationStatus();
		simStatus.yskSimulationMapper = yskSimulationMapper;
		simStatus.info.specId = specId;
		simStatus.info.command = command;
		simStatus.info.updateUser = userId;
		simStatus.info.status = "WAIT";
		simStatus.info.result = "";
		simStatus.info.progress = 0;

		simStatus.updateSimulationCommand(simStatus.info);
		simStatus.updateSimulationStatus(simStatus.info);
		simStatus.updateSimulationResult(simStatus.info);
		simStatus.updateSimulationProgress(simStatus.info);

		// 시뮬레이션용 IsCommon정보를 로드한다.
		YskIscommon iscommon = yskIscommonLoader.getYskIscommon();
		// 시뮬레이션용 IsDoc오브젝트를 생성한다.
		YskIsdoc isdoc = new YskIsdoc();

		try {
			if (command.equals("DEBUG") || command.equals("START")) {

				Boolean isCreateDirectory = true;
				YskSimulationResult simResult = new YskSimulationResult();

				Path isdocPath = Paths.get(env.getProperty("nasDirectory"));
				simResult.setSpecIdDirPath(isdocPath.toString(), specId, isCreateDirectory);

				Path floorImagePath = Paths.get(env.getProperty("floorImageDirectory"));
				simResult.setFloorImageDirPath(simResult.specIdDirPath.toString(), floorImagePath.toString(), isCreateDirectory);

				String json;

				switch (command) {
				case "DEBUG":

					String filePath;

					// Iscommon---------------------------------------------------------------------------------------

					// (테스트용) 안테나패턴 일람
					filePath = Paths.get(simResult.specIdDirPath.toString(), "iscommonAntennaPatterns.json").toString();
					json = JsonConverter.wrappingJson("antennaPatterns", CommonIo.readAllText(filePath));
					iscommon.iscomAntennPatterns = (IscommonAntennaPatterns)JsonConverter.json2Class(json, IscommonAntennaPatterns.class);

					// (테스트용) 전국전파 일람
					filePath = Paths.get(simResult.specIdDirPath.toString(), "iscommonFrequencyServices.json").toString();
					json = JsonConverter.wrappingJson("frequencyServices", CommonIo.readAllText(filePath));
					iscommon.iscomFrequencyServices = (IscommonFrequencyServices)JsonConverter.json2Class(json, IscommonFrequencyServices.class);

					// (테스트용) 레전드 설정 일람
					filePath = Paths.get(simResult.specIdDirPath.toString(), "IscommonDefaultLegends.json").toString();
					json = JsonConverter.wrappingJson("defaultLegends", CommonIo.readAllText(filePath));
					iscommon.iscomDefaultLegends = (IscommonDefaultLegends)JsonConverter.json2Class(json, IscommonDefaultLegends.class);

					// (테스트용) 파티션 설정 일람
					filePath = Paths.get(simResult.specIdDirPath.toString(), "iscommonPartitionSettings.json").toString();
					json = JsonConverter.wrappingJson("partitionSettings", CommonIo.readAllText(filePath));
					iscommon.iscomPartitionSettings = (IscommonPartitionSettings)JsonConverter.json2Class(json, IscommonPartitionSettings.class);

					// Isdoc---------------------------------------------------------------------------------------

					// (테스트용) 시뮬레이션 설정
					filePath = Paths.get(simResult.specIdDirPath.toString(), "isdocDialogSettings.json").toString();
					json = JsonConverter.wrappingJson("dialogSettings", CommonIo.readAllText(filePath));
					isdoc.isdocDialogSettings = (IsdocDialogSettings)JsonConverter.json2Class(json, IsdocDialogSettings.class);

					// (테스트용) 상세 안테나 설정
					filePath = Paths.get(simResult.specIdDirPath.toString(), "isdocAntennas.json").toString();
					json = JsonConverter.wrappingJson("antennas", CommonIo.readAllText(filePath));
					isdoc.isdocAntennas = (IsdocAntennas)JsonConverter.json2Class(json, IsdocAntennas.class);

					// (테스트용) 플루어 설정
					filePath = Paths.get(simResult.specIdDirPath.toString(), "isdocFloors.json").toString();
					json = JsonConverter.wrappingJson("floors", CommonIo.readAllText(filePath));
					isdoc.isdocFloors = (IsdocFloors)JsonConverter.json2Class(json, IsdocFloors.class);

					// (테스트용) 플루어 도면 설정
					filePath = Paths.get(simResult.specIdDirPath.toString(), "isdocFloorImages.json").toString(); // "\\isdocFloorImages.json";
					json = JsonConverter.wrappingJson("floorImages", CommonIo.readAllText(filePath));
					isdoc.isdocFloorImages = (IsdocFloorImages)JsonConverter.json2Class(json, IsdocFloorImages.class);

					// (테스트용) 아트리움 설정
					filePath = Paths.get(simResult.specIdDirPath.toString(), "isdocAtriums.json").toString();
					json = JsonConverter.wrappingJson("atriums", CommonIo.readAllText(filePath));
					isdoc.isdocAtriums = (IsdocAtriums)JsonConverter.json2Class(json, IsdocAtriums.class);

					// (테스트용) 파티션 설정
					filePath = Paths.get(simResult.specIdDirPath.toString(), "isdocPartitions.json").toString();
					json = JsonConverter.wrappingJson("partitions", CommonIo.readAllText(filePath));
					isdoc.isdocPartitions = (IsdocPartitions)JsonConverter.json2Class(json, IsdocPartitions.class);

					// ---------------------------------------------------------------------------------------

					break;

				case "START":
					// Isdoc---------------------------------------------------------------------------------------
					ObjectMapper mapper = new ObjectMapper();

					// 시뮬레이션 설정
					json = selectIsdocDialogSettings(specId);
					if (isEmpty(json)) {
						isdoc.isdocDialogSettings = null;
					} else {
						DialogSettings dialogSettings = mapper.readValue(json, DialogSettings.class);
						// 내림차순으로 저장되어있는 플루어 순서를 오름차순으로 돌린다
						Collections.reverse(dialogSettings.calculationSet.targetFloorIds);
						isdoc.isdocDialogSettings = new IsdocDialogSettings();
						isdoc.isdocDialogSettings.dialogSettings = dialogSettings;
					}

					// 상세 안테나 설정
					json = selectIsdocAntennas(specId);

					if (isEmpty(json)) {
						isdoc.isdocAntennas = null;
					} else {
						List<Antenna> listAntenna = Arrays.asList(mapper.readValue(json, Antenna[].class));
						IsdocAntennas isdocAntennas = new IsdocAntennas();
						isdocAntennas.antennas = listAntenna;
						isdoc.isdocAntennas = isdocAntennas;
					}

					// 풀루어 설정
					json = selectIsdocFloors(specId);

					if (isEmpty(json)) {
						isdoc.isdocFloors = null;
					} else {
						List<Floor> listFloor = Arrays.asList(mapper.readValue(json, Floor[].class));
						// 降順で格納されているフロア順序を昇順に戻す
						Collections.reverse(listFloor);
						IsdocFloors isdocFloors = new IsdocFloors();
						isdocFloors.floors = listFloor;
						isdoc.isdocFloors = isdocFloors;
					}

					// 플루어 이미지 설정
					json = selectIsdocFloorImages(specId);
					if (isEmpty(json)) {
						isdoc.isdocFloorImages = null;
					} else {
						List<FloorImage> listFloorImage = Arrays.asList(mapper.readValue(json, FloorImage[].class));
						IsdocFloorImages isdocFloorImages = new IsdocFloorImages();
						isdocFloorImages.floorImages = listFloorImage;
						isdoc.isdocFloorImages = isdocFloorImages;
					}

					// 아트리움 설정
					json = selectIsdocAtriums(specId);

					if (isEmpty(json)) {
						isdoc.isdocAtriums = null;
					} else {
						List<Atrium> listAtrium = Arrays.asList(mapper.readValue(json, Atrium[].class));
						IsdocAtriums isdocAtriums = new IsdocAtriums();
						isdocAtriums.atriums = listAtrium;
						isdoc.isdocAtriums = isdocAtriums;
					}

					// 파티션 설정
					json = selectIsdocPartitions(specId);

					if (isEmpty(json)) {
						isdoc.isdocPartitions = null;
					} else {

						List<Partition> listPartition = Arrays.asList(mapper.readValue(json, Partition[].class));
						IsdocPartitions isdocPartitions = new IsdocPartitions();
						isdocPartitions.partitions = listPartition;
						isdoc.isdocPartitions = isdocPartitions;
					}

					// ---------------------------------------------------------------------------------------

					break;

				default:
					break;
				}

				isdoc.dialogSettings = isdoc.isdocDialogSettings.dialogSettings;
				isdoc.antennas = isdoc.isdocAntennas.antennas;
				isdoc.floors = isdoc.isdocFloors.floors;
				isdoc.floorImages = isdoc.isdocFloorImages.floorImages;
				isdoc.atriums = isdoc.isdocAtriums.atriums;
				isdoc.partitions = isdoc.isdocPartitions.partitions;

				isdoc.calSet = isdoc.dialogSettings.calculationSet;

				yskSimulation.doWork(specId, iscommon, isdoc, simResult, simStatus);
				msg = new Message(MessageConst.MSG_S_IS0000);
				response.addMessage(msg);
				response.setResponseBody("End");
			}

			if ("STOP".equals(command) && simStatus.info.result != null && simStatus.info.result.isEmpty()) {
				simStatus.info.result = "USER_STOP";
			}
		} catch (Exception e) {
			simStatus.info.result = "FAILURE";

			msg = new Message(MessageConst.MSG_C_IS0001, e.getMessage());
			response.addMessage(msg);
			log.warn(msg.getMessage(), e);
		} finally {
			// DB의 시뮬레이션 결과 갱신
			simStatus.updateSimulationResult(simStatus.info);

			// DB의 시뮬레이션 스테이터스 갱신
			simStatus.info.status = "IDLE";
			simStatus.updateSimulationStatus(simStatus.info);

			// DB의 시뮬레이션 커맨드 갱신
			simStatus.info.command = "STOP";
			simStatus.updateSimulationCommand(simStatus.info);

			if (!"STOP".equals(command)) {
				Timestamp endTime = new Timestamp(System.currentTimeMillis());
				tbHisIsTaskListEntity.setEndTime(endTime);
				tbHisIsTaskListEntity.setDescription(getTaskDescription(isdoc, simStatus));

				tbHisIsTaskListRepository.update(tbHisIsTaskListEntity);
			}
		}

		return response;
	}

	@Transactional
	public String selectIsdocDialogSettings(String specId) {
		return yskSimulationMapper.selectIsdocDialogSettings(specId);
	};

	@Transactional
	public String selectIsdocAntennas(String specId) {
		return yskSimulationMapper.selectIsdocAntennas(specId);
	};

	@Transactional
	public String selectIsdocFloors(String specId) {
		return yskSimulationMapper.selectIsdocFloors(specId);
	};

	@Transactional
	public String selectIsdocFloorImages(String specId) {
		return yskSimulationMapper.selectIsdocFloorImages(specId);
	};

	@Transactional
	public String selectIsdocAtriums(String specId) {
		return yskSimulationMapper.selectIsdocAtriums(specId);
	};

	@Transactional
	public String selectIsdocPartitions(String specId) {
		return yskSimulationMapper.selectIsdocPartitions(specId);
	};

	private boolean isEmpty(String strPara) {

		if (strPara == null || "".equals(strPara)) {
			return true;
		}

		return false;

	}

	/**
	 * 태스크 리스트 상세, 설명을 취득한다.
	 *
	 * @param isdoc Isdoc
	 * @param simStatus YskSimulationStatus
	 * @return 태스크 리스트 상세, 설명
	 */
	private String getTaskDescription(YskIsdoc isdoc, YskSimulationStatus simStatus) {
		StringBuilder taskDescription = new StringBuilder("予測図のシミュレーション：");

		int simulationMode = isdoc.calSet.simulationMode.intValue();
		if (simulationMode == 1) {
			taskDescription.append("一次設計");
		} else if (simulationMode == 2) {
			taskDescription.append("詳細設計");
		}

		taskDescription.append("(");

		String result = simStatus.info.result;
		if ("SUCCESS".equals(result)) {
			taskDescription.append("成功");
		} else if ("FAILURE".equals(result)) {
			taskDescription.append("失敗");
		} else if ("USER_STOP".equals(result)) {
			taskDescription.append("ユーザー停止");
		}

		taskDescription.append(")");

		return taskDescription.toString();
	}

}
