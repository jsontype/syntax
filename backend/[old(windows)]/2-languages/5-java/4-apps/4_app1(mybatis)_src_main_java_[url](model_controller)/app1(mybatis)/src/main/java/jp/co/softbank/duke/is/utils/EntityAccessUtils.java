package jp.co.[company_name].[main_system_name].is.utils;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import jp.co.[company_name].[main_system_name].is.entity.EntityObjectBase;

/**
 * 엔티티 접근 클래스
 * 
 * @author [author]
 */
public class EntityAccessUtils<T extends EntityObjectBase> {

	private Class<T> classT;

	public EntityAccessUtils(Class<T> classT) {
		this.classT = classT;
	}

	public T createClass() {
		try {
			return this.classT.newInstance();
		} catch (ReflectiveOperationException e) {
			throw new RuntimeException(e);
		}
	}

	public T Map2Bean(Map<String, ?> param) throws Exception {

		T object = createClass();

		EntityObjectBase bean = (EntityObjectBase)object;
		bean.setValueAllNull(object);
		if (param != null) {
			bean.setObjectValue(bean, param);
		}
		return object;
	}

	public boolean checkKey(String[] keys, T object) {
		boolean result = true;
		EntityObjectBase bean = (EntityObjectBase)object;
		bean.setValueAllNull(object);
		List<String> valueList = new ArrayList<String>();
		if (keys != null) {
			for (String name : keys) {
				boolean bool = bean.chkFieldName(object, name);
				if (bool) {
					String value = bean.getValue(object, name);
					if (StringUtils.isNotEmpty(value)) {
						valueList.add(value);
					}
				}
			}
		}
		if (valueList.isEmpty()) {
			result = false;
		}
		return result;
	}
}