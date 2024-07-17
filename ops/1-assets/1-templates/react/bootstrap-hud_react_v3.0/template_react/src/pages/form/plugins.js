import React, { useEffect, useState } from 'react';
import Highlight from 'react-highlight';
import DateTime from 'react-datetime';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import InputMask from 'react-input-mask';
import ReactQuill from 'react-quill';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import Moment from 'moment';
import { SketchPicker, ChromePicker } from 'react-color';
import { TagsInput } from 'react-tag-input-component';
import { Card, CardBody } from './../../components/card/card.jsx';
import { NavScrollTo } from './../../components/nav-scroll-to/nav-scroll-to.jsx';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-quill/dist/quill.snow.css';
import 'react-datetime/css/react-datetime.css';
import 'bootstrap-daterangepicker/daterangepicker.css';

function FormPlugins() {
	const [code1, setCode1] = useState();
	const [code2, setCode2] = useState();
	const [code3, setCode3] = useState();
	const [code4, setCode4] = useState();
	const [code5, setCode5] = useState();
	const [code6, setCode6] = useState();
	const [code7, setCode7] = useState();
	const [code8, setCode8] = useState();
	const [startDate, setStartDate] = useState(new Date());
	const [maxDateDisabled, setMaxDateDisabled] = useState();
	const [maxYesterday, setMaxYesterday] = useState();
	const [sketchBackgroundColor, setSketchBackgroundColor] = useState('#348fe2');
	const [chromeBackgroundColor, setChromeBackgroundColor] = useState('#8753de');
	const [dateRangeCurrentWeek, setDateRangeCurrentWeek] = useState(Moment().subtract(7, 'days').format('D MMM YYYY') + ' - ' + Moment().format('D MMM YYYY'));
	const [dateRangePrevWeek, setDateRangePrevWeek] = useState(Moment().subtract(15, 'days').format('D MMM') + ' - ' + Moment().subtract(8, 'days').format('D MMM YYYY'));
	
	var endDate = '';
	var minYesterday = DateTime.moment().subtract(1, 'day');
	var minDateRange = (current) => { return current.isAfter( minYesterday ); };
	var maxDateRange = (current) => { return current.isAfter( maxYesterday ); };
	var selectOptions = [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' }
	];
	var colourOptions = [
		{ value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
		{ value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
		{ value: 'purple', label: 'Purple', color: '#5243AA' },
		{ value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
		{ value: 'orange', label: 'Orange', color: '#FF8B00' },
		{ value: 'yellow', label: 'Yellow', color: '#FFC400' },
		{ value: 'green', label: 'Green', color: '#36B37E' },
		{ value: 'forest', label: 'Forest', color: '#00875A' },
		{ value: 'slate', label: 'Slate', color: '#253858' },
		{ value: 'silver', label: 'Silver', color: '#666666' },
	];
	var selected = ['Apples', 'Pears'];
	var value = '';
	
	function minDateChange(value) {
		setMaxDateDisabled(false);
		setMaxYesterday(value);
	}
	
	function handleChange(date) {
		setStartDate(date);
	}
	
	function handleSketchChangeComplete(color) {
		setSketchBackgroundColor(color.hex);
	}
	
	function handleChromeChangeComplete(color) {
		setChromeBackgroundColor(color.hex);
	};
	
	function setValue(value) {
	};
	
	function handleDateApplyEvent(event, picker) {
		var startDate = picker.startDate;
		var endDate = picker.endDate;
		var gap = endDate.diff(startDate, 'days');
		
		var currentWeek = startDate.format('D MMM YYYY') + ' - ' + endDate.format('D MMM YYYY');
		var prevWeek = Moment(startDate).subtract(gap, 'days').format('D MMM') + ' - ' + Moment(startDate).subtract(1, 'days').format('D MMM YYYY');
		
		setDateRangeCurrentWeek(currentWeek);
		setDateRangePrevWeek(prevWeek);
	}
	
	useEffect(() => {
		fetch('/assets/data/form/plugin-code-1.json').then(function(response) { return response.text(); }).then((html) => { setCode1(html); });
		fetch('/assets/data/form/plugin-code-2.json').then(function(response) { return response.text(); }).then((html) => { setCode2(html); });
		fetch('/assets/data/form/plugin-code-3.json').then(function(response) { return response.text(); }).then((html) => { setCode3(html); });
		fetch('/assets/data/form/plugin-code-4.json').then(function(response) { return response.text(); }).then((html) => { setCode4(html); });
		fetch('/assets/data/form/plugin-code-5.json').then(function(response) { return response.text(); }).then((html) => { setCode5(html); });
		fetch('/assets/data/form/plugin-code-6.json').then(function(response) { return response.text(); }).then((html) => { setCode6(html); });
		fetch('/assets/data/form/plugin-code-7.json').then(function(response) { return response.text(); }).then((html) => { setCode7(html); });
		fetch('/assets/data/form/plugin-code-8.json').then(function(response) { return response.text(); }).then((html) => { setCode8(html); });
	});
	
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-xl-10">
					<div className="row">
						<div className="col-xl-9">
							<ul className="breadcrumb">
								<li className="breadcrumb-item"><a href="#/">FORMS</a></li>
								<li className="breadcrumb-item active">FORM PLUGINS</li>
							</ul>
							
							<h1 className="page-header">
								Form Plugins <small>page header description goes here...</small>
							</h1>
							
							<hr className="mb-4" />
							
							<div id="reactDatetime" className="mb-5">
								<h4>React Datetime</h4>
								<p>A date and time picker in the same React.js component. It can be used as a datepicker, timepicker or both at the same time. It is highly customizable and it even allows to edit date's milliseconds. Please read the <a href="https://github.com/arqex/react-datetime" target="_blank" rel="noreferrer">official documentation</a> for the full list of options.</p>
								<Card>
									<CardBody className="pb-2">
										<form>
											<div className="row">
												<div className="col-xl-6">
													<div className="mb-3">
														<label className="form-label">Default <span className="text-danger">*</span></label>
														<DateTime inputProps={{ placeholder: 'Datepicker' }} closeOnSelect={true} />
													</div>
												</div>
												<div className="col-xl-6">
													<div className="mb-3">
														<label className="form-label">Select Time <span className="text-danger">*</span></label>
														<DateTime dateFormat={false} inputProps={{ placeholder: 'Timepicker' }} />
													</div>
												</div>
												<div className="col-xl-6">
													<div className="mb-3">
														<label className="form-label">Range <span className="text-danger">*</span></label>
														<div className="row gx-2">
															<div className="col-6">
																<DateTime isValidDate={ minDateRange } inputProps={{ placeholder: 'Min Date' }} closeOnSelect={true} onChange={ minDateChange } />
															</div>
															<div className="col-6">
																<DateTime isValidDate={ maxDateRange } inputProps={{ placeholder: 'Max Date', disabled: maxDateDisabled }} closeOnSelect={true} />
															</div>
														</div>
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
							
							<div id="reactSelect" className="mb-5">
								<h4>React Select</h4>
								<p>A flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete, async and creatable support. Please read the <a href="https://react-select.com/home" target="_blank" rel="noreferrer">official documentation</a> for the full list of options.</p>
								<Card>
									<CardBody className="pb-2">
										<form>
											<div className="row">
												<div className="col-xl-6">
													<div className="mb-3">
														<label className="form-label">Default <span className="text-danger">*</span></label>
														<Select options={selectOptions} classNamePrefix="react-select" />
													</div>
												</div>
												<div className="col-xl-6">
													<div className="mb-3">
														<label className="form-label">Multi <span className="text-danger">*</span></label>
														<Select defaultValue={[colourOptions[2]]} isMulti name="colors" options={colourOptions} classNamePrefix="react-select" />
													</div>
												</div>
											</div>
										</form>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code2}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="reactDatepicker" className="mb-5">
								<h4>React Datepicker</h4>
								<p>A simple and reusable datepicker component for React. Please read the <a href="https://reactdatepicker.com/" target="_blank" rel="noreferrer">official documentation</a> for the full list of options.</p>
								<Card>
									<CardBody className="pb-2">
										<form>
											<div className="row">
												<div className="col-xl-6">
													<div className="mb-3">
														<label className="form-label">Default <span className="text-danger">*</span></label>
														<DatePicker selected={startDate} onChange={handleChange} className="form-control" />
													</div>
												</div>
											</div>
										</form>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code3}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="reactInputMask" className="mb-5">
								<h4>React Input Mask</h4>
								<p>Input masking component for React. Made with attention to UX. Please read the <a href="https://github.com/sanniassin/react-input-mask" target="_blank" rel="noreferrer">official documentation</a> for the full list of options.</p>
								<Card>
									<CardBody className="pb-2">
										<form>
											<div className="row">
												<div className="col-xl-6">
													<div className="mb-3">
														<label className="form-label">Date <span className="text-danger">*</span></label>
														<InputMask mask="99/99/9999" className="form-control" placeholder="mm/dd/yyyy" />
													</div>
												</div>
												<div className="col-xl-6">
													<div className="mb-3">
														<label className="form-label">Phone <span className="text-danger">*</span></label>
														<InputMask mask="(999) 999-9999" className="form-control" placeholder="(999) 999-9999" maskChar={null} />
													</div>
												</div>
											</div>
										</form>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code4}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="reactColor" className="mb-5">
								<h4>React Color</h4>
								<p>A Collection of Color Pickers from Sketch, Photoshop, Chrome, Github, Twitter, Material Design & more. Please read the <a href="https://casesandberg.github.io/react-color/" target="_blank" rel="noreferrer">official documentation</a> for the full list of options.</p>
								<Card>
									<CardBody className="pb-2">
										<form>
											<div className="row">
												<div className="col-xl-6">
													<div className="mb-3">
														<label className="form-label">Sketch Type Colorpicker <span className="text-danger">*</span></label>
														<div className="input-group">
															<input type="text" className="form-control" readOnly value={sketchBackgroundColor} />
															<div className="dropdown-menu dropdown-menu-end p-0 border-0">
																<SketchPicker color={ sketchBackgroundColor } onChangeComplete={ handleSketchChangeComplete } />
															</div>
															<span className="input-group-text" data-bs-toggle="dropdown" data-bs-auto-close="outside">
																<i style={{width: '16px', height: '16px', display: 'block', background: sketchBackgroundColor}}></i>
															</span>
														</div>
													</div>
												</div>
												<div className="col-xl-6">
													<div className="mb-3">
														<label className="form-label">Chrome Type Colorpicker <span className="text-danger">*</span></label>
														<div className="input-group">
															<input type="text" className="form-control" readOnly value={chromeBackgroundColor} />
															<div className="dropdown-menu dropdown-menu-end p-0 border-0">
																<ChromePicker color={ chromeBackgroundColor } onChangeComplete={ handleChromeChangeComplete } />
															</div>
															<span className="input-group-text" data-bs-toggle="dropdown" data-bs-auto-close="outside">
																<i style={{width: '16px', height: '16px', display: 'block', background: chromeBackgroundColor}}></i>
															</span>
														</div>
													</div>
												</div>
											</div>
										</form>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code5}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="reactTagInputComponent" className="mb-5">
								<h4>React Tag Input Component</h4>
								<p>A lightweight component for tag(s) input. Please read the <a href="https://github.com/hc-oss/react-tag-input-component" target="_blank" rel="noreferrer">official documentation</a> for the full list of options.</p>
								<Card>
									<CardBody className="pb-2">
										<form>
											<div className="row">
												<div className="col-xl-8">
													<div className="mb-3">
														<label className="form-label">Sketch Type Colorpicker <span className="text-danger">*</span></label>
														<TagsInput value={selected} name="fruits" placeHolder="enter fruits" />
													</div>
												</div>
											</div>
										</form>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code6}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="reactQuill" className="mb-5">
								<h4>React Quill</h4>
								<p>A Quill component for React. Please read the <a href="https://github.com/hc-oss/react-tag-input-component" target="_blank" rel="noreferrer">official documentation</a> for the full list of options.</p>
								<Card>
									<CardBody className="pb-2">
										<form>
											<div className="row">
												<div className="col-xl-8">
													<div className="mb-3">
														<label className="form-label">Default <span className="text-danger">*</span></label>
														<div className="h-200px mb-5">
															<ReactQuill theme="snow" className="h-100" value={value} onChange={setValue} />
														</div>
													</div>
												</div>
											</div>
										</form>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code7}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="reactDateRangePicker" className="mb-5">
								<h4>React Date Range Picker</h4>
								<p>A date/time picker for react (using bootstrap). Please read the <a href="https://github.com/skratchdot/react-bootstrap-daterangepicker" target="_blank" rel="noreferrer">official documentation</a> for the full list of options.</p>
								<Card>
									<CardBody className="pb-2">
										<div className="mb-3">
											<label className="form-label">Default <span className="text-danger">*</span></label>
											<div className="d-sm-flex align-items-center mb-3">
												<DateRangePicker startDate={startDate} endDate={endDate} onApply={handleDateApplyEvent}>
													<button className="btn btn-outline-theme text-truncate me-3 mb-2 mb-sm-0">
														<i className="fa fa-fw fa-calendar me-1"></i> 
														<span>{dateRangeCurrentWeek}</span>
														<i className="fa fa-fw fa-caret-down me-n1"></i> 
													</button>
												</DateRangePicker>
												<div>compared to <span>{dateRangePrevWeek}</span></div>
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
								<nav className="nav text-nowrap">
									<a className="nav-link" href="#reactDatetime" data-toggle="scroll-to">React Datetime</a>
									<a className="nav-link text-nowrap" href="#reactSelect" data-toggle="scroll-to">React Select</a>
									<a className="nav-link" href="#reactDatepicker" data-toggle="scroll-to">React Datepicker</a>
									<a className="nav-link" href="#reactInputMask" data-toggle="scroll-to">React Input Mask</a>
									<a className="nav-link" href="#reactColor" data-toggle="scroll-to">React Color</a>
									<a className="nav-link" href="#reactTagInputComponent" data-toggle="scroll-to">React Tag Input Component</a>
									<a className="nav-link" href="#reactQuill" data-toggle="scroll-to">React Quill</a>
									<a className="nav-link" href="#reactDateRangePicker" data-toggle="scroll-to">React Date Range Picker</a>
								</nav>
							</NavScrollTo>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FormPlugins;