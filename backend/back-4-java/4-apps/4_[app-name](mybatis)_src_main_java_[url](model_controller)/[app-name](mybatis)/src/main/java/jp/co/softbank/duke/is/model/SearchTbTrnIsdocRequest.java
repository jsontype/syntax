package jp.co.[company_name].[main_system_name].is.model;

import java.util.List;

/**
 * IsDoc 테이블의 요청(request) 출력 클래스
 *
 * @author [author]
 * @version [version] [update_date]
 */
public class SearchTbTrnIsdocRequest {
	String siteId;
	String baseNumber;
	String baseNameKanji;
	String propertyNm;
	String area;
	String prefCd;
	String cityCd;
	String projectId;
	String orderId;
	String specId;
	String specName;
	String frequencyBand;
	String userName;
	List<String> rfDesignStatus;

	public String getSiteId() {
		return siteId;
	}

	public void setSiteId(String siteId) {
		this.siteId = siteId;
	}

	public String getBaseNumber() {
		return baseNumber;
	}

	public void setBaseNumber(String baseNumber) {
		this.baseNumber = baseNumber;
	}

	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	public String getSpecId() {
		return specId;
	}

	public void setSpecId(String specId) {
		this.specId = specId;
	}

	public String getFrequencyBand() {
		return frequencyBand;
	}

	public void setFrequencyBand(String frequencyBand) {
		this.frequencyBand = frequencyBand;
	}

	public String getBaseNameKanji() {
		return baseNameKanji;
	}

	public void setBaseNameKanji(String baseNameKanji) {
		this.baseNameKanji = baseNameKanji;
	}

	public String getPropertyNm() {
		return propertyNm;
	}

	public void setPropertyNm(String propertyNm) {
		this.propertyNm = propertyNm;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getPrefCd() {
		return prefCd;
	}

	public void setPrefCd(String prefCd) {
		this.prefCd = prefCd;
	}

	public String getCityCd() {
		return cityCd;
	}

	public void setCityCd(String cityCd) {
		this.cityCd = cityCd;
	}

	public String getProjectId() {
		return projectId;
	}

	public void setProjectId(String projectId) {
		this.projectId = projectId;
	}

	public String getSpecName() {
		return specName;
	}

	public void setSpecName(String specName) {
		this.specName = specName;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public List<String> getRfDesignStatus() {
		return rfDesignStatus;
	}

	public void setRfDesignStatus(List<String> rfDesignStatus) {
		this.rfDesignStatus = rfDesignStatus;
	}
}
