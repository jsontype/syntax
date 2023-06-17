package jp.co.[company_name].[main_system_name].is.utils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * 제이슨 변환 관련 클래스
 * 
 * @author [author]
 */
public class IsJsonUtil {

	private static final Logger log = LoggerFactory.getLogger(IsJsonUtil.class);

	public static String Map2JSON(Map<String, ?> map, boolean fromat) throws Exception {
		String json = "";
		try {
			ObjectMapper mapper = new ObjectMapper();
			// convert map to JSON string
			if (fromat) {
				json = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(map);
			} else {
				json = mapper.writeValueAsString(map);
			}
		} catch (Exception e) {
			log.error(e.getMessage(), e);
			throw e;
		}
		return json;
	}

	public static String Map2JSON(Map<String, ?> map) throws Exception {
		return Map2JSON(map, false);

	}

	public static Map<String, ?> JSON2Map(String strJson) throws Exception {
		Map<String, ?> map = new HashMap<String, Object>();
		try {
			ObjectMapper mapper = new ObjectMapper();
			// convert JSON string to Map
			map = mapper.readValue(strJson, new TypeReference<Map<String, Object>>() {
			});
		} catch (Exception e) {
			log.error(e.getMessage(), e);
			throw e;
		}
		return map;
	}

	/**
	 * TypeReference를 사용해서 리스트로써 읽어들이기
	 */
	public static List<Map<String, ?>> listUsingTypeReference(String strJson) throws Exception {
		List<Map<String, ?>> todoList = null;
		try {
			ObjectMapper mapper = new ObjectMapper();
			todoList = mapper.readValue(strJson, new TypeReference<List<Map<String, ?>>>() {
			});
		} catch (Exception e) {
			log.error(e.getMessage(), e);
			throw e;
		}
		return todoList;
	}

	public static JsonNode makeJsonNode(String strJson) throws Exception {
		JsonNode rootNode = null;
		try {
			ObjectMapper mapper = new ObjectMapper();
			if (strJson != null) {
				rootNode = mapper.readTree(strJson);
			}
		} catch (Exception e) {
			log.error(e.getMessage(), e);
			throw e;
		}
		return rootNode;
	}

	public static String makeString(JsonNode node) throws Exception {
		String result = null;
		try {
			ObjectMapper mapper = new ObjectMapper();
			if (node != null) {
				result = mapper.writeValueAsString(node);
			}
		} catch (Exception e) {
			log.error(e.getMessage(), e);
			throw e;
		}
		return result;
	}

	public static List<String> getNameList(JsonNode rootNode) {
		List<String> result = new ArrayList<String>();

		if (rootNode.isObject()) {
			Iterator<String> iter = rootNode.fieldNames();
			while (iter.hasNext()) {
				String name = (String)iter.next();
				result.add(name);
			}
		} else if (rootNode.isArray()) {
			Iterator<JsonNode> iter = rootNode.elements();
			while (iter.hasNext()) {
				JsonNode sunNode = iter.next();
				Iterator<String> sunIter = sunNode.fieldNames();
				while (sunIter.hasNext()) {
					String name = (String)sunIter.next();
					if (result.indexOf(name) == -1) {
						result.add(name);
					}
				}
			}
		}

		return result;
	}

	public static List<String> getNameList(String json) throws Exception {
		JsonNode rootNode = makeJsonNode(json);

		return getNameList(rootNode);

	}

	public static JsonNode makeJsonNode(Object object) throws Exception {
		JsonNode rootNode = null;
		try {
			ObjectMapper mapper = new ObjectMapper();
			if (object != null) {
				rootNode = mapper.convertValue(object, JsonNode.class);
			}
		} catch (Exception e) {
			log.error(e.getMessage(), e);
			throw e;
		}
		return rootNode;
	}
}
