package jp.co.[company_name].[main_system_name].is.entity;

import com.fasterxml.jackson.databind.JsonNode;

/**
 *
 * 메인 DB 다큐먼트 (JsonNode 배열 엔티티)
 *
 * @author [author]
 * @version [version] [update_date]
 *
 */
public class TbTrnIsdocNodeEntity extends EntityObjectBase {

	/** 제원번호 */
	private String specId;

	/** 사이트ID */
	private String siteId;

	/** 지역 */
	private String area;

	/** RF설계 스테이터스 */
	private String rfDesignStatus;

	/** RF설계이력 JsonNode배열 */
	private JsonNode rfDesignLog;

	/** 제원 락 */
	private Boolean isdocLock = false;

	/** 주파수서비스 일람 JsonNode배열 */
	private JsonNode frequencyServices;

	/** 기본주파수 */
	private String defaultFrequencyBand;

	/** 주파수서비스 상세 JsonNode배열 */
	private JsonNode frequencyServiceInfo;

	/** 대표공중선 위도 경도 JsonNode배열 (이하생략) */
	private JsonNode firstAntennaLocation;

	/** 諸元情報 JsonNode배열 */
	private JsonNode designSpecification;

	/** サイト JsonNode배열 */
	private JsonNode designSite;

	/** 基地局一覧 JsonNode배열 */
	private JsonNode designBaseStation;

	/** オーダー一覧 JsonNode배열 */
	private JsonNode designOrder;

	/** 無線機グループ一覧 JsonNode배열 */
	private JsonNode designRadioGroup;

	/** 無線機グループデバイス一覧 JsonNode배열 */
	private JsonNode designRadioGroupDevice;

	/** 無線機子機一覧 JsonNode배열 */
	private JsonNode designRadioHead;

	/** アンテナ一覧 JsonNode배열 */
	private JsonNode designAntennaDevice;

	/** 付帯デバイス一覧 JsonNode배열 */
	private JsonNode designMiscDevice;

	/** ネットワーク一覧 JsonNode배열 */
	private JsonNode designNetwork;

	/** サービスバンド情報(LTE) JsonNode배열 */
	private JsonNode designServiceBandLte;

	/** サービスバンド情報(WCDMA) JsonNode배열 */
	private JsonNode designServiceBandWcdma;

	/** サービスバンド情報(5G) JsonNode배열 */
	private JsonNode designServiceBand5g;

	/** セクタ情報一覧 JsonNode배열 */
	private JsonNode designSector;

	/** セクタアンテナ情報一覧 JsonNode배열 */
	private JsonNode designSectorAntenna;

	/** セクタポート情報一覧 JsonNode배열 */
	private JsonNode designPort;

	/** 系統図アンテナ一覧 JsonNode배열 */
	private JsonNode keitouzuAntennaDevice;

	/** 系統図セクタアンテナ情報一覧 JsonNode배열 */
	private JsonNode keitouzuSectorAntenna;

	/** 系統図セクタポート情報一覧 JsonNode배열 */
	private JsonNode keitouzuDesignPort;

	/** 物件情報一覧 JsonNode배열 */
	private JsonNode buildings;

	/** 平面図名一覧 JsonNode배열 */
	private JsonNode floorImages;

	/** フロア情報一覧 JsonNode배열 */
	private JsonNode floors;

	/** パーティション設定一覧 JsonNode배열 */
	private JsonNode partitionSettings;

	/** パーティション一覧 JsonNode배열 */
	private JsonNode partitions;

	/** 吹き抜け設定 JsonNode배열 */
	private JsonNode atriumSetting;

	/** 吹き抜け一覧 JsonNode배열 */
	private JsonNode atriums;

	/** アンテナ一覧 JsonNode배열 */
	private JsonNode antennas;

	/** 設計対象部材一覧 JsonNode배열 */
	private JsonNode designCatalog;

	/** 現在フロアID */
	private String currentFloorId;

	/** 시뮬레이션コマンド */
	private String simulationCommand;

	/** 시뮬레이션計算ステータス */
	private String simulationStatus;

	/** 시뮬레이션計算進捗 */
	private Integer simulationProgress;

	/** 시뮬레이션作業ID */
	private Integer simulationId;

	/** 予測図面 JsonNode배열 */
	private JsonNode yosokuzuDiagram;

	/** 予測図表示オプション JsonNode배열 */
	private JsonNode yosokuzuVisibleOptions;

	/** 系統図面 JsonNode배열 */
	private JsonNode keitouzuDiagram;

	/** 系統図表示オプション JsonNode배열 */
	private JsonNode keitouzuVisibleOptions;

	/** 測定データ JsonNode배열 */
	private JsonNode measurements;

	/** 定点ポイント JsonNode배열 */
	private JsonNode standingMeasurements;

	/** アンカーリレーション JsonNode배열 */
	private JsonNode anchorRelation;

	/** ダイアログ設定 JsonNode배열 */
	private JsonNode dialogSettings;

	/** 태스크 리스트 JsonNode배열 */
	// private String tasklist;
	private JsonNode tasklist;

	private String createUserName;
	private String updateUserName;
	private String swVersion;

	/** 削除フラグ */
	private String deleteFlg;
	/** 作成日時 */
	private String createDate;
	/** 作成ユーザ */
	private String createUser;
	/** 更新日時 */
	private String updateDate;
	/** 更新ユーザ */
	private String updateUser;
	/** バージョン番号 */
	private Integer versionNo;

	/** ソース区分 */
	private Boolean is[main_system_name] = false;

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
	 * 地域を返す。
	 *
	 * @return 地域
	 */
	public String getArea() {
		return area;
	}

	/**
	 * 地域를 설정한다.。
	 *
	 * @param area 地域
	 */
	public void setArea(String area) {
		this.area = area;
	}

	/**
	 * RF設計ステータスを返す。
	 *
	 * @return RF設計ステータス
	 */
	public String getRfDesignStatus() {
		return rfDesignStatus;
	}

	/**
	 * RF設計ステータス를 설정한다.。
	 *
	 * @param rfDesignStatus RF設計ステータス
	 */
	public void setRfDesignStatus(String rfDesignStatus) {
		this.rfDesignStatus = rfDesignStatus;
	}

	/**
	 * RF設計履歴を返す。
	 *
	 * @return RF設計履歴
	 */
	public JsonNode getRfDesignLog() {
		return rfDesignLog;
	}

	/**
	 * RF設計履歴를 설정한다.。
	 *
	 * @param rfDesignLog RF設計履歴
	 */
	public void setRfDesignLog(JsonNode rfDesignLog) {
		this.rfDesignLog = rfDesignLog;
	}

	/**
	 * 諸元ロックを返す。
	 *
	 * @return 諸元ロック
	 */
	public Boolean getIsdocLock() {
		return isdocLock;
	}

	/**
	 * 諸元ロック를 설정한다.。
	 *
	 * @param isdocLock 諸元ロック
	 */
	public void setIsdocLock(Boolean isdocLock) {
		this.isdocLock = isdocLock;
	}

	/**
	 * 周波数サービス一覧を返す。
	 *
	 * @return 周波数サービス一覧
	 */
	public JsonNode getFrequencyServices() {
		return frequencyServices;
	}

	/**
	 * 周波数サービス一覧를 설정한다.。
	 *
	 * @param frequencyServices 周波数サービス一覧
	 */
	public void setFrequencyServices(JsonNode frequencyServices) {
		this.frequencyServices = frequencyServices;
	}

	/**
	 * 基本周波数を返す。
	 *
	 * @return 基本周波数
	 */
	public String getDefaultFrequencyBand() {
		return defaultFrequencyBand;
	}

	/**
	 * 基本周波数를 설정한다.。
	 *
	 * @param defaultFrequencyBand 基本周波数
	 */
	public void setDefaultFrequencyBand(String defaultFrequencyBand) {
		this.defaultFrequencyBand = defaultFrequencyBand;
	}

	/**
	 * 周波数サービス詳細を返す。
	 *
	 * @return 周波数サービス詳細
	 */
	public JsonNode getFrequencyServiceInfo() {
		return frequencyServiceInfo;
	}

	/**
	 * 周波数サービス詳細를 설정한다.。
	 *
	 * @param frequencyServiceInfo 周波数サービス詳細
	 */
	public void setFrequencyServiceInfo(JsonNode frequencyServiceInfo) {
		this.frequencyServiceInfo = frequencyServiceInfo;
	}

	/**
	 * 代表空中線緯度経度を返す。
	 *
	 * @return 代表空中線緯度経度
	 */
	public JsonNode getFirstAntennaLocation() {
		return firstAntennaLocation;
	}

	/**
	 * 代表空中線緯度経度를 설정한다.。
	 *
	 * @param firstAntennaLocation 代表空中線緯度経度
	 */
	public void setFirstAntennaLocation(JsonNode firstAntennaLocation) {
		this.firstAntennaLocation = firstAntennaLocation;
	}

	/**
	 * 諸元情報を返す。
	 *
	 * @return 諸元情報
	 */
	public JsonNode getDesignSpecification() {
		return designSpecification;
	}

	/**
	 * 諸元情報를 설정한다.。
	 *
	 * @param designSpecification 諸元情報
	 */
	public void setDesignSpecification(JsonNode designSpecification) {
		this.designSpecification = designSpecification;
	}

	/**
	 * サイトを返す。
	 *
	 * @return サイト
	 */
	public JsonNode getDesignSite() {
		return designSite;
	}

	/**
	 * サイト를 설정한다.。
	 *
	 * @param designSite サイト
	 */
	public void setDesignSite(JsonNode designSite) {
		this.designSite = designSite;
	}

	/**
	 * 基地局一覧を返す。
	 *
	 * @return 基地局一覧
	 */
	public JsonNode getDesignBaseStation() {
		return designBaseStation;
	}

	/**
	 * 基地局一覧를 설정한다.。
	 *
	 * @param designBaseStation 基地局一覧
	 */
	public void setDesignBaseStation(JsonNode designBaseStation) {
		this.designBaseStation = designBaseStation;
	}

	/**
	 * オーダー一覧を返す。
	 *
	 * @return オーダー一覧
	 */
	public JsonNode getDesignOrder() {
		return designOrder;
	}

	/**
	 * オーダー一覧를 설정한다.。
	 *
	 * @param designOrder オーダー一覧
	 */
	public void setDesignOrder(JsonNode designOrder) {
		this.designOrder = designOrder;
	}

	/**
	 * 無線機グループ一覧を返す。
	 *
	 * @return 無線機グループ一覧
	 */
	public JsonNode getDesignRadioGroup() {
		return designRadioGroup;
	}

	/**
	 * 無線機グループ一覧를 설정한다.。
	 *
	 * @param designRadioGroup 無線機グループ一覧
	 */
	public void setDesignRadioGroup(JsonNode designRadioGroup) {
		this.designRadioGroup = designRadioGroup;
	}

	/**
	 * 無線機グループデバイス一覧を返す。
	 *
	 * @return 無線機グループデバイス一覧
	 */
	public JsonNode getDesignRadioGroupDevice() {
		return designRadioGroupDevice;
	}

	/**
	 * 無線機グループデバイス一覧를 설정한다.。
	 *
	 * @param designRadioGroupDevice 無線機グループデバイス一覧
	 */
	public void setDesignRadioGroupDevice(JsonNode designRadioGroupDevice) {
		this.designRadioGroupDevice = designRadioGroupDevice;
	}

	/**
	 * 無線機子機一覧を返す。
	 *
	 * @return 無線機子機一覧
	 */
	public JsonNode getDesignRadioHead() {
		return designRadioHead;
	}

	/**
	 * 無線機子機一覧를 설정한다.。
	 *
	 * @param designRadioHead 無線機子機一覧
	 */
	public void setDesignRadioHead(JsonNode designRadioHead) {
		this.designRadioHead = designRadioHead;
	}

	/**
	 * アンテナ一覧を返す。
	 *
	 * @return アンテナ一覧
	 */
	public JsonNode getDesignAntennaDevice() {
		return designAntennaDevice;
	}

	/**
	 * アンテナ一覧를 설정한다.。
	 *
	 * @param designAntennaDevice アンテナ一覧
	 */
	public void setDesignAntennaDevice(JsonNode designAntennaDevice) {
		this.designAntennaDevice = designAntennaDevice;
	}

	/**
	 * 付帯デバイス一覧を返す。
	 *
	 * @return 付帯デバイス一覧
	 */
	public JsonNode getDesignMiscDevice() {
		return designMiscDevice;
	}

	/**
	 * 付帯デバイス一覧를 설정한다.。
	 *
	 * @param designMiscDevice 付帯デバイス一覧
	 */
	public void setDesignMiscDevice(JsonNode designMiscDevice) {
		this.designMiscDevice = designMiscDevice;
	}

	/**
	 * ネットワーク一覧を返す。
	 *
	 * @return ネットワーク一覧
	 */
	public JsonNode getDesignNetwork() {
		return designNetwork;
	}

	/**
	 * ネットワーク一覧를 설정한다.。
	 *
	 * @param designNetwork ネットワーク一覧
	 */
	public void setDesignNetwork(JsonNode designNetwork) {
		this.designNetwork = designNetwork;
	}

	/**
	 * サービスバンド情報(LTE)を返す。
	 *
	 * @return サービスバンド情報(LTE)
	 */
	public JsonNode getDesignServiceBandLte() {
		return designServiceBandLte;
	}

	/**
	 * サービスバンド情報(LTE)를 설정한다.。
	 *
	 * @param designServiceBandLte サービスバンド情報(LTE)
	 */
	public void setDesignServiceBandLte(JsonNode designServiceBandLte) {
		this.designServiceBandLte = designServiceBandLte;
	}

	/**
	 * サービスバンド情報(WCDMA)を返す。
	 *
	 * @return サービスバンド情報(WCDMA)
	 */
	public JsonNode getDesignServiceBandWcdma() {
		return designServiceBandWcdma;
	}

	/**
	 * サービスバンド情報(WCDMA)를 설정한다.。
	 *
	 * @param designServiceBandWcdma サービスバンド情報(WCDMA)
	 */
	public void setDesignServiceBandWcdma(JsonNode designServiceBandWcdma) {
		this.designServiceBandWcdma = designServiceBandWcdma;
	}

	/**
	 * サービスバンド情報(5G)を返す。
	 *
	 * @return サービスバンド情報(5G)
	 */
	public JsonNode getDesignServiceBand5g() {
		return designServiceBand5g;
	}

	/**
	 * サービスバンド情報(5G)를 설정한다.。
	 *
	 * @param designServiceBand5g サービスバンド情報(5G)
	 */
	public void setDesignServiceBand5g(JsonNode designServiceBand5g) {
		this.designServiceBand5g = designServiceBand5g;
	}

	/**
	 * セクタ情報一覧を返す。
	 *
	 * @return セクタ情報一覧
	 */
	public JsonNode getDesignSector() {
		return designSector;
	}

	/**
	 * セクタ情報一覧를 설정한다.。
	 *
	 * @param designSector セクタ情報一覧
	 */
	public void setDesignSector(JsonNode designSector) {
		this.designSector = designSector;
	}

	/**
	 * セクタアンテナ情報一覧を返す。
	 *
	 * @return セクタアンテナ情報一覧
	 */
	public JsonNode getDesignSectorAntenna() {
		return designSectorAntenna;
	}

	/**
	 * セクタアンテナ情報一覧를 설정한다.。
	 *
	 * @param designSectorAntenna セクタアンテナ情報一覧
	 */
	public void setDesignSectorAntenna(JsonNode designSectorAntenna) {
		this.designSectorAntenna = designSectorAntenna;
	}

	/**
	 * セクタポート情報一覧を返す。
	 *
	 * @return セクタポート情報一覧
	 */
	public JsonNode getDesignPort() {
		return designPort;
	}

	/**
	 * セクタポート情報一覧를 설정한다.。
	 *
	 * @param designPort セクタポート情報一覧
	 */
	public void setDesignPort(JsonNode designPort) {
		this.designPort = designPort;
	}

	/**
	 * 系統図アンテナ一覧を返す。
	 *
	 * @return 系統図アンテナ一覧
	 */
	public JsonNode getKeitouzuAntennaDevice() {
		return keitouzuAntennaDevice;
	}

	/**
	 * 系統図アンテナ一覧를 설정한다.。
	 *
	 * @param keitouzuAntennaDevice 系統図アンテナ一覧
	 */
	public void setKeitouzuAntennaDevice(JsonNode keitouzuAntennaDevice) {
		this.keitouzuAntennaDevice = keitouzuAntennaDevice;
	}

	/**
	 * 系統図セクタアンテナ情報一覧を返す。
	 *
	 * @return 系統図セクタアンテナ情報一覧
	 */
	public JsonNode getKeitouzuSectorAntenna() {
		return keitouzuSectorAntenna;
	}

	/**
	 * 系統図セクタアンテナ情報一覧를 설정한다.。
	 *
	 * @param keitouzuSectorAntenna 系統図セクタアンテナ情報一覧
	 */
	public void setKeitouzuSectorAntenna(JsonNode keitouzuSectorAntenna) {
		this.keitouzuSectorAntenna = keitouzuSectorAntenna;
	}

	/**
	 * 系統図セクタポート情報一覧を返す。
	 *
	 * @return 系統図セクタポート情報一覧
	 */
	public JsonNode getKeitouzuDesignPort() {
		return keitouzuDesignPort;
	}

	/**
	 * 系統図セクタポート情報一覧를 설정한다.。
	 *
	 * @param keitouzuDesignPort 系統図セクタポート情報一覧
	 */
	public void setKeitouzuDesignPort(JsonNode keitouzuDesignPort) {
		this.keitouzuDesignPort = keitouzuDesignPort;
	}

	/**
	 * 物件情報一覧を返す。
	 *
	 * @return 物件情報一覧
	 */
	public JsonNode getBuildings() {
		return buildings;
	}

	/**
	 * 物件情報一覧를 설정한다.。
	 *
	 * @param buildings 物件情報一覧
	 */
	public void setBuildings(JsonNode buildings) {
		this.buildings = buildings;
	}

	/**
	 * 平面図名一覧を返す。
	 *
	 * @return 平面図名一覧
	 */
	public JsonNode getFloorImages() {
		return floorImages;
	}

	/**
	 * 平面図名一覧를 설정한다.。
	 *
	 * @param floorImages 平面図名一覧
	 */
	public void setFloorImages(JsonNode floorImages) {
		this.floorImages = floorImages;
	}

	/**
	 * フロア情報一覧を返す。
	 *
	 * @return フロア情報一覧
	 */
	public JsonNode getFloors() {
		return floors;
	}

	/**
	 * フロア情報一覧를 설정한다.。
	 *
	 * @param floors フロア情報一覧
	 */
	public void setFloors(JsonNode floors) {
		this.floors = floors;
	}

	/**
	 * パーティション設定一覧を返す。
	 *
	 * @return パーティション設定一覧
	 */
	public JsonNode getPartitionSettings() {
		return partitionSettings;
	}

	/**
	 * パーティション設定一覧를 설정한다.。
	 *
	 * @param partitionSettings パーティション設定一覧
	 */
	public void setPartitionSettings(JsonNode partitionSettings) {
		this.partitionSettings = partitionSettings;
	}

	/**
	 * パーティション一覧を返す。
	 *
	 * @return パーティション一覧
	 */
	public JsonNode getPartitions() {
		return partitions;
	}

	/**
	 * パーティション一覧를 설정한다.。
	 *
	 * @param partitions パーティション一覧
	 */
	public void setPartitions(JsonNode partitions) {
		this.partitions = partitions;
	}

	/**
	 * 吹き抜け設定を返す。
	 *
	 * @return 吹き抜け設定
	 */
	public JsonNode getAtriumSetting() {
		return atriumSetting;
	}

	/**
	 * 吹き抜け設定를 설정한다.。
	 *
	 * @param atriumSetting 吹き抜け設定
	 */
	public void setAtriumSetting(JsonNode atriumSetting) {
		this.atriumSetting = atriumSetting;
	}

	/**
	 * 吹き抜け一覧を返す。
	 *
	 * @return 吹き抜け一覧
	 */
	public JsonNode getAtriums() {
		return atriums;
	}

	/**
	 * 吹き抜け一覧를 설정한다.。
	 *
	 * @param atriums 吹き抜け一覧
	 */
	public void setAtriums(JsonNode atriums) {
		this.atriums = atriums;
	}

	/**
	 * アンテナ一覧を返す。
	 *
	 * @return アンテナ一覧
	 */
	public JsonNode getAntennas() {
		return antennas;
	}

	/**
	 * アンテナ一覧를 설정한다.。
	 *
	 * @param antennas アンテナ一覧
	 */
	public void setAntennas(JsonNode antennas) {
		this.antennas = antennas;
	}

	/**
	 * 設計対象部材一覧を返す。
	 *
	 * @return 設計対象部材一覧
	 */
	public JsonNode getDesignCatalog() {
		return designCatalog;
	}

	/**
	 * 設計対象部材一覧를 설정한다.。
	 *
	 * @param designCatalog 設計対象部材一覧
	 */
	public void setDesignCatalog(JsonNode designCatalog) {
		this.designCatalog = designCatalog;
	}

	/**
	 * 現在フロアIDを返す。
	 *
	 * @return 現在フロアID
	 */
	public String getCurrentFloorId() {
		return currentFloorId;
	}

	/**
	 * 現在フロアID를 설정한다.。
	 *
	 * @param currentFloorId 現在フロアID
	 */
	public void setCurrentFloorId(String currentFloorId) {
		this.currentFloorId = currentFloorId;
	}

	/**
	 * 시뮬레이션コマンドを返す。
	 *
	 * @return シミュレーションコマンド
	 */
	public String getSimulationCommand() {
		return simulationCommand;
	}

	/**
	 * 시뮬레이션コマンド를 설정한다.。
	 *
	 * @param simulationCommand シミュレーションコマンド
	 */
	public void setSimulationCommand(String simulationCommand) {
		this.simulationCommand = simulationCommand;
	}

	/**
	 * 시뮬레이션計算ステータスを返す。
	 *
	 * @return シミュレーション計算ステータス
	 */
	public String getSimulationStatus() {
		return simulationStatus;
	}

	/**
	 * 시뮬레이션計算ステータス를 설정한다.。
	 *
	 * @param simulationStatus シミュレーション計算ステータス
	 */
	public void setSimulationStatus(String simulationStatus) {
		this.simulationStatus = simulationStatus;
	}

	/**
	 * 시뮬레이션計算進捗を返す。
	 *
	 * @return シミュレーション計算進捗
	 */
	public Integer getSimulationProgress() {
		return simulationProgress;
	}

	/**
	 * 시뮬레이션計算進捗를 설정한다.。
	 *
	 * @param simulationProgress シミュレーション計算進捗
	 */
	public void setSimulationProgress(Integer simulationProgress) {
		this.simulationProgress = simulationProgress;
	}

	/**
	 * 시뮬레이션作業IDを返す。
	 *
	 * @return シミュレーション作業ID
	 */
	public Integer getSimulationId() {
		return simulationId;
	}

	/**
	 * 시뮬레이션作業ID를 설정한다.。
	 *
	 * @param simulationResult シミュレーション作業ID
	 */
	public void setSimulationId(Integer simulationId) {
		this.simulationId = simulationId;
	}

	/**
	 * 予測図面を返す。
	 *
	 * @return 予測図面
	 */
	public JsonNode getYosokuzuDiagram() {
		return yosokuzuDiagram;
	}

	/**
	 * 予測図面를 설정한다.。
	 *
	 * @param yosokuzuDiagram 予測図面
	 */
	public void setYosokuzuDiagram(JsonNode yosokuzuDiagram) {
		this.yosokuzuDiagram = yosokuzuDiagram;
	}

	/**
	 * 予測図表示オプションを返す。
	 *
	 * @return 予測図表示オプション
	 */
	public JsonNode getYosokuzuVisibleOptions() {
		return yosokuzuVisibleOptions;
	}

	/**
	 * 予測図表示オプション를 설정한다.。
	 *
	 * @param yosokuzuVisibleOptions 予測図表示オプション
	 */
	public void setYosokuzuVisibleOptions(JsonNode yosokuzuVisibleOptions) {
		this.yosokuzuVisibleOptions = yosokuzuVisibleOptions;
	}

	/**
	 * 系統図面を返す。
	 *
	 * @return 系統図面
	 */
	public JsonNode getKeitouzuDiagram() {
		return keitouzuDiagram;
	}

	/**
	 * 系統図面를 설정한다.。
	 *
	 * @param keitouzuDiagram 系統図面
	 */
	public void setKeitouzuDiagram(JsonNode keitouzuDiagram) {
		this.keitouzuDiagram = keitouzuDiagram;
	}

	/**
	 * 系統図表示オプションを返す。
	 *
	 * @return 系統図表示オプション
	 */
	public JsonNode getKeitouzuVisibleOptions() {
		return keitouzuVisibleOptions;
	}

	/**
	 * 系統図表示オプション를 설정한다.。
	 *
	 * @param keitouzuVisibleOptions 系統図表示オプション
	 */
	public void setKeitouzuVisibleOptions(JsonNode keitouzuVisibleOptions) {
		this.keitouzuVisibleOptions = keitouzuVisibleOptions;
	}

	/**
	 * 測定データを返す。
	 *
	 * @return 測定データ
	 */
	public JsonNode getMeasurements() {
		return measurements;
	}

	/**
	 * 測定データ를 설정한다.。
	 *
	 * @param measurements 測定データ
	 */
	public void setMeasurements(JsonNode measurements) {
		this.measurements = measurements;
	}

	/**
	 * 定点ポイントを返す。
	 *
	 * @return 定点ポイント
	 */
	public JsonNode getStandingMeasurements() {
		return standingMeasurements;
	}

	/**
	 * 定点ポイント를 설정한다.。
	 *
	 * @param standingMeasurements 定点ポイント
	 */
	public void setStandingMeasurements(JsonNode standingMeasurements) {
		this.standingMeasurements = standingMeasurements;
	}

	/**
	 * アンカーリレーションを返す。
	 *
	 * @return アンカーリレーション
	 */
	public JsonNode getAnchorRelation() {
		return anchorRelation;
	}

	/**
	 * アンカーリレーション를 설정한다.。
	 *
	 * @param anchorRelation アンカーリレーション
	 */
	public void setAnchorRelation(JsonNode anchorRelation) {
		this.anchorRelation = anchorRelation;
	}

	/**
	 * ダイアログ設定を返す。
	 *
	 * @return ダイアログ設定
	 */
	public JsonNode getDialogSettings() {
		return dialogSettings;
	}

	/**
	 * ダイアログ設定를 설정한다.。
	 *
	 * @param dialogSettings ダイアログ設定
	 */
	public void setDialogSettings(JsonNode dialogSettings) {
		this.dialogSettings = dialogSettings;
	}

	// /**
	// * 태스크 리스트を返す。
	// *
	// * @return タスクリスト
	// */
	// public String getTasklist() {
	// return tasklist;
	// }
	//
	// /**
	// * 태스크 리스트를 설정한다.。
	// *
	// * @param tasklist タスクリスト
	// */
	// public void setTasklist(String tasklist) {
	// this.tasklist = tasklist;
	// }
	/**
	 * 태스크 리스트を返す。
	 *
	 * @return タスクリスト
	 */
	public JsonNode getTasklist() {
		return tasklist;
	}

	/**
	 * 태스크 리스트를 설정한다.。
	 *
	 * @param tasklist タスクリスト
	 */
	public void setTasklist(JsonNode tasklist) {
		this.tasklist = tasklist;
	}

	public String getCreateUserName() {
		return createUserName;
	}

	public void setCreateUserName(String createUserName) {
		this.createUserName = createUserName;
	}

	public String getUpdateUserName() {
		return updateUserName;
	}

	public void setUpdateUserName(String updateUserName) {
		this.updateUserName = updateUserName;
	}

	public String getSwVersion() {
		return swVersion;
	}

	public void setSwVersion(String swVersion) {
		this.swVersion = swVersion;
	}

	/**
	 * 削除フラグを返す。
	 *
	 * @return 削除フラグ
	 */
	public String getDeleteFlg() {
		return deleteFlg;
	}

	/**
	 * 削除フラグ를 설정한다.。
	 *
	 * @param deleteFlg 削除フラグ
	 */
	public void setDeleteFlg(String deleteFlg) {
		this.deleteFlg = deleteFlg;
	}

	/**
	 * 作成日時を返す。
	 *
	 * @return 作成日時
	 */
	public String getCreateDate() {
		return createDate;
	}

	/**
	 * 作成日時를 설정한다.。
	 *
	 * @param createDate 作成日時
	 */
	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}

	/**
	 * 作成ユーザを返す。
	 *
	 * @return 作成ユーザ
	 */
	public String getCreateUser() {
		return createUser;
	}

	/**
	 * 作成ユーザ를 설정한다.。
	 *
	 * @param createUser 作成ユーザ
	 */
	public void setCreateUser(String createUser) {
		this.createUser = createUser;
	}

	/**
	 * 更新日時を返す。
	 *
	 * @return 更新日時
	 */
	public String getUpdateDate() {
		return updateDate;
	}

	/**
	 * 更新日時를 설정한다.。
	 *
	 * @param updateDate 更新日時
	 */
	public void setUpdateDate(String updateDate) {
		this.updateDate = updateDate;
	}

	/**
	 * 更新ユーザを返す。
	 *
	 * @return 更新ユーザ
	 */
	public String getUpdateUser() {
		return updateUser;
	}

	/**
	 * 更新ユーザ를 설정한다.。
	 *
	 * @param updateUser 更新ユーザ
	 */
	public void setUpdateUser(String updateUser) {
		this.updateUser = updateUser;
	}

	/**
	 * バージョン番号を返す。
	 *
	 * @return バージョン番号
	 */
	public Integer getVersionNo() {
		return versionNo;
	}

	/**
	 * バージョン番号를 설정한다.。
	 *
	 * @param versionNo バージョン番号
	 */
	public void setVersionNo(Integer versionNo) {
		this.versionNo = versionNo;
	}

	/**
	 * ソース区分を返す。
	 *
	 * @return ソース区分
	 */
	public Boolean getIs[main_system_name]() {
		return is[main_system_name];
	}

	/**
	 * ソース区分를 설정한다.。
	 *
	 * @param is[main_system_name] ソース区分
	 */
	public void setIs[main_system_name](Boolean is[main_system_name]) {
		this.is[main_system_name] = is[main_system_name];
	}

}
