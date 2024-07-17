import React, { useEffect, useState } from 'react';
import { Card, CardBody } from './../../components/card/card.jsx';
import Highlight from 'react-highlight';
import { NavScrollTo } from './../../components/nav-scroll-to/nav-scroll-to.jsx';

function UiTypography() {
	const [code1, setCode1] = useState();
	const [code2, setCode2] = useState();
	const [code3, setCode3] = useState();
	const [code4, setCode4] = useState();
	const [code5, setCode5] = useState();
	const [code6, setCode6] = useState();
	const [code7, setCode7] = useState();
	const [code8, setCode8] = useState();
	const [code9, setCode9] = useState();
	
	useEffect(() => {
		fetch('/assets/data/ui/typography-code-1.json').then(function(response) { return response.text(); }).then((html) => { setCode1(html); });
		fetch('/assets/data/ui/typography-code-2.json').then(function(response) { return response.text(); }).then((html) => { setCode2(html); });
		fetch('/assets/data/ui/typography-code-3.json').then(function(response) { return response.text(); }).then((html) => { setCode3(html); });
		fetch('/assets/data/ui/typography-code-4.json').then(function(response) { return response.text(); }).then((html) => { setCode4(html); });
		fetch('/assets/data/ui/typography-code-5.json').then(function(response) { return response.text(); }).then((html) => { setCode5(html); });
		fetch('/assets/data/ui/typography-code-6.json').then(function(response) { return response.text(); }).then((html) => { setCode6(html); });
		fetch('/assets/data/ui/typography-code-7.json').then(function(response) { return response.text(); }).then((html) => { setCode7(html); });
		fetch('/assets/data/ui/typography-code-8.json').then(function(response) { return response.text(); }).then((html) => { setCode8(html); });
		fetch('/assets/data/ui/typography-code-9.json').then(function(response) { return response.text(); }).then((html) => { setCode9(html); });
	});

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-xl-10">
					<div className="row">
						<div className="col-xl-9">
							<ul className="breadcrumb">
								<li className="breadcrumb-item"><a href="#/">UI KITS</a></li>
								<li className="breadcrumb-item active">TYPOGRAPHY</li>
							</ul>
							
							<h1 className="page-header">
								Typography <small>page header description goes here...</small>
							</h1>
							
							<hr className="mb-4" />
							
							<div id="headings" className="mb-5">
								<h4>Headings</h4>
								<p>All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available. <code>.h1</code> through <code>.h6</code> classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element. Please read the <a href="https://getbootstrap.com/docs/5.3/content/typography/" target="_blank" rel="noreferrer">official Bootstrap documentation</a> for the full list of options.</p>
								<Card>
									<CardBody>
										<h1>h1. Bootstrap heading</h1>
										<h2>h2. Bootstrap heading</h2>
										<h3>h3. Bootstrap heading</h3>
										<h4>h4. Bootstrap heading</h4>
										<h5>h5. Bootstrap heading</h5>
										<h6>h6. Bootstrap heading</h6>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code1}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="displayHeadings" className="mb-5">
								<h4>Display headings</h4>
								<p>Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a display heading—a larger, slightly more opinionated heading style.</p>
								<Card>
									<CardBody>
										<h1 className="display-1">Display 1</h1>
										<h1 className="display-2">Display 2</h1>
										<h1 className="display-3">Display 3</h1>
										<h1 className="display-4">Display 4</h1>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code2}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="lead" className="mb-5">
								<h4>Lead</h4>
								<p>Make a paragraph stand out by adding <code>.lead</code>.</p>
								<Card>
									<CardBody>
										<p className="lead">
											Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
										</p>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code3}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="inlineTextElements" className="mb-5">
								<h4>Headings</h4>
								<p>Styling for common inline HTML5 elements.</p>
								<Card>
									<CardBody>
										<p>You can use the mark tag to <mark>highlight</mark> text.</p>
										<p><del>This line of text is meant to be treated as deleted text.</del></p>
										<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
										<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
										<p><u>This line of text will render as underlined</u></p>
										<p><small>This line of text is meant to be treated as fine print.</small></p>
										<p><strong>This line rendered as bold text.</strong></p>
										<p><em>This line rendered as italicized text.</em></p>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code4}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="abbreviations" className="mb-5">
								<h4>Abbreviations</h4>
								<p>Stylized implementation of HTML’s <code>&lt;abbr&gt;</code> element for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies. Add <code>.initialism</code> to an abbreviation for a slightly smaller font-size.</p>
								<Card>
									<CardBody>
										<p><abbr title="attribute">attr</abbr></p>
										<p><abbr title="HyperText Markup Language" className="initialism">HTML</abbr></p>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code5}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="blockquotes" className="mb-5">
								<h4>Blockquotes</h4>
								<p>For quoting blocks of content from another source within your document. Wrap <code>&lt;blockquote className="blockquote"&gt;</code> around any HTML as the quote.</p>
								<Card>
									<CardBody>
										<figure className="mb-0">
											<blockquote className="blockquote">
												<p>A well-known quote, contained in a blockquote element.</p>
											</blockquote>
											<figcaption className="blockquote-footer mb-0">
												Someone famous in <cite title="Source Title">Source Title</cite>
											</figcaption>
										</figure>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code6}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="unstyledList" className="mb-5">
								<h4>Unstyled list</h4>
								<p>Remove the default <code>list-style</code> and left margin on list items (immediate children only). This only applies to immediate children list items, meaning you will need to add the class for any nested lists as well.</p>
								<Card>
									<CardBody>
										<ul className="list-unstyled">
											<li>Lorem ipsum dolor sit amet</li>
											<li>Consectetur adipiscing elit</li>
											<li>Nulla volutpat aliquam velit
												<ul>
													<li>Phasellus iaculis neque</li>
													<li>Purus sodales ultricies</li>
												</ul>
											</li>
											<li>Faucibus porta lacus fringilla vel</li>
											<li>Aenean sit amet erat nunc</li>
											<li>Eget porttitor lorem</li>
										</ul>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code7}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="inlineList" className="mb-5">
								<h4>Inline list</h4>
								<p>Remove a list’s bullets and apply some light margin with a combination of two classes, <code>.list-inline</code> and <code>.list-inline-item</code>.</p>
								<Card>
									<CardBody>
										<ul className="list-inline">
											<li className="list-inline-item">Lorem ipsum</li>
											<li className="list-inline-item">Phasellus iaculis</li>
											<li className="list-inline-item">Nulla volutpat</li>
										</ul>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code8}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="descriptionList" className="mb-5">
								<h4>Description list</h4>
								<p>Align terms and descriptions horizontally by using our grid system’s predefined classes (or semantic mixins). For longer terms, you can optionally add a .text-truncate class to truncate the text with an ellipsis.</p>
								<Card>
									<CardBody>
										<dl className="row">
											<dt className="col-sm-3">Description lists</dt>
											<dd className="col-sm-9">A description list is perfect for defining terms.</dd>
											<dt className="col-sm-3">Euismod</dt>
											<dd className="col-sm-9">
												<p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
												<p>Donec id elit non mi porta gravida at eget metus.</p>
											</dd>
											<dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
											<dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

											<dt className="col-sm-3">Nesting</dt>
											<dd className="col-sm-9">
												<dl className="row">
													<dt className="col-sm-4">Nested definition list</dt>
													<dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
												</dl>
											</dd>
										</dl>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code9}</Highlight>
									</div>
								</Card>
							</div>
						</div>
						<div className="col-xl-3">
							<NavScrollTo>
								<nav className="nav">
									<a className="nav-link" href="#headings" data-toggle="scroll-to">Headings</a>
									<a className="nav-link" href="#displayHeadings" data-toggle="scroll-to">Display headings</a>
									<a className="nav-link" href="#lead" data-toggle="scroll-to">Lead</a>
									<a className="nav-link" href="#inlineTextElements" data-toggle="scroll-to">Inline text elements</a>
									<a className="nav-link" href="#abbreviations" data-toggle="scroll-to">Abbreviations</a>
									<a className="nav-link" href="#blockquotes" data-toggle="scroll-to">Blockquotes</a>
									<a className="nav-link" href="#unstyledList" data-toggle="scroll-to">Unstyled list</a>
									<a className="nav-link" href="#inlineList" data-toggle="scroll-to">Inline list</a>
									<a className="nav-link" href="#descriptionList" data-toggle="scroll-to">Description List</a>
								</nav>
							</NavScrollTo>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UiTypography;