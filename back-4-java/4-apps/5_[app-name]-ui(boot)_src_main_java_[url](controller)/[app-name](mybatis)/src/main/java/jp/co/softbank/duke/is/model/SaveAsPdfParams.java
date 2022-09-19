/**
 * Copyright (C) ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.model;

import java.io.Serializable;
import java.util.List;

import org.apache.commons.lang3.builder.ToStringBuilder;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PDF 저장 파라미터 클래스
 *
 * @author [author]
 * @version [version] [update_date]
 */
public class SaveAsPdfParams implements Serializable {
	/** 제원ID */
	@JsonProperty("specId")
	private String specId;

	/** 오더ID */
	@JsonProperty("orderId")
	private String orderId;

	/** 사이트ID */
	@JsonProperty("siteId")
	private String siteId;

	/** 용지 */
	@JsonProperty("pageSize")
	private String pageSize;

	/** 방향 */
	@JsonProperty("pageOrientation")
	private String pageOrientation;

	/** 사외 기밀 표시 */
	@JsonProperty("confidentialFlg")
	private boolean confidentialFlg;

	/** 타이틀 */
	@JsonProperty("pageTitle")
	private String pageTitle;

	/** 무선기명 */
	@JsonProperty("radioStationName")
	private String radioStationName;

	/** 설계한 부서 */
	@JsonProperty("designDepartment")
	private String designDepartment;

	/** 이미지데이터(BASE64 인코딩 이미지 데이터) */
	@JsonProperty("imageDatas")
	private List<String> imageDatas;

	/** 플루어 정보 리스트 */
	@JsonProperty("floorInfos")
	private List<FloorInfos> floorInfos;

	/**
	 * PDF 저장 플루어 정보 파라미터 클래스
	 */
	@JsonIgnoreProperties(value = { "floorId" })
	public static class FloorInfos {

		/** 플루어 */
		@JsonProperty("floorLabel")
		private String floorLabel;

		/** 이미지데이터(BASE64 인코딩 이미지 데이터) */
		@JsonProperty("imageData")
		private String imageData;

		/** 커멘트 */
		@JsonProperty("comment")
		private String comment;

		/**
		 * 플루어를 반환한다.
		 *
		 * @return 플루어
		 */
		public String getFloorLabel() {
			return floorLabel;
		}

		/**
		 * 플루어를 설정한다.
		 *
		 * @param floorLabel 플루어
		 */
		public void setFloorLabel(String floorLabel) {
			this.floorLabel = floorLabel;
		}

		/**
		 * 이미지데이터(BASE64 인코딩 이미지 데이터)를 반환한다.
		 *
		 * @return 이미지데이터(BASE64 인코딩 이미지 데이터)
		 */
		public String getImageData() {
			return imageData;
		}

		/**
		 * 이미지데이터(BASE64 인코딩 이미지 데이터)를 설정한다.
		 *
		 * @param imageData 이미지데이터(BASE64 인코딩 이미지 데이터)
		 */
		public void setImageData(String imageData) {
			this.imageData = imageData;
		}

		/**
		 * 커멘트를 반환한다.
		 *
		 * @return 커멘트
		 */
		public String getComment() {
			return comment;
		}

		/**
		 * 커멘트를 설정한다.
		 *
		 * @param comment 커멘트
		 */
		public void setComment(String comment) {
			this.comment = comment;
		}

		/**
		 * 이 PDF 저장 플루어 정보 파라미터의 문자열 표현을 반환한다.
		 *
		 * @return 이 PDF 저장 플루어 정보 파라미터의 문자열 표현
		 */
		@Override
		public String toString() {
			return ToStringBuilder.reflectionToString(this);
		}

	}

	/**
	 * 제원ID를 반환한다. (이하생략)
	 *
	 * @return 제원ID
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
	 * 用紙を返す。
	 *
	 * @return 用紙
	 */
	public String getPageSize() {
		return pageSize;
	}

	/**
	 * 用紙를 설정한다.。
	 *
	 * @param pageSize 用紙
	 */
	public void setPageSize(String pageSize) {
		this.pageSize = pageSize;
	}

	/**
	 * 方向を返す。
	 *
	 * @return 方向
	 */
	public String getPageOrientation() {
		return pageOrientation;
	}

	/**
	 * 方向를 설정한다.。
	 *
	 * @param pageOrientation 方向
	 */
	public void setPageOrientation(String pageOrientation) {
		this.pageOrientation = pageOrientation;
	}

	/**
	 * 社外秘の表示を返す。
	 *
	 * @return 社外秘の表示
	 */
	public boolean isConfidentialFlg() {
		return confidentialFlg;
	}

	/**
	 * 社外秘の表示를 설정한다.。
	 *
	 * @param confidentialFlg 社外秘の表示
	 */
	public void setConfidentialFlg(boolean confidentialFlg) {
		this.confidentialFlg = confidentialFlg;
	}

	/**
	 * タイトルを返す。
	 *
	 * @return タイトル
	 */
	public String getPageTitle() {
		return pageTitle;
	}

	/**
	 * タイトル를 설정한다.。
	 *
	 * @param pageTitle タイトル
	 */
	public void setPageTitle(String pageTitle) {
		this.pageTitle = pageTitle;
	}

	/**
	 * 無線局名を返す。
	 *
	 * @return 無線局名
	 */
	public String getRadioStationName() {
		return radioStationName;
	}

	/**
	 * 無線局名를 설정한다.。
	 *
	 * @param radioStationName 無線局名
	 */
	public void setRadioStationName(String radioStationName) {
		this.radioStationName = radioStationName;
	}

	/**
	 * 設計部署を返す。
	 *
	 * @return 設計部署
	 */
	public String getDesignDepartment() {
		return designDepartment;
	}

	/**
	 * 設計部署를 설정한다.。
	 *
	 * @param designDepartment 設計部署
	 */
	public void setDesignDepartment(String designDepartment) {
		this.designDepartment = designDepartment;
	}

	/**
	 * イメージデータ(BASE64エンコーディングイメージデータ)を返す。
	 *
	 * @return イメージデータ(BASE64エンコーディングイメージデータ)
	 */
	public List<String> getImageDatas() {
		return imageDatas;
	}

	/**
	 * イメージデータ(BASE64エンコーディングイメージデータ)를 설정한다.。
	 *
	 * @param imageDatas イメージデータ(BASE64エンコーディングイメージデータ)
	 */
	public void setImageDatas(List<String> imageDatas) {
		this.imageDatas = imageDatas;
	}

	/**
	 * フロア情報リストを返す。
	 *
	 * @return フロア情報リスト
	 */
	public List<SaveAsPdfParams.FloorInfos> getFloorInfos() {
		return floorInfos;
	}

	/**
	 * フロア情報リスト를 설정한다.。
	 *
	 * @param floorInfos フロア情報リスト
	 */
	public void setFloorInfos(List<SaveAsPdfParams.FloorInfos> floorInfos) {
		this.floorInfos = floorInfos;
	}

	/**
	 * このPDF保存パラメータの文字列表現を返す。
	 *
	 * @return このPDF保存パラメータの文字列表現
	 */
	@Override
	public String toString() {
		return ToStringBuilder.reflectionToString(this);
	}

}
