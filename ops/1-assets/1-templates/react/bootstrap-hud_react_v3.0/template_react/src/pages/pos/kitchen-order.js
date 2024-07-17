import React, { useEffect, useContext, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link } from 'react-router-dom';
import { Card, CardBody } from './../../components/card/card.jsx';
import { AppSettings } from './../../config/app-settings.js';

function PosKitchenOrder() {
	const context = useContext(AppSettings);
	const [time] = useState(getTime());
	const [orderData, setOrderData] = useState();
	
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
	
	function getTotalCompletedItems(items) {
		var count = 0;
		for (var i = 0; i < items.length; i++) {
			if (items[i].status === 'Completed') {
				count++;
			}
		}
		return count;
	}
  
	useEffect(() => {
		context.setAppHeaderNone(true);
		context.setAppSidebarNone(true);
		context.setAppContentFullHeight(true);
		context.setAppContentClass('p-1 ps-xl-4 pe-xl-4 pt-xl-3 pb-xl-3');
		
		fetch('/assets/data/pos/kitchen-order.json').then(res => res.json()).then((result) => { setOrderData(result); });
		
		return function cleanUp() {
			context.setAppHeaderNone(false);
			context.setAppSidebarNone(false);
			context.setAppContentFullHeight(false);
			context.setAppContentClass('');
		};
		
		// eslint-disable-next-line
	}, []);

	return (
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
					<PerfectScrollbar className="pos-content-container h-100 p-0">
						{orderData && orderData.length > 0 ? (orderData.map((order, index) => (
							<div className="pos-task" key={index}>
								<div className="pos-task-info">
									<div className="h3 mb-1">Table {order.tableNo}</div>
									<div className="mb-3">Order No: #{order.orderNo}</div>
									<div className="mb-2">
										<span className={'badge fs-14px' +
											((order.orderStatus !== 'Completed') ? ' bg-theme text-black' : '') + 
											((order.orderStatus === 'Completed') ? ' bg-gray-500 text-inverse' : '')
										}>{order.orderType}</span>
									</div>
									{order.orderTime && (<div className={((order.urgent) ? 'text-danger fw-bold' : '')}>{order.orderTime} time</div>)}
									{order.totalOrderTime && (<div>All dish served<br />{ order.totalOrderTime } total time</div>)}
								</div>
								<div className="pos-task-body">
									<div className="fs-16px mb-3">
										Completed: ({getTotalCompletedItems(order.items)}/{order.items.length})
									</div>
									<div className="row gx-4">
										{order.items && order.items.length > 0 ? (order.items.map((item, index) => (
											<div className="col-lg-3" key={index}>
												<div className={'pos-task-product' + ((item.status === 'Completed' || item.status === 'Cancelled') ? ' completed' : '')}>
													<div className="pos-task-product-img">
														<div className="cover" style={{backgroundImage: 'url('+ item.image +')'}}></div>
														{item.status === 'Completed' && (<div className="caption"><div>Completed</div></div>)}
														{item.status === 'Cancelled' && (<div className="caption"><div>Cancelled</div></div>)}
													</div>
													<div className="pos-task-product-info">
														<div className="flex-1">
															<div className="d-flex mb-2">
																<div className="h5 mb-0 flex-1">{item.title}</div>
																<div className="h5 mb-0">x{item.quantity}</div>
															</div>
															{item.note.length > 0 && (item.note.map((note, index) => (
																<div key={index}> - {note}</div>
															)))}
														</div>
													</div>
													<div className="pos-task-product-action">
														<a href="#/" className={'btn btn-success' + ((item.status === 'Completed' || item.status === 'Cancelled') ? ' disabled' : '')}>Complete</a>
														<a href="#/" className={'btn btn-outline-default' + ((item.status === 'Completed' || item.status === 'Cancelled') ? ' disabled' : '')}>Cancel</a>
													</div>
												</div>
											</div>
										))) : (
											<div className="col-12">
												No records found
											</div>
										)}
									</div>
								</div>
							</div>
						))) : (
							<div>
								No records found
							</div>
						)}
						<div className="pos-task">
							<div className="pos-task-info">
								<div className="h3 mb-1">Table 14</div>
								<div className="mb-3">Order No: #9047</div>
								<div className="mb-2">
									<span className="badge bg-success text-black fs-14px">Dine-in</span>
								</div>
								<div><span className="text-danger">12:13</span> time</div>
							</div>
							<div className="pos-task-body">
								<div className="fs-16px mb-3">
									Completed: (3/4)
								</div>
								<div className="row gx-4">
									<div className="col-lg-3">
										<div className="pos-task-product">
											<div className="pos-task-product-img">
												<div className="cover" style={{backgroundImage: 'url(/assets/img/pos/product-11.jpg)'}}></div>
											</div>
											<div className="pos-task-product-info">
												<div className="flex-1">
													<div className="d-flex mb-2">
														<div className="h5 mb-0 flex-1">Baked chicken wing</div>
														<div className="h5 mb-0">x1</div>
													</div>
													<div>
														- 6 pieces<br />
														- honey source<br />
													</div>
												</div>
											</div>
											<div className="pos-task-product-action">
												<a href="#/" className="btn btn-success">Complete</a>
												<a href="#/" className="btn btn-outline-default">Cancel</a>
											</div>
										</div>
									</div>
									<div className="col-lg-3">
										<div className="pos-task-product completed">
											<div className="pos-task-product-img">
												<div className="cover" style={{backgroundImage: 'url(/assets/img/pos/product-12.jpg)'}}></div>
												<div className="caption">
													<div>Completed</div>
												</div>
											</div>
											<div className="pos-task-product-info">
												<div className="flex-1">
													<div className="d-flex mb-2">
														<div className="h5 mb-0 flex-1">Veggie Spaghetti</div>
														<div className="h5 mb-0">x1</div>
													</div>
													<div>
														- size: large <br />
														- spicy level: light
													</div>
												</div>
											</div>
											<div className="pos-task-product-action">
												<a href="#/" className="btn btn-success disabled">Complete</a>
												<a href="#/" className="btn btn-outline-default disabled">Cancel</a>
											</div>
										</div>
									</div>
									<div className="col-lg-3">
										<div className="pos-task-product completed">
											<div className="pos-task-product-img">
												<div className="cover" style={{backgroundImage: 'url(/assets/img/pos/product-7.jpg)'}}></div>
												<div className="caption">
													<div>Completed</div>
												</div>
											</div>
											<div className="pos-task-product-info">
												<div className="flex-1">
													<div className="d-flex mb-2">
														<div className="h5 mb-0 flex-1">Coffee Latte</div>
														<div className="h5 mb-0">x1</div>
													</div>
													<div>
														- no sugar<br />
														- more cream
													</div>
												</div>
											</div>
											<div className="pos-task-product-action">
												<a href="#/" className="btn btn-success disabled">Complete</a>
												<a href="#/" className="btn btn-outline-default disabled">Cancel</a>
											</div>
										</div>
									</div>
									<div className="col-lg-3">
										<div className="pos-task-product completed">
											<div className="pos-task-product-img">
												<div className="cover" style={{backgroundImage: 'url(/assets/img/pos/product-1.jpg)'}}></div>
												<div className="caption">
													<div>Completed</div>
												</div>
											</div>
											<div className="pos-task-product-info">
												<div className="flex-1">
													<div className="d-flex mb-2">
														<div className="h5 mb-0 flex-1">Grill Chicken Chop</div>
														<div className="h5 mb-0">x1</div>
													</div>
													<div>
														- ala carte
													</div>
												</div>
											</div>
											<div className="pos-task-product-action">
												<a href="#/" className="btn btn-success disabled">Complete</a>
												<a href="#/" className="btn btn-outline-default disabled">Cancel</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="pos-task">
							<div className="pos-task-info">
								<div className="h3 mb-1">Table 17</div>
								<div className="mb-3">Order No: #9046</div>
								<div className="mb-2">
									<span className="badge bg-gray-500 text-inverse fs-14px">Dine-in</span>
								</div>
								<div>All dish served<br />12:30 total time</div>
							</div>
							<div className="pos-task-body">
								<div className="fs-16px mb-3">
									Completed: (3/3)
								</div>
								<div className="row gx-4">
									<div className="col-lg-3">
										<div className="pos-task-product completed">
											<div className="pos-task-product-img">
												<div className="cover" style={{backgroundImage: 'url(/assets/img/pos/product-2.jpg)'}}></div>
												<div className="caption">
													<div>Completed</div>
												</div>
											</div>
											<div className="pos-task-product-info">
												<div className="flex-1">
													<div className="d-flex mb-2">
														<div className="h5 mb-0 flex-1">Pork Burger</div>
														<div className="h5 mb-0">x1</div>
													</div>
													<div>
														- large size<br />
														- extra cheese<br />
													</div>
												</div>
											</div>
											<div className="pos-task-product-action">
												<a href="#/" className="btn btn-success disabled">Complete</a>
												<a href="#/" className="btn btn-outline-default disabled">Cancel</a>
											</div>
										</div>
									</div>
									<div className="col-lg-3">
										<div className="pos-task-product completed">
											<div className="pos-task-product-img">
												<div className="cover" style={{backgroundImage: 'url(/assets/img/pos/product-10.jpg)'}}></div>
												<div className="caption">
													<div>Completed</div>
												</div>
											</div>
											<div className="pos-task-product-info">
												<div className="flex-1">
													<div className="d-flex mb-2">
														<div className="h5 mb-0 flex-1">Mushroom soup</div>
														<div className="h5 mb-0">x1</div>
													</div>
													<div>
														- ala carte<br />
														- more cheese<br />
													</div>
												</div>
											</div>
											<div className="pos-task-product-action">
												<a href="#/" className="btn btn-success disabled">Complete</a>
												<a href="#/" className="btn btn-outline-default disabled">Cancel</a>
											</div>
										</div>
									</div>
									<div className="col-lg-3">
										<div className="pos-task-product completed">
											<div className="pos-task-product-img">
												<div className="cover" style={{backgroundImage: 'url(/assets/img/pos/product-8.jpg)'}}></div>
												<div className="caption">
													<div>Completed</div>
												</div>
											</div>
											<div className="pos-task-product-info">
												<div className="flex-1">
													<div className="d-flex mb-2">
														<div className="h5 mb-0 flex-1">Vita C Detox Juice</div>
														<div className="h5 mb-0">x1</div>
													</div>
													<div>
														- large size<br />
														- less ice<br />
													</div>
												</div>
											</div>
											<div className="pos-task-product-action">
												<a href="#/" className="btn btn-success disabled">Complete</a>
												<a href="#/" className="btn btn-outline-default disabled">Cancel</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="pos-task">
							<div className="pos-task-info">
								<div className="h3 mb-1">Table 18</div>
								<div className="mb-3">Order No: #9043</div>
								<div className="mb-2">
									<span className="badge bg-gray-500 text-inverse fs-14px">Dine-in</span>
								</div>
								<div>All dish served<br />12:30 total time</div>
							</div>
							<div className="pos-task-body">
								<div className="fs-16px mb-3">
									Completed: (2/2)
								</div>
								<div className="row gx-4">
									<div className="col-lg-3">
										<div className="pos-task-product completed">
											<div className="pos-task-product-img">
												<div className="cover" style={{backgroundImage: 'url(/assets/img/pos/product-13.jpg)'}}></div>
												<div className="caption">
													<div>Completed</div>
												</div>
											</div>
											<div className="pos-task-product-info">
												<div className="flex-1">
													<div className="d-flex mb-2">
														<div className="h5 mb-0 flex-1">Vanilla Ice Cream</div>
														<div className="h5 mb-0">x1</div>
													</div>
													<div>
														- ala carte
													</div>
												</div>
											</div>
											<div className="pos-task-product-action">
												<a href="#/" className="btn btn-success disabled">Complete</a>
												<a href="#/" className="btn btn-outline-default disabled">Cancel</a>
											</div>
										</div>
									</div>
									<div className="col-lg-3">
										<div className="pos-task-product completed">
											<div className="pos-task-product-img">
												<div className="cover" style={{backgroundImage: 'url(/assets/img/pos/product-9.jpg)'}}></div>
												<div className="caption">
													<div>Completed</div>
												</div>
											</div>
											<div className="pos-task-product-info">
												<div className="flex-1">
													<div className="d-flex mb-2">
														<div className="h5 mb-0 flex-1">Pancake</div>
														<div className="h5 mb-0">x1</div>
													</div>
													<div>
														- ala carte
													</div>
												</div>
											</div>
											<div className="pos-task-product-action">
												<a href="#/" className="btn btn-success disabled">Complete</a>
												<a href="#/" className="btn btn-outline-default disabled">Cancel</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="pos-task">
							<div className="pos-task-info">
								<div className="h3 mb-1">Table 02</div>
								<div className="mb-3">Order No: #9045</div>
								<div className="mb-2">
									<span className="badge bg-gray-500 text-inverse fs-14px">Take Away</span>
								</div>
								<div>All dish served<br />22:28 total time</div>
							</div>
							<div className="pos-task-body">
								<div className="fs-16px mb-3">
									Completed: (3/3)
								</div>
								<div className="row gx-4">
									<div className="col-lg-3">
										<div className="pos-task-product completed">
											<div className="pos-task-product-img">
												<div className="cover" style={{backgroundImage: 'url(/assets/img/pos/product-4.jpg)'}}></div>
												<div className="caption">
													<div>Completed</div>
												</div>
											</div>
											<div className="pos-task-product-info">
												<div className="flex-1">
													<div className="d-flex mb-2">
														<div className="h5 mb-0 flex-1">Vegan Salad Bowl&reg;</div>
														<div className="h5 mb-0">x1</div>
													</div>
													<div>
														- ala carte
													</div>
												</div>
											</div>
											<div className="pos-task-product-action">
												<a href="#/" className="btn btn-success disabled">Complete</a>
												<a href="#/" className="btn btn-outline-default disabled">Cancel</a>
											</div>
										</div>
									</div>
									<div className="col-lg-3">
										<div className="pos-task-product completed">
											<div className="pos-task-product-img">
												<div className="cover" style={{backgroundImage: 'url(/assets/img/pos/product-6.jpg)'}}></div>
												<div className="caption">
													<div>Completed</div>
												</div>
											</div>
											<div className="pos-task-product-info">
												<div className="flex-1">
													<div className="d-flex mb-2">
														<div className="h5 mb-0 flex-1">Avocado Shake</div>
														<div className="h5 mb-0">x1</div>
													</div>
													<div>
														- ala carte
													</div>
												</div>
											</div>
											<div className="pos-task-product-action">
												<a href="#/" className="btn btn-success disabled">Complete</a>
												<a href="#/" className="btn btn-outline-default disabled">Cancel</a>
											</div>
										</div>
									</div>
									<div className="col-lg-3">
										<div className="pos-task-product completed">
											<div className="pos-task-product-img">
												<div className="cover" style={{backgroundImage: 'url(/assets/img/pos/product-5.jpg)'}}></div>
												<div className="caption">
													<div>Completed</div>
												</div>
											</div>
											<div className="pos-task-product-info">
												<div className="flex-1">
													<div className="d-flex mb-2">
														<div className="h5 mb-0 flex-1">Hawaiian Pizza&reg;</div>
														<div className="h5 mb-0">x1</div>
													</div>
													<div>
														- ala carte
													</div>
												</div>
											</div>
											<div className="pos-task-product-action">
												<a href="#/" className="btn btn-success disabled">Complete</a>
												<a href="#/" className="btn btn-outline-default disabled">Cancel</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</PerfectScrollbar>
				</div>
			</CardBody>
		</Card>
	)
}

export default PosKitchenOrder;