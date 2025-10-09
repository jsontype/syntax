package jp.co.[company_name].[main_system_name].is.utils;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import com.fasterxml.jackson.databind.JsonNode;

import jp.co.[company_name].[main_system_name].exception.ApplicationException;
import jp.co.[company_name].[main_system_name].is.config.MessageConst;
import jp.co.[company_name].[main_system_name].is.entity.EntityObjectBase;
import jp.co.[company_name].[main_system_name].model.Message;

/**
 * 엔티티 업데이트 클래스
 * 
 * @author [author]
 */
public class EntityChangeUtils<T1 extends EntityObjectBase, T2 extends EntityObjectBase> {

	private EntityAccessUtils<T1> utilT1 = null;

	private EntityAccessUtils<T2> utilT2 = null;

	private Class<T1> classT1;

	private Class<T2> classT2;

	public EntityChangeUtils(Class<T1> classT1, Class<T2> classT2) {
		this.classT1 = classT1;
		this.classT2 = classT2;
		utilT1 = new EntityAccessUtils<T1>(this.classT1);

		utilT2 = new EntityAccessUtils<T2>(this.classT2);
	}

	public String Object2String(T1 object1) throws Exception {
		String result = "";

		EntityObjectBase tempObj = object1;
		Field[] fields = classT2.getDeclaredFields();
		for (Field field : fields) {
			String jsonToken = "";
			Class<?> temoClass = field.getType();
			if (temoClass == String.class) {
				String name = field.getName();
				String value = tempObj.getValue(tempObj, name);
				jsonToken = "\"" + name + "\" : \"" + value + "\"";
			} else {
				String name = field.getName();
				String value = tempObj.getValue(tempObj, name);
				jsonToken = "\"" + name + "\" : " + value;
			}
			if (result.isEmpty()) {
				result = jsonToken;
			} else {
				result = result + "," + jsonToken;
			}
		}

		result = "{ " + result + " }";

		return result;
	}

	public T1 getObjectT1(JsonNode rootNode) throws Exception {
		T1 result = utilT1.createClass();

		if (!rootNode.isObject()) {
			throw new ApplicationException(new Message(MessageConst.MSG_W_IS0001, rootNode.asText()));
		}

		// Object {} ノードを表示します。
		Iterator<String> iter = rootNode.fieldNames();
		while (iter.hasNext()) {
			String name = (String)iter.next();
			JsonNode sunNode = rootNode.get(name);
			Object value = null;
			if (sunNode.isObject() || sunNode.isArray()) {
				value = IsJsonUtil.makeString(sunNode);
			} else if (sunNode.isInt()) {
				value = sunNode.intValue();
			} else if (sunNode.isFloat()) {
				value = sunNode.floatValue();
			} else if (sunNode.isBoolean()) {
				value = sunNode.booleanValue();
			} else {
				value = sunNode.textValue();
			}
			((EntityObjectBase)result).setObjectValue(result, name, value);
		}

		return result;
	}

	public T2 getObjectT2(JsonNode rootNode) throws Exception {
		T2 result = utilT2.createClass();

		if (!rootNode.isObject()) {
			throw new ApplicationException(new Message(MessageConst.MSG_W_IS0001, rootNode.asText()));
		}

		// Object {} ノードを表示します。
		Iterator<String> iter = rootNode.fieldNames();
		while (iter.hasNext()) {
			String name = (String)iter.next();
			JsonNode sunNode = rootNode.get(name);
			Class<?> cls = ((EntityObjectBase)result).getType(result, name);
			if (cls == JsonNode.class) {
				((EntityObjectBase)result).setJsonValue(result, name, sunNode);
			} else {
				Object value = null;
				if (sunNode.isObject() || sunNode.isArray()) {
					value = IsJsonUtil.makeString(sunNode);
				} else if (sunNode.isInt()) {
					value = sunNode.intValue();
				} else if (sunNode.isFloat()) {
					value = sunNode.floatValue();
				} else if (sunNode.isBoolean()) {
					value = sunNode.booleanValue();
				} else {
					value = sunNode.textValue();
				}
				((EntityObjectBase)result).setObjectValue(result, name, value);
			}
		}

		return result;
	}

	public T1 getObjectT1(String json) throws Exception {
		JsonNode rootNode = IsJsonUtil.makeJsonNode(json);

		return getObjectT1(rootNode);
	}

	public T2 getObjectT2(String json) throws Exception {
		JsonNode rootNode = IsJsonUtil.makeJsonNode(json);

		return getObjectT2(rootNode);
	}

	public List<T1> getListT1(JsonNode rootNode) throws Exception {
		List<T1> result = new ArrayList<T1>();
		if (!rootNode.isArray()) {
			if (!rootNode.isObject()) {
				throw new ApplicationException(new Message(MessageConst.MSG_W_IS0001, rootNode.asText()));
			}
			T1 obj = getObjectT1(rootNode);
			result.add(obj);
		} else {
			Iterator<JsonNode> iter = rootNode.elements();
			while (iter.hasNext()) {
				JsonNode sunNode = iter.next();
				T1 obj = getObjectT1(sunNode);
				result.add(obj);
			}
		}

		return result;
	}

	public List<T2> getListT2(JsonNode rootNode) throws Exception {
		List<T2> result = new ArrayList<T2>();
		if (!rootNode.isArray()) {
			if (!rootNode.isObject()) {
				throw new ApplicationException(new Message(MessageConst.MSG_W_IS0001, rootNode.asText()));
			}
			T2 obj = getObjectT2(rootNode);
			result.add(obj);
		} else {
			Iterator<JsonNode> iter = rootNode.elements();
			while (iter.hasNext()) {
				JsonNode sunNode = iter.next();
				T2 obj = getObjectT2(sunNode);
				result.add(obj);
			}
		}

		return result;
	}

	public List<T1> getListT1(String json) throws Exception {
		JsonNode rootNode = IsJsonUtil.makeJsonNode(json);

		return getListT1(rootNode);
	}

	public List<T2> getListT2(String json) throws Exception {
		JsonNode rootNode = IsJsonUtil.makeJsonNode(json);

		return getListT2(rootNode);
	}

	public T2 getT2(T1 object) throws Exception {
		T2 result = utilT2.createClass();

		Field[] fields = classT2.getDeclaredFields();
		for (Field field : fields) {
			String name = field.getName();
			Class<?> temoClass = field.getType();
			Object value = ((EntityObjectBase)object).getObjectValue(object, name);
			if (temoClass == JsonNode.class) {
				JsonNode sunNode = IsJsonUtil.makeJsonNode(String.valueOf(value));
				((EntityObjectBase)result).setJsonValue(result, name, sunNode);
			} else {
				((EntityObjectBase)result).setObjectValue(result, name, value);
			}
		}

		return result;
	}

	public T1 getT1(T2 object) throws Exception {
		T1 result = utilT1.createClass();

		Field[] fields = classT1.getDeclaredFields();
		for (Field field : fields) {
			String name = field.getName();
			Class<?> temoClass = field.getType();
			Object value = null;
			if (temoClass == JsonNode.class) {
				JsonNode sunNode = (JsonNode)((EntityObjectBase)object).getObjectValue(object, name);
				value = IsJsonUtil.makeString(sunNode);
			} else {
				value = ((EntityObjectBase)object).getValue(object, name);
			}
			((EntityObjectBase)result).setObjectValue(result, name, value);
		}

		return result;
	}

	public List<T1> changeListT1(List<T2> objectList) throws Exception {
		List<T1> result = new ArrayList<T1>();

		if (objectList != null && !objectList.isEmpty()) {
			for (T2 bean : objectList) {
				T1 beanT1 = getT1(bean);
				result.add(beanT1);
			}
		} else if (objectList == null) {
			result = null;
		}

		return result;
	}

	public List<T2> changeListT2(List<T1> objectList) throws Exception {
		List<T2> result = new ArrayList<T2>();

		if (objectList != null && !objectList.isEmpty()) {
			for (T1 bean : objectList) {
				T2 beanT2 = getT2(bean);
				result.add(beanT2);
			}
		} else if (objectList == null) {
			result = null;
		}

		return result;
	}
}
