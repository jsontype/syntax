import React, { useEffect, useContext, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link } from 'react-router-dom';
import { Card, CardBody } from './../../components/card/card.jsx';
import { AppSettings } from './../../config/app-settings.js';

function PosCounterCheckout() {
	const context = useContext(AppSettings);
	const [time] = useState(getTime());
	const [tableData, setTableData] = useState();
	const [posMobileSidebarToggled, setPosMobileSidebarToggled] = useState(false);
	const [selectedTable, setSelectedTable] = useState();
	
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
	
	
	function toggleMobileSidebar(event, table) {
		event.preventDefault();
		
		setPosMobileSidebarToggled(true);
		setSelectedTable(table);
	}
	
	function dismissMobileSidebar(event) {
		event.preventDefault();
		
		setPosMobileSidebarToggled(false);
		setSelectedTable([]);
	}
	
	function getPrice(type) {
		var price = 0;
		
		if (selectedTable && selectedTable.orders) {
			var orders = selectedTable.orders;
			for (var i = 0; i < orders.length; i++) {
				if (type === 'subtotal') {
					price += parseFloat(orders[i].price);
				} else if (type === 'taxes') {
					price += parseFloat(orders[i].price) * 0.06;
				} else if (type === 'total') {
					price += parseFloat(orders[i].price);
					price += parseFloat(orders[i].price) * 0.06
				}
			}
		}
		
		return price.toFixed(2);
	}
	
	function getTotalPrice(orders) {
		var total = 0;
		if (orders) {
			for (var i = 0; i < orders.length; i++) {
				total += parseFloat(orders[i].price);
			}
		}
		return total.toFixed(2);
	}
	
	useEffect(() => {
		context.setAppHeaderNone(true);
		context.setAppSidebarNone(true);
		context.setAppContentFullHeight(true);
		context.setAppContentClass('p-1 ps-xl-4 pe-xl-4 pt-xl-3 pb-xl-3');
		
		fetch('/assets/data/pos/counter-checkout.json').then(res => res.json()).then((result) => { setTableData(result); });
		
		return function cleanUp() {
			context.setAppHeaderNone(false);
			context.setAppSidebarNone(false);
			context.setAppContentFullHeight(false);
			context.setAppContentClass('');
		};
		
		// eslint-disable-next-line
	}, []);
	
	return (
		<Card className={'pos pos-vertical ' + ((posMobileSidebarToggled) ? 'pos-mobile-sidebar-toggled' : '')} id="pos">
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
					<div className="pos">
						<div className="pos-container">
							<div className="pos-content h-100">
								<PerfectScrollbar className="pos-content-container p-3 h-100">
									<div className="row gx-3">
										{tableData && tableData.length > 0 ? (tableData.map((table, index) => (
											<div className="col-xl-3 col-lg-4 col-md-6 pb-3" key={index}>
												<Card className={'pos-checkout-table' + 
													((selectedTable && table.tableNo === selectedTable.tableNo) ? ' selected' : '') + 
													((!table.orders && table.status !== 'Reserved') ? ' available' : '') + 
													((table.orders) ? ' in-use' : '') +
													((table.status === 'Reserved') ? ' disabled' : '')
												}>
													<a href="#/" className="pos-checkout-table-container" onClick={(event) => toggleMobileSidebar(event, table)}>
														<div className="pos-checkout-table-header">
															<div className="status"><i className="bi bi-circle-fill"></i></div>
															<div className="fw-bold">Table</div>
															<div className="fw-bold display-6">{table.tableNo}</div>
															<div className="text-inverse text-opacity-50">
																{table.orders && (<span>{table.orders.length} order</span>)}
																{table.status === 'Reserved' && (<span>Reserved for {table.reserveName}</span>)}
																{!table.orders && table.status !== 'Reserved' && (<span>max { table.totalPax } pax</span>)}
															</div>
														</div>
														<div className="pos-checkout-table-info small">
															<div className="row">
																<div className="col-6 d-flex justify-content-center">
																	<div className="w-20px"><i className="bi bi-people text-inverse text-opacity-50"></i></div>
																	<div className="w-60px">{table.pax} / {table.totalPax}</div>
																</div>
																<div className="col-6 d-flex justify-content-center">
																	<div className="w-20px"><i className="bi bi-clock text-inverse text-opacity-50"></i></div>
																	<div className="w-60px">{(table.totalTime) ? table.totalTime : '-'}</div>
																</div>
															</div>
															<div className="row">
																<div className="col-6 d-flex justify-content-center">
																	<div className="w-20px"><i className="bi bi-receipt text-inverse text-opacity-50"></i></div>
																	<div className="w-60px">${getTotalPrice(table.orders)}</div>
																</div>
																<div className="col-6 d-flex justify-content-center">
																	<div className="w-20px"><i className="bi bi-currency-dollar text-inverse text-opacity-50"></i></div>
																	<div className={'w-60px'+ ((table.status === 'Paid') ? ' text-success' : '')}>{(table.status !== 'Reserved') ? table.status : '-'}</div>
																</div>
															</div>
														</div>
													</a>
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
			
							<div className="pos-sidebar" id="pos-sidebar">
								<div className="pos-sidebar-header">
									<div className="back-btn">
										<button type="button" onClick={dismissMobileSidebar} className="btn">
											<i className="bi bi-chevron-left"></i>
										</button>
									</div>
									<div className="icon"><img src="/assets/img/pos/icon-table-black.svg" className="invert-dark" alt="" /></div>
									<div className="title">Table {(selectedTable && selectedTable.tableNo) ? selectedTable.tableNo : '-'}</div>
									<div className="order">Order: <b className="text-theme">#{ (selectedTable && selectedTable.orderNo) ? selectedTable.orderNo : '-' }</b></div>
								</div>
								<hr className="m-0" />
								<PerfectScrollbar className="pos-sidebar-body">
									<div>
										{selectedTable && selectedTable.orders ? (selectedTable.orders.map((order, index) => (
											<div className="pos-order py-3" key={index}>
												<div className="pos-order-product">
													<div className="img w-40px h-40px" style={{backgroundImage: 'url('+ order.image +')'}}></div>
													<div className="flex-1">
														<div className="row">
															<div className="col-7">
																<div className="h6 mb-1">{ order.title }</div>
																<div className="small">${ order.price }</div>
																{order.options && order.options.map((option, index) => (
																	<div className="small" key={index}>- size: {option}</div>
																))}
															</div>
															<div className="col-2">x{ order.quantity }</div>
															<div className="col-3 text-inverse fw-bold text-end">${ (parseFloat(order.price) * order.quantity).toFixed(2) }</div>
														</div>
													</div>
												</div>
											</div>
										))) : (
											<div className="pos-order py-3">
												No records found
											</div>
										)}
									</div>
								</PerfectScrollbar>
								
								<div className="pos-sidebar-footer">
									<div className="d-flex align-items-center mb-2">
										<div>Subtotal</div>
										<div className="flex-1 text-end h6 mb-0">${getPrice('subtotal')}</div>
									</div>
									<div className="d-flex align-items-center">
										<div>Taxes (6%)</div>
										<div className="flex-1 text-end h6 mb-0">${getPrice('taxes')}</div>
									</div>
									<hr />
									<div className="d-flex align-items-center mb-2">
										<div>Total</div>
										<div className="flex-1 text-end h4 mb-0">${getPrice('total')}</div>
									</div>
									<div className="mt-3">
										<div className="btn-group d-flex">
											<a href="#/" className="btn btn-outline-default rounded-0 w-80px">
												<i className="bi bi-paypal fa-lg"></i><br />
												<span className="small">E-Wallet</span>
											</a>
											<a href="#/" className="btn btn-outline-default rounded-0 w-80px">
												<i className="bi bi-credit-card fa-fw fa-lg"></i><br />
												<span className="small">Card</span>
											</a>
											<a href="#/" className="btn btn-outline-theme rounded-0 w-150px">
												<i className="bi bi-wallet2 fa-lg"></i><br />
												<span className="small">Cash</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	)
}

export default PosCounterCheckout;