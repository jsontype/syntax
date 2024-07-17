import React from 'react';
import { Card, CardHeader, CardBody } from './../../components/card/card.jsx';
import 'lity';
import 'lity/dist/lity.min.css';

function Profile() {
	return (
		<Card>
			<CardBody className="p-0">
				<div className="profile">
					<div className="profile-container">
						<div className="profile-sidebar">
							<div className="desktop-sticky-top">
								<div className="profile-img">
									<img src="/assets/img/user/profile.jpg" alt="" />
								</div>
								
								<h4>John Smith</h4>
								<div className="mb-3 text-inverse text-opacity-50 fw-bold mt-n2">@johnsmith</div>
								<p>
									Principal UXUI Design & Brand Architecture for HUD. Creator of SeanTheme.
									Bringing the world closer together. Studied Computer Science and Psychology at Harvard University.
								</p>
								<div className="mb-1">
									<i className="fa fa-map-marker-alt fa-fw text-inverse text-opacity-50"></i> New York, NY
								</div>
								<div className="mb-3">
									<i className="fa fa-link fa-fw text-inverse text-opacity-50"></i> seantheme.com/hud
								</div>
						
								<hr className="mt-4 mb-4" />
						
								<div className="fw-bold mb-3 fs-16px">People to follow</div>
								<div className="d-flex align-items-center mb-3">
									<img src="/assets/img/user/user-1.jpg" alt="" width="30" className="rounded-circle" />
									<div className="flex-fill px-3">
										<div className="fw-bold text-truncate w-100px">Noor Rowe</div>
										<div className="fs-12px text-inverse text-opacity-50">3.1m followers</div>
									</div>
									<a href="#/" className="btn btn-sm btn-outline-theme fs-11px">Follow</a>
								</div>
								<div className="d-flex align-items-center mb-3">
									<img src="/assets/img/user/user-2.jpg" alt="" width="30" className="rounded-circle" />
									<div className="flex-fill px-3">
										<div className="fw-bold text-truncate w-100px">Abbey Parker</div>
										<div className="fs-12px text-inverse text-opacity-50">302k followers</div>
									</div>
									<a href="#/" className="btn btn-sm btn-outline-theme fs-11px">Follow</a>
								</div>
								<div className="d-flex align-items-center mb-3">
									<img src="/assets/img/user/user-3.jpg" alt="" width="30" className="rounded-circle" />
									<div className="flex-fill px-3">
										<div className="fw-bold text-truncate w-100px">Savannah Nicholson</div>
										<div className="fs-12px text-inverse text-opacity-50">720k followers</div>
									</div>
									<a href="#/" className="btn btn-sm btn-outline-theme fs-11px">Follow</a>
								</div>
								<div className="d-flex align-items-center mb-3">
									<img src="/assets/img/user/user-4.jpg" alt="" width="30" className="rounded-circle" />
									<div className="flex-fill px-3">
										<div className="fw-bold text-truncate w-100px">Kenny Bright</div>
										<div className="fs-12px text-inverse text-opacity-50">1.4m followers</div>
									</div>
									<a href="#/" className="btn btn-sm btn-outline-theme fs-11px">Follow</a>
								</div>
								<div className="d-flex align-items-center">
									<img src="/assets/img/user/user-5.jpg" alt="" width="30" className="rounded-circle" />
									<div className="flex-fill px-3">
										<div className="fw-bold text-truncate w-100px">Cara Poole</div>
										<div className="fs-12px text-inverse text-opacity-50">989k followers</div>
									</div>
									<a href="#/" className="btn btn-sm btn-outline-theme fs-11px">Follow</a>
								</div>
							</div>
						</div>
						
						<div className="profile-content">
							<ul className="profile-tab nav nav-tabs nav-tabs-v2">
								<li className="nav-item">
									<a href="#profile-post" className="nav-link active" data-bs-toggle="tab">
										<div className="nav-field">Posts</div>
										<div className="nav-value">382</div>
									</a>
								</li>
								<li className="nav-item">
									<a href="#profile-followers" className="nav-link" data-bs-toggle="tab">
										<div className="nav-field">Followers</div>
										<div className="nav-value">1.3m</div>
									</a>
								</li>
								<li className="nav-item">
									<a href="#profile-media" className="nav-link" data-bs-toggle="tab">
										<div className="nav-field">Photos</div>
										<div className="nav-value">1,397</div>
									</a>
								</li>
								<li className="nav-item">
									<a href="#profile-video" className="nav-link" data-bs-toggle="tab">
										<div className="nav-field">Videos</div>
										<div className="nav-value">120</div>
									</a>
								</li>
								<li className="nav-item">
									<a href="#profile-followers" className="nav-link" data-bs-toggle="tab">
										<div className="nav-field">Following</div>
										<div className="nav-value">2,592</div>
									</a>
								</li>
							</ul>
							<div className="profile-content-container">
								<div className="row gx-4">
									<div className="col-xl-8">
										<div className="tab-content p-0">
											<div className="tab-pane fade show active" id="profile-post">
												<Card className="card mb-3">
													<CardBody>
														<div className="d-flex align-items-center mb-3">
															<a href="#/"><img src="/assets/img/user/profile.jpg" alt="" width="50" className="rounded-circle" /></a>
															<div className="flex-fill ps-2">
																<div className="fw-bold"><a href="#/" className="text-decoration-none">Clyde Stanley</a> at <a href="#/" className="text-decoration-none">South Lake Tahoe, California</a></div>
																<div className="small text-inverse text-opacity-50">March 16</div>
															</div>
														</div>
														
														<p>Best vacation of 2024</p>
														<div className="profile-img-list">
															<div className="profile-img-list-item main"><a href="/assets/img/gallery/gallery-1.jpg" data-lity className="profile-img-list-link"><span className="profile-img-content" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-1.jpg)'}}></span></a></div>
															<div className="profile-img-list-item"><a href="/assets/img/gallery/gallery-2.jpg" data-lity className="profile-img-list-link"><span className="profile-img-content" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-2.jpg)'}}></span></a></div>
															<div className="profile-img-list-item"><a href="/assets/img/gallery/gallery-3.jpg" data-lity className="profile-img-list-link"><span className="profile-img-content" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-3.jpg)'}}></span></a></div>
															<div className="profile-img-list-item"><a href="/assets/img/gallery/gallery-4.jpg" data-lity className="profile-img-list-link"><span className="profile-img-content" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-4.jpg)'}}></span></a></div>
															<div className="profile-img-list-item with-number">
																<a href="/assets/img/gallery/gallery-5.jpg" data-lity className="profile-img-list-link">
																	<span className="profile-img-content" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-5.jpg)'}}></span>
																	<div className="profile-img-number">+12</div>
																</a>
															</div>
														</div>
														<hr className="mb-1" />
														
														<div className="row text-center fw-bold">
															<div className="col">
																<a href="#/" className="text-inverse text-opacity-50 text-decoration-none d-block p-2">
																	<i className="far fa-thumbs-up me-1 d-block d-sm-inline"></i> Likes
																</a>
															</div>
															<div className="col">
																<a href="#/" className="text-inverse text-opacity-50 text-decoration-none d-block p-2">
																	<i className="far fa-comment me-1 d-block d-sm-inline"></i> Comment
																</a>
															</div>
															<div className="col">
																<a href="#/" className="text-inverse text-opacity-50 text-decoration-none d-block p-2">
																	<i className="fa fa-share me-1 d-block d-sm-inline"></i> Share
																</a>
															</div>
														</div>
														
														<hr className="mb-3 mt-1" />
														<div className="d-flex align-items-center">
															<img src="/assets/img/user/user.jpg" alt="" width="35" className="rounded-circle" />
															<div className="flex-fill ps-2">
																<div className="position-relative d-flex align-items-center">
																	<input type="text" className="form-control rounded-pill bg-inverse bg-opacity-10" style={{ paddingRight: '120px' }} placeholder="Write a comment..." />
																	<div className="position-absolute end-0 text-center">
																		<a href="#/" className="text-inverse text-opacity-50 me-2"><i className="fa fa-smile"></i></a>
																		<a href="#/" className="text-inverse text-opacity-50 me-2"><i className="fa fa-camera"></i></a>
																		<a href="#/" className="text-inverse text-opacity-50 me-2"><i className="fa fa-video"></i></a>
																		<a href="#/" className="text-inverse text-opacity-50 me-3"><i className="fa fa-paw"></i></a>
																	</div>
																</div>
															</div>
														</div>
													</CardBody>
												</Card>
												<Card className="mb-3">
													<CardBody>
														<div className="d-flex align-items-center mb-3">
															<a href="#/"><img src="/assets/img/user/profile.jpg" alt="" width="50" className="rounded-circle" /></a>
															<div className="flex-fill ps-2">
																<div className="fw-bold"><a href="#/" className="text-decoration-none">Clyde Stanley</a> is watching <a href="#/" className="text-decoration-none">PATAGONIA 8k</a></div>
																<div className="small text-inverse text-opacity-50">March 12</div>
															</div>
														</div>
														
														<p>Nice PATAGONIA footage in 8K</p>
														<div className="ratio ratio-16x9">
															<iframe title="youtube" src="https://www.youtube.com/embed/ChOhcHD8fBA?showinfo=0"></iframe>
														</div>
														<hr className="mb-1" />
														
														<div className="row text-center fw-bold">
															<div className="col">
																<a href="#/" className="text-inverse text-opacity-50 text-decoration-none d-block p-2">
																	<i className="far fa-thumbs-up me-1 d-block d-sm-inline"></i> Likes
																</a>
															</div>
															<div className="col">
																<a href="#/" className="text-inverse text-opacity-50 text-decoration-none d-block p-2">
																	<i className="far fa-comment me-1 d-block d-sm-inline"></i> Comment
																</a>
															</div>
															<div className="col">
																<a href="#/" className="text-inverse text-opacity-50 text-decoration-none d-block p-2">
																	<i className="fa fa-share me-1 d-block d-sm-inline"></i> Share
																</a>
															</div>
														</div>
														<hr className="mb-3 mt-1" />
														
														<div className="d-flex align-items-center">
															<img src="/assets/img/user/user.jpg" alt="" width="35" className="rounded-circle" />
															<div className="flex-fill ps-2">
																<div className="position-relative d-flex align-items-center">
																	<input type="text" className="form-control rounded-pill bg-inverse bg-opacity-10" style={{ paddingRight: '120px' }} placeholder="Write a comment..." />
																	<div className="position-absolute end-0 text-center">
																		<a href="#/" className="text-inverse text-opacity-50 me-2"><i className="fa fa-smile"></i></a>
																		<a href="#/" className="text-inverse text-opacity-50 me-2"><i className="fa fa-camera"></i></a>
																		<a href="#/" className="text-inverse text-opacity-50 me-2"><i className="fa fa-video"></i></a>
																		<a href="#/" className="text-inverse text-opacity-50 me-3"><i className="fa fa-paw"></i></a>
																	</div>
																</div>
															</div>
														</div>
													</CardBody>
												</Card>
												<Card className="mb-3">
													<CardBody>
														<div className="d-flex align-items-center mb-3">
															<a href="#/" className="text-decoration-none"><img src="/assets/img/user/profile.jpg" alt="" width="50" className="rounded-circle" /></a>
															<div className="flex-fill ps-2">
																<div className="fw-bold"><a href="#/" className="text-decoration-none">Clyde Stanley</a></div>
																<div className="small text-inverse text-opacity-50">March 4</div>
															</div>
														</div>
														
														<p>
															Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Quisque sodales urna justo, ac ultrices magna consectetur id.<br /><br />
															Donec tempor ligula sit amet nunc porta, sed aliquam leo sagittis.<br />
															Ut auctor congue efficitur. Praesent aliquam pulvinar neque, placerat semper massa elementum et.
														</p>
														<hr className="mb-1" />
														
														<div className="row text-center fw-bold">
															<div className="col">
																<a href="#/" className="text-inverse text-opacity-50 text-decoration-none d-block p-2">
																	<i className="far fa-thumbs-up me-1 d-block d-sm-inline"></i> Likes
																</a>
															</div>
															<div className="col">
																<a href="#/" className="text-inverse text-opacity-50 text-decoration-none d-block p-2">
																	<i className="far fa-comment me-1 d-block d-sm-inline"></i> Comment
																</a>
															</div>
															<div className="col">
																<a href="#/" className="text-inverse text-opacity-50 text-decoration-none d-block p-2">
																	<i className="fa fa-share me-1 d-block d-sm-inline"></i> Share
																</a>
															</div>
														</div>
														<hr className="mb-3 mt-1" />
														
														<div className="d-flex align-items-center">
															<img src="/assets/img/user/user.jpg" alt="" width="35" className="rounded-circle" />
															<div className="flex-fill ps-2">
																<div className="position-relative d-flex align-items-center">
																	<input type="text" className="form-control rounded-pill bg-inverse bg-opacity-10" style={{ paddingRight: '120px' }} placeholder="Write a comment..." />
																	<div className="position-absolute end-0 text-center">
																		<a href="#/" className="text-inverse text-opacity-50 me-2"><i className="fa fa-smile"></i></a>
																		<a href="#/" className="text-inverse text-opacity-50 me-2"><i className="fa fa-camera"></i></a>
																		<a href="#/" className="text-inverse text-opacity-50 me-2"><i className="fa fa-video"></i></a>
																		<a href="#/" className="text-inverse text-opacity-50 me-3"><i className="fa fa-paw"></i></a>
																	</div>
																</div>
															</div>
														</div>
													</CardBody>
												</Card>
												<Card>
													<CardBody>
														<div className="d-flex align-items-center mb-3">
															<a href="#/"><img src="/assets/img/user/profile.jpg" alt="" width="50" className="rounded-circle" /></a>
															<div className="flex-fill ps-2">
																<div className="fw-bold"><a href="#/" className="text-decoration-none">Clyde Stanley</a> at <a href="#/" className="text-decoration-none">United States</a></div>
																<div className="small text-inverse text-opacity-50">May 5</div>
															</div>
														</div>
														
														<p>Business Trip</p>
														<div className="profile-img-list">
															<div className="profile-img-list-item main"><a href="/assets/img/gallery/gallery-5.jpg" data-lity className="profile-img-list-link"><span className="profile-img-content" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-5.jpg)'}}></span></a></div>
															<div className="profile-img-list-item main"><a href="/assets/img/gallery/gallery-6.jpg" data-lity className="profile-img-list-link"><span className="profile-img-content" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-6.jpg)'}}></span></a></div>
															<div className="profile-img-list-item"><a href="/assets/img/gallery/gallery-7.jpg" data-lity className="profile-img-list-link"><span className="profile-img-content" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-7.jpg)'}}></span></a></div>
															<div className="profile-img-list-item"><a href="/assets/img/gallery/gallery-8.jpg" data-lity className="profile-img-list-link"><span className="profile-img-content" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-8.jpg)'}}></span></a></div>
															<div className="profile-img-list-item"><a href="/assets/img/gallery/gallery-9.jpg" data-lity className="profile-img-list-link"><span className="profile-img-content" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-9.jpg)'}}></span></a></div>
															<div className="profile-img-list-item"><a href="/assets/img/gallery/gallery-10.jpg" data-lity className="profile-img-list-link"><span className="profile-img-content" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-10.jpg)'}}></span></a></div>
														</div>
														<hr className="mb-1" />
														
														<div className="row text-center fw-bold">
															<div className="col">
																<a href="#/" className="text-inverse text-opacity-50 text-decoration-none d-block p-2">
																	<i className="far fa-thumbs-up me-1 d-block d-sm-inline"></i> Likes
																</a>
															</div>
															<div className="col">
																<a href="#/" className="text-inverse text-opacity-50 text-decoration-none d-block p-2">
																	<i className="far fa-comment me-1 d-block d-sm-inline"></i> Comment
																</a>
															</div>
															<div className="col">
																<a href="#/" className="text-inverse text-opacity-50 text-decoration-none d-block p-2">
																	<i className="fa fa-share me-1 d-block d-sm-inline"></i> Share
																</a>
															</div>
														</div>
														<hr className="mt-1" />
														
														<div className="d-flex align-items-center">
															<img src="/assets/img/user/user.jpg" alt="" width="35" className="rounded-circle" />
															<div className="flex-fill ps-2">
																<div className="position-relative d-flex align-items-center">
																	<input type="text" className="form-control rounded-pill bg-inverse bg-opacity-10" style={{ paddingRight: '120px'}} placeholder="Write a comment..." />
																	<div className="position-absolute end-0 text-center">
																		<a href="#/" className="text-inverse text-opacity-50 me-2"><i className="fa fa-smile"></i></a>
																		<a href="#/" className="text-inverse text-opacity-50 me-2"><i className="fa fa-camera"></i></a>
																		<a href="#/" className="text-inverse text-opacity-50 me-2"><i className="fa fa-video"></i></a>
																		<a href="#/" className="text-inverse text-opacity-50 me-3"><i className="fa fa-paw"></i></a>
																	</div>
																</div>
															</div>
														</div>
													</CardBody>
												</Card>
											</div>
											
											<div className="tab-pane fade" id="profile-followers">
												<div className="list-group">
													<div className="list-group-item d-flex align-items-center">
														<img src="/assets/img/user/user-1.jpg" alt="" width="50" className="rounded-sm ms-n2" />
														<div className="flex-fill px-3">
															<div><a href="#/" className="text-inverse fw-bold text-decoration-none">Ethel Wilkes</a></div>
															<div className="text-inverse text-opacity-50 fs-13px">North Raundspic</div>
														</div>
														<a href="#/" className="btn btn-outline-theme">Follow</a>
													</div>
													<div className="list-group-item d-flex align-items-center">
														<img src="/assets/img/user/user-2.jpg" alt="" width="50" className="rounded-sm ms-n2" />
														<div className="flex-fill px-3">
															<div><a href="#/" className="text-inverse fw-bold text-decoration-none">Shanaya Hansen</a></div>
															<div className="text-inverse text-opacity-50 fs-13px">North Raundspic</div>
														</div>
														<a href="#/" className="btn btn-outline-theme">Follow</a>
													</div>
													<div className="list-group-item d-flex align-items-center">
														<img src="/assets/img/user/user-3.jpg" alt="" width="50" className="rounded-sm ms-n2" />
														<div className="flex-fill px-3">
															<div><a href="#/" className="text-inverse fw-bold text-decoration-none">James Allman</a></div>
															<div className="text-inverse text-opacity-50 fs-13px">North Raundspic</div>
														</div>
														<a href="#/" className="btn btn-outline-theme">Follow</a>
													</div>
													<div className="list-group-item d-flex align-items-center">
														<img src="/assets/img/user/user-4.jpg" alt="" width="50" className="rounded-sm ms-n2" />
														<div className="flex-fill px-3">
															<div><a href="#/" className="text-inverse fw-bold text-decoration-none">Marie Welsh</a></div>
															<div className="text-inverse text-opacity-50 fs-13px">Crencheporford</div>
														</div>
														<a href="#/" className="btn btn-outline-theme">Follow</a>
													</div>
													<div className="list-group-item d-flex align-items-center">
														<img src="/assets/img/user/user-5.jpg" alt="" width="50" className="rounded-sm ms-n2" />
														<div className="flex-fill px-3">
															<div><a href="#/" className="text-inverse fw-bold text-decoration-none">Lamar Kirkland</a></div>
															<div className="text-inverse text-opacity-50 fs-13px">Prince Ewoodswan</div>
														</div>
														<a href="#/" className="btn btn-outline-theme">Follow</a>
													</div>
													<div className="list-group-item d-flex align-items-center">
														<img src="/assets/img/user/user-6.jpg" alt="" width="50" className="rounded-sm ms-n2" />
														<div className="flex-fill px-3">
															<div><a href="#/" className="text-inverse fw-bold text-decoration-none">Bentley Osborne</a></div>
															<div className="text-inverse text-opacity-50 fs-13px">Red Suvern</div>
														</div>
														<a href="#/" className="btn btn-outline-theme">Follow</a>
													</div>
													<div className="list-group-item d-flex align-items-center">
														<img src="/assets/img/user/user-7.jpg" alt="" width="50" className="rounded-sm ms-n2" />
														<div className="flex-fill px-3">
															<div><a href="#/" className="text-inverse fw-bold text-decoration-none">Ollie Goulding</a></div>
															<div className="text-inverse text-opacity-50 fs-13px">Doa</div>
														</div>
														<a href="#/" className="btn btn-outline-theme">Follow</a>
													</div>
													<div className="list-group-item d-flex align-items-center">
														<img src="/assets/img/user/user-8.jpg" alt="" width="50" className="rounded-sm ms-n2" />
														<div className="flex-fill px-3">
															<div><a href="#/" className="text-inverse fw-bold text-decoration-none">Hiba Calvert</a></div>
															<div className="text-inverse text-opacity-50 fs-13px">Stemunds</div>
														</div>
														<a href="#/" className="btn btn-outline-theme">Follow</a>
													</div>
													<div className="list-group-item d-flex align-items-center">
														<img src="/assets/img/user/user-9.jpg" alt="" width="50" className="rounded-sm ms-n2" />
														<div className="flex-fill px-3">
															<div><a href="#/" className="text-inverse fw-bold text-decoration-none">Rivka Redfern</a></div>
															<div className="text-inverse text-opacity-50 fs-13px">Fallnee</div>
														</div>
														<a href="#/" className="btn btn-outline-theme">Follow</a>
													</div>
													<div className="list-group-item d-flex align-items-center">
														<img src="/assets/img/user/user-10.jpg" alt="" width="50" className="rounded-sm ms-n2" />
														<div className="flex-fill px-3">
															<div><a href="#/" className="text-inverse fw-bold text-decoration-none">Roshni Fernandez</a></div>
															<div className="text-inverse text-opacity-50 fs-13px">Mount Lerdo</div>
														</div>
														<a href="#/" className="btn btn-outline-theme">Follow</a>
													</div>
												</div>
												<div className="text-center p-3"><a href="#/" className="text-inverse text-decoration-none">Show more <b className="caret"></b></a></div>
											</div>
											
											<div className="tab-pane fade" id="profile-media">
												<Card className="mb-3">
													<CardHeader className="fw-bold bg-transparent">May 20</CardHeader>
													<CardBody>
														<div className="widget-img-list">
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-1.jpg" data-lity><span className="img" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-1.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-2.jpg" data-lity><span className="img" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-2.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-3.jpg" data-lity><span className="img" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-3.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-4.jpg" data-lity><span className="img" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-4.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-5.jpg" data-lity><span className="img" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-5.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-6.jpg" data-lity><span className="img" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-6.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-7.jpg" data-lity><span className="img" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-7.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-8.jpg" data-lity><span className="img" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-8.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-9.jpg" data-lity><span className="img" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-9.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-10.jpg" data-lity><span className="img" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-10.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-11.jpg" data-lity><span className="img" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-11.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-12.jpg" data-lity><span className="img" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-12.jpg)'}}></span></a></div>
														</div>
													</CardBody>
												</Card>
												<Card>
													<CardHeader className="fw-bold bg-transparent">May 16</CardHeader>
													<CardBody>
														<div className="widget-img-list">
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-13.jpg" data-lity><span className="img" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-13.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-14.jpg" data-lity><span className="img" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-14.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-15.jpg" data-lity><span className="img" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-15.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-16.jpg" data-lity><span className="img" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-16.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-17.jpg" data-lity><span className="img" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-17.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-18.jpg" data-lity><span className="img" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-18.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-19.jpg" data-lity><span className="img" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-19.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-20.jpg" data-lity><span className="img" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-20.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-21.jpg" data-lity><span className="img" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-21.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-22.jpg" data-lity><span className="img" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-22.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-23.jpg" data-lity><span className="img" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-23.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-24.jpg" data-lity><span className="img" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-24.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-25.jpg" data-lity><span className="img" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-25.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-26.jpg" data-lity><span className="img" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-26.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-27.jpg" data-lity><span className="img" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-27.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-28.jpg" data-lity><span className="img" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-28.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-29.jpg" data-lity><span className="img" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-29.jpg)'}}></span></a></div>
															<div className="widget-img-list-item"><a href="/assets/img/gallery/gallery-30.jpg" data-lity><span className="img" style={{ backgroundImage: 'url(/assets/img/gallery/gallery-30.jpg)'}}></span></a></div>
														</div>
													</CardBody>
												</Card>
												<div className="text-center p-3"><a href="#/" className="text-inverse text-decoration-none">Show more <b className="caret"></b></a></div>
											</div>
											
											<div className="tab-pane fade" id="profile-video">
												<Card className="mb-3">
													<CardHeader className="fw-bold bg-transparent">Collections #1</CardHeader>
													<CardBody>
														<div className="row gx-1">
															<div className="col-md-4 col-sm-6 mb-1">
																<a href="https://www.youtube.com/watch?v=RQ5ljyGg-ig" data-lity="">
																	<img src="https://img.youtube.com/vi/RQ5ljyGg-ig/mqdefault.jpg" alt="" className="d-block w-100" />
																</a>
															</div>
															<div className="col-md-4 col-sm-6 mb-1">
																<a href="https://www.youtube.com/watch?v=5lWkZ-JaEOc" data-lity="">
																	<img src="https://img.youtube.com/vi/5lWkZ-JaEOc/mqdefault.jpg" alt="" className="d-block w-100" />
																</a>
															</div>
															<div className="col-md-4 col-sm-6 mb-1">
																<a href="https://www.youtube.com/watch?v=9ZfN87gSjvI" data-lity="">
																	<img src="https://img.youtube.com/vi/9ZfN87gSjvI/mqdefault.jpg" alt="" className="d-block w-100" />
																</a>
															</div>
															<div className="col-md-4 col-sm-6 mb-1">
																<a href="https://www.youtube.com/watch?v=w2H07DRv2_M" data-lity="">
																	<img src="https://img.youtube.com/vi/w2H07DRv2_M/mqdefault.jpg" alt="" className="d-block w-100" />
																</a>
															</div>
															<div className="col-md-4 col-sm-6 mb-1">
																<a href="https://www.youtube.com/watch?v=PntG8KEVjR8" data-lity="">
																	<img src="https://img.youtube.com/vi/PntG8KEVjR8/mqdefault.jpg" alt="" className="d-block w-100" />
																</a>
															</div>
															<div className="col-md-4 col-sm-6 mb-1">
																<a href="https://www.youtube.com/watch?v=q8kxKvSQ7MI" data-lity="">
																	<img src="https://img.youtube.com/vi/q8kxKvSQ7MI/mqdefault.jpg" alt="" className="d-block w-100" />
																</a>
															</div>
															<div className="col-md-4 col-sm-6 mb-1">
																<a href="https://www.youtube.com/watch?v=cutu3Bw4ep4" data-lity="">
																	<img src="https://img.youtube.com/vi/cutu3Bw4ep4/mqdefault.jpg" alt="" className="d-block w-100" />
																</a>
															</div>
															<div className="col-md-4 col-sm-6 mb-1">
																<a href="https://www.youtube.com/watch?v=gCspUXGrraM" data-lity="">
																	<img src="https://img.youtube.com/vi/gCspUXGrraM/mqdefault.jpg" alt="" className="d-block w-100" />
																</a>
															</div>
														</div>
													</CardBody>
												</Card>
												<Card className="mb-3">
													<CardHeader className="fw-bold bg-transparent">Collections #2</CardHeader>
													<CardBody>
														<div className="row gx-1">
															<div className="col-md-4 col-sm-6 mb-1">
																<a href="https://www.youtube.com/watch?v=COtpTM1MpAA" data-lity="">
																	<img src="https://img.youtube.com/vi/COtpTM1MpAA/mqdefault.jpg" alt="" className="d-block w-100" />
																</a>
															</div>
															<div className="col-md-4 col-sm-6 mb-1">
																<a href="https://www.youtube.com/watch?v=8NVkGHVOazc" data-lity="">
																	<img src="https://img.youtube.com/vi/8NVkGHVOazc/mqdefault.jpg" alt="" className="d-block w-100" />
																</a>
															</div>
															<div className="col-md-4 col-sm-6 mb-1">
																<a href="https://www.youtube.com/watch?v=ZtT3jaTcCsY" data-lity="">
																	<img src="https://img.youtube.com/vi/ZtT3jaTcCsY/mqdefault.jpg" alt="" className="d-block w-100" />
																</a>
															</div>
															<div className="col-md-4 col-sm-6 mb-1">
																<a href="https://www.youtube.com/watch?v=Dmw0ucCv8aQ" data-lity="">
																	<img src="https://img.youtube.com/vi/Dmw0ucCv8aQ/mqdefault.jpg" alt="" className="d-block w-100" />
																</a>
															</div>
															<div className="col-md-4 col-sm-6 mb-1">
																<a href="https://www.youtube.com/watch?v=r1d7ST2TG2U" data-lity="">
																	<img src="https://img.youtube.com/vi/r1d7ST2TG2U/mqdefault.jpg" alt="" className="d-block w-100" />
																</a>
															</div>
															<div className="col-md-4 col-sm-6 mb-1">
																<a href="https://www.youtube.com/watch?v=WUR-XWBcHvs" data-lity="">
																	<img src="https://img.youtube.com/vi/WUR-XWBcHvs/mqdefault.jpg" alt="" className="d-block w-100" />
																</a>
															</div>
															<div className="col-md-4 col-sm-6 mb-1">
																<a href="https://www.youtube.com/watch?v=A7sQ8RWj0Cw" data-lity="">
																	<img src="https://img.youtube.com/vi/A7sQ8RWj0Cw/mqdefault.jpg" alt="" className="d-block w-100" />
																</a>
															</div>
															<div className="col-md-4 col-sm-6 mb-1">
																<a href="https://www.youtube.com/watch?v=IMN2VfiXls4" data-lity="">
																	<img src="https://img.youtube.com/vi/IMN2VfiXls4/mqdefault.jpg" alt="" className="d-block w-100" />
																</a>
															</div>
														</div>
													</CardBody>
												</Card>
											</div>
										</div>
									</div>
									<div className="col-xl-4">
										<div className="desktop-sticky-top d-none d-lg-block">
											<Card className="mb-3">
												<div className="list-group list-group-flush">
													<div className="list-group-item fw-bold px-3 d-flex">
														<span className="flex-fill">Trends for you</span> 
														<a href="#/" className="text-inverse text-opacity-50"><i className="fa fa-cog"></i></a>
													</div>
													<div className="list-group-item px-3">
														<div className="text-inverse text-opacity-50"><small><strong>Trending Worldwide</strong></small></div>
														<div className="fw-bold mb-2">#BreakingNews</div>
														<Card className="text-inverse text-decoration-none mb-1">
															<CardBody>
																<div className="row no-gutters">
																	<div className="col-md-8">
																		<div className="small text-inverse text-opacity-50 mb-1 mt-n1">Space</div>
																		<div className="h-40px fs-13px overflow-hidden mb-n1">Distant star explosion is brightest ever seen, study finds</div>
																	</div>
																	<div className="col-md-4 d-flex">
																		<div className="h-100 w-100" style={{ background: 'url(assets/img/gallery/news-1.jpg) center', backgroundSize: 'cover'}}></div>
																	</div>
																</div>
															</CardBody>
														</Card>
														<div><small className="text-inverse text-opacity-50">1.89m share</small></div>
													</div>
													<div className="list-group-item px-3">
														<div className="fw-bold mb-2">#TrollingForGood</div>
														<div className="fs-13px mb-1">Be a good Troll and spread some positivity on HUD today.</div>
														<div><small className="text-inverse text-opacity-50"><i className="fa fa-external-link-square-alt"></i> Promoted by HUD Trolls</small></div>
													</div>
													<div className="list-group-item px-3">
														<div className="text-inverse text-opacity-50"><small><strong>Trending Worldwide</strong></small></div>
														<div className="fw-bold mb-2">#CronaOutbreak</div>
														<div className="fs-13px mb-1">The coronavirus is affecting 210 countries around the world and 2 ...</div>
														<div><small className="text-inverse text-opacity-50">49.3m share</small></div>
													</div>
													<div className="list-group-item px-3">
														<div className="text-inverse text-opacity-50"><small><strong>Trending in New York</strong></small></div>
														<div className="fw-bold mb-2">#CoronavirusPandemic</div>
														<Card className="mb-1 text-inverse text-decoration-none">
															<CardBody>
																<div className="row no-gutters">
																	<div className="col-md-8">
																		<div className="fs-12px text-inverse text-opacity-50 mt-n1">Coronavirus</div>
																		<div className="h-40px fs-13px overflow-hidden mb-n1">Coronavirus: US suspends travel from Europe</div>
																	</div>
																	<div className="col-md-4 d-flex">
																		<div className="h-100 w-100" style={{ background: 'url(assets/img/gallery/news-2.jpg) center', backgroundSize: 'cover'}}></div>
																	</div>
																</div>
															</CardBody>
														</Card>
														<div><small className="text-inverse text-opacity-50">821k share</small></div>
													</div>
													<a href="#/" className="list-group-item list-group-action text-center">
														Show more
													</a>
												</div>
											</Card>
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

export default Profile;