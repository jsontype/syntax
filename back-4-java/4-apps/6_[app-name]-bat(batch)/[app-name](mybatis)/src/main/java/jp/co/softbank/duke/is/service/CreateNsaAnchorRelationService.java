/**
 * Copyright (C) ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.service;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileFilter;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.io.RandomAccessFile;
import java.io.Writer;
import java.math.BigDecimal;
import java.nio.ByteBuffer;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Timestamp;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Date;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.SortedMap;
import java.util.TreeMap;
import java.util.stream.Collectors;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.filefilter.RegexFileFilter;
import org.apache.commons.lang3.time.DateFormatUtils;
import org.apache.commons.lang3.tuple.Pair;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import jp.co.[company_name].[main_system_name].is.config.MessageConst;
import jp.co.[company_name].[main_system_name].is.entity.TbHisIsTaskListEntity;
import jp.co.[company_name].[main_system_name].is.entity.YskMeshSet;
import jp.co.[company_name].[main_system_name].is.model.Mesh;
import jp.co.[company_name].[main_system_name].is.model.NsaAnchorRelationDatas;
import jp.co.[company_name].[main_system_name].is.model.SimulationPath;
import jp.co.[company_name].[main_system_name].is.repository.TbHisIsTaskListRepository;
import jp.co.[company_name].[main_system_name].model.Message;
import jp.co.[company_name].[main_system_name].model.WebApiResponse;

/**
 * NSA Anchor Relation 작성 서비스 클래스
 * <ul>
 * <li>NSA
 * <ul>
 * <li>Non-Standalone</li>
 * </ul>
 * </li>
 * </ul>
 *
 * @author [author]
 * @version [version] [update_date]
 */
@Service
public class CreateNsaAnchorRelationService {
	/** 로그출력 */
	private static final Logger log = LoggerFactory.getLogger(CreateNsaAnchorRelationService.class);

	/** NSA */
	private static final String NSA = "NSA";

	/** Anchor */
	private static final String ANCHOR = "Anchor";

	/** 비Anchor */
	private static final String NON_ANCHOR = "非Anchor";

	/** simulation1 */
	private static final String SIMULATION1 = "simulation1";

	/** simulation2 */
	private static final String SIMULATION2 = "simulation2";

	/** 일차설계 */
	private static final String PRIMARY_DESIGN = "一次設計";

	/** 상세설계 */
	private static final String DETAIL_DESIGN = "詳細設計";

	/** 시뮬레이션 디렉토리 Path */
	private static final String SIMULATION_PATH = "simulation";

	/** 메쉬 정보 JSON 파일명 */
	private static final String MESH_JSON_FILE = "MESH.json";

	/** PCI, PSC 메쉬 파일명 */
	private static final String PCI_PSC_MESH_FILE = "^[PCI[PSC]].+?\\.mesh$";

	/** RSRP, RSCP 메쉬 파일명 */
	private static final String RSRP_RSCP_MESH_FILE = "^[RSRP[RSCP]].+?\\.mesh$";

	/** CSV 파일 헤더 */
	private static final String[] CSV_HEADER = { "設計区分", "移動元種類", "移動元周波数", "移動元PCI", "移動先種類", "移動先周波数", "移動先PCI", "重複メッシュ数", "全体メッシュ数", "比率(%)", };

	/** 환경설정 프로퍼티 */
	@Autowired
	private Environment env;

	/** 태스크 리스트(tb_his_is_task_list) 레포지토리 */
	@Autowired
	private TbHisIsTaskListRepository tbHisIsTaskListRepository;

	/**
	 * NSA Anchor Relation를 작성한다.
	 *
	 * @param params NSA Anchor Relation 작성정보
	 * @param userId 유저ID
	 * @return WEB-API의 레스폰스
	 */
	public WebApiResponse<Object> createNsaAnchorRelation(Object params, String userId) {
		WebApiResponse<Object> response = new WebApiResponse<>();
		Message msg = null;

		TbHisIsTaskListEntity tbHisIsTaskListEntity = new TbHisIsTaskListEntity();
		Timestamp beginTime = new Timestamp(System.currentTimeMillis());
		tbHisIsTaskListEntity.setBeginTime(beginTime);
		tbHisIsTaskListEntity.setTaskName("予測図 / NSA Anchor Relation");
		tbHisIsTaskListEntity.setCreateUser(userId);
		tbHisIsTaskListEntity.setUpdateUser(userId);

		String specId = null;

		try {
			specId = getValueByKey(params, "specId");
			tbHisIsTaskListEntity.setSpecId(specId);
			tbHisIsTaskListEntity.setOrderId(getValueByKey(params, "orderId"));
			tbHisIsTaskListEntity.setSiteId(getValueByKey(params, "siteId"));

			tbHisIsTaskListRepository.insert(tbHisIsTaskListEntity);

			List<NsaAnchorRelationDatas> nsaDatasList = getNsaAnchorRelationDatas(params);
			List<Pair<NsaAnchorRelationDatas, NsaAnchorRelationDatas>> nsaDatasPairList = getNsaAnchorRelationDatasPairList(nsaDatasList);

			List<SimulationPath> simulationPathList = getSimulationPathList(specId);
			Map<String, List<SimulationPath>> floorSimulationPathMap = simulationPathList.stream()
					.collect(Collectors.groupingBy(s -> (s.getSimulation() + s.getFloor())));
			SortedMap<String, List<SimulationPath>> sortedFloorSimulationPathMap = new TreeMap<String, List<SimulationPath>>(floorSimulationPathMap);

			if (!nsaDatasPairList.isEmpty() && !simulationPathList.isEmpty()) {
				List<List<String>> csvStringList = new ArrayList<List<String>>();

				DecimalFormat df = new DecimalFormat("0.0");

				for (Pair<NsaAnchorRelationDatas, NsaAnchorRelationDatas> nsaDatasPair : nsaDatasPairList) {
					NsaAnchorRelationDatas fromNsaDatas = nsaDatasPair.getLeft();
					NsaAnchorRelationDatas toNsaDatas = nsaDatasPair.getRight();

					List<Mesh> fromMeshList = new ArrayList<Mesh>();
					List<Mesh> toMeshList = new ArrayList<Mesh>();

					for (String simulationFloor : sortedFloorSimulationPathMap.keySet()) {
						List<SimulationPath> floorSimulationPathList = sortedFloorSimulationPathMap.get(simulationFloor);

						for (SimulationPath simulationPath : floorSimulationPathList) {
							if (fromNsaDatas.getFrequencyService().equals(simulationPath.getFrequencyService())) {
								fromMeshList.addAll(getMeshList(fromNsaDatas, simulationPath));
							}

							if (toNsaDatas.getFrequencyService().equals(simulationPath.getFrequencyService())) {
								toMeshList.addAll(getMeshList(toNsaDatas, simulationPath));
							}
						}
					}

					Map<String, List<Mesh>> fromMeshGroupingBySimulationList = fromMeshList.stream()
							.collect(Collectors.groupingBy(x -> x.getSimulationPath().getSimulation()));
					Map<String, List<Mesh>> toMeshGroupingBySimulationList = toMeshList.stream()
							.collect(Collectors.groupingBy(x -> x.getSimulationPath().getSimulation()));

					csvStringList.addAll(getCsvStringList(fromMeshGroupingBySimulationList.get(SIMULATION1), toMeshGroupingBySimulationList.get(SIMULATION1),
							fromNsaDatas, toNsaDatas, df));
					csvStringList.addAll(getCsvStringList(fromMeshGroupingBySimulationList.get(SIMULATION2), toMeshGroupingBySimulationList.get(SIMULATION2),
							fromNsaDatas, toNsaDatas, df));
				}

				StringBuilder path = new StringBuilder(env.getProperty("nasDirectory"));
				path.append("/");
				path.append(specId);
				path.append("/");
				path.append(env.getProperty("csvDirectory"));
				path.append("/");

				File csvPath = new File(path.toString());

				if (!csvPath.exists()) {
					csvPath.mkdirs();
				}

				path.append("nsa_anchor_relation_");
				path.append(DateFormatUtils.format(new Date(), "yyyyMMdd_HHmmss"));
				path.append(".csv");

				File csvFile = new File(path.toString());

				Writer writer = null;
				BufferedWriter bufferedWriter = null;
				try {
					writer = new OutputStreamWriter(new FileOutputStream(csvFile), StandardCharsets.UTF_8);
					bufferedWriter = new BufferedWriter(writer);
					bufferedWriter.write('\uFEFF');
					bufferedWriter.write(getCsvString(csvStringList));
				} finally {
					if (bufferedWriter != null) {
						bufferedWriter.close();
					}
					if (writer != null) {
						writer.close();
					}
				}

				String fileName = csvFile.getName();

				tbHisIsTaskListEntity.setDescription("予測図のNSA Anchor Relation計算：");
				tbHisIsTaskListEntity.setFileName(fileName);

				StringBuilder url = new StringBuilder("/csv?spec-id=");
				url.append(specId);
				url.append("&file-name=");
				url.append(fileName);

				tbHisIsTaskListEntity.setUrl(url.toString());

				msg = new Message(MessageConst.MSG_S_IS0000);
			} else {
				List<Message> messages = new ArrayList<Message>();

				Message msg1 = new Message(MessageConst.MSG_W_IS0009, "NSA Anchor Relation");
				messages.add(msg1);
				log.warn(msg1.getMessage());

				response.setMessages(messages);
			}
		} catch (Exception e) {
			msg = new Message(MessageConst.MSG_C_IS0000, e.getMessage());
			log.warn(msg.getMessage(), e);

			tbHisIsTaskListEntity.setDescription("予測図のNSA Anchor Relation計算(失敗)");
		} finally {
			Timestamp endTime = new Timestamp(System.currentTimeMillis());
			tbHisIsTaskListEntity.setEndTime(endTime);

			tbHisIsTaskListRepository.update(tbHisIsTaskListEntity);
		}

		if (msg != null) {
			response.addMessage(msg);
		}

		return response;
	}

	/**
	 * NSA Anchor Relation 작성정보로부터 키 문자열에 해당하는 밸류를 취득한다.
	 * <ul>
	 * <li>제원번호
	 * <ul>
	 * <li>스펙Id</li>
	 * </ul>
	 * </li>
	 * <li>오더ID
	 * <ul>
	 * <li>orderId</li>
	 * </ul>
	 * </li>
	 * <li>사이트ID
	 * <ul>
	 * <li>siteId</li>
	 * </ul>
	 * </li>
	 * </ul>
	 *
	 * @param params NSA Anchor Relation 작성정보
	 * @param keyString 키 문자열
	 * @return 밸류
	 */
	private String getValueByKey(Object params, String keyString) {
		LinkedHashMap<?, ?> paramsMap = (LinkedHashMap<?, ?>)params;

		return (String)paramsMap.get(keyString);
	}

	/**
	 * NSA Anchor Relation 작성정보를 NSA Anchor Relation 작성 파라미터 리스트를 변환한다.
	 *
	 * @param params NSA Anchor Relation 작성정보
	 * @return NSA Anchor Relation 작성 파라미터 리스트
	 * @throws Exception 예외
	 */
	private List<NsaAnchorRelationDatas> getNsaAnchorRelationDatas(Object params) throws Exception {
		ObjectMapper objectMapper = new ObjectMapper();

		List<NsaAnchorRelationDatas> nsaDatasList = new ArrayList<NsaAnchorRelationDatas>();

		LinkedHashMap<?, ?> paramsMap = (LinkedHashMap<?, ?>)params;
		String jsonString = objectMapper.writeValueAsString(paramsMap.get("nsaAnchorRelationDatas"));

		if (jsonString != null && !jsonString.isEmpty()) {
			nsaDatasList = objectMapper.readValue(jsonString, new TypeReference<List<NsaAnchorRelationDatas>>() {
			});
		}

		return nsaDatasList;
	}

	/**
	 * 시뮬레이션 디렉토리 Path 리스트를 반환한다. (이하생략)
	 *
	 * @param specId 제원번호
	 * @return 시뮬레이션 디렉토리 Path 리스트
	 * @throws Exception 예외
	 */
	private List<SimulationPath> getSimulationPathList(String specId) throws Exception {
		StringBuilder simulationPathSb = new StringBuilder(env.getProperty("nasDirectory"));
		simulationPathSb.append("/");
		simulationPathSb.append(specId);
		simulationPathSb.append("/");
		simulationPathSb.append(SIMULATION_PATH);

		List<Path> pathList = Files.walk(Paths.get(simulationPathSb.toString())).filter(Files::isRegularFile).filter(p -> p.toString().endsWith(MESH_JSON_FILE))
				.map(p -> p.getParent()).distinct().collect(Collectors.toList());

		List<SimulationPath> simulationPathList = new ArrayList<SimulationPath>();
		if (pathList != null) {
			for (Path path : pathList) {
				int nameCount = path.getNameCount();

				SimulationPath simulationPath = new SimulationPath();
				simulationPath.setSimulation(path.getName(nameCount - 5).toString());
				simulationPath.setFloor(path.getName(nameCount - 4).toString());
				simulationPath.setFrequency(path.getName(nameCount - 3).toString());
				simulationPath.setFrequencyService(path.getName(nameCount - 1).toString());
				simulationPath.setPath(path);

				simulationPathList.add(simulationPath);
			}
		}

		return simulationPathList;
	}

	/**
	 * メッシュ情報を返す。
	 *
	 * @param simulationPathString シミュレーションディレクトリパス
	 * @return メッシュ情報
	 * @throws Exception 例外
	 */
	private YskMeshSet getYskMeshSet(String simulationPathString) throws Exception {
		StringBuilder meshJsonFilePath = new StringBuilder(simulationPathString);
		meshJsonFilePath.append("/");
		meshJsonFilePath.append(MESH_JSON_FILE);

		File meshJsonFile = new File(meshJsonFilePath.toString());
		String meshJson = FileUtils.readFileToString(meshJsonFile, Charset.forName("UTF-8"));

		ObjectMapper objectMapper = new ObjectMapper();

		return objectMapper.readValue(meshJson, YskMeshSet.class);
	}

	/**
	 * 시뮬레이션メッシュリストを返す。
	 *
	 * @param nsaAnchorRelationDatas NSA Anchor Relation作成パラメータ
	 * @param simulationPath シミュレーションパス
	 * @return シミュレーションメッシュリスト
	 * @throws Exception 例外
	 */
	private List<Mesh> getMeshList(NsaAnchorRelationDatas nsaAnchorRelationDatas, SimulationPath simulationPath) throws Exception {
		List<Mesh> meshList = new ArrayList<Mesh>();

		String simulationPathString = simulationPath.getPath().toString();

		YskMeshSet yskMeshSet = getYskMeshSet(simulationPathString);
		int meshCountX = yskMeshSet.meshCount_Hor;
		int meshCountY = yskMeshSet.meshCount_Ver;

		RandomAccessFile rafPciMeshFile = getRandomAccessFile(simulationPathString, PCI_PSC_MESH_FILE);

		RandomAccessFile rafRsrpMeshFile = getRandomAccessFile(simulationPathString, RSRP_RSCP_MESH_FILE);

		try {
			if (rafPciMeshFile != null && 0 < rafPciMeshFile.length() && rafRsrpMeshFile != null && 0 < rafRsrpMeshFile.length()) {
				byte[] antennaNoByteArray = new byte[2];
				byte[] pciPscByteArray = new byte[2];
				byte[] rsrpRscpByteArray = new byte[4];

				int i = 0;

				for (int y = 0; y < meshCountY; y++) {
					for (int x = 0; x < meshCountX; x++) {
						i = (y * meshCountX + x) * 4;

						Mesh mesh = new Mesh(x, y);

						mesh.setNsaAnchorRelationDatas(nsaAnchorRelationDatas);
						mesh.setSimulationPath(simulationPath);

						rafPciMeshFile.seek(i);
						rafPciMeshFile.readFully(antennaNoByteArray);
						short antennaNo = ByteBuffer.wrap(antennaNoByteArray).getShort();
						mesh.setAntennaNo(antennaNo);

						rafPciMeshFile.readFully(pciPscByteArray);
						short pciPsc = ByteBuffer.wrap(pciPscByteArray).getShort();
						mesh.setPciPsc(pciPsc);

						rafRsrpMeshFile.seek(i);
						rafRsrpMeshFile.readFully(rsrpRscpByteArray);
						float rsrpRscp = ByteBuffer.wrap(rsrpRscpByteArray).getFloat();
						mesh.setRsrpRscp(rsrpRscp);

						meshList.add(mesh);
					}
				}
			}
		} finally {
			if (rafPciMeshFile != null) {
				rafPciMeshFile.close();
			}
			if (rafRsrpMeshFile != null) {
				rafRsrpMeshFile.close();
			}
		}

		return meshList;
	}

	/**
	 * 指定されたファイルパスのランダム・アクセス・ファイルを返す。
	 *
	 * @param filePath ファイルパス
	 * @param filePattern ファイルパターン
	 * @return ランダム・アクセス・ファイル
	 * @throws Exception 例外
	 */
	private RandomAccessFile getRandomAccessFile(String filePath, String filePattern) throws Exception {
		File dir = new File(filePath);
		FileFilter fileFilter = new RegexFileFilter(filePattern);
		File[] files = dir.listFiles(fileFilter);

		RandomAccessFile randomAccessFile = null;
		if (files != null && files.length > 0) {
			randomAccessFile = new RandomAccessFile(files[0], "r");
		}

		return randomAccessFile;
	}

	/**
	 * NSA Anchor Relation作成パラメータリストからAnchor対NSA、非Anchor対Anchorの組み合わせリスト를 취득한다.。
	 *
	 * @param nsaDatasList NSA Anchor Relation作成パラメータリスト
	 * @return Anchor対NSA、非Anchor対Anchorの組み合わせリスト
	 */
	private List<Pair<NsaAnchorRelationDatas, NsaAnchorRelationDatas>> getNsaAnchorRelationDatasPairList(List<NsaAnchorRelationDatas> nsaDatasList) {
		List<Pair<NsaAnchorRelationDatas, NsaAnchorRelationDatas>> nsaDatasPairList = new ArrayList<Pair<NsaAnchorRelationDatas, NsaAnchorRelationDatas>>();

		List<NsaAnchorRelationDatas> anchorList = nsaDatasList.stream().filter(n -> ANCHOR.equals(n.getAnchorType())).collect(Collectors.toList());

		List<NsaAnchorRelationDatas> nsaList = nsaDatasList.stream().filter(n -> NSA.equals(n.getAnchorType())).collect(Collectors.toList());

		List<NsaAnchorRelationDatas> nonAnchorList = nsaDatasList.stream().filter(n -> NON_ANCHOR.equals(n.getAnchorType())).collect(Collectors.toList());

		for (NsaAnchorRelationDatas anchor : anchorList) {
			for (NsaAnchorRelationDatas nsa : nsaList) {
				nsaDatasPairList.add(Pair.of(anchor, nsa));
			}
		}

		for (NsaAnchorRelationDatas nonAnchor : nonAnchorList) {
			for (NsaAnchorRelationDatas anchor : anchorList) {
				nsaDatasPairList.add(Pair.of(nonAnchor, anchor));
			}
		}

		return nsaDatasPairList;
	}

	/**
	 * メッシュペアリストを返す。
	 *
	 * @param fromMeshList 移動元メッシュリスト
	 * @param toMeshList 移動先メッシュリスト
	 * @return メッシュペアリスト
	 */
	private List<Pair<Mesh, Mesh>> getMeshPairList(List<Mesh> fromMeshList, List<Mesh> toMeshList) {
		List<Pair<Mesh, Mesh>> meshPairList = new ArrayList<Pair<Mesh, Mesh>>();

		if (fromMeshList != null && toMeshList != null) {
			for (int i = 0, size = fromMeshList.size(); i < size; i++) {
				Mesh fromMesh = (Mesh)fromMeshList.get(i);
				Mesh toMesh = (Mesh)toMeshList.get(i);
				meshPairList.add(Pair.of(fromMesh, toMesh));
			}
		}

		return meshPairList;
	}

	/**
	 * 限界値フィルタリング・ソーティングしたメッシュペアリストを返す。
	 *
	 * @param meshPairList メッシュペアリスト
	 * @param fromThreshold 移動元限界値
	 * @param toThreshold 移動先限界値
	 * @return 限界値フィルタリング・ソーティングしたメッシュペアリスト
	 * @see Mesh#compareTo(Mesh)
	 */
	private List<Pair<Mesh, Mesh>> getMeshPairFilteredSortedList(List<Pair<Mesh, Mesh>> meshPairList, float fromThreshold, float toThreshold) {
		return meshPairList.stream().filter(x -> x.getLeft().getRsrpRscp() >= fromThreshold && x.getRight().getRsrpRscp() >= toThreshold)
				.sorted(Comparator.comparing(x -> x)).collect(Collectors.toList());
	}

	/**
	 * 시뮬레이션名를 취득한다.。
	 *
	 * @param simulation シミュレーション
	 * @return シミュレーション名
	 */
	private String getSimulationName(String simulation) {
		String simulationName = null;

		if (SIMULATION1.equals(simulation)) {
			simulationName = PRIMARY_DESIGN;
		} else if (SIMULATION2.equals(simulation)) {
			simulationName = DETAIL_DESIGN;
		}

		return simulationName;
	}

	/**
	 * 移動元メッシュリスト、移動先メッシュリスト、 移動元NSA Anchor Relation作成パラメータ、移動先NSA Anchor
	 * Relation作成パラメータ、数値フォーマットからCSV出力文字列リスト를 취득한다.。
	 *
	 * @param fromMeshList 移動元メッシュリスト
	 * @param toMeshList 移動先メッシュリスト
	 * @param fromNsaDatas 移動元NSA Anchor Relation作成パラメータ
	 * @param toNsaDatas 移動先NSA Anchor Relation作成パラメータ
	 * @param df 数値フォーマット
	 * @return CSV出力文字列リスト
	 */
	private List<List<String>> getCsvStringList(List<Mesh> fromMeshList, List<Mesh> toMeshList, NsaAnchorRelationDatas fromNsaDatas,
			NsaAnchorRelationDatas toNsaDatas,
			DecimalFormat df) {
		List<List<String>> csvStringList = new ArrayList<List<String>>();

		List<Pair<Mesh, Mesh>> meshPairList = getMeshPairList(fromMeshList, toMeshList);
		List<Pair<Mesh, Mesh>> meshPairFilteredSortedList = getMeshPairFilteredSortedList(meshPairList, fromNsaDatas.getRsrp(),
				toNsaDatas.getRsrp());
		Map<Short, List<Pair<Mesh, Mesh>>> groupingByPciPscMap = (Map<Short, List<Pair<Mesh, Mesh>>>)meshPairFilteredSortedList.stream()
				.collect(Collectors.groupingBy(x -> x.getLeft().getPciPsc()));
		SortedMap<Short, List<Pair<Mesh, Mesh>>> sortedPciPscMap = new TreeMap<Short, List<Pair<Mesh, Mesh>>>(groupingByPciPscMap);

		for (Short pciPsc : sortedPciPscMap.keySet()) {
			List<Pair<Mesh, Mesh>> innerMeshPairList = sortedPciPscMap.get(pciPsc);
			Map<Short, Long> overwrapCountMap = (Map<Short, Long>)innerMeshPairList.stream()
					.collect(Collectors.groupingBy(x -> x.getRight().getPciPsc(), Collectors.counting()));

			Set<Short> pci = new HashSet<Short>();

			int innerMeshPairListSize = innerMeshPairList.size();

			for (Pair<Mesh, Mesh> meshPair : innerMeshPairList) {
				Mesh fromMesh = meshPair.getLeft();
				Mesh toMesh = meshPair.getRight();

				if (pci.add(toMesh.getPciPsc())) {
					BigDecimal ratio = ((new BigDecimal(overwrapCountMap.get(toMesh.getPciPsc()).longValue())).divide(new BigDecimal(innerMeshPairListSize), 3,
							BigDecimal.ROUND_HALF_UP)).multiply(new BigDecimal(100));

					List<String> csvOneLineStringList = new ArrayList<String>();

					csvOneLineStringList.add(getSimulationName(fromMesh.getSimulationPath().getSimulation()));
					csvOneLineStringList.add(fromMesh.getNsaAnchorRelationDatas().getAnchorType());
					csvOneLineStringList.add(fromMesh.getSimulationPath().getFrequencyService());
					csvOneLineStringList.add(String.valueOf(fromMesh.getPciPsc()));
					csvOneLineStringList.add(toMesh.getNsaAnchorRelationDatas().getAnchorType());
					csvOneLineStringList.add(toMesh.getSimulationPath().getFrequencyService());
					csvOneLineStringList.add(String.valueOf(toMesh.getPciPsc()));
					csvOneLineStringList.add(String.valueOf(overwrapCountMap.get(toMesh.getPciPsc()).longValue()));
					csvOneLineStringList.add(String.valueOf(innerMeshPairListSize));

					StringBuilder percent = new StringBuilder(df.format(ratio));
					percent.append("%");
					csvOneLineStringList.add(percent.toString());

					csvStringList.add(csvOneLineStringList);
				}
			}
		}

		return csvStringList;
	}

	/**
	 * CSV出力文字列를 취득한다.。
	 *
	 * @param csvStringList CSV出力文字列リスト
	 * @return CSV出力文字列
	 */
	private String getCsvString(List<List<String>> csvStringList) {
		List<String> csvHeader = Arrays.asList(CSV_HEADER);
		csvStringList.add(0, csvHeader);

		StringBuilder csvString = new StringBuilder();

		for (List<String> list : csvStringList) {
			for (int i = 0, size = list.size(); i < size; i++) {
				String str = list.get(i);
				csvString.append("\"");
				csvString.append(str);
				csvString.append("\"");

				if (i != size - 1) {
					csvString.append(",");
				}
			}
			csvString.append(System.getProperty("line.separator"));
		}

		return csvString.toString();
	}

}
