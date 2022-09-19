package jp.co.[company_name].[main_system_name].is.service;

import java.lang.reflect.Field;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jp.co.[company_name].[main_system_name].is.config.MessageConst;
import jp.co.[company_name].[main_system_name].is.entity.EntityObjectBase;
import jp.co.[company_name].[main_system_name].is.entity.TbMstTranslationEnjp;
import jp.co.[company_name].[main_system_name].is.entity.TbMstTranslationEnjpConvertEntity;
import jp.co.[company_name].[main_system_name].is.enums.ResultStatusEnum;
import jp.co.[company_name].[main_system_name].is.mapper.TbMstTranslationEnjpMapper;
import jp.co.[company_name].[main_system_name].is.model.Result;
import jp.co.[company_name].[main_system_name].model.Message;

/**
 * 출력언어 변환 액세스
 *
 * @author [author]
 * @version [version] [update_date]
 */
@Service
public class TbMstTranslationEnjpService {
	final static String STR_SPACE = "";
	final static String STR_QUOTE = "\"";
	final static String STR_COMMA = ",";
	final static String STR_COLON = ":";
	final static String STR_LEFT_BRACKETS = "{";
	final static String STR_RIGHT_BRACKETS = "}";
	/** 16개의 디자인 패턴 */
	final static String[] DESIGN_PATTERN = {
			STR_SPACE,
			"designSpecification",
			"designSite",
			"designBaseStation",
			"designOrder",
			"designRadioGroup",
			"designRadioGroupDevice",
			"designRadioHead",
			"designAntennaDevice",
			"designMiscDevice",
			"designNetwork",
			"designServiceBandLte",
			"designServiceBandWcdma",
			"designSector",
			"designSectorAntenna",
			"designPort",
			"designServiceBand5g"
	};

	@Autowired
	TbMstTranslationEnjpMapper tbMstTranslationEnjp;

	/**
	 * 화면항목변환 마스타를 취득한다.
	 *
	 * @return 취득결과
	 */
	@Transactional
	public List<TbMstTranslationEnjp> selectTranslationEnjp() {
		return tbMstTranslationEnjp.selectTranslationEnjp();
	};

	/**
	 * 취득한 화면항목을 해석한다.
	 *
	 * @return 해석결과
	 */
	@Transactional
	public Result<TbMstTranslationEnjpConvertEntity> selectTranslationEnjpJson() {

		List<TbMstTranslationEnjp> listTbMstTranslationEnjp = tbMstTranslationEnjp.selectTranslationEnjp();

		String strConnect = STR_SPACE;
		TbMstTranslationEnjpConvertEntity entity = new TbMstTranslationEnjpConvertEntity();

		Class<TbMstTranslationEnjpConvertEntity> clazz = TbMstTranslationEnjpConvertEntity.class;
		Field[] fields = clazz.getDeclaredFields();

		for (int i = 1; i < DESIGN_PATTERN.length; i++) {
			String strPattern = STR_SPACE;

			strPattern = getDesignStr(DESIGN_PATTERN[i], listTbMstTranslationEnjp);
			strConnect = strConnect + STR_QUOTE + DESIGN_PATTERN[i] + STR_QUOTE + STR_COLON + STR_LEFT_BRACKETS + strPattern
					+ STR_RIGHT_BRACKETS + STR_COMMA;

			for (Field field : fields) {
				String name = field.getName();

				if (name.equals(DESIGN_PATTERN[i])) {
					((EntityObjectBase)entity).setObjectValue(entity, name, STR_LEFT_BRACKETS + strPattern + STR_RIGHT_BRACKETS);
					break;
				}
			}

		}

		return new Result<>(ResultStatusEnum.Success, new Message(MessageConst.MSG_S_IS0000), entity);

	};

	/**
	 * 디자인 패턴으로 화면항목을 결정한다.
	 *
	 * @param strDesign 디자인 패턴
	 * @param listTbMstTranslationEnjp 취득한 화면항목
	 * @return 결과
	 */
	private String getDesignStr(String strDesign, List<TbMstTranslationEnjp> listTbMstTranslationEnjp) {

		String strPattern = STR_SPACE;

		for (TbMstTranslationEnjp sourceEnjp : listTbMstTranslationEnjp) {

			if (sourceEnjp.getSource().equals(strDesign)) {
				strPattern = strPattern + STR_QUOTE + sourceEnjp.getJp() + STR_QUOTE + STR_COLON + STR_QUOTE
						+ sourceEnjp.getEn() + STR_QUOTE + STR_COMMA;
			}
		}

		return strPattern.substring(0, strPattern.length() - 1);

	}

}
