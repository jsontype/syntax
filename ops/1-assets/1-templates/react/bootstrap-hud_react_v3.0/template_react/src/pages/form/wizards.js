import React, { useEffect, useState } from 'react';
import Highlight from 'react-highlight';
import { Card, CardBody } from './../../components/card/card.jsx';
import { NavScrollTo } from './../../components/nav-scroll-to/nav-scroll-to.jsx';

function FormWizards() {
	const [code1, setCode1] = useState();
	const [code2, setCode2] = useState();
	const [code3, setCode3] = useState();
	
	useEffect(() => {
		fetch('/assets/data/form/wizard-code-1.json').then(function(response) { return response.text(); }).then((html) => { setCode1(html); });
		fetch('/assets/data/form/wizard-code-2.json').then(function(response) { return response.text(); }).then((html) => { setCode2(html); });
		fetch('/assets/data/form/wizard-code-3.json').then(function(response) { return response.text(); }).then((html) => { setCode3(html); });
	});
	
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-xl-10">
					<div className="row">
						<div className="col-xl-9">
							<ul className="breadcrumb">
								<li className="breadcrumb-item"><a href="#/">FORMS</a></li>
								<li className="breadcrumb-item active">FORM WIZARDS</li>
							</ul>
							
							<h1 className="page-header">
								Form Wizards <small>page header description goes here...</small>
							</h1>
							
							<hr className="mb-4" />
							
							<div id="wizardLayout1" className="mb-5">
								<h4>Wizard layout 1</h4>
								<p>Wizard layout include the number of step and text. Please do note that all the wizard is for uxui ONLY but do not include any javascript or backend logic.</p>
								<Card>
									<CardBody>
										<div className="nav-wizards-container">
											<nav className="nav nav-wizards-1 mb-2">
												<div className="nav-item col">
													<a className="nav-link completed" href="#/">
														<div className="nav-no">1</div>
														<div className="nav-text">Completed step</div>
													</a>
												</div>
												<div className="nav-item col">
													<a className="nav-link completed" href="#/">
														<div className="nav-no">2</div>
														<div className="nav-text">Second step</div>
													</a>
												</div>
												<div className="nav-item col">
													<a className="nav-link active" href="#/">
														<div className="nav-no">3</div>
														<div className="nav-text">Active step</div>
													</a>
												</div>
												<div className="nav-item col">
													<a className="nav-link disabled" href="#/">
														<div className="nav-no">4</div>
														<div className="nav-text">Disabled step</div>
													</a>
												</div>
												<div className="nav-item col">
													<a className="nav-link disabled" href="#/">
														<div className="nav-no">5</div>
														<div className="nav-text">Last step</div>
													</a>
												</div>
											</nav>
										</div>
										<Card>
											<CardBody>
												wizard content here
											</CardBody>
										</Card>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code1}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="wizardLayout2" className="mb-5">
								<h4>Wizard layout 2</h4>
								<p>Wizard layout include the number of step and text. Please do note that all the wizard is for uxui ONLY but do not include any javascript or backend logic.</p>
								<Card>
									<CardBody>
										<div className="nav-wizards-container">
											<nav className="nav nav-wizards-2 mb-3">
												<div className="nav-item col">
													<a className="nav-link completed" href="#/">
														<div className="nav-text">1. Completed step</div>
													</a>
												</div>
												<div className="nav-item col">
													<a className="nav-link active" href="#/">
														<div className="nav-text">2. Active step text</div>
													</a>
												</div>
												<div className="nav-item col">
													<a className="nav-link disabled" href="#/">
														<div className="nav-text">3. Disabled step text</div>
													</a>
												</div>
											</nav>
										</div>
										<Card>
											<CardBody>
												wizard content here
											</CardBody>
										</Card>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code2}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="wizardLayout3" className="mb-5">
								<h4>Wizard layout 3</h4>
								<p>Wizard layout include the number of step and text. Please do note that all the wizard is for uxui ONLY but do not include any javascript or backend logic.</p>
								<Card>
									<CardBody>
										<div className="nav-wizards-container">
											<nav className="nav nav-wizards-3 mb-2">
												<div className="nav-item col">
													<a className="nav-link completed" href="#/">
														<div className="nav-dot"></div>
														<div className="nav-title">Step 1</div>
														<div className="nav-text">Completed step</div>
													</a>
												</div>
												<div className="nav-item col">
													<a className="nav-link completed" href="#/">
														<div className="nav-dot"></div>
														<div className="nav-title">Step 2</div>
														<div className="nav-text">Second step</div>
													</a>
												</div>
												<div className="nav-item col">
													<a className="nav-link active" href="#/">
														<div className="nav-dot"></div>
														<div className="nav-title">Step 3</div>
														<div className="nav-text">Active step</div>
													</a>
												</div>
												<div className="nav-item col">
													<a className="nav-link disabled" href="#/">
														<div className="nav-dot"></div>
														<div className="nav-title">Step 4</div>
														<div className="nav-text">Disabled step</div>
													</a>
												</div>
												<div className="nav-item col">
													<a className="nav-link disabled" href="#/">
														<div className="nav-dot"></div>
														<div className="nav-title">Step 5</div>
														<div className="nav-text">Last step</div>
													</a>
												</div>
											</nav>
										</div>
										<Card>
											<CardBody>
												wizard content here
											</CardBody>
										</Card>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code3}</Highlight>
									</div>
								</Card>
							</div>
						</div>
						<div className="col-xl-3">
							<NavScrollTo>
								<nav className="nav">
									<a className="nav-link" href="#wizardLayout1" data-toggle="scroll-to">Wizard layout 1</a>
									<a className="nav-link" href="#wizardLayout2" data-toggle="scroll-to">Wizard layout 2</a>
									<a className="nav-link" href="#wizardLayout3" data-toggle="scroll-to">Wizard layout 3</a>
								</nav>
							</NavScrollTo>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FormWizards;