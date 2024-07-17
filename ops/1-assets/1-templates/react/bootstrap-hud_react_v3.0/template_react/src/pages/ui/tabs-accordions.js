import React, { useEffect, useState } from 'react';
import { Card, CardBody } from './../../components/card/card.jsx';
import Highlight from 'react-highlight';
import { NavScrollTo } from './../../components/nav-scroll-to/nav-scroll-to.jsx';

function UiTabsAccordions() {
	const [code1, setCode1] = useState();
	const [code2, setCode2] = useState();
	const [code3, setCode3] = useState();
	const [code4, setCode4] = useState();
	const [code5, setCode5] = useState();
	
	useEffect(() => {
		fetch('/assets/data/ui/tabs-accordions-code-1.json').then(function(response) { return response.text(); }).then((html) => { setCode1(html); });
		fetch('/assets/data/ui/tabs-accordions-code-2.json').then(function(response) { return response.text(); }).then((html) => { setCode2(html); });
		fetch('/assets/data/ui/tabs-accordions-code-3.json').then(function(response) { return response.text(); }).then((html) => { setCode3(html); });
		fetch('/assets/data/ui/tabs-accordions-code-4.json').then(function(response) { return response.text(); }).then((html) => { setCode4(html); });
		fetch('/assets/data/ui/tabs-accordions-code-5.json').then(function(response) { return response.text(); }).then((html) => { setCode5(html); });
	});
	
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-xl-10">
					<div className="row">
						<div className="col-xl-9">
							<ul className="breadcrumb">
								<li className="breadcrumb-item"><a href="#/">UI KITS</a></li>
								<li className="breadcrumb-item active">TABS & ACCORDIONS</li>
							</ul>
							
							<h1 className="page-header">
								Tabs & Accordions <small>page header description goes here...</small>
							</h1>
							
							<hr className="mb-4" />
							
							<div id="tabs" className="mb-5">
								<h4>Tabs</h4>
								<p>
									Takes the basic nav from above and adds the .nav-tabs class to generate a tabbed interface. Use them to create tabbable regions with bootstrap tab JavaScript plugin.
									Please read the <a href="https://getbootstrap.com/docs/5.3/components/navs/#tabs" target="_blank" rel="noreferrer">official Bootstrap documentation</a> for the full list of options.
								</p>
								<Card>
									<CardBody>
										<ul className="nav nav-tabs">
											<li className="nav-item me-1"><a href="#home" className="nav-link active" data-bs-toggle="tab">Home</a></li>
											<li className="nav-item me-1"><a href="#profile" className="nav-link" data-bs-toggle="tab">Profile</a></li>
											<li className="nav-item me-1 dropdown">
												<a href="#/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
													Dropdown
												</a>
												<div className="dropdown-menu">
													<a href="#dropdown1" className="dropdown-item" data-bs-toggle="tab">@fat</a>
													<a href="#dropdown2" className="dropdown-item" data-bs-toggle="tab">@mdo</a>
												</div> 
											</li>
										</ul>
										<div className="tab-content pt-3">
											<div className="tab-pane fade show active" id="home">
												<p>
													Raw denim you probably haven't heard of them jean shorts Austin. 
													Nesciunt tofu stumptown aliqua, retro synth master cleanse. 
													Mustache cliche tempor, williamsburg carles vegan helvetica. 
													Reprehenderit butcher retro keffiyeh dreamcatcher synth. 
													Cosby sweater eu banh mi, qui irure terry richardson ex squid. 
													Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, 
													butcher voluptate nisi qui.
												</p>
											</div>
											<div className="tab-pane fade" id="profile">
												<p>
													Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. 
													Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan 
													four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft 
													beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda 
													labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit 
													sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean 
													shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, 
													tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
												</p>
											</div>
											<div className="tab-pane fade" id="dropdown1">
												<p>
													Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic 
													lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed 
													craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth 
													PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever 
													gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you 
													probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu 
													synth chambray yr.
												</p>
											</div>
											<div className="tab-pane fade" id="dropdown2">
												<p>
													Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out 
													master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY,
													art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, 
													banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, 
													mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial 
													keffiyeh echo park vegan.
												</p>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code1}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="tabsV2" className="mb-5">
								<h4>Tabs v2</h4>
								<p>
									This is an extended ui layout from default Bootstrap navigation tabs. Add <code>.nav-tabs-v2</code> to the navigation element in order to activate the v2 layout.
								</p>
								<Card>
									<CardBody className="pt-1">
										<ul className="nav nav-tabs nav-tabs-v2">
											<li className="nav-item me-3"><a href="#homev2" className="nav-link active" data-bs-toggle="tab">Home</a></li>
											<li className="nav-item me-3"><a href="#profilev2" className="nav-link" data-bs-toggle="tab">Profile</a></li>
											<li className="nav-item me-3 dropdown">
												<a href="#/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
													Dropdown
												</a>
												<div className="dropdown-menu">
													<a href="#dropdown1v2" className="dropdown-item" data-bs-toggle="tab">@fat</a>
													<a href="#dropdown2v2" className="dropdown-item" data-bs-toggle="tab">@mdo</a>
												</div> 
											</li>
										</ul>
										<div className="tab-content pt-3">
											<div className="tab-pane fade show active" id="homev2">
												<p>
													Raw denim you probably haven't heard of them jean shorts Austin. 
													Nesciunt tofu stumptown aliqua, retro synth master cleanse. 
													Mustache cliche tempor, williamsburg carles vegan helvetica. 
													Reprehenderit butcher retro keffiyeh dreamcatcher synth. 
													Cosby sweater eu banh mi, qui irure terry richardson ex squid. 
													Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, 
													butcher voluptate nisi qui.
												</p>
											</div>
											<div className="tab-pane fade" id="profilev2">
												<p>
													Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. 
													Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan 
													four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft 
													beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda 
													labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit 
													sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean 
													shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, 
													tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
												</p>
											</div>
											<div className="tab-pane fade" id="dropdown1v2">
												<p>
													Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic 
													lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed 
													craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth 
													PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever 
													gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you 
													probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu 
													synth chambray yr.
												</p>
											</div>
											<div className="tab-pane fade" id="dropdown2v2">
												<p>
													Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out 
													master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY,
													art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, 
													banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, 
													mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial 
													keffiyeh echo park vegan.
												</p>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code2}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="tabsWithCard" className="mb-5">
								<h4>Tabs with card</h4>
								<p>
									This is an extended ui layout from default Bootstrap navigation tabs. Add <code>.nav-tabs-v2</code> to the navigation element in order to activate the v2 layout.
								</p>
								<Card>
									<CardBody>
										<div className="row">
											<div className="col-xl-6">
												<Card>
													<ul className="nav nav-tabs pt-3 px-3">
														<li className="nav-item me-1"><a href="#homeWithCard" className="nav-link active" data-bs-toggle="tab">Home</a></li>
														<li className="nav-item me-1"><a href="#profileWithCard" className="nav-link" data-bs-toggle="tab">Profile</a></li>
													</ul>
													<div className="tab-content p-4">
														<div className="tab-pane fade show active" id="homeWithCard">
															<p>
																Raw denim you probably haven't heard of them jean shorts Austin. 
																Nesciunt tofu stumptown aliqua, retro synth master cleanse. 
																Mustache cliche tempor, williamsburg carles vegan helvetica. 
																Reprehenderit butcher retro keffiyeh dreamcatcher synth. 
																Cosby sweater eu banh mi, qui irure terry richardson ex squid. 
																Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, 
																butcher voluptate nisi qui.
															</p>
														</div>
														<div className="tab-pane fade" id="profileWithCard">
															<p>
																Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. 
																Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan 
																four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft 
																beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda 
																labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit 
																sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean 
																shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, 
																tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
															</p>
														</div>
													</div>
												</Card>
											</div>
											<div className="col-xl-6">
												<Card>
													<ul className="nav nav-tabs nav-tabs-v2 ps-4 pe-4">
														<li className="nav-item me-3"><a href="#homev2WithCard" className="nav-link active" data-bs-toggle="tab">Home</a></li>
														<li className="nav-item me-3"><a href="#profilev2WithCard" className="nav-link" data-bs-toggle="tab">Profile</a></li>
													</ul>
													<div className="tab-content p-4">
														<div className="tab-pane fade show active" id="homev2WithCard">
															<p>
																Raw denim you probably haven't heard of them jean shorts Austin. 
																Nesciunt tofu stumptown aliqua, retro synth master cleanse. 
																Mustache cliche tempor, williamsburg carles vegan helvetica. 
																Reprehenderit butcher retro keffiyeh dreamcatcher synth. 
																Cosby sweater eu banh mi, qui irure terry richardson ex squid. 
																Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, 
																butcher voluptate nisi qui.
															</p>
														</div>
														<div className="tab-pane fade" id="profilev2WithCard">
															<p>
																Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. 
																Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan 
																four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft 
																beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda 
																labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit 
																sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean 
																shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, 
																tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
															</p>
														</div>
													</div>
												</Card>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code3}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="pills" className="mb-5">
								<h4>Pills</h4>
								<p>
									Take that same HTML, but use <code>.nav-pills</code> instead:
								</p>
								<Card>
									<CardBody>
										<ul className="nav nav-pills mb-3" id="pills-tab">
											<li className="nav-item">
												<a className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" href="#pills-home">Home</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" href="#pills-profile">Profile</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" href="#pills-contact">Contact</a>
											</li>
										</ul>
										<div className="tab-content" id="pills-tabContent">
											<div className="tab-pane fade show active" id="pills-home">
												Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.
											</div>
											<div className="tab-pane fade" id="pills-profile">
												Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa mollit commodo mollit ex. Aute sunt incididunt amet commodo est sint nisi deserunt pariatur do. Aliquip ex eiusmod voluptate exercitation cillum id incididunt elit sunt. Qui minim sit magna Lorem id et dolore velit Lorem amet exercitation duis deserunt. Anim id labore elit adipisicing ut in id occaecat pariatur ut ullamco ea tempor duis.
											</div>
											<div className="tab-pane fade" id="pills-contact">
												Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis ipsum nisi elit fugiat commodo sunt reprehenderit laborum veniam eu veniam. Eiusmod minim exercitation fugiat irure ex labore incididunt do fugiat commodo aliquip sit id deserunt reprehenderit aliquip nostrud. Amet ex cupidatat excepteur aute veniam incididunt mollit cupidatat esse irure officia elit do ipsum ullamco Lorem. Ullamco ut ad minim do mollit labore ipsum laboris ipsum commodo sunt tempor enim incididunt. Commodo quis sunt dolore aliquip aute tempor irure magna enim minim reprehenderit. Ullamco consectetur culpa veniam sint cillum aliqua incididunt velit ullamco sunt ullamco quis quis commodo voluptate. Mollit nulla nostrud adipisicing aliqua cupidatat aliqua pariatur mollit voluptate voluptate consequat non.
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code4}</Highlight>
									</div>
								</Card>
							</div>
							
							<div id="accordion" className="mb-5">
								<h4>Accordion</h4>
								<p>
									Build vertically collapsing accordions in combination with Bootstrap Collapse JavaScript plugin. Please read the <a href="https://getbootstrap.com/docs/5.3/components/accordion/" target="_blank" rel="noreferrer">official Bootstrap documentation</a> for the full list of options.
								</p>
								<Card>
									<CardBody>
										<div className="accordion" id="accordionExample">
											<div className="accordion-item">
												<h2 className="accordion-header" id="headingOne">
													<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
														Accordion Item #1
													</button>
												</h2>
												<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
													<div className="accordion-body">
														<strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h2 className="accordion-header" id="headingTwo">
													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
														Accordion Item #2
													</button>
												</h2>
												<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
													<div className="accordion-body">
														<strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h2 className="accordion-header" id="headingThree">
													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
														Accordion Item #3
													</button>
												</h2>
												<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
													<div className="accordion-body">
														<strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
													</div>
												</div>
											</div>
										</div>
									</CardBody>
									<div className="hljs-container">
										<Highlight className='javascript'>{code5}</Highlight>
									</div>
								</Card>
							</div>
						</div>
						<div className="col-xl-3">
							<NavScrollTo>
								<nav className="nav">
									<a className="nav-link" href="#tabs" data-toggle="scroll-to">Tabs</a>
									<a className="nav-link" href="#tabsV2" data-toggle="scroll-to">Tabs v2</a>
									<a className="nav-link" href="#tabsWithCard" data-toggle="scroll-to">Tabs with card</a>
									<a className="nav-link" href="#pills" data-toggle="scroll-to">Pills</a>
									<a className="nav-link" href="#accordion" data-toggle="scroll-to">Accordion</a>
								</nav>
							</NavScrollTo>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UiTabsAccordions;