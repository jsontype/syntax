import React, { useEffect } from "react";

// Custom Hook
import { useBreadcrumb } from "@/utilities/usePage";

// react-bootstrap
import {Container,Table,Row,Col} from 'react-bootstrap'

const TrackOrderPage = () => {
    useBreadcrumb('Order Tracking')
    return (
        <>
            <section className="section-padding">
            <Container>
                <div className="main-cart mb-3 mb-md-5 pb-0 pb-md-5">
                    <ul
                        className="cart-page-items d-flex justify-content-center list-inline align-items-center gap-3 gap-md-5 flex-wrap">
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
                        <li className="cart-page-item">
                            <span className=" cart-pre-number  border-radius rounded-circle me-1"> 2 </span>
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
                        <li className="cart-page-item active">
                            <span className="cart-pre-heading badge bg-primary cart-pre-number border-radius rounded-circle me-1"> 3 </span>
                            <span className="cart-page-link ">
                                Order Summary </span>
                        </li>
                    </ul>
                </div>
                <div className="order">
                    <p className="thank">Thank you. Your order has been received.</p>
                    <ul className="details list-inline">
                        <li className="detail">ORDER NUMBER:<strong>15823</strong></li>
                        <li className="detail">DATE:<strong>June 22, 2022</strong></li>
                        <li className="detail">EMAIL:<strong>jondoe@gmail.com</strong></li>
                        <li className="detail">TOTAL:<strong>$25.00</strong></li>
                        <li className="detail">PAYMENT METHOD:<strong>Direct bank transfer</strong></li>
                    </ul>
                </div>
                <h5 className="order_details">Order Details</h5>
                <Row>
                    <Col lg="8">
                        <section className="maintable">
                            <Table className="table table-border">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th className="text-end">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="order_item">
                                        <td>
                                            Bag Pack <strong className="product-quantity">×&nbsp;1</strong>
                                        </td>
                                        <td className="text-end">
                                            <span className="amount"><bdi><span className="">$</span>25.00</bdi></span>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr className="order_item">
                                        <th>Subtotal:</th>
                                        <td className="text-end"><span className="amount text-primary"><span className="">$</span>25.00</span></td>
                                    </tr>
                                    <tr className="order_item">
                                        <th>Payment method:</th>
                                        <td className="text-end">Direct bank transfer</td>
                                    </tr>
                                    <tr>
                                        <th>Total:</th>
                                        <td className="text-end"><span className="amount text-primary"><span className="">$</span>25.00</span></td>
                                    </tr>
                                </tfoot>
                            </Table>
                        </section>
                    </Col>
                    <Col lg="4">
                        <div className="bill_section">
                            <address>
                                <div className=" bill_table">
                                    <Table className="table" responsive>
                                        <thead>
                                            <tr>
                                                <td>Billing address </td>
                                            </tr>
                                        </thead>
                                        <tbody>                                    
                                            <tr>
                                                <td className="label-name">Name</td>
                                                <td className="seprator"><span>:</span></td>
                                                <td className="last-name">test</td>
                                            </tr>
                                            <tr>
                                                <td className="label-name">Company</td>
                                                <td className="seprator"><span>:</span></td>
                                                <td className="last-name">test</td>
                                            </tr>
                                            <tr>
                                                <td className="label-name">Country</td>
                                                <td className="seprator"><span>:</span></td>
                                                <td className="last-name">US</td>
                                            </tr>
                                            <tr>
                                                <td className="label-name">Address</td>
                                                <td className="seprator"><span>:</span></td>
                                                <td className="last-name">dccc</td>
                                            </tr>
                                            <tr>
                                                <td className="label-name">E-mail</td>
                                                <td className="seprator"><span>:</span></td>
                                                <td className="last-name">jondoe@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td className="label-name">Phone</td>
                                                <td className="seprator"><span>:</span></td>
                                                <td className="last-name">96465216515</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </address>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>  
        </>
    );
};

export default TrackOrderPage;
