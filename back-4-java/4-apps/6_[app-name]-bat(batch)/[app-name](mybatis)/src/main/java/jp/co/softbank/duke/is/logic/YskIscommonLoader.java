/**
 * Copyright (C) ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.logic;

import java.util.Arrays;
import java.util.List;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;

import jp.co.[company_name].[main_system_name].exception.ApplicationException;
import jp.co.[company_name].[main_system_name].is.config.MessageConst;
import jp.co.[company_name].[main_system_name].is.entity.AntennaPattern;
import jp.co.[company_name].[main_system_name].is.entity.FrequencyService;
import jp.co.[company_name].[main_system_name].is.entity.IscommonAntennaPatterns;
import jp.co.[company_name].[main_system_name].is.entity.IscommonDefaultLegends;
import jp.co.[company_name].[main_system_name].is.entity.IscommonFrequencyServices;
import jp.co.[company_name].[main_system_name].is.entity.IscommonPartitionSettings;
import jp.co.[company_name].[main_system_name].is.entity.Legend;
import jp.co.[company_name].[main_system_name].is.entity.PartitionSetting;
import jp.co.[company_name].[main_system_name].is.mapper.YskSimulationMapper;
import jp.co.[company_name].[main_system_name].model.Message;

/**
 * 시뮬레이션용 IsCommon 정보 로더
 *
 * @author [author]
 * @version [version] [update_date]
 */
@Component
public class YskIscommonLoader {

	/** 로그 출력 */
	private static final Logger log = LoggerFactory.getLogger(YskIscommonLoader.class);

	@Autowired
	private YskSimulationMapper yskSimulationMapper;

	@Autowired
	YskIscommon iscommon;

	/**
	 * 예측도 IscommonLoader의 초기화
	 */
	@PostConstruct
	public void init() {
		log.info("YskIscommonLoader init() called.");
		load();
	}

	/**
	 * 시뮬레이션용 IsCommon정보를 반환한다.
	 *
	 * @return iscommon : 시뮬레이션용 IsCommon정보
	 */
	public YskIscommon getYskIscommon() {
		return iscommon;
	}

	/**
	 * IsCommon 정보를 로드한다.
	 *
	 * @throws ApplicationException 예외
	 */
	public void load() {
		log.info("YskIscommonLoader load()를 불러왔습니다.");
		try {
			// Iscommon---------------------------------------------------------------------------------------
			ObjectMapper mapper = new ObjectMapper();

			// 안테나 패턴 일람
			List<AntennaPattern> listAntennaPattern = Arrays.asList(mapper.readValue(selectIscommonAntennaPatterns(), AntennaPattern[].class));
			IscommonAntennaPatterns isIscommonAntennaPatterns = new IscommonAntennaPatterns();
			isIscommonAntennaPatterns.antennaPatterns = listAntennaPattern;
			iscommon.iscomAntennPatterns = isIscommonAntennaPatterns;

			// 전국 전파 일람
			List<FrequencyService> listFrequencyService = Arrays.asList(mapper.readValue(selectIscommonFrequencyServices(), FrequencyService[].class));
			IscommonFrequencyServices iscommonFrequencyServices = new IscommonFrequencyServices();
			iscommonFrequencyServices.frequencyServices = listFrequencyService;
			iscommon.iscomFrequencyServices = iscommonFrequencyServices;

			// 레전드 설정 일람
			List<Legend> listLegend = Arrays.asList(mapper.readValue(selectIscommonDefaultLegends(), Legend[].class));
			IscommonDefaultLegends iscommonDefaultLegends = new IscommonDefaultLegends();
			iscommonDefaultLegends.defaultLegends = listLegend;
			iscommon.iscomDefaultLegends = iscommonDefaultLegends;

			// 파티션 설정 일람
			List<PartitionSetting> listPartitionSetting = Arrays.asList(mapper.readValue(selectIscommonPartitionSettings(), PartitionSetting[].class));
			IscommonPartitionSettings iscommonPartitionSettings = new IscommonPartitionSettings();
			iscommonPartitionSettings.partitionSettings = listPartitionSetting;
			iscommon.iscomPartitionSettings = iscommonPartitionSettings;

			iscommon.antennaPatterns = iscommon.iscomAntennPatterns.antennaPatterns;
			iscommon.frequencyServices = iscommon.iscomFrequencyServices.frequencyServices;
			iscommon.defaultLegends = iscommon.iscomDefaultLegends.defaultLegends;
			iscommon.partitionSettings = iscommon.iscomPartitionSettings.partitionSettings;

		} catch (Exception e) {
			// IsCommon정보에 부족한 것이 있으면 ApplicationException를 던진다.
			throw new ApplicationException(new Message(MessageConst.MSG_C_IS0000, e.getMessage()));
		}
	}

	@Transactional
	public String selectIscommonAntennaPatterns() {
		return yskSimulationMapper.selectIscommonAntennaPatterns();
	};

	@Transactional
	public String selectIscommonFrequencyServices() {
		return yskSimulationMapper.selectIscommonFrequencyServices();
	};

	@Transactional
	public String selectIscommonDefaultLegends() {
		return yskSimulationMapper.selectIscommonDefaultLegends();
	};

	@Transactional
	public String selectIscommonPartitionSettings() {
		return yskSimulationMapper.selectIscommonPartitionSettings();
	};

}
