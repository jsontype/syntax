// API URL
export default {
  // REMOVE DATA (tb_trn_isdoc, tb_trn_isdoc_catalog, tb_his_is_task_list, NAS)
  REMOVE_DATA: `${process.env.main_system_name_UI_DOMAIN} [app_name] - ui / [app_name] / master / delete /`,
  // INITIAL DATA
  GET_TRANSLATION: `${process.env.main_system_name_UI_DOMAIN} [app_name] - ui / [app_name] / get / translation - enjp`,
  GET_ISCOMMON: `${process.env.main_system_name_UI_DOMAIN} [app_name] - ui / [app_name] / get / iscommon / iscommon - id=1`,
  SET_ISCOMMON: `${process.env.main_system_name_UI_DOMAIN} [app_name] - ui / [app_name] / master / iscommon / iscommon - id=1`,
  GET_USERINFO: `${process.env.main_system_name_UI_DOMAIN} [app_name] - ui / [app_name] / get / userinfo`,
  // SPEC-EDIT FUNC-AUTH
  GET_FUNC_AUTH: `${process.env.main_system_name_UI_DOMAIN} spec - edit - ui / spec - edit / system / func - auth`,
  // ISDOC
  GET_ISDOC: `${process.env.main_system_name_UI_DOMAIN} [app_name] - ui / [app_name] / get / isdoc`,
  SET_ISDOC: `${process.env.main_system_name_UI_DOMAIN} [app_name] - ui / [app_name] / set / isdoc`,
  // SEARCH PAGE
  SEARCH_INITIAL: `${process.env.main_system_name_UI_DOMAIN} [app_name] - ui / [app_name] / search / initial`,
  SEARCH_CITY: `${process.env.main_system_name_UI_DOMAIN} [app_name] - ui / [app_name] / search / city`,
  SEARCH_ISDOC: `${process.env.main_system_name_UI_DOMAIN} [app_name] - ui / [app_name] / search / isdoc`,
  // CATALOG
  GET_ISDOC_CATALOG: `${process.env.main_system_name_UI_DOMAIN} [app_name] - ui / [app_name] / get / isdoc - catalog`,
  SET_ISDOC_CATALOG: `${process.env.main_system_name_UI_DOMAIN} [app_name] - ui / [app_name] / set / isdoc - catalog`,
  SEARCH_CATALOG: `${process.env.main_system_name_UI_DOMAIN} [app_name] - ui / [app_name] / search / catalog`,
  GET_USER_CATALOG: `${process.env.main_system_name_UI_DOMAIN} [app_name] - ui / [app_name] / get / user - catalog`,
  UPDATE_USER_CATALOG: `${process.env.main_system_name_UI_DOMAIN} [app_name] - ui / [app_name] / update / user - catalog`,
  GET_CATALOG_MANUFACTURER: `${process.env.main_system_name_UI_DOMAIN} [app_name] - ui / catalog - manufacturer`,
  SEARCH_CATALOG_NAME: `${process.env.main_system_name_UI_DOMAIN} [app_name] - ui / [app_name] / search / catalog - name`,
  // USER TEMPLATES
  GET_USER_SETTINGS: `${process.env.main_system_name_UI_DOMAIN} [app_name] - ui / [app_name] / get / user - settings`,
  SET_USER_SETTINGS: `${process.env.main_system_name_UI_DOMAIN} [app_name] - ui / [app_name] / set / user - settings`,
  // MST-CATALOG
  GET_MSTCATALOG: `${process.env.main_system_name_UI_DOMAIN} [app_name] - ui / [app_name] / get / catalog`,
  // UPLOAD, DOWNLOAD
  UPLOAD: `${process.env.main_system_name_UI_DOMAIN} [app_name] - ui / [app_name] / upload`,
  DOWNLOAD: `${process.env.main_system_name_UI_DOMAIN} [app_name] - ui / [app_name] / download`,
  DOWNLOAD_FLOOR_IMAGE: `${process.env.main_system_name_UI_DOMAIN} [app_name] - ui / [app_name] / download / floor - image`,
  DOWNLOAD_SIMULATION_IMAGE: `${process.env.main_system_name_UI_DOMAIN} [app_name] - ui / [app_name] / download / simulation - image`,
  // SIMULATION
  SIMULATE: `${process.env.main_system_name_UI_DOMAIN} [app_name] - ui / [app_name] / simulate`,
  // NSA-ANCHOR-RELATION
  CREATE_NSA_ANCHOR_RELATION: `${process.env.main_system_name_UI_DOMAIN} [app_name] - ui / [app_name] / create / nsa - anchor - relation`,
  // PDF
  CREATE_PDF: `${process.env.main_system_name_UI_DOMAIN} [app_name] - ui / [app_name] / create / pdf`,
  // TASK LIST
  GET_TASK_LIST: `${process.env.main_system_name_UI_DOMAIN} [app_name] - ui / [app_name] / get / task - list`,
  SET_TASK_LIST: `${process.env.main_system_name_UI_DOMAIN} [app_name] - ui / [app_name] / set / task - list`,
};
