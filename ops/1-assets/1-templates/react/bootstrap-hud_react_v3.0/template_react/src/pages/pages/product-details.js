import React from 'react';
import ReactQuill from 'react-quill';
import { TagsInput } from 'react-tag-input-component';
import { Card, CardHeader, CardBody } from './../../components/card/card.jsx';
import 'react-quill/dist/quill.snow.css';

function PagesProductDetails() {
	var tags = ['Laptop', 'Apple'];
	var tagSize = ['XL', 'S'];
	var tagColor = ['Black'];
	var tagMaterial = [];
	var value = '';
	
	function setValue(value) { 
	
	};
	
	return (
		<div>
			<div className="d-flex align-items-center mb-3">
				<div>
					<ol className="breadcrumb">
						<li className="breadcrumb-item"><a href="#/">PAGES</a></li>
						<li className="breadcrumb-item active">PRODUCT DETAILS</li>
					</ol>
					<h1 className="page-header mb-0">Product Details</h1>
				</div>
			</div>
		
			<div className="row gx-4">
				<div className="col-lg-8">
					<Card className="mb-4">
						<CardHeader className="d-flex align-items-center bg-inverse bg-opacity-10 fw-400">
							Product Information
						</CardHeader>
						<CardBody>
							<div className="mb-3">
								<label className="form-label">Title <span className="text-danger">*</span></label>
								<input type="text" className="form-control" name="title" placeholder="Product name" />
							</div>
							<div className="">
								<label className="form-label">Description <span className="text-danger">*</span></label>
								<div className="h-200px mb-5">
									<ReactQuill theme="snow" className="h-100" value={value} onChange={setValue} />
								</div>
							</div>
						</CardBody>
					</Card>
					<Card className="mb-4">
						<CardHeader className="d-flex align-items-center bg-inverse bg-opacity-10 fw-400">
							Media
						</CardHeader>
						<CardBody className="card-body pb-2">
							<div className="mb-2">
								<div className="d-block d-lg-flex align-items-center">
									<span className="btn btn-outline-theme me-2 mb-1">
										<i className="fa fa-fw fa-plus"></i>
										<span>Add files...</span>
									</span>
									<button type="submit" className="btn btn-outline-default me-2 mb-1 start">
										<i className="fa fa-fw fa-upload"></i>
										<span>Start upload</span>
									</button>
									<button type="reset" className="btn btn-outline-default me-2 mb-1 cancel">
										<i className="fa fa-fw fa-ban"></i>
										<span>Cancel upload</span>
									</button>
									<button type="button" className="btn btn-outline-default me-2 mb-1 delete">
										<i className="fa fa-fw fa-trash"></i>
										<span>Delete</span>
									</button>
								</div>
							</div>
						</CardBody>
						<table className="table table-card mb-0 fs-13px">
							<thead>
								<tr className="fs-12px">
									<th className="pt-2 pb-2 w-25">PREVIEW</th>
									<th className="pt-2 pb-2 w-25">FILENAME</th>
									<th className="pt-2 pb-2 w-25">SIZE</th>
									<th className="pt-2 pb-2 w-25">ACTION</th>
								</tr>
							</thead>
							<tbody className="files">
								<tr className="empty-row">
									<td colSpan="4" className="text-center p-3">
										<div className="text-gray-300 mb-2"><i className="fa fa-file-archive fa-3x"></i></div> 
										No file uploaded
									</td>
								</tr>
							</tbody>
						</table>
					</Card>
					<Card className="mb-4">
						<CardHeader className="d-flex align-items-center bg-inverse bg-opacity-10 fw-400">
							Variants
						</CardHeader>
						<CardBody>
							<div className="alert alert-success py-2">
								Add variants if this product comes in multiple versions, like different sizes or colors.
							</div>
							<div className="row mb-3 fw-bold text-inverse">
								<div className="col-4">Option name</div>
								<div className="col-8">Option values</div>
							</div>
							<div className="row mb-3 gx-3">
								<div className="col-4"><input type="text" className="form-control" name="variant[0][name]" placeholder="e.g Size" defaultValue="Size" /></div>
								<div className="col-7">
									<TagsInput value={tagSize} name="tagSize" placeHolder="enter size" />
								</div>
								<div className="col-1">
									<a href="#/" className="btn btn-outline-secondary d-block"><i className="bi bi-x-lg"></i></a>
								</div>
							</div>
							<div className="row mb-3 gx-3">
								<div className="col-4"><input type="text" className="form-control" name="variant[1][name]" placeholder="e.g Color" defaultValue="Color" /></div>
								<div className="col-7">
									<TagsInput value={tagColor} name="tagColor" placeHolder="enter color" />
								</div>
								<div className="col-1">
									<a href="#/" className="btn btn-outline-secondary d-block"><i className="bi bi-x-lg"></i></a>
								</div>
							</div>
							<div className="row mb-3 gx-3">
								<div className="col-4"><input type="text" className="form-control" name="variant[1][name]" placeholder="e.g Color" defaultValue="Material" /></div>
								<div className="col-7">
									<TagsInput value={tagMaterial} name="tagMaterial" placeHolder="enter material" />
								</div>
								<div className="col-1">
									<a href="#/" className="btn btn-outline-secondary d-block"><i className="bi bi-x-lg"></i></a>
								</div>
							</div>
							<p>Modify the variants to be created:</p>
							<table className="table fw-bold">
								<thead>
									<tr>
										<th className="w-10px"></th>
										<th>Variant</th>
										<th className="w-150px">SKU</th>
										<th className="w-150px">Price</th>
										<th className="w-50px">Quantity</th>
										<th className="w-150px"></th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="align-middle">
											<div className="form-check">
												<input type="checkbox" name="variant[0][enabled]" id="variant_0_enabled" defaultValue="1" defaultChecked className="form-check-input" />
												<label className="form-check-label">&nbsp;</label>
											</div>
										</td>
										<td className="fs-13px align-middle">
											<span className="text-theme">XL</span>
											<span className="text-muted mx-1"> • </span>
											<span className="text-indigo">Black</span>
										</td>
										<td><input type="text" className="form-control" placeholder="#SKU000001" /></td>
										<td><input type="text" className="form-control" placeholder="0.00" /></td>
										<td><input type="text" className="form-control" placeholder="0" /></td>
										<td><a href="#/" className="btn btn-outline-theme d-block">Upload Image</a></td>
									</tr>
									<tr>
										<td className="align-middle">
											<div className="form-check">
												<input type="checkbox" name="variant[1][enabled]" id="variant_1_enabled" defaultValue="1" className="form-check-input" />
												<label className="form-check-label">&nbsp;</label>
											</div>
										</td>
										<td className="fs-13px align-middle">
											<span className="text-theme">S</span>
											<span className="text-muted mx-1"> • </span>
											<span className="text-indigo">Black</span>
										</td>
										<td><input type="text" className="form-control" placeholder="#SKU000001" /></td>
										<td><input type="text" className="form-control" placeholder="0.00" /></td>
										<td><input type="text" className="form-control" placeholder="0" /></td>
										<td><a href="#/" className="btn btn-outline-theme d-block">Upload Image</a></td>
									</tr>
								</tbody>
							</table>
						</CardBody>
					</Card>
					<Card className="mb-4">
						<CardHeader className="d-flex align-items-center bg-inverse bg-opacity-10 fw-400">
							Warranty
						</CardHeader>
						<CardBody>
							<div className="row">
								<div className="col-lg-6">
									<div className="mb-lg-0 mb-3">
										<label className="form-label">Warranty Type</label>
										<select className="form-select" name="warranty_type_id">
											<option value="">-- Select Warranty Type --</option>
											<option value="1">No Warranty</option>
											<option value="2">Local Supplier Warranty</option>
											<option value="3">Local Manufacturer Warranty</option>
											<option value="4">International Manufacturer Warranty</option>
										</select>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="mb-lg-0 mb-3">
										<label className="form-label">Warranty Period</label>
										<select className="form-select" name="warranty_id">
											<option value="">-- Select Warranty Period --</option>
											<option value="1">1 Month</option>
											<option value="2">3 Months</option>
											<option value="3">6 Months</option>
											<option value="4">1 Year</option>
											<option value="5">2 Years</option>
											<option value="6">3 Years</option>
											<option value="7">4 Years</option>
											<option value="8">5 Years</option>
											<option value="9">6 Years</option>
											<option value="10">7 Years</option>
											<option value="11">8 Years</option>
											<option value="12">9 Years</option>
											<option value="13">10 Years</option>
										</select>
									</div>
								</div>
							</div>
						</CardBody>
					</Card>
					<Card className="mb-4">
						<CardHeader className="d-flex align-items-center bg-inverse bg-opacity-10 fw-400">
							Package Content
						</CardHeader>
						<CardBody>
							<div className="mb-3">
								<label className="form-label">What's in the box</label>
								<input type="text" className="form-control" placeholder="e.g T-shirt" name="package_content" />
							</div>
							<div className="row">
								<div className="col-lg-6">
									<div className="mb-3">
										<label className="form-label">Weight</label>
										<input type="text" className="form-control" name="weight" placeholder="(kg)" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="form-group">
										<label className="form-label">Parcel Size</label>
										<div className="row">
											<div className="col-4">
												<div className="input-group">
													<span className="input-group-text">W</span>
													<input type="text" className="form-control" placeholder="(cm)" name="width" />
												</div>
											</div>
											<div className="col-4">
												<div className="input-group">
													<span className="input-group-text">L</span>
													<input type="text" className="form-control" placeholder="(cm)" name="length" />
												</div>
											</div>
											<div className="col-4">
												<div className="input-group">
													<span className="input-group-text">H</span>
													<input type="text" className="form-control" placeholder="(cm)" name="height" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="p-3 bg-white bg-opacity-10">
								<div className="form-group mb-0">
									<label className="form-label">Shipping</label>
									<div className="shipping-container">
										<hr className="mt-2 mb-2" />
										<div className="row align-items-center">
											<div className="col-6 pt-1 pb-1">No shipping fee</div>
											<div className="col-6 d-flex align-items-center">
												<div className="form-check form-switch ms-auto">
													<input type="checkbox" className="form-check-input" id="shippingFree" name="shipping_free_enable" defaultChecked defaultValue="1" />
													<label className="form-check-label" htmlFor="shippingFree">&nbsp;</label>
												</div>
											</div>
										</div>
										<hr className="mt-2 mb-2" />
										<div className="row align-items-center">
											<div className="col-6 pt-1 pb-1">
												AliExpress
											</div>
											<div className="col-6 d-flex align-items-center">
												<div className="form-check form-switch ms-auto">
													<input type="checkbox" className="form-check-input" id="shippingAliExpress" name="shipping_enable" defaultValue="AliExpress" />
													<label className="form-check-label" htmlFor="shippingAliExpress">&nbsp;</label>
												</div>
											</div>
										</div>
										<hr className="mt-2 mb-2" />
										<div className="row align-items-center">
											<div className="col-6 pt-1 pb-1">
												SaleHoo
											</div>
											<div className="col-6 d-flex align-items-center">
												<div className="form-check form-switch ms-auto">
													<input type="checkbox" className="form-check-input" id="shippingSaleHoo" name="shipping_enable" defaultValue="SaleHoo" />
													<label className="form-check-label" htmlFor="shippingSaleHoo">&nbsp;</label>
												</div>
											</div>
										</div>
										<hr className="mt-2 mb-2" />
										<div className="row align-items-center">
											<div className="col-6 pt-1 pb-1">
												Megagoods
											</div>
											<div className="col-6 d-flex align-items-center">
												<div className="form-check form-switch ms-auto">
													<input type="checkbox" className="form-check-input" id="shippingMegagoods" name="shipping_enable" defaultValue="Megagoods" />
													<label className="form-check-label" htmlFor="shippingMegagoods">&nbsp;</label>
												</div>
											</div>
										</div>
										<hr className="mt-2 mb-2" />
										<div className="row align-items-center">
											<div className="col-6 pt-1 pb-1">
												Wholesale2B
											</div>
											<div className="col-6 d-flex align-items-center">
												<div className="form-check form-switch ms-auto">
													<input type="checkbox" className="form-check-input" id="shippingWholesale2B" name="shipping_enable" defaultValue="Wholesale2B" />
													<label className="form-check-label" htmlFor="shippingWholesale2B">&nbsp;</label>
												</div>
											</div>
										</div>
										<hr className="mt-2 mb-2" />
										<div className="row align-items-center">
											<div className="col-6 pt-1 pb-1">
												Sunrise Wholesale
											</div>
											<div className="col-6 d-flex align-items-center">
												<div className="form-check form-switch ms-auto">
													<input type="checkbox" className="form-check-input" id="shippingSunriseWholesale" name="shipping_enable" defaultValue="Sunrise Wholesale" />
													<label className="form-check-label" htmlFor="shippingSunriseWholesale">&nbsp;</label>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
				<div className="col-lg-4">
					<Card className="mb-4">
						<CardHeader className="d-flex align-items-center fw-400 bg-inverse bg-opacity-10">
							<div className="flex-1">
								<div>Sales channels (2/3)</div>
							</div>
							<div><a href="#/" className="text-decoration-none">Manage</a></div>
						</CardHeader>
						<CardBody>
							<div className="d-flex">
								<div className="flex-1 d-flex">
									<div className="me-2"><i className="fa fa-store fa-lg fa-fw text-inverse text-opacity-50"></i></div>
									<div>Online Store</div>
									<span className="badge bg-inverse bg-opacity-10 text-theme fw-bold fs-12px ms-auto me-2">2024-01-05</span>
								</div>
								<div className="w-50px text-center"><a href="#/" className="text-decoration-none"><i className="bi bi-calendar fa-lg"></i></a></div>
							</div>
							<hr />
							<div className="d-flex">
								<div className="flex-1 d-flex">
									<div className="me-2"><i className="fab fa-shopify fa-lg fa-fw text-inverse text-opacity-50"></i></div>
									<div>Shopify</div>
									<span className="badge bg-inverse bg-opacity-10 text-theme fw-bold fs-12px ms-auto me-2">2024-01-05</span>
								</div>
								<div className="w-50px text-center"><a href="#/" className="text-decoration-none"><i className="bi bi-calendar fa-lg"></i></a></div>
							</div>
							<hr />
							<div className="d-flex">
								<div className="flex-1 d-flex">
									<div className="me-2"><i className="fab fa-amazon fa-lg fa-fw text-inverse text-opacity-50"></i></div>
									<div>
										<div>Amazon</div>
										<div className="d-flex mt-1 text-inverse text-opacity-50 small">
											<div><i className="fa fa-circle text-warning fs-6px d-block mt-2"></i></div>
											<div className="flex-1 ps-2">
												<div className="mb-2">
													Amazon is disconnected. Connect your Amazon Seller Central account to continue using this sales channel.
												</div>
												<a href="#/">Learn more</a>
											</div>
										</div>
									</div>
								</div>
								<div className="w-50px text-center"><a href="#/" className="text-decoration-none text-inverse text-opacity-50"><i className="bi bi-x-circle-fill fa-lg fa-fw"></i></a></div>
							</div>
						</CardBody>
					</Card>
					<Card className="mb-4">
						<CardHeader className="d-flex align-items-center fw-400 bg-inverse bg-opacity-10">
							<div className="flex-1">
								<div>Organization</div>
							</div>
						</CardHeader>
						<CardBody>
							<div className="mb-3">
								<label className="form-label">Product type</label>
								<div className="input-group">
									<input type="text" className="form-control" placeholder="Product type" />
									<button className="btn btn-outline-secondary"><i className="fa fa-search"></i></button>
								</div>
							</div>
							<div className="mb-0">
								<label className="form-label">Vendor</label>
								<div className="input-group">
									<input type="text" className="form-control" placeholder="Apple store supplies" />
									<button className="btn btn-outline-secondary"><i className="fa fa-search"></i></button>
								</div>
							</div>
						</CardBody>
					</Card>
					<Card className="mb-4">
						<CardHeader className="d-flex align-items-center fw-400 bg-inverse bg-opacity-10">
							<div className="flex-1">
								<div>Collections</div>
							</div>
						</CardHeader>
						<CardBody>
							<div className="d-flex align-items-center position-relative fw-bold mb-2">
								<span className="position-absolute top-0 bottom-0 start-0 d-flex align-items-center px-10px"><i className="fa fa-search"></i></span>
								<input type="text" className="form-control ps-30px" placeholder="Search for collections" />
							</div>
							<p className="mb-0 small text-inverse text-opacity-50">
								<i className="fa fa-question-circle fa-fw"></i> Add this product to a collection so it's easy to find in your store.
							</p>
						</CardBody>
					</Card>
					<Card className="mb-4">
						<CardHeader className="d-flex align-items-center fw-400 bg-inverse bg-opacity-10">
							<div className="flex-1">
								<div>Tags</div>
							</div>
						</CardHeader>
						<CardBody>
							<TagsInput value={tags} name="tags" placeHolder="enter tags" />
							<div className="small"><a href="#/">View all tags</a></div>
						</CardBody>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default PagesProductDetails;