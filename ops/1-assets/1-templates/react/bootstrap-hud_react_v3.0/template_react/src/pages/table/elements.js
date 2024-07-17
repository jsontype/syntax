import React, { useEffect, useState } from 'react';
import { Card, CardBody } from './../../components/card/card.jsx';
import { NavScrollTo } from './../../components/nav-scroll-to/nav-scroll-to.jsx';
import Highlight from 'react-highlight';

function TableElements() {
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
		fetch('/assets/data/table/element-code-1.json').then(function(response) { return response.text(); }).then((html) => { setCode1(html); });
		fetch('/assets/data/table/element-code-2.json').then(function(response) { return response.text(); }).then((html) => { setCode2(html); });
		fetch('/assets/data/table/element-code-3.json').then(function(response) { return response.text(); }).then((html) => { setCode3(html); });
		fetch('/assets/data/table/element-code-4.json').then(function(response) { return response.text(); }).then((html) => { setCode4(html); });
		fetch('/assets/data/table/element-code-5.json').then(function(response) { return response.text(); }).then((html) => { setCode5(html); });
		fetch('/assets/data/table/element-code-6.json').then(function(response) { return response.text(); }).then((html) => { setCode6(html); });
		fetch('/assets/data/table/element-code-7.json').then(function(response) { return response.text(); }).then((html) => { setCode7(html); });
		fetch('/assets/data/table/element-code-8.json').then(function(response) { return response.text(); }).then((html) => { setCode8(html); });
		fetch('/assets/data/table/element-code-9.json').then(function(response) { return response.text(); }).then((html) => { setCode9(html); });
		fetch('/assets/data/table/element-code-10.json').then(function(response) { return response.text(); }).then((html) => { setCode10(html); });
	});

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-xl-10">
					<div className="row">
						<div className="col-xl-9">
							<ul className="breadcrumb">
								<li className="breadcrumb-item"><a href="#/">TABLES</a></li>
								<li className="breadcrumb-item active">TABLE ELEMENTS</li>
							</ul>
							
							<h1 className="page-header">
								Table Elements <small>page header description goes here...</small>
							</h1>
							
							<hr className="mb-4" />
							
							<div id="basicTable" className="mb-5">
								<h4>Basic Table</h4>
								<p>Using the most basic table markup, here’s how .table-based tables look in Bootstrap. You can also invert the colors—with light text on dark backgrounds—with <code>.table-dark</code>.</p>
								<Card>
									<CardBody>
										<div className="row mb-n3">
											<div className="col-xl-6">
												<div className="small text-inverse text-opacity-50 mb-3"><b>DEFAULT TABLE</b></div>
												<table className="table">
													<thead>
														<tr>
															<th scope="col">#</th>
															<th scope="col">First</th>
															<th scope="col">Last</th>
															<th scope="col">Handle</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<th scope="row">1</th>
															<td>Mark</td>
															<td>Otto</td>
															<td>@mdo</td>
														</tr>
														<tr>
															<th scope="row">2</th>
															<td>Jacob</td>
															<td>Thornton</td>
															<td>@fat</td>
														</tr>
														<tr>
															<th scope="row">3</th>
															<td>Larry</td>
															<td>the Bird</td>
															<td>@twitter</td>
														</tr>
													</tbody>
												</table>
											</div>
											<div className="col-xl-6">
												<div className="small text-inverse text-opacity-50 mb-3"><b>DARK TABLE</b></div>
												<table className="table table-dark">
													<thead>
														<tr>
															<th scope="col">#</th>
															<th scope="col">First</th>
															<th scope="col">Last</th>
															<th scope="col">Handle</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<th scope="row">1</th>
															<td>Mark</td>
															<td>Otto</td>
															<td>@mdo</td>
														</tr>
														<tr>
															<th scope="row">2</th>
															<td>Jacob</td>
															<td>Thornton</td>
															<td>@fat</td>
														</tr>
														<tr>
															<th scope="row">3</th>
															<td>Larry</td>
															<td>the Bird</td>
															<td>@twitter</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code1}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="tableHeadOptions" className="mb-5">
								<h4>Table head options</h4>
								<p>Similar to tables and dark tables, use the modifier classes <code>.thead-light</code> or <code>.thead-dark</code> to make <code>&lt;thead&gt;</code>s appear light or dark gray.</p>
								<Card>
									<CardBody>
										<div className="row mb-n3">
											<div className="col-xl-6">
												<div className="small text-inverse text-opacity-50 mb-3"><b>DARK HEADER</b></div>
												<table className="table">
													<thead className="table-dark">
														<tr>
															<th scope="col">#</th>
															<th scope="col">First</th>
															<th scope="col">Last</th>
															<th scope="col">Handle</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<th scope="row">1</th>
															<td>Mark</td>
															<td>Otto</td>
															<td>@mdo</td>
														</tr>
														<tr>
															<th scope="row">2</th>
															<td>Jacob</td>
															<td>Thornton</td>
															<td>@fat</td>
														</tr>
														<tr>
															<th scope="row">3</th>
															<td>Larry</td>
															<td>the Bird</td>
															<td>@twitter</td>
														</tr>
													</tbody>
												</table>
											</div>
											<div className="col-xl-6">
												<div className="small text-inverse text-opacity-50 mb-3"><b>LIGHT HEADER</b></div>
												<table className="table">
													<thead className="table-light">
														<tr>
															<th scope="col">#</th>
															<th scope="col">First</th>
															<th scope="col">Last</th>
															<th scope="col">Handle</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<th scope="row">1</th>
															<td>Mark</td>
															<td>Otto</td>
															<td>@mdo</td>
														</tr>
														<tr>
															<th scope="row">2</th>
															<td>Jacob</td>
															<td>Thornton</td>
															<td>@fat</td>
														</tr>
														<tr>
															<th scope="row">3</th>
															<td>Larry</td>
															<td>the Bird</td>
															<td>@twitter</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code2}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="stripedRows" className="mb-5">
								<h4>Striped rows</h4>
								<p>Use <code>.table-striped</code> to add zebra-striping to any table row within the <code>&lt;tbody&gt;</code>.</p>
								<Card>
									<CardBody>
										<table className="table table-striped mb-0">
											<thead>
												<tr>
													<th scope="col">#</th>
													<th scope="col">First</th>
													<th scope="col">Last</th>
													<th scope="col">Handle</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">1</th>
													<td>Mark</td>
													<td>Otto</td>
													<td>@mdo</td>
												</tr>
												<tr>
													<th scope="row">2</th>
													<td>Jacob</td>
													<td>Thornton</td>
													<td>@fat</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td>Larry</td>
													<td>the Bird</td>
													<td>@twitter</td>
												</tr>
											</tbody>
										</table>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code3}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="borderedTable" className="mb-5">
								<h4>Bordered table</h4>
								<p>Add <code>.table-bordered</code> for borders on all sides of the table and cells.</p>
								<Card>
									<CardBody>
										<table className="table table-bordered mb-0">
											<thead>
												<tr>
													<th scope="col">#</th>
													<th scope="col">First</th>
													<th scope="col">Last</th>
													<th scope="col">Handle</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">1</th>
													<td>Mark</td>
													<td>Otto</td>
													<td>@mdo</td>
												</tr>
												<tr>
													<th scope="row">2</th>
													<td>Jacob</td>
													<td>Thornton</td>
													<td>@fat</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td colSpan="2">Larry the Bird</td>
													<td>@twitter</td>
												</tr>
											</tbody>
										</table>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code4}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="borderlessTable" className="mb-5">
								<h4>Borderless table</h4>
								<p></p>
								<Card>
									<CardBody>
										<table className="table table-borderless mb-0">
											<thead>
												<tr>
													<th scope="col">#</th>
													<th scope="col">First</th>
													<th scope="col">Last</th>
													<th scope="col">Handle</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">1</th>
													<td>Mark</td>
													<td>Otto</td>
													<td>@mdo</td>
												</tr>
												<tr>
													<th scope="row">2</th>
													<td>Jacob</td>
													<td>Thornton</td>
													<td>@fat</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td colSpan="2">Larry the Bird</td>
													<td>@twitter</td>
												</tr>
											</tbody>
										</table>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code5}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="hoverableRows" className="mb-5">
								<h4>Hoverable rows</h4>
								<p>Add <code>.table-hover</code> to enable a hover state on table rows within a <code>&lt;tbody&gt;</code>.</p>
								<Card>
									<CardBody>
										<table className="table table-hover mb-0">
											<thead>
												<tr>
													<th scope="col">#</th>
													<th scope="col">First</th>
													<th scope="col">Last</th>
													<th scope="col">Handle</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">1</th>
													<td>Mark</td>
													<td>Otto</td>
													<td>@mdo</td>
												</tr>
												<tr>
													<th scope="row">2</th>
													<td>Jacob</td>
													<td>Thornton</td>
													<td>@fat</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td colSpan="2">Larry the Bird</td>
													<td>@twitter</td>
												</tr>
											</tbody>
										</table>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code6}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="smallTable" className="mb-5">
								<h4>Small table</h4>
								<p>Add <code>.table-sm</code> to make tables more compact by cutting cell padding in half.</p>
								<Card>
									<CardBody>
										<table className="table table-sm mb-0">
											<thead>
												<tr>
													<th scope="col">#</th>
													<th scope="col">First</th>
													<th scope="col">Last</th>
													<th scope="col">Handle</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>1</td>
													<td>Mark</td>
													<td>Otto</td>
													<td>@mdo</td>
												</tr>
												<tr>
													<td >2</td>
													<td>Jacob</td>
													<td>Thornton</td>
													<td>@fat</td>
												</tr>
												<tr>
													<td>3</td>
													<td colSpan="2">Larry the Bird</td>
													<td>@twitter</td>
												</tr>
											</tbody>
										</table>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code7}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="contextualClasses" className="mb-5">
								<h4>Contextual classes</h4>
								<p>Use contextual classes to color table rows or individual cells.</p>
								<Card>
									<CardBody>
										<table className="table mb-0">
											<thead>
												<tr>
													<th scope="col">Class</th>
													<th scope="col">Heading</th>
													<th scope="col">Heading</th>
												</tr>
											</thead>
											<tbody>
												<tr className="table-active">
													<th scope="row">Active</th>
													<td>Cell</td>
													<td>Cell</td>
												</tr>
												<tr>
													<th scope="row">Default</th>
													<td>Cell</td>
													<td>Cell</td>
												</tr>
												<tr className="table-primary">
													<th scope="row">Primary</th>
													<td>Cell</td>
													<td>Cell</td>
												</tr>
												<tr className="table-secondary">
													<th scope="row">Secondary</th>
													<td>Cell</td>
													<td>Cell</td>
												</tr>
												<tr className="table-success">
													<th scope="row">Success</th>
													<td>Cell</td>
													<td>Cell</td>
												</tr>
												<tr className="table-danger">
													<th scope="row">Danger</th>
													<td>Cell</td>
													<td>Cell</td>
												</tr>
												<tr className="table-warning">
													<th scope="row">Warning</th>
													<td>Cell</td>
													<td>Cell</td>
												</tr>
												<tr className="table-info">
													<th scope="row">Info</th>
													<td>Cell</td>
													<td>Cell</td>
												</tr>
												<tr className="table-light">
													<th scope="row">Light</th>
													<td>Cell</td>
													<td>Cell</td>
												</tr>
												<tr className="table-dark">
													<th scope="row">Dark</th>
													<td>Cell</td>
													<td>Cell</td>
												</tr>
												<tr className="bg-primary text-inverse">
													<th scope="row">Warning</th>
													<td>Cell</td>
													<td>Cell</td>
												</tr>
												<tr className="bg-success text-inverse">
													<th scope="row">Info</th>
													<td>Cell</td>
													<td>Cell</td>
												</tr>
												<tr className="bg-warning text-inverse">
													<th scope="row">Light</th>
													<td>Cell</td>
													<td>Cell</td>
												</tr>
												<tr className="bg-danger text-inverse">
													<th scope="row">Dark</th>
													<td>Cell</td>
													<td>Cell</td>
												</tr>
												<tr className="bg-info text-inverse">
													<th scope="row">Dark</th>
													<td>Cell</td>
													<td>Cell</td>
												</tr>
											</tbody>
										</table>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code8}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="captions" className="mb-5">
								<h4>Captions</h4>
								<p>A <code>&lt;caption&gt;</code> functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it.</p>
								<Card>
									<CardBody>
										<table className="table mb-0">
											<caption>List of users</caption>
											<thead>
												<tr>
													<th scope="col">#</th>
													<th scope="col">First</th>
													<th scope="col">Last</th>
													<th scope="col">Handle</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">1</th>
													<td>Mark</td>
													<td>Otto</td>
													<td>@mdo</td>
												</tr>
												<tr>
													<th scope="row">2</th>
													<td>Jacob</td>
													<td>Thornton</td>
													<td>@fat</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td>Larry</td>
													<td>the Bird</td>
													<td>@twitter</td>
												</tr>
											</tbody>
										</table>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code9}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="responsiveTables" className="mb-5">
								<h4>Responsive tables</h4>
								<p>Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a <code>.table</code> with <code>.table-responsive</code>. Or, pick a maximum breakpoint with which to have a responsive table up to by using <code>.table-responsive(-sm|-md|-lg|-xl)</code>.</p>
								<Card>
									<CardBody>
										<div className="table-responsive">
											<table className="table mb-0">
												<thead>
													<tr>
														<th scope="col">#</th>
														<th scope="col">Heading</th>
														<th scope="col">Heading</th>
														<th scope="col">Heading</th>
														<th scope="col">Heading</th>
														<th scope="col">Heading</th>
														<th scope="col">Heading</th>
														<th scope="col">Heading</th>
														<th scope="col">Heading</th>
														<th scope="col">Heading</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<th scope="row">1</th>
														<td>Cell</td>
														<td>Cell</td>
														<td>Cell</td>
														<td>Cell</td>
														<td>Cell</td>
														<td>Cell</td>
														<td>Cell</td>
														<td>Cell</td>
														<td>Cell</td>
													</tr>
													<tr>
														<th scope="row">2</th>
														<td>Cell</td>
														<td>Cell</td>
														<td>Cell</td>
														<td>Cell</td>
														<td>Cell</td>
														<td>Cell</td>
														<td>Cell</td>
														<td>Cell</td>
														<td>Cell</td>
													</tr>
													<tr>
														<th scope="row">3</th>
														<td>Cell</td>
														<td>Cell</td>
														<td>Cell</td>
														<td>Cell</td>
														<td>Cell</td>
														<td>Cell</td>
														<td>Cell</td>
														<td>Cell</td>
														<td>Cell</td>
													</tr>
												</tbody>
											</table>
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
									<a className="nav-link" href="#basicTable" data-toggle="scroll-to">Basic table</a>
									<a className="nav-link" href="#tableHeadOptions" data-toggle="scroll-to">Table head options</a>
									<a className="nav-link" href="#stripedRows" data-toggle="scroll-to">Striped rows</a>
									<a className="nav-link" href="#borderedTable" data-toggle="scroll-to">Bordered table</a>
									<a className="nav-link" href="#borderlessTable" data-toggle="scroll-to">Borderless table</a>
									<a className="nav-link" href="#hoverableRows" data-toggle="scroll-to">Hoverable rows</a>
									<a className="nav-link" href="#smallTable" data-toggle="scroll-to">Small table</a>
									<a className="nav-link" href="#contextualClasses" data-toggle="scroll-to">Contextual classes</a>
									<a className="nav-link" href="#captions" data-toggle="scroll-to">Captions</a>
									<a className="nav-link" href="#responsiveTables" data-toggle="scroll-to">Responsive tables</a>
								</nav>
							</NavScrollTo>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TableElements;