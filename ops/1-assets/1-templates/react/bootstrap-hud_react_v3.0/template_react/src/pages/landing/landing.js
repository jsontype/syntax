import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody } from './../../components/card/card.jsx';
import 'lity';
import 'lity/dist/lity.min.css';
import { AppSettings } from './../../config/app-settings.js';
import { Icon } from '@iconify/react';

function Landing() {
	const context = useContext(AppSettings);
 
  useEffect(() => {
		context.setAppHeaderNone(true);
		context.setAppSidebarNone(true);
		context.setAppContentClass('p-0');
		context.setAppContentFullHeight(true);
    
    return function cleanUp() {
			context.setAppHeaderNone(false);
			context.setAppSidebarNone(false);
			context.setAppContentClass('');
			context.setAppContentFullHeight(false);
    }
    
    // eslint-disable-next-line
  }, []);
  
	return (
		<div>
			<div id="header" className="app-header navbar navbar-transparent2 navbar-expand-lg p-0">
				<div className="container-xxl px-3 px-lg-5">
					<button className="navbar-toggler border-0 p-0 me-3 fs-24px shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
						<span className="h-2px w-25px bg-gray-500 d-block mb-1"></span>
						<span className="h-2px w-25px bg-gray-500 d-block"></span>
					</button>
					<Link to="/" className="navbar-brand d-flex align-items-center position-relative me-auto brand px-0">
						<span className="brand-logo d-flex">
							<span className="brand-img">
								<span className="brand-img-text text-theme">H</span>
							</span>
							<span className="brand-text">HUD ADMIN</span>
						</span>
					</Link>
					<div className="collapse navbar-collapse" id="navbarContent">
						<div className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase small fw-semibold">
							<div className="nav-item me-2">
								<a href="#home" className="nav-link link-body-emphasis">Home</a>
							</div>
							<div className="nav-item me-2">
								<a href="#about" className="nav-link link-body-emphasis">About</a>
							</div>
							<div className="nav-item me-2">
								<a href="#features" className="nav-link link-body-emphasis">Features</a>
							</div>
							<div className="nav-item me-2">
								<a href="#pricing" className="nav-link link-body-emphasis">Pricing</a>
							</div>
							<div className="nav-item me-2">
								<a href="#testimonials" className="nav-link link-body-emphasis">Testimonials</a>
							</div>
							<div className="nav-item me-2">
								<a href="#blog" className="nav-link link-body-emphasis">Blog</a>
							</div>
							<div className="nav-item me-2">
								<a href="#contact" className="nav-link link-body-emphasis">Contact</a>
							</div>
						</div>
					</div>
					<div className="ms-3">
						<Link to="/" className="btn btn-outline-theme btn-sm fw-semibold text-uppercase px-2 py-1 fs-10px text-nowrap">Get started <i className="fa fa-arrow-right ms-1"></i></Link>
					</div>
				</div>
			</div>
			
			<div id="home" className="py-5 position-relative bg-body bg-opacity-50" data-bs-theme="dark">
				<div className="container-xxl p-3 p-lg-5 mb-0">
					<div className="div-hero-content z-3 position-relative">
						<div className="row">
							<div className="col-lg-6">
								<h1 className="display-6 fw-600 mb-2 mt-4">
									Built with HUD Template
								</h1>
								<div className="fs-18px text-body text-opacity-75 mb-4">
									Join thousands of users worldwide who rely on HUD Template <span className="d-xl-inline d-none"><br /></span>
									to kickstart their startups, enhance company projects, hone creative skills, <span className="d-xl-inline d-none"><br /></span>
									or tackle freelance tasks.
								</div>
								
								<div className="text-body text-opacity-35 text-center2 mb-4">
									<i className="fab fa-bootstrap fa-2x fa-fw"></i>
									<i className="fab fa-node-js fa-2x fa-fw"></i>
									<i className="fab fa-vuejs fa-2x fa-fw"></i>
									<i className="fab fa-angular fa-2x fa-fw"></i>
									<i className="fab fa-react fa-2x fa-fw"></i>
									<i className="fab fa-laravel fa-2x fa-fw"></i>
									<i className="fab fa-npm fa-2x fa-fw"></i>
								</div>
								
								<div className="mb-2">
									<Link to="/" className="btn btn-lg btn-outline-white px-3">Discover Our Template <i className="fa fa-arrow-right ms-2 opacity-5"></i></Link>
								</div>
								
								<hr className="my-4" />
								
								<div className="row text-body mt-4 mb-4">
									<div className="col-6 mb-3 mb-lg-0">
										<div className="d-flex align-items-center">
											<div className="h1 text-body text-opacity-25 me-3"><Icon icon="bi:download" /></div>
											<div>
												<div className="fw-500 mb-0 h3">1.8k+</div>
												<div className="fw-500 text-body text-opacity-75">Downloads / Purchases</div>
											</div>
										</div>
									</div>
									<div className="col-6">
										<div className="d-flex align-items-center">
											<div className="h1 text-body text-opacity-25 me-3"><Icon icon="bi:bootstrap" /></div>
											<div>
												<div className="fw-500 mb-0 h3">5.3.3</div>
												<div className="fw-500 text-body text-opacity-75">Bootstrap Version</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div className="position-absolute top-0 bottom-0 end-0 w-50 p-5 z-2 overflow-hidden d-lg-flex align-items-center d-none">
						<img className="w-100 d-block shadow-lg" alt="HUD" src="/assets/img/landing/mockup-1.jpg" />
					</div>
				</div>
				<div className="position-absolute bg-size-cover bg-position-center d-none2 bg-no-repeat top-0 start-0 w-100 h-100" style={{ backgroundImage: 'url(/assets/img/landing/cover.jpg)'}}></div>
				<div className="position-absolute top-0 start-0 d-none2 w-100 h-100 opacity-95" style={{ background: 'var(--bs-body-bg-gradient)'}}></div>
				<div className="position-absolute top-0 start-0 d-none2 w-100 h-100 opacity-95" style={{ backgroundImage: 'url(/assets/css/images/pattern-dark.png)', backgroundSize: 'var(--bs-body-bg-image-size)'}}></div>
			</div>
			
			<div id="about" className="py-5 bg-component">
				<div className="container-xxl p-3 p-lg-5 text-center">
					<h1 className="mb-3">About HUD</h1>
					<p className="fs-16px text-body text-opacity-50 mb-5">HUD Template crafts high-performance web applications for <br />developers, designers, and entrepreneurs, enabling effortless unleashing of creativity.</p>
					<div className="row text-start g-3 gx-lg-5 gy-lg-4">
						<div className="col-xl-3 col-lg-4 col-sm-6 d-flex">
							<div className="w-50px h-50px bg-theme bg-opacity-15 text-theme fs-32px d-flex align-items-center justify-content-center">
								<Icon icon="solar:monitor-smartphone-line-duotone" />
							</div>
							<div className="flex-1 ps-3">
								<h4>Responsive Design</h4>
								<p className="mb-0">Optimized for all devices, ensuring a seamless and exceptional user experience everywhere.</p>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-sm-6 d-flex">
							<div className="w-50px h-50px bg-theme bg-opacity-15 text-theme fs-32px d-flex align-items-center justify-content-center">
								<Icon icon="solar:settings-line-duotone" />
							</div>
							<div className="flex-1 ps-3">
								<h4>Highly Customizable</h4>
								<p className="mb-0">Modify layouts, colors, and more with ease. HUD Template offers unparalleled flexibility to adapt to your specific needs.</p>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-sm-6 d-flex">
							<div className="w-50px h-50px bg-theme bg-opacity-15 text-theme fs-32px d-flex align-items-center justify-content-center">
								<Icon icon="solar:bolt-line-duotone" />
							</div>
							<div className="flex-1 ps-3">
								<h4>High Performance</h4>
								<p className="mb-0">Fast loading times and efficient coding practices ensure a smooth user experience, even under heavy traffic.</p>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-sm-6 d-flex">
							<div className="w-50px h-50px bg-theme bg-opacity-15 text-theme fs-32px d-flex align-items-center justify-content-center">
								<Icon icon="solar:lock-keyhole-line-duotone" />
							</div>
							<div className="flex-1 ps-3">
								<h4>Secure</h4>
								<p className="mb-0">Built with security in mind, protecting your data and ensuring your complete peace of mind.</p>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-sm-6 d-flex">
							<div className="w-50px h-50px bg-theme bg-opacity-15 text-theme fs-32px d-flex align-items-center justify-content-center">
								<Icon icon="solar:dialog-2-line-duotone" />
							</div>
							<div className="flex-1 ps-3">
								<h4>Community Support</h4>
								<p className="mb-0">Join our vibrant community of developers and designers, sharing insights and support.</p>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-sm-6 d-flex">
							<div className="w-50px h-50px bg-theme bg-opacity-15 text-theme fs-32px d-flex align-items-center justify-content-center">
								<Icon icon="solar:help-line-duotone" />
							</div>
							<div className="flex-1 ps-3">
								<h4>24/7 Support</h4>
								<p className="mb-0">Our dedicated support team is always here to assist you with any questions or issues you encounter.</p>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-sm-6 d-flex">
							<div className="w-50px h-50px bg-theme bg-opacity-15 text-theme fs-32px d-flex align-items-center justify-content-center">
								<Icon icon="solar:tuning-line-duotone" />
							</div>
							<div className="flex-1 ps-3">
								<h4>Scalable Infrastructure</h4>
								<p className="mb-0">Flexible and scalable infrastructure to meet diverse business needs, ensuring reliability and performance.</p>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-sm-6 d-flex">
							<div className="w-50px h-50px bg-theme bg-opacity-15 text-theme fs-32px d-flex align-items-center justify-content-center">
								<Icon icon="solar:widget-5-line-duotone" />
							</div>
							<div className="flex-1 ps-3">
								<h4>Intuitive User Interface</h4>
								<p className="mb-0">Streamlined, intuitive interface designed for enhanced productivity and creativity.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="container-xxl px-3 px-lg-5"><hr className="opacity-4 m-0" /></div>
			
			<div id="features" className="py-5 position-relative">
				<div className="container-xxl p-3 p-lg-5 z-2 position-relative">
					<div className="text-center mb-5">
						<h1 className="mb-3">Our Unique Features</h1>
						<p className="fs-16px text-body text-opacity-50 mb-5">
							Explore HUD Admin Template's standout features. <br />
							With advanced customization and seamless integration, create powerful and stunning <br />
							admin interfaces, enhancing productivity and user satisfaction.
						</p>
					</div>
					<div className="row g-3 g-lg-5">
						<div className="col-xl-3 col-lg-4 col-sm-6">
							<a href="/assets/img/landing/mockup-1.jpg" data-lity className="shadow d-block"><img src="/assets/img/landing/mockup-1-thumb.jpg" alt="" className="mw-100" /></a>
							<div className="text-center my-3 text-body fw-bold">Theme Dashboard</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-sm-6">
							<a href="/assets/img/landing/mockup-2.jpg" data-lity className="shadow d-block"><img src="/assets/img/landing/mockup-2-thumb.jpg" alt="" className="mw-100" /></a>
							<div className="text-center my-3 text-body fw-bold">POS System UI</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-sm-6">
							<a href="/assets/img/landing/mockup-3.jpg" data-lity className="shadow d-block"><img src="/assets/img/landing/mockup-3-thumb.jpg" alt="" className="mw-100" /></a>
							<div className="text-center my-3 text-body fw-bold">Email Inbox</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-sm-6">
							<a href="/assets/img/landing/mockup-4.jpg" data-lity className="shadow d-block"><img src="/assets/img/landing/mockup-4-thumb.jpg" alt="" className="mw-100" /></a>
							<div className="text-center my-3 text-body fw-bold">Pricing Page</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-sm-6">
							<a href="/assets/img/landing/mockup-5.jpg" data-lity className="shadow d-block"><img src="/assets/img/landing/mockup-5-thumb.jpg" alt="" className="mw-100" /></a>
							<div className="text-center my-3 text-body fw-bold">User Profile</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-sm-6">
							<a href="/assets/img/landing/mockup-6.jpg" data-lity className="shadow d-block"><img src="/assets/img/landing/mockup-6-thumb.jpg" alt="" className="mw-100" /></a>
							<div className="text-center my-3 text-body fw-bold">Analytics Page</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-sm-6">
							<a href="/assets/img/landing/mockup-7.jpg" data-lity className="shadow d-block"><img src="/assets/img/landing/mockup-7-thumb.jpg" alt="" className="mw-100" /></a>
							<div className="text-center my-3 text-body fw-bold">HUD Widgets</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-sm-6">
							<a href="/assets/img/landing/mockup-8.jpg" data-lity className="shadow d-block"><img src="/assets/img/landing/mockup-8-thumb.jpg" alt="" className="mw-100" /></a>
							<div className="text-center my-3 text-body fw-bold">Kitchen Order Page</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-sm-6">
							<a href="/assets/img/landing/mockup-9.jpg" data-lity className="shadow d-block"><img src="/assets/img/landing/mockup-9-thumb.jpg" alt="" className="mw-100" /></a>
							<div className="text-center my-3 text-body fw-bold">Order Details Page</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-sm-6">
							<a href="/assets/img/landing/mockup-10.jpg" data-lity className="shadow d-block"><img src="/assets/img/landing/mockup-10-thumb.jpg" alt="" className="mw-100" /></a>
							<div className="text-center my-3 text-body fw-bold">Messenger</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-sm-6">
							<a href="/assets/img/landing/mockup-11.jpg" data-lity className="shadow d-block"><img src="/assets/img/landing/mockup-11-thumb.jpg" alt="" className="mw-100" /></a>
							<div className="text-center my-3 text-body fw-bold">Table Control Page</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-sm-6">
							<a href="/assets/img/landing/mockup-12.jpg" data-lity className="shadow d-block"><img src="/assets/img/landing/mockup-12-thumb.jpg" alt="" className="mw-100" /></a>
							<div className="text-center my-3 text-body fw-bold">Customer Order Page</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="container-xxl px-3 px-lg-5"><hr className="opacity-4 m-0" /></div>
			
			<div id="pricing" className="py-5 text-body text-opacity-75">
				<div className="container-xxl p-3 p-lg-5">
					<h1 className="mb-3 text-center">Our Pricing Plans</h1>
					<p className="fs-16px text-body text-opacity-50 text-center mb-0">Choose the perfect plan that suits your needs. <br />Our pricing is designed to be flexible and affordable, providing value for businesses of all sizes. <br />Explore our plans to find the best fit for your requirements.</p>
					
					<div className="row g-3 py-3 gx-lg-5 pt-lg-5">
						<div className="col-xl-3 col-md-4 col-sm-6 py-xl-5">
							<Card className="h-100">
								<CardBody className="p-4 d-flex flex-column">
									<div className="d-flex align-items-center">
										<div className="flex-1">
											<div className="h6 font-monospace">Starter Plan</div>
											<div className="h1 fw-semibold mb-0">$5 <small className="h6 fw-semibold text-body text-opacity-50">/month*</small></div>
										</div>
										<div>
											<Icon icon="solar:usb-bold-duotone" className="display-6 text-body text-opacity-50" />
										</div>
									</div>
									<hr className="my-20px" />
									<div className="mb-5 text-body text-opacity-75 flex-1">
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check fa-lg text-theme"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">Storage:</span> <b className="text-body">10 GB</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check fa-lg text-theme"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">Bandwidth:</span> <b className="text-body">100 GB</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check fa-lg text-theme"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">Domain Names:</span> <b className="text-body">1</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check fa-lg text-theme"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">SSL Certificate:</span> <b className="text-body"> Shared</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check fa-lg text-theme"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">Email Accounts:</span> <b className="text-body"> 5</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check fa-lg text-theme"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">24/7 Support:</span> <b className="text-body"> Yes</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-times fa-lg text-body text-opacity-25"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">Backup:</span> <b className="text-body"> Daily</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-times fa-lg text-body text-opacity-25"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">Uptime Guarantee:</span> <b className="text-body"> 99.9%</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-times fa-lg text-body text-opacity-25"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">FTP Access:</span> <b className="text-body"> Yes</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-times fa-lg text-body text-opacity-25"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">Control Panel:</span> <b className="text-body"> cPanel</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-times fa-lg text-body text-opacity-25"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">Free Domain:</span> <b className="text-body"> No</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-times fa-lg text-body text-opacity-25"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">Firewall:</span> <b className="text-body"> No</b></div>
										</div>
									</div>
									<div className="mx-n2">
										<a href="#/" className="btn btn-outline-default btn-lg w-100 font-monospace">Get Started <i className="fa fa-arrow-right"></i></a>
									</div>
								</CardBody>
							</Card>
						</div>
						<div className="col-xl-3 col-md-6 py-3 py-xl-5">
							<Card className="h-100">
								<CardBody className="p-4 d-flex flex-column">
									<div className="d-flex align-items-center">
										<div className="flex-1">
											<div className="h6 font-monospace">Booster Plan</div>
											<div className="h1 fw-semibold mb-0">$10 <small className="h6 fw-semibold text-body text-opacity-50">/month*</small></div>
										</div>
										<div>
											<Icon icon="solar:map-arrow-up-bold-duotone" className="display-6 text-body text-opacity-50" />
										</div>
									</div>
									<hr className="my-20px" />
									<div className="mb-5 text-body text-opacity-75 flex-1">
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check fa-lg text-theme"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">Storage:</span> <b className="text-body">20 GB</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check fa-lg text-theme"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">Bandwidth:</span> <b className="text-body">200 GB</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check fa-lg text-theme"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">Domain Names:</span> <b className="text-body">2</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check fa-lg text-theme"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">SSL Certificate:</span> <b className="text-body"> Free</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check fa-lg text-theme"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">Email Accounts:</span> <b className="text-body"> 10</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check fa-lg text-theme"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">24/7 Support:</span> <b className="text-body"> Yes</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-times fa-lg text-body text-opacity-25"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">Backup:</span> <b className="text-body"> Daily</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-times fa-lg text-body text-opacity-25"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">Uptime Guarantee:</span> <b className="text-body"> 99.9%</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-times fa-lg text-body text-opacity-25"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">FTP Access:</span> <b className="text-body"> Yes</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-times fa-lg text-body text-opacity-25"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">Control Panel:</span> <b className="text-body"> cPanel</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-times fa-lg text-body text-opacity-25"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">Free Domain:</span> <b className="text-body"> No</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-times fa-lg text-body text-opacity-25"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">Firewall:</span> <b className="text-body"> No</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-times fa-lg text-body text-opacity-25"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">45-Day Money-Back Guarantee</span></div>
										</div>
									</div>
									<div className="mx-n2">
										<a href="#/" className="btn btn-outline-default btn-lg w-100 font-monospace">Get Started <i className="fa fa-arrow-right"></i></a>
									</div>
								</CardBody>
							</Card>
						</div>
						<div className="col-xl-3 col-md-6 py-3 py-xl-0">
							<Card className="border-theme h-100">
								<CardBody className="p-30px h-100 d-flex flex-column">
									<div className="d-flex align-items-center">
										<div className="flex-1">
											<div className="h6 font-monospace text-theme">Premium Plan</div>
											<div className="display-6 fw-bold mb-0 text-theme">$15 <small className="h6 text-body text-opacity-50">/month*</small></div>
										</div>
										<div>
											<Icon icon="solar:cup-first-bold-duotone" className="display-5 text-theme" />
										</div>
									</div>
									<hr className="my-20px" />
									<div className="mb-5 text-body flex-1">
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check text-theme fa-lg"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace text-body text-opacity-50 small">Storage:</span> <b className="text-body">50 GB</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check text-theme fa-lg"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace text-body text-opacity-50 small">Bandwidth:</span> <b className="text-body">500 GB</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check text-theme fa-lg"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace text-body text-opacity-50 small">Domain Names:</span> <b className="text-body">Unlimited</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check text-theme fa-lg"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace text-body text-opacity-50 small">SSL Certificate:</span> <b className="text-body">Free</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check text-theme fa-lg"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace text-body text-opacity-50 small">Email Accounts:</span> <b className="text-body">Unlimited</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check text-theme fa-lg"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace text-body text-opacity-50 small">24/7 Support:</span> <b className="text-body">Yes</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check text-theme fa-lg"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace text-body text-opacity-50 small">Backup:</span> <b className="text-body">Daily</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check text-theme fa-lg"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace text-body text-opacity-50 small">Uptime Guarantee:</span> <b className="text-body">99.9%</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check text-theme fa-lg"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace text-body text-opacity-50 small">FTP Access:</span> <b className="text-body">Yes</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check text-theme fa-lg"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace text-body text-opacity-50 small">Control Panel:</span> <b className="text-body">cPanel</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check text-theme fa-lg"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace text-body text-opacity-50 small">Free Domain:</span> <b className="text-body">No</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check text-theme fa-lg"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace text-body text-opacity-50 small">Firewall:</span> <b className="text-body">Yes</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check text-theme fa-lg"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace text-body text-opacity-50 small">E-commerce Support</span></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check text-theme fa-lg"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace text-body text-opacity-50 small">45-Day Money-Back Guarantee</span></div>
										</div>
									</div>
									<a href="#/" className="btn btn-theme btn-lg w-100 text-black font-monospace">Get Started <i className="fa fa-arrow-right"></i></a>
								</CardBody>
							</Card>
						</div>
						<div className="col-xl-3 col-md-6 py-3 py-xl-5">
							<Card className="h-100">
								<CardBody className="p-30px d-flex flex-column">
									<div className="d-flex align-items-center">
										<div className="flex-1">
											<div className="h6 font-monospace">Business Plan</div>
											<div className="display-6 fw-bold mb-0">$99<small className="h6 text-body text-opacity-50">/month*</small></div>
										</div>
										<div>
											<Icon icon="solar:buildings-bold-duotone" className="display-6 text-white text-opacity-50" />
										</div>
									</div>
									<hr className="my-20px" />
									<div className="mb-5 text-body text-opacity-75 flex-1">
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check fa-lg text-theme"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">Storage:</span> <b className="text-body">1 TB</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check fa-lg text-theme"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">Bandwidth:</span> <b className="text-body">20 TB</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check fa-lg text-theme"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">Domain Names:</span> <b className="text-body">Unlimited</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check fa-lg text-theme"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">SSL Certificate:</span> <b className="text-body">Free</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check fa-lg text-theme"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">Email Accounts:</span> <b className="text-body">Unlimited</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check fa-lg text-theme"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">24/7 Support:</span> <b className="text-body">Yes</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check text-theme fa-lg"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">Backup:</span> <b className="text-body"> Daily</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check text-theme fa-lg"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">Uptime Guarantee:</span> <b className="text-body">99.9%</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check text-theme fa-lg"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">FTP Access:</span> <b className="text-body">Yes</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check text-theme fa-lg"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">Control Panel:</span> <b className="text-body">cPanel</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check text-theme fa-lg"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">Free Domain:</span> <b className="text-body">Yes</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check text-theme fa-lg"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">Firewall:</span> <b className="text-body">Yes</b></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check text-theme fa-lg"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">E-commerce Support</span></div>
										</div>
										<div className="d-flex align-items-center mb-1">
											<i className="fa fa-check text-theme fa-lg"></i> 
											<div className="flex-1 ps-3"><span className="font-monospace small">45-Day Money-Back Guarantee</span></div>
										</div>
									</div>
									<div className="mx-n2">
										<a href="#/" className="btn btn-outline-default btn-lg w-100 font-monospace">Get Started <i className="fa fa-arrow-right"></i></a>
									</div>
								</CardBody>
							</Card>
						</div>
					</div>
				</div>
			</div>
			
			<div className="container-xxl px-3 px-lg-5"><hr className="opacity-4 m-0" /></div>
			
			<div id="testimonials" className="py-5 text-body text-opacity-75">
				<div className="container-xxl p-3 p-lg-5">
					<div className="text-center mb-5">
						<h1 className="mb-3 text-center">What Our Clients Say</h1>
						<p className="fs-16px text-body text-opacity-50 text-center mb-0">
							Read testimonials from our satisfied customers. <br />
							Discover how HUD Admin Template enhances productivity and exceeds expectations <br />
							with its ease of use, advanced features, and exceptional support.
						</p>
					</div>
					<div className="row g-3 g-lg-4 mb-4">
						<div className="col-xl-4 col-md-6">
							<Card className="p-4 h-100">
								<div className="d-flex align-items-center mb-3">
									<img src="/assets/img/user/user.jpg" className="rounded-circle me-3 w-50px" alt="Client 1" />
									<div>
										<h5 className="mb-0">John Doe</h5>
										<small className="text-muted">CEO, Company</small>
									</div>
								</div>
								<div className="d-flex">
									<i className="fa fa-quote-left fa-2x text-body text-opacity-15"></i>
									<div className="p-3">
										<div className="text-warning d-flex mb-2">
											<Icon icon="ic:baseline-star" className="fs-18px" />
											<Icon icon="ic:baseline-star" className="fs-18px" />
											<Icon icon="ic:baseline-star" className="fs-18px" />
											<Icon icon="ic:baseline-star" className="fs-18px" />
											<Icon icon="ic:baseline-star" className="fs-18px" />
										</div>
										HUD Admin Template transformed our workflow. 
										The customization options are unparalleled, and the support team is incredibly responsive.
									</div>
									<div className="d-flex align-items-end">
										<i className="fa fa-quote-right fa-2x text-body text-opacity-15"></i>
									</div>
								</div>
							</Card>
						</div>
						<div className="col-xl-4 col-md-6">
							<Card className="p-4 h-100">
								<div className="d-flex align-items-center mb-3">
									<img src="/assets/img/user/user-7.jpg" className="rounded-circle me-3 w-50px" alt="Client 1" />
									<div>
										<h5 className="mb-0">Michael Brown</h5>
										<small className="text-muted">CTO, Innovate Corp</small>
									</div>
								</div>
								<div className="d-flex">
									<i className="fa fa-quote-left fa-2x text-body text-opacity-15"></i>
									<div className="p-3">
										<div className="text-warning d-flex mb-2">
											<Icon icon="ic:baseline-star" className="fs-18px" />
											<Icon icon="ic:baseline-star" className="fs-18px" />
											<Icon icon="ic:baseline-star" className="fs-18px" />
											<Icon icon="ic:baseline-star" className="fs-18px" />
											<Icon icon="ic:baseline-star" className="fs-18px" />
										</div>
										Our productivity has soared since adopting this template. 
										The features are top-notch, and the user experience is outstanding.
									</div>
									<div className="d-flex align-items-end">
										<i className="fa fa-quote-right fa-2x text-body text-opacity-15"></i>
									</div>
								</div>
							</Card>
						</div>
						<div className="col-xl-4 col-md-6">
							<Card className="p-4 h-100">
								<div className="d-flex align-items-center mb-3">
									<img src="/assets/img/user/user-10.jpg" className="rounded-circle me-3 w-50px" alt="Client 1" />
									<div>
										<h5 className="mb-0">Emily Johnson</h5>
										<small className="text-muted">Project Manager, Creative Agency</small>
									</div>
								</div>
								<div className="d-flex">
									<i className="fa fa-quote-left fa-2x text-body text-opacity-15"></i>
									<div className="p-3">
										<div className="text-warning d-flex mb-2">
											<Icon icon="ic:baseline-star" className="fs-18px" />
											<Icon icon="ic:baseline-star" className="fs-18px" />
											<Icon icon="ic:baseline-star" className="fs-18px" />
											<Icon icon="ic:baseline-star" className="fs-18px" />
											<Icon icon="ic:baseline-star" className="fs-18px" />
										</div>
										This template is a game-changer. 
										It's intuitive, flexible, and the seamless integration 
										has made our projects run smoother than ever.
									</div>
									<div className="d-flex align-items-end">
										<i className="fa fa-quote-right fa-2x text-body text-opacity-15"></i>
									</div>
								</div>
							</Card>
						</div>
						<div className="col-xl-2 d-none d-xl-block"></div>
						<div className="col-xl-4 col-md-6">
							<Card className="p-4 h-100">
								<div className="d-flex align-items-center mb-3">
									<img src="/assets/img/user/user-8.jpg" className="rounded-circle me-3 w-50px" alt="Client 1" />
									<div>
										<h5 className="mb-0">David Lee</h5>
										<small className="text-muted">Founder, Startup Hub</small>
									</div>
								</div>
								<div className="d-flex">
									<i className="fa fa-quote-left fa-2x text-body text-opacity-15"></i>
									<div className="p-3">
										<div className="text-warning d-flex mb-2">
											<Icon icon="ic:baseline-star" className="fs-18px" />
											<Icon icon="ic:baseline-star" className="fs-18px" />
											<Icon icon="ic:baseline-star" className="fs-18px" />
											<Icon icon="ic:baseline-star" className="fs-18px" />
											<Icon icon="ic:baseline-star" className="fs-18px" />
										</div>
										HUD Admin Template has exceeded all our expectations. 
										The advanced features and excellent support make it a standout choice.
									</div>
									<div className="d-flex align-items-end">
										<i className="fa fa-quote-right fa-2x text-body text-opacity-15"></i>
									</div>
								</div>
							</Card>
						</div>
						<div className="col-xl-4 col-md-6">
							<Card className="p-4 h-100">
								<div className="d-flex align-items-center mb-3">
									<img src="/assets/img/user/user.jpg" className="rounded-circle me-3 w-50px" alt="Client 1" />
									<div>
										<h5 className="mb-0">John Doe</h5>
										<small className="text-muted">CEO, Company</small>
									</div>
								</div>
								<div className="d-flex">
									<i className="fa fa-quote-left fa-2x text-body text-opacity-15"></i>
									<div className="p-3">
										<div className="text-warning d-flex mb-2">
											<Icon icon="ic:baseline-star" className="fs-18px" />
											<Icon icon="ic:baseline-star" className="fs-18px" />
											<Icon icon="ic:baseline-star" className="fs-18px" />
											<Icon icon="ic:baseline-star" className="fs-18px" />
											<Icon icon="ic:baseline-star" className="fs-18px" />
										</div>
										HUD Admin Template transformed our workflow. 
										The customization options are unparalleled, and the support team is incredibly responsive.
									</div>
									<div className="d-flex align-items-end">
										<i className="fa fa-quote-right fa-2x text-body text-opacity-15"></i>
									</div>
								</div>
							</Card>
						</div>
					</div>
				</div>
			</div>
			
			<div className="container-xxl px-3 px-lg-5"><hr className="opacity-4 m-0" /></div>
			
			<div id="blog" className="py-5 bg-component">
				<div className="container-xxl p-3 p-lg-5">
					<div className="text-center mb-5">
						<h1 className="mb-3 text-center">Our Latest Insights</h1>
						<p className="fs-16px text-body text-opacity-50 text-center mb-0">
							Dive into our blog for the latest trends, tips, and updates <br />
							on web development, design, and industry best practices. Stay informed and inspired <br />
							with expert insights and valuable resources.
						</p>
					</div>
					<div className="row g-3 g-xl-4 mb-5">
						<div className="col-xl-3 col-lg-4 col-sm-6">
							<Card className="d-flex flex-column h-100 mb-5 mb-lg-0">
								<CardBody>
									<img src="/assets/img/landing/blog-1.jpg" alt="" className="object-fit-cover h-200px w-100 d-block" />
								</CardBody>
								<div className="flex-1 px-3 pb-0">
									<div className="mb-2">
										<span className="bg-theme bg-opacity-15 text-theme px-2 py-1 rounded small fw-bold">Web Design</span>
									</div>
									<h5>Mastering Responsive Design: A Guide for Beginners</h5>
									<p>Explore the fundamentals of responsive web design and learn essential tips to create websites that look great on any device.</p>
								</div>
								<div className="p-3 pt-0 text-body text-opacity-50">July 15, 2024</div>
							</Card>
						</div>
						<div className="col-xl-3 col-lg-4 col-sm-6">
							<Card className="d-flex flex-column h-100 mb-5 mb-lg-0">
								<CardBody>
									<img src="/assets/img/landing/blog-2.jpg" alt="" className="object-fit-cover h-200px w-100 d-block" />
								</CardBody>
								<div className="flex-1 p-3 pb-0">
									<div className="mb-2">
										<span className="bg-theme bg-opacity-15 text-theme px-2 py-1 rounded small fw-bold">UXUI Design</span>
									</div>
									<h5>The Future of UI/UX Trends in 2024</h5>
									<p>Discover the latest trends shaping user interface and experience design in the digital landscape this year.</p>
								</div>
								<div className="p-3 pt-0 text-body text-opacity-50">July 11, 2024</div>
							</Card>
						</div>
						<div className="col-xl-3 col-lg-4 col-sm-6">
							<Card className="d-flex flex-column h-100 mb-5 mb-lg-0">
								<CardBody>
									<img src="/assets/img/landing/blog-3.jpg" alt="" className="object-fit-cover h-200px w-100 d-block" />
								</CardBody>
								<div className="flex-1 p-3 pb-0">
									<div className="mb-2">
										<span className="bg-theme bg-opacity-15 text-theme px-2 py-1 rounded small fw-bold">Search Engine</span>
									</div>
									<h5>Effective SEO Strategies for 2024</h5>
									<p>Dive into actionable SEO strategies and tips to boost your website’s visibility and drive organic traffic.</p>
								</div>
								<div className="p-3 pt-0 text-body text-opacity-50">June 29, 2024</div>
							</Card>
						</div>
						<div className="col-xl-3 col-lg-4 col-sm-6">
							<Card className="d-flex flex-column h-100 mb-5 mb-lg-0">
								<CardBody>
									<img src="/assets/img/landing/blog-4.jpg" alt="" className="object-fit-cover h-200px w-100 d-block" />
								</CardBody>
								<div className="flex-1 p-3 pb-0">
									<div className="mb-2">
										<span className="bg-theme bg-opacity-15 text-theme px-2 py-1 rounded small fw-bold">Cyber Security</span>
									</div>
									<h5>Security Essentials: Protecting Your Website from Cyber Threats</h5>
									<p>Essential security measures and best practices to safeguard your website and user data from cyber threats.</p>
								</div>
								<div className="p-3 pt-0 text-body text-opacity-50">June 27, 2024</div>
							</Card>
						</div>
					</div>
					<div className="text-center">
						<a href="#/" className="text-decoration-none text-body text-opacity-50 h6">See More Company Stories <i className="fa fa-arrow-right ms-3"></i></a>
					</div>
				</div>
			</div>
			
			<div className="container-xxl px-3 px-lg-5"><hr className="opacity-4 m-0" /></div>
			
			<div id="contact" className="py-5 text-body text-opacity-75">
				<div className="container-xl p-3 p-lg-5">
					<div className="text-center mb-5">
						<h1 className="mb-3 text-center">Get in Touch</h1>
						<p className="fs-16px text-body text-opacity-50 text-center mb-0">
							Contact us today to explore how our team can assist you. <br />
							Whether you have inquiries, need support, or want to discuss a partnership, <br />
							we're here to help. Reach out to us and let's start a conversation!
						</p>
					</div>
					<div className="row gx-3 gx-lg-5">
						<div className="col-lg-6">
							<h4>Contact Us to Discuss Your Project</h4>
							<p>
								Do you have a project in mind? We’re eager to discuss it with you. Whether you’re looking for advice, have questions, or want to share your ideas, feel free to reach out. 
							</p>
							<p>
								<span className="fw-bolder">SeanTheme HUD, Inc</span><br /> 
								795 Folsom Ave, Suite 600<br />
								San Francisco, CA 94107<br /><br /> 
								
								Monday - Friday: 9:00 AM - 6:00 PM<br /> 
								Saturday - Sunday: Closed<br /> <br /> 
								
								Phone: <a href="#/" className="text-theme">(123) 456-7890</a><br /> 
								International: <a href="#/" className="text-theme">+11 (0) 123 456 78</a><br /> 
								Email:
								<a href="#/" className="text-theme">support@seantheme.com</a>
							</p>
						</div>
						<div className="col-lg-6">
							<form action="" method="GET" name="form_contact_us">
								<div className="row gy-3 mb-3">
									<div className="col-6">
										<label className="form-label">First Name <span className="text-theme">*</span></label>
										<input type="text" className="form-control form-control-lg fs-15px" />
									</div>
									<div className="col-6">
										<label className="form-label">Last Name <span className="text-theme">*</span></label>
										<input type="text" className="form-control form-control-lg fs-15px" />
									</div>
									<div className="col-6">
										<label className="form-label">Email <span className="text-theme">*</span></label>
										<input type="text" className="form-control form-control-lg fs-15px" />
									</div>
									<div className="col-6">
										<label className="form-label">Phone <span className="text-theme">*</span></label>
										<input type="text" className="form-control form-control-lg fs-15px" />
									</div>
									<div className="col-12">
										<label className="form-label">Message <span className="text-theme">*</span></label>
										<textarea className="form-control form-control-lg fs-15px" rows="8"></textarea>
									</div>
									<div className="col-12">
										<button type="submit" className="btn btn-outline-theme btn-lg btn-block px-4 fs-15px">Send Message</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			
			<div id="footer" className="py-5 bg-gray-900 bg-opacity-75 text-body text-opacity-75" data-bs-theme="dark">
				<div className="container-xxl px-3 px-lg-5">
					<div className="row gx-lg-5 gx-3 gy-lg-4 gy-3">
						<div className="col-lg-3 col-md-6">
							<div className="mb-3">
								<div className="h2">HUD</div>
							</div>
							<p className="mb-4">
								HUD is your go-to solution for creating stunning, responsive, and high-performance web applications. Designed for developers, designers, and entrepreneurs, it provides the tools and flexibility needed to bring your creative visions to life.
							</p>
							<h5>Follow Us</h5>
							<div className="d-flex">
								<a href="#/" className="me-2 text-body text-opacity-50"><i className="fab fa-lg fa-facebook fa-fw"></i></a>
								<a href="#/" className="me-2 text-body text-opacity-50"><i className="fab fa-lg fa-instagram fa-fw"></i></a>
								<a href="#/" className="me-2 text-body text-opacity-50"><i className="fab fa-lg fa-twitter fa-fw"></i></a>
								<a href="#/" className="me-2 text-body text-opacity-50"><i className="fab fa-lg fa-youtube fa-fw"></i></a>
								<a href="#/" className="me-2 text-body text-opacity-50"><i className="fab fa-lg fa-linkedin fa-fw"></i></a>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<h5>Quick Links</h5>
							<ul className="list-unstyled">
								<li className="mb-3px"><a href="#/" className="text-decoration-none text-body text-opacity-75">Newsroom</a></li>
								<li className="mb-3px"><a href="#/" className="text-decoration-none text-body text-opacity-75">Company Info</a></li>
								<li className="mb-3px"><a href="#/" className="text-decoration-none text-body text-opacity-75">Careers</a></li>
								<li className="mb-3px"><a href="#/" className="text-decoration-none text-body text-opacity-75">For Investors</a></li>
								<li className="mb-3px"><a href="#/" className="text-decoration-none text-body text-opacity-75">Brand Resources</a></li>
							</ul>
							<hr className="text-body text-opacity-50" />
							<h5>Services</h5>
							<ul className="list-unstyled">
								<li className="mb-3px"><a href="#/" className="text-decoration-none text-body text-opacity-75">Web Development</a></li>
								<li className="mb-3px"><a href="#/" className="text-decoration-none text-body text-opacity-75">App Development</a></li>
								<li className="mb-3px"><a href="#/" className="text-decoration-none text-body text-opacity-75">SEO</a></li>
								<li className="mb-3px"><a href="#/" className="text-decoration-none text-body text-opacity-75">Marketing</a></li>
							</ul>
						</div>
						<div className="col-lg-3 col-md-6">
							<h5>Resources</h5>
							<ul className="list-unstyled">
								<li className="mb-3px"><a href="#/" className="text-decoration-none text-body text-opacity-75">Documentation</a></li>
								<li className="mb-3px"><a href="#/" className="text-decoration-none text-body text-opacity-75">Support</a></li>
								<li className="mb-3px"><a href="#/" className="text-decoration-none text-body text-opacity-75">FAQs</a></li>
								<li className="mb-3px"><a href="#/" className="text-decoration-none text-body text-opacity-75">Community</a></li>
								<li className="mb-3px"><a href="#/" className="text-decoration-none text-body text-opacity-75">Tutorials</a></li>
							</ul>
							<hr className="text-body text-opacity-50" />
							<h5>Legal</h5>
							<ul className="list-unstyled">
								<li className="mb-3px"><a href="#/" className="text-decoration-none text-body text-opacity-75">Privacy Policy</a></li>
								<li className="mb-3px"><a href="#/" className="text-decoration-none text-body text-opacity-75">Terms of Service</a></li>
								<li className="mb-3px"><a href="#/" className="text-decoration-none text-body text-opacity-75">Cookie Policy</a></li>
								<li className="mb-3px"><a href="#/" className="text-decoration-none text-body text-opacity-75">Compliance</a></li>
							</ul>
						</div>
						<div className="col-lg-3 col-md-6">
							<h5>Help Center</h5>
							<ul className="list-unstyled">
								<li className="mb-3px"><a href="#/" className="text-decoration-none text-body text-opacity-75">Contact Form</a></li>
								<li className="mb-3px"><a href="#/" className="text-decoration-none text-body text-opacity-75">Live Chat Support</a></li>
								<li className="mb-3px"><a href="#/" className="text-decoration-none text-body text-opacity-75">Portal Help Center</a></li>
								<li className="mb-3px"><a href="#/" className="text-decoration-none text-body text-opacity-75">Email Support</a></li>
								<li className="mb-3px"><a href="#/" className="text-decoration-none text-body text-opacity-75">Technical Documentation</a></li>
								<li className="mb-3px"><a href="#/" className="text-decoration-none text-body text-opacity-75">Service Updates</a></li>
								<li className="mb-3px"><a href="#/" className="text-decoration-none text-body text-opacity-75">Developer API</a></li>
								<li className="mb-3px"><a href="#/" className="text-decoration-none text-body text-opacity-75">Knowledge Base</a></li>
							</ul>
						</div>
					</div>
					<hr className="text-body text-opacity-50" />
					<div className="row">
						<div className="col-sm-6 mb-3 mb-lg-0">
							<div className="footer-copyright-text">&copy; 2024 SeanTheme All Rights Reserved</div>
						</div>
						<div className="col-sm-6 text-sm-end">
							<div className="dropdown me-4 d-inline">
								<a href="#/" className="text-decoration-none dropdown-toggle text-body text-opacity-50" data-bs-toggle="dropdown">United States (English)</a>
								<ul className="dropdown-menu">
									<li><a href="#/" className="dropdown-item">United States (English)</a></li>
									<li><a href="#/" className="dropdown-item">China (简体中文)</a></li>
									<li><a href="#/" className="dropdown-item">Brazil (Português)</a></li>
									<li><a href="#/" className="dropdown-item">Germany (Deutsch)</a></li>
									<li><a href="#/" className="dropdown-item">France (Français)</a></li>
									<li><a href="#/" className="dropdown-item">Japan (日本語)</a></li>
									<li><a href="#/" className="dropdown-item">Korea (한국어)</a></li>
									<li><a href="#/" className="dropdown-item">Latin America (Español)</a></li>
									<li><a href="#/" className="dropdown-item">Spain (Español)</a></li>
								</ul>
							</div>
							<a href="#/" className="text-decoration-none text-body text-opacity-50">Sitemap</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Landing;