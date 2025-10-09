/**
 * Copyright (C) ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.model;

import java.awt.Point;
import java.io.Serializable;
import java.math.BigInteger;

import org.apache.commons.lang3.builder.ToStringBuilder;

/**
 *　메쉬(시뮬레이션 메쉬) 클래스
 *
 * @author [author]
 * @version [version] [update_date]11/17
 */
public class Mesh extends Point implements Comparable<Mesh>, Serializable {
	/** NSA Anchor Relation 작성 파라미터 */
	private NsaAnchorRelationDatas nsaAnchorRelationDatas;

	/** 시뮬레이션 Path */
	private SimulationPath simulationPath;

	/** 안테나 번호 */
	private short antennaNo;

	/** PCI・PSC */
	private short pciPsc;

	/** RSRP・RSCP */
	private float rsrpRscp;

	/**
	 * 좌표 공간내에 설정된 (x,y) 위치에 메쉬를 구축해서 초기화한다.
	 *
	 * @param x 메쉬의 X좌표
	 * @param y 메쉬의 Y좌표
	 */
	public Mesh(int x, int y) {
		super.setLocation(x, y);
	}

	/**
	 * 이 메쉬와 설정된 메쉬의 순서를 비교한다.。
	 *
	 * @param mesh 비교대상 메쉬
	 * @return 이 메쉬의 PCI・PSC가 설정된 메쉬의 PCI・PSC보다 작은 경우에는 음수、똑같거나 비교불가면 제로, 크면 양수
	 */
	@Override
	public int compareTo(Mesh mesh) {
		int rtnInt = BigInteger.ZERO.intValue();

		if (mesh != null) {
			short pciPsc1 = this.pciPsc;
			short pciPsc2 = mesh.getPciPsc();

			if (pciPsc1 < pciPsc2) {
				rtnInt = BigInteger.ONE.negate().intValue();
			} else if (pciPsc1 > pciPsc2) {
				rtnInt = BigInteger.ONE.intValue();
			}
		}

		return rtnInt;
	}

	/**
	 * 설정된 2개의 메쉬간 거리를 반환한다.
	 *
	 * @param mesh1 첫번째로 설정된 메쉬
	 * @param mesh2 두번째로 설정된 메쉬
	 * @return 설정된 2개의 메쉬 사이의 거리
	 */
	public static double distance(Mesh mesh1, Mesh mesh2) {
		return distance(mesh1.getX(), mesh1.getY(), mesh2.getX(), mesh2.getY());
	}

	/**
	 * 이 메쉬와 설정된 메쉬간 거리를 반환한다.
	 *
	 * @param mesh 설정된 메쉬
	 * @return 이 메쉬와 설정된 메쉬간 거리
	 */
	public double distance(Mesh mesh) {
		return super.distance(mesh);
	}

	/**
	 * 이 메쉬의 문자열 표현을 반환한다.
	 *
	 * @return 이 메쉬의 문자열 표현
	 */
	@Override
	public String toString() {
		return ToStringBuilder.reflectionToString(this);
	}

	/**
	 * 메쉬의 X좌표를 반환한다.
	 *
	 * @return 메쉬의 X좌표
	 */
	public double getX() {
		return super.getX();
	}

	/**
	 * 메쉬의 Y좌표를 반환한다.
	 *
	 * @return 메쉬의 Y좌표
	 */
	public double getY() {
		return super.getY();
	}

	/**
	 * 메쉬의 위치를 설정한다.
	 *
	 * @param x 메쉬의 X좌표
	 * @param y 메쉬의 Y좌표
	 */
	public void setLocation(int x, int y) {
		super.setLocation(x, y);
	}

	/**
	 * NSA Anchor Relation 작성 파라미터를 반환한다.
	 *
	 * @return NSA Anchor Relation 작성 파라미터
	 */
	public NsaAnchorRelationDatas getNsaAnchorRelationDatas() {
		return nsaAnchorRelationDatas;
	}

	/**
	 * NSA Anchor Relation 작성 파라미터를 설정한다.
	 *
	 * @param nsaAnchorRelationDatas NSA Anchor Relation 작성 파라미터
	 */
	public void setNsaAnchorRelationDatas(NsaAnchorRelationDatas nsaAnchorRelationDatas) {
		this.nsaAnchorRelationDatas = nsaAnchorRelationDatas;
	}

	/**
	 * 시뮬레이션 Path를 반환한다.
	 *
	 * @return 시뮬레이션 Path
	 */
	public SimulationPath getSimulationPath() {
		return simulationPath;
	}

	/**
	 * 시뮬레이션 Path를 설정한다. (이하생략)
	 *
	 * @param simulationPath 시뮬레이션 Path
	 */
	public void setSimulationPath(SimulationPath simulationPath) {
		this.simulationPath = simulationPath;
	}

	/**
	 * アンテナ番号を返す。
	 *
	 * @return アンテナ番号
	 */
	public short getAntennaNo() {
		return antennaNo;
	}

	/**
	 * アンテナ番号를 설정한다.。
	 *
	 * @param antennaNo アンテナ番号
	 */
	public void setAntennaNo(short antennaNo) {
		this.antennaNo = antennaNo;
	}

	/**
	 * PCI・PSCを返す。
	 *
	 * @return PCI・PSC
	 */
	public short getPciPsc() {
		return pciPsc;
	}

	/**
	 * PCI・PSC를 설정한다.。
	 *
	 * @param pciPsc PCI・PSC
	 */
	public void setPciPsc(short pciPsc) {
		this.pciPsc = pciPsc;
	}

	/**
	 * RSRP・RSCPを返す。
	 *
	 * @return RSRP・RSCP
	 */
	public float getRsrpRscp() {
		return rsrpRscp;
	}

	/**
	 * RSRP・RSCP를 설정한다.。
	 *
	 * @param rsrpRscp RSRP・RSCP
	 */
	public void setRsrpRscp(float rsrpRscp) {
		this.rsrpRscp = rsrpRscp;
	}

}
