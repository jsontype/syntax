import React from 'react';
import { TagsInput } from 'react-tag-input-component';
import { Card, CardHeader } from './../../components/card/card.jsx';

function PagesScrumBoard() {
	var tags = ['enhancement'];
  
	return (
		<div>
			<div className="d-flex align-items-center mb-md-3 mb-2">
				<div className="flex-fill">
					<ul className="breadcrumb">
						<li className="breadcrumb-item"><a href="#/">PAGES</a></li>
						<li className="breadcrumb-item active">SCRUM BOARD</li>
					</ul>
		
					<h1 className="page-header mb-0">
						Scrum Board
					</h1>
				</div>
				<div className="ms-auto">
					<a href="#/" data-bs-target="#modalAddTask" data-bs-toggle="modal" className="btn btn-outline-theme"><i className="fa fa-plus-circle me-1"></i> Add Task</a>
				</div>
			</div>
		
			<div className="mb-md-4 mb-3 d-md-flex">
				<div className="dropdown-toggle">
					<a href="#/" data-bs-toggle="dropdown" className="text-inverse text-opacity-75 text-decoration-none"><i className="far fa-folder fa-fw fa-lg text-theme me-1"></i> project/hud</a>
					<div className="dropdown-menu">
						<a href="#/" className="dropdown-item"><i className="far fa-folder fa-fw fa-lg text-theme me-1"></i> project/mobile-app-dev</a>
						<a href="#/" className="dropdown-item"><i className="far fa-folder fa-fw fa-lg text-theme me-1"></i> project/bootstrap-5</a>
						<a href="#/" className="dropdown-item"><i className="far fa-folder fa-fw fa-lg text-theme me-1"></i> project/mvc-version</a>
						<a href="#/" className="dropdown-item"><i className="far fa-folder fa-fw fa-lg text-theme me-1"></i> project/ruby-version</a>
					</div>
				</div>
				<div className="ms-md-4 mt-md-0 mt-2"><i className="fa fa-code-branch fa-fw fa-lg me-1 text-theme"></i> 1,392 pull request</div>
				<div className="ms-md-4 mt-md-0 mt-2"><i className="fa fa-users-cog fa-fw fa-lg me-1 text-theme"></i> 52 participant</div>
				<div className="ms-md-4 mt-md-0 mt-2"><i className="far fa-clock fa-fw fa-lg me-1 text-theme"></i> 14 day(s)</div>
			</div>
		
			<div className="row">
				<div className="col-xl-4 col-lg-6">
					<Card className="mb-3">
						<CardHeader className="d-flex align-items-center bg-inverse bg-opacity-10">
							<span className="flex-grow-1 fw-400">To Do (5)</span>
							<a href="#/" className="text-inverse text-opacity-50 text-decoration-none me-3"><i className="fa fa-fw fa-redo"></i></a>
							<a href="#/" className="text-inverse text-opacity-50 text-decoration-none"><i className="fa fa-fw fa-trash"></i></a>
						</CardHeader>
						<div className="list-group list-group-flush">
							<div className="list-group-item d-flex px-3">
								<div className="me-3 pt-1">
									<i className="far fa-question-circle text-inverse text-opacity-50 fa-fw fa-lg"></i> 
								</div>
								<div className="flex-fill">
									<div className="fw-400">Enable open search</div>
									<div className="small text-inverse text-opacity-50 mb-2">#29949 opened yesterday by Terry</div>
									<div>
										<span className="badge border border-gray-300 text-inverse text-opacity-50 me-1">docs</span>
										<span className="badge border border-theme text-theme">feature</span>
									</div>
									<hr className="my-3" />
									<div className="d-flex align-items-center mb-2">
										<div className="fw-400 me-2">
											Task (2/3)
										</div>
										<div>
											<a href="#/" className="text-inverse text-opacity-50" data-bs-toggle="collapse" data-bs-target="#todoBoard">
												<i className="fa fa-plus-circle"></i>
											</a>
										</div>
										<div className="progress progress-xs w-100px me-2 ms-auto" style={{height: '6px'}}>
											<div className="progress-bar progress-bar-striped bg-theme" style={{width: '66%'}}></div>
										</div>
										<div className="fs-12px">66%</div>
									</div>
									<div className="form-group mb-0 small">
										<div className="collapse show" id="todoBoard">
											<div className="form-check">
												<input type="checkbox" className="form-check-input" id="customCheck1" defaultChecked />
												<label className="form-check-label" htmlFor="customCheck1">create ui for autocomplete</label>
											</div>
											<div className="form-check">
												<input type="checkbox" className="form-check-input" id="customCheck2" defaultChecked />
												<label className="form-check-label" htmlFor="customCheck2">integrate jquery autocomplete with ui</label>
											</div>
											<div className="form-check">
												<input type="checkbox" className="form-check-input" id="customCheck3" />
												<label className="form-check-label" htmlFor="customCheck3">backend search return as json data</label>
											</div>
										</div>
									</div>
								</div>
							</div>
							<a href="#/" className="list-group-item list-group-item-action d-flex ps-3">
								<div className="me-3 pt-1">
									<i className="far fa-question-circle text-inverse text-opacity-50 fa-fw fa-lg"></i> 
								</div>
								<div className="flex-fill">
									<div className="fw-400">Investigate adding markdownlint</div>
									<div className="small text-inverse text-opacity-50 mb-2">#29919 opened 9 days ago by xMediaKron</div>
									<div className="mb-1">
										<span className="badge border border-gray-300 text-inverse text-opacity-50 me-1">build</span>
										<span className="badge border border-indigo text-indigo">v5</span>
									</div>
								</div>
							</a>
							<a href="#/" className="list-group-item list-group-item-action d-flex ps-3">
								<div className="me-3 pt-1">
									<i className="far fa-question-circle text-inverse text-opacity-50 fa-fw fa-lg"></i> 
								</div>
								<div className="flex-fill">
									<div className="fw-400">Add a "Submit a Resource" form</div>
									<div className="small text-inverse text-opacity-50 mb-2">#29916 opened 9 days ago by Wasbbok</div>
									<div className="mb-1 d-flex align-items-center">
										<div className="me-2"><span className="badge border border-theme text-theme">enhancement</span></div>
										<div className="widget-user-list">
											<div className="widget-user-list-item w-30px h-30px"><div className="widget-user-list-link w-30px h-30px"><img src="/assets/img/user/user-1.jpg" alt="" /></div></div>
											<div className="widget-user-list-item w-30px h-30px ms-n2"><div className="widget-user-list-link w-30px h-30px"><img src="/assets/img/user/user-2.jpg" alt="" /></div></div>
											<div className="widget-user-list-item w-30px h-30px ms-n2"><div className="widget-user-list-link w-30px h-30px"><img src="/assets/img/user/user-3.jpg" alt="" /></div></div>
											<div className="widget-user-list-item w-30px h-30px ms-n2"><div className="widget-user-list-link w-30px h-30px"><img src="/assets/img/user/user-4.jpg" alt="" /></div></div>
											<div className="widget-user-list-item w-30px h-30px ms-n2"><div className="widget-user-list-link w-30px h-30px"><img src="/assets/img/user/user-5.jpg" alt="" /></div></div>
											<div className="widget-user-list-item w-30px h-30px ms-n2"><div className="widget-user-list-link w-30px h-30px bg-gray-200 text-gray-500 fs-12px fw-400">+2</div></div>
										</div>
									</div>
								</div>
							</a>
							<a href="#/" className="list-group-item list-group-item-action d-flex ps-3">
								<div className="me-3 pt-1">
									<i className="far fa-question-circle text-inverse text-opacity-50 fa-fw fa-lg"></i> 
								</div>
								<div className="flex-fill">
									<div className="fw-400">Custom control border color missing on focus</div>
									<div className="small text-inverse text-opacity-50 mb-2">#29796 opened 29 days ago by mdo</div>
									<div className="mb-1">
										<span className="badge border border-pink text-pink">docs</span>
									</div>
								</div>
							</a>
							<a href="#/" className="list-group-item list-group-item-action d-flex ps-3">
								<div className="me-3 pt-1">
									<i className="far fa-question-circle text-inverse text-opacity-50 fa-fw fa-lg"></i> 
								</div>
								<div className="flex-fill">
									<div className="fw-400">New design for corporate page</div>
									<div className="mb-2 small text-inverse text-opacity-50">#29919 opened 19 days ago by sean</div>
									<div className="mb-1">
										<span className="badge border border-gray-300 text-inverse text-opacity-50 me-1">design</span>
										<span className="badge border border-theme text-theme">v5</span>
									</div>
								</div>
							</a>
						</div>
					</Card>
				</div>
				<div className="col-xl-4 col-lg-6">
					<Card className="mb-3">
						<CardHeader className="d-flex align-items-center bg-inverse bg-opacity-10">
							<span className="flex-grow-1 fw-400">In Progress (2)</span>
							<a href="#/" className="text-inverse text-opacity-50 text-decoration-none me-3"><i className="fa fa-fw fa-redo"></i></a>
							<a href="#/" className="text-inverse text-opacity-50 text-decoration-none"><i className="fa fa-fw fa-trash"></i></a>
						</CardHeader>
						<div className="list-group list-group-flush">
							<div className="list-group-item d-flex px-3">
								<div className="me-3 pt-1">
									<i className="fa fa-tools text-inverse text-opacity-50 fa-fw fa-lg"></i> 
								</div>
								<div className="flex-fill">
									<div className="fw-400 lh-20">HTML5 flexbox old browser compatibility</div>
									<div className="small text-inverse text-opacity-50 mb-2">#29982 handled by Sean</div>
									<div className="mb-1">
										<span className="badge border border-indigo text-indigo">enhancement</span>
									</div>
									<hr className="mt-15px mb-15px" />
									<div className="d-flex align-items-center mb-2">
										<div className="fw-400 me-2">
											Task (1/2)
										</div>
										<div>
											<a href="#/" className="text-inverse text-opacity-50" data-bs-toggle="collapse" data-bs-target="#inProgressBoard">
												<i className="fa fa-plus-circle"></i>
											</a>
										</div>
										<div className="progress progress-xs w-100px me-2 ms-auto" style={{height: '6px'}}>
											<div className="progress-bar progress-bar-striped bg-warning" style={{width: '50%'}}></div>
										</div>
										<div className="fs-12px">50%</div>
									</div>
									<div className="form-group mb-1">
										<div className="collapse show" id="inProgressBoard">
											<div className="form-check mb-2px">
												<input type="checkbox" className="form-check-input" id="customCheck4" defaultChecked />
												<label className="form-check-label small" htmlFor="customCheck4">check all browser compatibility for HTML5 flexbox</label>
											</div>
											<div className="form-check mb-2px">
												<input type="checkbox" className="form-check-input" id="customCheck5" />
												<label className="form-check-label small" htmlFor="customCheck5">fallback integration by using other display property</label>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="list-group-item d-flex px-3">
								<div className="me-3 pt-1">
									<i className="fa fa-bug text-danger fa-fw fa-lg"></i> 
								</div>
								<div className="flex-fill">
									<div className="fw-400">Mobile app autoclose on iOS</div>
									<div className="text-inverse text-opacity-50 mb-2">#29953 handled by Ken</div>
									<div className="mb-1">
										<span className="badge border border-gray-300 text-inverse text-opacity-50 me-1">issue</span>
										<span className="badge border border-danger text-danger">bug</span>
									</div>
									<hr className="mt-15px mb-15px" />
									<div className="d-flex align-items-center mb-2">
										<div className="fw-400 me-2">
											Task (0/1)
										</div>
										<div>
											<a href="#/" className="text-inverse text-opacity-50" data-bs-toggle="collapse" data-bs-target="#inProgress2Board">
												<i className="fa fa-plus-circle"></i>
											</a>
										</div>
										<div className="progress progress-xs w-100px me-2 ms-auto" style={{height: '6px'}}>
											<div className="progress-bar progress-bar-striped bg-danger" style={{width: '5%'}}></div>
										</div>
										<div className="fs-12px">0%</div>
									</div>
									<div className="form-group mb-1">
										<div className="collapse show" id="inProgress2Board">
											<div className="form-check mb-2px">
												<input type="checkbox" className="form-check-input" id="customCheck6" />
												<label className="form-check-label small" htmlFor="customCheck6">debug and fix mobile auto close while using GPS issue</label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="card-arrow">
							<div className="card-arrow-top-left"></div>
							<div className="card-arrow-top-right"></div>
							<div className="card-arrow-bottom-left"></div>
							<div className="card-arrow-bottom-right"></div>
						</div>
					</Card>
				</div>
				<div className="col-xl-4 col-lg-6">
					<Card className="mb-3">
						<CardHeader className="d-flex align-items-center bg-inverse bg-opacity-10">
							<span className="flex-grow-1 fw-400">Done (1)</span>
							<a href="#/" className="text-inverse text-opacity-50 text-decoration-none me-3"><i className="fa fa-fw fa-redo"></i></a>
							<a href="#/" className="text-inverse text-opacity-50 text-decoration-none"><i className="fa fa-fw fa-trash"></i></a>
						</CardHeader>
						<div className="list-group list-group-flush">
							<div className="list-group-item d-flex px-3">
								<div className="me-3 pt-1">
									<i className="far fa-check-circle text-success fa-fw fa-lg"></i> 
								</div>
								<div className="flex-fill">
									<div className="fw-400">React version missing daterangepicker</div>
									<div className="small text-inverse text-opacity-50 mb-2">#29930 closed yesterday by Sean</div>
									<div className="mb-1">
										<span className="badge border border-gray-300 text-gray-300 me-1">build</span>
										<span className="badge border border-success text-success">feature</span>
									</div>
								
									<hr className="my-3" />
									<div className="d-flex align-items-center mb-2">
										<div className="fw-400 me-2">
											Task (3/3)
										</div>
										<div>
											<a href="#/" className="text-inverse text-opacity-50" data-bs-toggle="collapse" data-bs-target="#completedBoard">
												<i className="fa fa-plus-circle"></i>
											</a>
										</div>
										<div className="progress progress-xs w-100px me-2 ms-auto" style={{height: '6px'}}>
											<div className="progress-bar progress-bar-striped bg-success" style={{width: '100%'}}></div>
										</div>
										<div className="fs-12px">100%</div>
									</div>
									<div className="form-group mb-1">
										<div className="collapse show" id="completedBoard">
											<div className="form-check mb-2px">
												<input type="checkbox" className="form-check-input" id="customCheck7" defaultChecked />
												<label className="form-check-label small" htmlFor="customCheck7">install react-daterangepicker</label>
											</div>
											<div className="form-check mb-2px">
												<input type="checkbox" className="form-check-input" id="customCheck8" defaultChecked />
												<label className="form-check-label small" htmlFor="customCheck8">customize ui with scss</label>
											</div>
											<div className="form-check mb-2px">
												<input type="checkbox" className="form-check-input" id="customCheck9" defaultChecked />
												<label className="form-check-label small" htmlFor="customCheck9">backend integration for data filter with daterange input</label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Card>
				</div>
			</div>
		
			<div className="modal fade" id="modalAddTask">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Add Task</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal"></button>
						</div>
						<div className="modal-body">
							<div className="mb-3">
								<label className="form-label">Title</label>
								<input type="text" className="form-control" placeholder="e.g Feature enhancement" />
							</div>
							<div className="mb-3">
								<label className="form-label">Status</label>
								<select className="form-select">
									<option value="">To Do</option>
									<option value="">In Progress</option>
									<option value="">Done</option>
								</select>
							</div>
							<div className="mb-3">
								<label className="form-label">Tags</label>
								<TagsInput value={tags} name="tags" placeHolder="enter tags" />
							</div>
							<div className="form-group">
								<label>Description</label>
								<textarea className="form-control" rows="10"></textarea>
							</div>
						</div>
						<div className="modal-footer">
							<a href="#/" className="btn btn-outline-default" data-bs-dismiss="modal">Cancel</a>
							<button type="button" className="btn btn-outline-theme">Create</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PagesScrumBoard;