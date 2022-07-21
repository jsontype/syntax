package to.pc.azuma2.vo;

public class Blog1Criteria {

	private int page;
	private int perPageNum;
	private int rowStart;
	private int rowEnd;

	public Blog1Criteria() {
		this.page = 1;
		this.perPageNum = 1; // 페이지당 글 수 : 블로그는 1개
	}

	public void setPage(int page) {
		if (page <= 0) {
			this.page = 1;
			return;
		}
		this.page = page;
	}

	public void setPerPageNum(int perPageNum) {
		if (perPageNum <= 0 || perPageNum > 10) { // 페이지당 글 수 x 페이지수
			this.perPageNum = 1; // 페이지당 글 수 : 블로그는 1개
			return;
		}
		this.perPageNum = perPageNum;
	}

	public int getPage() {
		return page;
	}

	public int getPageStart() {
		return (this.page - 1) * perPageNum;
	}

	public int getPerPageNum() {
		return this.perPageNum;
	}

	public int getRowStart() {
		rowStart = ((page - 1) * perPageNum) + 1;
		return rowStart;
	}

	public int getRowEnd() {
		rowEnd = rowStart + perPageNum - 1;
		return rowEnd;
	}

	@Override
	public String toString() {
		return "Blog1Criteria [page=" + page + ", perPageNum=" + perPageNum + ", rowStart=" + rowStart + ", rowEnd=" + rowEnd
				+ "]";
	}


}