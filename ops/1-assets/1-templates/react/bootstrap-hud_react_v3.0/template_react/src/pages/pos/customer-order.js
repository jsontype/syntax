import React, { useEffect, useContext, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link } from 'react-router-dom';
import { Card, CardBody } from './../../components/card/card.jsx';
import { AppSettings } from './../../config/app-settings.js';
import { Modal } from 'bootstrap';

function PosCustomerOrder() {
	const context = useContext(AppSettings);
	const [posMobileSidebarToggled, setPosMobileSidebarToggled] = useState(false);
	const [categoryType, setCategoryType] = useState('all');
	const [tableData, setTableData] = useState([]);
	const [orderData, setOrderData] = useState([]);
	const [orderHistoryData, setOrderHistoryData] = useState([]);
	const [modal, setModal] = useState();
	const [modalData, setModalData] = useState();
	const [modalQuantity, setModalQuantity] = useState();
	const [modalSelectedSize, setModalSelectedSize] = useState();
	const [modalSelectedAddon, setModalSelectedAddon] = useState([]);
	
	var toggleMobileSidebar = (event) => {
		event.preventDefault();
		
		setPosMobileSidebarToggled(true);
	}
	
	var dismissMobileSidebar = (event) => {
		event.preventDefault();
		
		setPosMobileSidebarToggled(false);
	}
	
	var showType = (event, type) => {
		event.preventDefault();
		
		if (tableData && tableData.food) {
			for (var i = 0; i < tableData.food.length; i++) {
				if (tableData.food[i].type === type || type === 'all') {
					tableData.food[i].hide = false;
				} else {
					tableData.food[i].hide = true;
				}
			}
			
			setTableData(tableData);
			setCategoryType(type);
		}
	}
	
	var showPosItemModal = (event, food) => {
		event.preventDefault();
		
		if (food.available) {
			setModalData(food);
			setModalQuantity(1);
			setModalSelectedAddon([]);
			
			modal.show();
		}
	}
	
	var getOrderTotal = () => {
		return (orderData) ? orderData.length : 0;
	}
	
	var getOrderHistoryTotal = () => {
		return (orderHistoryData) ? orderHistoryData.length : 0;
	}
	
	var deductQty = (event, id) => {
		event.preventDefault();
		
		if (orderData) {
			const newData = orderData.map(obj => {
				if (obj.id === id) {
					var newQty = parseInt(obj.quantity) - 1;
					
					if (newQty < 1) {
						newQty = 1;
					}
					return {...obj, quantity: newQty};
				}
				
				return obj;
			});
			
			setOrderData(newData);
		}
	}
	
	var addQty = (event, id) => {
		event.preventDefault();
		
		if (orderData) {
			const newData = orderData.map(obj => {
				if (obj.id === id) {
					var newQty = parseInt(obj.quantity) + 1;
					return {...obj, quantity: newQty};
				}
				
				return obj;
			});
			
			setOrderData(newData);
		}
	}
	
	var getSubTotalPrice = () => {
		var value = 0;
		
		if (orderData) {
			for (var i = 0; i < orderData.length; i++) {
				value += parseFloat(orderData[i].price) * parseInt(orderData[i].quantity);
			}
		}
		return value.toFixed(2);
	}
	
	var getTaxesPrice = () => {
		var value = 0;
		
		if (orderData) {
			for (var i = 0; i < orderData.length; i++) {
				value += parseFloat(orderData[i].price) * parseInt(orderData[i].quantity) * .06;
			}
		}
		return value.toFixed(2);
	}
	
	var getTotalPrice = () =>  {
		var value = 0;
		
		if (orderData) {
			for (var i = 0; i < orderData.length; i++) {
				value += parseFloat(orderData[i].price) * parseInt(orderData[i].quantity);
				value += parseFloat(orderData[i].price) * parseInt(orderData[i].quantity) * .06;
			}
		}
		return value.toFixed(2);
	}
	
	var toggleConfirmation = (event, id, value) => {
		event.preventDefault();
		
		if (orderData) {
			const newData = orderData.map(obj => {
				if (obj.id === id) {
					return {...obj, confirmation: value};
				}
				return obj;
			});
			
			setOrderData(newData);
		}
	}
	
	var removeOrder = (event, id) => {
		event.preventDefault();
		
		if (orderData) {
			const newData = orderData.filter(function(order) { 
				return order.id !== id
			});
			
			setOrderData(newData);
		}
	}
	
	var addModalQty = (event) => {
		event.preventDefault();
		if (modalQuantity) {
			var newQty = parseInt(modalQuantity) + 1;
			
			setModalQuantity(newQty);
		}
	}
	
	var deductModalQty = (event) => {
		event.preventDefault();
		
		if (modalQuantity) {
			var newQty = parseInt(modalQuantity) - 1;
		
			if (newQty < 1) {
				newQty = 1;
			}
			setModalQuantity(newQty);
		}
	}
	
	var handleSizeChange = (event) => {
		var value = '';
		if (event.target.checked) {
			value = event.target.value;
		}
		
		setModalSelectedSize(value);
	}
	
	var handleAddonChange = (event) => {
		var elms = [].slice.call(document.querySelectorAll('input[name="addon"]'));
		var targetValue = [];
		
		elms.map(function(elm) {
			if (elm.checked) {
				targetValue.push(elm.value);
			}
			return true;
		});
		
		setModalSelectedAddon(targetValue);
	}
	
	var addToCart = (event) => {
		event.preventDefault();
		
		modal.hide();
		
		var options = [];
		if (modalSelectedSize) {
			var option = {
				"key": "size",
				"value": modalSelectedSize
			};
			options.push(option);
		}
		if (modalSelectedAddon) {
			for (var i = 0; i < modalSelectedAddon.length; i++) {
				var option2 = {
					"key": "addon",
					"value": modalSelectedAddon[i]
				};
				options.push(option2);
			}
		}
		
		setTimeout(() => {
			setOrderData([...orderData, {
				"id": (tableData.order.length + 1),
				"image": modalData.image,
				"title": modalData.title,
				"price": modalData.price,
				"quantity": modalQuantity,
				"options": options
			}]);
		}, 500);
	}
  
	useEffect(() => {
		context.setAppHeaderNone(true);
		context.setAppSidebarNone(true);
		context.setAppContentFullHeight(true);
		context.setAppContentClass('p-1 ps-xl-4 pe-xl-4 pt-xl-3 pb-xl-3');
		
		setModal(new Modal(document.getElementById('modalPosItem')));
		
		fetch('/assets/data/pos/customer-order.json').then(res => res.json()).then((result) => { 
			setTableData(result); 
			setOrderData(result.order); 
			setOrderHistoryData(result.history);
		});
		
		return function cleanUp() {
			context.setAppHeaderNone(false);
			context.setAppSidebarNone(false);
			context.setAppContentFullHeight(false);
			context.setAppContentClass('');
		}
		
		// eslint-disable-next-line
	}, []);
	
	return (
		<div className="h-100">
			<Card className={'pos ' + ((posMobileSidebarToggled) ? 'pos-mobile-sidebar-toggled' : '')} id="pos">
				<CardBody className="pos-container">
					<div className="pos-menu">
						<div className="logo">
							<Link to="/">
								<div className="logo-img"><i className="bi bi-x-diamond" style={{fontSize: '2.1rem'}}></i></div>
								<div className="logo-text">Pine & Dine</div>
							</Link>
						</div>
						<div className="nav-container">
							<PerfectScrollbar className="h-100">
								<ul className="nav nav-tabs">
									{tableData && tableData.category && (tableData.category.map((category, index) => (
									<li className="nav-item" key={index}>
										<a className={'nav-link' + ((category.type === categoryType) ? ' active' : '')} onClick={(event) => showType(event, category.type)} href="#/">
											<Card>
												<CardBody>
													<i className={category.icon}></i> {category.text}
												</CardBody>
											</Card>
										</a>
									</li>
									)))}
								</ul>
							</PerfectScrollbar>
						</div>
					</div>
			
					<div className="pos-content">
						<PerfectScrollbar className="pos-content-container h-100 p-4">
							<div className="row gx-4">
								{tableData && tableData.food ? (tableData.food.map((food, index) => (
									<div className={'col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-sm-6 pb-4'+ ((food.hide) ? ' d-none' : '')} key={index}>
										<Card className="h-100">
											<CardBody className="h-100 p-1">
												<a href="#/" className={'pos-product'+ ((!food.available) ? ' not-available': '')} onClick={(event) => showPosItemModal(event, food)}>
													<div className="img" style={{backgroundImage: 'url('+ food.image +')'}}></div>
													<div className="info">
														<div className="title">{food.price}</div>
														<div className="desc">{food.description}</div>
														<div className="price">${food.price}</div>
													</div>
													{!food.available && (<div className="not-available-text"><div>Not Available</div></div>)}
												</a>
											</CardBody>
										</Card>
									</div>
								))) : (
									<div className="col-12">
										No records found
									</div>
								)}
							</div>
						</PerfectScrollbar>
					</div>
					
					<div className="pos-sidebar" id="pos-sidebar">
						<div className="h-100 d-flex flex-column p-0">
							<div className="pos-sidebar-header">
								<div className="back-btn">
									<button type="button" onClick={dismissMobileSidebar} className="btn">
										<i className="bi bi-chevron-left"></i>
									</button>
								</div>
								<div className="icon"><img src="/assets/img/pos/icon-table-black.svg" className="invert-dark" alt="" /></div>
								<div className="title">Table {tableData && tableData.tableNo && (tableData.tableNo)}</div>
								<div className="order">Order: <b>{tableData && tableData.orderNo && (tableData.orderNo)}</b></div>
							</div>
					
							<div className="pos-sidebar-nav">
								<ul className="nav nav-tabs nav-fill">
									<li className="nav-item">
										<a className="nav-link active" href="#/" data-bs-toggle="tab" data-bs-target="#newOrderTab">New Order ({getOrderTotal()})</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#/" data-bs-toggle="tab" data-bs-target="#orderHistoryTab">Order History ({getOrderHistoryTotal()})</a>
									</li>
								</ul>
							</div>
					
							<PerfectScrollbar className="pos-sidebar-body tab-content h-100">
								<div className="tab-pane fade h-100 show active" id="newOrderTab">
									{orderData && orderData.length > 0 ? (orderData.map((order, index) => (
										<div className="pos-order" key={index}>
											<div className="pos-order-product">
												<div className="img" style={{backgroundImage: 'url('+ order.image +')'}}></div>
												<div className="flex-1">
													<div className="h6 mb-1">{order.title}</div>
													<div className="small">${order.price}</div>
													<div className="small mb-2">
														{order.options && (order.options.map((option, index) => (
															<div key={index}>- { option.key }: { option.value }</div>
														)))}
													</div>
													<div className="d-flex">
														<a href="#/" className="btn btn-outline-theme btn-sm" onClick={(event) => deductQty(event, order.id)}><i className="fa fa-minus"></i></a>
														<input type="text" className="form-control w-50px form-control-sm mx-2 bg-white bg-opacity-25 bg-white bg-opacity-25 text-center" value={order.quantity} readOnly />
														<a href="#/" className="btn btn-outline-theme btn-sm" onClick={(event) => addQty(event, order.id)}><i className="fa fa-plus"></i></a>
													</div>
												</div>
											</div>
											<div className="pos-order-price d-flex flex-column">
												<div>${ (order.price * order.quantity).toFixed(2) }</div>
												<div className="text-end mt-auto">
													<button onClick={(event) => toggleConfirmation(event, order.id, true)} className="btn btn-sm btn-outline-gray-500">
														<i className="fa fa-trash"></i>
													</button>
												</div>
											</div>
											{order.confirmation && (
												<div className="pos-order-confirmation text-center d-flex flex-column justify-content-center">
													<div className="mb-1">
														<i className="bi bi-trash fs-36px lh-1"></i>
													</div>
													<div className="mb-2">Remove this item?</div>
													<div>
														<button onClick={(event) => toggleConfirmation(event, order.id, false)} className="btn btn-outline-white btn-sm ms-auto me-2 width-100px">No</button>
														<button onClick={(event) => removeOrder(event, order.id)} className="btn btn-outline-theme btn-sm width-100px">Yes</button>
													</div>
												</div>
											)}
										</div>
									))) : (
										<div className="h-100 d-flex align-items-center justify-content-center text-center p-20">
											<div>
												<div className="mb-3 mt-n5">
													<i className="bi bi-bag text-white text-opacity-50" style={{fontSize: '6em'}}></i>
												</div>
												<h5>No order found</h5>
											</div>
										</div>
									)}
								</div>
						
								<div className="tab-pane fade h-100" id="orderHistoryTab">
									<div className="h-100 d-flex align-items-center justify-content-center text-center p-20">
										<div>
											<div className="mb-3 mt-n5">
												<svg width="6em" height="6em" viewBox="0 0 16 16" className="text-gray-300" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" d="M14 5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5zM1 4v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4H1z"/>
													<path d="M8 1.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z"/>
												</svg>
											</div>
											<h5>No order history found</h5>
										</div>
									</div>
								</div>
							</PerfectScrollbar>
							
							<div className="pos-sidebar-footer">
								<div className="d-flex align-items-center mb-2">
									<div>Subtotal</div>
									<div className="flex-1 text-end h6 mb-0">${getSubTotalPrice()}</div>
								</div>
								<div className="d-flex align-items-center">
									<div>Taxes (6%)</div>
									<div className="flex-1 text-end h6 mb-0">${getTaxesPrice()}</div>
								</div>
								<hr />
								<div className="d-flex align-items-center mb-2">
									<div>Total</div>
									<div className="flex-1 text-end h4 mb-0">${getTotalPrice()}</div>
								</div>
								<div className="mt-3">
									<div className="btn-group d-flex">
										<button className="btn btn-outline-default rounded-0 w-80px">
											<i className="bi bi-bell fa-lg"></i><br />
											<span className="small">Service</span>
										</button>
										<button className="btn btn-outline-default rounded-0 w-80px">
											<i className="bi bi-receipt fa-fw fa-lg"></i><br />
											<span className="small">Bill</span>
										</button>
										<button className="btn btn-outline-theme rounded-0 w-150px">
											<i className="bi bi-send-check fa-lg"></i><br />
											<span className="small">Submit Order</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</CardBody>
			</Card>
		
			<a href="#/" className="pos-mobile-sidebar-toggler" onClick={toggleMobileSidebar}>
				<i className="bi bi-bag"></i>
				<span className="badge">{getOrderTotal()}</span>
			</a>
	
			<div className="modal modal-pos fade" id="modalPosItem">
				<div className="modal-dialog modal-lg">
					<div className="modal-content border-0">
						{modalData && (
							<Card>
								<CardBody className="p-0">
									<button data-bs-dismiss="modal" className="btn-close position-absolute top-0 end-0 m-4">&nbsp;</button>
									<div className="modal-pos-product">
										<div className="modal-pos-product-img">
											<div className="img" style={{backgroundImage: 'url('+ modalData.image +')'}}></div>
										</div>
										<div className="modal-pos-product-info">
											<div className="h4 mb-2">{ modalData.title }</div>
											<div className="text-white text-opacity-50 mb-2">
												{ modalData.description }
											</div>
											<div className="h4 mb-3">${ modalData.price }</div>
											<div className="d-flex mb-3">
												<button className="btn btn-outline-theme" onClick={(event) => deductModalQty(event)}><i className="fa fa-minus"></i></button>
												<input type="text" value={modalQuantity} readOnly className="form-control w-50px fw-bold mx-2 bg-white bg-opacity-25 border-0 text-center" />
												<button className="btn btn-outline-theme" onClick={(event) => addModalQty(event)}><i className="fa fa-plus"></i></button>
											</div>
											<hr className="mx-n4" />
											{modalData && modalData.options && modalData.options.size && (
												<div className="mb-2">
													<div className="fw-bold">Size:</div>
													<div className="option-list">
														{modalData.options.size.map((size, index) => (
															<div className="option" key={index}>
																<input type="radio" id={'size' + index} name="size" className="option-input" defaultValue={size.text} onChange={(event) => handleSizeChange(event)} defaultChecked={((index === 0) ? true : false)} />
																<label className="option-label" htmlFor={'size' + index}>
																	<span className="option-text">{size.text}</span>
																	<span className="option-price">+{size.price}</span>
																</label>
															</div>
														))}
													</div>
												</div>
											)}
											{modalData && modalData.options && modalData.options.addon && (
												<div className="mb-2">
													<div className="fw-bold">Add On:</div>
													<div className="option-list">
														{modalData.options.addon.map((addon, index) => (
															<div className="option" key={index}>
																<input type="checkbox" name="addon" className="option-input" onChange={(event) => handleAddonChange(event)} value={addon.text} id={'addon'+ index} />
																<label className="option-label" htmlFor={'addon'+ index}>
																	<span className="option-text">{addon.text}</span>
																	<span className="option-price">+{addon.price}</span>
																</label>
															</div>
														))}
													</div>
												</div>
											)}
											<hr className="mx-n4" />
											<div className="row">
												<div className="col-4">
													<button className="btn btn-default h4 mb-0 d-block w-100 rounded-0 py-3" data-bs-dismiss="modal">Cancel</button>
												</div>
												<div className="col-8">
													<button className="btn btn-success w-100 d-flex justify-content-center align-items-center rounded-0 py-3 h4 m-0" onClick={(event) => addToCart(event)}>Add to cart <i className="bi bi-plus fa-2x ms-2 my-n3"></i></button>
												</div>
											</div>
										</div>
									</div>
								</CardBody>
							</Card>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default PosCustomerOrder;