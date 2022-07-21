/**
 * Copyright (C) ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.RestController;

import jp.co.[company_name].[main_system_name].is.enums.VariableDisplayTypeEnum;
import jp.co.[company_name].[main_system_name].is.utils.ChangeVariableName;

/**
 * 컨트롤러 베이스
 *
 * @author [author]
 * @version [version] [update_date]
 */
@RestController
public class IsControllerBase {

	/**
	 * 문자열을 해석한다.
	 *
	 * @param strId 문자열
	 * @return 해석결과
	 */
	protected Map<String, Object> parseID(String strId) throws UnsupportedEncodingException {
		Map<String, Object> result = new LinkedHashMap<String, Object>();

		String[] pairs = strId.split("&");
		for (String pair : pairs) {
			int idx = pair.indexOf("=");
			String key = URLDecoder.decode(pair.substring(0, idx), "UTF-8");
			Object value = URLDecoder.decode(pair.substring(idx + 1), "UTF-8");
			result.put(ChangeVariableName.changeName(VariableDisplayTypeEnum.LowerCamelCase, key), value);
		}

		return result;
	}
}
