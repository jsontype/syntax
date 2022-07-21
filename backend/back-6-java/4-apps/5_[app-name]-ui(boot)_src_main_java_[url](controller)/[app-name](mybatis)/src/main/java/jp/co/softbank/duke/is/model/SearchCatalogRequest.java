package jp.co.[company_name].[main_system_name].is.model;

/**
 * 검색 카탈로그 요청 클래스
 *
 * @author [author]
 * @version [version] [update_date]
 */
public class SearchCatalogRequest {
	String userId;
	String catalogName;
	String modelCategory;
	String manufacturer;
	String modelName;

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getCatalogName() {
		return catalogName;
	}

	public void setCatalogName(String catalogName) {
		this.catalogName = catalogName;
	}

	public String getModelCategory() {
		return modelCategory;
	}

	public void setModelCategory(String modelCategory) {
		this.modelCategory = modelCategory;
	}

	public String getManufacturer() {
		return manufacturer;
	}

	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}

	public String getModelName() {
		return modelName;
	}

	public void setModelName(String modelName) {
		this.modelName = modelName;
	}
}
