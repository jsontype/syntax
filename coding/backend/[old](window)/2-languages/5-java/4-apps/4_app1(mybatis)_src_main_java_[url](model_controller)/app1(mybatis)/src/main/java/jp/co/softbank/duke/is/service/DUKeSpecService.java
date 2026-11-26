/**
 * Copyright (C) ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.JsonNode;

import jp.co.[company_name].[main_system_name].is.config.MessageConst;
import jp.co.[company_name].[main_system_name].is.entity.DesignAntennaDeviceEntity;
import jp.co.[company_name].[main_system_name].is.entity.DesignBaseStationEntity;
import jp.co.[company_name].[main_system_name].is.entity.DesignMiscDeviceEntity;
import jp.co.[company_name].[main_system_name].is.entity.DesignNetworkEntity;
import jp.co.[company_name].[main_system_name].is.entity.DesignOrderEntity;
import jp.co.[company_name].[main_system_name].is.entity.DesignPortEntity;
import jp.co.[company_name].[main_system_name].is.entity.DesignRadioGroupDeviceEntity;
import jp.co.[company_name].[main_system_name].is.entity.DesignRadioGroupEntity;
import jp.co.[company_name].[main_system_name].is.entity.DesignRadioHeadEntity;
import jp.co.[company_name].[main_system_name].is.entity.DesignSectorAntennaEntity;
import jp.co.[company_name].[main_system_name].is.entity.DesignSectorEntity;
import jp.co.[company_name].[main_system_name].is.entity.DesignServiceBand5gEntity;
import jp.co.[company_name].[main_system_name].is.entity.DesignServiceBandLteEntity;
import jp.co.[company_name].[main_system_name].is.entity.DesignServiceBandWcdmaEntity;
import jp.co.[company_name].[main_system_name].is.entity.DesignSiteEntity;
import jp.co.[company_name].[main_system_name].is.entity.DesignSpecificationEntity;
import jp.co.[company_name].[main_system_name].is.entity.TbTrnIsdocNodeEntity;
import jp.co.[company_name].[main_system_name].is.enums.ResultStatusEnum;
import jp.co.[company_name].[main_system_name].is.mapper.DesignAntennaDeviceMapper;
import jp.co.[company_name].[main_system_name].is.mapper.DesignBaseStationMapper;
import jp.co.[company_name].[main_system_name].is.mapper.DesignMiscDeviceMapper;
import jp.co.[company_name].[main_system_name].is.mapper.DesignNetworkMapper;
import jp.co.[company_name].[main_system_name].is.mapper.DesignOrderMapper;
import jp.co.[company_name].[main_system_name].is.mapper.DesignPortMapper;
import jp.co.[company_name].[main_system_name].is.mapper.DesignRadioGroupDeviceMapper;
import jp.co.[company_name].[main_system_name].is.mapper.DesignRadioGroupMapper;
import jp.co.[company_name].[main_system_name].is.mapper.DesignRadioHeadMapper;
import jp.co.[company_name].[main_system_name].is.mapper.DesignSectorAntennaMapper;
import jp.co.[company_name].[main_system_name].is.mapper.DesignSectorMapper;
import jp.co.[company_name].[main_system_name].is.mapper.DesignServiceBand5gMapper;
import jp.co.[company_name].[main_system_name].is.mapper.DesignServiceBandLteMapper;
import jp.co.[company_name].[main_system_name].is.mapper.DesignServiceBandWcdmaMapper;
import jp.co.[company_name].[main_system_name].is.mapper.DesignSiteMapper;
import jp.co.[company_name].[main_system_name].is.mapper.DesignSpecificationMapper;
import jp.co.[company_name].[main_system_name].is.model.Result;
import jp.co.[company_name].[main_system_name].is.utils.IsJsonUtil;
import jp.co.[company_name].[main_system_name].model.Message;

/**
 * 테이블「설계_제원정보」액서스 서비스
 *
 * @author [author]
 * @version [version] [update_date]
 *
 */
@Service
public class [main_system_name]SpecService {

	@Autowired
	private DesignSpecificationMapper mapper_01_DesignSpecification;

	@Autowired
	private DesignSiteMapper mapper_02_DesignSite;

	@Autowired
	private DesignBaseStationMapper mapper_03_DesignBaseStation;

	@Autowired
	private DesignOrderMapper mapper_04_DesignOrder;

	@Autowired
	private DesignRadioGroupMapper mapper_05_DesignRadioGroup;

	@Autowired
	private DesignRadioGroupDeviceMapper mapper_06_DesignRadioGroupDevice;

	@Autowired
	private DesignRadioHeadMapper mapper_07_DesignRadioHead;

	@Autowired
	private DesignAntennaDeviceMapper mapper_08_DesignAntennaDevice;

	@Autowired
	private DesignMiscDeviceMapper mapper_09_DesignMiscDevice;

	@Autowired
	private DesignNetworkMapper mapper_10_DesignNetwork;

	@Autowired
	private DesignServiceBandLteMapper mapper_11_DesignServiceBandLte;

	@Autowired
	private DesignServiceBandWcdmaMapper mapper_12_DesignServiceBandWcdma;

	@Autowired
	private DesignSectorMapper mapper_13_DesignSector;

	@Autowired
	private DesignSectorAntennaMapper mapper_14_DesignSectorAntenna;

	@Autowired
	private DesignPortMapper mapper_15_DesignPort;

	@Autowired
	private DesignServiceBand5gMapper mapper_16_DesignServiceBand5g;

	/**
	 * 제원정보를 검색하는 메소드 (이하생략)
	 *
	 * @param beans 검색조건
	 * @return 검색결과
	 * @throws Exception
	 */
	public Result<TbTrnIsdocNodeEntity> getAll(String specId) throws Exception {
		TbTrnIsdocNodeEntity resultData = null;

		/** 設計_諸元情報를 취득한다. */
		List<DesignSpecificationEntity> datasDesignSpecificationEntity = get_001_DesignSpecification(specId);
		if (!datasDesignSpecificationEntity.isEmpty()) {
			resultData = new TbTrnIsdocNodeEntity();

			JsonNode jsonNodeDesignSpecification = IsJsonUtil.makeJsonNode(datasDesignSpecificationEntity);
			resultData.setDesignSpecification(jsonNodeDesignSpecification);

			/** 設計_サイト情報를 취득한다. */
			List<DesignSiteEntity> datasDesignSite = get_002_DesignSite(specId);
			JsonNode jsonNodeDesignSite = IsJsonUtil.makeJsonNode(datasDesignSite);
			resultData.setDesignSite(jsonNodeDesignSite);

			/** 設計_基地局情報를 취득한다. */
			List<DesignBaseStationEntity> datasDesignBaseStation = get_003_DesignSite(specId);
			JsonNode jsonNodeDesignBaseStation = IsJsonUtil.makeJsonNode(datasDesignBaseStation);
			resultData.setDesignBaseStation(jsonNodeDesignBaseStation);

			/** 設計_オーダー情報를 취득한다. */
			List<DesignOrderEntity> datasDesignOrder = get_004_DesignOrder(specId);
			JsonNode jsonNodeDesignOrder = IsJsonUtil.makeJsonNode(datasDesignOrder);
			resultData.setDesignOrder(jsonNodeDesignOrder);

			/** 設計_無線機グループ情報를 취득한다. */
			List<DesignRadioGroupEntity> datasDesignRadioGroup = get_005_DesignRadioGroup(specId);
			JsonNode jsonNodeDesignRadioGroup = IsJsonUtil.makeJsonNode(datasDesignRadioGroup);
			resultData.setDesignRadioGroup(jsonNodeDesignRadioGroup);

			/** 設計_無線機グループデバイス情報를 취득한다. */
			List<DesignRadioGroupDeviceEntity> datasDesignRadioGroupDevice = get_006_DesignRadioGroupDevice(specId);
			JsonNode jsonNodeDesignRadioGroupDevice = IsJsonUtil.makeJsonNode(datasDesignRadioGroupDevice);
			resultData.setDesignRadioGroupDevice(jsonNodeDesignRadioGroupDevice);

			/** 設計_無線子機情報를 취득한다. */
			List<DesignRadioHeadEntity> datasDesignRadioHead = get_007_DesignRadioHead(specId);
			JsonNode jsonNodeDesignRadioHead = IsJsonUtil.makeJsonNode(datasDesignRadioHead);
			resultData.setDesignRadioHead(jsonNodeDesignRadioHead);

			/** 設計_アンテナデバイス情報를 취득한다. */
			List<DesignAntennaDeviceEntity> datasDesignAntennaDevice = get_008_DesignAntennaDevice(specId);
			JsonNode jsonNodeDesignAntennaDevice = IsJsonUtil.makeJsonNode(datasDesignAntennaDevice);
			resultData.setDesignAntennaDevice(jsonNodeDesignAntennaDevice);

			/** 設計_付帯デバイス情報를 취득한다. */
			List<DesignMiscDeviceEntity> datasDesignMiscDevice = get_009_DesignMiscDevice(specId);
			JsonNode jsonNodeDesignMiscDevice = IsJsonUtil.makeJsonNode(datasDesignMiscDevice);
			resultData.setDesignMiscDevice(jsonNodeDesignMiscDevice);

			/** 設計_ネットワーク情報를 취득한다. */
			List<DesignNetworkEntity> datasDesignNetwork = get_010_DesignNetwork(specId);
			JsonNode jsonNodeDesignNetwork = IsJsonUtil.makeJsonNode(datasDesignNetwork);
			resultData.setDesignNetwork(jsonNodeDesignNetwork);

			/** 設計_サービスバンド(LTE)情報를 취득한다. */
			List<DesignServiceBandLteEntity> datasDesignServiceBandLte = get_011_DesignServiceBandLte(specId);
			JsonNode jsonNodeDesignServiceBandLte = IsJsonUtil.makeJsonNode(datasDesignServiceBandLte);
			resultData.setDesignServiceBandLte(jsonNodeDesignServiceBandLte);

			/** 設計_サービスバンド(WCDMA)情報를 취득한다. */
			List<DesignServiceBandWcdmaEntity> datasDesignServiceBandWcdma = get_012_DesignServiceBandWcdma(specId);
			JsonNode jsonNodeDesignServiceBandWcdma = IsJsonUtil.makeJsonNode(datasDesignServiceBandWcdma);
			resultData.setDesignServiceBandWcdma(jsonNodeDesignServiceBandWcdma);

			/** 設計_サービスバンド(WCDMA)情報를 취득한다. */
			List<DesignSectorEntity> datasDesignSector = get_013_DesignSector(specId);
			JsonNode jsonNodeDesignSector = IsJsonUtil.makeJsonNode(datasDesignSector);
			resultData.setDesignSector(jsonNodeDesignSector);

			/** 設計_サービスバンド(WCDMA)情報를 취득한다. */
			List<DesignSectorAntennaEntity> datasDesignSectorAntenna = get_014_DesignSectorAntenna(specId);
			JsonNode jsonNodeDesignSectorAntenna = IsJsonUtil.makeJsonNode(datasDesignSectorAntenna);
			resultData.setDesignSectorAntenna(jsonNodeDesignSectorAntenna);

			/** 設計_サービスバンド(WCDMA)情報를 취득한다. */
			List<DesignPortEntity> datasDesignPort = get_015_DesignPort(specId);
			JsonNode jsonNodeDesignPort = IsJsonUtil.makeJsonNode(datasDesignPort);
			resultData.setDesignPort(jsonNodeDesignPort);

			/** 設計_サービスバンド(WCDMA)情報를 취득한다. */
			List<DesignServiceBand5gEntity> datasDesignServiceBand5g = get_016_DesignServiceBand5g(specId);
			JsonNode jsonNodeDesignServiceBand5g = IsJsonUtil.makeJsonNode(datasDesignServiceBand5g);
			resultData.setDesignServiceBand5g(jsonNodeDesignServiceBand5g);

			resultData.setIs[main_system_name](true);
		}

		if (resultData == null) {
			return new Result<>(ResultStatusEnum.Warning, new Message(MessageConst.MSG_I_IS0001), resultData);
		} else {
			return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), resultData);
		}

	}

	/**
	 * 設計_諸元情報を검색한다.
	 *
	 * @param beans 検索条件
	 * @return 검색결과
	 */
	private List<DesignSpecificationEntity> get_001_DesignSpecification(String specId) {
		List<DesignSpecificationEntity> datas = mapper_01_DesignSpecification.select(specId);

		return datas;
	}

	/**
	 * 設計_サイト情報を검색한다.
	 *
	 * @param beans 検索条件
	 * @return 검색결과
	 */
	private List<DesignSiteEntity> get_002_DesignSite(String specId) {
		List<DesignSiteEntity> datas = mapper_02_DesignSite.select(specId);

		return datas;
	}

	/**
	 * 設計_基地局情報を검색한다.
	 *
	 * @param beans 検索条件
	 * @return 검색결과
	 */
	private List<DesignBaseStationEntity> get_003_DesignSite(String specId) {
		List<DesignBaseStationEntity> datas = mapper_03_DesignBaseStation.select(specId);

		return datas;
	}

	/**
	 * 設計_基地局情報を검색한다.
	 *
	 * @param beans 検索条件
	 * @return 검색결과
	 */
	private List<DesignOrderEntity> get_004_DesignOrder(String specId) {
		List<DesignOrderEntity> datas = mapper_04_DesignOrder.select(specId);

		return datas;
	}

	/**
	 * 設計_無線機グループ情報を검색한다.
	 *
	 * @param beans 検索条件
	 * @return 검색결과
	 */
	private List<DesignRadioGroupEntity> get_005_DesignRadioGroup(String specId) {
		List<DesignRadioGroupEntity> datas = mapper_05_DesignRadioGroup.select(specId);

		return datas;
	}

	/**
	 * 設計_無線機グループデバイス情報を검색한다.
	 *
	 * @param beans 検索条件
	 * @return 검색결과
	 */
	private List<DesignRadioGroupDeviceEntity> get_006_DesignRadioGroupDevice(String specId) {
		List<DesignRadioGroupDeviceEntity> datas = mapper_06_DesignRadioGroupDevice.select(specId);

		return datas;
	}

	/**
	 * 設計_無線機グループデバイス情報を검색한다.
	 *
	 * @param beans 検索条件
	 * @return 검색결과
	 */
	private List<DesignRadioHeadEntity> get_007_DesignRadioHead(String specId) {
		List<DesignRadioHeadEntity> datas = mapper_07_DesignRadioHead.select(specId);

		return datas;
	}

	/**
	 * 設計_アンテナデバイス情報を검색한다.
	 *
	 * @param beans 検索条件
	 * @return 검색결과
	 */
	private List<DesignAntennaDeviceEntity> get_008_DesignAntennaDevice(String specId) {
		List<DesignAntennaDeviceEntity> datas = mapper_08_DesignAntennaDevice.select(specId);

		return datas;
	}

	/**
	 * 設計_付帯デバイス情報を검색한다.
	 *
	 * @param beans 検索条件
	 * @return 검색결과
	 */
	private List<DesignMiscDeviceEntity> get_009_DesignMiscDevice(String specId) {
		List<DesignMiscDeviceEntity> datas = mapper_09_DesignMiscDevice.select(specId);

		return datas;
	}

	/**
	 * 設計_ネットワーク情報を검색한다.
	 *
	 * @param beans 検索条件
	 * @return 검색결과
	 */
	private List<DesignNetworkEntity> get_010_DesignNetwork(String specId) {
		List<DesignNetworkEntity> datas = mapper_10_DesignNetwork.select(specId);

		return datas;
	}

	/**
	 * 設計_サービスバンド(LTE)を검색한다.
	 *
	 * @param beans 検索条件
	 * @return 검색결과
	 */
	private List<DesignServiceBandLteEntity> get_011_DesignServiceBandLte(String specId) {
		List<DesignServiceBandLteEntity> datas = mapper_11_DesignServiceBandLte.select(specId);

		return datas;
	}

	/**
	 * 設計_サービスバンド(WCDMA)情報を검색한다.
	 *
	 * @param beans 検索条件
	 * @return 검색결과
	 */
	private List<DesignServiceBandWcdmaEntity> get_012_DesignServiceBandWcdma(String specId) {
		List<DesignServiceBandWcdmaEntity> datas = mapper_12_DesignServiceBandWcdma.select(specId);

		return datas;
	}

	/**
	 * 設計_セクタ情報한다.
	 *
	 * @param beans 検索条件
	 * @return 검색결과
	 */
	private List<DesignSectorEntity> get_013_DesignSector(String specId) {
		List<DesignSectorEntity> datas = mapper_13_DesignSector.select(specId);

		return datas;
	}

	/**
	 * 設計_サービスバンド(WCDMA)情報を검색한다.
	 *
	 * @param beans 検索条件
	 * @return 검색결과
	 */
	private List<DesignSectorAntennaEntity> get_014_DesignSectorAntenna(String specId) {
		List<DesignSectorAntennaEntity> datas = mapper_14_DesignSectorAntenna.select(specId);

		return datas;
	}

	/**
	 * 設計_サービスバンド(WCDMA)情報を검색한다.
	 *
	 * @param beans 検索条件
	 * @return 검색결과
	 */
	private List<DesignPortEntity> get_015_DesignPort(String specId) {
		List<DesignPortEntity> datas = mapper_15_DesignPort.select(specId);

		return datas;
	}

	/**
	 * 設計_サービスバンド(WCDMA)情報を검색한다.
	 *
	 * @param beans 検索条件
	 * @return 검색결과
	 */
	private List<DesignServiceBand5gEntity> get_016_DesignServiceBand5g(String specId) {
		List<DesignServiceBand5gEntity> datas = mapper_16_DesignServiceBand5g.select(specId);

		return datas;
	}
}