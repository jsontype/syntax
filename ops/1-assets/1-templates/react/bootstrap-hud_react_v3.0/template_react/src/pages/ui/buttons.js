import React, {useEffect, useState} from 'react';
import { Card, CardBody } from './../../components/card/card.jsx';
import Highlight from 'react-highlight';
import { NavScrollTo } from './../../components/nav-scroll-to/nav-scroll-to.jsx';

function UiButtons() {
	const [code1, setCode1] = useState();
	const [code2, setCode2] = useState();
	const [code3, setCode3] = useState();
	const [code4, setCode4] = useState();
	const [code5, setCode5] = useState();
	const [code6, setCode6] = useState();
	const [code7, setCode7] = useState();
	const [code8, setCode8] = useState();
	
	useEffect(() => {
		fetch('/assets/data/ui/buttons-code-1.json').then(function(response) { return response.text(); }).then((html) => { setCode1(html); });
		fetch('/assets/data/ui/buttons-code-2.json').then(function(response) { return response.text(); }).then((html) => { setCode2(html); });
		fetch('/assets/data/ui/buttons-code-3.json').then(function(response) { return response.text(); }).then((html) => { setCode3(html); });
		fetch('/assets/data/ui/buttons-code-4.json').then(function(response) { return response.text(); }).then((html) => { setCode4(html); });
		fetch('/assets/data/ui/buttons-code-5.json').then(function(response) { return response.text(); }).then((html) => { setCode5(html); });
		fetch('/assets/data/ui/buttons-code-6.json').then(function(response) { return response.text(); }).then((html) => { setCode6(html); });
		fetch('/assets/data/ui/buttons-code-7.json').then(function(response) { return response.text(); }).then((html) => { setCode7(html); });
		fetch('/assets/data/ui/buttons-code-8.json').then(function(response) { return response.text(); }).then((html) => { setCode8(html); });
	});
	
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-xl-10">
					<div className="row">
						<div className="col-xl-9">
							<ul className="breadcrumb">
								<li className="breadcrumb-item"><a href="#/">UI KITS</a></li>
								<li className="breadcrumb-item active">BUTTONS</li>
							</ul>
							
							<h1 className="page-header">
								Buttons <small>page header description goes here...</small>
							</h1>
							
							<hr className="mb-4" />
							
							<div id="classes" className="mb-5">
								<h4>Classes</h4>
								<p>
									Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.
									Please read the <a href="https://getbootstrap.com/docs/5.3/components/buttons/" target="_blank" rel="noreferrer">official Bootstrap documentation</a> for the full list of options.
								</p>
								<Card>
									<CardBody>
										<button type="button" className="btn btn-theme">Theme</button>
										<hr />
										<button type="button" className="btn btn-default mb-1 me-1">Default</button>
										<button type="button" className="btn btn-secondary mb-1 me-1">Secondary</button>
										<button type="button" className="btn btn-light mb-1 me-1">Light</button>
										<button type="button" className="btn btn-dark mb-1 me-1">Dark</button>
										<button type="button" className="btn btn-info mb-1 me-1">Info</button>
										<button type="button" className="btn btn-primary mb-1 me-1">Primary</button>
										<button type="button" className="btn btn-purple mb-1 me-1">Purple</button>
										<button type="button" className="btn btn-indigo mb-1 me-1">Indigo</button>
										<button type="button" className="btn btn-link mb-1 me-1">Link</button>
										<span className="d-lg-inline d-none"><br /></span>
										<button type="button" className="btn btn-danger mb-1 me-1">Danger</button>
										<button type="button" className="btn btn-pink mb-1 me-1">Pink</button>
										<button type="button" className="btn btn-warning mb-1 me-1">Warning</button>
										<button type="button" className="btn btn-yellow mb-1 me-1">Yellow</button>
										<button type="button" className="btn btn-lime mb-1 me-1">Lime</button>
										<button type="button" className="btn btn-green mb-1 me-1">Green</button>
										<button type="button" className="btn btn-success mb-1 me-1">Success</button>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code1}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="outlineButtons" className="mb-5">
								<h4>Outline buttons</h4>
								<p>
									In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the <code>.btn-outline-*</code> ones to remove all background images and colors on any button.
								</p>
								<Card>
									<CardBody>
										<button type="button" className="btn btn-outline-theme">Theme</button>
										<hr />
										<button type="button" className="btn btn-outline-default mb-1 me-1">Default</button>
										<button type="button" className="btn btn-outline-secondary mb-1 me-1">Secondary</button>
										<button type="button" className="btn btn-outline-light mb-1 me-1">Light</button>
										<button type="button" className="btn btn-outline-dark mb-1 me-1">Dark</button>
										<button type="button" className="btn btn-outline-info mb-1 me-1">Info</button>
										<button type="button" className="btn btn-outline-primary mb-1 me-1">Primary</button>
										<button type="button" className="btn btn-outline-purple mb-1 me-1">Purple</button>
										<button type="button" className="btn btn-outline-indigo mb-1 me-1">Indigo</button>
										<button type="button" className="btn btn-outline-link mb-1 me-1">Link</button>
										<br />
										<button type="button" className="btn btn-outline-danger mb-1 me-1">Danger</button>
										<button type="button" className="btn btn-outline-pink mb-1 me-1">Pink</button>
										<button type="button" className="btn btn-outline-warning mb-1 me-1">Warning</button>
										<button type="button" className="btn btn-outline-yellow mb-1 me-1">Yellow</button>
										<button type="button" className="btn btn-outline-lime mb-1 me-1">Lime</button>
										<button type="button" className="btn btn-outline-green mb-1 me-1">Green</button>
										<button type="button" className="btn btn-outline-success mb-1 me-1">Success</button>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code2}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="sizes" className="mb-5">
								<h4>Sizes</h4>
								<p>
									Fancy larger or smaller buttons? Add <code>.btn-lg</code> or <code>.btn-sm</code> for additional sizes.
								</p>
								<Card>
									<CardBody className="pb-0">
										<div className="mb-4">
											<div className="mb-2 small text-inverse text-opacity-50">
												<b>LARGE BUTTON</b>
											</div>
											<button type="button" className="btn me-1 btn-outline-theme btn-lg">Large button</button>
											<button type="button" className="btn me-1 btn-outline-secondary btn-lg">Large button</button>
										</div>
										<div className="mb-4">
											<div className="mb-2 small text-inverse text-opacity-50">
												<b>SMALL BUTTON</b>
											</div>
											<button type="button" className="btn me-1 btn-outline-theme btn-sm">Small button</button>
											<button type="button" className="btn me-1 btn-outline-secondary btn-sm">Small button</button>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code3}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="states" className="mb-5">
								<h4>States</h4>
								<p>
									Buttons will appear pressed when active or you can still force the same active appearance by adding <code>.active</code> class.
									Make buttons look inactive by adding the <code>disabled</code> boolean attribute to any <code>&lt;button&gt;</code> element.
								</p>
								<Card>
									<CardBody className="pb-0">
										<div className="mb-4">
											<div className="mb-2 small text-inverse text-opacity-50">
												<b>ACTIVE STATE</b>
											</div>
											<a href="#/" className="btn me-1 btn-outline-theme btn-lg active">Primary link</a>
											<a href="#/" className="btn me-1 btn-outline-secondary btn-lg active">Link</a>
										</div>
										<div className="mb-4">
											<div className="mb-2 small text-inverse text-opacity-50">
												<b>DISABLED STATE</b>
											</div>
											<button type="button" className="btn me-1 btn-lg btn-outline-theme" disabled>Primary button</button>
											<button type="button" className="btn me-1 btn-outline-secondary btn-lg" disabled>Button</button>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code4}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="buttonGroup" className="mb-5">
								<h4>Button group</h4>
								<p>
									Group a series of buttons together on a single line with the button group, and super-power them with JavaScript.
								</p>
								<Card>
									<CardBody>
										<div className="btn-group">
											<button type="button" className="btn btn-outline-secondary">Left</button>
											<button type="button" className="btn btn-outline-secondary">Middle</button>
											<button type="button" className="btn btn-outline-secondary">Right</button>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code5}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="groupSize" className="mb-5">
								<h4>Group size</h4>
								<p>
									Instead of applying button sizing classes to every button in a group, just add <code>.btn-group-*</code> to each <code>.btn-group</code>, including each one when nesting multiple groups.
								</p>
								<Card>
									<CardBody>
										<div className="mb-3">
											<div className="btn-group btn-group-lg">
												<button type="button" className="btn btn-outline-secondary">Left</button>
												<button type="button" className="btn btn-outline-secondary">Middle</button>
												<button type="button" className="btn btn-outline-secondary">Right</button>
											</div>
										</div>
										<div className="mb-3">
											<div className="btn-group">
												<button type="button" className="btn btn-outline-secondary">Left</button>
												<button type="button" className="btn btn-outline-secondary">Middle</button>
												<button type="button" className="btn btn-outline-secondary">Right</button>
											</div>
										</div>
										<div className="mb-0">
											<div className="btn-group btn-group-sm">
												<button type="button" className="btn btn-outline-secondary">Left</button>
												<button type="button" className="btn btn-outline-secondary">Middle</button>
												<button type="button" className="btn btn-outline-secondary">Right</button>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code6}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="verticalGroup" className="mb-5">
								<h4>Vertical Group</h4>
								<p>
									Make a set of buttons appear vertically stacked rather than horizontally. Split button dropdowns are not supported here.
								</p>
								<Card>
									<CardBody>
										<div className="btn-group-vertical">
											<button type="button" className="btn btn-outline-secondary">Button</button>
											<button type="button" className="btn btn-outline-secondary">Button</button>
											<button type="button" className="btn btn-outline-secondary">Button</button>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code7}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="buttonToolbar" className="mb-5">
								<h4>Button toolbar</h4>
								<p>
									Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more.
								</p>
								<Card>
									<CardBody>
										<div className="btn-toolbar">
											<div className="btn-group me-2">
												<button type="button" className="btn btn-outline-secondary">1</button>
												<button type="button" className="btn btn-outline-secondary">2</button>
												<button type="button" className="btn btn-outline-secondary">3</button>
												<button type="button" className="btn btn-outline-secondary">4</button>
											</div>
											<div className="btn-group me-2">
												<button type="button" className="btn btn-outline-secondary">5</button>
												<button type="button" className="btn btn-outline-secondary">6</button>
												<button type="button" className="btn btn-outline-secondary">7</button>
											</div>
											<div className="btn-group">
												<button type="button" className="btn btn-outline-secondary">8</button>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code8}</Highlight>
									</div>
								</Card>
							</div>
						</div>
						
						<div className="col-xl-3">
							<NavScrollTo>
								<nav className="nav">
									<a className="nav-link" href="#classes" data-toggle="scroll-to">Classes</a>
									<a className="nav-link" href="#outlineButtons" data-toggle="scroll-to">Outline buttons</a>
									<a className="nav-link" href="#sizes" data-toggle="scroll-to">Sizes</a>
									<a className="nav-link" href="#states" data-toggle="scroll-to">States</a>
									<a className="nav-link" href="#buttonGroup" data-toggle="scroll-to">Button group</a>
									<a className="nav-link" href="#groupSize" data-toggle="scroll-to">Group size</a>
									<a className="nav-link" href="#verticalGroup" data-toggle="scroll-to">Vertical group</a>
									<a className="nav-link" href="#buttonToolbar" data-toggle="scroll-to">Button toolbar</a>
								</nav>
							</NavScrollTo>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UiButtons;