import React, { useEffect, useContext, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link } from 'react-router-dom';
import { Card, CardBody } from './../../components/card/card.jsx';
import { AppSettings } from './../../config/app-settings.js';

function PosTableBooking() {
	const context = useContext(AppSettings);
	const [time] = useState(getTime());
	const [tableData, setTableData] = useState();
	
	function checkTime(i) {
		if (i < 10) {i = "0" + i};
		return i;
	}
	
	function getTime() {
		var today = new Date();
		var h = today.getHours();
		var m = today.getMinutes();
		var a;
		m = checkTime(m);
		a = (h > 11) ? 'pm' : 'am';
		h = (h > 12) ? h - 12 : h;
	
		setTimeout(() => {
			getTime();
		}, 500);
		return h + ":" + m + a;
	}
	
	function getStatus(time, text) {
		var timeSplit = time.split(':');
		var clock = timeSplit[1].split('00');
		var ampm = clock[1];
		var hour = parseInt(timeSplit[0]);
		var fullHour = (ampm === 'pm' && hour < 12) ? hour + 12 : hour;
		var today = new Date();
		var currentFullHour = today.getHours();
		
		if (fullHour === currentFullHour && text) {
			return 'in-progress';
		} else if (currentFullHour > fullHour && text) {
			return 'completed';
		} else if (currentFullHour < fullHour && text) {
			return 'upcoming';
		}
		return '';
	}
	
	function checkSameHour(time) {
		var today = new Date();
		var currentFullHour = today.getHours();
		var currentAmPm = (currentFullHour > 12) ? 'pm' : 'am';
		var currentHour = (currentFullHour > 12) ? currentFullHour - 12 : currentFullHour;
		var currentHourFinal = (currentHour < 10) ? '0' + currentHour : currentHour;
		var currentTime = currentHourFinal + ':00' + currentAmPm;
		
		if (currentTime === time) {
			return true;
		}
		return false;
	}
	
	function getAvailableTable() {
		var count = 0;
		var today = new Date();
		var h = today.getHours();
		var a;
		a = (h > 11) ? 'pm' : 'am';
		h = (h > 12) ? h - 12 : h;
		
		var currentHour = checkTime(h) + ":00" + a;
		
		if (tableData) {
			for (var i = 0; i < tableData.length; i++) {
				for (var x = 0; x < tableData[i].reservation.length; x++) {
					if (tableData[i].reservation[x].time === currentHour && !tableData[i].reservation[x].text) {
						count++;
					}
				}
			}
		}
		return count;
	}
	
	function checkAvailable(reservation) {
		for (var x = 0; x < reservation.length; x++) {
			var time = reservation[x].time.split(':');
			var hour = parseInt(time[0]);
			var today = new Date();
			var currentHour = today.getHours();
					currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
					
			if (currentHour === hour && reservation[x].text) {
				return true;
			}
		}
		return false;
	}
	
	useEffect(() => {
		context.setAppHeaderNone(true);
		context.setAppSidebarNone(true);
		context.setAppContentFullHeight(true);
		context.setAppContentClass('p-1 ps-xl-4 pe-xl-4 pt-xl-3 pb-xl-3');
		
		fetch('/assets/data/pos/table-booking.json').then(res => res.json()).then((result) => { setTableData(result); });
		
		return function cleanUp() {
			context.setAppHeaderNone(false);
			context.setAppSidebarNone(false);
			context.setAppContentFullHeight(false);
			context.setAppContentClass('');
		};
		
		// eslint-disable-next-line
	}, []);
	
	return (
		<div className="h-100">
			<Card className="pos pos-vertical" id="pos">
				<CardBody className="pos-container">
					<div className="pos-header">
						<div className="logo">
							<Link to="/pos/counter-checkout" href="pos_counter_checkout.html">
								<div className="logo-img"><i className="bi bi-x-diamond" style={{fontSize: '1.5rem'}}></i></div>
								<div className="logo-text">Pine & Dine</div>
							</Link>
						</div>
						<div className="time" id="time">{time}</div>
						<div className="nav">
							<div className="nav-item">
								<Link to="/pos/kitchen-order" className="nav-link">
									<i className="bi bi-bootstrap-reboot nav-icon"></i>
								</Link>
							</div>
							<div className="nav-item">
								<Link to="/pos/table-booking" className="nav-link">
									<i className="bi bi-calendar-date nav-icon"></i>
								</Link>
							</div>
							<div className="nav-item">
								<Link to="/pos/menu-stock" className="nav-link">
									<i className="bi bi-pie-chart nav-icon"></i>
								</Link>
							</div>
						</div>
					</div>
					
					<div className="pos-content">
						<PerfectScrollbar className="pos-content-container h-100 p-4">
							<div className="d-md-flex align-items-center mb-4">
								<div className="flex-1">
									<div className="fs-24px mb-1">Available Table ({getAvailableTable()}/20)</div>
									<div className="mb-2 mb-md-0 d-flex">
										<div className="d-flex align-items-center me-3">
											<i className="fa fa-circle fa-fw text-inverse text-opacity-25 fs-9px me-1"></i> Completed
										</div>
										<div className="d-flex align-items-center me-3">
											<i className="fa fa-circle fa-fw text-warning fs-9px me-1"></i> Upcoming
										</div>
										<div className="d-flex align-items-center me-3">
											<i className="fa fa-circle fa-fw text-success fs-9px me-1"></i> In-progress
										</div>
									</div>
								</div>
								<div>
									<div className="input-group date mb-0" data-render="datepicker" data-date-format="dd-mm-yyyy" data-date-start-date="Date.default">
										<input type="text" className="form-control fw-bold" placeholder="Today's" />
										<span className="input-group-text input-group-addon bg-none">
											<i className="bi bi-calendar-date-fill fa-lg"></i>
										</span>
									</div>
								</div>
							</div>
							<div className="row gx-4">
								{tableData && tableData.length > 0 ? (tableData.map((table, index) => (
									<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6" key={index}>
										<Card className="pos-table-booking">
											<CardBody className="p-1">
												<div className="pos-table-booking-container">
													<div className="pos-table-booking-header">
														<div className="d-flex align-items-center">
															<div className="flex-1">
																<div className="title">TABLE</div>
																<div className="no">{table.name}</div>
																<div className="desc">max {table.pax} pax</div>
															</div>
															{!checkAvailable(table.reservation) ? (
																<div className="pe-1 text-success">
																	<i className="bi bi-check2-circle fa-3x"></i>
																</div>
															) : (
																<div className="text-inverse text-opacity-25">
																	<i className="bi bi-dash-circle fa-3x"></i>
																</div>
															)}
														</div>
													</div>
													<div className="pos-table-booking-body">
														{table.reservation.length > 0 ? (table.reservation.map((reservation, index) => (
															<div className={'booking' + ((checkSameHour(reservation.time)) ? ' highlight' : '')} key={index}>
																<div className="time">{reservation.time}</div>
																<div className="info">{(reservation.text) ? reservation.text : '-'}</div>
																<div className={'status '+ getStatus(reservation.time, reservation.text)}>{reservation.text && (<i className="fa fa-circle"></i>)}</div>
															</div>
														))) : (
															<div>
																No records found
															</div>
														)}
													</div>
												</div>
												<a href="#/" className="stretched-link" data-bs-toggle="modal" data-bs-target="#modalPosBooking"><span className="d-none">&nbsp;</span></a>
											</CardBody>
										</Card>
									</div>
								))) : (
									<div className="col-12">
										No records found
									</div>
								)}
							</div>
						</PerfectScrollbar>
					</div>
				</CardBody>
			</Card>
			
			<div className="modal modal-pos fade" id="modalPosBooking">
				<div className="modal-dialog modal-lg">
					<div className="modal-content border-0">
						<Card>
							<CardBody className="p-0">
								<div className="modal-header align-items-center">
									<h5 className="modal-title d-flex align-items-end">
										<img src="/assets/img/pos/icon-table-black.svg" alt="" height="25" className="invert-dark me-2 opacity-5" /> 
										Table 01 
										<small className="fs-14px ms-2 text-inverse text-opacity-50">max 4 pax</small>
									</h5>
									<button data-bs-dismiss="modal" className="ms-auto btn-close">&nbsp;</button>
								</div>
								<div className="modal-body">
									<div className="row">
										<div className="col-lg-6">
											<div className="form-group mb-2">
												<div className="input-group">
													<div className="input-group-text fw-bold w-90px fs-13px">08:00am</div>
													<input type="text" className="form-control" placeholder="" />
												</div>
											</div>
											<div className="form-group mb-2">
												<div className="input-group">
													<div className="input-group-text fw-bold w-90px fs-13px">09:00am</div>
													<input type="text" className="form-control" placeholder="" defaultValue="Reserved by Sean" />
												</div>
											</div>
											<div className="form-group mb-2">
												<div className="input-group">
													<div className="input-group-text fw-bold w-90px fs-13px">10:00am</div>
													<input type="text" className="form-control" placeholder="" />
												</div>
											</div>
											<div className="form-group mb-2">
												<div className="input-group">
													<div className="input-group-text fw-bold w-90px fs-13px">11:00am</div>
													<input type="text" className="form-control" placeholder="" />
												</div>
											</div>
											<div className="form-group mb-2">
												<div className="input-group">
													<div className="input-group-text fw-bold w-90px fs-13px">12:00pm</div>
													<input type="text" className="form-control" placeholder="" />
												</div>
											</div>
											<div className="form-group mb-2">
												<div className="input-group">
													<div className="input-group-text fw-bold w-90px fs-13px">01:00pm</div>
													<input type="text" className="form-control" placeholder="" />
												</div>
											</div>
											<div className="form-group mb-2">
												<div className="input-group">
													<div className="input-group-text fw-bold w-90px fs-13px">02:00pm</div>
													<input type="text" className="form-control" placeholder="" />
												</div>
											</div>
											<div className="form-group mb-2">
												<div className="input-group">
													<div className="input-group-text fw-bold w-90px fs-13px">03:00pm</div>
													<input type="text" className="form-control" placeholder="" />
												</div>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group mb-2">
												<div className="input-group">
													<div className="input-group-text fw-bold w-90px fs-13px">04:00pm</div>
													<input type="text" className="form-control" placeholder="" />
												</div>
											</div>
											<div className="form-group mb-2">
												<div className="input-group">
													<div className="input-group-text fw-bold w-90px fs-13px">05:00pm</div>
													<input type="text" className="form-control" placeholder="" defaultValue="Reserved by Irene Wong (4pax)" />
												</div>
											</div>
											<div className="form-group mb-2">
												<div className="input-group">
													<div className="input-group-text fw-bold w-90px fs-13px">06:00pm</div>
													<input type="text" className="form-control" placeholder="" defaultValue="Reserved by Irene Wong (4pax)" />
												</div>
											</div>
											<div className="form-group mb-2">
												<div className="input-group">
													<div className="input-group-text fw-bold w-90px fs-13px">07:00pm</div>
													<input type="text" className="form-control" placeholder="" />
												</div>
											</div>
											<div className="form-group mb-2">
												<div className="input-group">
													<div className="input-group-text fw-bold w-90px fs-13px">08:00pm</div>
													<input type="text" className="form-control" placeholder="" />
												</div>
											</div>
											<div className="form-group mb-2">
												<div className="input-group">
													<div className="input-group-text fw-bold w-90px fs-13px">09:00pm</div>
													<input type="text" className="form-control" placeholder="" />
												</div>
											</div>
											<div className="form-group mb-2">
												<div className="input-group">
													<div className="input-group-text fw-bold w-90px fs-13px">10:00pm</div>
													<input type="text" className="form-control" placeholder="" />
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="modal-footer">
									<button className="btn btn-default w-100px" data-bs-dismiss="modal">Cancel</button>
									<button type="submit" className="btn btn-success w-100px">Book</button>
								</div>
							</CardBody>
						</Card>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PosTableBooking;