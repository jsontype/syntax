import React, { useEffect, useContext } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Card, CardHeader, CardBody } from './../../components/card/card.jsx';
import { AppSettings } from './../../config/app-settings.js';
import { Icon } from '@iconify/react';

function PagesFileManager() {
	const context = useContext(AppSettings);
  
	useEffect(() => {
		var fileHasSubNodes = document.querySelectorAll(".file-node.has-sub");

		fileHasSubNodes.forEach(node => {
			var fileArrow = node.querySelector(".file-link > .file-arrow");
		
			fileArrow.addEventListener("click", function (event) {
				event.preventDefault();
				node.classList.toggle("expand");
			});
		});
	
		var fileInfoNodes = document.querySelectorAll(".file-node");

		fileInfoNodes.forEach(node => {
			var fileInfo = node.querySelector(".file-link > .file-info");
		
			fileInfo.addEventListener("click", function (event) {
				event.preventDefault();
				fileInfoNodes.forEach(otherNode => {
					if (otherNode !== node) {
						otherNode.classList.remove("selected");
					}
				});
				node.classList.add("expand");
				node.classList.add("selected");
			});
		});
	
		context.setAppContentFullHeight(true);
		
		return function cleanUp() {
			context.setAppContentFullHeight(false);
		};
		
		// eslint-disable-next-line
	}, []);
  
	return (
		<div className="d-flex flex-column h-100">
			<h1 className="page-header">File Manager <small>header small text goes here...</small></h1>
			
			<Card className="flex-1 m-0 d-flex flex-column overflow-hidden rounded-0">
				<CardHeader className="fw-bold small d-flex">
					<span className="flex-grow-1">File Manager</span>
					<a href="#/" data-toggle="card-expand" className="text-white text-opacity-50 text-decoration-none"><i className="fa fa-fw fa-expand"></i> EXPAND</a>
				</CardHeader>
				<CardBody className="p-0 flex-1 overflow-hidden">
					<div className="file-manager h-100" id="fileManager">
						<div className="file-manager-toolbar">
							 <button type="button" className="btn border-0"><i className="bi bi-plus-lg me-1"></i> File</button>
							 <button type="button" className="btn border-0"><i className="bi bi-plus-lg me-1"></i> Folder</button>
							 <button type="button" className="btn border-0" disabled><i className="bi me-1 bi-copy"></i> Copy</button>
							 <button type="button" className="btn border-0" disabled><i className="bi me-1 bi-arrows-move"></i> Move</button>
							 <button type="button" className="btn border-0"><i className="bi me-1 bi-upload"></i> Upload</button>
							 <button type="button" className="btn border-0" disabled><i className="bi me-1 bi-download"></i> Download</button>
							 <button type="button" className="btn border-0" disabled><i className="bi me-1 bi-trash"></i> Delete</button>
							 <button type="button" className="btn border-0" disabled><i className="bi me-1 bi-arrow-clockwise"></i> Restore</button>
							 <button type="button" className="btn border-0" disabled><i className="bi me-1 bi-file-earmark-text"></i> Rename</button>
							 <button type="button" className="btn border-0" disabled><i className="bi me-1 bi-pen"></i> Edit</button>
							 <button type="button" className="btn border-0" disabled><i className="bi me-1 bi-pencil-square"></i> HTML Editor</button>
							 <button type="button" className="btn border-0" disabled><i className="bi me-1 bi-key"></i> Permissions</button>
							 <button type="button" className="btn border-0" disabled><i className="bi me-1 bi-eye"></i> View</button>
							 <button type="button" className="btn border-0" disabled><i className="bi me-1 bi-unlock"></i> Extract</button>
							 <button type="button" className="btn border-0" disabled><i className="bi me-1 bi-file-earmark-zip"></i> Compress</button>
						</div>
						<div className="file-manager-container">
							<div className="file-manager-sidebar">
								<div className="file-manager-sidebar-mobile-toggler">
									<button type="button" className="btn" data-toggle-className="file-manager-sidebar-mobile-toggled" data-toggle-target="#fileManager"><i className="far fa-lg fa-folder"></i></button>
								</div>
								<div className="file-manager-sidebar-content">
									<PerfectScrollbar className="h-100 p-3">
										<input type="text" className="form-control form-control-sm mb-3" placeholder="Seach file..." />
										<div className="file-tree mb-3">
											<div className="file-node has-sub expand selected">
												<a href="#/" className="file-link">
													<span className="file-arrow"></span>
													<span className="file-info">
														<span className="file-icon"><i className="fa fa-folder fa-lg text-warning"></i></span>
														<span className="file-text">public_html</span>
													</span>
												</a>
												<div className="file-tree">
													<div className="file-node has-sub">
														<a href="#/" className="file-link">
															<span className="file-arrow"></span>
															<span className="file-info">
																<span className="file-icon"><i className="fa fa-folder fa-lg text-warning"></i></span>
																<span className="file-text">services</span>
															</span>
														</a>
														<div className="file-tree">
															<div className="file-node has-sub">
																<a href="#/" className="file-link">
																	<span className="file-arrow"></span>
																	<span className="file-info">
																		<span className="file-icon"><i className="fa fa-folder fa-lg text-warning"></i></span>
																		<span className="file-text">app_development</span>
																	</span>
																</a>
																<div className="file-tree">
																	<div className="file-node">
																		<a href="#/" className="file-link">
																			<span className="file-arrow"></span>
																			<span className="file-info">
																				<span className="file-icon"><i className="far fa-file-code fa-lg text-body text-opacity-50"></i></span>
																				<span className="file-text">index.html</span>
																			</span>
																		</a>
																	</div>
																	<div className="file-node">
																		<a href="#/" className="file-link">
																			<span className="file-arrow"></span>
																			<span className="file-info">
																				<span className="file-icon"><i className="far fa-file-code fa-lg text-body text-opacity-50"></i></span>
																				<span className="file-text">android_app.html</span>
																			</span>
																		</a>
																	</div>
																	<div className="file-node">
																		<a href="#/" className="file-link">
																			<span className="file-arrow"></span>
																			<span className="file-info">
																				<span className="file-icon"><i className="far fa-file-code fa-lg text-body text-opacity-50"></i></span>
																				<span className="file-text">ios_app.html</span>
																			</span>
																		</a>
																	</div>
																</div>
															</div>
															<div className="file-node has-sub">
																<a href="#/" className="file-link">
																	<span className="file-arrow"></span>
																	<span className="file-info">
																		<span className="file-icon"><i className="fa fa-folder fa-lg text-warning"></i></span>
																		<span className="file-text">digital_marketing</span>
																	</span>
																</a>
																<div className="file-tree">
																	<div className="file-node">
																		<a href="#/" className="file-link">
																			<span className="file-arrow"></span>
																			<span className="file-info">
																				<span className="file-icon"><i className="far fa-file-code fa-lg text-body text-opacity-50"></i></span>
																				<span className="file-text">index.html</span>
																			</span>
																		</a>
																	</div>
																	<div className="file-node">
																		<a href="#/" className="file-link">
																			<span className="file-arrow"></span>
																			<span className="file-info">
																				<span className="file-icon"><i className="far fa-file-code fa-lg text-body text-opacity-50"></i></span>
																				<span className="file-text">social_media.html</span>
																			</span>
																		</a>
																	</div>
																	<div className="file-node">
																		<a href="#/" className="file-link">
																			<span className="file-arrow"></span>
																			<span className="file-info">
																				<span className="file-icon"><i className="far fa-file-code fa-lg text-body text-opacity-50"></i></span>
																				<span className="file-text">seo.html</span>
																			</span>
																		</a>
																	</div>
																</div>
															</div>
															<div className="file-node">
																<a href="#/" className="file-link">
																	<span className="file-arrow"></span>
																	<span className="file-info">
																		<span className="file-icon"><i className="far fa-file-code fa-lg text-body text-opacity-50"></i></span>
																		<span className="file-text">index.html</span>
																	</span>
																</a>
															</div>
															<div className="file-node">
																<a href="#/" className="file-link">
																	<span className="file-arrow"></span>
																	<span className="file-info">
																		<span className="file-icon"><i className="far fa-file-code fa-lg text-body text-opacity-50"></i></span>
																		<span className="file-text">web_design.html</span>
																	</span>
																</a>
															</div>
															<div className="file-node">
																<a href="#/" className="file-link">
																	<span className="file-arrow"></span>
																	<span className="file-info">
																		<span className="file-icon"><i className="far fa-file-code fa-lg text-body text-opacity-50"></i></span>
																		<span className="file-text">seo_services.html</span>
																	</span>
																</a>
															</div>
														</div>
													</div>
													<div className="file-node has-sub">
														<a href="#/" className="file-link">
															<span className="file-arrow"></span>
															<span className="file-info">
																<span className="file-icon"><i className="fa fa-folder fa-lg text-warning"></i></span>
																<span className="file-text">portfolio</span>
															</span>
														</a>
														<div className="file-tree">
															<div className="file-node">
																<a href="#/" className="file-link">
																	<span className="file-arrow"></span>
																	<span className="file-info">
																		<span className="file-icon"><i className="far fa-file-code fa-lg text-body text-opacity-50"></i></span>
																		<span className="file-text">index.html</span>
																	</span>
																</a>
															</div>
															<div className="file-node">
																<a href="#/" className="file-link">
																	<span className="file-arrow"></span>
																	<span className="file-info">
																		<span className="file-icon"><i className="far fa-file-code fa-lg text-body text-opacity-50"></i></span>
																		<span className="file-text">project_1.html</span>
																	</span>
																</a>
															</div>
															<div className="file-node">
																<a href="#/" className="file-link">
																	<span className="file-arrow"></span>
																	<span className="file-info">
																		<span className="file-icon"><i className="far fa-file-code fa-lg text-body text-opacity-50"></i></span>
																		<span className="file-text">project_2.html</span>
																	</span>
																</a>
															</div>
															<div className="file-node">
																<a href="#/" className="file-link">
																	<span className="file-arrow"></span>
																	<span className="file-info">
																		<span className="file-icon"><i className="far fa-file-code fa-lg text-body text-opacity-50"></i></span>
																		<span className="file-text">project_3.html</span>
																	</span>
																</a>
															</div>
															<div className="file-node">
																<a href="#/" className="file-link">
																	<span className="file-arrow"></span>
																	<span className="file-info">
																		<span className="file-icon"><i className="far fa-file-code fa-lg text-body text-opacity-50"></i></span>
																		<span className="file-text">project_4.html</span>
																	</span>
																</a>
															</div>
															<div className="file-node">
																<a href="#/" className="file-link">
																	<span className="file-arrow"></span>
																	<span className="file-info">
																		<span className="file-icon"><i className="far fa-file-code fa-lg text-body text-opacity-50"></i></span>
																		<span className="file-text">project_5.html</span>
																	</span>
																</a>
															</div>
														</div>
													</div>
													<div className="file-node has-sub">
														<a href="#/" className="file-link">
															<span className="file-arrow"></span>
															<span className="file-info">
																<span className="file-icon"><i className="fa fa-folder fa-lg text-warning"></i></span>
																<span className="file-text">blog</span>
															</span>
														</a>
														<div className="file-tree">
															<div className="file-node">
																<a href="#/" className="file-link">
																	<span className="file-arrow"></span>
																	<span className="file-info">
																		<span className="file-icon"><i className="far fa-file-code fa-lg text-body text-opacity-50"></i></span>
																		<span className="file-text">index.html</span>
																	</span>
																</a>
															</div>
															<div className="file-node">
																<a href="#/" className="file-link">
																	<span className="file-arrow"></span>
																	<span className="file-info">
																		<span className="file-icon"><i className="far fa-file-code fa-lg text-body text-opacity-50"></i></span>
																		<span className="file-text">post_1.html</span>
																	</span>
																</a>
															</div>
															<div className="file-node">
																<a href="#/" className="file-link">
																	<span className="file-arrow"></span>
																	<span className="file-info">
																		<span className="file-icon"><i className="far fa-file-code fa-lg text-body text-opacity-50"></i></span>
																		<span className="file-text">post_2.html</span>
																	</span>
																</a>
															</div>
															<div className="file-node">
																<a href="#/" className="file-link">
																	<span className="file-arrow"></span>
																	<span className="file-info">
																		<span className="file-icon"><i className="far fa-file-code fa-lg text-body text-opacity-50"></i></span>
																		<span className="file-text">post_3.html</span>
																	</span>
																</a>
															</div>
															<div className="file-node">
																<a href="#/" className="file-link">
																	<span className="file-arrow"></span>
																	<span className="file-info">
																		<span className="file-icon"><i className="far fa-file-code fa-lg text-body text-opacity-50"></i></span>
																		<span className="file-text">post_4.html</span>
																	</span>
																</a>
															</div>
															<div className="file-node">
																<a href="#/" className="file-link">
																	<span className="file-arrow"></span>
																	<span className="file-info">
																		<span className="file-icon"><i className="far fa-file-code fa-lg text-body text-opacity-50"></i></span>
																		<span className="file-text">post_5.html</span>
																	</span>
																</a>
															</div>
														</div>
													</div>
													<div className="file-node has-sub">
														<a href="#/" className="file-link">
															<span className="file-arrow"></span>
															<span className="file-info">
																<span className="file-icon"><i className="fa fa-folder fa-lg text-warning"></i></span>
																<span className="file-text">assets</span>
															</span>
														</a>
														<div className="file-tree">
															<div className="file-node has-sub">
																<a href="#/" className="file-link">
																	<span className="file-arrow"></span>
																	<span className="file-info">
																		<span className="file-icon"><i className="fa fa-folder fa-lg text-warning"></i></span>
																		<span className="file-text">css</span>
																	</span>
																</a>
																<div className="file-tree">
																	<div className="file-node">
																		<a href="#/" className="file-link">
																			<span className="file-arrow"></span>
																			<span className="file-info">
																				<span className="file-icon"><i className="fa fa-file-text fa-lg text-body text-opacity-50"></i></span>
																				<span className="file-text">styles.css</span>
																			</span>
																		</a>
																	</div>
																	<div className="file-node">
																		<a href="#/" className="file-link">
																			<span className="file-arrow"></span>
																			<span className="file-info">
																				<span className="file-icon"><i className="fa fa-file-text fa-lg text-body text-opacity-50"></i></span>
																				<span className="file-text">main.css</span>
																			</span>
																		</a>
																	</div>
																	<div className="file-node">
																		<a href="#/" className="file-link">
																			<span className="file-arrow"></span>
																			<span className="file-info">
																				<span className="file-icon"><i className="fa fa-file-text fa-lg text-body text-opacity-50"></i></span>
																				<span className="file-text">responsive.css</span>
																			</span>
																		</a>
																	</div>
																	<div className="file-node">
																		<a href="#/" className="file-link">
																			<span className="file-arrow"></span>
																			<span className="file-info">
																				<span className="file-icon"><i className="fa fa-file-text fa-lg text-body text-opacity-50"></i></span>
																				<span className="file-text">typography.css</span>
																			</span>
																		</a>
																	</div>
																	<div className="file-node">
																		<a href="#/" className="file-link">
																			<span className="file-arrow"></span>
																			<span className="file-info">
																				<span className="file-icon"><i className="fa fa-file-text fa-lg text-body text-opacity-50"></i></span>
																				<span className="file-text">colors.css</span>
																			</span>
																		</a>
																	</div>
																	<div className="file-node">
																		<a href="#/" className="file-link">
																			<span className="file-arrow"></span>
																			<span className="file-info">
																				<span className="file-icon"><i className="fa fa-file-text fa-lg text-body text-opacity-50"></i></span>
																				<span className="file-text">layout.css</span>
																			</span>
																		</a>
																	</div>
																	<div className="file-node">
																		<a href="#/" className="file-link">
																			<span className="file-arrow"></span>
																			<span className="file-info">
																				<span className="file-icon"><i className="fa fa-file-text fa-lg text-body text-opacity-50"></i></span>
																				<span className="file-text">animations.css</span>
																			</span>
																		</a>
																	</div>
																	<div className="file-node">
																		<a href="#/" className="file-link">
																			<span className="file-arrow"></span>
																			<span className="file-info">
																				<span className="file-icon"><i className="fa fa-file-text fa-lg text-body text-opacity-50"></i></span>
																				<span className="file-text">forms.css</span>
																			</span>
																		</a>
																	</div>
																	<div className="file-node">
																		<a href="#/" className="file-link">
																			<span className="file-arrow"></span>
																			<span className="file-info">
																				<span className="file-icon"><i className="fa fa-file-text fa-lg text-body text-opacity-50"></i></span>
																				<span className="file-text">buttons.css</span>
																			</span>
																		</a>
																	</div>
																	<div className="file-node">
																		<a href="#/" className="file-link">
																			<span className="file-arrow"></span>
																			<span className="file-info">
																				<span className="file-icon"><i className="fa fa-file-text fa-lg text-body text-opacity-50"></i></span>
																				<span className="file-text">grids.css</span>
																			</span>
																		</a>
																	</div>
																</div>
															</div>
															<div className="file-node has-sub">
																<a href="#/" className="file-link">
																	<span className="file-arrow"></span>
																	<span className="file-info">
																		<span className="file-icon"><i className="fa fa-folder fa-lg text-warning"></i></span>
																		<span className="file-text">js</span>
																	</span>
																</a>
																<div className="file-tree">
																	<div className="file-node">
																		<a href="#/" className="file-link">
																			<span className="file-arrow"></span>
																			<span className="file-info">
																				<span className="file-icon"><i className="fa fa-file-text fa-lg text-body text-opacity-50"></i></span>
																				<span className="file-text">main.js</span>
																			</span>
																		</a>
																	</div>
																	<div className="file-node">
																		<a href="#/" className="file-link">
																			<span className="file-arrow"></span>
																			<span className="file-info">
																				<span className="file-icon"><i className="fa fa-file-text fa-lg text-body text-opacity-50"></i></span>
																				<span className="file-text">script.js</span>
																			</span>
																		</a>
																	</div>
																	<div className="file-node">
																		<a href="#/" className="file-link">
																			<span className="file-arrow"></span>
																			<span className="file-info">
																				<span className="file-icon"><i className="fa fa-file-text fa-lg text-body text-opacity-50"></i></span>
																				<span className="file-text">sliders.js</span>
																			</span>
																		</a>
																	</div>
																	<div className="file-node">
																		<a href="#/" className="file-link">
																			<span className="file-arrow"></span>
																			<span className="file-info">
																				<span className="file-icon"><i className="fa fa-file-text fa-lg text-body text-opacity-50"></i></span>
																				<span className="file-text">gallery.js</span>
																			</span>
																		</a>
																	</div>
																	<div className="file-node">
																		<a href="#/" className="file-link">
																			<span className="file-arrow"></span>
																			<span className="file-info">
																				<span className="file-icon"><i className="fa fa-file-text fa-lg text-body text-opacity-50"></i></span>
																				<span className="file-text">form-validation.js</span>
																			</span>
																		</a>
																	</div>
																	<div className="file-node">
																		<a href="#/" className="file-link">
																			<span className="file-arrow"></span>
																			<span className="file-info">
																				<span className="file-icon"><i className="fa fa-file-text fa-lg text-body text-opacity-50"></i></span>
																				<span className="file-text">animations.js</span>
																			</span>
																		</a>
																	</div>
																	<div className="file-node">
																		<a href="#/" className="file-link">
																			<span className="file-arrow"></span>
																			<span className="file-info">
																				<span className="file-icon"><i className="fa fa-file-text fa-lg text-body text-opacity-50"></i></span>
																				<span className="file-text">navigation.js</span>
																			</span>
																		</a>
																	</div>
																	<div className="file-node">
																		<a href="#/" className="file-link">
																			<span className="file-arrow"></span>
																			<span className="file-info">
																				<span className="file-icon"><i className="fa fa-file-text fa-lg text-body text-opacity-50"></i></span>
																				<span className="file-text">modal.js</span>
																			</span>
																		</a>
																	</div>
																	<div className="file-node">
																		<a href="#/" className="file-link">
																			<span className="file-arrow"></span>
																			<span className="file-info">
																				<span className="file-icon"><i className="fa fa-file-text fa-lg text-body text-opacity-50"></i></span>
																				<span className="file-text">tabs.js</span>
																			</span>
																		</a>
																	</div>
																	<div className="file-node">
																		<a href="#/" className="file-link">
																			<span className="file-arrow"></span>
																			<span className="file-info">
																				<span className="file-icon"><i className="fa fa-file-text fa-lg text-body text-opacity-50"></i></span>
																				<span className="file-text">accordion.js</span>
																			</span>
																		</a>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="file-node">
														<a href="#/" className="file-link">
															<span className="file-arrow"></span>
															<span className="file-info">
																<span className="file-icon"><i className="far fa-file-code fa-lg text-body text-opacity-50"></i></span>
																<span className="file-text">index.html</span>
															</span>
														</a>
													</div>
													<div className="file-node">
														<a href="#/" className="file-link">
															<span className="file-arrow"></span>
															<span className="file-info">
																<span className="file-icon"><i className="far fa-file-code fa-lg text-body text-opacity-50"></i></span>
																<span className="file-text">home.html</span>
															</span>
														</a>
													</div>
													<div className="file-node">
														<a href="#/" className="file-link">
															<span className="file-arrow"></span>
															<span className="file-info">
																<span className="file-icon"><i className="far fa-file-code fa-lg text-body text-opacity-50"></i></span>
																<span className="file-text">about.html</span>
															</span>
														</a>
													</div>
													<div className="file-node">
														<a href="#/" className="file-link">
															<span className="file-arrow"></span>
															<span className="file-info">
																<span className="file-icon"><i className="far fa-file-code fa-lg text-body text-opacity-50"></i></span>
																<span className="file-text">contact.html</span>
															</span>
														</a>
													</div>
													<div className="file-node">
														<a href="#/" className="file-link">
															<span className="file-arrow"></span>
															<span className="file-info">
																<span className="file-icon"><i className="far fa-file-code fa-lg text-body text-opacity-50"></i></span>
																<span className="file-text">testimonials.html</span>
															</span>
														</a>
													</div>
													<div className="file-node">
														<a href="#/" className="file-link">
															<span className="file-arrow"></span>
															<span className="file-info">
																<span className="file-icon"><i className="far fa-file-code fa-lg text-body text-opacity-50"></i></span>
																<span className="file-text">faq.html</span>
															</span>
														</a>
													</div>
													<div className="file-node">
														<a href="#/" className="file-link">
															<span className="file-arrow"></span>
															<span className="file-info">
																<span className="file-icon"><i className="far fa-file-code fa-lg text-body text-opacity-50"></i></span>
																<span className="file-text">pricing.html</span>
															</span>
														</a>
													</div>
													<div className="file-node">
														<a href="#/" className="file-link">
															<span className="file-arrow"></span>
															<span className="file-info">
																<span className="file-icon"><i className="far fa-file-code fa-lg text-body text-opacity-50"></i></span>
																<span className="file-text">404.shtml</span>
															</span>
														</a>
													</div>
													<div className="file-node">
														<a href="#/" className="file-link">
															<span className="file-arrow"></span>
															<span className="file-info">
																<span className="file-icon"><i className="fa fa-file-text fa-lg text-body text-opacity-50"></i></span>
																<span className="file-text">.htaccess</span>
															</span>
														</a>
													</div>
													<div className="file-node">
														<a href="#/" className="file-link">
															<span className="file-arrow"></span>
															<span className="file-info">
																<span className="file-icon"><i className="far fa-file-image fa-lg text-success"></i></span>
																<span className="file-text">favicon.ico</span>
															</span>
														</a>
													</div>
												</div>
											</div>
										</div>
									</PerfectScrollbar>
								</div>
								<div className="file-manager-sidebar-footer">
									<div className="d-flex align-items-center">
										<div className="mx-n1">
											<Icon className="iconify fa-2x text-theme" icon="solar:ssd-square-bold-duotone" />
										</div>
										<div className="flex-1 ps-3 small">
											<div className="fw-bold small">SSD Storage:</div>
											<div className="progress h-5px my-1">
												<div className="progress-bar progress-bar-striped bg-theme" style={{width: '80%'}}></div>
											</div>
											<div className="fw-bold text-body text-opacity-50 small">
												<b className="text-body">127.7GB</b> free of <b className="text-body">256GB</b>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="file-manager-content d-flex flex-column">
								<div className="mb-0 d-flex flex-wrap text-nowrap px-10px pt-10px pb-0 border-bottom">
									<button type="button" className="btn btn-sm btn-default me-2 mb-10px px-2"><i className="fa fa-fw fa-home"></i></button>
									<button type="button" className="btn btn-sm btn-default me-2 mb-10px" disabled><i className="fa fa-fw fa-arrow-turn-up ms-n1"></i>  Up One Level</button>
							
									<div className="btn-group me-2 mb-10px">
										<button type="button" className="btn btn-sm btn-default" disabled><i className="fa me-1 fa-arrow-left"></i> Back</button>
										<button type="button" className="btn btn-sm btn-default" disabled><i className="fa me-1 fa-arrow-right"></i> Forward</button>
									</div>
									<button type="button" className="btn btn-sm btn-default me-2 mb-10px px-2"><i className="fa fa-fw fa-arrows-rotate"></i></button>
							
									<div className="btn-group me-2 mb-10px">
										<button type="button" className="btn btn-sm btn-default"><i className="fa fa-fw fa-check ms-n1"></i> Select All</button>
										<button type="button" className="btn btn-sm btn-default"><i className="far fa-fw fa-square ms-n1"></i> Unselect All</button>
									</div>
								</div>
								<div className="flex-1 overflow-hidden">
									<PerfectScrollbar className="h-100 p-0">
										<table className="table table-striped table-borderless table-sm m-0 text-nowrap small">
											<thead>
												<tr className="border-bottom">
													<th className="w-10px ps-10px"></th>
													<th className="px-10px">Name</th>
													<th className="px-10px w-100px">Size</th>
													<th className="px-10px w-200px">Last Modified</th>
													<th className="px-10px w-200px">Type</th>
													<th className="px-10px w-100px">Permission</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td className="ps-10px border-0 text-center"><i className="fa fa-folder text-warning fa-lg"></i></td>
													<td className="px-10px border-0">services</td>
													<td className="px-10px">4 KB</td>
													<td className="px-10px">Jun 11, 2024, 10:35PM</td>
													<td className="px-10px">http:/unix-directory</td>
													<td className="px-10px border-0">0755</td>
												</tr>
												<tr>
													<td className="ps-10px border-0 text-center"><i className="fa fa-folder text-warning fa-lg"></i></td>
													<td className="px-10px border-0">portfolio</td>
													<td className="px-10px">4 KB</td>
													<td className="px-10px">Jun 11, 2024, 10:36PM</td>
													<td className="px-10px">http:/unix-directory</td>
													<td className="px-10px border-0">0755</td>
												</tr>
												<tr>
													<td className="ps-10px border-0 text-center"><i className="fa fa-folder text-warning fa-lg"></i></td>
													<td className="px-10px border-0">blog</td>
													<td className="px-10px">4 KB</td>
													<td className="px-10px">Jun 11, 2024, 10:04PM</td>
													<td className="px-10px">http:/unix-directory</td>
													<td className="px-10px border-0">0755</td>
												</tr>
												<tr>
													<td className="ps-10px border-0 text-center"><i className="fa fa-folder text-warning fa-lg"></i></td>
													<td className="px-10px border-0">assets</td>
													<td className="px-10px">4 KB</td>
													<td className="px-10px">Jun 11, 2024, 10:14PM</td>
													<td className="px-10px">http:/unix-directory</td>
													<td className="px-10px border-0">0755</td>
												</tr>
												<tr>
													<td className="ps-10px border-0 text-center"><i className="fa fa-folder text-warning fa-lg"></i></td>
													<td className="px-10px border-0">php</td>
													<td className="px-10px">4 KB</td>
													<td className="px-10px">Jun 11, 2024, 10:36PM</td>
													<td className="px-10px">http:/unix-directory</td>
													<td className="px-10px border-0">0755</td>
												</tr>
												<tr>
													<td className="ps-10px border-0 text-center"><i className="fa fa-folder text-warning fa-lg"></i></td>
													<td className="px-10px border-0">docs</td>
													<td className="px-10px">4 KB</td>
													<td className="px-10px">Jun 11, 2024, 10:36PM</td>
													<td className="px-10px">http:/unix-directory</td>
													<td className="px-10px border-0">0755</td>
												</tr>
												<tr>
													<td className="ps-10px border-0 text-center"><i className="fa fa-folder text-warning fa-lg"></i></td>
													<td className="px-10px border-0">archives</td>
													<td className="px-10px">4 KB</td>
													<td className="px-10px">Jun 11, 2024, 10:36PM</td>
													<td className="px-10px">http:/unix-directory</td>
													<td className="px-10px border-0">0755</td>
												</tr>
												<tr>
													<td className="ps-10px border-0 text-center"><i className="fa fa-folder text-warning fa-lg"></i></td>
													<td className="px-10px border-0">video</td>
													<td className="px-10px">4 KB</td>
													<td className="px-10px">Jun 11, 2024, 10:36PM</td>
													<td className="px-10px">http:/unix-directory</td>
													<td className="px-10px border-0">0755</td>
												</tr>
												<tr>
													<td className="ps-10px border-0 text-center"><i className="fa fa-folder text-warning fa-lg"></i></td>
													<td className="px-10px border-0">audio</td>
													<td className="px-10px">4 KB</td>
													<td className="px-10px">Jun 11, 2024, 10:36PM</td>
													<td className="px-10px">http:/unix-directory</td>
													<td className="px-10px border-0">0755</td>
												</tr>
												<tr>
													<td className="ps-10px border-0 text-center"><i className="fa fa-folder text-warning fa-lg"></i></td>
													<td className="px-10px border-0">docs</td>
													<td className="px-10px">4 KB</td>
													<td className="px-10px">Jun 11, 2024, 10:36PM</td>
													<td className="px-10px">http:/unix-directory</td>
													<td className="px-10px border-0">0755</td>
												</tr>
												<tr>
													<td className="ps-10px border-0 text-center"><i className="far fa-file-code text-body text-opacity-50 fa-lg"></i></td>
													<td className="px-10px border-0">index.html</td>
													<td className="px-10px">39.5 KB</td>
													<td className="px-10px">July 05, 2024, 10:35PM</td>
													<td className="px-10px">text/html</td>
													<td className="px-10px border-0">0644</td>
												</tr>
												<tr>
													<td className="ps-10px border-0 text-center"><i className="far fa-file-code text-body text-opacity-50 fa-lg"></i></td>
													<td className="px-10px border-0">home.html</td>
													<td className="px-10px">129.1 KB</td>
													<td className="px-10px">July 06, 2024, 1:00PM</td>
													<td className="px-10px">text/html</td>
													<td className="px-10px border-0">0644</td>
												</tr>
												<tr>
													<td className="ps-10px border-0 text-center"><i className="far fa-file-code text-body text-opacity-50 fa-lg"></i></td>
													<td className="px-10px border-0">about.html</td>
													<td className="px-10px">24 KB</td>
													<td className="px-10px">July 01, 2024, 6:59AM</td>
													<td className="px-10px">text/html</td>
													<td className="px-10px border-0">0644</td>
												</tr>
												<tr>
													<td className="ps-10px border-0 text-center"><i className="far fa-file-code text-body text-opacity-50 fa-lg"></i></td>
													<td className="px-10px border-0">contact.html</td>
													<td className="px-10px">39.5 KB</td>
													<td className="px-10px">July 05, 2024, 10:35PM</td>
													<td className="px-10px">text/html</td>
													<td className="px-10px border-0">0644</td>
												</tr>
												<tr>
													<td className="ps-10px border-0 text-center"><i className="far fa-file-code text-body text-opacity-50 fa-lg"></i></td>
													<td className="px-10px border-0">testimonials.html</td>
													<td className="px-10px">11 KB</td>
													<td className="px-10px">July 05, 2024, 10:35PM</td>
													<td className="px-10px">text/html</td>
													<td className="px-10px border-0">0644</td>
												</tr>
												<tr>
													<td className="ps-10px border-0 text-center"><i className="far fa-file-code text-body text-opacity-50 fa-lg"></i></td>
													<td className="px-10px border-0">faq.html</td>
													<td className="px-10px">12 KB</td>
													<td className="px-10px">July 05, 2024, 1.59PM</td>
													<td className="px-10px">text/html</td>
													<td className="px-10px border-0">0644</td>
												</tr>
												<tr>
													<td className="ps-10px border-0 text-center"><i className="far fa-file-code text-body text-opacity-50 fa-lg"></i></td>
													<td className="px-10px border-0">pricing.html</td>
													<td className="px-10px">128 KB</td>
													<td className="px-10px">July 05, 2024, 12.49PM</td>
													<td className="px-10px">text/html</td>
													<td className="px-10px border-0">0644</td>
												</tr>
												<tr>
													<td className="ps-10px border-0 text-center"><i className="far fa-file-code text-body text-opacity-50 fa-lg"></i></td>
													<td className="px-10px border-0">404.shtml</td>
													<td className="px-10px">251 bytes</td>
													<td className="px-10px">July 10, 2024, 10.35AM</td>
													<td className="px-10px">text/html</td>
													<td className="px-10px border-0">0644</td>
												</tr>
												<tr>
													<td className="ps-10px border-0 text-center"><i className="fa fa-file-text text-body text-opacity-50 fa-lg"></i></td>
													<td className="px-10px border-0">.htaccess</td>
													<td className="px-10px">128 KB</td>
													<td className="px-10px">August 05, 2024, 12.49PM</td>
													<td className="px-10px">text/html</td>
													<td className="px-10px border-0">0644</td>
												</tr>
												<tr>
													<td className="ps-10px border-0 text-center"><i className="far fa-file-image text-teal fa-lg"></i></td>
													<td className="px-10px border-0">favicon.ico</td>
													<td className="px-10px">2 KB</td>
													<td className="px-10px">July 05, 2024, 7.39AM</td>
													<td className="px-10px">image/x-generic</td>
													<td className="px-10px border-0">0644</td>
												</tr>
											</tbody>
										</table>
									</PerfectScrollbar>
								</div>
							</div>
						</div>
					</div>
				</CardBody>
			</Card>
		</div>
	)
}

export default PagesFileManager;