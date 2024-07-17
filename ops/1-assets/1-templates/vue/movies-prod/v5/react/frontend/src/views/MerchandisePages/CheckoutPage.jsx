import React, { memo, Fragment, useState } from "react";

// react-bootstrap
import { Container, Form, Row, Col, Table, Collapse } from "react-bootstrap";

// react-router
import { Link } from "react-router-dom";

// components
import BreadCrumbWidget from "../../components/BreadcrumbWidget";
import CustomButton from "../../components/CustomButton";

// img
import img1 from "/assets/images/shop/product/01.webp";
import img2 from "/assets/images/shop/product/07.webp";
import img3 from "/assets/images/shop/product/05.webp";
// the hook
import { useTranslation } from "react-i18next";
import ChoicesJs from "../../components/choice";

const CheckoutPage = memo(() => {
  const { t } = useTranslation();

  const options1 = [
    { value: `${t("shop.india")}`, label: `${t("shop.india")}` },
    { value: `${t("shop.united_kindom")}`, label: `${t("shop.united_kindom")}` },
    { value: `${t("shop.united_states")}`, label: `${t("shop.united_states")}` },
    { value: `${t("shop.australia")}`, label: `${t("shop.australia")}` },
    { value: `${t("shop.north_corea")}`, label: `${t("shop.north_corea")}` },
  ];

  const [show, setShow] = useState(false)
  return (
    <Fragment>
      <BreadCrumbWidget title={t("shop.checkout")} />
      <div className="checkout-page  section-padding">
        <Container>
          <div className="main-cart mb-3 mb-md-5 pb-0 pb-md-5">
            <ul className="cart-page-items d-flex justify-content-center list-inline align-items-center gap-3 gap-md-5 flex-wrap">
              <li className="cart-page-item">
                <span className=" cart-pre-number  border-radius rounded-circle me-1">
                  1
                </span>{" "}
                <span className="cart-page-link ">
                  {t("shop.shopping_cart")}
                </span>
              </li>
              <li className="cart-page-item">
                <svg
                  width="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </li>
              <li className="cart-page-item  active">
                <span className="cart-pre-heading badge cart-pre-number bg-primary border-radius rounded-circle me-1">
                  2
                </span>{" "}
                <span className="cart-page-link ">{t("shop.checkout")} </span>
              </li>
              <li className="cart-page-item">
                <svg
                  width="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </li>
              <li className="cart-page-item ">
                <span className=" cart-pre-number  border-radius rounded-circle me-1">

                  3
                </span>{" "}
                <span className="cart-page-link ">
                  {t("shop.order_summary")}{" "}
                </span>
              </li>
            </ul>
          </div>
          <div className="mb-5">
            <div className="d-flex align-items-center justify-content-center gap-3 flex-wrap">
              <div className="woocommerce-info">
                <span className="text-primary">
                  <i className="fa-solid fa-percent"></i>
                </span>{" "}
                <span className="text-body ps-2">
                  {t("shop.have_a_coupon")}
                </span>{" "}
                <Link
                  to="#"
                  className="text-white"
                  onClick={() => setShow(!show)}
                >
                  {t("shop.enter_code")}
                </Link>
              </div>
            </div>
            <Collapse in={show} id="apply-coupon" className=" mt-5">
              <Form className="checkout-coupon">
                <p className="mt-0">{t("shop.apply_coupon_code")}</p>
                <div className="iq-checkout-coupon">
                  <input
                    name="coupon-code"
                    type="text"
                    required="required"
                    placeholder="Coupon code"
                    className="form-control"
                  />
                  <CustomButton
                    buttonTitle={t("shop.apply_coupon")}
                    link="#"
                    linkButton="false"
                  />
                </div>
              </Form>
            </Collapse>
          </div>
          <Row>
            <Col lg="8" md="7">
              <Form action="">
                <h5 className="mb-4">{t("shop.billing_details")}</h5>
                <div className="mb-4">
                  <input
                    name="first-name"
                    type="text"
                    required="required"
                    placeholder={t("form.first_name")}
                    className="form-control"
                  />
                </div>
                <div className="mb-4">
                  <input
                    name="last-name"
                    type="text"
                    required="required"
                    placeholder={t("form.last_name")}
                    className="form-control"
                  />
                </div>
                <div className="mb-4">
                  <input
                    name="billing-company"
                    type="text"
                    required="required"
                    placeholder={t("shop.company")}
                    className="form-control"
                  />
                </div>
                <div className="mb-4 iq-custom-select">
                  <ChoicesJs options={options1} className="js-choice" select="one" />
                </div>
                <div className="mb-4">
                  <input
                    name="billing-address"
                    type="text"
                    required="required"
                    placeholder={t("form.billing_address")}
                    className="form-control"
                  />
                </div>
                <div className="mb-4">
                  <input
                    name="billing-address2"
                    type="text"
                    required="required"
                    placeholder={t("form.apartment")}
                    className="form-control"
                  />
                </div>
                <div className="mb-4">
                  <input
                    name="city"
                    type="text"
                    required="required"
                    placeholder={t("shop.town_city")}
                    className="form-control"
                  />
                </div>
                <div className="mb-4">
                  <select
                    className="select2-basic-single js-states form-control"
                    aria-label="Default select example"
                  >
                    <option defaultValue="">{t("shop.colorado")}</option>
                    <option value="2">{t("shop.alaska")}</option>
                    <option value="1">{t("shop.hawai")}</option>
                    <option value="3">{t("shop.texas")}</option>
                    <option value="1">{t("shop.washington")}</option>
                  </select>
                </div>
                <div className="mb-4">
                  <input
                    name="postcode"
                    type="text"
                    required="required"
                    placeholder={t("form.zip_code")}
                    className="form-control"
                  />
                </div>
                <div className="mb-4">
                  <input
                    name="phone"
                    type="tel"
                    required="required"
                    placeholder={t("form.phone")}
                    className="form-control"
                  />
                </div>
                <div className="mb-4">
                  <input
                    name="billing-company"
                    type="email"
                    required="required"
                    placeholder={t("shop.email_address")}
                    className="form-control rounded-0 mb-5"
                  />
                </div>
                <h5 className="mb-4">{t("shop.additional_information")}</h5>
                <div className="mb-4">
                  <label className="mb-2">
                    {t("shop.order_notes")}
                  </label>
                  <textarea
                    name="your-message"
                    placeholder={t("shop.order_notes_eg")}
                    className="form-control mb-5"
                    required
                  ></textarea>
                </div>
              </Form>
            </Col>
            <Col lg="4" md="5">
              <div className="order_review-box border p-4">
                <h5 className="mb-3 mt-0 mt-md-2">{t("shop.product_")}</h5>
                <div className="checkout-review-order">
                  <Table className="table w-100" responsive>
                    <tbody>
                      <tr className="cart_item">
                        <td className="product-name">
                          <div className="product-image">
                            <img
                              width="300"
                              height="400"
                              src={img1}
                              className="cartimg"
                              alt="image"
                              loading="lazy"
                            />
                          </div>
                          <div className="text">
                            <span className="fw-500 text-body">{t("shop.bag_pack")}</span>
                            <br />
                            <strong className="text-white font-size-12 fw-bold">
                              QTY:&nbsp;1
                            </strong>
                          </div>
                        </td>
                        <td className="product-total">
                          <span className="Price-amount">
                            <bdi className="fw-500 text-body">
                              <span>$</span>28.00
                            </bdi>
                          </span>
                        </td>
                      </tr>
                      <tr className="cart_item">
                        <td className="product-name">
                          <div className="product-image">
                            <img
                              width="300"
                              height="400"
                              src={img2}
                              className="cartimg"
                              alt="image"
                              loading="lazy"
                            />
                          </div>
                          <div className="text">
                            <span className="fw-500 text-body">
                              {t("shop.cartoon_character")}
                            </span>
                            <br />
                            <strong className="text-white font-size-12 fw-bold">
                              QTY:&nbsp;1
                            </strong>
                          </div>
                        </td>
                        <td className="product-total">
                          <span className="Price-amount">
                            <bdi className="fw-500 text-body">
                              <span>$</span>25.00
                            </bdi>
                          </span>
                        </td>
                      </tr>
                      <tr className="cart_item">
                        <td className="product-name">
                          <div className="product-image">
                            <img
                              width="300"
                              height="400"
                              src={img3}
                              className="cartimg"
                              alt="image"
                              loading="lazy"
                            />
                          </div>
                          <div className="text">
                            <span className="fw-500 text-body">
                              {t("shop.boxing_gloves")}
                            </span>
                            <br />
                            <strong className="text-white font-size-12 fw-bold">
                              QTY:&nbsp;1
                            </strong>
                          </div>
                        </td>
                        <td className="product-total">
                          <span className="Price-amount">
                            <bdi className="fw-500 text-body">
                              <span>$</span>18.00
                            </bdi>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="border-bottom">
                        <td className="ps-0 p-3 fw-500 font-size-18">
                          {t("shop.subtotal")}
                        </td>
                        <td className="pe-0 p-3 fw-500 text-end">
                          <span className="mb-0 text-body">$71.00</span>
                        </td>
                      </tr>
                      <tr className="border-bottom">
                        <td className="ps-0 p-3 fw-500 font-size-18">{t("shop.total")}</td>
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
                            <div
                              className="accordion-button-payment"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOnepayment"
                              aria-expanded="true"
                              aria-controls="collapseOnepayment"
                            >
                              <span className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                  defaultChecked="checked"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault1"
                                >
                                  {t("shop.bank_transfer")}
                                </label>
                              </span>
                            </div>
                          </h6>
                          <div
                            id="collapseOnepayment"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionPayment"
                          >
                            <div className="accordion-body">
                              {t("shop.make_direct_payment")}
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item-payment">
                          <h6 className="accordion-header" id="payment-2">
                            <div
                              className="accordion-button-payment collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwopayment"
                              aria-expanded="false"
                              aria-controls="collapseTwopayment"
                            >
                              <span className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault2"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault2"
                                >
                                  {t("shop.cheque_payments")}
                                </label>
                              </span>
                            </div>
                          </h6>
                          <div
                            id="collapseTwopayment"
                            className="accordion-collapse collapse"
                            aria-labelledby="payment-2"
                            data-bs-parent="#accordionPayment"
                          >
                            <div className="accordion-body">
                              Please send a check to Store Name, Store Street,
                              Store Town, Store State / County, Store Postcode.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item-payment">
                          <h6 className="accordion-header" id="payment-3">
                            <div
                              className="accordion-button-payment collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThreepayment"
                              aria-expanded="false"
                              aria-controls="collapseThreepayment"
                            >
                              <span className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault3"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault3"
                                >
                                  {t("shop.cod")}
                                </label>
                              </span>
                            </div>
                          </h6>
                          <div
                            id="collapseThreepayment"
                            className="accordion-collapse collapse"
                            aria-labelledby="payment-3"
                            data-bs-parent="#accordionPayment"
                          >
                            <div className="accordion-body">
                              Pay with cash upon delivery.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 mb-5">
                      {t("shop.your_personal_data")}{" "}
                      <Link to="/PrivacyPolicy">{t("shop.privacy_policy")}</Link>.
                    </p>
                    <CustomButton
                      buttonTitle={t("shop.place_order")}
                      link="/track-order"
                      linkButton="false"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
});

CheckoutPage.displayName = "CheckoutPage";
export default CheckoutPage;
