package to.pc.azuma2.vo;

public class BBS1SearchCriteria extends BBS1Criteria{

	private String searchType = "";
	private String keyword = "";

	public String getSearchType() {
		return searchType;
	}
	public void setSearchType(String searchType) {
		this.searchType = searchType;
	}
	public String getKeyword() {
		return keyword;
	}
	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}
	@Override
	public String toString() {
		return "BBS1SearchCriteria [searchType=" + searchType + ", keyword=" + keyword + "]";
	}

}


