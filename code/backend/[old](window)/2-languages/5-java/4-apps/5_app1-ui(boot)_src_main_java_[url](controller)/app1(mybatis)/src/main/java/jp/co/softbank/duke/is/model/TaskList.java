/**
 * Copyright ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.model;

import java.io.Serializable;

import org.apache.commons.lang3.builder.ToStringBuilder;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * 태스크 리스트 클래스
 *
 * @author [author]
 * @version [version] [update_date]
 */
public class TaskList implements Serializable {
	
	/** 諸元番号 */
	@JsonProperty("specId")
	private String specId;

	/** オーダーID */
	@JsonProperty("orderId")
	private String orderId;

	/** サイトID */
	@JsonProperty("siteId")
	private String siteId;

	/** タスク名 */
	@JsonProperty("taskName")
	private String taskName;

	/** 説明 */
	@JsonProperty("description")
	private String description;

	/**
	 * 諸元番号を返す。
	 *
	 * @return 諸元番号
	 */
	public String getSpecId() {
		return specId;
	}

	/**
	 * 諸元番号를 설정한다.。
	 *
	 * @param specid 제원정보
	 */
	public void setSpecId(String specId) {
		this.specId = specId;
	}

	/**
	 * オーダーIDを返す。
	 *
	 * @return オーダーID
	 */
	public String getOrderId() {
		return orderId;
	}

	/**
	 * オーダーID를 설정한다.。
	 *
	 * @param orderId オーダーID
	 */
	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	/**
	 * サイトIDを返す。
	 *
	 * @return サイトID
	 */
	public String getSiteId() {
		return siteId;
	}

	/**
	 * サイトID를 설정한다.。
	 *
	 * @param siteId 사이트ID
	 */
	public void setSiteId(String siteId) {
		this.siteId = siteId;
	}

	/**
	 * タスク名を返す。
	 *
	 * @return タスク名
	 */
	public String getTaskName() {
		return taskName;
	}

	/**
	 * タスク名를 설정한다.。
	 *
	 * @param taskName タスク名
	 */
	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}

	/**
	 * 説明を返す。
	 *
	 * @return 説明
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * 説明를 설정한다.。
	 *
	 * @param description 説明
	 */
	public void setDescription(String description) {
		this.description = description;
	}

	/**
	 * このタスクリストの文字列表現を返す。
	 *
	 * @return このタスクリストの文字列表現
	 */
	@Override
	public String toString() {
		return ToStringBuilder.reflectionToString(this);
	}

}
