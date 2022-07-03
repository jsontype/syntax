/**
 * Copyright (C) ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.config;

/**
 * URL Path, 파일 다운로드 디렉토리 등의 글로벌 상수를 저장해둔다.
 *
 * @author [author]
 * @version [version] [update_date]
 */
public class Consts {
	/** 시스템 ID */
	public static final String SIM_UI_SYSTEM_ID = "IS";

	/** 기본 URL Path */
	public static final String SIM_UI_PATH = "/[app_name]";
	public static final String SIM_UI_GET_PATH = "/get";
	public static final String SIM_UI_SET_PATH = "/set";
	public static final String SIM_UI_UPT_PATH = "/update";
	public static final String SIM_UI_MST_PATH = "/master";
	public static final String SIM_UI_AREA_PATH = "/area";
	public static final String SIM_UI_CATALOG_PATH = "/catalog";
	public static final String SIM_UI_ISCOMMON_PATH = "/iscommon";
	public static final String SIM_UI_TRANSLATION_ENJP_PATH = "/translation-enjp";
	/** 메인 DB관련 */
	public static final String SIM_UI_ISDOC_PATH = "/isdoc";
	public static final String SIM_UI_ISDOC_CATALOG_PATH = "/isdoc-catalog";
	public static final String SIM_UI_USER_SETTING_PATH = "/user-settings";
	public static final String SIM_UI_USER_CATALOG_PATH = "/user-catalog";
	/** 검색 관련 */
	public static final String SIM_UI_ISDOC_SEARCH = "/search/isdoc";
	public static final String SIM_UI_ISDOC_SEARCH_INITIAL = "/search/initial";
	public static final String SIM_UI_ISDOC_SEARCH_CITY = "/search/city";
	public static final String SIM_UI_ISDOC_SEARCH_CATALOG = "/search/catalog";
	public static final String SIM_UI_ISDOC_SEARCH_CATALOG_NAME = "/search/catalog-name";
	public static final String SIM_UI_ISDOC_SEARCH_CATALOG_MANUFACTURER = "/search/catalog-manufacturer";
	public static final String SIM_UI_ISDOC_ISDOC = "/isdoc";
	public static final String SIM_UI_ISDOC_UPLOAD = "/upload";
	public static final String SIM_UI_ISDOC_DOWNLOAD_FLOOR_IMAGE = "/download/floor-image";
	public static final String SIM_UI_ISDOC_DOWNLOAD_SIMULATION_IMAGE = "/download/simulation-image";

	/** PDF 다운로드 폴더 */
	public static final String SIM_UI_ISDOC_DOWNLOAD_PDF = "/download/pdf";
	/** CSV 다운로드 폴더 */
	public static final String SIM_UI_ISDOC_DOWNLOAD_CSV = "/download/csv";
	/** 시뮬레이션 실행 */
	public static final String SIM_UI_ISDOC_SIMULATE = "/simulate";
	/** PDF 저장 */
	public static final String SIM_UI_CREATE_PDF = "/create/pdf";
	/** NSA Anchor Relation 작성 */
	public static final String SIM_UI_CREATE_NSA_ANCHOR_RELATION = "/create/nsa-anchor-relation";
	/** 유저 정보 */
	public static final String SIM_UI_USER_INFO = "/userinfo";
	/** 태스크 리스트 */
	public static final String SIM_UI_TASK_LIST = "/task-list";
	/** 메세지 관련 */
	public static final String SIM_UI_MESSAGE_PATH = "/message";
	public static final String MESSAGE_KIND_SERVER_1 = "3";
	public static final String MESSAGE_KIND_CLIENT_1 = "6";
	public static final String MESSAGE_KIND_COMM_1 = "0";
	public static final String STR_SPACE = "";
}
