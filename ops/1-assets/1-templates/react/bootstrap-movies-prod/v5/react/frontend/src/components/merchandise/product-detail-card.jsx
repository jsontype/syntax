import React, { Fragment, memo } from "react";

//react-bbotstrap
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

//sweetalert2
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

// the hook
import { useTranslation } from "react-i18next";

const ProductDetailCard = memo((props) => {
  const { t } = useTranslation();
  const showSwal = () => {
    Swal.fire({
      title: `${t("sweetalert.added")}`,
      text: `${t("sweetalert.added_to_cart")}`,
      icon: "success",
      confirmButtonText: `${t("sweetalert.ok_btn")}`,
      background: "#141314",
      color: "#ffffff",
    });
  };
  const isSale = props.is_sale;
  const isNew = props.is_new;
  return (
    <Fragment>
      <Container>
        <Row>
          <Col lg="6">
            <div className="sub-product inner-box">
              <div className="product-block">
                {isSale ? (
                  <span className="onsale bg-primary">{t("shop.sale")}</span>
                ) : isNew ? (
                  <span className="onsale bg-dark">{t("shop.new")}</span>
                ) : (
                  ""
                )}
                <Link to="#">
                  <i
                    className="fa fa-search fa-1x imagesearch"
                    aria-hidden="true"
                  ></i>
                </Link>
                <div className="image-wrap">
                  <img
                    src={props.thumbnail}
                    className="img-fluid w-100 img-zoom"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="summary ms-lg-4">
              <h1 className="product-title title-link">{props.productName}</h1>
              <div className="comment-form-rating ratestar">
                <div className="star">
                  <span>
                    <i className="ri-star-line"></i>
                  </span>
                  <span>
                    <i className="ri-star-line"></i>
                  </span>
                  <span>
                    <i className="ri-star-line"></i>
                  </span>
                  <span>
                    <i className="ri-star-line"></i>
                  </span>
                  <span>
                    <i className="ri-star-line"></i>
                  </span>
                  <span className="text-primary">(1 customer review)</span>
                </div>
              </div>
              <p className="price">
                <del>{props.price}</del> <b>&nbsp; {props.final_price}</b>
              </p>
              <p className="mb-4 text-white">{props.description}</p>
              <form className="cart mb-4" method="post">
                <div className="cart-btn-wrapper">
                  <div className="quantity">
                    <label
                      className="screen-reader-text"
                      htmlFor="quantity1"
                    ></label>
                    <button type="button" className="minus">
                      <i className="fa fa-minus" aria-hidden="true"></i>
                    </button>
                    <input
                      id="quantity1"
                      type="text"
                      className="qty"
                      step="1"
                      min="1"
                      name="quantity"
                      defaultValue="1"
                      title="Qty"
                      placeholder=""
                      disabled
                    />
                    <button type="button" className="plus">
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                  </div>
                  <div className="wishlist">
                    <div className="wishlist-fragment on-first-load">
                      {/* <!-- ADD TO WISHLIST --> */}
                      <div>
                        <Link to="#" className="">
                          <i className="fa fa-heart-o"></i>
                        </Link>
                      </div>
                      {/* <!-- COUNT TEXT --> */}
                    </div>
                  </div>
                  <Link
                    className="iq-button btn btn-hover"
                    to=""
                    onClick={showSwal}
                  >
                    {" "}
                    {t("shop.add_to_cart")}{" "}
                  </Link>
                </div>
              </form>

              <div className="">
                {t("shop.sku")} : <span> {props.sku}</span>
              </div>
              <br />
              <div className="mb-3">
                {t("shop.category")} :{" "}
                {props.category.map((item, index) => {
                  return (
                    <Link
                      to="/shop"
                      className="text-primary ms-2 text-capitalize"
                      key={index}
                    >
                      {" "}
                      {t(item)},{" "}
                    </Link>
                  );
                })}
              </div>
              <div className="">
                {t("shop.tags")}:
                {props.tags.map((item, index) => {
                  return (
                    <Link
                      to="/shop"
                      className="text-primary text-capitalize ms-2"
                      key={index}
                    >
                      {t(item)},
                    </Link>
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
        <div className="tab-content">
          <div className="streamit-content-details content-details trending-info g-border iq-rtl-direction">
            <Tab.Container defaultActiveKey="first">
              <Nav
                as="ul"
                className="trending-pills-header d-flex nav-pills align-items-center text-center s-margin mb-5 justify-content-center"
                role="tablist"
              >
                <Nav.Item as="li">
                  <Nav.Link
                    data-toggle="pill"
                    data-bs-target="#description"
                    eventKey="first"
                    role="tab"
                    aria-selected="true"
                  >
                    {t("shop.description")}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link
                    data-toggle="pill"
                    eventKey="second"
                    data-bs-target="#additional-info"
                    role="tab"
                    aria-selected="false"
                  >
                    {t("shop.additional_information")}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link
                    data-toggle="pill"
                    eventKey="third"
                    data-bs-target="#reviews"
                    role="tab"
                    aria-selected="false"
                  >
                    {t("shop.Reviews")}(0)
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content className="tab-content">
                <Tab.Pane
                  id="description"
                  eventKey="first"
                  role="tabpanel"
                  data-current-page="1"
                  data-attibute="description"
                  data-options="infinite_scroll"
                >
                  <div className="description-content">
                    <p>{props.description}</p>
                  </div>
                </Tab.Pane>
                <Tab.Pane
                  id="additional-info"
                  eventKey="second"
                  className="fade"
                  role="tabpanel"
                  data-current-page="2"
                  data-attibute="rate"
                  data-options="infinite_scroll"
                >
                  <div id="additional-info" className="streamit-reviews">
                    <div className="description-content">
                      <table className="addtable mb-5">
                        <tbody>
                          <tr>
                            <th className="thwidth">{t("shop.size")}</th>
                            <td className="bordertd">
                              {props.additional_info.map((item, index) => {
                                return (
                                  <span to="#" rel="color" key={index}>
                                    {item.size.map((size, index) => {
                                      return (
                                        <Link
                                          to="#"
                                          className="ms-2"
                                          key={index}
                                        >
                                          {size},
                                        </Link>
                                      );
                                    })}
                                    <Link to="#" className="ms-2">
                                      {item.color}
                                    </Link>
                                  </span>
                                );
                              })}
                            </td>
                          </tr>
                          <tr>
                            <th className="thwidth">{t("shop.color")}</th>
                            <td className="bordertd">
                              <span
                                v-for="data in props.additionalInfo"
                                to="#"
                                rel="color"
                              ></span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane
                  id="reviews"
                  eventKey="third"
                  className="tab-pane animated fadeInUp fade"
                  role="tabpanel"
                  data-current-page="3"
                  data-attibute="sources"
                  data-options="infinite_scroll"
                >
                  <div
                    id="reviews"
                    className="streamit-reviews"
                    style={{ fontSize: "1.1em" }}
                  >
                    <h2>{t("shop.review")}</h2>
                    <p className="masvideos-noreviews mt-3"></p>
                    <div id="review_form_wrapper">
                      <div id="review_form">
                        <div id="respond" className="comment-respond">
                          <p
                            id="reply-title"
                            className="comment-reply-title mt-0 mb-0"
                          >
                            {t("shop.no_reviews")}“
                            {props.product_name}”
                          </p>
                          <form className="comment-form">
                            <p className="comment-notes">
                              <span id="email-notes">
                                {t(
                                  "shop.published_email"
                                )}
                              </span>
                              <span
                                className="required-field-message"
                                aria-hidden="true"
                              >
                                {t("shop.required_fields")}{" "}
                                <span className="required" aria-hidden="true">
                                  *
                                </span>
                              </span>
                            </p>
                            <div className="comment-form-rating ratestar">
                              <label htmlFor="rating">
                                {t("shop.your_rating")}*
                              </label>
                              <div className="star">
                                <span>
                                  <i className="ri-star-line"></i>
                                </span>
                                <span>
                                  <i className="ri-star-line"></i>
                                </span>
                                <span>
                                  <i className="ri-star-line"></i>
                                </span>
                                <span>
                                  <i className="ri-star-line"></i>
                                </span>
                                <span>
                                  <i className="ri-star-line"></i>
                                </span>
                              </div>
                            </div>
                            <p className="comment-form-comment p-0 mb-3 mt-0">
                              <label htmlFor="comment">
                                {t("shop.your_review")}&nbsp;
                                <span className="required">*</span>
                              </label>
                              <textarea
                                id="comment"
                                name="comment"
                                cols="45"
                                rows="8"
                                required=""
                              ></textarea>
                            </p>
                            <p className="comment-form-author mt-3 pe-lg-12 pe-0 namefull">
                              <label htmlFor="author">
                                {t("detail_page.name")}&nbsp;
                                <span className="required">*</span>
                              </label>
                              <input
                                id="author"
                                name="author"
                                type="text"
                                defaultValue=""
                                size="30"
                                required=""
                              />
                            </p>
                            <p className="comment-form-email mt-3 ps-lg-12 pe-0 namefull">
                              <label htmlFor="email">
                                {t("detail_page.email")}&nbsp;
                                <span className="required">*</span>
                              </label>
                              <input
                                id="email"
                                name="email"
                                type="email"
                                defaultValue=""
                                size="30"
                                required=""
                              />
                            </p>
                            <p className="comment-form-cookies-consent">
                              <input
                                id="check11"
                                className="form-check-input"
                                type="checkbox"
                                name="check1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="check11"
                              >
                                {" "}
                                {t("detail_page.save_name")}.{" "}
                              </label>
                            </p>
                            <p className="form-submit">
                              <button
                                id="submit"
                                name="submit"
                                type="submit"
                                className="btn btn-hover iq-button mb-4"
                                defaultValue="Submit"
                              >
                                {t("detail_page.submit")}
                                <span>
                                  <i
                                    className="fas fa-angle-right"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </button>
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="clear"></div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </Container>
    </Fragment>
  );
});

ProductDetailCard.displayName = "ProductDetailCard";
export default ProductDetailCard;
