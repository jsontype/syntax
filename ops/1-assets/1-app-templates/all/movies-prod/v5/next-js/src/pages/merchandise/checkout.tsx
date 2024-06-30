import { memo } from "react";


// react-bootstrap
import { Container, Form, Row, Col, Table } from 'react-bootstrap';

// Custom Hook
import { useBreadcrumb } from "@/utilities/usePage";

// Next-Link
import Link from 'next/link'

// Next-Image
import Image from 'next/image'

// components
import CustomButton from '../../components/CustomButton';


// img
import img1 from '../../../public/assets/images/shop/product/01.webp';
import img2 from '../../../public/assets/images/shop/product/07.webp';
import img3 from '../../../public/assets/images/shop/product/05.webp'

const CheckoutPage = () => {
    useBreadcrumb('Checkout')
    return (
        <>
            <div className="checkout-page  section-padding">
                <Container>
                    <div className="main-cart mb-3 mb-md-5 pb-0 pb-md-5">
                        <ul className="cart-page-items d-flex justify-content-center list-inline align-items-center gap-3 gap-md-5 flex-wrap">
                            <li className="cart-page-item">
                                <span className=" cart-pre-number  border-radius rounded-circle me-1"> 1 </span>
                                <span className="cart-page-link ">
                                    Shopping Cart </span>
                            </li>
                            <li className="cart-page-item">
                                <svg width="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z"
                                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    </path>
                                    <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor"
                                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </li>
                            <li className="cart-page-item  active">
                                <span className="cart-pre-heading badge cart-pre-number bg-primary border-radius rounded-circle me-1">
                                    2 </span>
                                <span className="cart-page-link ">
                                    Checkout </span>
                            </li>
                            <li className="cart-page-item">
                                <svg width="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z"
                                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    </path>
                                    <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor"
                                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </li>
                            <li className="cart-page-item ">
                                <span className=" cart-pre-number  border-radius rounded-circle me-1"> 3 </span>
                                <span className="cart-page-link ">
                                    Order Summary </span>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-5">
                        <div className="d-flex align-items-center justify-content-center gap-3 flex-wrap">
                            <div className="woocommerce-info">
                                <span className="text-primary"><i className="fa-solid fa-percent"></i></span>
                                <span className="text-body ps-2">Have a coupon?</span>
                                <Link href="#" data-bs-toggle="collapse" data-bs-target="#apply-coupon" className="text-white">Click here
                                    to enter your code</Link>
                            </div>
                        </div>
                        <div id="apply-coupon" className="collapse mt-5">
                            <Form className="checkout-coupon">
                                <p className="mt-0">If you have a coupon code, please apply it below.</p>
                                <div className="iq-checkout-coupon">
                                    <input name="coupon-code" type="text" required placeholder="Coupon code" className="form-control" />
                                    <CustomButton buttonTitle="apply coupon" link="#" linkButton="false" />
                                </div>
                            </Form>
                        </div>
                    </div>
                    <Row>
                        <Col lg="8" md="7">
                            <Form action="">
                                <h5 className="mb-4">Billing details</h5>
                                <div className="mb-4">
                                    <input name="first-name" type="text" required placeholder="First Name" className="form-control" />
                                </div>
                                <div className="mb-4">
                                    <input name="last-name" type="text" required placeholder="Last Name" className="form-control" />
                                </div>
                                <div className="mb-4">
                                    <input name="billing-company" type="text" required placeholder="Company" className="form-control" />
                                </div>
                                <div className="mb-4">
                                    <select className="select2-basic-single js-states form-control" aria-label="Default select example">
                                        <option defaultValue="">India</option>
                                        <option value="1">United Kingdom</option>
                                        <option value="2">United States</option>
                                        <option value="3">Australia</option>
                                        <option value="1">North Corea</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <input name="billing-address" type="text" required placeholder="House number and street name" className="form-control" />
                                </div>
                                <div className="mb-4">
                                    <input name="billing-address2" type="text" required placeholder="Apartment, suite, unit, etc. (optional)" className="form-control" />
                                </div>
                                <div className="mb-4">
                                    <input name="city" type="text" required placeholder="Town / City" className="form-control" />
                                </div>
                                <div className="mb-4">
                                    <select className="select2-basic-single js-states form-control" aria-label="Default select example">
                                        <option defaultValue="">Colorado</option>
                                        <option value="2">Alaska</option>
                                        <option value="1">Hawai</option>
                                        <option value="3">Texas</option>
                                        <option value="1">Washington</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <input name="postcode" type="text" required placeholder="ZIP Code" className="form-control" />
                                </div>
                                <div className="mb-4">
                                    <input name="phone" type="tel" required placeholder="Phone Number" className="form-control" />
                                </div>
                                <div className="mb-4">
                                    <input name="billing-company" type="email" required placeholder="E-mail Address" className="form-control rounded-0 mb-5" />
                                </div>
                                <h5 className="mb-4">Additional Information</h5>
                                <div className="mb-4">
                                    <label className="mb-2">Order notes (optional)</label>
                                    <textarea name="your-message" placeholder="Notes about your order, e.g. special notes for delivery." className="form-control mb-5" required></textarea>
                                </div>
                            </Form>
                        </Col>
                        <Col lg="4" md="5">
                            <div className="order_review-box border p-4">
                                <h5 className="mb-3 mt-0 mt-md-2">Product</h5>
                                <div className="checkout-review-order">
                                    <Table className="table w-100" responsive>
                                        <tbody>
                                            <tr className="cart_item">
                                                <td className="product-name">
                                                    <div className="product-image"><Image width="300" height="400" src={img1} className="cartimg" alt="image" loading="lazy" /></div>
                                                    <div className="text">
                                                        <span className="fw-500 text-body">Bag Pack</span><br /><strong className="text-white font-size-12 fw-bold">QTY:&nbsp;1</strong>
                                                    </div>
                                                </td>
                                                <td className="product-total">
                                                    <span className="Price-amount"><bdi className="fw-500 text-body"><span>$</span>28.00</bdi></span>
                                                </td>
                                            </tr>
                                            <tr className="cart_item">
                                                <td className="product-name">
                                                    <div className="product-image"><Image width="300" height="400" src={img2} className="cartimg" alt="image" loading="lazy" /></div>
                                                    <div className="text">
                                                        <span className="fw-500 text-body">cartoon-character</span><br /><strong className="text-white font-size-12 fw-bold">QTY:&nbsp;1</strong>
                                                    </div>
                                                </td>
                                                <td className="product-total">
                                                    <span className="Price-amount"><bdi className="fw-500 text-body"><span>$</span>25.00</bdi></span>
                                                </td>
                                            </tr>
                                            <tr className="cart_item">
                                                <td className="product-name">
                                                    <div className="product-image"><Image width="300" height="400" src={img3} className="cartimg" alt="image" loading="lazy" /></div>
                                                    <div className="text">
                                                        <span className="fw-500 text-body">Boxing Gloves</span><br /><strong className="text-white font-size-12 fw-bold">QTY:&nbsp;1</strong>
                                                    </div>
                                                </td>
                                                <td className="product-total">
                                                    <span className="Price-amount"><bdi className="fw-500 text-body"><span>$</span>18.00</bdi></span>
                                                </td>
                                            </tr>

                                        </tbody>
                                        <tfoot>
                                            <tr className="border-bottom">
                                                <td className="ps-0 p-3 fw-500 font-size-18">Subtotal</td>
                                                <td className="pe-0 p-3 fw-500 text-end">
                                                    <span className="mb-0 text-body">$71.00</span>
                                                </td>
                                            </tr>
                                            <tr className="border-bottom">
                                                <td className="ps-0 p-3 fw-500 font-size-18">Total</td>
                                                <td className="pe-0 p-3 fw-500 text-end">
                                                    <span className="text-primary mb-0">$71.00</span>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </Table>
                                    <div className="checkout-payment mt-4 pt-3 pb-2">
                                        <div className="payment-box border-bottom mb-5 pb-4">
                                            <div className="accordion" id="accordionPayment">
                                                <div className="accordion-item-payment">
                                                    <h6 className="accordion-header" id="payment-1">
                                                        <div className="accordion-button-payment" data-bs-toggle="collapse" data-bs-target="#collapseOnepayment" aria-expanded="true" aria-controls="collapseOnepayment">
                                                            <span className="form-check">
                                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                    Direct bank transfer
                                                                </label>
                                                            </span>
                                                        </div>
                                                    </h6>
                                                    <div id="collapseOnepayment" className="accordion-collapse collapse show" data-bs-parent="#accordionPayment">
                                                        <div className="accordion-body">
                                                            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item-payment">
                                                    <h6 className="accordion-header" id="payment-2">
                                                        <div className="accordion-button-payment collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwopayment" aria-expanded="false" aria-controls="collapseTwopayment">
                                                            <span className="form-check">
                                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                    Check payments
                                                                </label>
                                                            </span>
                                                        </div>
                                                    </h6>
                                                    <div id="collapseTwopayment" className="accordion-collapse collapse" aria-labelledby="payment-2" data-bs-parent="#accordionPayment">
                                                        <div className="accordion-body">
                                                            Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item-payment">
                                                    <h6 className="accordion-header" id="payment-3">
                                                        <div className="accordion-button-payment collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThreepayment" aria-expanded="false" aria-controls="collapseThreepayment">
                                                            <span className="form-check">
                                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                                                <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                                    Cash on delivery
                                                                </label>
                                                            </span>
                                                        </div>
                                                    </h6>
                                                    <div id="collapseThreepayment" className="accordion-collapse collapse" aria-labelledby="payment-3" data-bs-parent="#accordionPayment">
                                                        <div className="accordion-body">
                                                            Pay with cash upon delivery.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-3 mb-5">
                                            Your personal data will be used to process your order, support your experience
                                            throughout this website, and for other purposes described in our <Link href="/extra/privacy-policy">privacy policy</Link>
                                            .</p>
                                        <CustomButton buttonTitle="Place Order" link="/merchandise/track-order" linkButton="false" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default CheckoutPage;
