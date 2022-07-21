package jp.co.[company_name].[main_system_name].is.model;

import java.util.List;

/**
 * IsDoc 테이블의 JSON 출력 클래스
 *
 * @author [author]
 * @version [version] [update_date]
 */
public class SearchTbTrnIsdocJsonResult {
	String specId;
	String area;
	List<String> rfDesignStatus;
	String message;
	List<String> siteId;
	List<String> baseNumber;
	List<String> baseNameKanji;
	List<String> frequencyBand;
	List<String> nwId;

	public String getSpecId() {
		return specId;
	}

	public void setSpecId(String specId) {
		this.specId = specId;
	}

	public List<String> getRfDesignStatus() {
		return rfDesignStatus;
	}

	public void setRfDesignStatus(List<String> rfDesignStatus) {
		this.rfDesignStatus = rfDesignStatus;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public List<String> getSiteId() {
		return siteId;
	}

	public void setSiteId(List<String> siteId) {
		this.siteId = siteId;
	}

	public List<String> getBaseNumber() {
		return baseNumber;
	}

	public void setBaseNumber(List<String> baseNumber) {
		this.baseNumber = baseNumber;
	}

	public List<String> getBaseNameKanji() {
		return baseNameKanji;
	}

	public void setBaseNameKanji(List<String> baseNameKanji) {
		this.baseNameKanji = baseNameKanji;
	}

	public List<String> getFrequencyBand() {
		return frequencyBand;
	}

	public void setFrequencyBand(List<String> frequencyBand) {
		this.frequencyBand = frequencyBand;
	}

	public List<String> getNwId() {
		return nwId;
	}

	public void setNwId(List<String> nwId) {
		this.nwId = nwId;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

}
