import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody } from './../../components/card/card.jsx';
import { AppSettings } from './../../config/app-settings.js';

function PosMenuStock() {
	const context = useContext(AppSettings);
	const [time] = useState(getTime());
	const [stockData, setStockData] = useState();
	
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
  
	useEffect(() => {
		context.setAppHeaderNone(true);
		context.setAppSidebarNone(true);
		context.setAppContentFullHeight(true);
		context.setAppContentClass('p-1 ps-xl-4 pe-xl-4 pt-xl-3 pb-xl-3');
		
		fetch('/assets/data/pos/menu-stock.json').then(res => res.json()).then((result) => { setStockData(result); });
		
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
					<div className="pos-content-container h-100 p-3" data-scrollbar="true" data-height="100%">
						<div className="row gx-3">
							{stockData && stockData.length > 0 ? (stockData.map((stock, index) => (
							<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 pb-3" key={stock.id}>
								<Card className="h-100">
									<CardBody className="h-100 p-1">
										<div className="pos-product">
											<div className="img" style={{backgroundImage: 'url('+ stock.image +')'}}></div>
											<div className="info">
												<div className="title text-truncate">{stock.title}</div>
												<div className="desc text-truncate">{stock.description}</div>
												<div className="d-flex align-items-center mb-3">
													<div className="w-100px">Stock:</div>
													<div className="flex-1">
														<input type="text" className="form-control" defaultValue={stock.stock} />
													</div>
												</div>
												<div className="d-flex align-items-center mb-3">
													<div className="w-100px">Availability:</div>
													<div className="flex-1">
														<div className="form-check form-switch">
															<input className="form-check-input" type="checkbox" name="qty" id="product1" defaultChecked={stock.available} defaultValue="1" />
															<label className="form-check-label" htmlFor="product1"></label>
														</div>
													</div>
												</div>
												<div>
													<a href="#/" className="btn btn-success d-block mb-2"><i className="fa fa-check fa-fw"></i> Update</a>
													<a href="#/" className="btn btn-default d-block"><i className="fa fa-times fa-fw"></i> Cancel</a>
												</div>
											</div>
										</div>
									</CardBody>
								</Card>
							</div>
							))) : (
								<div className="col-12">
									No records found
								</div>
							)}
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	)
}

export default PosMenuStock;