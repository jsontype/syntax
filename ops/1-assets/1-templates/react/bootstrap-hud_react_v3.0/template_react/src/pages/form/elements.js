import React, { useEffect, useState } from 'react';
import { Card, CardBody } from './../../components/card/card.jsx';
import { NavScrollTo } from './../../components/nav-scroll-to/nav-scroll-to.jsx';
import Highlight from 'react-highlight';

function FormElements() {
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
	
	useEffect(() => {
		fetch('/assets/data/form/element-code-1.json').then(function(response) { return response.text(); }).then((html) => { setCode1(html); });
		fetch('/assets/data/form/element-code-2.json').then(function(response) { return response.text(); }).then((html) => { setCode2(html); });
		fetch('/assets/data/form/element-code-3.json').then(function(response) { return response.text(); }).then((html) => { setCode3(html); });
		fetch('/assets/data/form/element-code-4.json').then(function(response) { return response.text(); }).then((html) => { setCode4(html); });
		fetch('/assets/data/form/element-code-5.json').then(function(response) { return response.text(); }).then((html) => { setCode5(html); });
		fetch('/assets/data/form/element-code-6.json').then(function(response) { return response.text(); }).then((html) => { setCode6(html); });
		fetch('/assets/data/form/element-code-7.json').then(function(response) { return response.text(); }).then((html) => { setCode7(html); });
		fetch('/assets/data/form/element-code-8.json').then(function(response) { return response.text(); }).then((html) => { setCode8(html); });
		fetch('/assets/data/form/element-code-9.json').then(function(response) { return response.text(); }).then((html) => { setCode9(html); });
		fetch('/assets/data/form/element-code-10.json').then(function(response) { return response.text(); }).then((html) => { setCode10(html); });
		fetch('/assets/data/form/element-code-11.json').then(function(response) { return response.text(); }).then((html) => { setCode11(html); });
		fetch('/assets/data/form/element-code-12.json').then(function(response) { return response.text(); }).then((html) => { setCode12(html); });
		fetch('/assets/data/form/element-code-13.json').then(function(response) { return response.text(); }).then((html) => { setCode13(html); });
		fetch('/assets/data/form/element-code-14.json').then(function(response) { return response.text(); }).then((html) => { setCode14(html); });
	});
	
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-xl-10">
					<div className="row">
						<div className="col-xl-9">
							<ul className="breadcrumb">
								<li className="breadcrumb-item"><a href="#/">FORMS</a></li>
								<li className="breadcrumb-item active">FORM ELEMENTS</li>
							</ul>
							
							<h1 className="page-header">
								Form Elements <small>page header description goes here...</small>
							</h1>
							
							<hr className="mb-4" />
							
							<div id="formControls" className="mb-5">
								<h4>Form controls</h4>
								<p>Textual form controls—like <code>&lt;input&gt;</code>s, <code>&lt;select&gt;</code>s, and <code>&lt;textarea&gt;</code>s—are styled with the .form-control class. Included are styles for general appearance, focus state, sizing, and more. Please read the <a href="https://getbootstrap.com/docs/5.3/components/forms/" target="_blank" rel="noreferrer">official Bootstrap documentation</a> for the full list of options.</p>
								<Card>
									<CardBody className="pb-2">
										<form>
											<div className="row">
												<div className="col-xl-6">
													<div className="form-group mb-3">
														<label className="form-label" htmlFor="exampleFormControlInput1">Text input</label>
														<input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
													</div>
													<div className="form-group mb-3">
														<label className="form-label" htmlFor="exampleFormControlTextarea1">Textarea</label>
														<textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
													</div>
													<div className="form-group mb-3">
														<label className="form-label" htmlFor="exampleFormControlFile1">File input</label>
														<input type="file" className="form-control" id="exampleFormControlFile1" />
													</div>
												</div>
												<div className="col-xl-6">
													<div className="form-group mb-3">
														<label className="form-label" htmlFor="exampleFormControlSelect1">Select dropdown</label>
														<select className="form-select" id="exampleFormControlSelect1">
															<option>1</option>
															<option>2</option>
															<option>3</option>
															<option>4</option>
															<option>5</option>
														</select>
													</div>
													<div className="form-group mb-3">
														<label className="form-label" htmlFor="exampleFormControlSelect2">Multiple select</label>
														<select multiple className="form-select" id="exampleFormControlSelect2">
															<option>1</option>
															<option>2</option>
															<option>3</option>
															<option>4</option>
															<option>5</option>
														</select>
													</div>
												</div>
											</div>
										</form>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code1}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="sizing" className="mb-5">
								<h4>Sizing</h4>
								<p>Set heights using classes like <code>.form-control-lg</code> and <code>.form-control-sm</code>.</p>
								<Card>
									<CardBody>
										<div className="row mb-n3">
											<div className="col-xl-6">
												<input className="form-control form-control-lg mb-3" type="text" placeholder=".form-control-lg" />
												<input className="form-control mb-3" type="text" placeholder="Default input" />
												<input className="form-control form-control-sm mb-3" type="text" placeholder=".form-control-sm" />
											</div>
											<div className="col-xl-6">
												<select className="form-select form-select-lg mb-3" defaultValue="">
													<option value="">Large select</option>
												</select>
												<select className="form-select mb-3" defaultValue="">
													<option value="">Default select</option>
												</select>
												<select className="form-select form-select-sm mb-3" defaultValue="">
													<option value="">Small select</option>
												</select>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code2}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="readOnly" className="mb-5">
								<h4>Readonly</h4>
								<p>Add the readOnly boolean attribute on an input to prevent modification of the input’s value. Read-only inputs appear lighter (just like disabled inputs), but retain the standard cursor.</p>
								<Card>
									<CardBody>
										<input className="form-control" type="text" placeholder="Readonly input here..." readOnly />
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code3}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="readOnlyPlainText" className="mb-5">
								<h4>Readonly plain text</h4>
								<p>If you want to have <code>&lt;input readOnly&gt;</code> elements in your form styled as plain text, use the .form-control-plaintext class to remove the default form field styling and preserve the correct margin and padding.</p>
								<Card>
									<CardBody>
										<form>
											<div className="form-group row mb-3">
												<label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
												<div className="col-sm-10">
													<input type="text" readOnly className="form-control-plaintext" id="staticEmail" defaultValue="email@example.com" />
												</div>
											</div>
											<div className="form-group row mb-2">
												<label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
												<div className="col-sm-10">
													<input type="password" className="form-control" id="inputPassword" />
												</div>
											</div>
										</form>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code4}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="rangeInputs" className="mb-5">
								<h4>Range inputs</h4>
								<p>Set horizontally scrollable range inputs using <code>.form-range</code>.</p>
								<Card>
									<CardBody>
										<div className="row mb-n3">
											<div className="col-xl-6">
												<div className="form-group mb-3">
													<label htmlFor="formControlRange" className="form-label">Example range input</label>
													<input type="range" className="form-range" id="formControlRange" />
												</div>
											</div>
											<div className="col-xl-6">
												<div className="form-group mb-3">
													<label htmlFor="disabledRange" className="form-label">Disabled range</label>
													<input type="range" className="form-range" id="disabledRange" disabled />
												</div>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code5}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="checkboxes" className="mb-5">
								<h4>Checkboxes</h4>
								<p>Default checkboxes are improved upon with the help of <code>.form-check</code>, a single class for both input types that improves the layout and behavior of their HTML elements.</p>
								<Card>
									<CardBody>
										<div className="row mb-n3">
											<div className="col-xl-6">
												<div className="small text-inverse text-opacity-50 mb-1"><b>DEFAULT CHECKBOX</b></div>
												<div className="form-group mb-4">
													<div className="form-check">
														<input className="form-check-input" type="checkbox" defaultValue="" id="defaultCheck1" />
														<label className="form-check-label" htmlFor="defaultCheck1">Default checkbox</label>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="checkbox" defaultValue="" id="defaultCheck2" defaultChecked />
														<label className="form-check-label" htmlFor="defaultCheck2">Checked checkbox</label>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="checkbox" defaultValue="" id="defaultCheck3" disabled />
														<label className="form-check-label" htmlFor="defaultCheck3">Disabled checkbox</label>
													</div>
												</div>
											</div>
											<div className="col-xl-6">
												<div className="small text-inverse text-opacity-50 mb-1"><b>INLINE CHECKBOX</b></div>
												<div className="form-group mb-3">
													<div className="form-check form-check-inline">
														<input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
														<label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
													</div>
													<div className="form-check form-check-inline">
														<input className="form-check-input" type="checkbox" id="inlineCheckbox2" defaultValue="option2" defaultChecked />
														<label className="form-check-label" htmlFor="inlineCheckbox2">2</label>
													</div>
													<div className="form-check form-check-inline">
														<input className="form-check-input" type="checkbox" id="inlineCheckbox3" defaultValue="option3" disabled />
														<label className="form-check-label" htmlFor="inlineCheckbox3">3 (disabled)</label>
													</div>
												</div>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code6}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="radios" className="mb-5">
								<h4>Radios</h4>
								<p>Default radios are improved upon with the help of <code>.form-check</code>, a single class for both input types that improves the layout and behavior of their HTML elements. You can use Bootstrap custom radio for styled radio button.</p>
								<Card>
									<CardBody>
										<div className="row mb-n3">
											<div className="col-xl-6">
												<div className="small text-inverse text-opacity-50 mb-1"><b>DEFAULT RADIO</b></div>
												<div className="form-group mb-4">
													<div className="form-check">
														<input className="form-check-input" type="radio" defaultValue="" name="radio_1" id="defaultRadio1" />
														<label className="form-check-label" htmlFor="defaultRadio1">Default radio button</label>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="radio" defaultValue="" name="radio_1" id="defaultRadio2" defaultChecked />
														<label className="form-check-label" htmlFor="defaultRadio2">Checked radio button</label>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="radio" defaultValue="" name="radio_1" id="defaultRadio3" disabled />
														<label className="form-check-label" htmlFor="defaultRadio3">Disabled radio button</label>
													</div>
												</div>
											</div>
											<div className="col-xl-6">
												<div className="small text-inverse text-opacity-50 mb-1"><b>INLINE RADIO</b></div>
												<div className="form-group mb-3">
													<div className="form-check form-check-inline">
														<input className="form-check-input" name="default_radio" type="radio" id="inlineRadio1" defaultValue="option1" />
														<label className="form-check-label" htmlFor="inlineRadio1">1</label>
													</div>
													<div className="form-check form-check-inline">
														<input className="form-check-input" name="default_radio" type="radio" id="inlineRadio2" defaultValue="option2" defaultChecked />
														<label className="form-check-label" htmlFor="inlineRadio2">2</label>
													</div>
													<div className="form-check form-check-inline">
														<input className="form-check-input" name="default_radio" type="radio" id="inlineRadio3" defaultValue="option3" disabled />
														<label className="form-check-label" htmlFor="inlineRadio3">3 (disabled)</label>
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
							
							<div id="switches" className="mb-5">
								<h4>Switches</h4>
								<p>A switch has the markup of a custom checkbox but uses the <code>.form-switch</code> class to render a toggle switch. Switches also support the disabled attribute.</p>
								<Card>
									<CardBody>
										<div className="form-check form-switch">
											<input type="checkbox" className="form-check-input" id="customSwitch1" />
											<label className="form-check-label" htmlFor="customSwitch1">Toggle this switch element</label>
										</div>
										<div className="form-check form-switch">
											<input type="checkbox" className="form-check-input" defaultChecked id="customSwitch2" />
											<label className="form-check-label" htmlFor="customSwitch2">Checked switch element</label>
										</div>
										<div className="form-check form-switch">
											<input type="checkbox" className="form-check-input" disabled id="customSwitch3" />
											<label className="form-check-label" htmlFor="customSwitch3">Disabled switch element</label>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code8}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="selectMenu" className="mb-5">
								<h4>Select menu</h4>
								<p>Custom &lt;select&gt; menus need only a custom class, .form-select to trigger the custom styles. Custom styles are limited to the &lt;select&gt;’s initial appearance and cannot modify the &lt;option&gt;s due to browser limitations.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-xl-6">
												<div className="small text-inverse text-opacity-50 mb-2"><b>DEFAULT</b></div>
												<select className="form-select" defaultValue="">
													<option value="">Open this select menu</option>
													<option value="1">One</option>
													<option value="2">Two</option>
													<option value="3">Three</option>
												</select>
											</div>
											<div className="col-xl-6">
												<div className="small text-inverse text-opacity-50 mb-2"><b>SIZING</b></div>
												<select className="form-select form-select-lg mb-3" defaultValue="">
													<option value="">Open this select menu</option>
													<option value="1">One</option>
													<option value="2">Two</option>
													<option value="3">Three</option>
												</select>

												<select className="form-select form-select-sm" defaultValue="">
													<option value="">Open this select menu</option>
													<option value="1">One</option>
													<option value="2">Two</option>
													<option value="3">Three</option>
												</select>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code9}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="fileBrowser" className="mb-5">
								<h4>File browser</h4>
								<p>The file input is the most gnarly of the bunch and requires additional JavaScript if you’d like to hook them up with functional Choose file… and selected file name text.</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-xl-6">
												<div className="mb-3">
													<label className="form-label" htmlFor="defaultFile">Default file input example</label>
													<input type="file" className="form-control" id="defaultFile" />
												</div>
												<div className="mb-3">
													<label className="form-label" htmlFor="multipleFile">Multiple files input example</label>
													<input type="file" className="form-control" id="multipleFile" multiple />
												</div>
												<div className="mb-3">
													<label className="form-label" htmlFor="disabledFile">Disabled files input example</label>
													<input type="file" className="form-control" id="disabledFile" disabled />
												</div>
											</div>
											<div className="col-xl-6">
												<div className="mb-3">
													<label className="form-label" htmlFor="smFile">Small file input example</label>
													<input type="file" className="form-control form-control-sm" id="smFile" />
												</div>
												<div className="mb-3">
													<label className="form-label" htmlFor="lgFile">Large file input example</label>
													<input type="file" className="form-control form-control-lg" id="lgFile" />
												</div>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code10}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="formGrid" className="mb-5">
								<h4>Form grid</h4>
								<p>More complex forms can be built using bootstrap grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options.</p>
								<Card>
									<CardBody>
										<form>
											<div className="mb-3 row">
												<label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
												<div className="col-sm-10">
													<input type="email" className="form-control" id="inputEmail3" />
												</div>
											</div>
											<div className="mb-3 row">
												<label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
												<div className="col-sm-10">
													<input type="password" className="form-control" id="inputPassword3" />
												</div>
											</div>
											<fieldset className="mb-2">
												<div className="row">
													<label className="col-form-label col-sm-2 pt-0">Radios</label>
													<div className="col-sm-10">
														<div className="form-check">
															<input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" defaultValue="option1" defaultChecked />
															<label className="form-check-label" htmlFor="gridRadios1">
																First radio
															</label>
														</div>
														<div className="form-check">
															<input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" defaultValue="option2" />
															<label className="form-check-label" htmlFor="gridRadios2">
																Second radio
															</label>
														</div>
														<div className="form-check disabled">
															<input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" defaultValue="option3" disabled />
															<label className="form-check-label" htmlFor="gridRadios3">
																Third disabled radio
															</label>
														</div>
													</div>
												</div>
											</fieldset>
											<div className="row mb-2">
												<label className="col-sm-2 col-form-label pt-0">Checkbox</label>
												<div className="col-sm-10">
													<div className="form-check">
														<input className="form-check-input" type="checkbox" id="gridCheck1" />
														<label className="form-check-label" htmlFor="gridCheck1">
															Example checkbox
														</label>
													</div>
												</div>
											</div>
											<div className="form-group row">
												<div className="col-sm-10 offset-sm-2">
													<button type="submit" className="btn btn-outline-theme">Sign in</button>
												</div>
											</div>
										</form>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code11}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="helpText" className="mb-5">
								<h4>Help text</h4>
								<p>Block-level help text in forms can be created using <code>.form-text</code>. Inline help text can be flexibly implemented using any inline HTML element and utility classes like <code>.text-muted</code>.</p>
								<Card>
									<CardBody>
										<label htmlFor="inputPassword5" className="form-label">Password</label>
										<input type="password" id="inputPassword5" className="form-control mb-2" aria-describedby="passwordHelpBlock" />
										<small id="passwordHelpBlock" className="form-text text-muted">
											Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
										</small>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code12}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="inputGroup" className="mb-5">
								<h4>Input group</h4>
								<p>Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place <code>&lt;label&gt;</code> outside the input group.</p>
								<Card>
									<CardBody>
										<div className="input-group flex-nowrap">
											<span className="input-group-text" id="addon-wrapping">@</span>
											<input type="text" className="form-control" placeholder="Username" />
											<span className="input-group-text">.com</span>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code13}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="validation" className="mb-5">
								<h4>Validation</h4>
								<p>Provide valuable, actionable feedback to your users with HTML5 form validation. Choose from the browser default validation feedback, or implement custom messages with our built-in classes and starter JavaScript.</p>
								<Card>
									<CardBody>
										<form className="was-validated">
											<div className="row mb-n3">
												<div className="col-md-6 mb-3">
													<label htmlFor="validationValidInput" className="form-label">Valid input</label>
													<input type="text" className="form-control is-valid" id="validationValidInput" defaultValue="Mark" required />
													<div className="valid-feedback">
														Looks good!
													</div>
												</div>
												<div className="col-md-6 mb-3">
													<label htmlFor="validationInvalidInput" className="form-label">Invalid input</label>
													<input type="text" className="form-control is-invalid" id="validationInvalidInput" defaultValue="" required />
													<div className="invalid-feedback" id="validationInvalidInputFeedback">
														Please provide a name
													</div>
												</div>
												<div className="col-md-6 mb-3">
													<label htmlFor="validationInvalidInputGroup" className="form-label">Input group</label>
													<div className="input-group has-validation">
														<span className="input-group-text">@</span>
														<input type="text" className="form-control is-invalid" id="validationInvalidInputGroup" required />
														<div className="invalid-feedback">
															Please choose a username.
														</div>
													</div>
												</div>
												<div className="col-md-6 mb-3">
													<label htmlFor="validationSelectInvalid" className="form-label">Select dropdown</label>
													<select className="form-select is-invalid" id="validationSelectInvalid" defaultValue="" required>
														<option disabled value="">Choose...</option>
														<option>...</option>
													</select>
													<div className="invalid-feedback">
														Please select a valid state.
													</div>
												</div>
												<div className="col-md-6 mb-3">
													<label htmlFor="validationTextarea" className="form-label">Textarea</label>
													<textarea className="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
													<div className="invalid-feedback">
														Please enter a message in the textarea.
													</div>
												</div>
												<div className="col-md-6 mb-3">
													<div className="form-check pt-md-3 mt-md-2">
														<input className="form-check-input is-invalid" type="checkbox" id="validationInvalidCheckbox" required />
														<label className="form-check-label" htmlFor="validationInvalidCheckbox">
															Agree to terms and conditions
														</label>
														<div className="invalid-feedback">
															You must agree before submitting.
														</div>
													</div>
												</div>
											</div>
										</form>
										<hr />
										<form className="was-validated" noValidate>
											<div className="row mb-n3">
												<div className="col-md-6 mb-5 position-relative">
													<label htmlFor="validationTooltip01">Tooltip valid</label>
													<input type="text" className="form-control" id="validationTooltip01" defaultValue="Mark" required />
													<div className="valid-tooltip">
														Looks good!
													</div>
												</div>
												<div className="col-md-6 mb-5 position-relative">
													<label htmlFor="validationTooltip02">Tooltip invalid</label>
													<div className="input-group">
														<div className="input-group-text">@</div>
														<input type="text" className="form-control" id="validationTooltip02" required />
														<div className="invalid-tooltip">
															Field is required
														</div>
													</div>
												</div>
												<div className="col-md-6 mb-5 position-relative">
													<label htmlFor="validationTooltip03">Tooltip dropdown</label>
													<select className="form-select" id="validationTooltip03" defaultValue="" required>
														<option disabled value="">Choose...</option>
														<option>...</option>
													</select>
													<div className="invalid-tooltip">
														Please select a valid state.
													</div>
												</div>
											</div>
										</form>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code14}</Highlight>
									</div>
								</Card>
							</div>
						</div>
						<div className="col-xl-3">
							<NavScrollTo>
								<nav className="nav">
									<a className="nav-link" href="#formControls" data-toggle="scroll-to">Form controls</a>
									<a className="nav-link" href="#sizing" data-toggle="scroll-to">Sizing</a>
									<a className="nav-link" href="#readOnly" data-toggle="scroll-to">Readonly</a>
									<a className="nav-link" href="#readOnlyPlainText" data-toggle="scroll-to">Readonly plain text</a>
									<a className="nav-link" href="#rangeInputs" data-toggle="scroll-to">Range inputs</a>
									<a className="nav-link" href="#checkboxes" data-toggle="scroll-to">Checkboxes</a>
									<a className="nav-link" href="#radios" data-toggle="scroll-to">Radios</a>
									<a className="nav-link" href="#switches" data-toggle="scroll-to">Switches</a>
									<a className="nav-link" href="#selectMenu" data-toggle="scroll-to">Select menu</a>
									<a className="nav-link" href="#fileBrowser" data-toggle="scroll-to">File browser</a>
									<a className="nav-link" href="#formGrid" data-toggle="scroll-to">Form grid</a>
									<a className="nav-link" href="#helpText" data-toggle="scroll-to">Help text</a>
									<a className="nav-link" href="#inputGroup" data-toggle="scroll-to">Input group</a>
									<a className="nav-link" href="#validation" data-toggle="scroll-to">Validation</a>
								</nav>
							</NavScrollTo>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FormElements;