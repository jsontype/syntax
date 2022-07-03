/**
 * Copyright (C) ${year} [company_name] Corp. All rights reserved.
 */
package jp.co.[company_name].[main_system_name].is.logic;

import java.util.List;

import jp.co.[company_name].[main_system_name].is.entity.Antenna;
import jp.co.[company_name].[main_system_name].is.entity.Atrium;
import jp.co.[company_name].[main_system_name].is.entity.CalculationSet;
import jp.co.[company_name].[main_system_name].is.entity.DialogSettings;
import jp.co.[company_name].[main_system_name].is.entity.Floor;
import jp.co.[company_name].[main_system_name].is.entity.FloorImage;
import jp.co.[company_name].[main_system_name].is.entity.IsdocAntennas;
import jp.co.[company_name].[main_system_name].is.entity.IsdocAtriums;
import jp.co.[company_name].[main_system_name].is.entity.IsdocDialogSettings;
import jp.co.[company_name].[main_system_name].is.entity.IsdocFloorImages;
import jp.co.[company_name].[main_system_name].is.entity.IsdocFloors;
import jp.co.[company_name].[main_system_name].is.entity.IsdocPartitions;
import jp.co.[company_name].[main_system_name].is.entity.Partition;

/**
 * 시뮬레이션용 IsDoc 정보
 *
 * @author [author]
 * @version [version] [update_date]
 */
public class YskIsdoc {

	public List<Antenna> antennas = null;
	public List<Atrium> atriums = null;
	public DialogSettings dialogSettings = null;
	public List<FloorImage> floorImages = null;
	public List<Floor> floors = null;
	public List<Partition> partitions = null;

	public IsdocAntennas isdocAntennas = null;
	public IsdocAtriums isdocAtriums = null;
	public IsdocDialogSettings isdocDialogSettings = null;
	public IsdocFloorImages isdocFloorImages = null;
	public IsdocFloors isdocFloors = null;
	public IsdocPartitions isdocPartitions = null;

	public CalculationSet calSet = null;

	public Antenna findAntenna(String antennaId) {
		Antenna antenna = isdocAntennas.find(antennaId);
		return antenna;
	}

	public Antenna findAntenna(int index) {
		Antenna antenna = isdocAntennas.find(index);
		return antenna;
	}

	public int indexOfAntenna(String antennaId) {
		int Index = isdocAntennas.indexOf(antennaId);
		return Index;
	}

	public int indexOfAntenna(Antenna antenna) {
		int Index = isdocAntennas.indexOf(antenna);
		return Index;
	}

	public Atrium findAtrium(String atriumId) {
		Atrium atrium = isdocAtriums.find(atriumId);
		return atrium;
	}

	public Atrium findAtrium(int index) {
		Atrium atrium = isdocAtriums.find(index);
		return atrium;
	}

	public int indexOfAtrium(String atriumId) {
		int Index = isdocAtriums.indexOf(atriumId);
		return Index;
	}

	public int indexOfAtrium(Atrium atrium) {
		int Index = isdocAtriums.indexOf(atrium);
		return Index;
	}

	public FloorImage findFloorImages(String imageName) {
		FloorImage floorImage = isdocFloorImages.find(imageName);
		return floorImage;
	}

	public FloorImage findFloorImages(int index) {
		FloorImage floorImage = isdocFloorImages.find(index);
		return floorImage;
	}

	public int indexOfFloorImages(String floorImagesId) {
		int Index = isdocFloorImages.indexOf(floorImagesId);
		return Index;
	}

	public int indexOfFloorImages(FloorImage floorImages) {
		int Index = isdocFloorImages.indexOf(floorImages);
		return Index;
	}

	public Floor findFloor(String floorId) {
		Floor floor = isdocFloors.find(floorId);
		return floor;
	}

	public Floor findFloor(int index) {
		Floor floor = isdocFloors.find(index);
		return floor;
	}

	public int indexOfFloors(String floorId) {
		int Index = isdocFloors.indexOf(floorId);
		return Index;
	}

	public int indexOfFloors(Floor floor) {
		int Index = isdocFloors.indexOf(floor);
		return Index;
	}

	public Partition findPatition(String patitionId) {
		Partition partition = isdocPartitions.find(patitionId);
		return partition;
	}

	public Partition findPatition(int index) {
		Partition partition = isdocPartitions.find(index);
		return partition;
	}

	public int indexOfPartitions(String patitionId) {
		int Index = isdocPartitions.indexOf(patitionId);
		return Index;
	}

	public int indexOfPartitions(Partition patition) {
		int Index = isdocPartitions.indexOf(patition);
		return Index;
	}

}