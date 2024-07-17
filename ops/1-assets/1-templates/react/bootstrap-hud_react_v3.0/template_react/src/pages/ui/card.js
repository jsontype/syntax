import React, { useEffect, useState } from 'react';
import Highlight from 'react-highlight';
import Masonry from 'masonry-layout';
import { Card, CardHeader, CardBody, CardGroup, CardImgOverlay, CardExpandToggler } from './../../components/card/card.jsx';
import { NavScrollTo } from './../../components/nav-scroll-to/nav-scroll-to.jsx';

function UiCard() {
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
	
	useEffect(() => {
		fetch('/assets/data/ui/card-code-1.json').then(function(response) { return response.text(); }).then((html) => { setCode1(html); });
		fetch('/assets/data/ui/card-code-2.json').then(function(response) { return response.text(); }).then((html) => { setCode2(html); });
		fetch('/assets/data/ui/card-code-3.json').then(function(response) { return response.text(); }).then((html) => { setCode3(html); });
		fetch('/assets/data/ui/card-code-4.json').then(function(response) { return response.text(); }).then((html) => { setCode4(html); });
		fetch('/assets/data/ui/card-code-5.json').then(function(response) { return response.text(); }).then((html) => { setCode5(html); });
		fetch('/assets/data/ui/card-code-6.json').then(function(response) { return response.text(); }).then((html) => { setCode6(html); });
		fetch('/assets/data/ui/card-code-7.json').then(function(response) { return response.text(); }).then((html) => { setCode7(html); });
		fetch('/assets/data/ui/card-code-8.json').then(function(response) { return response.text(); }).then((html) => { setCode8(html); });
		fetch('/assets/data/ui/card-code-9.json').then(function(response) { return response.text(); }).then((html) => { setCode9(html); });
		fetch('/assets/data/ui/card-code-10.json').then(function(response) { return response.text(); }).then((html) => { setCode10(html); });
		
		new Masonry('[data-masonry]');
	});
	
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-xl-10">
					<div className="row">
						<div className="col-xl-9">
							<ul className="breadcrumb">
								<li className="breadcrumb-item"><a href="#/">UI KITS</a></li>
								<li className="breadcrumb-item active">CARD</li>
							</ul>
							
							<h1 className="page-header">
								Card <small>page header description goes here...</small>
							</h1>
							
							<hr className="mb-4" />
							
							<div id="basicUsage" className="mb-5">
								<h4>Basic Usage</h4>
								<p>
									Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.
									Please read the <a href="https://getbootstrap.com/docs/5.3/components/card/" target="_blank" rel="noreferrer">official Bootstrap documentation</a> for the full list of options.
								</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-xl-6">
												<Card>
													<CardHeader className="fw-bold small">
														CARD HEADER HERE
													</CardHeader>
													<CardBody>
														<h5 className="card-title">Card title</h5>
														<h6 className="card-subtitle mb-3 text-inverse text-opacity-50">Card subtitle</h6>
														<p className="card-text mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
														<a href="#/" className="card-link">Card link</a>
														<a href="#/" className="card-link">Another link</a>
													</CardBody>
												</Card>
											</div>
											<div className="col-xl-6">
												<Card>
													<CardHeader className="fw-bold small">
														CARD WITH LIST GROUP
													</CardHeader>
													<CardHeader className="bg-none p-0">
														<ul className="list-group list-group-flush">
															<li className="list-group-item">Cras justo odio</li>
															<li className="list-group-item">Dapibus ac facilisis in</li>
															<li className="list-group-item">Vestibulum at eros</li>
														</ul>
													</CardHeader>
													<CardBody>
														<a href="#/" className="card-link">Card link</a>
														<a href="#/" className="card-link">Another link</a>
													</CardBody>
												</Card>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code1}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="fullscreen" className="mb-5">
								<h4>Fullscreen (extended feature)</h4>
								<p>
									This is an extended feature from Bootstrap card. Add an attribute
									<code>data-toggle="card-expand"</code> to any link or button to trigger 
									the maximize or minimize the card element
								</p>
								<Card>
									<div className="row">
										<div className="col-lg-8">
											<CardBody>
												<Card>
													<CardHeader className="fw-bold small d-flex">
														<span className="flex-grow-1">CARD HEADER HERE</span>
														<CardExpandToggler />
													</CardHeader>
													<CardBody>
														<h5 className="card-title">Card title</h5>
														<h6 className="card-subtitle mb-3 text-inverse text-opacity-50">Card subtitle</h6>
														<p className="card-text mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
														<a href="#/" className="card-link">Card link</a>
														<a href="#/" className="card-link">Another link</a>
													</CardBody>
												</Card>
											</CardBody>
										</div>
									</div>
									<div className="hljs-container">
										<Highlight className='javascript'>{code2}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="sizing" className="mb-5">
								<h4>Sizing</h4>
								<p>
									Cards assume no specific <code>width</code> to start, so they’ll be 100% wide unless otherwise stated. You can change this as needed with custom CSS, grid classes, grid Sass mixins, or utilities.
								</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-sm-8">
												<Card>
													<CardBody>
														<h5 className="card-title">Special title treatment</h5>
														<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
														<a href="#/" className="btn btn-outline-theme">Go somewhere</a>
													</CardBody>
												</Card>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code3}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="navigation" className="mb-5">
								<h4>Navigation</h4>
								<p>
									Add some navigation to a card’s header (or block) with Bootstrap’s nav components.
								</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-xl-6">
												<div className="small text-inverse text-opacity-50 mb-3 fw-bold">NAV TABS</div>
												<Card className="mb-3">
													<CardHeader>
														<ul className="nav nav-tabs card-header-tabs">
															<li className="nav-item">
																<a className="nav-link active" href="#/">Active</a>
															</li>
															<li className="nav-item">
																<a className="nav-link" href="#/">Link</a>
															</li>
															<li className="nav-item">
																<a className="nav-link disabled" href="#/">Disabled</a>
															</li>
														</ul>
													</CardHeader>
													<CardBody>
														<h5 className="card-title">Special title treatment</h5>
														<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
														<a href="#/" className="btn btn-outline-theme">Go somewhere</a>
													</CardBody>
												</Card>
											</div>
											<div className="col-xl-6">
												<div className="small text-inverse text-opacity-50 mb-3 fw-bold">NAV PILLS</div>
												<Card className="mb-3">
													<CardHeader>
														<ul className="nav nav-pills card-header-pills">
															<li className="nav-item">
																<a className="nav-link active" href="#/">Active</a>
															</li>
															<li className="nav-item">
																<a className="nav-link" href="#/">Link</a>
															</li>
															<li className="nav-item">
																<a className="nav-link disabled" href="#/">Disabled</a>
															</li>
														</ul>
													</CardHeader>
													<CardBody>
														<h5 className="card-title">Special title treatment</h5>
														<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
														<a href="#/" className="btn btn-outline-theme">Go somewhere</a>
													</CardBody>
												</Card>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code4}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="images" className="mb-5">
								<h4>Images</h4>
								<p>
									Cards include a few options for working with images. Choose from appending “image caps” at either end of a card, overlaying images with card content, or simply embedding the image in a card.
								</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-xl-6">
												<div className="small text-inverse text-opacity-50 mb-3 fw-bold">IMAGE CAPS</div>
												<Card className="mb-3">
													<CardBody className="pb-0">
														<img src="https://via.placeholder.com/600x400/c9d2e3/212837" alt="" className="card-img-top" />
													</CardBody>
													<CardBody>
														<h5 className="card-title">Card title</h5>
														<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
														<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
													</CardBody>
												</Card>
											</div>
											<div className="col-xl-6">
												<div className="small text-inverse text-opacity-50 mb-3 fw-bold">IMAGE OVERLAY</div>
												<Card className="p-3 mb-3">
													<img src="https://via.placeholder.com/600x750/000000/ffffff" alt="" className="card-img" />
													<CardImgOverlay className="m-3">
														<h5 className="card-title">Card title</h5>
														<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
														<p className="card-text">Last updated 3 mins ago</p>
													</CardImgOverlay>
												</Card>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code5}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="horizontal" className="mb-5">
								<h4>Horizontal</h4>
								<p>
									Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way.
								</p>
								<Card>
									<CardBody>
										<Card className="mb-3">
											<CardBody>
												<div className="row gx-0 align-items-center">
													<div className="col-md-4">
														<img src="https://via.placeholder.com/480x360/c9d2e3/212837" alt="" className="card-img rounded-0" />
													</div>
													<div className="col-md-8">
														<CardBody>
															<h5 className="card-title">Card title</h5>
															<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
															<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
														</CardBody>
													</div>
												</div>
											</CardBody>
										</Card>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code6}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="cardStyles" className="mb-5">
								<h4>Card Styles</h4>
								<p>
									Cards include various options for customizing their backgrounds, borders, and color.
								</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-xl-6">
												<div className="small text-inverse text-opacity-50 mb-3 fw-bold">BACKGROUND AND BORDER</div>
												<Card className="border-theme bg-theme bg-opacity-25 mb-3">
													<CardHeader className="border-theme fw-bold small text-inverse">HEADER</CardHeader>
													<CardBody>
														<h5 className="card-title">Primary card title</h5>
														<p className="card-text text-inverse text-opacity-75">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
													</CardBody>
												</Card>
											</div>
											<div className="col-xl-6">
												<div className="small text-inverse text-opacity-50 mb-3 fw-bold">BORDER AND COLOR</div>
												<Card className="border-theme mb-3">
													<CardHeader className="border-theme text-theme fw-bold small">HEADER</CardHeader>
													<CardBody>
														<h5 className="card-title text-theme">Primary card title</h5>
														<p className="card-text text-theme text-opacity-75">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
													</CardBody>
												</Card>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code7}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="cardGroups" className="mb-5">
								<h4>Card groups</h4>
								<p>
									Use card groups to render cards as a single, attached element with equal width and height columns. Card groups use <code>display: flex;</code> to achieve their uniform sizing.
								</p>
								<Card>
									<CardBody>
										<CardGroup>
											<Card className="m-1">
												<CardBody>
													<h5 className="card-title">Card title</h5>
													<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
													<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
												</CardBody>
											</Card>
											<Card className="m-1">
												<CardBody>
													<h5 className="card-title">Card title</h5>
													<p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
													<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
												</CardBody>
											</Card>
											<Card className="m-1">
												<CardBody>
													<h5 className="card-title">Card title</h5>
													<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
													<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
												</CardBody>
											</Card>
										</CardGroup>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code8}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="gridCards" className="mb-5">
								<h4>Grid cards</h4>
								<p>
									Use the Bootstrap grid system and its <a href="/docs/5.2/layout/grid/#row-columns"><code>.row-cols</code> classes</a> to control how many grid columns (wrapped around your cards) you show per row. For example, here’s <code>.row-cols-1</code> laying out the cards on one column, and <code>.row-cols-md-2</code> splitting four cards to equal width across multiple rows, from the medium breakpoint up.
								</p>
								<Card>
									<CardBody>
										<div className="row row-cols-1 row-cols-md-2 g-3">
											<div className="col">
												<Card className="h-100">
													<CardBody>
														<h5 className="card-title">Card title</h5>
														<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
														<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
													</CardBody>
												</Card>
											</div>
											<div className="col">
												<Card className="h-100">
													<CardBody>
														<h5 className="card-title">Card title</h5>
														<p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
														<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
													</CardBody>
												</Card>
											</div>
											<div className="col">
												<Card className="h-100">
													<CardBody>
														<h5 className="card-title">Card title</h5>
														<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
														<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
													</CardBody>
												</Card>
											</div>
											<div className="col">
												<Card className="h-100">
													<CardBody>
														<h5 className="card-title">Card title</h5>
														<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
														<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
													</CardBody>
												</Card>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code9}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="cardColumns" className="mb-5">
								<h4>Card columns</h4>
								<p>
									In <code>v5</code>, cards can be organized into Masonry-like columns with masonry javascript included.
								</p>
								<Card>
									<CardBody>
										<div className="row" data-masonry='{"percentPosition": true }'>
											<div className="col-sm-6 col-lg-4 mb-4">
												<Card>
													<CardBody>
														<h5 className="card-title">Card title that wraps to a new line</h5>
														<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
													</CardBody>
												</Card>
											</div>
											<div className="col-sm-6 col-lg-4 mb-4">
												<Card className="p-3">
													<blockquote className="blockquote mb-0 card-body">
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
														<footer className="blockquote-footer">
															<small className="text-muted">
																Someone famous in <cite title="Source Title">Source Title</cite>
															</small>
														</footer>
													</blockquote>
												</Card>
											</div>
											<div className="col-sm-6 col-lg-4 mb-4">
												<Card>
													<CardBody>
														<h5 className="card-title">Card title</h5>
														<p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
														<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
													</CardBody>
												</Card>
											</div>
											<div className="col-sm-6 col-lg-4 mb-4">
												<Card className="text-center">
													<blockquote className="blockquote mb-0 card-body">
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
														<footer className="blockquote-footer text-inverse">
															<small>
																Someone famous in <cite title="Source Title">Source Title</cite>
															</small>
														</footer>
													</blockquote>
												</Card>
											</div>
											<div className="col-sm-6 col-lg-4 mb-4">
												<Card className="text-center">
													<CardBody>
														<h5 className="card-title">Card title</h5>
														<p className="card-text">This card has a regular title and short paragraphy of text below it.</p>
														<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
													</CardBody>
												</Card>
											</div>
											<div className="col-sm-6 col-lg-4 mb-4">
												<Card className="p-3 text-end">
													<blockquote className="blockquote mb-0">
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
														<footer className="blockquote-footer">
															<small className="text-muted">
																Someone famous in <cite title="Source Title">Source Title</cite>
															</small>
														</footer>
													</blockquote>
												</Card>
											</div>
											<div className="col-sm-6 col-lg-4 mb-4">
												<Card>
													<CardBody>
														<h5 className="card-title">Card title</h5>
														<p className="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
														<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
													</CardBody>
												</Card>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code10}</Highlight>
									</div>
								</Card>
							</div>
						</div>
						<div className="col-xl-3">
							<NavScrollTo>
								<nav className="nav">
									<a className="nav-link" href="#basicUsage" data-toggle="scroll-to">Basic usage</a>
									<a className="nav-link" href="#fullscreen" data-toggle="scroll-to">Fullscreen (extended feature)</a>
									<a className="nav-link" href="#sizing" data-toggle="scroll-to">Sizing</a>
									<a className="nav-link" href="#navigation" data-toggle="scroll-to">Navigation</a>
									<a className="nav-link" href="#images" data-toggle="scroll-to">Images</a>
									<a className="nav-link" href="#horizontal" data-toggle="scroll-to">Horizontal</a>
									<a className="nav-link" href="#cardStyles" data-toggle="scroll-to">Card styles</a>
									<a className="nav-link" href="#cardGroups" data-toggle="scroll-to">Card groups</a>
									<a className="nav-link" href="#gridCards" data-toggle="scroll-to">Grid cards</a>
									<a className="nav-link" href="#cardColumns" data-toggle="scroll-to">Card columns</a>
								</nav>
							</NavScrollTo>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UiCard;