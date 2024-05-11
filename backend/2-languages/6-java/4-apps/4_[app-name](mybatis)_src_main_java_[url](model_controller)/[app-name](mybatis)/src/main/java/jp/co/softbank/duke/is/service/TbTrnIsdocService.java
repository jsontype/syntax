package jp.co.[company_name].[main_system_name].is.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import jp.co.[company_name].[main_system_name].exception.ApplicationException;
import jp.co.[company_name].[main_system_name].is.config.MessageConst;
import jp.co.[company_name].[main_system_name].is.entity.DesignBaseStationEntity;
import jp.co.[company_name].[main_system_name].is.entity.DesignNetworkEntity;
import jp.co.[company_name].[main_system_name].is.entity.DesignServiceBand5gEntity;
import jp.co.[company_name].[main_system_name].is.entity.DesignServiceBandLteEntity;
import jp.co.[company_name].[main_system_name].is.entity.DesignServiceBandWcdmaEntity;
import jp.co.[company_name].[main_system_name].is.entity.FrequencyService;
import jp.co.[company_name].[main_system_name].is.entity.TbTrnIsdocEntity;
import jp.co.[company_name].[main_system_name].is.enums.ResultStatusEnum;
import jp.co.[company_name].[main_system_name].is.logic.SetParamsToEntity;
import jp.co.[company_name].[main_system_name].is.mapper.TbTrnIsdocMapper;
import jp.co.[company_name].[main_system_name].is.mapper.YskSimulationMapper;
import jp.co.[company_name].[main_system_name].is.model.Result;
import jp.co.[company_name].[main_system_name].is.model.SearchTbTrnIsdocJsonResult;
import jp.co.[company_name].[main_system_name].is.model.SearchTbTrnIsdocRequest;
import jp.co.[company_name].[main_system_name].is.model.SearchTbTrnIsdocResult;
import jp.co.[company_name].[main_system_name].is.utils.EntityAccessUtils;
import jp.co.[company_name].[main_system_name].model.Message;

/**
 * 테이블「옥내설계다큐먼트」액세스
 *
 * @author [author]
 * @version [version] [update_date]
 */
@Service
public class TbTrnIsdocService {

	@Autowired
	TbTrnIsdocMapper mapper;

	@Autowired
	YskSimulationMapper yskSimulationMapper;

	private static String TABLE_NAME = "tb_trn_isdoc";

	private String[] keyList = { "specId" };

	final static String STR_LEFT_BRACKETS = "[";
	final static String STR_RIGHT_BRACKETS = "]";
	final static String STR_QUOTE = "\"";
	final static String STR_SPACE = "";
	final static String STR_UNDER_LINE = "_";

	private EntityAccessUtils<TbTrnIsdocEntity> entityBean = new EntityAccessUtils<TbTrnIsdocEntity>(TbTrnIsdocEntity.class);

	private static final Logger log = LoggerFactory.getLogger(TbTrnIsdocService.class);

	/**
	 * 옥내설계다큐멘트를 검색한다.
	 *
	 * @param params 검색조건
	 * @return 검색결과
	 */
	@Transactional
	public Result<List<SearchTbTrnIsdocJsonResult>> searchTbTrnIsdocJson(Object params) {
		SearchTbTrnIsdocRequest searchRequest = SetParamsToEntity.searchTbTrnIsdoc(params);

		List<SearchTbTrnIsdocJsonResult> datasChg = new ArrayList<SearchTbTrnIsdocJsonResult>();

		List<SearchTbTrnIsdocResult> datas = mapper.searchTbTrnIsdoc(searchRequest);

		if (datas != null && datas.size() > 0) {

			for (SearchTbTrnIsdocResult result : datas) {

				SearchTbTrnIsdocJsonResult newResult = new SearchTbTrnIsdocJsonResult();

				newResult.setSpecId(result.getSpecId());

				newResult.setMessage(
						result.getMessage().replace(STR_LEFT_BRACKETS, STR_SPACE).replace(STR_RIGHT_BRACKETS, STR_SPACE).replace(STR_QUOTE, STR_SPACE));

				newResult.setRfDesignStatus(convertStringToList(result.getRfDesignStatus()));

				newResult.setSiteId(convertStringToList(result.getSiteId()));

				newResult.setBaseNumber(convertStringToList(result.getBaseNumber()));

				newResult.setBaseNameKanji(convertStringToList(result.getBaseNameKanji()));

				newResult.setFrequencyBand(convertStringToList(result.getFrequencyBand()));

				newResult.setNwId(convertStringToList(result.getNwId()));

				newResult.setArea(result.getArea());

				datasChg.add(newResult);

			}

		}

		if (datasChg.isEmpty()) {
			return new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_I_IS0001), Collections.emptyList());
		} else {
			return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), datasChg);
		}

	};

	/**
	 * 문자열을 리스트로 변환한다.
	 *
	 * @param params 문자열
	 * @return 변환결과
	 */
	List<String> convertStringToList(String inputStr) {
		List<String> retList = new ArrayList<String>();
		String[] arrayStr = inputStr.split(",");

		if (arrayStr != null && arrayStr.length > 0) {

			for (String tempStr : arrayStr) {

				String tempChgStr = tempStr.trim().replace(STR_LEFT_BRACKETS, STR_SPACE).replace(STR_RIGHT_BRACKETS, STR_SPACE).replace(STR_QUOTE, STR_SPACE);

				retList.add(tempChgStr);

			}

		}

		return retList;

	}

	/**
	 * 평면도명 일람을 저장한다.
	 *
	 * @param tbTrnIsdoc 평면도면일람이 들어가있는 옥내설계 다큐멘트
	 * @return 저장결과
	 */
	@Transactional
	public int saveFloorImages(TbTrnIsdocEntity tbTrnIsdoc) {
		int intCnt = mapper.selectTbTrnIsdocCnt(tbTrnIsdoc.getSpecId());

		if (intCnt == 1) {
			return mapper.updateFloorImages(tbTrnIsdoc);
		} else {
			return mapper.insertFloorImages(tbTrnIsdoc);
		}

	};

	/**
	 * 테이블「옥내설계다큐멘트」를 검색한다. (이하생략)
	 *
	 * @param bean 검색조건
	 * @return 검색결과
	 */
	@Transactional
	public Result<List<TbTrnIsdocEntity>> select(TbTrnIsdocEntity bean) {
		bean.setDeleteFlg("0");

		List<TbTrnIsdocEntity> datas = mapper.select(bean);

		if (datas.isEmpty()) {
			return new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_I_IS0001), Collections.emptyList());
		} else {
			return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), datas);
		}
	};

	/**
	 * テーブル「屋内設計ドキュメント」検索
	 *
	 * @param param 検索条件
	 * @return 검색결과
	 */
	@Transactional
	public Result<List<TbTrnIsdocEntity>> select(Map<String, ?> param) throws Exception {

		TbTrnIsdocEntity bean = entityBean.Map2Bean(param);
		bean.setDeleteFlg("0");

		List<TbTrnIsdocEntity> datas = mapper.select(bean);

		if (datas.isEmpty()) {
			return new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_I_IS0001), Collections.emptyList());
		} else {
			return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), datas);
		}
	};

	/**
	 * テーブル「屋内設計ドキュメント」更新
	 *
	 * @param bean 更新条件
	 * @return 更新件数
	 */
	@Transactional
	public Result<Map<String, Integer>> update(TbTrnIsdocEntity bean) {

		Map<String, Integer> result = new HashMap<String, Integer>();

		int count = 0;

		TbTrnIsdocEntity searchBean = new TbTrnIsdocEntity();
		searchBean.setValueAllNull(searchBean);
		for (String key : keyList) {
			searchBean.setObjectValue(searchBean, key, bean.getObjectValue(bean, key));
		}
		searchBean.setDeleteFlg("0");

		List<TbTrnIsdocEntity> datas = mapper.select(searchBean);

		if (datas.isEmpty()) {
			List<TbTrnIsdocEntity> listData = new ArrayList<TbTrnIsdocEntity>();
			listData.add(bean);
			count = mapper.insertList(listData);
		} else {
			int oldVersion = bean.getVersionNo();
			int newVersion = datas.get(0).getVersionNo();
			if (oldVersion == newVersion) {
				count = mapper.update(bean, String.valueOf(bean.getVersionNo()));
			} else {
				throw new ApplicationException(new Message(MessageConst.MSG_W_IS0006, TABLE_NAME));
			}
		}
		if (count == 0) {
			return new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_I_IS0002), Collections.emptyMap());
		} else {
			result.put("updateCount", count);
			return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), result);
		}
	};

	/**
	 * テーブル「屋内設計ドキュメント」更新
	 *
	 * @param bean 更新条件
	 * @param softwareVersion ソフトウェアバージョン
	 * @param blFindFrequency 周波数サービス検索区分 falseの場合は周波数サービスを検索しない
	 * @return 更新件数
	 */
	@Transactional
	public Result<Map<String, Integer>> update(TbTrnIsdocEntity bean, String softwareVersion, Boolean blFindFrequency) throws Exception {

		Map<String, Integer> result = new HashMap<String, Integer>();

		int count = 0;
		boolean addMsg = false;

		TbTrnIsdocEntity searchBean = new TbTrnIsdocEntity();
		searchBean.setValueAllNull(searchBean);
		for (String key : keyList) {
			searchBean.setObjectValue(searchBean, key, bean.getObjectValue(bean, key));
		}
		searchBean.setDeleteFlg("0");

		List<TbTrnIsdocEntity> datas = mapper.select(searchBean);

		if (datas.isEmpty()) {
			List<TbTrnIsdocEntity> listData = new ArrayList<TbTrnIsdocEntity>();
			listData.add(bean);
			// ソフトウェアバージョンを設定
			bean.setSwVersion(softwareVersion);
			count = mapper.insertList(listData);
			if (blFindFrequency == true) {
				if (findFrequencyServices(bean) == false) {
					addMsg = true;
				}
			}

		} else {
			int oldVersion = bean.getVersionNo();
			int newVersion = datas.get(0).getVersionNo();
			if (oldVersion == newVersion) {
				String swVersion = datas.get(0).getSwVersion();
				if (swVersion != null && swVersion.length() > 0) {
					String[] versionArray = swVersion.split(STR_UNDER_LINE);
					boolean blFind = false;
					for (String version : versionArray) {
						if (softwareVersion.equals(version)) {
							blFind = true;
							break;
						}
					}
					if (blFind == false) {
						// ソフトウェアバージョンを追加
						bean.setSwVersion(swVersion + STR_UNDER_LINE + softwareVersion);
					} else {
						// ソフトウェアバージョンは既に存在していますから、nullに設定して更新しない
						bean.setSwVersion(null);
					}

				} else {
					// ソフトウェアバージョンを設定
					bean.setSwVersion(softwareVersion);
				}
				count = mapper.update(bean, String.valueOf(bean.getVersionNo()));
			} else {
				throw new ApplicationException(new Message(MessageConst.MSG_W_IS0006, TABLE_NAME));
			}
		}
		if (count == 0) {
			return new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_I_IS0002), Collections.emptyMap());
		} else {
			result.put("updateCount", count);
			if (addMsg == true) {

				List<Message> messages = new ArrayList<Message>();

				Message msgSucess = new Message(MessageConst.MSG_S_IS0000);
				Message msgError = new Message(MessageConst.MSG_E_IS0001);
				messages.add(msgSucess);
				messages.add(msgError);
				log.error(msgError.getMessage());

				return new Result<>(ResultStatusEnum.Success, messages, result);

			}

			return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), result);
		}
	};

	/**
	 * テーブル「屋内設計ドキュメント」更新
	 *
	 * @param param 更新条件
	 * @return 更新件数
	 */
	@Transactional
	public Result<Map<String, Integer>> update(Map<String, ?> param) throws Exception {

		Map<String, Integer> result = new HashMap<String, Integer>();

		int count = 0;

		TbTrnIsdocEntity bean = entityBean.Map2Bean(param);

		// No Update Key
		boolean bool = entityBean.checkKey(keyList, bean);
		if (!bool) {
			throw new ApplicationException(new Message(MessageConst.MSG_C_IS0002, String.join(",", keyList), TABLE_NAME));
		}

		TbTrnIsdocEntity searchBean = new TbTrnIsdocEntity();
		searchBean.setValueAllNull(searchBean);
		for (String key : keyList) {
			searchBean.setObjectValue(searchBean, key, bean.getObjectValue(bean, key));
		}
		searchBean.setDeleteFlg("0");

		List<TbTrnIsdocEntity> datas = mapper.select(searchBean);

		if (datas.isEmpty()) {
			List<TbTrnIsdocEntity> listData = new ArrayList<TbTrnIsdocEntity>();
			listData.add(bean);
			count = mapper.insertList(listData);
		} else {
			String delFlag = datas.get(0).getDeleteFlg();
			if ("0".equals(delFlag)) {
				int oldVersion = bean.getVersionNo();
				int newVersion = datas.get(0).getVersionNo();
				if (oldVersion == newVersion) {
					count = mapper.update(bean, String.valueOf(bean.getVersionNo()));
				} else {
					throw new ApplicationException(new Message(MessageConst.MSG_W_IS0006, TABLE_NAME));
				}
			} else {
				count = mapper.delete(bean);
				List<TbTrnIsdocEntity> listData = new ArrayList<TbTrnIsdocEntity>();
				listData.add(bean);
				count = mapper.insertList(listData);
			}
		}
		if (count == 0) {
			return new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_I_IS0002), Collections.emptyMap());
		} else {
			result.put("updateCount", count);
			return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), result);
		}
	};

	/**
	 * テーブル「屋内設計ドキュメント」削除
	 *
	 * @param bean 削除条件
	 * @return 削除件数
	 */
	@Transactional
	public Result<Map<String, Integer>> cancel(TbTrnIsdocEntity bean) {

		Map<String, Integer> result = new HashMap<String, Integer>();
		int count = mapper.cancel(bean);

		if (count == 0) {
			return new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_I_IS0002), Collections.emptyMap());
		} else {
			result.put("updateCount", count);
			return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), result);
		}
	};

	/**
	 * テーブル「屋内設計ドキュメント」と「設計対象部材一覧」と「タスク履歴」を削除
	 *
	 * @param specid 제원정보
	 * @return 削除件数
	 */
	@Transactional
	public Result<Map<String, Integer>> delete(String specId) {
		Map<String, Integer> result = new HashMap<String, Integer>();
		int countIsdoc = mapper.deleteIsdoc(specId);
		int countIsdocCatalog = mapper.deleteIsdocCatalog(specId);
		int countHisIsTaskList = mapper.deleteHisIsTaskList(specId);
		result.put("deleteIsdoc", countIsdoc);
		result.put("deleteIsdocCatalog", countIsdocCatalog);
		result.put("deleteHisIsTaskList", countHisIsTaskList);
		return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), result);

	};

	/**
	 * 周波数サービスにより全周波数一覧を検索
	 *
	 * @param bean 屋内設計ドキュメント
	 * @return 검색결과
	 * @throws Exception 例外
	 */

	private Boolean findFrequencyServices(TbTrnIsdocEntity bean) throws Exception {

		ObjectMapper objectMapper = new ObjectMapper();

		List<DesignNetworkEntity> designNetwork = new ArrayList<DesignNetworkEntity>();

		if (bean.getDesignNetwork() != null && !bean.getDesignNetwork().isEmpty()) {
			designNetwork = objectMapper.readValue(bean.getDesignNetwork(), new TypeReference<List<DesignNetworkEntity>>() {
			});
		}

		List<DesignBaseStationEntity> designBaseStation = new ArrayList<DesignBaseStationEntity>();

		if (bean.getDesignBaseStation() != null && !bean.getDesignBaseStation().isEmpty()) {
			designBaseStation = objectMapper.readValue(bean.getDesignBaseStation(), new TypeReference<List<DesignBaseStationEntity>>() {
			});
		}

		List<DesignServiceBand5gEntity> designServiceBand5g = new ArrayList<DesignServiceBand5gEntity>();

		if (bean.getDesignServiceBand5g() != null && !bean.getDesignServiceBand5g().isEmpty()) {
			designServiceBand5g = objectMapper.readValue(bean.getDesignServiceBand5g(), new TypeReference<List<DesignServiceBand5gEntity>>() {
			});
		}

		List<DesignServiceBandLteEntity> designServiceBandLte = new ArrayList<DesignServiceBandLteEntity>();

		if (bean.getDesignServiceBandLte() != null && !bean.getDesignServiceBandLte().isEmpty()) {
			designServiceBandLte = objectMapper.readValue(bean.getDesignServiceBandLte(), new TypeReference<List<DesignServiceBandLteEntity>>() {
			});
		}

		List<DesignServiceBandWcdmaEntity> designServiceBandWcdma = new ArrayList<DesignServiceBandWcdmaEntity>();

		if (bean.getDesignServiceBandWcdma() != null && !bean.getDesignServiceBandWcdma().isEmpty()) {
			designServiceBandWcdma = objectMapper.readValue(bean.getDesignServiceBandWcdma(), new TypeReference<List<DesignServiceBandWcdmaEntity>>() {
			});
		}

		List<String> frequencyServices = new ArrayList<String>();

		for (int i = 0; i < designNetwork.size(); i++) {
			for (int j = 0; j < designBaseStation.size(); j++) {
				if (designNetwork.get(i).getBaseNumber().equals(designBaseStation.get(j).getBaseNumber())) {
					for (int k = 0; k < designServiceBand5g.size(); k++) {
						if (designNetwork.get(i).getNwId().equals(designServiceBand5g.get(k).getNwId())) {
							String frequencyService = "";
							if (designServiceBand5g.get(k).getFivegBandwidthCd() == null || designServiceBand5g.get(k).getFivegBandwidthCd().isEmpty()) {
								frequencyService = designBaseStation.get(j).getFrequencyBand() + "Hz_" + "(5G)";
							} else {
								frequencyService = designBaseStation.get(j).getFrequencyBand() + "Hz_" + designServiceBand5g.get(k).getFivegBandwidthCd()
										+ "(5G)";
							}
							frequencyServices.add(frequencyService);
						}
					}
					for (int k = 0; k < designServiceBandLte.size(); k++) {
						if (designNetwork.get(i).getNwId().equals(designServiceBandLte.get(k).getNwId())) {
							String frequencyService = "";
							if (designServiceBandLte.get(k).getLteBandwidthCd() == null || designServiceBandLte.get(k).getLteBandwidthCd().isEmpty()) {
								frequencyService = designBaseStation.get(j).getFrequencyBand() + "Hz_" + "(LTE)";
							} else {
								frequencyService = designBaseStation.get(j).getFrequencyBand() + "Hz_" + designServiceBandLte.get(k).getLteBandwidthCd()
										+ "(LTE)";
							}
							frequencyServices.add(frequencyService);
						}
					}
					for (int k = 0; k < designServiceBandWcdma.size(); k++) {
						if (designNetwork.get(i).getNwId().equals(designServiceBandWcdma.get(k).getNwId())) {
							String frequencyService = "";
							if (designServiceBandWcdma.get(k).getNoOfRfCntCd() == null || designServiceBandWcdma.get(k).getNoOfRfCntCd().isEmpty()) {
								frequencyService = designBaseStation.get(j).getFrequencyBand() + "Hz_" + "(WCDMA)";

							} else {
								frequencyService = designBaseStation.get(j).getFrequencyBand() + "Hz_"
										+ String.valueOf(5 * Integer.valueOf(designServiceBandWcdma.get(k).getNoOfRfCntCd())) + "M(WCDMA)";
							}

							frequencyServices.add(frequencyService);
						}
					}
				}
			}
		}

		// 全周波数一覧
		List<FrequencyService> listFrequencyService = Arrays
				.asList(objectMapper.readValue(yskSimulationMapper.selectIscommonFrequencyServices(), FrequencyService[].class));

		for (String frequency : frequencyServices) {
			boolean blFind = false;
			for (FrequencyService frequencyBean : listFrequencyService) {
				if (frequency.equals(frequencyBean.getName())) {
					blFind = true;
					break;
				}
			}
			if (blFind == false) {
				return false;
			}
		}
		return true;

	}

}
