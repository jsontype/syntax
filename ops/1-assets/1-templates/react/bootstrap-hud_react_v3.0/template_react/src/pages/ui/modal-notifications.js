import React, { useEffect, useState } from 'react';
import Highlight from 'react-highlight';
import { Toast } from 'bootstrap';
import { Card, CardBody } from './../../components/card/card.jsx';
import { NavScrollTo } from './../../components/nav-scroll-to/nav-scroll-to.jsx';

function UiModalNotifications() {
	const [code1, setCode1] = useState();
	const [code2, setCode2] = useState();
	const [code3, setCode3] = useState();
	const [code4, setCode4] = useState();
	const [code5, setCode5] = useState();
	
	useEffect(() => {
		fetch('/assets/data/ui/modal-notification-code-1.json').then(function(response) { return response.text(); }).then((html) => { setCode1(html); });
		fetch('/assets/data/ui/modal-notification-code-2.json').then(function(response) { return response.text(); }).then((html) => { setCode2(html); });
		fetch('/assets/data/ui/modal-notification-code-3.json').then(function(response) { return response.text(); }).then((html) => { setCode3(html); });
		fetch('/assets/data/ui/modal-notification-code-4.json').then(function(response) { return response.text(); }).then((html) => { setCode4(html); });
		fetch('/assets/data/ui/modal-notification-code-5.json').then(function(response) { return response.text(); }).then((html) => { setCode5(html); });
		
		const toastTrigger1 = document.getElementById('showToast1');
		const toast1 = document.getElementById('toast-1');
		if (toastTrigger1) {
			toastTrigger1.addEventListener('click', (e) => {
				e.preventDefault();
				const toast = new Toast(toast1);
				toast.show()
			})
		}
		
		const toastTrigger2 = document.getElementById('showToast2');
		const toast2 = document.getElementById('toast-2');
		if (toastTrigger1) {
			toastTrigger2.addEventListener('click', (e) => {
				e.preventDefault();
				const toast = new Toast(toast2);
				toast.show()
			})
		}
	});
	
	return (
		<div>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-10">
						<div className="row">
							<div className="col-xl-9">
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><a href="#/">UI KITS</a></li>
									<li className="breadcrumb-item active">MODAL & NOTIFICATION</li>
								</ul>
							
								<h1 className="page-header">
									Modal & Notification <small>page header description goes here...</small>
								</h1>
					
								<hr />
							
								<div id="modal" className="mb-5">
									<h4>Modal</h4>
									<p>Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content. Please read the <a href="https://getbootstrap.com/docs/5.3/components/modal/" target="_blank" rel="noreferrer">official Bootstrap documentation</a> for the full list of options.</p>
									<Card>
										<CardBody>
											<div className="modal position-static d-block">
												<div className="modal-dialog">
													<div className="modal-content">
														<div className="modal-header">
															<h5 className="modal-title">MODAL TITLE</h5>
															<button type="button" className="btn-close" data-bs-dismiss="modal"></button>
														</div>
														<div className="modal-body">
															<p>Modal body text goes here.</p>
														</div>
														<div className="modal-footer">
															<button type="button" className="btn btn-outline-default" data-bs-dismiss="modal">Close</button>
															<button type="button" className="btn btn-outline-theme">Save changes</button>
														</div>
													</div>
												</div>
											</div>
										</CardBody>
										<div className="hljs-container">
											<Highlight className='javascript'>{code1}</Highlight>
										</div>
									</Card>
								</div>
							
								<div id="modalSizes" className="mb-5">
									<h4>Modal Sizes</h4>
									<p>Modals have three optional sizes, available via modifier classes to be placed on a <code>.modal-dialog</code>. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.</p>
									<Card>
										<CardBody>
											<button type="button" className="btn btn-outline-theme me-2" data-bs-toggle="modal" data-bs-target="#modalXl">Extra large modal</button>
										
											<button type="button" className="btn btn-outline-theme me-2" data-bs-toggle="modal" data-bs-target="#modalLg">Large modal</button>
										
											<button type="button" className="btn btn-outline-theme me-2" data-bs-toggle="modal" data-bs-target="#modalSm">Small modal</button>
										</CardBody>
										<div className="hljs-container">
											<Highlight className='javascript'>{code2}</Highlight>
										</div>
									</Card>
								</div>
							
								<div id="modalCover" className="mb-5">
									<h4>Modal Cover</h4>
									<p>Modal cover is an extended feature from Bootstrap modal. It provide the same background color as the modal content. Place a <code>.modal-cover</code> css class on <code>.modal</code> for full cover modal.</p>
									<Card>
										<CardBody>
											<button type="button" className="btn btn-outline-theme me-2" data-bs-toggle="modal" data-bs-target="#modalCoverExample">Modal Cover</button>
										</CardBody>
										<div className="hljs-container">
											<Highlight className='javascript'>{code3}</Highlight>
										</div>
									</Card>
								</div>
							
								<div id="toastsNotification" className="mb-5">
									<h4>Toasts Notification</h4>
									<p>Push notifications to your visitors with a toast, a lightweight and easily customizable alert message. Please read the <a href="https://getbootstrap.com/docs/5.3/components/toasts/" target="_blank" rel="noreferrer">official Bootstrap documentation</a> for the full list of options.</p>
									<Card>
										<CardBody>
											<div className="toast show">
												<div className="toast-header">
													<i className="far fa-bell text-muted me-2"></i>
													<strong className="me-auto">Bootstrap</strong>
													<small>11 mins ago</small>
													<button type="button" className="btn-close" data-bs-dismiss="toast"></button>
												</div>
												<div className="toast-body">
													Hello, world! This is a toast message.
												</div>
											</div>
										</CardBody>
										<div className="hljs-container">
											<Highlight className='javascript'>{code4}</Highlight>
										</div>
									</Card>
								</div>
							
								<div id="toastsContainer" className="mb-5">
									<h4>Toasts Container</h4>
									<p>Toasts container is an extended ui from Bootstrap toasts. Wrap the toasts with <code>.toasts-container</code> will allow toast to float within the right top position.</p>
									<Card>
										<CardBody>
											<a href="#/" className="btn btn-outline-theme me-2" id="showToast1">Show toast 1</a>
											<a href="#/" className="btn btn-outline-theme" id="showToast2">Show toast 2</a>
										</CardBody>
										<div className="hljs-container">
											<Highlight className='javascript'>{code5}</Highlight>
										</div>
									</Card>
								</div>
							</div>
						
							<div className="col-xl-3">
								<NavScrollTo>
									<nav className="nav">
										<a className="nav-link" href="#modal" data-toggle="scroll-to">Modal</a>
										<a className="nav-link" href="#modalSizes" data-toggle="scroll-to">Modal Sizes</a>
										<a className="nav-link" href="#modalCover" data-toggle="scroll-to">Modal Cover</a>
										<a className="nav-link" href="#toastsNotification" data-toggle="scroll-to">Toasts Notification</a>
										<a className="nav-link" href="#toastsContainer" data-toggle="scroll-to">Toasts Container</a>
									</nav>
								</NavScrollTo>
							</div>
						</div>
					</div>
				</div>
			</div>
		
			<div className="toasts-container">
				<div className="toast fade hide mb-3" data-bs-autohide="false" id="toast-1">
					<div className="toast-header">
						<i className="far fa-bell text-muted me-2"></i>
						<strong className="me-auto">Bootstrap</strong>
						<small>11 mins ago</small>
						<button type="button" className="btn-close" data-bs-dismiss="toast"></button>
					</div>
					<div className="toast-body">
						Hello, world! This is a toast message.
					</div>
				</div>
				<div className="toast fade hide mb-3" data-bs-autohide="false" id="toast-2">
					<div className="toast-header">
						<i className="far fa-bell text-muted me-2"></i>
						<strong className="me-auto">Bootstrap</strong>
						<small>2 seconds ago</small>
						<button type="button" className="btn-close" data-bs-dismiss="toast"></button>
					</div>
					<div className="toast-body">
						See? Just like this.
					</div>
				</div>
			</div>
			<div className="modal modal-cover fade" id="modalCoverExample">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h3 className="modal-title">Sign Up!</h3>
							<button type="button" className="btn-close" data-bs-dismiss="modal"></button>
						</div>
						<div className="modal-body">
							<p className="mb-3">
								25% Off On Your First Purchase* Enter code WELCOME at checkout<br />
								Discover new apps, things to do & more great news added daily!
							</p>
							<div className="row mb-5">
								<div className="col-md-9">
									<input type="text" placeholder="Your email address here" className="form-control form-control-lg" name="icon-filter" />
								</div>
								<div className="col-md-3">
									<button type="button" className="btn btn-outline-theme btn-lg btn-block">Continue</button>
								</div>
							</div>
							<div className="pt-3">
								<a href="#/" className="text-muted fs-12px">What is it? Terms and conditions</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="modal fade" id="modalXl">
				<div className="modal-dialog modal-xl">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">EXTRA LARGE MODAL</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal"></button>
						</div>
						<div className="modal-body">
							...
						</div>
					</div>
				</div>
			</div>
			<div className="modal fade" id="modalLg">
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">LARGE MODAL</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal"></button>
						</div>
						<div className="modal-body">
							...
						</div>
					</div>
				</div>
			</div>
			<div className="modal fade" id="modalSm">
				<div className="modal-dialog modal-sm">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">SMALL MODAL</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal"></button>
						</div>
						<div className="modal-body">
							...
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UiModalNotifications;