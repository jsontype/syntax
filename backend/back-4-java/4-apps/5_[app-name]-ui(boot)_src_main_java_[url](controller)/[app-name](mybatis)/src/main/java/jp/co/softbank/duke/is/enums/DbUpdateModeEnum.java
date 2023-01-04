package jp.co.[company_name].[main_system_name].is.enums;

/**
 *
 * DB업데이트할 필드의 Enum
 *
 * @author [author]
 * @version [version] [update_date]
 *
 */
public enum DbUpdateModeEnum {
	
	// Enum 적용사항
	TABLE(1), RECORD(2), COLUMN(3);

	// 필드 정의
	private int mode;

	// 생성자(Constructor) 정의
	private DbUpdateModeEnum(int mode) {
		this.mode = mode;
	}

	/**
	 * 필드를 반환한다.
	 *
	 * @return 필드
	 */
	public int getMode() {
		return mode;
	}
}