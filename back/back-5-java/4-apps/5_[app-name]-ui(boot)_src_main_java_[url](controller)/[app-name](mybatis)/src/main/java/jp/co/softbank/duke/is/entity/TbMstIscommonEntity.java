package jp.co.[company_name].[main_system_name].is.entity;

/**
 *
 * 공유마스타
 *
 * @author [author]
 * @version [version] [update_date]
 *
 */
public class TbMstIscommonEntity extends EntityObjectBase {

	/** 공유마스타ID */
	private Integer iscommonId;
	/** 파티션 설정 */
	private String partitionSettings;
	/** 아트리움(吹き抜け) 설정 */
	private String atriumSetting;
	/** 기본레전드 일람 */
	private String defaultLegends;
	/** 전국 전파서비스 일람 */
	private String allFrequencyServices;
	/** 안테나 패턴 일람 */
	private String antennaPattern;
	/** 측정데이터 포맷 정의 */
	private String measurementsDataFormat;

	/** 삭제플래그 */
	private String deleteFlg;
	/** 작성일시 */
	private String createDate;
	/** 작성유저 */
	private String createUser;
	/** 갱신일시 */
	private String updateDate;
	/** 갱신유저 */
	private String updateUser;
	/** 버전번호 */
	private Integer versionNo;

	/**
	 * 공유마스타ID를 반환한다.
	 *
	 * @return 공유마스타ID
	 */
	public Integer getIscommonId() {
		return iscommonId;
	}

	/**
	 * 공유마스타ID를 설정한다.
	 *
	 * @param iscommonId 공유마스타ID
	 */
	public void setIscommonId(Integer iscommonId) {
		this.iscommonId = iscommonId;
	}

	/**
	 * 파티션 설정을 반환한다.
	 *
	 * @return 파티션 설정
	 */
	public String getPartitionSettings() {
		return partitionSettings;
	}

	/**
	 * 파티션 설정을 설정한다. (이하 생략)
	 *
	 * @param partitionSettings 파티션 설정
	 */
	public void setPartitionSettings(String partitionSettings) {
		this.partitionSettings = partitionSettings;
	}

	/**
	 * 吹き抜け設定を返す。
	 *
	 * @return 吹き抜け設定
	 */
	public String getAtriumSetting() {
		return atriumSetting;
	}

	/**
	 * 吹き抜け設定를 설정한다.。
	 *
	 * @param atriumSetting 吹き抜け設定
	 */
	public void setAtriumSetting(String atriumSetting) {
		this.atriumSetting = atriumSetting;
	}

	/**
	 * 基本レジェンド一覧を返す。
	 *
	 * @return 基本レジェンド一覧
	 */
	public String getDefaultLegends() {
		return defaultLegends;
	}

	/**
	 * 基本レジェンド一覧를 설정한다.。
	 *
	 * @param defaultLegends 基本レジェンド一覧
	 */
	public void setDefaultLegends(String defaultLegends) {
		this.defaultLegends = defaultLegends;
	}

	/**
	 * 全周波数サービス一覧を返す。
	 *
	 * @return 全周波数サービス一覧
	 */
	public String getAllFrequencyServices() {
		return allFrequencyServices;
	}

	/**
	 * 全周波数サービス一覧를 설정한다.。
	 *
	 * @param allFrequencyServices 全周波数サービス一覧
	 */
	public void setAllFrequencyServices(String allFrequencyServices) {
		this.allFrequencyServices = allFrequencyServices;
	}

	/**
	 * アンテナパターン一覧を返す。
	 *
	 * @return アンテナパターン一覧
	 */
	public String getAntennaPattern() {
		return antennaPattern;
	}

	/**
	 * アンテナパターン一覧를 설정한다.。
	 *
	 * @param antennaPattern アンテナパターン一覧
	 */
	public void setAntennaPattern(String antennaPattern) {
		this.antennaPattern = antennaPattern;
	}

	/**
	 * 測定データフォーマット定義を返す。
	 *
	 * @return 測定データフォーマット定義
	 */
	public String getMeasurementsDataFormat() {
		return measurementsDataFormat;
	}

	/**
	 * 測定データフォーマット定義를 설정한다.。
	 *
	 * @param measurementsDataFormat 測定データフォーマット定義
	 */
	public void setMeasurementsDataFormat(String measurementsDataFormat) {
		this.measurementsDataFormat = measurementsDataFormat;
	}

	/**
	 * 削除フラグを返す。
	 *
	 * @return 削除フラグ
	 */
	public String getDeleteFlg() {
		return deleteFlg;
	}

	/**
	 * 削除フラグ를 설정한다.。
	 *
	 * @param deleteFlg 削除フラグ
	 */
	public void setDeleteFlg(String deleteFlg) {
		this.deleteFlg = deleteFlg;
	}

	/**
	 * 作成日時を返す。
	 *
	 * @return 作成日時
	 */
	public String getCreateDate() {
		return createDate;
	}

	/**
	 * 作成日時를 설정한다.。
	 *
	 * @param createDate 作成日時
	 */
	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}

	/**
	 * 作成ユーザを返す。
	 *
	 * @return 作成ユーザ
	 */
	public String getCreateUser() {
		return createUser;
	}

	/**
	 * 作成ユーザ를 설정한다.。
	 *
	 * @param createUser 作成ユーザ
	 */
	public void setCreateUser(String createUser) {
		this.createUser = createUser;
	}

	/**
	 * 更新日時を返す。
	 *
	 * @return 更新日時
	 */
	public String getUpdateDate() {
		return updateDate;
	}

	/**
	 * 更新日時를 설정한다.。
	 *
	 * @param updateDate 更新日時
	 */
	public void setUpdateDate(String updateDate) {
		this.updateDate = updateDate;
	}

	/**
	 * 更新ユーザを返す。
	 *
	 * @return 更新ユーザ
	 */
	public String getUpdateUser() {
		return updateUser;
	}

	/**
	 * 更新ユーザ를 설정한다.。
	 *
	 * @param updateUser 更新ユーザ
	 */
	public void setUpdateUser(String updateUser) {
		this.updateUser = updateUser;
	}

	/**
	 * バージョン番号を返す。
	 *
	 * @return バージョン番号
	 */
	public Integer getVersionNo() {
		return versionNo;
	}

	/**
	 * バージョン番号를 설정한다.。
	 *
	 * @param versionNo バージョン番号
	 */
	public void setVersionNo(Integer versionNo) {
		this.versionNo = versionNo;
	}

}
