/**
 * Copyright (C) ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.model;

import java.io.Serializable;
import java.nio.file.Path;

import org.apache.commons.lang3.builder.ToStringBuilder;

/**
 * 시뮬레이션 Path 클래스
 *
 * @author [author]
 * @version [version] [update_date]
 */
public class SimulationPath implements Serializable {

	/** 시뮬레이션 구분 */
	private String simulation;

	/** 플루어 */
	private String floor;

	/** 주파수 */
	private String frequency;

	/** 주파수 서비스 */
	private String frequencyService;

	/** Path */
	private Path path;

	/**
	 * 시뮬레이션 구분을 반환한다.
	 *
	 * @return 시뮬레이션 구분
	 */
	public String getSimulation() {
		return simulation;
	}

	/**
	 * 시뮬레이션 구분을 설정한다. (이하생략)
	 *
	 * @param simulation 시뮬레이션 구분
	 */
	public void setSimulation(String simulation) {
		this.simulation = simulation;
	}

	/**
	 * フロアを返す。
	 *
	 * @return フロア
	 */
	public String getFloor() {
		return floor;
	}

	/**
	 * フロア를 설정한다.。
	 *
	 * @param floor フロア
	 */
	public void setFloor(String floor) {
		this.floor = floor;
	}

	/**
	 * 周波数を返す。
	 *
	 * @return 周波数
	 */
	public String getFrequency() {
		return frequency;
	}

	/**
	 * 周波数를 설정한다.。
	 *
	 * @param frequency 周波数
	 */
	public void setFrequency(String frequency) {
		this.frequency = frequency;
	}

	/**
	 * 周波数サービスを返す。
	 *
	 * @return 周波数サービス
	 */
	public String getFrequencyService() {
		return frequencyService;
	}

	/**
	 * 周波数サービス를 설정한다.。
	 *
	 * @param frequencyService 周波数サービス
	 */
	public void setFrequencyService(String frequencyService) {
		this.frequencyService = frequencyService;
	}

	/**
	 * パスを返す。
	 *
	 * @return パス
	 */
	public Path getPath() {
		return path;
	}

	/**
	 * パス를 설정한다.。
	 *
	 * @param path パス
	 */
	public void setPath(Path path) {
		this.path = path;
	}

	/**
	 * このシミュレーションパスの文字列表現を返す。
	 *
	 * @return このシミュレーションパスの文字列表現
	 */
	@Override
	public String toString() {
		return ToStringBuilder.reflectionToString(this);
	}

}
