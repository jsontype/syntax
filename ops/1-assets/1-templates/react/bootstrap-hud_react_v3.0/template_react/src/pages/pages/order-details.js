import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from './../../components/card/card.jsx';

function PagesOrderDetails() {
	return (
		<div>
			<div className="d-flex align-items-center mb-3">
				<div>
					<ol className="breadcrumb">
						<li className="breadcrumb-item"><a href="#/">PAGES</a></li>
						<li className="breadcrumb-item active">ORDER DETAILS</li>
					</ol>
					<h1 className="page-header mb-0">Order Details</h1>
				</div>
			</div>
		
			<div className="mb-3 d-md-flex fw-bold">
				<div className="mt-md-0 mt-2"><a href="#/" className="text-decoration-none text-inverse"><i className="bi bi-printer fa-fw me-1 text-inverse text-opacity-50"></i> Print</a></div>
				<div className="ms-md-4 mt-md-0 mt-2"><a href="#/" className="text-decoration-none text-inverse"><i className="bi bi-boxes fa-fw me-1 text-inverse text-opacity-50"></i> Restock items</a></div>
				<div className="ms-md-4 mt-md-0 mt-2"><a href="#/" className="text-decoration-none text-inverse"><i className="bi bi-pen fa-fw me-1 text-inverse text-opacity-50"></i> Edit</a></div>
				<div className="ms-md-4 mt-md-0 mt-2 dropdown-toggle">
					<a href="#/" data-bs-toggle="dropdown" className="text-decoration-none text-inverse"><i className="bi bi-gear fa-fw me-1 text-inverse text-opacity-50"></i> More Actions</a>
					<div className="dropdown-menu">
						<a className="dropdown-item" href="#/">Action</a>
						<a className="dropdown-item" href="#/">Another action</a>
						<a className="dropdown-item" href="#/">Something else here</a>
						<div role="separator" className="dropdown-divider"></div>
						<a className="dropdown-item" href="#/">Separated link</a>
					</div>
				</div>
			</div>
			<div className="row gx-4">
				<div className="col-lg-8">
					<Card className="mb-4">
						<CardHeader className="d-flex align-items-center bg-inverse bg-opacity-10 fw-400">
							Products (3)
							<a href="#/" className="ms-auto text-decoration-none text-inverse text-opacity-50"><i className="bi bi-truck fa-lg me-1"></i> Add Tracking Link</a>
						</CardHeader>
						<CardBody className="text-inverse">
							<div className="row align-items-center">
								<div className="col-lg-8 d-flex align-items-center">
									<div className="h-65px w-65px d-flex align-items-center justify-content-center position-relative bg-white p-1">
										<img src="/assets/img/product/product-1.jpg" alt="" className="mw-100 mh-100" />
										<span className="w-20px h-20px p-0 d-flex align-items-center justify-content-center badge bg-theme text-theme-color position-absolute end-0 top-0 fw-bold fs-12px rounded-pill mt-n2 me-n2">1</span>
									</div>
									<div className="ps-3 flex-1">
										<div><a href="#/" className="text-decoration-none text-inverse">iPhone 13 Pro Max</a></div>
										<div className="text-inverse text-opacity-50 small">
											SKU: IP13PROMAX-512
										</div>
									</div>
								</div>
								<div className="col-lg-2 m-0 ps-lg-3">
									$999 x 1
								</div>
								<div className="col-lg-2 m-0 text-end">
									$999
								</div>
							</div>
							<hr className="my-4 opacity-2" />
							<div className="row">
								<div className="col-lg-8 d-flex align-items-center">
									<div className="h-65px w-65px d-flex align-items-center justify-content-center position-relative bg-white p-1">
										<img src="/assets/img/product/product-2.jpg" alt="" className="mw-100 mh-100" />
										<span className="w-20px h-20px p-0 d-flex align-items-center justify-content-center badge bg-theme text-theme-color position-absolute end-0 top-0 fw-bold fs-12px rounded-pill mt-n2 me-n2">1</span>
									</div>
									<div className="ps-3 flex-1">
										<div className=""><a href="#/" className="text-decoration-none text-inverse">Macbook Pro 2024</a></div>
										<div className="text-inverse text-opacity-50 small">
											SKU: MACBOOKPRO-1TB
										</div>
									</div>
								</div>
								<div className="col-lg-2 m-0 ps-lg-3">
									$1,999 x 1
								</div>
								<div className="col-lg-2 m-0 text-end">
									$1,999
								</div>
							</div>
							<hr className="my-4 opacity-2" />
							<div className="row">
								<div className="col-lg-8 d-flex align-items-center">
									<div className="h-65px w-65px d-flex align-items-center justify-content-center position-relative bg-white p-1">
										<img src="/assets/img/product/product-3.jpg" alt="" className="mw-100 mh-100" />
										<span className="w-20px h-20px p-0 d-flex align-items-center justify-content-center badge bg-theme text-theme-color position-absolute end-0 top-0 fw-bold fs-12px rounded-pill mt-n2 me-n2">1</span>
									</div>
									<div className="ps-3 flex-1">
										<div className=""><a href="#/" className="text-decoration-none text-inverse">Apple Watch 5</a></div>
										<div className="text-inverse text-opacity-50 small">
											SKU: APPLEWATCHBLACK
										</div>
									</div>
								</div>
								<div className="col-lg-2 m-0 ps-lg-3">
									$599 x 1
								</div>
								<div className="col-lg-2 text-inverse m-0 text-end">
									$599
								</div>
							</div>
						</CardBody>
						<CardFooter className="bg-none d-flex p-3">
							<a href="#/" className="btn btn-outline-default ms-auto dropdown-toggle">More</a>
							<a href="#/" className="btn btn-outline-theme ms-2">Add Tracking</a>
						</CardFooter>
					</Card>
					<Card>
						<CardHeader className="d-flex align-items-center bg-inverse bg-opacity-10 fw-400">
							Payment Records
							<a href="#/" className="ms-auto text-decoration-none text-inverse text-opacity-50"><i className="bi bi-paypal me-1 fa-lg"></i> View paypal records</a>
						</CardHeader>
						<CardBody>
							<table className="table table-borderless table-sm m-0">
								<tbody>
									<tr>
										<td className="w-150px">Subtotal</td>
										<td>3 items</td>
										<td className="text-end">$3,496.00</td>
									</tr>
									<tr>
										<td>Tax</td>
										<td>GST 5%</td>
										<td className="text-end">$174.80</td>
									</tr>
									<tr>
										<td>Shipping Fee</td>
										<td>promo code: <u className="text-success fw-bold small">FREESHIPPING</u> <small>(<span className="text-decoration-line-through">$120.00</span>)</small></td>
										<td className="text-end">$0.00</td>
									</tr>
									<tr>
										<td className="pb-2" colSpan="2"><b>Total</b></td>
										<td className="text-end pb-2 text-decoration-underline"><b>$3670.80</b></td>
									</tr>
									<tr>
										<td colSpan="3">
											<hr className="m-0" />
										</td>
									</tr>
									<tr>
										<td className="pt-2 pb-2 text-nowrap">
											Paid by customer
										</td>
										<td className="pt-2 pb-2">
											via <a href="#/" className="text-decoration-none">Paypal</a> (#IRU9589320)
										</td>
										<td className="pt-2 pb-2 text-end">$3670.80</td>
									</tr>
								</tbody>
							</table>
						</CardBody>
						<CardFooter className="bg-none d-flex p-3">
							<a href="#/" className="btn btn-outline-theme ms-auto">Mark as paid</a>
						</CardFooter>
					</Card>
				</div>
				<div className="col-lg-4">
					<Card className="mb-4">
						<CardHeader className="d-flex align-items-center bg-inverse bg-opacity-10 fw-400">
							Notes
							<a href="#/" className="ms-auto text-decoration-none text-inverse text-opacity-50">Edit</a>
						</CardHeader>
						<CardBody>
							No notes from customer
						</CardBody>
					</Card>
					<Card className="mb-4">
						<CardHeader className="d-flex align-items-center bg-inverse bg-opacity-10 fw-400">
							Customer
							<a href="#/" className="ms-auto text-decoration-none text-inverse text-opacity-50">Edit</a>
						</CardHeader>
						<CardBody className="fw-bold">
							<div className="d-flex align-items-center">
								<a href="#/" className="d-block"><img src="/assets/img/user/user-1.jpg" alt="" width="45" className="rounded-pill" /></a>
								<div className="flex-1 ps-3">
									<a href="#/" className="d-block text-decoration-none">John Smith</a>
									johnsmith@gmail.com
								</div>
							</div>
						</CardBody>
					</Card>
					<Card className="mb-4">
						<CardHeader className="d-flex align-items-center bg-inverse bg-opacity-10 fw-400">
							Shipping Information
							<a href="#/" className="ms-auto text-decoration-none text-inverse text-opacity-50">Edit</a>
						</CardHeader>
						<CardBody className="fw-bold">
							<i className="bi bi-telephone-fill fa-fw"></i> +916-663-4289<br /><br />
							867 Highland View Drive<br />
							Newcastle, CA<br />
							California<br />
							95658<br />
							<br />
							<a href="#/" className="text-decoration-none"><i className="bi bi-geo-alt-fill fa-fw"></i> View map</a>
						</CardBody>
					</Card>
					<Card className="mb-4">
						<CardHeader className="d-flex align-items-center bg-inverse bg-opacity-10 fw-400">
							Billing Information
							<a href="#/" className="ms-auto text-decoration-none text-inverse text-opacity-50">Edit</a>
						</CardHeader>
						<CardBody className="fw-bold">
							867 Highland View Drive<br />
							Newcastle, CA<br />
							California<br />
							95658<br />
						</CardBody>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default PagesOrderDetails;