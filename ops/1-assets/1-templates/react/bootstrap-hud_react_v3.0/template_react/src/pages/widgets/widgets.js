import React, { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Highlight from 'react-highlight';
import Chart from 'chart.js/auto';
import { Card, CardHeader, CardBody, CardFooter } from './../../components/card/card.jsx';
import { NavScrollTo } from './../../components/nav-scroll-to/nav-scroll-to.jsx';

function Widgets() {
	const [code1, setCode1] = useState();
	const [code2, setCode2] = useState();
	const [code3, setCode3] = useState();
	const [code4, setCode4] = useState();
	const [code5, setCode5] = useState();
	const [code6, setCode6] = useState();
	const [code7, setCode7] = useState();
	const [code8, setCode8] = useState();
	const [code9, setCode9] = useState();
	const [code10, setCode10] = useState();
	const [code11, setCode11] = useState();
	var chart = '';
	
	function renderChart() {
		var bodyFontFamily = (getComputedStyle(document.body).getPropertyValue('--bs-body-font-family')).trim();
		var bodyFontWeight = (getComputedStyle(document.body).getPropertyValue('--bs-body-font-weight')).trim();
		var bodyColor = (getComputedStyle(document.body).getPropertyValue('--bs-body-color')).trim();
		var borderColor = (getComputedStyle(document.body).getPropertyValue('--bs-border-color')).trim();
		var inverseRgb = (getComputedStyle(document.body).getPropertyValue('--bs-inverse-rgb')).trim();
		var theme = (getComputedStyle(document.body).getPropertyValue('--bs-theme')).trim();
		
		Chart.defaults.font.family = bodyFontFamily;
		Chart.defaults.font.size = 12;
		Chart.defaults.color = bodyColor;
		Chart.defaults.borderColor = borderColor;
		Chart.defaults.plugins.legend.display = true;
		Chart.defaults.plugins.tooltip.padding = { left: 8, right: 12, top: 8, bottom: 8 };
		Chart.defaults.plugins.tooltip.cornerRadius = 8;
		Chart.defaults.plugins.tooltip.titleMarginBottom = 6;
		Chart.defaults.plugins.tooltip.titleFont.family = bodyFontFamily;
		Chart.defaults.plugins.tooltip.titleFont.weight = bodyFontWeight;
		Chart.defaults.plugins.tooltip.footerFont.family = bodyFontFamily;
		Chart.defaults.plugins.tooltip.displayColors = true;
		Chart.defaults.plugins.tooltip.boxPadding = 6;
		Chart.defaults.scale.grid.color = borderColor;
		Chart.defaults.scale.beginAtZero = true;
		
		var chartContainer = document.getElementById('chartContainer');
		if (chart) {
			chart.destroy();
		}
		if (chartContainer) {
			chartContainer.innerHTML = '<canvas id="widgetBarChart" className="w-100" height="190"></canvas>';
			chart = new Chart(document.getElementById('widgetBarChart'), {
				type: 'bar',
				data: {
					labels: ['S','M','T','W','T','F','S'],
					datasets: [{
						label: 'Total Visitors',
						data: [37,31,36,34,43,31,50],
						backgroundColor: theme,
						borderColor: 'transparent'
					}, {
						label: 'Returning Visitors',
						data: [27,21,16,14,23,11,30],
						backgroundColor: 'rgba('+ inverseRgb +', .5)',
						borderColor: 'transparent'
					}]
				}
			});
		}
	}
	
	useEffect(() => {
		fetch('/assets/data/widgets/widget-code-1.json').then(function(response) { return response.text(); }).then((html) => { setCode1(html); });
		fetch('/assets/data/widgets/widget-code-2.json').then(function(response) { return response.text(); }).then((html) => { setCode2(html); });
		fetch('/assets/data/widgets/widget-code-3.json').then(function(response) { return response.text(); }).then((html) => { setCode3(html); });
		fetch('/assets/data/widgets/widget-code-4.json').then(function(response) { return response.text(); }).then((html) => { setCode4(html); });
		fetch('/assets/data/widgets/widget-code-5.json').then(function(response) { return response.text(); }).then((html) => { setCode5(html); });
		fetch('/assets/data/widgets/widget-code-6.json').then(function(response) { return response.text(); }).then((html) => { setCode6(html); });
		fetch('/assets/data/widgets/widget-code-7.json').then(function(response) { return response.text(); }).then((html) => { setCode7(html); });
		fetch('/assets/data/widgets/widget-code-8.json').then(function(response) { return response.text(); }).then((html) => { setCode8(html); });
		fetch('/assets/data/widgets/widget-code-9.json').then(function(response) { return response.text(); }).then((html) => { setCode9(html); });
		fetch('/assets/data/widgets/widget-code-10.json').then(function(response) { return response.text(); }).then((html) => { setCode10(html); });
		fetch('/assets/data/widgets/widget-code-11.json').then(function(response) { return response.text(); }).then((html) => { setCode11(html); });
		
		renderChart();
		
		document.addEventListener('theme-reload', () => {
			renderChart();
		});
		// eslint-disable-next-line
	}, []);
	
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-xl-10">
					<div className="row">
						<div className="col-xl-9">
							<h1 className="page-header">
								Widgets <small>page header description goes here...</small>
							</h1>
							<hr className="mb-4" />
							
							<div id="cardWidget" className="mb-5">
								<h4>Card widget</h4>
								<p>Card widget is created by using existing Bootstrap <code>.card</code> component with <code>.card-img</code>, <code>.card-img-overlay</code> and <code>.d-flex</code> utilities.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-xl-8">
												<Card className="p-5px" data-bs-theme="light">
													<div style={{maxHeight: '250px'}} className="overflow-hidden z-1">
														<img src="assets/img/gallery/widget-cover-1.jpg" alt="" className="card-img" />
													</div>
													<div className="card-img-overlay d-flex flex-column bg-gray-700 bg-opacity-75 m-5px z-2" data-bs-theme="dark">
														<div className="flex-fill">
															<div className="d-flex align-items-center">
																<h6>Youtube</h6>
																<div className="dropdown dropdown-icon ms-auto">
																	<a href="#/" className="text-white" data-bs-toggle="dropdown"><i className="fa fa-ellipsis-h"></i></a>
																	<div className="dropdown-menu dropdown-menu-end" data-bs-theme="light">
																		<a href="//www.youtube.com/watch?v=_AS5nu4u1ss" className="dropdown-item">View</a>
																	</div>
																</div>
															</div>
														</div>
														<div>
															<a href="//www.youtube.com/watch?v=_AS5nu4u1ss" data-lity className="text-inverse text-decoration-none d-flex align-items-center">
																<div className="bg-gradient-blue-cyan w-50px h-50px rounded-3 d-flex align-items-center justify-content-center">
																	<i className="fa fa-play fa-lg"></i>
																</div>
																<div className="ms-3 flex-1">
																	<div className="fw-bold">New Videos - Behind The Forest Tours</div>
																	<div className="fs-13px text-inverse text-opacity-75">
																		<i className="far fa-eye"></i> 892 views 
																		<i className="far fa-clock ms-3"></i> 39min ago
																	</div>
																</div>
															</a>
														</div>
													</div>
												</Card>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code1}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="listWidget" className="mb-5">
								<h4>List widget</h4>
								<p>List widget is created by using existing Bootstrap <code>.list-group</code> component with <code>.d-flex</code> and hud utilities css classes.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-xl-6">
												<div className="text-inverse text-opacity-50 small mb-2"><b>WITH ICON</b></div>
												<div className="list-group mb-3">
													<div className="list-group-item d-flex align-items-center">
														<div className="w-40px h-40px d-flex align-items-center justify-content-center bg-gradient-blue-cyan text-white rounded-2 ms-n1">
															<i className="fab fa-apple fa-lg"></i>
														</div>
														<div className="flex-fill px-3">
															<div className="fw-bold">Apps Store</div>
															<div className="small text-inverse text-opacity-50">102 new download</div>
														</div>
														<div className="dropdown">
															<a href="#/" data-bs-toggle="dropdown" className="text-inverse text-opacity-50"><i className="fa fa-ellipsis-h"></i></a>
															<div className="dropdown-menu dropdown-menu-end">
																<a href="#/" className="dropdown-item">View</a>
																<a href="#/" className="dropdown-item">Analytics</a>
																<a href="#/" className="dropdown-item">Report</a>
															</div>
														</div>
													</div>
													<div className="list-group-item d-flex align-items-center">
														<div className="w-40px h-40px d-flex align-items-center justify-content-center bg-gradient-orange text-white rounded ms-n1">
															<i className="fa fa-book fa-lg"></i>
														</div>
														<div className="flex-fill px-3">
															<div className="fw-bold">iBooks App</div>
															<div className="small text-inverse text-opacity-50">32 new download</div>
														</div>
														<div className="dropdown">
															<a href="#/" data-bs-toggle="dropdown" className="text-inverse text-opacity-50"><i className="fa fa-ellipsis-h"></i></a>
															<div className="dropdown-menu dropdown-menu-end">
																<a href="#/" className="dropdown-item">View</a>
																<a href="#/" className="dropdown-item">Analytics</a>
																<a href="#/" className="dropdown-item">Report</a>
															</div>
														</div>
													</div>
												</div>
												<div className="text-inverse text-opacity-50 small mb-2"><b>WITH IMAGE</b></div>
												<div className="list-group mb-3">
													<a href="#/" className="list-group-item list-group-item-action d-flex align-items-center text-inverse">
														<div className="w-40px h-40px d-flex align-items-center justify-content-center ms-n1">
															<img src="assets/img/user/user.jpg" alt="" className="ms-100 mh-100 rounded-circle" />
														</div>
														<div className="flex-fill ps-3 d-flex align-items-center">
															<div className="fw-bold flex-fill">
																Isaiah Hughes
															</div>
															<i className="fa fa-circle text-success fs-7px ms-auto"></i>
														</div>
													</a>
													<a href="#/" className="list-group-item list-group-item-action d-flex align-items-center text-inverse">
														<div className="w-40px h-40px d-flex align-items-center justify-content-center ms-n1">
															<img src="assets/img/user/user-2.jpg" alt="" className="ms-100 mh-100 rounded-circle" />
														</div>
														<div className="flex-fill ps-3 d-flex align-items-center">
															<div className="fw-bold flex-fill">
																Ryan Turner
															</div>
															<i className="fa fa-circle text-inverse text-opacity-50 fs-7px ms-auto"></i>
														</div>
													</a>
												</div>
											</div>
											<div className="col-xl-6">
												<div className="text-inverse text-opacity-50 small mb-2"><b>WITH SETTINGS</b></div>
												<div className="list-group">
													<div className="list-group-item d-flex align-items-center">
														<div className="flex-fill">
															<div className="fw-bold">Server auto backup</div>
															<div className="small text-inverse text-opacity-50">last backup since yesterday</div>
														</div>
														<div>
															<div className="form-check me-n1">
																<input type="checkbox" className="form-check-input" id="customSwitch1" />
																<label className="form-check-label" htmlFor="customSwitch1"></label>
															</div>
														</div>
													</div>
													<div className="list-group-item d-flex align-items-center">
														<div className="flex-fill">
															<div className="fw-bold">Analytics enabled</div>
															<div className="small text-inverse text-opacity-50">3,392 data collected</div>
														</div>
														<div>
															<div className="form-switch me-n1">
																<input type="checkbox" className="form-check-input" id="customSwitch2" />
																<label className="form-check-label" htmlFor="customSwitch2"></label>
															</div>
														</div>
													</div>
													<a href="#/" className="list-group-item list-group-item-action d-flex align-items-center">
														<div className="flex-fill">
															<div className="fw-bold">Link with arrow</div>
														</div>
														<div>
															<i className="fa fa-chevron-right"></i>
														</div>
													</a>
													<a href="#/" className="list-group-item list-group-item-action d-flex align-items-center">
														<div className="flex-fill">
															<div className="fw-bold">Link with arrow</div>
														</div>
														<div>
															<i className="fa fa-chevron-right"></i>
														</div>
													</a>
												</div>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code2}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="statsWidget" className="mb-5">
								<h4>Stats widget</h4>
								<p>States widget is created by using Bootstrap <code>.card</code> component with <code>.d-flex</code> and <code>background-color</code> utilities.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-xl-8">
												<Card>
													<CardBody className="d-flex align-items-center text-inverse m-5px bg-inverse bg-opacity-10">
														<div className="flex-fill">
															<div className="mb-1">Total Visitors + Page Views</div>
															<h2>22,930</h2>
															<div>Today, 11:25AM</div>
														</div>
														<div className="opacity-5">
															<i className="fa fa-shopping-bag fa-4x"></i>
														</div>
													</CardBody>
												</Card>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code3}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="chartWidget" className="mb-5">
								<h4>Chart widget</h4>
								<p>Chart widget created by using Bootstrap <code>.card</code> and <code>.list-group</code> component combined with Chart.js plugins.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-xl-8">
												<Card>
													<CardBody className="text-inverse text-center">
														<div className="fs-16px fw-bold">Weekly Web Analytics</div>
														<div className="fs-13px mb-3 text-inverse text-opacity-50">Week 11 May - 17 May</div>
														<div id="chartContainer"></div>
													</CardBody>
													<hr className="m-0" />
													<div className="list-group list-group-flush">
														<div className="list-group-item border-top-0 rounded-top-0 d-flex align-items-center p-3">
															<div className="w-40px h-40px bg-inverse bg-opacity-10 d-flex align-items-center justify-content-center">
																<i className="fa fa-user fa-lg"></i>
															</div>
															<div className="flex-fill px-3">
																<div className="fw-bold">Total Visitors</div>
																<div className="small text-inverse text-opacity-50">11 May - 17 May</div>
															</div>
															<div>
																<h2 className="mb-0">1.3m</h2>
															</div>
														</div>
													</div>
												</Card>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code4}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="userListWidget" className="mb-5">
								<h4>User list widget</h4>
								<p>User list widget used to display people who participate in a project or a group.</p>
								<Card>
									<CardBody>
										<div className="widget-user-list">
											<div className="widget-user-list-item"><a href="#/" className="widget-user-list-link"><img src="/assets/img/user/user-1.jpg" alt="" /></a></div>
											<div className="widget-user-list-item"><a href="#/" className="widget-user-list-link"><img src="/assets/img/user/user-2.jpg" alt="" /></a></div>
											<div className="widget-user-list-item"><a href="#/" className="widget-user-list-link"><img src="/assets/img/user/user-3.jpg" alt="" /></a></div>
											<div className="widget-user-list-item"><a href="#/" className="widget-user-list-link"><img src="/assets/img/user/user-4.jpg" alt="" /></a></div>
											<div className="widget-user-list-item"><a href="#/" className="widget-user-list-link"><img src="/assets/img/user/user-5.jpg" alt="" /></a></div>
											<div className="widget-user-list-item"><a href="#/" className="widget-user-list-link"><img src="/assets/img/user/user-6.jpg" alt="" /></a></div>
											<div className="widget-user-list-item"><a href="#/" className="widget-user-list-link"><img src="/assets/img/user/user-7.jpg" alt="" /></a></div>
											<div className="widget-user-list-item"><a href="#/" className="widget-user-list-link bg-gray-200 text-gray-500 fs-12px fw-bold">+26</a></div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code5}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="mapWidget" className="mb-5">
								<h4>Map widget</h4>
								<p>Map widget created with Bootstrap <code>.card</code> and <code>.list-group</code> component twitted with helper css classes.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-xl-8">
												<Card>
													<div className="m-1 bg-inverse bg-opacity-10">
														<div className="card-header fw-bold">Google Map</div>
														<iframe title="Youtube" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d960.5886473867613!2d-122.41743634015282!3d37.776451983493104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter+HQ!5e0!3m2!1sen!2s!4v1495935122933" style={{border: 0, width: '100%', height: '10rem'}} allowFullScreen></iframe>
														<div className="list-group list-group-flush">
															<div className="list-group-item d-flex">
																<div className="w-30px h-40px d-flex align-items-center justify-content-center">
																	<i className="fa fa-car fa-2x text-gray-300"></i>
																</div>
																<div className="flex-fill px-3">
																	<div className="fw-bold">via Road I-88E</div>
																	<div className="fs-12px">Fastest route, the usual traffic</div>
																</div>
																<div className="text-nowrap">
																	<div className="text-success fw-bold">3h 54min</div>
																	<div className="fs-12px">393km</div>
																</div>
															</div>
														</div>
													</div>
												</Card>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code6}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="chatWidget" className="mb-5">
								<h4>Chat widget</h4>
								<p>Chat widget created by using Bootstrap <code>.card</code> component with custom created bubble chat ui.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-xl-8">
												<Card>
													<CardHeader className="bg-none fw-bold d-flex align-items-center">Discussion group <a href="#/" className="ms-auto text-muted text-decoration-none" data-toggle="card-expand"><i className="fa fa-expand"></i></a></CardHeader>
													<CardBody className="bg-inverse bg-opacity-10 p-0">
														<PerfectScrollbar className="h-200px p-3">
															<div className="widget-chat">
																<div className="widget-chat-item">
																	<div className="widget-chat-media"><img src="/assets/img/user/user-2.jpg" alt="" /></div>
																	<div className="widget-chat-content">
																		<div className="widget-chat-name">Roberto Lambert</div>
																		<div className="widget-chat-message last">
																			Hey, I'm testing out group messaging.
																		</div>
																	</div>
																</div>
																<div className="widget-chat-item reply">
																	<div className="widget-chat-content">
																		<div className="widget-chat-message last">
																			Cool
																		</div>
																		<div className="widget-chat-status"><b>Read</b> 16:26</div>
																	</div>
																</div>
																<div className="widget-chat-date">Today 14:21</div>
																<div className="widget-chat-item">
																	<div className="widget-chat-media"><img src="/assets/img/user/user-3.jpg" alt="" /></div>
																	<div className="widget-chat-content">
																		<div className="widget-chat-name">Rick Powell</div>
																		<div className="widget-chat-message last">
																			Awesome! What's new?
																		</div>
																	</div>
																</div>
																<div className="widget-chat-item">
																	<div className="widget-chat-media"><img src="/assets/img/user/user-2.jpg" alt="" /></div>
																	<div className="widget-chat-content">
																		<div className="widget-chat-name">Roberto Lambert</div>
																		<div className="widget-chat-message">
																			Not much, It's got a new look, contact pics show up in group messaging, some other small stuff.
																		</div>
																		<div className="widget-chat-message last">
																			How's crusty old iOS 6 treating you?
																		</div>
																	</div>
																</div>
																<div className="widget-chat-item reply">
																	<div className="widget-chat-content">
																		<div className="widget-chat-message last">
																			Sucks
																		</div>
																		<div className="widget-chat-status"><b>Read</b> 16:30</div>
																	</div>
																</div>
															</div>
														</PerfectScrollbar>
													</CardBody>
													<CardFooter className="bg-none">
														<div className="input-group">
															<input type="text" className="form-control" placeholder="Search for..." />
															<button className="btn btn-outline-default" type="button"><i className="fa fa-paper-plane text-muted"></i></button>
														</div>
													</CardFooter>
												</Card>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code7}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="profileWidget" className="mb-5">
								<h4>Profile widget</h4>
								<p>Profile widget created by using Bootstrap <code>.card</code> component with Bootstrap grid.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-xl-8">
												<Card>
													<div className="m-1 bg-inverse bg-opacity-10">
														<div className="position-relative overflow-hidden" style={{height: '165px'}}>
															<img src="/assets/img/gallery/widget-cover-1.jpg" className="card-img rounded-0" alt="" />
															<div className="card-img-overlay text-white text-center bg-gray-600 bg-opacity-75">
																<div className="my-2">
																	<img src="/assets/img/user/user-5.jpg" alt="" width="80" className="rounded-circle" />
																</div>
																<div>
																	<div className="fw-bold">Maurice Patterson</div>
																	<div className="small">Never give up</div>
																</div>
															</div>
														</div>
														<CardBody className="py-2 px-3">
															<div className="row text-center">
																<div className="col-4">
																	<div className="fw-bold">415</div>
																	<div className="fs-12px">posts</div>
																</div>
																<div className="col-4">
																	<div className="fw-bold">140k</div>
																	<div className="fs-12px">followers</div>
																</div>
																<div className="col-4">
																	<div className="fw-bold">697</div>
																	<div className="fs-12px">following</div>
																</div>
															</div>
														</CardBody>
													</div>
												</Card>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code8}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="productWidget" className="mb-5">
								<h4>Product widget</h4>
								<p>Product widget created by using Bootstrap <code>.list-group</code> component with <code>.d-flex</code> utilities.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-xl-8">
												<div className="list-group">
													<a href="#/" className="list-group-item list-group-item-action d-flex align-items-center text-inverse">
														<div className="w-60px h-60px d-flex align-items-center justify-content-center ms-n1 bg-white p-1">
															<img src="/assets/img/product/product-1.jpg" alt="" className="mw-100 mh-100" />
														</div>
														<div className="flex-fill px-3">
															<div className="fw-bold">iPhone 11 Pro Max</div>
															<div className="small text-inverse text-opacity-50">Apple</div>
															<div className="d-flex align-items-center fs-11px">
																<i className="fa fa-star text-warning"></i>
																<i className="fa fa-star text-warning"></i>
																<i className="fa fa-star text-warning"></i>
																<i className="fa fa-star text-warning"></i>
																<i className="fa fa-star text-gray-300 me-1"></i>
																(128)
															</div>
														</div>
														<div>
															<span className="badge bg-transparent border border-theme text-theme fs-12px fw-500 rounded-sm">
																$999.00
															</span>
														</div>
													</a>
													<a href="#/" className="list-group-item list-group-item-action d-flex align-items-center text-inverse">
														<div className="w-60px h-60px d-flex align-items-center justify-content-center ms-n1 bg-white p-1">
															<img src="/assets/img/product/product-2.jpg" alt="" className="mw-100 mh-100" />
														</div>
														<div className="flex-fill px-3">
															<div className="fw-bold">Macbook Pro</div>
															<div className="small text-inverse text-opacity-50">Apple</div>
															<div className="d-flex align-items-center fs-11px">
																<i className="fa fa-star text-warning"></i>
																<i className="fa fa-star text-warning"></i>
																<i className="fa fa-star text-warning"></i>
																<i className="fa fa-star text-warning"></i>
																<i className="fa fa-star text-gray-300 me-1"></i>
																(93)
															</div>
														</div>
														<div>
															<span className="badge bg-transparent border border-theme text-theme fs-12px fw-500 rounded-sm">
																$599.00
															</span>
														</div>
													</a>
													<a href="#/" className="list-group-item list-group-item-action d-flex align-items-center text-inverse">
														<div className="w-60px h-60px d-flex align-items-center justify-content-center ms-n1 bg-white p-1">
															<img src="/assets/img/product/product-3.jpg" alt="" className="mw-100 mh-100" />
														</div>
														<div className="flex-fill px-3">
															<div className="fw-bold">Apple Watch Series 5</div>
															<div className="small text-inverse text-opacity-50">Apple</div>
															<div className="d-flex align-items-center fs-11px">
																<i className="fa fa-star text-warning"></i>
																<i className="fa fa-star text-warning"></i>
																<i className="fa fa-star text-warning"></i>
																<i className="fa fa-star text-warning"></i>
																<i className="fa fa-star text-gray-300 me-1"></i>
																(41)
															</div>
														</div>
														<div>
															<span className="badge bg-transparent border border-theme text-theme fs-12px fw-500 rounded-sm">
																$399.00
															</span>
														</div>
													</a>
												</div>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code9}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="reminderWidget" className="mb-5">
								<h4>Reminder widget</h4>
								<p>Reminder widget used to create a simple calendar to notify the user upcoming events or task.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-xl-8">
												<Card>
													<CardHeader className="card-header fw-bold">Today, Nov 4</CardHeader>
													<div className="widget-reminder">
														<div className="widget-reminder-item">
															<div className="widget-reminder-time">09:00<br />12:00</div>
															<div className="widget-reminder-divider bg-success"></div>
															<div className="widget-reminder-content">
																<div className="fw-bold">Meeting with HR</div>
																<div className="fs-13px"> - Conference Room</div>
															</div>
														</div>
														<div className="widget-reminder-item">
															<div className="widget-reminder-time">20:00<br />23:00</div>
															<div className="widget-reminder-divider bg-primary"></div>
															<div className="widget-reminder-content">
																<div className="fw-bold">Dinner with Richard</div>
																<div className="fs-13px"> - Tom's Too Restaurant</div>
																<div className="d-flex align-items-center fs-13px mt-2">
																	<div className="flex-fill d-flex align-items-center">
																		<img src="/assets/img/user/user-3.jpg" alt="" width="16" className="rounded-circle me-2" /> Richard Leong
																	</div>
																	<a href="#/" className="ms-auto">Contact</a>
																</div>
															</div>
														</div>
													</div>
													<CardHeader className="fw-bold">Tomorrow, Nov 5</CardHeader>
													<div className="widget-reminder">
														<div className="widget-reminder-item">
															<div className="widget-reminder-time">All day</div>
															<div className="widget-reminder-divider bg-gray-300"></div>
															<div className="widget-reminder-content">
																<div className="fw-bold">Terry Birthday</div>
															</div>
														</div>
														<div className="widget-reminder-item">
															<div className="widget-reminder-time">08:00</div>
															<div className="widget-reminder-divider bg-gray-300"></div>
															<div className="widget-reminder-content">
																<div className="fw-bold">Meeting</div>
															</div>
														</div>
														<div className="widget-reminder-item">
															<div className="widget-reminder-time">00:00<br />00:30</div>
															<div className="widget-reminder-divider bg-gray-300"></div>
															<div className="widget-reminder-content">
																<div className="fw-bold">Server Maintenance</div>
																<div className="fs-13px"> - Data Centre</div>
															</div>
														</div>
													</div>
												</Card>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code10}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="imageListWidget" className="mb-5">
								<h4>Image list widget</h4>
								<p>Image list widget created by using Bootstrap <code>.card</code> and <code>.list-group</code> component with <code>.d-flex</code> utilities.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-xl-8">
												<Card>
													<div className="list-group list-group-flush">
														<a href="#/" className="list-group-item list-group-item-action d-flex align-items-center text-inverse">
															<div className="flex-fill pe-3">
																<div className="fw-bold">Library (20)</div>
																<div className="small text-inverse text-opacity-50">3,192 Image Found</div>
															</div>
															<div>
																<i className="fa fa-chevron-right fa-lg text-inverse text-opacity-50"></i>
															</div>
														</a>
													</div>
													<hr className="m-0" />
													<CardBody>
														<div className="widget-img-list">
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-1.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-1.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-2.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-2.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-3.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-3.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-4.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-4.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-5.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-5.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-21.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-21.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-22.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-22.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-23.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-23.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-24.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-24.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-25.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-25.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-26.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-26.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-27.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-27.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-28.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-28.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-29.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-29.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-30.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-30.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-31.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-31.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-32.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-32.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-33.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-33.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-34.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-34.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-35.jpg" data-lity><span className="img" style={{backgroundImage: 'url(/assets/img/gallery/gallery-35.jpg)'}}></span></a></div>
														</div>
													</CardBody>
												</Card>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code11}</Highlight>
									</div>
								</Card>
							</div>
						</div>
						
						<div className="col-xl-3">
							<NavScrollTo>
								<nav className="nav">
									<a className="nav-link" href="#cardWidget" data-toggle="scroll-to">Card widget</a>
									<a className="nav-link" href="#listWidget" data-toggle="scroll-to">List widget</a>
									<a className="nav-link" href="#statsWidget" data-toggle="scroll-to">Stats widget</a>
									<a className="nav-link" href="#chartWidget" data-toggle="scroll-to">Chart widget</a>
									<a className="nav-link" href="#userListWidget" data-toggle="scroll-to">User list widget</a>
									<a className="nav-link" href="#mapWidget" data-toggle="scroll-to">Map widget</a>
									<a className="nav-link" href="#chatWidget" data-toggle="scroll-to">Chat widget</a>
									<a className="nav-link" href="#profileWidget" data-toggle="scroll-to">Profile widget</a>
									<a className="nav-link" href="#productWidget" data-toggle="scroll-to">Product widget</a>
									<a className="nav-link" href="#reminderWidget" data-toggle="scroll-to">Reminder widget</a>
									<a className="nav-link" href="#imageListWidget" data-toggle="scroll-to">Image list widget</a>
								</nav>
							</NavScrollTo>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Widgets;