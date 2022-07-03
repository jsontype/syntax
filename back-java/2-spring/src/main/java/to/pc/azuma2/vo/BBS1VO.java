package to.pc.azuma2.vo;

import java.util.Date;

/* VO(Value Object) : Mapper에 있던 DB Query를 통해 실행된, 테이블 컬럼 값을, Java에서 객체로 다루기 위해 사용하는(계층간 데이터 교환을 위한), 데이터를 주고받는 포맷
 *	*자바빈즈(Java Beans), 또는 DTO(Data Transfer Object)라고도 불림
 */

public class BBS1VO {
	private int bno;
	private String title;
	private String content;
	private String writer;
	private Date regdate;

	public int getBno() {
		return bno;
	}
	public void setBno(int bno) {
		this.bno = bno;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getWriter() {
		return writer;
	}
	public void setWriter(String writer) {
		this.writer = writer;
	}
	public Date getRegdate() {
		return regdate;
	}
	public void setRegdate(Date regdate) {
		this.regdate = regdate;
	}



}

