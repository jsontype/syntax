import React from 'react';
import { Card } from './../../components/card/card.jsx';
import { NavScrollTo } from './../../components/nav-scroll-to/nav-scroll-to.jsx';

function Settings() {
	return (
		<div>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-10">
						<div className="row">
							<div className="col-xl-9">
								<div id="general" className="mb-5">
									<h4><i className="far fa-user fa-fw text-theme"></i> General</h4>
									<p>View and update your general account information and settings.</p>
									<Card>
										<div className="list-group list-group-flush">
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-1 text-break">
													<div>Name</div>
													<div className="text-inverse text-opacity-50">Sean Ngu</div>
												</div>
												<div className="w-100px">
													<a href="#modalEdit" data-bs-toggle="modal" className="btn btn-outline-default w-100px">Edit</a>
												</div>
											</div>
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-1 text-break">
													<div>Username</div>
													<div className="text-inverse text-opacity-50">@seantheme</div>
												</div>
												<div>
													<a href="#modalEdit" data-bs-toggle="modal" className="btn btn-outline-default w-100px">Edit</a>
												</div>
											</div>
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-1 text-break">
													<div>Phone</div>
													<div className="text-inverse text-opacity-50">+1-202-555-0183</div>
												</div>
												<div>
													<a href="#modalEdit" data-bs-toggle="modal" className="btn btn-outline-default w-100px">Edit</a>
												</div>
											</div>
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-1 text-break">
													<div>Email address</div>
													<div className="text-inverse text-opacity-50">support@seantheme.com</div>
												</div>
												<div>
													<a href="#modalEdit" data-bs-toggle="modal" className="btn btn-outline-default w-100px">Edit</a>
												</div>
											</div>
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-1 text-break">
													<div>Password</div>
												</div>
												<div>
													<a href="#modalEdit" data-bs-toggle="modal" className="btn btn-outline-default w-100px">Edit</a>
												</div>
											</div>
										</div>
									</Card>
								</div>
							
								<div id="notifications" className="mb-5">
									<h4><i className="far fa-bell fa-fw text-theme"></i> Notifications</h4>
									<p>Enable or disable what notifications you want to receive.</p>
									<Card>
										<div className="list-group list-group-flush">
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-1 text-break">
													<div>Comments</div>
													<div className="text-inverse text-opacity-50 d-flex align-items-center">
														<i className="fa fa-circle fs-8px fa-fw text-success me-1"></i> Enabled (Push, SMS)
													</div>
												</div>
												<div>
													<a href="#modalEdit" data-bs-toggle="modal" className="btn btn-outline-default w-100px">Edit</a>
												</div>
											</div>
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-1 text-break">
													<div>Tags</div>
													<div className="text-inverse text-opacity-50 d-flex align-items-center">
														<i className="fa fa-circle fs-8px fa-fw me-1"></i> Disabled
													</div>
												</div>
												<div>
													<a href="#modalEdit" data-bs-toggle="modal" className="btn btn-outline-default w-100px">Edit</a>
												</div>
											</div>
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-1 text-break">
													<div>Reminders</div>
													<div className="text-inverse text-opacity-50 d-flex align-items-center">
														<i className="fa fa-circle fs-8px fa-fw text-success me-1"></i> Enabled (Push, Email, SMS)
													</div>
												</div>
												<div>
													<a href="#modalEdit" data-bs-toggle="modal" className="btn btn-outline-default w-100px">Edit</a>
												</div>
											</div>
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-1 text-break">
													<div>New orders</div>
													<div className="text-inverse text-opacity-50 d-flex align-items-center">
														<i className="fa fa-circle fs-8px fa-fw text-success me-1"></i> Enabled (Push, Email, SMS)
													</div>
												</div>
												<div>
													<a href="#modalEdit" data-bs-toggle="modal" className="btn btn-outline-default w-100px">Edit</a>
												</div>
											</div>
										</div>
									</Card>
								</div>
							
								<div id="privacyAndSecurity" className="mb-5">
									<h4><i className="far fa-copyright fa-fw text-theme"></i> Privacy and security</h4>
									<p>Limit the account visibility and the security settings for your website.</p>
									<Card>
										<div className="list-group list-group-flush">
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-1 text-break">
													<div>Who can see your future posts?</div>
													<div className="text-inverse text-opacity-50 d-flex align-items-center">
														Friends only
													</div>
												</div>
												<div>
													<a href="#modalEdit" data-bs-toggle="modal" className="btn btn-outline-default w-100px">Edit</a>
												</div>
											</div>
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-1 text-break">
													<div>Photo tagging</div>
													<div className="text-inverse text-opacity-50 d-flex align-items-center">
														<i className="fa fa-circle fs-8px fa-fw text-success me-1"></i> Enabled
													</div>
												</div>
												<div>
													<a href="#modalEdit" data-bs-toggle="modal" className="btn btn-outline-default w-100px">Edit</a>
												</div>
											</div>
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-1 text-break">
													<div>Location information</div>
													<div className="text-inverse text-opacity-50 d-flex align-items-center">
														<i className="fa fa-circle fs-8px fa-fw text-muted me-1"></i> Disabled
													</div>
												</div>
												<div>
													<a href="#modalEdit" data-bs-toggle="modal" className="btn btn-outline-default w-100px">Edit</a>
												</div>
											</div>
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-1 text-break">
													<div>Firewall</div>
													<div className="text-inverse text-opacity-50 d-block d-xl-flex align-items-center">
														<div className="d-flex align-items-center"><i className="fa fa-circle fs-8px fa-fw text-muted me-1"></i> Disabled</div>
														<span className="bg-warning-transparent-1 text-warning ms-xl-3 mt-1 d-inline-block mt-xl-0 px-1 rounded-sm">
															<i className="fa fa-exclamation-circle text-warning fs-12px me-1"></i> 
															<span className="text-warning">Please enable the firewall for your website</span>
														</span>
													</div>
												</div>
												<div>
													<a href="#modalEdit" data-bs-toggle="modal" className="btn btn-outline-default w-100px">Edit</a>
												</div>
											</div>
										</div>
									</Card>
								</div>
							
								<div id="payment" className="mb-5">
									<h4><i className="far fa-credit-card fa-fw text-theme"></i> Payment</h4>
									<p>Manage your website payment provider</p>
									<Card>
										<div className="list-group list-group-flush">
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-1 text-break">
													<div>Allowed payment method</div>
													<div className="text-inverse text-opacity-50">
														Paypal, Credit Card, Apple Pay, Amazon Pay, Google Wallet, Alipay, Wechatpay
													</div>
												</div>
												<div>
													<a href="#modalEdit" data-bs-toggle="modal" className="btn btn-outline-default w-100px">Edit</a>
												</div>
											</div>
										</div>
									</Card>
								</div>
							
								<div id="shipping" className="mb-5">
									<h4><i className="far fa-paper-plane fa-fw text-theme"></i> Shipping</h4>
									<p>Allowed shipping area and zone setting</p>
									<Card>
										<div className="list-group list-group-flush">
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-1 text-break">
													<div>Allowed shipping method</div>
													<div className="text-inverse text-opacity-50">
														Local, Domestic
													</div>
												</div>
												<div>
													<a href="#modalEdit" data-bs-toggle="modal" className="btn btn-outline-default w-100px">Edit</a>
												</div>
											</div>
										</div>
									</Card>
								</div>
							
								<div id="mediaAndFiles" className="mb-5">
									<h4><i className="far fa-images fa-fw text-theme"></i> Media and Files</h4>
									<p>Allowed files and media format upload setting</p>
									<Card>
										<div className="list-group list-group-flush">
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-1 text-break">
													<div>Allowed files and media format</div>
													<div className="text-inverse text-opacity-50">
														.png, .jpg, .gif, .mp4
													</div>
												</div>
												<div>
													<a href="#modalEdit" data-bs-toggle="modal" className="btn btn-outline-default w-100px">Edit</a>
												</div>
											</div>
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-1 text-break">
													<div>Media and files cdn</div>
													<div className="text-inverse text-opacity-50 d-flex align-items-center">
														<i className="fa fa-circle fs-8px fa-fw text-muted me-1"></i> Disabled
													</div>
												</div>
												<div>
													<a href="#modalEdit" data-bs-toggle="modal" className="btn btn-outline-default w-100px">Edit</a>
												</div>
											</div>
										</div>
									</Card>
								</div>
							
								<div id="languages" className="mb-5">
									<h4><i className="fa fa-language fa-fw text-theme"></i> Languages</h4>
									<p>Language font support and auto translation enabled</p>
									<Card>
										<div className="list-group list-group-flush">
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-1 text-break">
													<div>Language enabled</div>
													<div className="text-inverse text-opacity-50">
														English (default), Chinese, France, Portuguese, Japense
													</div>
												</div>
												<div>
													<a href="#modalEdit" data-bs-toggle="modal" className="btn btn-outline-default w-100px">Edit</a>
												</div>
											</div>
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-1 text-break">
													<div>Auto translation</div>
													<div className="text-inverse text-opacity-50 d-flex align-items-center">
														<i className="fa fa-circle fs-8px fa-fw text-success me-1"></i> Enabled
													</div>
												</div>
												<div>
													<a href="#modalEdit" data-bs-toggle="modal" className="btn btn-outline-default w-100px">Edit</a>
												</div>
											</div>
										</div>
									</Card>
								</div>
							
								<div id="system" className="mb-5">
									<h4><i className="far fa-hdd fa-fw text-theme"></i> System</h4>
									<p>System storage, bandwidth and database setting</p>
									<Card>
										<div className="list-group list-group-flush">
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-1 text-break">
													<div>Web storage</div>
													<div className="text-inverse text-opacity-50">
														40.8gb / 100gb
													</div>
												</div>
												<div>
													<a href="#modalEdit" data-bs-toggle="modal" className="btn btn-outline-default w-100px">Manage</a>
												</div>
											</div>
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-1 text-break">
													<div>Monthly bandwidth</div>
													<div className="text-inverse text-opacity-50">
														Unlimited
													</div>
												</div>
											</div>
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-1 text-break">
													<div>Database</div>
													<div className="text-inverse text-opacity-50">
														MySQL version 8.0.19
													</div>
												</div>
												<div>
													<a href="#modalEdit" data-bs-toggle="modal" className="btn btn-outline-default w-100px disabled">Update</a>
												</div>
											</div>
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-1 text-break">
													<div>Platform</div>
													<div className="text-inverse text-opacity-50">
														PHP 7.4.4, NGINX 1.17.0
													</div>
												</div>
												<div>
													<a href="#modalEdit" data-bs-toggle="modal" className="btn btn-outline-success w-100px">Update</a>
												</div>
											</div>
										</div>
									</Card>
								</div>
							
								<div id="resetSettings" className="mb-5">
									<h4><i className="fa fa-redo fa-fw text-theme"></i> Reset settings</h4>
									<p>Reset all website setting to factory default setting.</p>
									<Card>
										<div className="list-group list-group-flush">
											<div className="list-group-item d-flex align-items-center">
												<div className="flex-1 text-break">
													<div>Reset Settings</div>
													<div className="text-inverse text-opacity-50">
														This action will clear and reset all the current website setting.
													</div>
												</div>
												<div>
													<a href="#/" className="btn btn-outline-default w-100px">Reset</a>
												</div>
											</div>
										</div>
									</Card>
								</div>
							</div>
						
							<div className="col-xl-3">
								<NavScrollTo>
									<nav className="nav">
										<a className="nav-link" href="#general" data-toggle="scroll-to">General</a>
										<a className="nav-link" href="#notifications" data-toggle="scroll-to">Notifications</a>
										<a className="nav-link" href="#privacyAndSecurity" data-toggle="scroll-to">Privacy and security</a>
										<a className="nav-link" href="#payment" data-toggle="scroll-to">Payment</a>
										<a className="nav-link" href="#shipping" data-toggle="scroll-to">Shipping</a>
										<a className="nav-link" href="#mediaAndFiles" data-toggle="scroll-to">Media and Files</a>
										<a className="nav-link" href="#languages" data-toggle="scroll-to">Languages</a>
										<a className="nav-link" href="#system" data-toggle="scroll-to">System</a>
										<a className="nav-link" href="#resetSettings" data-toggle="scroll-to">Reset settings</a>
									</nav>
								</NavScrollTo>
							</div>
						</div>
					</div>
				</div>
			</div>
	
			<div className="modal fade" id="modalEdit">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Edit name</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal"></button>
						</div>
						<div className="modal-body">
							<div className="mb-3">
								<label className="form-label">Name</label>
								<div className="row row-space-10">
									<div className="col-4">
										<input className="form-control" placeholder="First" />
									</div>
									<div className="col-4">
										<input className="form-control" placeholder="Middle" />
									</div>
									<div className="col-4">
										<input className="form-control" placeholder="Last" />
									</div>
								</div>
							</div>
							<div className="alert bg-inverse bg-opacity-15">
								<b>Please note:</b> 
								If you change your name, you can't change it again for 60 days. 
								Don't add any unusual capitalization, punctuation, characters or random words. 
								<a href="#/" className="alert-link">Learn more.</a>
							</div>
							<div className="mb-3">
								<label className="form-label">Other Names</label>
								<div>
									<a href="#/" className="btn btn-outline-default"><i className="fa fa-plus fa-fw"></i> Add other names</a>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-outline-default" data-bs-dismiss="modal">Close</button>
							<button type="button" className="btn btn-outline-theme">Save changes</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Settings;