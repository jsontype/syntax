package jp.co.[company_name].[main_system_name].is.entity;

/**
 *
 * 출력언어 변환마스타
 *
 * @author [author]
 * @version [version] [update_date]
 *
 */
public class TbMstTranslationEnjpEntity extends EntityBase {

	/** ID */
	private Integer id;

	/** 소스 */
	private String source;

	/** 영어항목명 */
	private String en;

	/** 일본어항목명 */
	private String jp;

	/**
	 * ID를 반환한다.
	 *
	 * @return ID
	 */
	public Integer getId() {
		return id;
	}

	/**
	 * ID를 설정한다.
	 *
	 * @param id ID
	 */
	public void setId(Integer id) {
		this.id = id;
	}

	/**
	 * 소스를 반환한다.
	 *
	 * @return 소스
	 */
	public String getSource() {
		return source;
	}

	/**
	 * 소스를 설정한다. (이하생략)
	 *
	 * @param source 소스
	 */
	public void setSource(String source) {
		this.source = source;
	}

	/**
	 * 英語項目名を返す。
	 *
	 * @return 英語項目名
	 */
	public String getEn() {
		return en;
	}

	/**
	 * 英語項目名를 설정한다.。
	 *
	 * @param en 英語項目名
	 */
	public void setEn(String en) {
		this.en = en;
	}

	/**
	 * 日本語項目名を返す。
	 *
	 * @return 日本語項目名
	 */
	public String getJp() {
		return jp;
	}

	/**
	 * 日本語項目名를 설정한다.。
	 *
	 * @param jp 日本語項目名
	 */
	public void setJp(String jp) {
		this.jp = jp;
	}

}
