import React, { useEffect, useState } from 'react';
import Highlight from 'react-highlight';
import { NavScrollTo } from './../../components/nav-scroll-to/nav-scroll-to.jsx';
import { Card, CardBody } from './../../components/card/card.jsx';

function Helper() {
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
	const [code13, setCode13] = useState();
	const [code14, setCode14] = useState();
	const [code15, setCode15] = useState();
	const [code16, setCode16] = useState();
	
	useEffect(() => {
		fetch('/assets/data/helper/code-1.json').then(function(response) { return response.text(); }).then((html) => { setCode1(html); });
		fetch('/assets/data/helper/code-2.json').then(function(response) { return response.text(); }).then((html) => { setCode2(html); });
		fetch('/assets/data/helper/code-3.json').then(function(response) { return response.text(); }).then((html) => { setCode3(html); });
		fetch('/assets/data/helper/code-4.json').then(function(response) { return response.text(); }).then((html) => { setCode4(html); });
		fetch('/assets/data/helper/code-5.json').then(function(response) { return response.text(); }).then((html) => { setCode5(html); });
		fetch('/assets/data/helper/code-6.json').then(function(response) { return response.text(); }).then((html) => { setCode6(html); });
		fetch('/assets/data/helper/code-7.json').then(function(response) { return response.text(); }).then((html) => { setCode7(html); });
		fetch('/assets/data/helper/code-8.json').then(function(response) { return response.text(); }).then((html) => { setCode8(html); });
		fetch('/assets/data/helper/code-9.json').then(function(response) { return response.text(); }).then((html) => { setCode9(html); });
		fetch('/assets/data/helper/code-10.json').then(function(response) { return response.text(); }).then((html) => { setCode10(html); });
		fetch('/assets/data/helper/code-11.json').then(function(response) { return response.text(); }).then((html) => { setCode11(html); });
		fetch('/assets/data/helper/code-12.json').then(function(response) { return response.text(); }).then((html) => { setCode12(html); });
		fetch('/assets/data/helper/code-13.json').then(function(response) { return response.text(); }).then((html) => { setCode13(html); });
		fetch('/assets/data/helper/code-14.json').then(function(response) { return response.text(); }).then((html) => { setCode14(html); });
		fetch('/assets/data/helper/code-15.json').then(function(response) { return response.text(); }).then((html) => { setCode15(html); });
		fetch('/assets/data/helper/code-16.json').then(function(response) { return response.text(); }).then((html) => { setCode16(html); });
	});
	
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-xl-10">
					<div className="row">
						<div className="col-xl-9">
							<h1 className="page-header">
								Helper <small>page header description goes here...</small>
							</h1>
							
							<hr className="mb-4" />
							
							<div id="borders" className="mb-5">
								<h4>Borders</h4>
								<p>Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element. Please read the <a href="https://getbootstrap.com/docs/5.3/utilities/borders/" target="_blank" rel="noreferrer">official documentation</a> for the full list of options.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-lg mb-lg-0 mb-3">
												<div className="small fw-bold text-inverse text-opacity-50 mb-3">ADDITIVE</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px border me-2 bg-inverse bg-opacity-15"></div> .border</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px border-top me-2 bg-inverse bg-opacity-15"></div> .border-top</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px border-end me-2 bg-inverse bg-opacity-15"></div> .border-end</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px border-bottom me-2 bg-inverse bg-opacity-15"></div> .border-bottom</div>
												<div className="d-flex align-items-center mb-4"><div className="w-30px h-30px border-start me-2 bg-inverse bg-opacity-15"></div> .border-start</div>
												
												<div className="small fw-bold text-inverse text-opacity-50 mb-3">SUBTRACTIVE (REMOVE)</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px border border-0 me-2 bg-inverse bg-opacity-15"></div> .border-0</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px border border-top-0 me-2 bg-inverse bg-opacity-15"></div> .border-top-0</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px border border-end-0 me-2 bg-inverse bg-opacity-15"></div> .border-end-0</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px border border-bottom-0 me-2 bg-inverse bg-opacity-15"></div> .border-bottom-0</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px border border-start-0 me-2 bg-inverse bg-opacity-15"></div> .border-start-0</div>
											</div>
											
											<div className="col-lg">
												<div className="small fw-bold text-inverse text-opacity-50 mb-2">BORDER COLOR</div>
												<div className="d-flex align-items-center mb-1">
													<div className="w-30px h-30px border border-primary me-1 bg-inverse bg-opacity-15"></div>
													<div className="w-30px h-30px border border-primary-subtle me-2 bg-inverse bg-opacity-15"></div> 
													.border-primary / subtle
												</div>
												<div className="d-flex align-items-center mb-1">
													<div className="w-30px h-30px border border-secondary me-1 bg-inverse bg-opacity-15"></div>
													<div className="w-30px h-30px border border-secondary-subtle me-2 bg-inverse bg-opacity-15"></div> 
													.border-secondary / subtle
												</div>
												<div className="d-flex align-items-center mb-1">
													<div className="w-30px h-30px border border-success me-1 bg-inverse bg-opacity-15"></div>
													<div className="w-30px h-30px border border-success-subtle me-2 bg-inverse bg-opacity-15"></div> 
													.border-success / subtle
												</div>
												<div className="d-flex align-items-center mb-1">
													<div className="w-30px h-30px border border-danger me-1 bg-inverse bg-opacity-15"></div>
													<div className="w-30px h-30px border border-danger-subtle me-2 bg-inverse bg-opacity-15"></div>
													.border-danger / subtle
												</div>
												<div className="d-flex align-items-center mb-1">
													<div className="w-30px h-30px border border-warning me-1 bg-inverse bg-opacity-15"></div>
													<div className="w-30px h-30px border border-warning-subtle me-2 bg-inverse bg-opacity-15"></div>
													.border-warning / subtle
												</div>
												<div className="d-flex align-items-center mb-1">
													<div className="w-30px h-30px border border-info me-1 bg-inverse bg-opacity-15"></div> 
													<div className="w-30px h-30px border border-info-subtle me-2 bg-inverse bg-opacity-15"></div> 
													.border-info / subtle
												</div>
												<div className="d-flex align-items-center mb-1">
													<div className="w-30px h-30px border border-light me-1 bg-inverse bg-opacity-15"></div> 
													<div className="w-30px h-30px border border-light-subtle me-2 bg-inverse bg-opacity-15"></div> 
													.border-light / subtle
												</div>
												<div className="d-flex align-items-center mb-1">
													<div className="w-30px h-30px border border-dark me-1 bg-inverse bg-opacity-15"></div> 
													<div className="w-30px h-30px border border-dark-subtle me-2 bg-inverse bg-opacity-15"></div> 
													.border-dark / subtle
												</div>
												<div className="d-flex align-items-center mb-1">
													<div className="w-30px h-30px border border-inverse me-2 bg-inverse bg-opacity-15"></div> 
													.border-inverse
												</div>
												<div className="d-flex align-items-center mb-1">
													<div className="w-30px h-30px border border-white me-2 bg-inverse bg-opacity-15"></div> 
													.border-white
												</div>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code1}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="borderRadius" className="mb-5">
								<h4>Border-radius</h4>
								<p>Add classes to an element to easily round its corners. <a href="https://getbootstrap.com/docs/5.3/utilities/borders/#border-radius" target="_blank" rel="noreferrer">official documentation</a> for the full list of options.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-lg">
												<div className="small fw-bold text-inverse text-opacity-50 mb-2">BORDER RADIUS</div>
												<div className="d-flex align-items-center mb-1"><div className="w-60px h-30px me-2 bg-inverse bg-opacity-15 rounded"></div> .rounded</div>
												<div className="d-flex align-items-center mb-1"><div className="w-60px h-30px me-2 bg-inverse bg-opacity-15 rounded-top"></div> .rounded-top</div>
												<div className="d-flex align-items-center mb-1"><div className="w-60px h-30px me-2 bg-inverse bg-opacity-15 rounded-end"></div> .rounded-end</div>
												<div className="d-flex align-items-center mb-1"><div className="w-60px h-30px me-2 bg-inverse bg-opacity-15 rounded-bottom"></div> .rounded-bottom</div>
												<div className="d-flex align-items-center mb-1"><div className="w-60px h-30px me-2 bg-inverse bg-opacity-15 rounded-start"></div> .rounded-start</div>
												<div className="d-flex align-items-center mb-1"><div className="w-60px h-30px me-2 bg-inverse bg-opacity-15 rounded-pill"></div> .rounded-pill</div>
												<div className="d-flex align-items-center mb-1"><div className="w-60px h-30px me-2 bg-inverse bg-opacity-15 rounded-circle"></div> .rounded-circle</div>
												<div className="d-flex align-items-center mb-4"><div className="w-60px h-30px me-2 bg-inverse bg-opacity-15 rounded-0"></div> .rounded-0</div>
											</div>
											<div className="col-lg">
												<div className="small fw-bold text-inverse text-opacity-50 mb-2">BORDER RADIUS SIZES</div>
												<div className="d-flex align-items-center mb-1"><div className="w-60px h-30px me-2 bg-inverse bg-opacity-15 rounded"></div> .rounded</div>
												<div className="d-flex align-items-center mb-1"><div className="w-60px h-30px me-2 bg-inverse bg-opacity-15 rounded-1"></div> .rounded-1</div>
												<div className="d-flex align-items-center mb-1"><div className="w-60px h-30px me-2 bg-inverse bg-opacity-15 rounded-2"></div> .rounded-2</div>
												<div className="d-flex align-items-center mb-1"><div className="w-60px h-30px me-2 bg-inverse bg-opacity-15 rounded-3"></div> .rounded-3</div>
												<div className="d-flex align-items-center mb-1"><div className="w-60px h-30px me-2 bg-inverse bg-opacity-15 rounded-4"></div> .rounded-4</div>
												<div className="d-flex align-items-center mb-4"><div className="w-60px h-30px me-2 bg-inverse bg-opacity-15 rounded-5"></div> .rounded-5</div>
											</div>
											<div className="col-lg-12">
												<div className="small fw-bold text-inverse text-opacity-50 mb-2">REMOVE SIDE BORDER RADIUS</div>
												<div className="row">
													<div className="col-lg-6">
														<div className="d-flex align-items-center mb-1"><div className="w-60px h-30px me-2 bg-inverse bg-opacity-15 rounded rounded-top-0"></div> .rounded-top-0</div>
														<div className="d-flex align-items-center mb-1"><div className="w-60px h-30px me-2 bg-inverse bg-opacity-15 rounded rounded-top-start-0"></div> .rounded-top-start-0</div>
														<div className="d-flex align-items-center mb-1"><div className="w-60px h-30px me-2 bg-inverse bg-opacity-15 rounded rounded-top-end-0"></div> .rounded-top-end-0</div>
													</div>
													<div className="col-lg-6">
														<div className="d-flex align-items-center mb-1"><div className="w-60px h-30px me-2 bg-inverse bg-opacity-15 rounded rounded-bottom-0"></div> .rounded-bottom-0</div>
														<div className="d-flex align-items-center mb-1"><div className="w-60px h-30px me-2 bg-inverse bg-opacity-15 rounded rounded-bottom-start-0"></div> .rounded-bottom-start-0</div>
														<div className="d-flex align-items-center mb-1"><div className="w-60px h-30px me-2 bg-inverse bg-opacity-15 rounded rounded-bottom-end-0"></div> .rounded-bottom-end-0</div>
													</div>
												</div>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code2}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="textColor" className="mb-5">
								<h4>Text color</h4>
								<p>Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too. Please read the <a href="https://getbootstrap.com/docs/5.3/utilities/colors/#color" target="_blank" rel="noreferrer">official documentation</a> for the full list of options.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-lg mb-lg-0 mb-3">
												<div className="small fw-bold text-inverse text-opacity-50 mb-2">BOOTSTRAP TEXT COLOR</div>
												<div className="d-flex align-items-center mb-1">
													<div className="w-30px h-30px me-1 border fs-16px d-flex align-items-center justify-content-center text-primary font-weight-bolder">T</div>
													<div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-primary-emphasis font-weight-bolder">T</div> 
													.text-primary / emphasis
												</div>
												<div className="d-flex align-items-center mb-1">
													<div className="w-30px h-30px me-1 border fs-16px d-flex align-items-center justify-content-center text-secondary font-weight-bolder">T</div> 
													<div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-secondary-emphasis font-weight-bolder">T</div> 
													.text-secondary / emphasis
												</div>
												<div className="d-flex align-items-center mb-1">
													<div className="w-30px h-30px me-1 border fs-16px d-flex align-items-center justify-content-center text-success font-weight-bolder">T</div>
													<div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-success-emphasis font-weight-bolder">T</div>
													.text-success / emphasis
												</div>
												<div className="d-flex align-items-center mb-1">
													<div className="w-30px h-30px me-1 border fs-16px d-flex align-items-center justify-content-center text-danger font-weight-bolder">T</div>
													<div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-danger-emphasis font-weight-bolder">T</div>
													.text-danger / emphasis
												</div>
												<div className="d-flex align-items-center mb-1">
													<div className="w-30px h-30px me-1 border fs-16px d-flex align-items-center justify-content-center text-warning font-weight-bolder">T</div>
													<div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-warning-emphasis font-weight-bolder">T</div>
													.text-warning / emphasis
												</div>
												<div className="d-flex align-items-center mb-1">
													<div className="w-30px h-30px me-1 border fs-16px d-flex align-items-center justify-content-center text-info font-weight-bolder">T</div>
													<div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-info-emphasis font-weight-bolder">T</div>
													.text-info / emphasis
												</div>
												<div className="d-flex align-items-center mb-1">
													<div className="w-30px h-30px me-1 border fs-16px d-flex align-items-center justify-content-center text-dark font-weight-bolder">T</div>
													<div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-dark-emphasis font-weight-bolder">T</div>
													.text-dark / emphasis
												</div>
												<div className="d-flex align-items-center mb-1">
													<div className="w-30px h-30px me-1 border fs-16px d-flex align-items-center justify-content-center text-black font-weight-bolder">T</div>
													<div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-black-50 font-weight-bolder">T</div>
													.text-black / .text-black-50
												</div>
												<div className="d-flex align-items-center mb-1">
													<div className="w-30px h-30px me-1 border fs-16px d-flex align-items-center justify-content-center text-light font-weight-bolder bg-inverse border-inverse">T</div>
													<div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-light-emphasis font-weight-bolder bg-inverse border-inverse">T</div>
													.text-light / emphasis
												</div>
												<div className="d-flex align-items-center mb-1">
													<div className="w-30px h-30px me-1 border fs-16px d-flex align-items-center justify-content-center text-white font-weight-bolder bg-inverse border-inverse">T</div>
													<div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-white-50 font-weight-bolder bg-inverse border-inverse">T</div>
													.text-white / .text-white-50
												</div>
												<div className="d-flex align-items-center mb-1">
													<div className="w-30px h-30px me-1 border fs-16px d-flex align-items-center justify-content-center text-body font-weight-bolder">T</div>
													<div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-body-emphasis font-weight-bolder">T</div>
													.text-body / emphasis
												</div>
												<div className="d-flex align-items-center mb-1">
													<div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-inverse font-weight-bolder">T</div>
													.text-inverse
												</div>
												<div className="d-flex align-items-center mb-1">
													<div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-inverse-secondary font-weight-bolder">T</div>
													.text-inverse-secondary
												</div>
												<div className="d-flex align-items-center mb-1">
													<div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-inverse-tertiary font-weight-bolder">T</div>
													.text-inverse-tertiary
												</div>
												<div className="d-flex align-items-center mb-1">
													<div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-muted font-weight-bolder">T</div>
													.text-muted
												</div>
											</div>
											<div className="col-lg">
												<div className="small fw-bold text-inverse text-opacity-50 mb-2">EXTENDED TEXT COLOR</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-teal font-weight-bolder">T</div> .text-teal</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-indigo font-weight-bolder">T</div> .text-indigo</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-purple font-weight-bolder">T</div> .text-purple</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-yellow font-weight-bolder">T</div> .text-yellow</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-gray-100 font-weight-bolder">T</div> .text-gray-100</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-gray-200 font-weight-bolder">T</div> .text-gray-200</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-gray-300 font-weight-bolder">T</div> .text-gray-300</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-gray-400 font-weight-bolder">T</div> .text-gray-400</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-gray-500 font-weight-bolder">T</div> .text-gray-500</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-gray-600 font-weight-bolder">T</div> .text-gray-600</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-gray-700 font-weight-bolder">T</div> .text-gray-700</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-gray-800 font-weight-bolder">T</div> .text-gray-800</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-gray-900 font-weight-bolder">T</div> .text-gray-900</div>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code3}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="textTransparentColor" className="mb-5">
								<h4>Text transparent color</h4>
								<p>We are now support text transparent from 10% to 90% opacity. It is also applicable for any other text class as well <code>.text-teal-transparent-*</code>.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-lg mb-lg-0 mb-3">
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-theme text-opacity-5 font-weight-bolder">T</div> .text-opacity-5</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-theme text-opacity-10 font-weight-bolder">T</div> .text-opacity-10</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-theme text-opacity-15 font-weight-bolder">T</div> .text-opacity-15</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-theme text-opacity-20 font-weight-bolder">T</div> .text-opacity-20</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-theme text-opacity-25 font-weight-bolder">T</div> .text-opacity-25</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-theme text-opacity-30 font-weight-bolder">T</div> .text-opacity-30</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-theme text-opacity-35 font-weight-bolder">T</div> .text-opacity-35</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-theme text-opacity-40 font-weight-bolder">T</div> .text-opacity-40</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-theme text-opacity-45 font-weight-bolder">T</div> .text-opacity-45</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-theme text-opacity-50 font-weight-bolder">T</div> .text-opacity-50</div>
											</div>
											<div className="col-lg">
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-theme text-opacity-55 font-weight-bolder">T</div> .text-opacity-55</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-theme text-opacity-60 font-weight-bolder">T</div> .text-opacity-60</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-theme text-opacity-65 font-weight-bolder">T</div> .text-opacity-65</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-theme text-opacity-70 font-weight-bolder">T</div> .text-opacity-70</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-theme text-opacity-75 font-weight-bolder">T</div> .text-opacity-75</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-theme text-opacity-80 font-weight-bolder">T</div> .text-opacity-80</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-theme text-opacity-85 font-weight-bolder">T</div> .text-opacity-85</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-theme text-opacity-90 font-weight-bolder">T</div> .text-opacity-90</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-theme text-opacity-95 font-weight-bolder">T</div> .text-opacity-95</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px me-2 border fs-16px d-flex align-items-center justify-content-center text-theme font-weight-bolder">T</div> .text-theme</div>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code4}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="backgroundColor" className="mb-5">
								<h4>Background color</h4>
								<p>Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. Background utilities <b>do not set color</b>, so in some cases you’ll want to use <code>.text-*</code> utilities. Please read the <a href="https://getbootstrap.com/docs/5.3/utilities/colors/#background-color" target="_blank" rel="noreferrer">official documentation</a> for the full list of options.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-lg mb-lg-0 mb-3">
												<div className="small fw-bold text-inverse text-opacity-50 mb-2">BOOTSTRAP BACKGROUND COLOR</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-primary me-1"></div> <div className="w-30px h-30px rounded bg-primary-subtle me-2"></div> .bg-primary / subtle</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-secondary me-1"></div> <div className="w-30px h-30px rounded bg-secondary-subtle me-2"></div> .bg-secondary / subtle</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-success me-1"></div> <div className="w-30px h-30px rounded bg-success-subtle me-2"></div> .bg-success / subtle</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-danger me-1"></div> <div className="w-30px h-30px rounded bg-danger-subtle me-2"></div> .bg-danger / subtle</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-warning me-1"></div> <div className="w-30px h-30px rounded bg-warning-subtle me-2"></div> .bg-warning / subtle</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-info me-1"></div> <div className="w-30px h-30px rounded bg-info-subtle me-2"></div> .bg-info / subtle</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-light me-1"></div> <div className="w-30px h-30px rounded bg-light-subtle me-2"></div> .bg-light / subtle</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-dark me-1"></div> <div className="w-30px h-30px rounded bg-dark-subtle me-2"></div> .bg-dark / subtle</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-inverse me-2"></div> .bg-inverse</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded border bg-white me-2"></div> .bg-white</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded border bg-transparent me-2"></div> .bg-transparent</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded border bg-none me-2"></div> .bg-none</div>
											</div>
											<div className="col-lg">
												<div className="small fw-bold text-inverse text-opacity-50 mb-2">EXTENDED BACKGROUND COLOR</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-teal me-2"></div> .bg-teal</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-indigo me-2"></div> .bg-indigo</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-purple me-2"></div> .bg-purple</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-yellow me-2"></div> .bg-yellow</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gray-100 me-2"></div> .bg-gray-100</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gray-200 me-2"></div> .bg-gray-200</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gray-300 me-2"></div> .bg-gray-300</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gray-400 me-2"></div> .bg-gray-400</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gray-500 me-2"></div> .bg-gray-500</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gray-600 me-2"></div> .bg-gray-600</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gray-700 me-2"></div> .bg-gray-700</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gray-800 me-2"></div> .bg-gray-800</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gray-900 me-2"></div> .bg-gray-900</div>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code5}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="backgroundGradientColor" className="mb-5">
								<h4>Background gradient color</h4>
								<p>We have created every single color gradient based on the color variable defined in scss files <code>/scss/_variables.scss</code>. You may add more color code and class that you want as well.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-lg mb-lg-0 mb-3">
												<div className="small fw-bold text-inverse text-opacity-50 mb-2">BOOTSTRAP GRADIENT CLASS</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient bg-primary me-2"></div> .bg-gradient.bg-primary</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient bg-secondary me-2"></div> .bg-gradient.bg-secondary</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient bg-success me-2"></div> .bg-gradient.bg-success</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient bg-danger me-2"></div> .bg-gradient.bg-danger</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient bg-warning me-2"></div> .bg-gradient.bg-warning</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient bg-info me-2"></div> .bg-gradient.bg-info</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient bg-light me-2"></div> .bg-gradient.bg-light</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient bg-dark me-2"></div> .bg-gradient.bg-dark</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient bg-black me-2"></div> .bg-gradient.bg-black</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient bg-inverse me-2"></div> .bg-gradient.bg-inverse</div>
											</div>
											<div className="col-lg">
												<div className="small fw-bold text-inverse text-opacity-50 mb-2">EXTENDED GRADIENT</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient bg-teal me-2"></div> .bg-gradient.bg-teal</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient bg-indigo me-2"></div> .bg-gradient.bg-indigo</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient bg-purple me-2"></div> .bg-gradient.bg-purple</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient bg-yellow me-2"></div> .bg-gradient.bg-yellow</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient bg-gray-100 me-2"></div> .bg-gradient.bg-gray-100</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient bg-gray-200 me-2"></div> .bg-gradient.bg-gray-200</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient bg-gray-300 me-2"></div> .bg-gradient.bg-gray-300</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient bg-gray-400 me-2"></div> .bg-gradient.bg-gray-400</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient bg-gray-500 me-2"></div> .bg-gradient.bg-gray-500</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient bg-gray-600 me-2"></div> .bg-gradient.bg-gray-600</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient bg-gray-700 me-2"></div> .bg-gradient.bg-gray-700</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient bg-gray-800 me-2"></div> .bg-gradient.bg-gray-800</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient bg-gray-900 me-2"></div> .bg-gradient.bg-gray-900</div>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code6}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="backgroundGradientFancyColor" className="mb-5">
								<h4>Background gradient fancy color</h4>
								<p>We have create different fancy yet beautiful linear gradient based on the color variable that we have. You may add more combination in <code>/scss/_helper.scss</code></p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-lg mb-lg-0 mb-3">
												<div className="small fw-bold text-inverse text-opacity-50 mb-2">FANCY GRADIENT</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient-orange-red me-2"></div> .bg-gradient-orange-red</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient-red-orange me-2"></div> .bg-gradient-red-orange</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient-red-pink me-2"></div> .bg-gradient-red-pink</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient-yellow-red me-2"></div> .bg-gradient-yellow-red</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient-yellow-orange me-2"></div> .bg-gradient-yellow-orange</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient-yellow-green me-2"></div> .bg-gradient-yellow-green</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient-indigo-blue me-2"></div> .bg-gradient-indigo-blue</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient-indigo-teal me-2"></div> .bg-gradient-indigo-teal</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient-blue-indigo me-2"></div> .bg-gradient-blue-indigo</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient-blue-cyan me-2"></div> .bg-gradient-blue-cyan</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient-cyan-blue me-2"></div> .bg-gradient-cyan-blue</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient-cyan-indigo me-2"></div> .bg-gradient-cyan-indigo</div>
											</div>
											<div className="col-lg">
												<div className="small fw-bold text-inverse text-opacity-50 mb-2">CUSTOM GRADIENT</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient-custom-orange me-2"></div> .bg-gradient-custom-orange</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient-custom-pink me-2"></div> .bg-gradient-custom-pink</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient-custom-teal me-2"></div> .bg-gradient-custom-teal</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient-custom-indigo me-2"></div> .bg-gradient-custom-indigo</div>
												<div className="d-flex align-items-center mb-1"><div className="w-30px h-30px rounded bg-gradient-custom-blue me-2"></div> .bg-gradient-custom-blue</div>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code7}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="displayProperty" className="mb-5">
								<h4>Display property</h4>
								<p>Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing. Please read the <a href="https://getbootstrap.com/docs/5.3/utilities/display/" target="_blank" rel="noreferrer">official documentation</a> for the full list of options.</p>
								<Card>
									<CardBody>
										<p>
											Display utility classes that apply to all breakpoints, from <code>xs</code> to <code>xl</code>. As such, the classes are named using the format:
										</p>
										<ul>
											<li><code>.d-(value)</code> for <code>xs</code></li>
											<li><code>.d-(breakpoint)-(value)</code> for <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.</li>
										</ul>
										<p>
											Where <code>(value)</code> is one of:
										</p>
										<ul>
											<li><code>none</code></li>
											<li><code>inline</code></li>
											<li><code>inline-block</code></li>
											<li><code>block</code></li>
											<li><code>grid</code></li>
											<li><code>table</code></li>
											<li><code>table-cell</code></li>
											<li><code>table-row</code></li>
											<li><code>flex</code></li>
											<li><code>inline-flex</code></li>
										</ul>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code8}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="ratios" className="mb-5">
								<h4>Ratios</h4>
								<p>Use generated pseudo elements to make an element maintain the aspect ratio of your choosing. Perfect for responsively handling video or slideshow embeds based on the width of the parent. Please read the <a href="https://getbootstrap.com/docs/5.3/helpers/ratio/" target="_blank" rel="noreferrer">official documentation</a> for the full list of options.</p>
								<Card>
									<CardBody>
										<p>
											Use the ratio helper to manage the aspect ratios of external content like <code>&lt;iframe&gt;</code>s, <code>&lt;embed&gt;</code>s, <code>&lt;video&gt;</code>s, and <code>&lt;object&gt;</code>s. These helpers also can be used on any standard HTML child element (e.g., a <code>&lt;div&gt;</code> or <code>&lt;img&gt;</code>). Styles are applied from the parent <code>.ratio</code> class directly to the child.
										</p>
										<div className="ratio ratio-16x9">
											<iframe title="youtube" className="embed-responsive-item" src="https://www.youtube.com/embed/3Kf-FlECN7M?rel=0" allowFullScreen></iframe>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code9}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="flex" className="mb-5">
								<h4>Flex</h4>
								<p>Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary. Please read the <a href="https://getbootstrap.com/docs/5.3/utilities/flex/" target="_blank" rel="noreferrer">official documentation</a> for the full list of options.</p>
								<Card>
									<div className="table-responsive">
										<table className="table table-card mb-0 table-bordered">
											<thead>
												<tr className="border-top-0">
													<th className="border-start-0 border-end-0">Flex</th>
													<th className="border-start-0 border-end-0">Align items</th>
													<th className="border-start-0 border-end-0">Fill / Grow / Wrap</th>
												</tr>
											</thead>
											<tbody>
												<tr className="border-bottom-0">
													<td className="border-start-0">
														<div><code>.d-flex</code></div>
														<div><code>.d-inline-flex</code></div>
														<div><code>.d-sm-flex</code></div>
														<div><code>.d-sm-inline-flex</code></div>
														<div><code>.d-md-flex</code></div>
														<div><code>.d-md-inline-flex</code></div>
														<div><code>.d-lg-flex</code></div>
														<div><code>.d-lg-inline-flex</code></div>
														<div><code>.d-xl-flex</code></div>
														<div><code>.d-xl-inline-flex</code></div>
														<div><code>.d-xxl-flex</code></div>
														<div><code>.d-xxl-inline-flex</code></div>
													</td>
													<td>
														<div><code>.align-items-start</code></div>
														<div><code>.align-items-end</code></div>
														<div><code>.align-items-center</code></div>
														<div><code>.align-items-baseline</code></div>
														<div><code>.align-items-stretch</code></div>
														<hr />
														<div><code>.align-self-start</code></div>
														<div><code>.align-self-end</code></div>
														<div><code>.align-self-center</code></div>
														<div><code>.align-self-baseline</code></div>
														<div><code>.align-self-stretch</code></div>
														<hr />
														<div><code>.align-content-start</code></div>
														<div><code>.align-content-end</code></div>
														<div><code>.align-content-center</code></div>
														<div><code>.align-content-between</code></div>
														<div><code>.align-content-around</code></div>
														<div><code>.align-content-stretch</code></div>
													</td>
													<td className="border-end-0">
														<div><code>.flex-fill</code></div>
														<div><code>.flex-grow-0</code></div>
														<div><code>.flex-shrink-0</code></div>
														<hr />
														<div><code>.flex-nowrap</code></div>
														<div><code>.flex-wrap</code></div>
														<div><code>.flex-wrap-reverse</code></div>
														<hr />
														<div><code>.order-(1|2|3|4|5|6<br />|7|8|9|10|11|12)</code></div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
									<div className="hljs-container">
										<Highlight className='html'>{code10}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="floatPositionOverflow" className="mb-5">
								<h4>Float / Position / Overflow</h4>
								<p>
									Toggle floats on any element, across any breakpoint, using our responsive float utilities.
								</p>
								<Card>
									<div className="table-responsive">
										<table className="table table-card mb-0 table-bordered">
											<thead>
												<tr className="border-top-0">
													<th className="border-start-0 border-end-0">Float</th>
													<th className="border-start-0 border-end-0">Position</th>
													<th className="border-start-0 border-end-0">Overflow</th>
												</tr>
											</thead>
											<tbody>
												<tr className="border-bottom-0">
													<td className="border-start-0">
														<div><code>.float-start</code></div>
														<div><code>.float-sm-start</code></div>
														<div><code>.float-md-start</code></div>
														<div><code>.float-lg-start</code></div>
														<div><code>.float-xl-start</code></div>
														<hr />
														<div><code>.float-end</code></div>
														<div><code>.float-sm-end</code></div>
														<div><code>.float-md-end</code></div>
														<div><code>.float-lg-end</code></div>
														<div><code>.float-xl-end</code></div>
														<hr />
														<div><code>.float-none</code></div>
														<div><code>.float-sm-none</code></div>
														<div><code>.float-md-none</code></div>
														<div><code>.float-lg-none</code></div>
														<div><code>.float-xl-none</code></div>
													</td>
													<td>
														<div><code>.position-static</code></div>
														<div><code>.position-relative</code></div>
														<div><code>.position-absolute</code></div>
														<div><code>.position-fixed</code></div>
														<div><code>.position-sticky</code></div>
														<hr />
														<div><code>.fixed-top</code></div>
														<div><code>.fixed-bottom</code></div>
														<hr />
														<div><code>.desktop-sticky-top</code></div>
														<hr />
														<div><code>.top-0</code></div>
														<div><code>.end-0</code></div>
														<div><code>.bottom-0</code></div>
														<div><code>.start-0</code></div>
														<div><code>.top-auto</code></div>
														<div><code>.end-auto</code></div>
														<div><code>.bottom-auto</code></div>
														<div><code>.start-auto</code></div>
													</td>
													<td className="border-end-0">
														<div><code>.overflow-auto</code></div>
														<div><code>.overflow-hidden</code></div>
														<div><code>.overflow-visible</code></div>
														<div><code>.overflow-scroll</code></div>
														<hr />
														<div><code>.overflow-x-auto</code></div>
														<div><code>.overflow-x-hidden</code></div>
														<div><code>.overflow-x-visible</code></div>
														<div><code>.overflow-x-scroll</code></div>
														<hr />
														<div><code>.overflow-y-auto</code></div>
														<div><code>.overflow-y-hidden</code></div>
														<div><code>.overflow-y-visible</code></div>
														<div><code>.overflow-y-scroll</code></div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</Card>
							</div>
							
							<div id="shadows" className="mb-5">
								<h4>Shadows</h4>
								<p>Add or remove shadows to elements with box-shadow utilities. Please read the <a href="https://getbootstrap.com/docs/5.3/utilities/shadows/" target="_blank" rel="noreferrer">official documentation</a> for the full list of options.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-lg mb-lg-0 mb-3">
												<div className="d-flex align-items-center mb-2">
													<div className="w-50px h-50px no-shadow border border-light me-2"></div> .shadow-none
												</div>
												<div className="d-flex align-items-center mb-2">
													<div className="w-50px h-50px shadow border border-light me-2"></div> .shadow
												</div>
											</div>
											<div className="col-lg">
												<div className="d-flex align-items-center mb-2">
													<div className="w-50px h-50px shadow-sm border border-light me-2"></div> .shadow-sm
												</div>
												<div className="d-flex align-items-center mb-2">
													<div className="w-50px h-50px shadow-lg border border-light me-2"></div> .shadow-lg
												</div>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code11}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="widthAndHeight" className="mb-5">
								<h4>Width and height</h4>
								<p>Easily make an element as wide or as tall with our width and height utilities. Please read the <a href="https://getbootstrap.com/docs/5.3/utilities/sizing/" target="_blank" rel="noreferrer">official documentation</a> for the full list of options.</p>
								<Card>
									<div className="table-responsive">
										<table className="table table-card mb-0 table-bordered">
											<thead>
												<tr className="border-top-0">
													<th className="border-start-0 border-end-0">Width</th>
													<th className="border-start-0 border-end-0">Height</th>
												</tr>
											</thead>
											<tbody>
												<tr className="border-bottom-0">
													<td className="border-start-0">
														<div><code>.w-25</code></div>
														<div><code>.w-50</code></div>
														<div><code>.w-75</code></div>
														<div><code>.w-100</code></div>
														<div><code>.w-auto</code></div>
														<div><code>.ms-100</code></div>
														<hr />
														<div><code>.w-(10|20|30|40|50)px</code></div>
														<div><code>.w-(60|70|80|50|90|100)px</code></div>
														<div><code>.w-(100|150|200|250|300|350)px</code></div>
														<div><code>.w-(400|450|500|550|600)px</code></div>
													</td>
													<td className="border-end-0">
														<div><code>.h-25</code></div>
														<div><code>.h-50</code></div>
														<div><code>.h-75</code></div>
														<div><code>.h-100</code></div>
														<div><code>.h-auto</code></div>
														<div><code>.mh-100</code></div>
														<hr />
														<div><code>.h-(10|20|30|40|50)px</code></div>
														<div><code>.h-(60|70|80|50|90|100)px</code></div>
														<div><code>.h-(100|150|200|250|300|350)px</code></div>
														<div><code>.h-(400|450|500|550|600)px</code></div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
									<div className="hljs-container">
										<Highlight className='html'>{code12}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="marginAndPadding" className="mb-5">
								<h4>Margin and padding</h4>
								<p>Bootstrap includes a wide range of shorthand responsive margin and padding utility classes to modify an element’s appearance. Please read the <a href="https://getbootstrap.com/docs/5.3/utilities/spacing/" target="_blank" rel="noreferrer">official documentation</a> for the full list of options.</p>
								<Card>
									<div className="table-responsive">
										<table className="table table-card mb-0 table-bordered">
											<thead>
												<tr className="border-top-0">
													<th className="border-start-0 border-end-0">Margin</th>
													<th className="border-start-0 border-end-0">Padding</th>
												</tr>
											</thead>
											<tbody>
												<tr className="border-bottom-0">
													<td className="border-start-0">
														<div><code>.mt-(1|2|3|4|5)</code></div>
														<div><code>.me-(1|2|3|4|5)</code></div>
														<div><code>.mb-(1|2|3|4|5)</code></div>
														<div><code>.ms-(1|2|3|4|5)</code></div>
														<div><code>.mx-(1|2|3|4|5)</code></div>
														<div><code>.my-(1|2|3|4|5)</code></div>
														<hr />
														<div><code>.mt-(1~20)px</code></div>
														<div><code>.me-(1~20)px</code></div>
														<div><code>.mb-(1~20)px</code></div>
														<div><code>.ms-(1~20)px</code></div>
													</td>
													<td className="border-end-0">
														<div><code>.pt-(1|2|3|4|5)</code></div>
														<div><code>.pe-(1|2|3|4|5)</code></div>
														<div><code>.pb-(1|2|3|4|5)</code></div>
														<div><code>.ps-(1|2|3|4|5)</code></div>
														<div><code>.px-(1|2|3|4|5)</code></div>
														<div><code>.py-(1|2|3|4|5)</code></div>
														<hr />
														<div><code>.pt-(1~20)px</code></div>
														<div><code>.pe-(1~20)px</code></div>
														<div><code>.pb-(1~20)px</code></div>
														<div><code>.ps-(1~20)px</code></div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
									<div className="hljs-container">
										<Highlight className='html'>{code13}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="text" className="mb-5">
								<h4>Text</h4>
								<p>Documentation and examples for common text utilities to control alignment, wrapping, weight, and more. Please read the <a href="https://getbootstrap.com/docs/5.3/utilities/text/" target="_blank" rel="noreferrer">official documentation</a> for the full list of options.</p>
								<Card>
									<div className="table-responsive">
										<table className="table table-card mb-0 table-bordered">
											<thead>
												<tr className="border-top-0">
													<th className="border-start-0 border-end-0">Alignment & Decoration</th>
													<th className="border-start-0 border-end-0">Wrapping & transform</th>
													<th className="border-start-0 border-end-0">Font style</th>
													<th className="border-start-0 border-end-0">Font Size</th>
												</tr>
											</thead>
											<tbody>
												<tr className="border-bottom-0">
													<td className="border-start-0">
														<div><code>.text-start</code></div>
														<div><code>.text-center</code></div>
														<div><code>.text-end</code></div>
														<hr />
														<div><code>.text-reset</code></div>
														<div><code>.text-decoration-none</code></div>
														<div><code>.text-decoration-underline</code></div>
														<div><code>.text-decoration-line-through</code></div>
														<hr />
														<div><code>.text-gradient</code></div>
														<hr />
														<div><code>.lh-1</code></div>
														<div><code>.lh-sm</code></div>
														<div><code>.lh-base</code></div>
														<div><code>.lh-lg</code></div>
														<hr />
														<div><code>.font-monospace</code></div>
													</td>
													<td>
														<div><code>.text-wrap</code></div>
														<div><code>.text-nowrap</code></div>
														<div><code>.text-truncate</code></div>
														<div><code>.text-break</code></div>
														<hr />
														<div><code>.text-lowercase</code></div>
														<div><code>.text-uppercase</code></div>
														<div><code>.text-capitalize</code></div>
													</td>
													<td>
														<div><code>.fw-bold</code></div>
														<div><code>.fw-bolder</code></div>
														<div><code>.fw-semibold</code></div>
														<div><code>.fw-normal</code></div>
														<div><code>.fw-light</code></div>
														<div><code>.fw-lighter</code></div>
														<div><code>.fst-italic</code></div>
														<div><code>.fst-normal</code></div>
														<hr />
														<div><code>.fw-100</code></div>
														<div><code>.fw-200</code></div>
														<div><code>.fw-300</code></div>
														<div><code>.fw-400</code></div>
														<div><code>.fw-500</code></div>
														<div><code>.fw-600</code></div>
														<div><code>.fw-700</code></div>
														<div><code>.fw-800</code></div>
													</td>
													<td className="border-end-0">
														<div><code>.fs-1</code></div>
														<div><code>.fs-2</code></div>
														<div><code>.fs-3</code></div>
														<div><code>.fs-4</code></div>
														<div><code>.fs-5</code></div>
														<div><code>.fs-6</code></div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
									<div className="hljs-container">
										<Highlight className='html'>{code14}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="opacityVisibilityVerticalAlign" className="mb-5">
								<h4>Opacity / Visibility / Vertical align</h4>
								<p>Control the visibility, opacity and vertical align by using bootstrap utilities. Please read the <a href="https://getbootstrap.com/docs/5.3/utilities/visibility/" target="_blank" rel="noreferrer">official documentation</a> for the full list of options.</p>
								<Card>
									<div className="table-responsive">
										<table className="table table-card mb-0 table-bordered">
											<thead>
												<tr className="border-top-0">
													<th className="border-start-0 border-end-0">Opacity</th>
													<th className="border-start-0 border-end-0">Visibility</th>
													<th className="border-start-0 border-end-0">Vertical align</th>
												</tr>
											</thead>
											<tbody>
												<tr className="border-top-0">
													<td className="border-start-0">
														<div><code>.opacity-10</code></div>
														<div><code>.opacity-9</code></div>
														<div><code>.opacity-8</code></div>
														<div><code>.opacity-7</code></div>
														<div><code>.opacity-6</code></div>
														<div><code>.opacity-5</code></div>
														<div><code>.opacity-4</code></div>
														<div><code>.opacity-3</code></div>
														<div><code>.opacity-2</code></div>
														<div><code>.opacity-1</code></div>
														<div><code>.opacity-0</code></div>
													</td>
													<td>
														<div><code>.visible</code></div>
														<div><code>.invisible</code></div>
													</td>
													<td className="border-end-0">
														<div><code>.align-baseline</code></div>
														<div><code>.align-top</code></div>
														<div><code>.align-middle</code></div>
														<div><code>.align-bottom</code></div>
														<div><code>.align-text-top</code></div>
														<div><code>.align-text-bottom</code></div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
									<div className="hljs-container">
										<Highlight className='html'>{code15}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="objectFit" className="mb-5">
								<h4>Object Fit</h4>
								<p>Use the object fit utilities to modify how the content of a replaced element, such as an <code>&lt;img&gt;</code> or <code>&lt;video&gt;</code>, should be resized to fit its container. Please read the <a href="https://getbootstrap.com/docs/5.3/utilities/object-fit/" rel="noreferrer" target="_blank">official documentation</a> for the full list of options.</p>
								<Card>
									<CardBody>
										<img src="https://via.placeholder.com/400x400/c9d2e3/212837" width="100" height="75" className="object-fit-contain border rounded me-2" alt="" />
										<img src="https://via.placeholder.com/400x400/c9d2e3/212837" width="100" height="75" className="object-fit-cover border rounded me-2" alt="" />
										<img src="https://via.placeholder.com/400x400/c9d2e3/212837" width="100" height="75" className="object-fit-fill border rounded me-2" alt="" />
										<img src="https://via.placeholder.com/400x400/c9d2e3/212837" width="100" height="75" className="object-fit-scale border rounded me-2" alt="" />
										<img src="https://via.placeholder.com/400x400/c9d2e3/212837" width="100" height="75" className="object-fit-none border rounded me-2" alt="" />
									</CardBody>
									<div className="hljs-container">
										<Highlight className='html'>{code16}</Highlight>
									</div>
								</Card>
							</div>
						</div>
						<div className="col-xl-3">
							<NavScrollTo>
								<nav className="nav">
									<a className="nav-link" href="#borders" data-toggle="scroll-to">Borders</a>
									<a className="nav-link" href="#borderRadius" data-toggle="scroll-to">Border-radius</a>
									<a className="nav-link" href="#textColor" data-toggle="scroll-to">Text color</a>
									<a className="nav-link" href="#textTransparentColor" data-toggle="scroll-to">Text transparent color</a>
									<a className="nav-link" href="#backgroundColor" data-toggle="scroll-to">Bg color</a>
									<a className="nav-link" href="#backgroundGradientColor" data-toggle="scroll-to">Bg gradient color</a>
									<a className="nav-link" href="#backgroundGradientFancyColor" data-toggle="scroll-to">Bg gradient fancy color</a>
									<a className="nav-link" href="#displayProperty" data-toggle="scroll-to">Display property</a>
									<a className="nav-link" href="#ratios" data-toggle="scroll-to">Ratios</a>
									<a className="nav-link" href="#flex" data-toggle="scroll-to">Flex</a>
									<a className="nav-link" href="#floatPositionOverflow" data-toggle="scroll-to">Float / Position <br />/ Overflow</a>
									<a className="nav-link" href="#shadows" data-toggle="scroll-to">Shadows</a>
									<a className="nav-link" href="#widthAndHeight" data-toggle="scroll-to">Width and height</a>
									<a className="nav-link" href="#marginAndPadding" data-toggle="scroll-to">Margin and padding</a>
									<a className="nav-link" href="#text" data-toggle="scroll-to">Text</a>
									<a className="nav-link" href="#opacityVisibilityVerticalAlign" data-toggle="scroll-to">Opacity / Visibility / Vertical align</a>
								</nav>
							</NavScrollTo>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Helper;