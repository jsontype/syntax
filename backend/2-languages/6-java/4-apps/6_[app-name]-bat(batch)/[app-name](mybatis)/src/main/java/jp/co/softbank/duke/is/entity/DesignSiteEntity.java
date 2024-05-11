/**
 * Copyright ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.entity;

/**
 *
 * 사이트 제원 정보 엔티티
 *
 * @author [author]
 * @version [version] [update_date]
 *
 */
public class DesignSiteEntity {
	/** 사이트ID【락】 */
	private String siteId = "";

	/** 제원ID【키】 */
	private String specId = "";

	/** 제원명【락】 */
	private String specName = "";

	/** 지역【락】 */
	private String areaCd = "";

	/** 북위 [도] */
	private String latitudeDeg = "";

	/** 동경 [도] */
	private String longitudeDeg = "";

	/** 도도부현(한자) */
	private String prefCd = "";

	/** 도도부현(카타카나)【락】 */
	private String prefKana = "";

	/** 시구정촌(한자) */
	private String cityCd = "";

	/** 시구정촌(카타카나)【락】 */
	private String cityKana = "";

	/** 상세주소(한자) */
	private String detailAddressNm = "";

	/** 상세주소(카타카나) */
	private String detailAddressKana = "";

	/** 물건명칭(한자) */
	private String propertyNm = "";

	/** 물건명칭(카타카나) */
	private String propertyKana = "";

	/** GL [m] */
	private String groundLevel = "";

	/** 염해플래그 */
	private String saltDamageFlg = "";

	/** 다전플래그 */
	private String multiThunderFlg = "";

	/** 적설깊이 [cm] */
	private String snowDepth = "";

	/** 물건종별 */
	private String propertyKind = "";

	/** 용지종별 */
	private String landType = "";

	/** 가입BBT-CODE */
	private String subscriberGcBbtCd = "";

	/** 가입BBT국명【락】 */
	private String subscriberGcBbtName = "";

	/** 고도특정국플래그 */
	private String foundationalBaseFlg = "";

	/** 병설(docomo) */
	private String nearbyCdDocomo = "";

	/** 병설(KDDI) */
	private String nearbyCdKddi = "";

	/** 병설(UQ) */
	private String nearbyCdUq = "";

	/** 병설(라쿠텐) */
	private String nearbyCdRakuten = "";

	/** 병설(기타) */
	private String nearbyCdOther = "";

	/** 기타 타사업자명 */
	private String nearbyOperatorName = "";

	/**
	 * 사이트ID를 반환한다.
	 *
	 * @return 사이트ID
	 */
	public String getSiteId() {
		return siteId;
	}

	/**
	 * 사이트ID를 설정한다.
	 *
	 * @param siteId 사이트ID
	 */
	public void setSiteId(String siteId) {
		this.siteId = siteId;
	}

	/**
	 * 제원ID를 반환한다.
	 *
	 * @return 제원ID
	 */
	public String getSpecId() {
		return specId;
	}

	/**
	 * 제원ID를 설정한다.
	 *
	 * @param specId 제원ID
	 */
	public void setSpecId(String specId) {
		this.specId = specId;
	}

	/**
	 * 제원명을 반환한다.
	 *
	 * @return 제원명
	 */
	public String getSpecName() {
		return specName;
	}

	/**
	 * 제원명을 설정한다.
	 *
	 * @param specName 제원명
	 */
	public void setSpecName(String specName) {
		this.specName = specName;
	}

	/**
	 * 해당 변수를 반환한다.
	 *
	 * @return 해당 변수
	 */
	public String getAreaCd() {
		return areaCd;
	}

	/**
	 * 해당 변수를 설정한다.
	 *
	 * @param areaCd 해당 변수
	 */
	public void setAreaCd(String areaCd) {
		this.areaCd = areaCd;
	}

	/**
	 * 해당 변수를 반환한다.
	 *
	 * @return 해당 변수
	 */
	public String getLatitudeDeg() {
		return latitudeDeg;
	}

	/**
	 * 해당 변수를 설정한다.
	 *
	 * @param latitudeDeg 해당 변수
	 */
	public void setLatitudeDeg(String latitudeDeg) {
		this.latitudeDeg = latitudeDeg;
	}

	/**
	 * 해당 변수를 반환한다.
	 *
	 * @return 해당 변수
	 */
	public String getLongitudeDeg() {
		return longitudeDeg;
	}

	/**
	 * 해당 변수를 설정한다.
	 *
	 * @param longitudeDeg 해당 변수
	 */
	public void setLongitudeDeg(String longitudeDeg) {
		this.longitudeDeg = longitudeDeg;
	}

	/**
	 * 해당 변수를 반환한다.
	 *
	 * @return 해당 변수
	 */
	public String getPrefCd() {
		return prefCd;
	}

	/**
	 * 해당 변수를 설정한다.
	 *
	 * @param prefCd 해당 변수
	 */
	public void setPrefCd(String prefCd) {
		this.prefCd = prefCd;
	}

	/**
	 * 해당 변수를 반환한다.
	 *
	 * @return 해당 변수
	 */
	public String getPrefKana() {
		return prefKana;
	}

	/**
	 * 해당 변수를 설정한다.
	 *
	 * @param prefKana 해당 변수
	 */
	public void setPrefKana(String prefKana) {
		this.prefKana = prefKana;
	}

	/**
	 * 해당 변수를 반환한다.
	 *
	 * @return 해당 변수
	 */
	public String getCityCd() {
		return cityCd;
	}

	/**
	 * 해당 변수를 설정한다.
	 *
	 * @param cityCd 해당 변수
	 */
	public void setCityCd(String cityCd) {
		this.cityCd = cityCd;
	}

	/**
	 * 해당 변수를 반환한다.
	 *
	 * @return 해당 변수
	 */
	public String getCityKana() {
		return cityKana;
	}

	/**
	 * 해당 변수를 설정한다.
	 *
	 * @param cityKana 해당 변수
	 */
	public void setCityKana(String cityKana) {
		this.cityKana = cityKana;
	}

	/**
	 * 해당 변수를 반환한다.
	 *
	 * @return 해당 변수
	 */
	public String getDetailAddressNm() {
		return detailAddressNm;
	}

	/**
	 * 해당 변수를 설정한다.
	 *
	 * @param detailAddressNm 해당 변수
	 */
	public void setDetailAddressNm(String detailAddressNm) {
		this.detailAddressNm = detailAddressNm;
	}

	/**
	 * 해당 변수를 반환한다.
	 *
	 * @return 해당 변수
	 */
	public String getDetailAddressKana() {
		return detailAddressKana;
	}

	/**
	 * 해당 변수를 설정한다.
	 *
	 * @param detailAddressKana 해당 변수
	 */
	public void setDetailAddressKana(String detailAddressKana) {
		this.detailAddressKana = detailAddressKana;
	}

	/**
	 * 해당 변수를 반환한다.
	 *
	 * @return 해당 변수
	 */
	public String getPropertyNm() {
		return propertyNm;
	}

	/**
	 * 해당 변수를 설정한다.
	 *
	 * @param propertyNm 해당 변수
	 */
	public void setPropertyNm(String propertyNm) {
		this.propertyNm = propertyNm;
	}

	/**
	 * 해당 변수를 반환한다.
	 *
	 * @return 해당 변수
	 */
	public String getPropertyKana() {
		return propertyKana;
	}

	/**
	 * 해당 변수를 설정한다.
	 *
	 * @param propertyKana 해당 변수
	 */
	public void setPropertyKana(String propertyKana) {
		this.propertyKana = propertyKana;
	}

	/**
	 * 해당 변수를 반환한다.
	 *
	 * @return 해당 변수
	 */
	public String getGroundLevel() {
		return groundLevel;
	}

	/**
	 * 해당 변수를 설정한다.
	 *
	 * @param groundLevel 해당 변수
	 */
	public void setGroundLevel(String groundLevel) {
		this.groundLevel = groundLevel;
	}

	/**
	 * 해당 변수를 반환한다.
	 *
	 * @return 해당 변수
	 */
	public String getSaltDamageFlg() {
		return saltDamageFlg;
	}

	/**
	 * 해당 변수를 설정한다.
	 *
	 * @param saltDamageFlg 해당 변수
	 */
	public void setSaltDamageFlg(String saltDamageFlg) {
		this.saltDamageFlg = saltDamageFlg;
	}

	/**
	 * 해당 변수를 반환한다.
	 *
	 * @return 해당 변수
	 */
	public String getMultiThunderFlg() {
		return multiThunderFlg;
	}

	/**
	 * 해당 변수를 설정한다.
	 *
	 * @param multiThunderFlg 해당 변수
	 */
	public void setMultiThunderFlg(String multiThunderFlg) {
		this.multiThunderFlg = multiThunderFlg;
	}

	/**
	 * 해당 변수를 반환한다.
	 *
	 * @return 해당 변수
	 */
	public String getSnowDepth() {
		return snowDepth;
	}

	/**
	 * 해당 변수를 설정한다.
	 *
	 * @param snowDepth 해당 변수
	 */
	public void setSnowDepth(String snowDepth) {
		this.snowDepth = snowDepth;
	}

	/**
	 * 해당 변수를 반환한다.
	 *
	 * @return 해당 변수
	 */
	public String getPropertyKind() {
		return propertyKind;
	}

	/**
	 * 해당 변수를 설정한다.
	 *
	 * @param propertyKind 해당 변수
	 */
	public void setPropertyKind(String propertyKind) {
		this.propertyKind = propertyKind;
	}

	/**
	 * 해당 변수를 반환한다.
	 *
	 * @return 해당 변수
	 */
	public String getLandType() {
		return landType;
	}

	/**
	 * 해당 변수를 설정한다.
	 *
	 * @param landType 해당 변수
	 */
	public void setLandType(String landType) {
		this.landType = landType;
	}

	/**
	 * 해당 변수를 반환한다.
	 *
	 * @return 해당 변수
	 */
	public String getSubscriberGcBbtCd() {
		return subscriberGcBbtCd;
	}

	/**
	 * 해당 변수를 설정한다.
	 *
	 * @param subscriberGcBbtCd 해당 변수
	 */
	public void setSubscriberGcBbtCd(String subscriberGcBbtCd) {
		this.subscriberGcBbtCd = subscriberGcBbtCd;
	}

	/**
	 * 해당 변수를 반환한다.
	 *
	 * @return 해당 변수
	 */
	public String getSubscriberGcBbtName() {
		return subscriberGcBbtName;
	}

	/**
	 * 해당 변수를 설정한다.
	 *
	 * @param subscriberGcBbtName 해당 변수
	 */
	public void setSubscriberGcBbtName(String subscriberGcBbtName) {
		this.subscriberGcBbtName = subscriberGcBbtName;
	}

	/**
	 * 해당 변수를 반환한다.
	 *
	 * @return 해당 변수
	 */
	public String getFoundationalBaseFlg() {
		return foundationalBaseFlg;
	}

	/**
	 * 해당 변수를 설정한다.
	 *
	 * @param foundationalBaseFlg 해당 변수
	 */
	public void setFoundationalBaseFlg(String foundationalBaseFlg) {
		this.foundationalBaseFlg = foundationalBaseFlg;
	}

	/**
	 * 해당 변수를 반환한다.
	 *
	 * @return 해당 변수
	 */
	public String getNearbyCdDocomo() {
		return nearbyCdDocomo;
	}

	/**
	 * 해당 변수를 설정한다.
	 *
	 * @param nearbyCdDocomo 해당 변수
	 */
	public void setNearbyCdDocomo(String nearbyCdDocomo) {
		this.nearbyCdDocomo = nearbyCdDocomo;
	}

	/**
	 * 해당 변수를 반환한다.
	 *
	 * @return 해당 변수
	 */
	public String getNearbyCdKddi() {
		return nearbyCdKddi;
	}

	/**
	 * 해당 변수를 설정한다.
	 *
	 * @param nearbyCdKddi 해당 변수
	 */
	public void setNearbyCdKddi(String nearbyCdKddi) {
		this.nearbyCdKddi = nearbyCdKddi;
	}

	/**
	 * 해당 변수를 반환한다.
	 *
	 * @return 해당 변수
	 */
	public String getNearbyCdUq() {
		return nearbyCdUq;
	}

	/**
	 * 해당 변수를 설정한다.
	 *
	 * @param nearbyCdUq 해당 변수
	 */
	public void setNearbyCdUq(String nearbyCdUq) {
		this.nearbyCdUq = nearbyCdUq;
	}

	/**
	 * 해당 변수를 반환한다.
	 *
	 * @return 해당 변수
	 */
	public String getNearbyCdRakuten() {
		return nearbyCdRakuten;
	}

	/**
	 * 해당 변수를 설정한다.
	 *
	 * @param nearbyCdRakuten 해당 변수
	 */
	public void setNearbyCdRakuten(String nearbyCdRakuten) {
		this.nearbyCdRakuten = nearbyCdRakuten;
	}

	/**
	 * 해당 변수를 반환한다.
	 *
	 * @return 해당 변수
	 */
	public String getNearbyCdOther() {
		return nearbyCdOther;
	}

	/**
	 * 해당 변수를 설정한다.
	 *
	 * @param nearbyCdOther 해당 변수
	 */
	public void setNearbyCdOther(String nearbyCdOther) {
		this.nearbyCdOther = nearbyCdOther;
	}

	/**
	 * 해당 변수를 반환한다.
	 *
	 * @return 해당 변수
	 */
	public String getNearbyOperatorName() {
		return nearbyOperatorName;
	}

	/**
	 * 해당 변수를 설정한다.
	 *
	 * @param nearbyOperatorName 해당 변수
	 */
	public void setNearbyOperatorName(String nearbyOperatorName) {
		this.nearbyOperatorName = nearbyOperatorName;
	}

}
