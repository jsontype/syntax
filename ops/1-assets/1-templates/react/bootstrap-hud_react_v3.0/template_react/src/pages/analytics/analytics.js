import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import Masonry from 'masonry-layout';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import Moment from 'moment';
import { Card, CardBody } from './../../components/card/card.jsx';
import 'bootstrap-daterangepicker/daterangepicker.css';

function Analytics() {
	var chart1 = '';
	var chart2 = '';
	var chart3 = '';
	var chart4 = '';
	var chart5 = '';
		
	var dateRange = {
		currentWeek: Moment().subtract(7, 'days').format('D MMM YYYY') + ' - ' + Moment().format('D MMM YYYY'),
		prevWeek: Moment().subtract(15, 'days').format('D MMM') + ' - ' + Moment().subtract(8, 'days').format('D MMM YYYY')
	};
	
	var startDate = '';
	var endDate = '';
	var prevDate = Moment().add(-1, 'd').format('D MMM YYYY');
	var todayDate = Moment().add(-1, 'd').format('D MMM YYYY');
		
	function handleDateApplyEvent(event, picker) {
		var startDate = picker.startDate;
		var endDate = picker.endDate;
		var gap = endDate.diff(startDate, 'days');
		
		var currentWeek = startDate.format('D MMM YYYY') + ' - ' + endDate.format('D MMM YYYY');
		var prevWeek = Moment(startDate).subtract(gap, 'days').format('D MMM') + ' - ' + Moment(startDate).subtract(1, 'days').format('D MMM YYYY');
		
		dateRange.currentWeek = currentWeek;
		dateRange.prevWeek = prevWeek;
	}
	
	function renderChart() {
		function newDate(days) {
			return Moment().add(days, 'd').format('D MMM');
		}
		
		// color & font variable
		var gray300Color = (getComputedStyle(document.body).getPropertyValue('--bs-gray-300')).trim();
		var gray300RgbColor = (getComputedStyle(document.body).getPropertyValue('--bs-gray-300-rgb')).trim();
		var indigoColor = (getComputedStyle(document.body).getPropertyValue('--bs-indigo')).trim();
		var bodyColor = (getComputedStyle(document.body).getPropertyValue('--bs-body-color')).trim();
		var bodyBg = (getComputedStyle(document.body).getPropertyValue('--bs-body-bg')).trim();
		var borderColor = (getComputedStyle(document.body).getPropertyValue('--bs-border-color')).trim();
		var bodyFontFamily = (getComputedStyle(document.body).getPropertyValue('--bs-body-font-family')).trim();
		var bodyFontWeight = (getComputedStyle(document.body).getPropertyValue('--bs-body-font-weight')).trim();
		var inverse = (getComputedStyle(document.body).getPropertyValue('--bs-dark')).trim();
		var themeColor = (getComputedStyle(document.body).getPropertyValue('--bs-theme')).trim();
		
		// chart global options
		Chart.defaults.font.family = bodyFontFamily;
		Chart.defaults.font.size = 12;
		Chart.defaults.color = bodyColor;
		Chart.defaults.borderColor = borderColor;
		Chart.defaults.plugins.legend.display = false;
		Chart.defaults.plugins.tooltip.padding = { left: 8, right: 12, top: 8, bottom: 8 };
		Chart.defaults.plugins.tooltip.cornerRadius = 8;
		Chart.defaults.plugins.tooltip.titleMarginBottom = 6;
		Chart.defaults.plugins.tooltip.color = bodyBg;
		Chart.defaults.plugins.tooltip.multiKeyBackground = inverse;
		Chart.defaults.plugins.tooltip.backgroundColor = inverse;
		Chart.defaults.plugins.tooltip.titleFont.family = bodyFontFamily;
		Chart.defaults.plugins.tooltip.titleFont.weight = bodyFontWeight;
		Chart.defaults.plugins.tooltip.footerFont.family = bodyFontFamily;
		Chart.defaults.plugins.tooltip.displayColors = true;
		Chart.defaults.plugins.tooltip.boxPadding = 6;
		Chart.defaults.scale.grid.color = borderColor;
		Chart.defaults.scale.beginAtZero = true;
		Chart.defaults.maintainAspectRatio = false;
		
		// chart 1
		var chart1Container = document.getElementById('chart-1');
		if (chart1) {
			chart1.destroy();
		}
		if (chart1Container) {
			chart1Container.innerHTML = '<canvas id="chart1" className="w-100" height="190"></canvas>';
			chart1 = new Chart(document.getElementById('chart1').getContext('2d'), {
				type: 'line',
				data: {
					labels: ['', '4am', '8am', '12pm', '4pm', '8pm', newDate(1)],
					datasets: [{
						color: themeColor,
						backgroundColor: 'transparent',
						borderColor: themeColor,
						borderWidth: 2,
						pointBackgroundColor: bodyBg,
						pointBorderWidth: 2,
						pointRadius: 4,
						pointHoverBackgroundColor: bodyBg,
						pointHoverBorderColor: themeColor,
						pointHoverRadius: 6,
						pointHoverBorderWidth: 2,
						data: [0, 0, 0, 601.5, 220]
					},{
						color: gray300Color,
						backgroundColor: 'rgba('+ gray300RgbColor + ', .2)',
						borderColor: gray300Color,
						borderWidth: 2,
						pointBackgroundColor: bodyBg,
						pointBorderWidth: 2,
						pointRadius: 4,
						pointHoverBackgroundColor: bodyBg,
						pointHoverBorderColor: gray300Color,
						pointHoverRadius: 6,
						pointHoverBorderWidth: 2,
						data: [0, 0, 0, 500, 120, 0, 0, 0]
					}]
				}
			});
		}
		
		// #chart2
		var chart2Container = document.getElementById('chart-2');
		if (chart2) {
			chart2.destroy();
		}
		if (chart2Container) {
			chart2Container.innerHTML = '<canvas id="chart2" className="w-100" height="190"></canvas>';
			chart2 = new Chart(document.getElementById('chart2').getContext('2d'), {
				type: 'line',
				data: {
					labels: ['', '4am', '8am', '12pm', '4pm', '8pm', newDate(1)],
					datasets: [{
						color: themeColor,
						backgroundColor: 'transparent',
						borderColor: themeColor,
						borderWidth: 2,
						pointBackgroundColor: bodyBg,
						pointBorderWidth: 2,
						pointRadius: 4,
						pointHoverBackgroundColor: bodyBg,
						pointHoverBorderColor: themeColor,
						pointHoverRadius: 6,
						pointHoverBorderWidth: 2,
						data: [0, 20, 50, 100, 120]
					},{
						color: gray300Color,
						backgroundColor: 'rgba('+ gray300RgbColor + ', .2)',
						borderColor: gray300Color,
						borderWidth: 2,
						pointBackgroundColor: bodyBg,
						pointBorderWidth: 2,
						pointRadius: 4,
						pointHoverBackgroundColor: bodyBg,
						pointHoverBorderColor: gray300Color,
						pointHoverRadius: 6,
						pointHoverBorderWidth: 2,
						data: [0, 30, 44, 130, 34, 15, 43, 22]
					}]
				}
			});
		}

		// #chart3
		var chart3Container = document.getElementById('chart-3');
		if (chart3) {
			chart3.destroy();
		}
		if (chart3Container) {
			chart3Container.innerHTML = '<canvas id="chart3" className="w-100" height="190"></canvas>';
			chart3 = new Chart(document.getElementById('chart3').getContext('2d'), {
				type: 'line',
				data: {
					labels: ['', '4am', '8am', '12pm', '4pm', '8pm', newDate(1)],
					datasets: [{
						color: indigoColor,
						backgroundColor: 'transparent',
						borderColor: indigoColor,
						borderWidth: 2,
						pointBackgroundColor: bodyBg,
						pointBorderWidth: 2,
						pointRadius: 4,
						pointHoverBackgroundColor: bodyBg,
						pointHoverBorderColor: indigoColor,
						pointHoverRadius: 6,
						pointHoverBorderWidth: 2,
						data: [0, 0, 5, 18, 9]
					},{
						color: themeColor,
						backgroundColor: 'rgba('+ themeColor +', .2)',
						borderColor: themeColor,
						borderWidth: 2,
						pointBackgroundColor: bodyBg,
						pointBorderWidth: 2,
						pointRadius: 4,
						pointHoverBackgroundColor: bodyBg,
						pointHoverBorderColor: themeColor,
						pointHoverRadius: 6,
						pointHoverBorderWidth: 2,
						data: [0, 0, 10, 26, 13]
					}]
				}
			});
		}

		// #chart4
		var chart4Container = document.getElementById('chart-4');
		if (chart4) {
			chart4.destroy();
		}
		if (chart4Container) {
			chart4Container.innerHTML = '<canvas id="chart4" className="w-100" height="190"></canvas>';
			chart4 = new Chart(document.getElementById('chart4').getContext('2d'), {
				type: 'line',
				data: {
					labels: ['', '4am', '8am', '12pm', '4pm', '8pm', newDate(1)],
					datasets: [{
						color: themeColor,
						backgroundColor: 'transparent',
						borderColor: themeColor,
						borderWidth: 2,
						pointBackgroundColor: bodyBg,
						pointBorderWidth: 2,
						pointRadius: 4,
						pointHoverBackgroundColor: bodyBg,
						pointHoverBorderColor: themeColor,
						pointHoverRadius: 6,
						pointHoverBorderWidth: 2,
						data: [0, 0, 0, 24, 39]
					},{
						color: gray300Color,
						backgroundColor: 'rgba('+ gray300RgbColor + ', .2)',
						borderColor: gray300Color,
						borderWidth: 2,
						pointBackgroundColor: bodyBg,
						pointBorderWidth: 2,
						pointRadius: 4,
						pointHoverBackgroundColor: bodyBg,
						pointHoverBorderColor: gray300Color,
						pointHoverRadius: 6,
						pointHoverBorderWidth: 2,
						data: [0, 0, 0, 28, 35, 23, 0, 0]
					}]
				}
			});
		}
	
		// #chart5
		var chart5Container = document.getElementById('chart-5');
		if (chart5) {
			chart5.destroy();
		}
		if (chart5Container) {
			chart5Container.innerHTML = '<canvas id="chart5" className="w-100" height="190"></canvas>';
			chart5 = new Chart(document.getElementById('chart5').getContext('2d'), {
				type: 'line',
				data: {
					labels: ['', '4am', '8am', '12pm', '4pm', '8pm', newDate(1)],
					datasets: [{
						color: themeColor,
						backgroundColor: 'transparent',
						borderColor: themeColor,
						borderWidth: 2,
						pointBackgroundColor: bodyBg,
						pointBorderWidth: 2,
						pointRadius: 4,
						pointHoverBackgroundColor: bodyBg,
						pointHoverBorderColor: themeColor,
						pointHoverRadius: 6,
						pointHoverBorderWidth: 2,
						data: [0, 0, 0, 12, 5]
					},{
						color: gray300Color,
						backgroundColor: 'rgba('+ gray300RgbColor + ', .2)',
						borderColor: gray300Color,
						borderWidth: 2,
						pointBackgroundColor: bodyBg,
						pointBorderWidth: 2,
						pointRadius: 4,
						pointHoverBackgroundColor: bodyBg,
						pointHoverBorderColor: gray300Color,
						pointHoverRadius: 6,
						pointHoverBorderWidth: 2,
						data: [0, 0, 0, 10, 4, 2, 0, 0]
					}]
				}
			});
		}
	}
	
	useEffect(() => {
		renderChart();
		new Masonry('[data-masonry]');
		
		document.addEventListener('theme-reload', () => {
			renderChart();
		});
	});
	
	return (
		<div>
			<h1 className="page-header">
				Analytics <small>stats, overview & performance</small>
			</h1>
			
			<div className="d-sm-flex align-items-center mb-3">
				<DateRangePicker startDate={startDate} endDate={endDate} onApply={handleDateApplyEvent}>
					<button className="btn btn-outline-theme text-truncate me-3 mb-2 mb-sm-0">
						<i className="fa fa-fw fa-calendar me-1"></i> 
						<span>{dateRange.currentWeek}</span>
						<i className="fa fa-fw fa-caret-down me-n1"></i> 
					</button>
				</DateRangePicker>
				<div>compared to <span>{dateRange.prevWeek}</span></div>
			</div>
	
			<div className="row" data-masonry='{"percentPosition": true }'>
				<div className="col-lg-6 col-xl-4 mb-4">
					<Card>
						<CardBody>
							<div className="d-flex align-items-center mb-2">
								<div className="flex-fill fw-bold fs-16px">Total sales</div>
								<a href="#/" className="text-decoration-none text-inverse text-opacity-50">View report</a>
							</div>
			
							<div className="d-flex align-items-center h4 mb-3">
								<div>$821.50</div>
								<small className="fw-400 ms-auto text-theme">+5%</small>
							</div>
						
							<div>
								<div className="fs-12px fw-bold mb-2 text-inverse text-opacity-50">SALES OVER TIME</div>
								<div className="chart mb-2" style={{height: '190px'}}>
									<div id="chart-1"></div>
								</div>
								<div className="d-flex align-items-center justify-content-center fw-bold text-inverse text-opacity-50">
									<i className="fa fa-square text-gray-300 me-2"></i> 
									<span className="fs-12px me-4">{prevDate}</span>
									<i className="fa fa-square text-theme me-2"></i> 
									<span className="fs-12px me-4">{todayDate}</span>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
			
				<div className="col-lg-6 col-xl-4 mb-4">
					<Card>
						<CardBody>
							<div className="d-flex align-items-center mb-2">
								<div className="flex-fill fw-bold fs-16px">Online store sessions</div>
								<a href="#/" className="text-decoration-none text-inverse text-opacity-50">View report</a>
							</div>
			
							<div className="d-flex align-items-center h3 mb-3">
								<div>39</div>
								<small className="fw-400 ms-auto text-danger">-2.5%</small>
							</div>
						
							<hr className="opacity-3 my-2 mx-n3" />
						
							<div className="row">
								<div className="col-6">Visitors</div>
								<div className="col-3 text-center">2</div>
								<div className="col-3 text-end">
									<span className="text-danger">-</span> 50%
								</div>
							</div>
						
							<hr className="opacity-3 my-2 mx-n3" />
						
							<div className="mt-3">
								<div className="fs-12px fw-bold mb-2 text-inverse text-opacity-50">SESSIONS OVER TIME</div>
								<div className="chart mb-2" style={{height: '190px'}}>
									<div id="chart-2"></div>
								</div>
								<div className="d-flex align-items-center justify-content-center text-inverse text-opacity-50 fw-bold">
									<i className="fa fa-square text-gray-300 me-2"></i> 
									<span className="fs-12px me-4">{prevDate}</span>
									<i className="fa fa-square text-theme me-2"></i> 
									<span className="fs-12px me-4">{todayDate}</span>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
			
				<div className="col-lg-6 col-xl-4 mb-4">
					<Card>
						<CardBody>
							<div className="d-flex align-items-center mb-3">
								<div className="flex-fill fw-bold fs-16px">Top product by units sold</div>
							</div>
			
							<div>
								<div className="row mb-2">
									<div className="col-6">iPhone 11 Pro Max</div>
									<div className="col-3 text-center">329</div>
									<div className="col-3 text-center"><span className="text-theme">+</span> 25%</div>
								</div>
								<div className="row mb-2">
									<div className="col-6">iPad Pro</div>
									<div className="col-3 text-center">219</div>
									<div className="col-3 text-center"><span className="text-danger">-</span> 5.2%</div>
								</div>
								<div className="row mb-2">
									<div className="col-6">Macbook Pro</div>
									<div className="col-3 text-center">125</div>
									<div className="col-3 text-center"><span className="text-theme">+</span> 2.3%</div>
								</div>
								<div className="row mb-2">
									<div className="col-6">iPhone SE 2</div>
									<div className="col-3 text-center">92</div>
									<div className="col-3 text-center"><span className="text-theme">+</span> 4.9%</div>
								</div>
								<div className="row">
									<div className="col-6">Apple pencil</div>
									<div className="col-3 text-center">52</div>
									<div className="col-3 text-center"><span className="text-theme">+</span> 25%</div>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
			
				<div className="col-lg-6 col-xl-4 mb-4">
					<Card>
						<CardBody>
							<div className="d-flex align-items-center mb-2">
								<div className="flex-fill fs-16px fw-bold">Returning customer rate</div>
							</div>
			
							<div className="d-flex align-items-center h3 mb-3">
								<div>52.85%</div>
								<small className="fw-400 ms-auto text-danger">-7%</small>
							</div>
						
							<div>
								<div className="fs-12px fw-bold mb-2 text-inverse text-opacity-50">CUSTOMERS</div>
								<div className="chart mb-2" style={{height: '190px'}}>
									<div id="chart-3"></div>
								</div>
								<div className="d-flex align-items-center justify-content-center text-inverse text-opacity-50 fw-bold">
									<i className="fa fa-square text-indigo me-2"></i> 
									<span className="fs-12px me-4">First-time</span>
									<i className="fa fa-square text-theme me-2"></i> 
									<span className="fs-12px">Returning</span>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
			
				<div className="col-lg-6 col-xl-4 mb-4">
					<Card>
						<CardBody>
							<div className="d-flex align-items-center mb-2">
								<div className="flex-fill fw-bold fs-16px">Conversion rate</div>
								<a href="#/" className="text-decoration-none text-inverse text-opacity-50">View report</a>
							</div>
			
							<div className="d-flex align-items-center h3 mb-3">
								<div>5.29%</div>
								<small className="fw-400 ms-auto text-theme">+83%</small>
							</div>
						
							<div>
								<div className="fs-12px fw-bold mb-2 text-inverse text-opacity-50">CONVERSION FUNNEL</div>
								<div className="row mb-2">
									<div className="col-6">
										<div>Added to cart</div>
										<div className="small text-inverse text-opacity-50">55 session</div>
									</div>
									<div className="col-3 text-center">25.28%</div>
									<div className="col-3 text-center"><span className="text-danger">-</span> 5%</div>
								</div>
								<div className="row mb-2">
									<div className="col-6">
										<div>Reached checkout</div>
										<div className="small text-inverse text-opacity-50">25 session</div>
									</div>
									<div className="col-3 text-center">15.28%</div>
									<div className="col-3 text-center"><span className="text-theme">+</span> 82%</div>
								</div>
								<div className="row">
									<div className="col-6">
										<div>Sessions converted</div>
										<div className="small text-inverse text-opacity-50">5 session</div>
									</div>
									<div className="col-3 text-center">5.28%</div>
									<div className="col-3 text-center"><span className="text-theme">+</span> 82%</div>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
			
				<div className="col-lg-6 col-xl-4 mb-4">
					<Card>
						<CardBody>
							<div className="d-flex align-items-center mb-2">
								<div className="flex-fill fw-bold fs-16px">Average order value</div>
							</div>
			
							<div className="d-flex align-items-center h3 mb-3">
								<div>$35.12</div>
								<small className="fw-400 ms-auto text-danger">-3.2%</small>
							</div>
						
							<div>
								<div className="fs-12px fw-bold mb-2 text-inverse text-opacity-50">ORDERS BY TIME</div>
								<div className="chart mb-2" style={{height: '190px'}}>
									<div id="chart-4"></div>
								</div>
								<div className="d-flex align-items-center justify-content-center fw-bold text-inverse text-opacity-50">
									<i className="fa fa-square text-gray-300 me-2"></i> 
									<span className="fs-12px me-4">{prevDate}</span>
									<i className="fa fa-square text-theme me-2"></i> 
									<span className="fs-12px me-4">{todayDate}</span>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
			
				<div className="col-lg-6 col-xl-4 mb-4">
					<Card>
						<CardBody>
							<div className="d-flex align-items-center mb-2">
								<div className="flex-fill fw-bold fs-16px">Total orders</div>
							</div>
			
							<div className="d-flex align-items-center h3 mb-3">
								<div>12</div>
								<small className="fw-400 ms-auto text-theme">+57%</small>
							</div>
						
							<div>
								<div className="fs-12px fw-bold mb-2 text-inverse text-opacity-50">ORDERS OVER TIME</div>
								<div className="chart mb-2">
									<div id="chart-5"></div>
								</div>
								<div className="d-flex align-items-center justify-content-center fw-bold text-inverse text-opacity-50">
									<i className="fa fa-square text-gray-300 me-2"></i> 
									<span className="fs-12px me-4">{prevDate}</span>
									<i className="fa fa-square text-theme me-2"></i> 
									<span className="fs-12px me-4">{todayDate}</span>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
			
				<div className="col-lg-6 col-xl-4 mb-4">
					<Card>
						<CardBody>
							<div className="d-flex align-items-center mb-3">
								<div className="flex-fill fw-bold fs-16px">Top pages by sessions</div>
							</div>
			
							<div className="row mb-2">
								<div className="col-6"><div><a href="#/" className="text-decoration-none text-inverse text-opacity-50">/phone/apple-11-pro-max</a></div></div>
								<div className="col-3 text-center">15</div>
								<div className="col-3 text-center"><span className="text-theme">+</span> 15%</div>
							</div>
							<div className="row mb-2">
								<div className="col-6"><div><a href="#/" className="text-decoration-none text-inverse text-opacity-50">/tablet/apple-ipad-pro-128gb</a></div></div>
								<div className="col-3 text-center">12</div>
								<div className="col-3 text-center"><span className="text-theme">+</span> 8%</div>
							</div>
							<div className="row">
								<div className="col-6"><div><a href="#/" className="text-decoration-none text-inverse text-opacity-50">/desktop/apple-mac-pro</a></div></div>
								<div className="col-3 text-center">4</div>
								<div className="col-3 text-center"><span className="text-danger">-</span> 3%</div>
							</div>
						</CardBody>
					</Card>
				</div>
			
				<div className="col-lg-6 col-xl-4 mb-4">
					<Card>
						<CardBody>
							<div className="d-flex align-items-center mb-3">
								<div className="flex-fill fw-bold fs-16px">Sessions by device type</div>
								<a href="#/" className="text-decoration-none text-inverse text-opacity-50">View report</a>
							</div>
			
							<div className="row mb-2">
								<div className="col-6">
									<div>Desktop</div>
								</div>
								<div className="col-3 text-center">247</div>
								<div className="col-3 text-center"><span className="text-theme">+</span> 4.2%</div>
							</div>
							<div className="row mb-2">
								<div className="col-6">
									<div>Mobile</div>
								</div>
								<div className="col-3 text-center">198</div>
								<div className="col-3 text-center"><span className="text-danger">-</span> 2.2%</div>
							</div>
							<div className="row">
								<div className="col-6">
									<div>Tablet</div>
								</div>
								<div className="col-3 text-center">35</div>
								<div className="col-3 text-center"><span className="text-theme">+</span> 8.9%</div>
							</div>
						</CardBody>
					</Card>
				</div>
			
				<div className="col-lg-6 col-xl-4 mb-4">
					<Card>
						<CardBody>
							<div className="d-flex align-items-center mb-3">
								<div className="flex-fill fw-600 fs-16px">Visits from social sources</div>
								<a href="#/" className="text-decoration-none text-inverse text-opacity-50">View report</a>
							</div>
			
							<div className="row mb-2">
								<div className="col-6">
									<div>Facebook</div>
								</div>
								<div className="col-3 text-center">247</div>
								<div className="col-3 text-center"><span className="text-theme">+</span> 4.2%</div>
							</div>
							<div className="row mb-2">
								<div className="col-6">
									<div>Twitter</div>
								</div>
								<div className="col-3 text-center">153</div>
								<div className="col-3 text-center"><span className="text-theme">+</span> 8.2%</div>
							</div>
							<div className="row mb-2">
								<div className="col-6">
									<div>Instagram</div>
								</div>
								<div className="col-3 text-center">98</div>
								<div className="col-3 text-center"><span className="text-danger">-</span> 3.4%</div>
							</div>
							<div className="row mb-2">
								<div className="col-6">
									<div>Pinterest</div>
								</div>
								<div className="col-3 text-center">75</div>
								<div className="col-3 text-center"><span className="text-theme">+</span> 1.9%</div>
							</div>
							<div className="row">
								<div className="col-6">
									<div>Dribbble</div>
								</div>
								<div className="col-3 text-center">22</div>
								<div className="col-3 text-center"><span className="text-theme">+</span> 2.1%</div>
							</div>
						</CardBody>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default Analytics;