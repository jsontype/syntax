import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from './../../components/card/card.jsx';

function PagesOrders() {
	return (
		<div>
			<div className="d-flex align-items-center mb-3">
				<div>
					<ul className="breadcrumb">
						<li className="breadcrumb-item"><a href="#/">PAGES</a></li>
						<li className="breadcrumb-item active">ORDERS</li>
					</ul>
					<h1 className="page-header mb-0">Orders</h1>
				</div>
			
				<div className="ms-auto">
					<a href="#/" className="btn btn-outline-theme"><i className="fa fa-plus-circle fa-fw me-1"></i> Create Orders</a>
				</div>
			</div>
		
			<div className="mb-md-4 mb-3 d-md-flex">
				<div className="mt-md-0 mt-2"><a href="#/" className="text-inverse text-opacity-75 text-decoration-none"><i className="fa fa-download fa-fw me-1 text-theme"></i> Export</a></div>
				<div className="ms-md-4 mt-md-0 mt-2 dropdown-toggle">
					<a href="#/" data-bs-toggle="dropdown" className="text-inverse text-opacity-75 text-decoration-none">More Actions</a>
					<div className="dropdown-menu">
						<a className="dropdown-item" href="#/">Action</a>
						<a className="dropdown-item" href="#/">Another action</a>
						<a className="dropdown-item" href="#/">Something else here</a>
						<div role="separator" className="dropdown-divider"></div>
						<a className="dropdown-item" href="#/">Separated link</a>
					</div>
				</div>
			</div>
		
			<Card>
				<ul className="nav nav-tabs nav-tabs-v2 px-4">
					<li className="nav-item me-3"><a href="#allTab" className="nav-link active px-2" data-bs-toggle="tab">All</a></li>
					<li className="nav-item me-3"><a href="#publishedTab" className="nav-link px-2" data-bs-toggle="tab">Unfulfilled</a></li>
					<li className="nav-item me-3"><a href="#expiredTab" className="nav-link px-2" data-bs-toggle="tab">Unpaid</a></li>
					<li className="nav-item me-3"><a href="#deletedTab" className="nav-link px-2" data-bs-toggle="tab">Open</a></li>
					<li className="nav-item me-3"><a href="#deletedTab" className="nav-link px-2" data-bs-toggle="tab">Closed</a></li>
					<li className="nav-item me-3"><a href="#deletedTab" className="nav-link px-2" data-bs-toggle="tab">Local delivery</a></li>
				</ul>
				<div className="tab-content p-4">
					<div className="tab-pane fade show active" id="allTab">
						<div className="input-group mb-4">
							<div className="flex-fill position-relative">
								<div className="input-group">
									<input type="text" className="form-control px-35px" placeholder="Filter orders" />
									<div className="input-group-text position-absolute top-0 bottom-0 bg-none border-0 start-0" style={{zIndex: 1020}}>
										<i className="fa fa-search opacity-5"></i>
									</div>
								</div>
							</div>
							<button className="btn btn-outline-default dropdown-toggle rounded-0" type="button" data-bs-toggle="dropdown"><span className="d-none d-md-inline">Payment Status</span><span className="d-inline d-md-none"><i className="fa fa-credit-card"></i></span> &nbsp;</button>
							<div className="dropdown-menu">
								<a className="dropdown-item" href="#/">Action</a>
								<a className="dropdown-item" href="#/">Another action</a>
								<a className="dropdown-item" href="#/">Something else here</a>
								<div role="separator" className="dropdown-divider"></div>
								<a className="dropdown-item" href="#/">Separated link</a>
							</div>
							<button className="btn btn-outline-default dropdown-toggle" type="button" data-bs-toggle="dropdown"><span className="d-none d-md-inline">Fulfillment status</span><span className="d-inline d-md-none"><i className="fa fa-check"></i></span> &nbsp;</button>
							<div className="dropdown-menu dropdown-menu-end">
								<a className="dropdown-item" href="#/">Action</a>
								<a className="dropdown-item" href="#/">Another action</a>
								<a className="dropdown-item" href="#/">Something else here</a>
								<div role="separator" className="dropdown-divider"></div>
								<a className="dropdown-item" href="#/">Separated link</a>
							</div>
						</div>
						
						<div className="table-responsive">
							<table className="table table-hover text-nowrap">
								<thead>
									<tr>
										<th className="border-top-0 pt-0 pb-2"></th>
										<th className="border-top-0 pt-0 pb-2">Order</th>
										<th className="border-top-0 pt-0 pb-2">Date</th>
										<th className="border-top-0 pt-0 pb-2">Customer</th>
										<th className="border-top-0 pt-0 pb-2">Total</th>
										<th className="border-top-0 pt-0 pb-2">Payment status</th>
										<th className="border-top-0 pt-0 pb-2">Fulfillment status</th>
										<th className="border-top-0 pt-0 pb-2">Items</th>
										<th className="border-top-0 pt-0 pb-2">Delivery method</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="w-10px align-middle">
											<div className="form-check">
												<input type="checkbox" className="form-check-input" id="product1" />
												<label className="form-check-label" htmlFor="product1"></label>
											</div>
										</td>
										<td className="align-middle"><Link to="/pages/order-details">#1950</Link></td>
										<td className="align-middle">Thu 26 Nov, 12:23pm</td>
										<td className="align-middle">Amanda Lee</td>
										<td>$398.00</td>
										<td className="py-1 align-middle"><span className="badge border border-success text-success px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center"><i className="fa fa-circle fs-9px fa-fw me-5px"></i> Paid</span></td>
										<td className="align-middle"><span className="badge border border-success text-success px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center"><i className="fa fa-circle fs-9px fa-fw me-5px"></i> Fulfilled</span></td>
										<td className="align-middle">3 items</td>
										<td className="align-middle">Free shipping</td>
									</tr>
									<tr>
										<td className="w-10px align-middle">
											<div className="form-check">
												<input type="checkbox" className="form-check-input" id="product2" />
												<label className="form-check-label" htmlFor="product2"></label>
											</div>
										</td>
										<td className="align-middle"><Link to="/pages/order-details">#1949</Link></td>
										<td className="align-middle">Thu 26 Nov, 11:54am</td>
										<td className="align-middle">Leonard Oii</td>
										<td>$496.00</td>
										<td className="py-1 align-middle"><span className="badge border border-success text-success px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center"><i className="fa fa-circle fs-9px fa-fw me-5px"></i> Paid</span></td>
										<td className="align-middle"><span className="badge border border-success text-success px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center"><i className="fa fa-circle fs-9px fa-fw me-5px"></i> Fulfilled</span></td>
										<td className="align-middle">1 item</td>
										<td className="align-middle">Local pickup</td>
									</tr>
									<tr>
										<td className="w-10px align-middle">
											<div className="form-check">
												<input type="checkbox" className="form-check-input" id="product3" />
												<label className="form-check-label" htmlFor="product3"></label>
											</div>
										</td>
										<td className="align-middle"><Link to="/pages/order-details">#1948</Link></td>
										<td className="align-middle">Thu 25 Nov, 11:54pm</td>
										<td className="align-middle">John Doe</td>
										<td>$195.00</td>
										<td className="py-1 align-middle"><span className="badge border border-warning text-warning px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center"><i className="fa fa-circle fs-9px fa-fw me-5px"></i> Pending</span></td>
										<td className="align-middle"><span className="badge border border-warning text-warning px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center"><i className="fa fa-circle fs-9px fa-fw me-5px"></i> Unfulfilled</span></td>
										<td className="align-middle">2 items</td>
										<td className="align-middle">Express</td>
									</tr>
									<tr>
										<td className="w-10px align-middle">
											<div className="form-check">
												<input type="checkbox" className="form-check-input" id="product4" />
												<label className="form-check-label" htmlFor="product4"></label>
											</div>
										</td>
										<td className="align-middle"><Link to="/pages/order-details">#1947</Link></td>
										<td className="align-middle">Thu 25 Nov, 11:53pm</td>
										<td className="align-middle">Terry Ng</td>
										<td>$195.00</td>
										<td className="py-1 align-middle"><span className="badge border border-warning text-warning px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center"><i className="fa fa-circle fs-9px fa-fw me-5px"></i> Pending</span></td>
										<td className="align-middle"><span className="badge border border-warning text-warning px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center"><i className="fa fa-circle fs-9px fa-fw me-5px"></i> Unfulfilled</span></td>
										<td className="align-middle">2 items</td>
										<td className="align-middle">Express</td>
									</tr>
									<tr>
										<td className="w-10px align-middle">
											<div className="form-check">
												<input type="checkbox" className="form-check-input" id="product5" />
												<label className="form-check-label" htmlFor="product5"></label>
											</div>
										</td>
										<td className="align-middle"><Link to="/pages/order-details">#1946</Link></td>
										<td className="align-middle">Thu 25 Nov, 11:52pm</td>
										<td className="align-middle">Terry Ng</td>
										<td>$195.00</td>
										<td className="py-1 align-middle"><span className="badge border border-warning text-warning px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center"><i className="fa fa-circle fs-9px fa-fw me-5px"></i> Pending</span></td>
										<td className="align-middle"><span className="badge border border-yellow text-warning px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center"><i className="fa fa-circle fs-9px fa-fw me-5px"></i> Unfulfilled</span></td>
										<td className="align-middle">2 items</td>
										<td className="align-middle">Express</td>
									</tr>
									<tr>
										<td className="w-10px align-middle">
											<div className="form-check">
												<input type="checkbox" className="form-check-input" id="product6" />
												<label className="form-check-label" htmlFor="product6"></label>
											</div>
										</td>
										<td className="align-middle"><Link to="/pages/order-details">#1945</Link></td>
										<td className="align-middle">Thu 24 Nov, 2:43pm</td>
										<td className="align-middle">Lelouch Wong</td>
										<td>$900.00</td>
										<td className="py-1 align-middle"><span className="badge border border-success text-success px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center"><i className="fa fa-circle fs-9px fa-fw me-5px"></i> Paid</span></td>
										<td className="align-middle"><span className="badge border border-primary text-primary px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center"><i className="fa fa-circle fs-9px fa-fw me-5px"></i> Ready for pickup</span></td>
										<td className="align-middle">2 items</td>
										<td className="align-middle">Local pickup</td>
									</tr>
									<tr>
										<td className="w-10px align-middle">
											<div className="form-check">
												<input type="checkbox" className="form-check-input" id="product7" />
												<label className="form-check-label" htmlFor="product7"></label>
											</div>
										</td>
										<td className="align-middle"><Link to="/pages/order-details">#1944</Link></td>
										<td className="align-middle">Thu 23 Nov, 2:43pm</td>
										<td className="align-middle">Cynthia Ting</td>
										<td>$625.00</td>
										<td className="py-1 align-middle"><span className="badge border border-success text-success px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center"><i className="fa fa-circle fs-9px fa-fw me-5px"></i> Paid</span></td>
										<td className="align-middle"><span className="badge border border-primary text-primary px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center"><i className="fa fa-circle fs-9px fa-fw me-5px"></i> Ready for delivery</span></td>
										<td className="align-middle">1 item</td>
										<td className="align-middle">Local pickup</td>
									</tr>
									<tr>
										<td className="w-10px align-middle">
											<div className="form-check">
												<input type="checkbox" className="form-check-input" id="product8" />
												<label className="form-check-label" htmlFor="product8"></label>
											</div>
										</td>
										<td className="align-middle"><Link to="/pages/order-details">#1943</Link></td>
										<td className="align-middle">Thu 23 Nov, 11:59am</td>
										<td className="align-middle">Richard Leong</td>
										<td>$195.00</td>
										<td className="py-1 align-middle"><span className="badge border border-gray-300 text-gray-300 px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center"><i className="fa fa-circle fs-9px fa-fw me-5px"></i> Partially refunded</span></td>
										<td className="align-middle"><span className="badge border border-danger text-danger px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center"><i className="fa fa-circle fs-9px fa-fw me-5px"></i> Partially fulfilled</span></td>
										<td className="align-middle">2 items</td>
										<td className="align-middle">Express</td>
									</tr>
									<tr>
										<td className="w-10px align-middle">
											<div className="form-check">
												<input type="checkbox" className="form-check-input" id="product9" />
												<label className="form-check-label" htmlFor="product9"></label>
											</div>
										</td>
										<td className="align-middle"><Link to="/pages/order-details">#1942</Link></td>
										<td className="align-middle">Thu 22 Nov, 8:12am</td>
										<td className="align-middle">Clement Tang</td>
										<td>$195.00</td>
										<td className="py-1 align-middle"><span className="badge border border-success text-success px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center"><i className="fa fa-circle fs-9px fa-fw me-5px"></i> Paid</span></td>
										<td className="align-middle"><span className="badge border border-success text-success px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center"><i className="fa fa-circle fs-9px fa-fw me-5px"></i> Fulfilled</span></td>
										<td className="align-middle">1 item</td>
										<td className="align-middle">Express</td>
									</tr>
									<tr>
										<td className="w-10px align-middle">
											<div className="form-check">
												<input type="checkbox" className="form-check-input" id="product10" />
												<label className="form-check-label" htmlFor="product10"></label>
											</div>
										</td>
										<td className="align-middle"><Link to="/pages/order-details">#1941</Link></td>
										<td className="align-middle">Thu 22 Nov, 7:42am</td>
										<td className="align-middle">Richard Leong</td>
										<td>$195.00</td>
										<td className="py-1 align-middle"><span className="badge border border-success text-success px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center"><i className="fa fa-circle fs-9px fa-fw me-5px"></i> Paid</span></td>
										<td className="align-middle"><span className="badge border border-success text-success px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center"><i className="fa fa-circle fs-9px fa-fw me-5px"></i> Fulfilled</span></td>
										<td className="align-middle">1 item</td>
										<td className="align-middle">Express</td>
									</tr>
								</tbody>
							</table>
						</div>
					
						<div className="d-md-flex align-items-center">
							<div className="me-md-auto text-md-left text-center mb-2 mb-md-0">
								Showing 1 to 10 of 57 entries
							</div>
							<ul className="pagination mb-0 justify-content-center">
								<li className="page-item disabled"><a className="page-link" href="#/">Previous</a></li>
								<li className="page-item"><a className="page-link" href="#/">1</a></li>
								<li className="page-item active"><a className="page-link" href="#/">2</a></li>
								<li className="page-item"><a className="page-link" href="#/">3</a></li>
								<li className="page-item"><a className="page-link" href="#/">4</a></li>
								<li className="page-item"><a className="page-link" href="#/">5</a></li>
								<li className="page-item"><a className="page-link" href="#/">6</a></li>
								<li className="page-item"><a className="page-link" href="#/">Next</a></li>
							</ul>
						</div>
					</div>
				</div>
			</Card>
		</div>
	)
}

export default PagesOrders;