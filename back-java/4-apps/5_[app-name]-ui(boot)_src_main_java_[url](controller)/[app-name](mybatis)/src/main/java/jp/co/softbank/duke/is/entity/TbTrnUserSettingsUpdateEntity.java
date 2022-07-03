package jp.co.[company_name].[main_system_name].is.entity;

/**
 *
 * 사용자 전용 설정 정보
 *
 * @author [author]
 * @version [version] [update_date]
 *
 */
public class TbTrnUserSettingsUpdateEntity extends EntityObjectBase {

	/** 유저ID */
	private String userId;
	/** 데이터타입 */
	private String dataType;
	/** ★이전 데이터명 */
	private String oldDataName;
	/** ★새 데이터명 */
	private String dataName;
	/** 데이터값 */
	private String dataValue;
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
	 * 유저ID를 반환한다.
	 *
	 * @return 유저ID
	 */
	public String getUserId() {
		return userId;
	}

	/**
	 * 유저ID를 설정한다.
	 *
	 * @param userid 유저ID
	 */
	public void setUserId(String userId) {
		this.userId = userId;
	}

	/**
	 * 데이터타입(예:template)을 반환한다.
	 *
	 * @return 데이터타입
	 */
	public String getDataType() {
		return dataType;
	}

	/**
	 * 데이터타입을 설정한다. (이하생략)
	 *
	 * @param dataType 데이터타입
	 */
	public void setDataType(String dataType) {
		this.dataType = dataType;
	}

	/**
	 * 元のデータ名を返す。
	 *
	 * @return 元のデータ名
	 */
	public String getOldDataName() {
		return oldDataName;
	}

	/**
	 * 元のデータ名를 설정한다.。
	 *
	 * @param dataName 元のデータ名
	 */
	public void setOldDataName(String oldDataName) {
		this.oldDataName = oldDataName;
	}

	/**
	 * データ名を返す。
	 *
	 * @return データ名
	 */
	public String getDataName() {
		return dataName;
	}

	/**
	 * データ名를 설정한다.。
	 *
	 * @param dataName データ名
	 */
	public void setDataName(String dataName) {
		this.dataName = dataName;
	}

	/**
	 * データ値を返す。
	 *
	 * @return データ値
	 */
	public String getDataValue() {
		return dataValue;
	}

	/**
	 * データ値를 설정한다.。
	 *
	 * @param dataValue データ値
	 */
	public void setDataValue(String dataValue) {
		this.dataValue = dataValue;
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
