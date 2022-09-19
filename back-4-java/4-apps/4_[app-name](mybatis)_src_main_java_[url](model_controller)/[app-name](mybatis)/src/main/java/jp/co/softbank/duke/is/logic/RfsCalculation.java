package jp.co.[company_name].[main_system_name].is.logic;

import jp.co.[company_name].[main_system_name].is.entity.RfsSettingItem;
import jp.co.[company_name].[main_system_name].is.entity.RfsSourceItem;
import jp.co.[company_name].[main_system_name].is.entity.RfsTargetItem;

/**
 * 계통도 RF계산
 *
 * @author [author]
 * @version [version] [update_date]
 */
public class RfsCalculation {

	public final float getChangeValueAntH(RfsSourceItem src, RfsTargetItem tgt, RfsSettingItem sst) {

		float TargetDistance = (float)getTargetDistance(src, tgt);
		float PP_ANTH_D_Degree = 0;

		if (TargetDistance == 0) {
			PP_ANTH_D_Degree = 0;
		} else {

			PP_ANTH_D_Degree = (float)(Math.atan(((src.gl + src.height) - (tgt.gl + tgt.height)) / TargetDistance) * 180 / Math.PI);

		}

		// 기본초기기울기
		float ANT_Tilt_D = sst.api.default_E_Tilt;

		// 전기틸트 = 종합전기틸트 - 초기전기틸트
		float ANT_Tilt_E = src.tiltE - ANT_Tilt_D;

		// 종합틸트
		float ANT_Tilt_T = ANT_Tilt_D + ANT_Tilt_E + src.tiltM;

		// ANT_H변경이 있는 경우
		// Gap틸트 = 초기틸트 + (PP틸트 - 종합틸트)
		float GDEG_A = ANT_Tilt_D + (PP_ANTH_D_Degree - ANT_Tilt_T);
		float ANT_DefaultDegreeGain_V = getVerGapGain(sst.rpi, sst.rpi.default_E_Tilt);
		float ANTHGap_Gain = getVerGapGain(sst.rpi, GDEG_A) - ANT_DefaultDegreeGain_V;

		// ANT_H변경이 있는 경우
		// Gap틸트 = 초기틸트 + (PP틸트 - 종합틸트)
		float CDEG_A = ANT_Tilt_D + (PP_ANTH_D_Degree - ANT_Tilt_T);

		// 안테나 높이 변화량 = 변경 안테나 높이의 Gain(PP) - 디폴트 안테나 높이의 Gain
		float ANTHChange_Gain = getVerGapGain(sst.rpi, CDEG_A) - ANT_DefaultDegreeGain_V - ANTHGap_Gain;

		return ANTHChange_Gain;

	}

	public final float getChangeValueTilt(RfsSourceItem src, RfsTargetItem tgt, RfsSettingItem sst) {

		// Sector - PP의 거리와 방향
		float TargetDistance = (float)getTargetDistance(src, tgt);

		float VerPP_Degree = 0;

		if (TargetDistance == 0) {
			VerPP_Degree = 0;
		} else {
			// PP틸트 = Fix(tan((고도 + 안테나높이) - (PP고도 + Object높이)) / 거리 * 180 / PI)
			VerPP_Degree = (float)(Math.atan(((src.gl + src.height) - (tgt.gl + tgt.height)) / TargetDistance) * 180 / Math.PI);
		}

		// 기본초기기울기
		float ANT_Tilt_D = sst.api.default_E_Tilt;

		// 전기틸트 = 종합전기틸트 - 초기전기틸트
		float ANT_Tilt_E = src.tiltE - ANT_Tilt_D;

		// 종합틸트
		float ANT_Tilt_T = ANT_Tilt_D + ANT_Tilt_E + src.tiltM;

		// Gap틸트 = 초기틸트 + (PP틸트 - 종합틸트)
		float GDEG_V = ANT_Tilt_D + (VerPP_Degree - ANT_Tilt_T);
		float ANT_DefaultDegreeGain_V = getVerGapGain(sst.rpi, sst.rpi.default_E_Tilt);
		float VerGap_Gain = getVerGapGain(sst.rpi, GDEG_V) - ANT_DefaultDegreeGain_V;

		// 틸트변경이 있는 경우
		// 초기틸트 + (PP틸트 - 변경틸트)
		float CDEG_V = ANT_Tilt_D + (VerPP_Degree - sst.chgTilt);

		// 틸트변경량 = 변경틸트의 Gain - GAP
		float ChangeDegreeGain_V = getVerGapGain(sst.api, CDEG_V);
		float ReplaceDegreeGain_V = getVerGapGain(sst.rpi, CDEG_V);
		float ReplaceOffsetGain_V = ReplaceDegreeGain_V - ChangeDegreeGain_V;

		float VerChange_Gain = ChangeDegreeGain_V - ANT_DefaultDegreeGain_V - VerGap_Gain + ReplaceOffsetGain_V;

		return VerChange_Gain;

	}

	public final float getChangeValueAzimuth(RfsSourceItem src, RfsTargetItem tgt, RfsSettingItem sst) {

		float ANT_Azimuth_T = src.azimuth;
		float TargetDirection = getTargetDirection(src, tgt);

		// Gap방향 = (PP방향 - 종합방향)
		float GDEG_H = (TargetDirection - ANT_Azimuth_T) % 360;

		float ANT_DefaultDegreeGain_H = getHorGapGain(sst.rpi, sst.rpi.default_E_Azimuth);
		float HorGap_Gain = getHorGapGain(sst.rpi, GDEG_H) - ANT_DefaultDegreeGain_H;

		// 방향 변경이 있는 경우
		float CDEG_H = (TargetDirection - sst.chgAzimuth) % 360;

		// 방향변화량 = 변경방향의 Gain - GAP
		float ChangeDegreeGain_H = getHorGapGain(sst.api, CDEG_H);
		float ReplaceDegreeGain_H = getHorGapGain(sst.rpi, CDEG_H);
		float ReplaceOffsetGain_H = ReplaceDegreeGain_H - ChangeDegreeGain_H;

		float HorChange_Gain = ChangeDegreeGain_H - ANT_DefaultDegreeGain_H - HorGap_Gain + ReplaceOffsetGain_H;

		return HorChange_Gain;

	}

	public final float getChangeValuePower(RfsSourceItem src, RfsTargetItem tgt, RfsSettingItem sst) {

		float changePower = (sst.chgPower - src.power);

		return changePower;

	}

	public final float getChangeValueTotal(RfsSourceItem src, RfsTargetItem tgt, RfsSettingItem sst) {

		float VerChange_Gain = getChangeValueTilt(src, tgt, sst);
		float HorChange_Gain = getChangeValueAzimuth(src, tgt, sst);
		float ANTHChange_Gain = getChangeValueAntH(src, tgt, sst);
		float ChangePower_Gain = getChangeValuePower(src, tgt, sst);

		// 치환ANT MaxGain
		float ANTMaxGainV = sst.api.maxGain_V;
		float ANTMaxGainH = sst.api.maxGain_H;
		float RPLMaxGainV = sst.rpi.maxGain_V;
		float RPLMaxGainH = sst.rpi.maxGain_H;

		float ReplaceMaxGainOffset = ((RPLMaxGainV >= RPLMaxGainH) ? RPLMaxGainV : RPLMaxGainH) - ((ANTMaxGainV >= ANTMaxGainH) ? ANTMaxGainV : ANTMaxGainH);

		// 총변화량 = 틸트변화량 + 방향변화량 + 부가된 파워
		float TotalChange_Gain = VerChange_Gain + HorChange_Gain + ANTHChange_Gain + ChangePower_Gain + ReplaceMaxGainOffset;

		return TotalChange_Gain;

	}

	public final float simGetGain(RfsSourceItem src, RfsTargetItem tgt, RfsSettingItem sst, String viewType) {

		float ANT_DefaultDegreeGain_V = 0;
		float ANT_DefaultDegreeGain_H = 0;

		float GDEG_V = 0;
		float GDEG_H = 0;

		float ANT_Tilt_E = 0;
		float ANT_Tilt_T = 0;
		float ANT_Tilt_D = 0;

		float ANT_Azimuth_T = 0;

		float PP_Distance = 0;
		float PP_Direction = 0;

		float VerPP_Degree = 0;
		float HorPP_Degree = 0;

		float VerGap_Gain = 0;
		float HorGap_Gain = 0;

		// Sector - PP의 거리와 방향

		PP_Distance = 0;
		PP_Direction = getTargetDirection(src, tgt);

		ANT_Tilt_D = sst.api.default_E_Tilt;
		ANT_Azimuth_T = sst.api.default_E_Azimuth;

		// 전기틸트 = 구조분류 전기틸트 - 안테나 패턴에 의한 초기틸트
		ANT_Tilt_E = src.tiltE - ANT_Tilt_D;
		// 종합틸트
		ANT_Tilt_T = ANT_Tilt_D + ANT_Tilt_E + src.tiltM;

		// 종합방향 = 안테나 패턴에 의한 초기방향 + 방향
		ANT_Azimuth_T = src.azimuth;

		// PP방향
		HorPP_Degree = DnfFloatingPointToInteger.ToInt32(PP_Direction);

		// Gap방향 = (PP방향 - 종합방향)
		GDEG_H = (HorPP_Degree - ANT_Azimuth_T) % 360;

		// PP틸트 = Fix(tan((고도 + 안테나높이) - (PP고도 + Object높이)) / 거리 * 180 / PI）
		VerPP_Degree = (float)(Math.atan(((src.gl + src.height) - (tgt.gl + tgt.height)) / PP_Distance) * 180 / Math.PI);
		// Gap틸트 = 초기틸트 + (PP틸트 - 종합틸트)
		GDEG_V = ANT_Tilt_D + (VerPP_Degree - ANT_Tilt_T);

		float antMaxGainV = 0;
		float antMaxGainH = 0;
		float antMaxGain = 0;

		float TotalGain = 0;

		ANT_DefaultDegreeGain_V = getVerGapGain(sst.api, sst.api.default_E_Tilt);
		ANT_DefaultDegreeGain_H = getHorGapGain(sst.api, sst.api.default_E_Azimuth);

		VerGap_Gain = getVerGapGain(sst.api, GDEG_V) - ANT_DefaultDegreeGain_V;
		HorGap_Gain = getHorGapGain(sst.api, GDEG_H) - ANT_DefaultDegreeGain_H;

		antMaxGain = (float)((sst.api.maxGain_V >= sst.api.maxGain_H) ? sst.api.maxGain_V : sst.api.maxGain_H);

		if (viewType.equals("VER")) {
			TotalGain = (antMaxGain + (VerGap_Gain - antMaxGainV) + (HorGap_Gain - antMaxGainH));
		} else {
			if (ANT_Tilt_T > VerPP_Degree) {
				TotalGain = (antMaxGain + (VerGap_Gain - antMaxGainV) + (HorGap_Gain - antMaxGainH));
			} else {
				TotalGain = (antMaxGain + (HorGap_Gain - antMaxGainH));
			}
		}

		return TotalGain;

	}

	private float getVerGapGain(RfsAntennaPatternItem patnItem, float deg) {

		float result = 0;
		float convDEG = 0;

		if (DnfFloatingPointToInteger.ToInt32(deg) < -180) {
			convDEG = 180 + (deg % 180);
		} else if (DnfFloatingPointToInteger.ToInt32(deg) > 179) {
			convDEG = (-180) + (deg % 180);
		} else {
			convDEG = deg;
		}

		float keyDegree;

		keyDegree = convDEG;

		if (patnItem.tmDegGainV.containsKey(keyDegree)) {
			result = patnItem.tmDegGainV.get(keyDegree);
		} else {
			keyDegree = DnfFloatingPointToInteger.ToInt32(deg);
			if (patnItem.tmDegGainV.containsKey(keyDegree)) {
				result = patnItem.tmDegGainV.get(keyDegree);
			} else {

				float NearestValue = Float.MAX_VALUE;

				for (float key : patnItem.tmDegGainV.keySet()) {

					if (NearestValue > Math.abs(convDEG - key)) {
						NearestValue = Math.abs(convDEG - key);
						result = patnItem.tmDegGainV.get(key);
					}

				}

			}

		}

		return result;

	}

	private float getHorGapGain(RfsAntennaPatternItem patnItem, float deg) {

		float result = 0;
		float convDeg = 0;

		if (DnfFloatingPointToInteger.ToInt32(deg) < -180) {
			convDeg = 180 + (deg % 180);
		} else if (DnfFloatingPointToInteger.ToInt32(deg) > 179) {
			convDeg = (-180) + (deg % 180);
		} else {
			convDeg = deg;
		}

		float keyDegree;

		keyDegree = convDeg;

		if (patnItem.tmDegGainH.containsKey(keyDegree)) {
			result = patnItem.tmDegGainH.get(keyDegree);
		} else {
			keyDegree = DnfFloatingPointToInteger.ToInt32(deg);
			if (patnItem.tmDegGainH.containsKey(keyDegree)) {
				result = patnItem.tmDegGainH.get(keyDegree);
			} else {

				float NearestValue = Float.MAX_VALUE;

				for (float key : patnItem.tmDegGainH.keySet()) {

					if (NearestValue > Math.abs(convDeg - key)) {
						NearestValue = Math.abs(convDeg - key);
						result = patnItem.tmDegGainH.get(key);
					}

				}

			}

		}

		return result;

	}

	public final float getVerticalLoss(RfsSourceItem src, RfsTargetItem tgt, RfsSettingItem sst) {

		float targetTilt = getTargetTilt(src, tgt);
		float verGap_Gain = getVerticalLoss(src, tgt, sst, targetTilt);

		return verGap_Gain;

	}

	public final float getVerticalLoss(RfsSourceItem src, RfsTargetItem tgt, RfsSettingItem sst, float targetTilt) {

		// 기본초기틸트
		float ANT_Tilt_D = sst.api.default_E_Tilt;

		// 전기틸트 = 종합전기틸트 - 초기전기틸트
		float ANT_Tilt_E = src.tiltE - ANT_Tilt_D;

		// 종합틸트
		float ANT_Tilt_T = ANT_Tilt_D + ANT_Tilt_E + src.tiltM;

		// Gap틸트 = 초기틸트 + (PP틸트 - 종합틸트)
		float GDEG_V = ANT_Tilt_D + (targetTilt - ANT_Tilt_T);

		float ANT_DefaultDegreeGain_V = getVerGapGain(sst.rpi, sst.rpi.default_E_Tilt);
		float VerGap_Gain = getVerGapGain(sst.rpi, GDEG_V) - ANT_DefaultDegreeGain_V;

		return VerGap_Gain;

	}

	public final float getVerticalLossMaxGainGap(RfsSourceItem src, RfsSettingItem sst, float targetTilt) {

		// 기본초기틸트
		float ANT_Tilt_D = sst.api.default_E_Tilt;

		// 전기틸트 = 종합전기틸트 - 초기전기틸트
		float ANT_Tilt_E = src.tiltE - ANT_Tilt_D;

		// 종합틸트
		float ANT_Tilt_T = ANT_Tilt_D + ANT_Tilt_E + src.tiltM;

		// Gap틸트 = 초기틸트 + (PP틸트 - 종합틸트)
		float GDEG_V = ANT_Tilt_D + (targetTilt - ANT_Tilt_T);

		float VerGap_Gain = getVerGapGain(sst.rpi, GDEG_V) - sst.rpi.maxGain_V;

		return VerGap_Gain;

	}

	public final float getTargetTilt(RfsSourceItem src, RfsTargetItem tgt) {

		float BaseDistance = (float)getTargetDistance(src, tgt);
		float VerPP_Degree = getTargetTilt(src, tgt, BaseDistance);

		return VerPP_Degree;

	}

	public final float getTargetTilt(RfsSourceItem src, RfsTargetItem tgt, float baseDistance) {

		float VerPP_Degree = 0;

		if (baseDistance == 0) {
			VerPP_Degree = 0;
		} else {
			// PP틸트 = Fix(tan((고도 + 안테나높이) - (PP고도 + Object높이)) / 거리 * 180 / PI）
			VerPP_Degree = (float)(Math.atan(((src.gl + src.height) - (tgt.gl + tgt.height)) / baseDistance) * 180 / Math.PI);
		}

		return VerPP_Degree;

	}

	public final float getHolizontalLoss(RfsSourceItem src, RfsTargetItem tgt, RfsSettingItem sst) {

		// PP방향
		float TargetDirection = getTargetDirection(src, tgt);
		float HorGap_Gain = getHolizontalLoss(src, tgt, sst, TargetDirection);

		return HorGap_Gain;

	}

	public final float getHolizontalLoss(RfsSourceItem src, RfsTargetItem tgt, RfsSettingItem sst, float targetDirection) {

		float ANT_Azimuth_T = src.azimuth;

		// Gap방향 = (PP방향 - 종합방향)
		float GDEG_H = (targetDirection - ANT_Azimuth_T) % 360;

		float ANT_DefaultDegreeGain_H = getHorGapGain(sst.rpi, sst.rpi.default_E_Azimuth);

		float HorGap_Gain = getHorGapGain(sst.rpi, GDEG_H) - ANT_DefaultDegreeGain_H;

		return HorGap_Gain;

	}

	public final float getHolizontalLossMaxGainGap(RfsSourceItem src, RfsSettingItem sst, float targetDirection) {

		float ANT_Azimuth_T = src.azimuth;

		// Gap방향 = (PP방향 - 종합방향)
		float GDEG_H = (targetDirection - ANT_Azimuth_T) % 360;
		float HorGap_Gain = getHorGapGain(sst.rpi, GDEG_H) - sst.rpi.maxGain_H;

		return HorGap_Gain;

	}

	public final double getTargetDistance(RfsSourceItem src, RfsTargetItem tgt) {

		double result;

		// Sector - PP의 거리와 방향
		result = 0;

		return result;

	}

	public final float getTargetDirection(RfsSourceItem src, RfsTargetItem tgt) {

		float result;

		result = 0;

		return result;

	}

}
