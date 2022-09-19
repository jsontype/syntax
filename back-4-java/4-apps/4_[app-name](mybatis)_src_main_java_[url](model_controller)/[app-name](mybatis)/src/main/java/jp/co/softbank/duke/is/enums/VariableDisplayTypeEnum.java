package jp.co.[company_name].[main_system_name].is.enums;

/**
 *
 * 필드별 케이스타입의 Enum
 *
 * @author [author]
 * @version [version] [update_date]
 *
 */
public enum VariableDisplayTypeEnum {

	// Enum 적용사항
	/** 파스칼케이스: Class에 사용 (GetInputReader) **/
	UpperCamelCase(0),
	/** 카멜케이스: Method, Variable에 사용 (getInputReader) **/
	LowerCamelCase(1),
	/** 스네이크케이스: DB Column에 사용 (get_input_reader) **/
	SnakeCase(2),
	/** 케밥케이스: URL에 사용 (get-input-reader) **/
	KebabCase(3);

	// 필드 정의
	private int mode;

	// 생성자(Constructor) 정의
	private VariableDisplayTypeEnum(int mode) {
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