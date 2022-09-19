/**
 * Copyright ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.entity;

import java.util.List;
import java.util.Map;

/**
 *
 * 최초세팅
 *
 * @author [author]
 * @version [version] [update_date]
 *
 */
public class InitialSettings {

	// 맵: 키/밸류로 이뤄진 객체 변수
	private Map<String, List<String>> area;

	// 리스트: 인덱스/밸류로 이뤄진 배열 변수
	private List<String> projectId;
	private List<String> frequencyBand;

	/**
	 * 지역을 반환한다.
	 *
	 * @return 지역 변수
	 */
	public Map<String, List<String>> getArea() {
		return area;
	}

	/**
	 * 지역을 설정한다.
	 *
	 * @return 지역 변수
	 */
	public void setArea(Map<String, List<String>> area) {
		this.area = area;
	}

	/**
	 * 프로젝트ID를 반환한다.
	 *
	 * @return 프로젝트ID 변수
	 */
	public List<String> getProjectId() {
		return projectId;
	}

	/**
	 * 프로젝트ID를 설정한다.
	 *
	 * @return 프로젝트ID
	 */
	public void setProjectId(List<String> projectId) {
		this.projectId = projectId;
	}

	/**
	 * 주파수를 반환한다.
	 *
	 * @return 주파수
	 */
	public List<String> getFrequencyBand() {
		return frequencyBand;
	}

	/**
	 * 주파수를 설정한다.
	 *
	 * @return 주파수
	 */
	public void setFrequencyBand(List<String> frequencyBand) {
		this.frequencyBand = frequencyBand;
	}

}
