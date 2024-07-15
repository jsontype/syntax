import React, { Fragment, memo } from "react";

//react bootstrap
import { Container, Row, Col, Table } from "react-bootstrap";

//router
import { Link } from "react-router-dom";

//components
import BreadCrumbWidget from "../../components/BreadcrumbWidget";
import Counter from "../../components/counter";
import CustomButton from "../../components/CustomButton";

//sweetalert2
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

// img
import img1 from "/assets/images/shop/product/08.webp";
import img2 from "/assets/images/shop/product/09.webp";
import img3 from "/assets/images/shop/product/10.webp";

// the hook
import { useTranslation } from "react-i18next";

const CartPage = memo(() => {
  const { t } = useTranslation();
  const swal = () => {
    Swal.fire({
      title: `${t('sweetalert.delete_title')}`,
      text: `${t("sweetalert.text")}`,
      icon: "error",
      background: "#141314",
      color: "#ffffff",
      showCancelButton: true,
      backdrop: `rgba(60,60,60,0.8)`,
      confirmButtonText: `${t("sweetalert.delete_btn")}`,
      confirmButtonColor: "#c03221",
      cancelButtonText: `${t("sweetalert.cancel_btn")}`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${t("sweetalert.deleted")}`,
          text: `${t("sweetalert.deleted_text")}`,
          icon: "success",
          background: "#141314",
          color: "#ffffff",
        });
      }
    });
  };
  return (
    <Fragment>
      <BreadCrumbWidget title="shop.cart" />
      <div className="cart-page  section-padding">
        <Container>
          <div className="main-cart mb-3 mb-md-5 pb-0 pb-md-5">
            <ul className="cart-page-items d-flex justify-content-center list-inline align-items-center gap-3 gap-md-5 flex-wrap">
              <li className="cart-page-item active">
                <span className="cart-pre-heading badge cart-pre-number bg-primary border-radius rounded-circle me-1">
                  1
                </span>{" "}
                <span className="cart-page-link ">
                  {t("shop.shopping_cart")}
                </span>
              </li>
              <li>
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
              <li>
                <span className=" cart-pre-number border-radius rounded-circle me-1">
                  2
                </span>{" "}
                <span className="cart-page-link ">{t("shop.checkout")}</span>
              </li>
              <li>
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
              <li>
                <span className=" cart-pre-number border-radius rounded-circle me-1">
                  {" "}
                  3
                </span>{" "}
                <span className="cart-page-link ">
                  {t("shop.order_summary")}
                </span>
              </li>
            </ul>
          </div>
          <Row>
            <Col lg="8">
              <Table responsive className="cart-table">
                <thead className="border-bottom">
                  <tr>
                    <th scope="col" className="font-size-18 fw-500">
                      {t("shop.product_")}
                    </th>
                    <th scope="col" className="font-size-18 fw-500">
                      {t("shop.price")}
                    </th>
                    <th scope="col" className="font-size-18 fw-500">
                      {t("shop.quantity")}
                    </th>
                    <th scope="col" className="font-size-18 fw-500">
                      {t("shop.subtotal")}
                    </th>
                    <th scope="col" className="font-size-18 fw-500"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr data-item="list">
                    <td>
                      <div className="product-thumbnail d-flex align-items-center gap-3">
                        <Link className="d-block mb-2" to="#">
                          <img className="avatar-80" src={img1} alt="" />
                        </Link>
                        <span className="text-white">
                          {t("shop.coffee_cup")}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className="fw-500">$15.00</span>
                    </td>
                    <td>
                      <Counter />
                    </td>
                    <td>
                      <span className="fw-500">$123.00</span>
                    </td>
                    <td>
                      <button
                        className="btn btn-icon btn-danger delete-btn text-end  bg-transparent text-body border-0"
                        onClick={swal}
                      >
                        <span className="btn-inner">
                          <i className="far fa-trash-alt"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr data-item="list">
                    <td>
                      <div className="product-thumbnail d-flex align-items-center gap-3">
                        <Link className="d-block mb-2" to="#">
                          <img className="avatar-80" src={img2} alt="" />
                        </Link>
                        <span className="text-white">
                          {t("shop.medical_box")}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className="fw-500">$92.00</span>
                    </td>
                    <td>
                      <Counter />
                    </td>
                    <td>
                      <span className="fw-500">$92.00</span>
                    </td>
                    <td>
                      <button
                        className="btn btn-icon btn-danger delete-btn text-end  bg-transparent text-body border-0"
                        onClick={swal}
                      >
                        <span className="btn-inner">
                          <i className="far fa-trash-alt"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr data-item="list">
                    <td>
                      <div className="product-thumbnail d-flex align-items-center gap-3">
                        <Link className="d-block mb-2" to="#">
                          <img className="avatar-80" src={img3} alt="" />
                        </Link>
                        <span className="text-white">
                          {t("shop.hand_sanitizer")}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className="fw-500">$90.00</span>
                    </td>
                    <td>
                      <Counter />
                    </td>
                    <td>
                      <span className="fw-500">$90.00</span>
                    </td>
                    <td>
                      <button
                        className="btn btn-icon btn-danger delete-btn text-end  bg-transparent text-body border-0"
                        onClick={swal}
                      >
                        <span className="btn-inner">
                          <i className="far fa-trash-alt"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <div className="coupon-main d-flex justify-content-between gap-md-5 flex-wrap align-items-center pt-4 pb-5 border-bottom">
                <div className="wrap-coupon d-flex align-items-center gap-3 flex-wrap">
                  <label>{t('shop.coupon')} :</label>
                  <input
                    className="form-control d-inline-block w-auto me-2"
                    name="coupon_code"
                    type="text"
                    placeholder={t('shop.coupon_code')}
                  />
                  <div className=" d-inline-block">
                    <CustomButton
                      buttonTitle={t("shop.apply_coupon")}
                      link="#"
                      linkButton="false"
                    />
                  </div>
                </div>
                <div className="button-primary mt-3 mt-md-0">
                  <CustomButton
                    buttonTitle={t('shop.update_cart')}
                    link="#"
                    linkButton="false"
                  />
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="cart_totals p-4">
                <h5 className="mb-3 font-size-18 fw-500">{t("shop.cart_total")}</h5>
                <div className="css_prefix-woocommerce-cart-box table-responsive">
                  <Table className="table">
                    <tbody>
                      <tr className="cart-subtotal">
                        <th className="border-0">
                          <span className="fw-500">{t("shop.subtotal")}</span>
                        </th>
                        <td className="border-0">
                          <span>$305.00</span>
                        </td>
                      </tr>
                      <tr className="order-total">
                        <th className="border-0">
                          <span className="fw-500"> {t("shop.total")}</span>
                        </th>
                        <td className="border-0">
                          <span className="fw-500 text-primary">$305.00</span>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <div className="button-primary">
                    <CustomButton
                      buttonTitle={t('shop.proceed_to_checkout')}
                      link="/checkout"
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

CartPage.displayName = "CartPage";
export default CartPage;
