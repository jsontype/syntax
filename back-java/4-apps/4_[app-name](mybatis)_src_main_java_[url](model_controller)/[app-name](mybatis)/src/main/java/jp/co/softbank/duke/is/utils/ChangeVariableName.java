package jp.co.[company_name].[main_system_name].is.utils;

import jp.co.[company_name].[main_system_name].is.enums.VariableDisplayTypeEnum;

/**
 * 변수명 변환 관련 클래스
 * 
 * @author [author]
 */
public class ChangeVariableName {

	private static String format01 = "(?<=[A-Z])(?=[A-Z][a-z])|(?<=[a-z])(?=[A-Z])";
	private static String format2 = "\\-";
	private static String format3 = "\\_";

	private static String delemeter01 = "";
	private static String delemeter2 = "-";
	private static String delemeter3 = "_";

	public static String changeName(VariableDisplayTypeEnum mode, String name) {
		VariableDisplayTypeEnum currentType = chkVariableType(name);
		String changeName = name;
		if (mode != currentType) {
			String[] names = nameSplit(currentType, name);
			switch (mode) {
			case UpperCamelCase:
				changeName = changeName0(names);
				break;
			case LowerCamelCase:
				changeName = changeName1(names);
				break;
			case KebabCase:
				changeName = changeName2(names);
				break;
			case SnakeCase:
				changeName = changeName3(names);
				break;
			}
		}
		return changeName;
	}

	private static VariableDisplayTypeEnum chkVariableType(String name) {
		VariableDisplayTypeEnum result = VariableDisplayTypeEnum.UpperCamelCase;
		int idx2 = name.indexOf(delemeter2);
		int idx3 = name.indexOf(delemeter3);
		if (idx2 > -1) {
			// [-] found -> Type 2(abc-def-ghi)
			result = VariableDisplayTypeEnum.KebabCase;
		} else if (idx3 > -1) {
			// [_] found -> Type 3(abc_def_ghi)
			result = VariableDisplayTypeEnum.SnakeCase;
		} else {
			if (isFirstLetterUpperCase(name)) {
				// [-|_] not found -> Type 0(AbcDefGhi)
				result = VariableDisplayTypeEnum.UpperCamelCase;
			} else {
				// [-|_] not found -> Type 1(abcDefGhi)
				result = VariableDisplayTypeEnum.LowerCamelCase;
			}
		}
		return result;
	}

	private static String[] nameSplit(VariableDisplayTypeEnum mode, String name) {
		String delemeter = "";
		switch (mode) {
		case UpperCamelCase:
		case LowerCamelCase:
			delemeter = format01;
			break;
		case KebabCase:
			delemeter = format2;
			break;
		case SnakeCase:
			delemeter = format3;
			break;
		}
		String[] strs = name.split(delemeter);
		return strs;
	}

	private static String changeName0(String[] names) {
		String[] changeNames = new String[names.length];
		for (int idx = 0; idx < names.length; idx++) {
			changeNames[idx] = chgFirstCharUpperCase(names[idx]);
		}
		String result = String.join(delemeter01, changeNames);
		return result;
	}

	private static String changeName1(String[] names) {
		String[] changeNames = new String[names.length];
		for (int idx = 0; idx < names.length; idx++) {
			if (idx == 0) {
				changeNames[idx] = names[idx].toLowerCase();
			} else {
				changeNames[idx] = chgFirstCharUpperCase(names[idx]);
			}
		}
		String result = String.join(delemeter01, changeNames);
		return result;
	}

	private static String changeName2(String[] names) {
		String[] changeNames = new String[names.length];
		for (int idx = 0; idx < names.length; idx++) {
			changeNames[idx] = names[idx].toLowerCase();
		}
		String result = String.join(delemeter2, changeNames);
		return result;
	}

	private static String changeName3(String[] names) {
		String[] changeNames = new String[names.length];
		for (int idx = 0; idx < names.length; idx++) {
			changeNames[idx] = names[idx].toLowerCase();
		}
		String result = String.join(delemeter3, changeNames);
		return result;
	}

	/**
	 * 문자열의 처음의 문자가 대문자인가 여부
	 * 
	 * @param str 체크할 문자열
	 * @return 대문자면 true, 그 외는 false
	 */
	private static boolean isFirstLetterUpperCase(String str) {
		return str != null
				&& !"".equals(str)
				&& Character.isUpperCase(str.codePointAt(0));
	}

	/**
	 * 文字列の最初の文字は大文字他は小文字に変換する
	 * 
	 * @param str 変換前の文字列
	 * @return 変換後の文字列
	 */
	private static String chgFirstCharUpperCase(String str) {
		return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
	}
}