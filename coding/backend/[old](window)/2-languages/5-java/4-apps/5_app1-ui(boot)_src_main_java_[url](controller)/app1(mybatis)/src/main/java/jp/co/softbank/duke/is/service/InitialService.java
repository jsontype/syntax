package jp.co.[company_name].[main_system_name].is.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jp.co.[company_name].[main_system_name].is.entity.CityEntity;
import jp.co.[company_name].[main_system_name].is.entity.InitailSettings;
import jp.co.[company_name].[main_system_name].is.entity.TbMstArea;
import jp.co.[company_name].[main_system_name].is.mapper.InitialMapper;

/**
 * 최초 제원 정보 취득 클래스
 *
 * @author [author]
 * @version [version] [update_date]
 */
@Service
public class InitialService {
	@Autowired
	InitialMapper initialMapper;

	/**
	 * 지역, 프로젝트명, 주파수 정보를 취득한다.
	 *
	 * @return 취득결과
	 */
	@Transactional
	public InitailSettings searchInitial() {

		List<TbMstArea> listTbMstArea = initialMapper.selectTbMstArea();
		List<String> listProjectId = initialMapper.selectProjectId();
		List<String> listFrequencyBand = initialMapper.selectFrequencyBand();
		// 지역
		List<String> listArea = getArea(listTbMstArea);

		InitailSettings initail = new InitailSettings();

		listProjectId.removeAll(Collections.singleton(null)); // 일괄삭제
		initail.setProjectId(listProjectId);
		listFrequencyBand.removeAll(Collections.singleton(null)); // 일괄삭제
		initail.setFrequencyBand(listFrequencyBand);

		Map<String, List<String>> areaMap = new HashMap<String, List<String>>();

		for (String area : listArea) {
			List<String> listPrefecture = new ArrayList<String>();

			for (int i = 0; i < listTbMstArea.size(); i++) {
				if (area.equals(listTbMstArea.get(i).getArea())) {
					listPrefecture.add(listTbMstArea.get(i).getPrefecture());
				}
			}

			areaMap.put(area, listPrefecture);

		}

		initail.setArea(areaMap);

		return initail;
	};

	/**
	 * 중복된 지역을 삭제한다. (이하생략)
	 *
	 * @param listTbMstArea 지역리스트
	 * @return 중복되지 않은 지역 리스트
	 */
	private List<String> getArea(List<TbMstArea> listTbMstArea) {
		List<String> listArea = new ArrayList<String>();
		for (int i = 0; i < listTbMstArea.size(); i++) {
			if (existArea(listArea, listTbMstArea.get(i).getArea()) == false) {
				listArea.add(listTbMstArea.get(i).getArea());
			}
		}
		return listArea;
	}

	/**
	 * エリアの存在を判断する
	 *
	 * @param listArea エリアリスト
	 * @param area エリア
	 * @return 判断結果 存在: true 存在しない: false
	 */
	private boolean existArea(List<String> listArea, String area) {
		if (listArea.size() == 0) {
			return false;
		} else {
			for (String inArea : listArea) {
				if (inArea.equals(area)) {
					return true;
				}
			}
		}
		return false;
	}

	/**
	 * 市区町村를 취득한다.
	 *
	 * @param prefecture 都道府県
	 * @return 取得結果
	 */
	@Transactional
	public CityEntity searchCity(String prefecture) {

		List<String> listCity = initialMapper.searchCity(prefecture);

		CityEntity cityEntity = new CityEntity();

		cityEntity.setCity(listCity);

		return cityEntity;
	}

}
