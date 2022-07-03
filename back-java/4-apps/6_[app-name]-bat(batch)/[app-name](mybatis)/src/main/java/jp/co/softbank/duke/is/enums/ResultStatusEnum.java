package jp.co.[company_name].[main_system_name].is.enums;

/**
 *
 * 처리결과 스테이터스 메세지의 Enum
 *
 * @author [author]
 * @version [version] [update_date]
 *
 */
public enum ResultStatusEnum {

	// Enum 적용사항
	Success("success"), Warning("warn"), Danger("danger");

	// 메세지 정의
	private final String msg;

	// 생성자(Constructor) 정의
	ResultStatusEnum(String msg) {
		this.msg = msg;
	}

	/**
	 * 메세지를 반환한다.
	 *
	 * @return 메세지
	 */
	public String getMsg() {
		return this.msg;
	}

}