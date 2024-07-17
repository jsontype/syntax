import React, { useEffect, useState } from 'react';
import { Card, CardBody } from './../../components/card/card.jsx';
import Highlight from 'react-highlight';
import { NavScrollTo } from './../../components/nav-scroll-to/nav-scroll-to.jsx';

function UiBootstrap() {
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
	const [code12, setCode12] = useState();
	
	useEffect(() => {
		fetch('/assets/data/ui/bootstrap-code-1.json').then(function(response) { return response.text(); }).then((html) => { setCode1(html); });
		fetch('/assets/data/ui/bootstrap-code-2.json').then(function(response) { return response.text(); }).then((html) => { setCode2(html); });
		fetch('/assets/data/ui/bootstrap-code-3.json').then(function(response) { return response.text(); }).then((html) => { setCode3(html); });
		fetch('/assets/data/ui/bootstrap-code-4.json').then(function(response) { return response.text(); }).then((html) => { setCode4(html); });
		fetch('/assets/data/ui/bootstrap-code-5.json').then(function(response) { return response.text(); }).then((html) => { setCode5(html); });
		fetch('/assets/data/ui/bootstrap-code-6.json').then(function(response) { return response.text(); }).then((html) => { setCode6(html); });
		fetch('/assets/data/ui/bootstrap-code-7.json').then(function(response) { return response.text(); }).then((html) => { setCode7(html); });
		fetch('/assets/data/ui/bootstrap-code-8.json').then(function(response) { return response.text(); }).then((html) => { setCode8(html); });
		fetch('/assets/data/ui/bootstrap-code-9.json').then(function(response) { return response.text(); }).then((html) => { setCode9(html); });
		fetch('/assets/data/ui/bootstrap-code-10.json').then(function(response) { return response.text(); }).then((html) => { setCode10(html); });
		fetch('/assets/data/ui/bootstrap-code-11.json').then(function(response) { return response.text(); }).then((html) => { setCode11(html); });
		fetch('/assets/data/ui/bootstrap-code-12.json').then(function(response) { return response.text(); }).then((html) => { setCode12(html); });
	});
	
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-xl-10">
					<div className="row">
						<div className="col-xl-9">
							<ul className="breadcrumb">
								<li className="breadcrumb-item"><a href="#/">UI KITS</a></li>
								<li className="breadcrumb-item active">BOOTSTRAP</li>
							</ul>
							
							<h1 className="page-header">
								Bootstrap <small>page header description goes here...</small>
							</h1>
							
							<hr className="mb-4" />
							
							<div id="alert" className="mb-5">
								<h4>Alerts</h4>
								<p>
									Wrap any text and an optional dismiss button in <code>.alert</code> and one of the four contextual classes for basic alert messages.
									Please read the <a href="https://getbootstrap.com/docs/5.3/components/alerts/" target="_blank" rel="noreferrer">official Bootstrap documentation</a> for the full list of options.
								</p>
								<Card>
									<CardBody>
										<div className="alert alert-primary">
											<strong>Primary!</strong> A simple primary alert check it out! 
										</div>
										<div className="alert alert-secondary">
											<strong>Secondary Alert!</strong> This alert is not important, but it's beautiful.
										</div>
										<div className="alert alert-success">
											<strong>Well done!</strong> You successfully read this important alert message. 
										</div>
										<div className="alert alert-danger">
											<strong>Oh snap!</strong> Change a few things up and try submitting again.
										</div>
										<div className="alert alert-warning">
											<strong>Warning!</strong> Better check yourself, you're not looking too good.
										</div>
										<div className="alert alert-info">
											<strong>Heads up!</strong> This alert needs your attention, but it's not super important.
										</div>
										<div className="alert alert-dark">
											<strong>Dark!</strong>  A simple dark alert—check it out!
										</div>
										<div className="alert alert-light mb-0">
											<strong>Light!</strong> A simple light alert—check it out!
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code1}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="badge" className="mb-5">
								<h4>Badges</h4>
								<p>Documentation and examples for badges, our small count and labeling component. Please read the <a href="https://getbootstrap.com/docs/5.3/components/badge/" target="_blank" rel="noreferrer">official Bootstrap documentation</a> for the full list of options.</p>
								<Card>
									<CardBody>
										<div>
											<span className="badge me-1 bg-primary">Primary</span>
											<span className="badge me-1 bg-secondary">Secondary</span>
											<span className="badge me-1 bg-success">Success</span>
											<span className="badge me-1 bg-danger">Danger</span>
											<span className="badge me-1 bg-warning">Warning</span>
											<span className="badge me-1 bg-info">Info</span>
											<span className="badge me-1 bg-light">Light</span>
											<span className="badge me-1 bg-dark">Dark</span>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code2}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="breadcrumb" className="mb-5">
								<h4>Breadcrumb</h4>
								<p>Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS. Please read the <a href="https://getbootstrap.com/docs/5.3/components/breadcrumb/" target="_blank" rel="noreferrer">official Bootstrap documentation</a> for the full list of options.</p>
								<Card>
									<CardBody>
										<ol className="breadcrumb py-1 mb-0">
											<li className="breadcrumb-item"><a href="#/">HOME</a></li>
											<li className="breadcrumb-item"><a href="#/">LIBRARY</a></li>
											<li className="breadcrumb-item active">DATA</li>
										</ol>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code3}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="carousel" className="mb-5">
								<h4>Carousel</h4>
								<p>A slideshow component for cycling through elements—images or slides of text—like a carousel. Please read the <a href="https://getbootstrap.com/docs/5.3/components/carousel/" target="_blank" rel="noreferrer">official Bootstrap documentation</a> for the full list of options.</p>
								<Card>
									<CardBody>
										<div id="carouselExample" className="carousel slide" data-ride="carousel">
											<ol className="carousel-indicators">
												<li data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></li>
												<li data-bs-target="#carouselExample" data-bs-slide-to="1"></li>
												<li data-bs-target="#carouselExample" data-bs-slide-to="2"></li>
											</ol>
											<div className="carousel-inner">
												<div className="carousel-item active">
													<img src="https://via.placeholder.com/728x400/c9d2e3/212837" alt="" className="d-block w-100" />
													<div className="carousel-caption d-none d-md-block">
														<h5 className="text-dark">First slide label</h5>
														<p className="text-dark">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
													</div>
												</div>
												<div className="carousel-item">
													<img src="https://via.placeholder.com/728x400/c9d2e3/212837" alt="" className="d-block w-100" />
													<div className="carousel-caption d-none d-md-block">
														<h5 className="text-dark">Second slide label</h5>
														<p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
													</div>
												</div>
												<div className="carousel-item">
													<img src="https://via.placeholder.com/728x400/c9d2e3/212837" alt="" className="d-block w-100" />
													<div className="carousel-caption d-none d-md-block">
														<h5 className="text-dark">Third slide label</h5>
														<p className="text-dark">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
													</div>
												</div>
											</div>
											<a className="carousel-control-prev" href="#carouselExample" data-bs-slide="prev">
												<span className="carousel-control-prev-icon"></span>
											</a>
											<a className="carousel-control-next" href="#carouselExample" data-bs-slide="next">
												<span className="carousel-control-next-icon"></span>
											</a>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code4}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="jumbotron" className="mb-5">
								<h4>Jumbotron</h4>
								<p>Lightweight, flexible component for showcasing hero unit style content by using Bootstrap utilities.</p>
								<Card>
									<CardBody>
										<div className="p-5 bg-inverse bg-opacity-10 mb-0 rounded-3">
											<h1 className="display-4">Hello, world!</h1>
											<p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
											<hr className="my-4" />
											<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
											<a className="btn btn-theme btn-lg" href="#/" role="button">Learn more</a>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code5}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="listGroup" className="mb-5">
								<h4>List Group</h4>
								<p>List groups are a flexible and powerful component for displaying a series of content. Please read the <a href="https://getbootstrap.com/docs/5.3/components/list-group/" target="_blank" rel="noreferrer">official Bootstrap documentation</a> for the full list of options.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-xl-6">
												<div className="list-group">
													<a href="#/" className="list-group-item list-group-item-action active">Cras justo odio</a>
													<a href="#/" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
													<a href="#/" className="list-group-item list-group-item-action">Morbi leo risus</a>
													<a href="#/" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
													<a href="#/" className="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
												</div>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code6}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="mediaObject" className="mb-5">
								<h4>Media Object</h4>
								<p>Media object is created by using Bootstrap utilities class and it is construct highly repetitive components like blog comments, tweets, and the like.</p>
								<Card>
									<CardBody>
										<div className="d-flex align-items-start">
											<img src="https://via.placeholder.com/128x128/c9d2e3/212837" alt="" width="64" className="rounded" />
											<div className="ms-3">
												<h5 className="mt-0 mb-1">Media heading</h5>
												Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

												<div className="d-flex align-items-start mt-3">
													<a href="#/">
														<img src="https://via.placeholder.com/128x128/c9d2e3/212837" alt="" width="64" className="rounded" />
													</a>
													<div className="ms-3">
														<h5 className="mt-0 mb-1">Media heading</h5>
														Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
													</div>
												</div>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code7}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="navs" className="mb-5">
								<h4>Navs</h4>
								<p>Navigation available in Bootstrap share general markup and styles, from the base .nav class to the active and disabled states. Swap modifier classes to switch between each style. Please read the <a href="https://getbootstrap.com/docs/5.3/components/navs/" target="_blank" rel="noreferrer">official Bootstrap documentation</a> for the full list of options.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-xl-6 mb-xl-0 mb-3">
												<div className="mb-2 small text-inverse text-opacity-50"><b>BASE NAV</b></div>
												<nav className="nav mb-4">
													<a className="nav-link active" href="#/">Active</a>
													<a className="nav-link" href="#/">Link</a>
													<a className="nav-link" href="#/">Link</a>
													<a className="nav-link disabled" href="#/">Disabled</a>
												</nav>
												<div className="mb-2 small text-inverse text-opacity-50"><b>UNDERLINE NAV</b></div>
												<nav className="nav nav-underline mb-3">
													<a className="nav-link ms-3 active" href="#/">Active</a>
													<a className="nav-link ms-3" href="#/">Link</a>
													<a className="nav-link ms-3" href="#/">Link</a>
													<a className="nav-link ms-3 disabled" href="#/">Disabled</a>
												</nav>
											</div>
											<div className="col-xl-6">
												<div className="mb-2 small text-inverse text-opacity-50"><b>VERTICAL NAV</b></div>
												<nav className="nav flex-column">
													<a className="nav-link active" href="#/">Active</a>
													<a className="nav-link" href="#/">Link</a>
													<a className="nav-link" href="#/">Link</a>
													<a className="nav-link disabled" href="#/">Disabled</a>
												</nav>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code8}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="navbar" className="mb-5">
								<h4>Narbar</h4>
								<p>Includes support for branding, navigation, and more, including support for collapse plugin. Please read the <a href="https://getbootstrap.com/docs/5.3/components/navbar/" target="_blank" rel="noreferrer">official Bootstrap documentation</a> for the full list of options.</p>
								<Card>
									<CardBody>
										<nav className="navbar navbar-expand-lg bg-white mb-3 rounded" data-bs-theme="light">
											<div className="container-fluid">
												<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarLight">
													<span className="navbar-toggler-icon"></span>
												</button>
												<div className="collapse navbar-collapse" id="navbarLight">
													<a className="navbar-brand" href="#/">Navbar</a>
													<ul className="navbar-nav me-auto mt-2 mt-lg-0">
														<li className="nav-item active">
															<a className="nav-link" href="#/">Home</a>
														</li>
														<li className="nav-item">
															<a className="nav-link" href="#/">Link</a>
														</li>
														<li className="nav-item">
															<a className="nav-link disabled" href="#/">Disabled</a>
														</li>
													</ul>
													<form className="d-flex">
														<input className="form-control me-sm-2" type="search" placeholder="Search" />
														<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
													</form>
												</div>
											</div>
										</nav>
										<nav className="navbar navbar-expand-lg bg-gray-900 rounded" data-bs-theme="dark">
											<div className="container-fluid">
												<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark">
													<span className="navbar-toggler-icon"></span>
												</button>
												<div className="collapse navbar-collapse" id="navbarDark">
													<a className="navbar-brand" href="#/">Navbar</a>
													<ul className="navbar-nav me-auto mt-2 mt-lg-0">
														<li className="nav-item active">
															<a className="nav-link" href="#/">Home</a>
														</li>
														<li className="nav-item">
															<a className="nav-link" href="#/">Link</a>
														</li>
														<li className="nav-item">
															<a className="nav-link disabled" href="#/">Disabled</a>
														</li>
													</ul>
													<form className="d-flex">
														<input className="form-control me-sm-2" type="search" placeholder="Search" />
														<button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
													</form>
												</div>
											</div>
										</nav>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code9}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="pagination" className="mb-5">
								<h4>Pagination</h4>
								<p>Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages. Please read the <a href="https://getbootstrap.com/docs/5.3/components/pagination/" target="_blank" rel="noreferrer">official Bootstrap documentation</a> for the full list of options.</p>
								<Card>
									<CardBody>
										<ul className="pagination mb-0">
											<li className="page-item disabled"><a className="page-link" href="#/">Previous</a></li>
											<li className="page-item"><a className="page-link" href="#/">1</a></li>
											<li className="page-item active"><a className="page-link" href="#/">2</a></li>
											<li className="page-item"><a className="page-link" href="#/">3</a></li>
											<li className="page-item"><a className="page-link" href="#/">Next</a></li>
										</ul>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code10}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="progress" className="mb-5">
								<h4>Progress</h4>
								<p>Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels. Please read the <a href="https://getbootstrap.com/docs/5.3/components/progress/" target="_blank" rel="noreferrer">official Bootstrap documentation</a> for the full list of options.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-xl-6">
												<div className="mb-3">
													<div className="mb-2 small text-inverse text-opacity-50"><b>DEFAULT</b></div>
													<div className="progress">
														<div className="progress-bar" style={{width: '50%'}}>50%</div>
													</div>
												</div>
												<div className="mb-3">
													<div className="mb-2 small text-inverse text-opacity-50"><b>MULTIPLE BARS</b></div>
													<div className="progress">
														<div className="progress-bar" style={{width: '33%'}}>33%</div>
														<div className="progress-bar bg-warning" style={{width: '20%'}}>20%</div>
														<div className="progress-bar bg-danger" style={{width: '20%'}}>20%</div>
													</div>
												</div>
											</div>
											<div className="col-xl-6">
												<div className="mb-3">
													<div className="mb-2 small text-inverse text-opacity-50"><b>STRIPED</b></div>
													<div className="progress">
														<div className="progress-bar progress-bar-striped" style={{width: '66%'}}>66%</div>
													</div>
												</div>
												<div className="mb-3">
													<div className="mb-2 small text-inverse text-opacity-50"><b>ANIMATED</b></div>
													<div className="progress">
														<div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{width: '33%'}}>33%</div>
													</div>
												</div>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code11}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="spinners" className="mb-5">
								<h4>Spinners</h4>
								<p>Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript. Please read the <a href="https://getbootstrap.com/docs/5.3/components/spinners/" target="_blank" rel="noreferrer">official Bootstrap documentation</a> for the full list of options.</p>
								<Card>
									<CardBody className="pb-0">
										<div className="row">
											<div className="col-xl-6">
												<div className="mb-4">
													<div className="mb-2 small text-inverse text-opacity-50"><b>BORDER SPINNER</b></div>
													<div className="spinner-border"></div>
												</div>
												<div className="mb-4">
													<div className="mb-2 small text-inverse text-opacity-50"><b>COLORS</b></div>
													<div className="spinner-border me-1 text-primary"></div>
													<div className="spinner-border me-1 text-secondary"></div>
													<div className="spinner-border me-1 text-success"></div>
													<div className="spinner-border me-1 text-danger"></div>
													<div className="spinner-border me-1 text-warning"></div>
													<div className="spinner-border me-1 text-info"></div>
													<div className="spinner-border me-1 text-light"></div>
													<div className="spinner-border text-dark"></div>
												</div>
												<div className="mb-4">
													<div className="mb-2 small text-inverse text-opacity-50"><b>SIZE</b></div>
													<div className="spinner-border me-1 spinner-border-sm"></div>
													<div className="spinner-border spinner-border-sm text-primary"></div>
												</div>
											</div>
											<div className="col-xl-6">
												<div className="mb-4">
													<div className="mb-2 small text-inverse text-opacity-50"><b>GROWING SPINNER</b></div>
													<div className="spinner-grow"></div>
												</div>
												<div className="mb-4">
													<div className="mb-2 small text-inverse text-opacity-50"><b>COLORS</b></div>
													<div className="spinner-grow me-1 text-primary"></div>
													<div className="spinner-grow me-1 text-secondary"></div>
													<div className="spinner-grow me-1 text-success"></div>
													<div className="spinner-grow me-1 text-danger"></div>
													<div className="spinner-grow me-1 text-warning"></div>
													<div className="spinner-grow me-1 text-info"></div>
													<div className="spinner-grow me-1 text-light"></div>
													<div className="spinner-grow me-1 text-dark"></div>
												</div>
												<div className="mb-4">
													<div className="mb-2 small text-inverse text-opacity-50"><b>SIZE</b></div>
													<div className="spinner-grow me-1 spinner-grow-sm"></div>
													<div className="spinner-grow spinner-grow-sm text-primary"></div>
												</div>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code12}</Highlight>
									</div>
								</Card>
							</div>
						</div>
						
						<div className="col-xl-3">
							<NavScrollTo>
								<nav className="nav">
									<a className="nav-link" href="#alert" data-toggle="scroll-to">Alert</a>
									<a className="nav-link" href="#badge" data-toggle="scroll-to">Badge</a>
									<a className="nav-link" href="#breadcrumb" data-toggle="scroll-to">Breadcrumb</a>
									<a className="nav-link" href="#carousel" data-toggle="scroll-to">Carousel</a>
									<a className="nav-link" href="#jumbotron" data-toggle="scroll-to">Jumbotron</a>
									<a className="nav-link" href="#listGroup" data-toggle="scroll-to">List group</a>
									<a className="nav-link" href="#mediaObject" data-toggle="scroll-to">Media object</a>
									<a className="nav-link" href="#navs" data-toggle="scroll-to">Navs</a>
									<a className="nav-link" href="#navbar" data-toggle="scroll-to">Navbar</a>
									<a className="nav-link" href="#pagination" data-toggle="scroll-to">Pagination</a>
									<a className="nav-link" href="#progress" data-toggle="scroll-to">Progress</a>
									<a className="nav-link" href="#spinners" data-toggle="scroll-to">Spinners</a>
								</nav>
							</NavScrollTo>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UiBootstrap;