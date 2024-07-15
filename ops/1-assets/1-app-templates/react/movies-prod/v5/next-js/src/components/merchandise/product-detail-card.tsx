import React, { Fragment, memo } from "react";

//react-bbotstrap
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

//react-router-dom
// import { Link } from "react-router-dom";
import Link from "next/link";

//sweetalert2
import Swal from "sweetalert2";

interface ProductDetailCardProps{
  additional_info: any;
  tags: any;
  category: any;
  is_sale?:boolean
  is_new?:boolean
  thumbnail?:any
  productName?:string
  product_name?:string
  price?:string
  final_price?:string
  description?:string
  sku?:any
  
}

const ProductDetailCard = memo((props:ProductDetailCardProps) => {
  const showSwal = () => {
    Swal.fire({
      title: "Added!",
      text: "Your item has been added to the cart.",
      icon: "success",
      confirmButtonText: "Ok",
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
                  <span className="onsale bg-primary">Sale!</span>
                ) : isNew ? (
                  <span className="onsale bg-dark">New!</span>
                ) : (
                  ""
                )}
                <Link href="#">
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
                        <Link href="#" className="">
                          <i className="fa fa-heart-o"></i>
                        </Link>
                      </div>
                      {/* <!-- COUNT TEXT --> */}
                    </div>
                  </div>
                  <Link
                    className="iq-button btn btn-hover"
                    href=""
                    onClick={showSwal}
                  >
                    {" "}
                    Add to cart{" "}
                  </Link>
                </div>
              </form>

              <div className="">
                SKU : <span> {props.sku}</span>
              </div>
              <br />
              <div className="mb-3">
                Categories :{" "}
                {props.category.map((item:any, index:any) => {
                  return (
                    <Link
                      href="/shop"
                      className="text-primary ms-2 text-capitalize"
                      key={index}
                    >
                      {" "}
                      {item},{" "}
                    </Link>
                  );
                })}
              </div>
              <div className="">
                Tags :
                {props.tags.map((item:any, index:any) => {
                  return (
                    <Link
                      href="/shop"
                      className="text-primary text-capitalize ms-2"
                      key={index}
                    >
                      {item},
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
                    Description
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
                    Additional information
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
                    Reviews(0)
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
                            <th className="thwidth">Size</th>
                            <td className="bordertd">
                              {props.additional_info.map((item:any, index:any) => {
                                return (
                                  <Link href="#" rel="color" key={index}>
                                    {item.size.map((size:any, index:any) => {
                                      return (
                                        <Link
                                          href="#"
                                          className="ms-2"
                                          key={index}
                                        >
                                          {size},
                                        </Link>
                                      );
                                    })}
                                    <Link href="#" className="ms-2">
                                      {item.color}
                                    </Link>
                                  </Link>
                                );
                              })}
                            </td>
                          </tr>
                          <tr>
                            <th className="thwidth">Color</th>
                            <td className="bordertd">
                              <Link
                                v-for="data in props.additionalInfo"
                                href="#"
                                rel="color"
                              ></Link>
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
                    <h2>Reviews</h2>
                    <p className="masvideos-noreviews mt-3">
                      There are no reviews yet.
                    </p>
                    <div id="review_form_wrapper">
                      <div id="review_form">
                        <div id="respond" className="comment-respond">
                          <p
                            id="reply-title"
                            className="comment-reply-title mt-0 mb-0"
                          >
                            Be the first to review “{props.product_name}”
                          </p>
                          <form className="comment-form">
                            <p className="comment-notes">
                              <span id="email-notes">
                                Your email address will not be published.
                              </span>
                              <span
                                className="required-field-message"
                                aria-hidden="true"
                              >
                                Required fields are marked{" "}
                                <span className="required" aria-hidden="true">
                                  *
                                </span>
                              </span>
                            </p>
                            <div className="comment-form-rating ratestar">
                              <label htmlFor="rating">Your rating*</label>
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
                                Your review&nbsp;
                                <span className="required">*</span>
                              </label>
                              <textarea
                                id="comment"
                                name="comment"
                                cols={45}
                                rows={8}
                                required
                              ></textarea>
                            </p>
                            <p className="comment-form-author mt-3 pe-lg-12 pe-0 namefull">
                              <label htmlFor="author">
                                Name&nbsp;<span className="required">*</span>
                              </label>
                              <input
                                id="author"
                                name="author"
                                type="text"
                                defaultValue=""
                                size={30}
                                required
                              />
                            </p>
                            <p className="comment-form-email mt-3 ps-lg-12 pe-0 namefull">
                              <label htmlFor="email">
                                Email&nbsp;<span className="required">*</span>
                              </label>
                              <input
                                id="email"
                                name="email"
                                type="email"
                                defaultValue=""
                                size={30}
                                required
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
                                Save my name, email, and website in this browser
                                for the next time I comment.{" "}
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
                                Submit
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
