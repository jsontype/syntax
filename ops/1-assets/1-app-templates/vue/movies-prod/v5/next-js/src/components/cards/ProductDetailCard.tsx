import React, { Fragment, memo, useState } from "react";

//react-bootstrap
import { Container, Row, Col, Tab, Nav, Form } from "react-bootstrap";

//react-router-dom
import Link from 'next/link'

//components
import RatingStar from "../rating-star";
import Counter from "../counter";

//function
import { generateImgPath } from "../../StaticData/data";

//plugins
//swipers
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper";

//sweetalert2
import Swal from "sweetalert2";

interface ProductDetailCardProps{
  [x: string]: any;
  thumbnail?:any
  id?:string
  product_name?:string
  count?:string
  final_price?:string
  sku?:string
  description?:string
}

const ProductDetailCard = memo((props:ProductDetailCardProps) => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const product = [
    {
      id: "01",
      thumbnail: generateImgPath("/assets/images/shop/product/01.webp"),
    },
    {
      id: "02",
      thumbnail: generateImgPath("/assets/images/shop/product/02.webp"),
    },
    {
      id: "03",
      thumbnail: generateImgPath("/assets/images/shop/product/03.webp"),
    },
    {
      id: "04",
      thumbnail: generateImgPath("/assets/images/shop/product/04.webp"),
    },
  ];

  const cartSwal = () => {
    Swal.fire({
      title: "Added!",
      text: "Your item has been added to the cart.",
      icon: "success",
      confirmButtonText: "Ok",
      background: "#141314",
      color: "#ffffff",
    });
  };
  const wishlistSwal = () => {
    Swal.fire({
      title: "Added!",
      text: "Your item has been added to the wishlist.",
      icon: "success",
      confirmButtonText: "Ok",
      background: "#141314",
      color: "#ffffff",
    });
  };

  return (
    <Fragment>
      <div className="section-padding-top product-detail">
        <Container>
          <Row>
            <Col lg="6">
              <div className="product-tab-slider">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={20}
                  className="product-tab-slider-thumb swiper-pointer-events swiper-fade"
                  loop={true}
                  // onSwiper={setThumbsSwiper}
                  watchSlidesProgress={true}
                  modules={[Thumbs]}
                >
                  {product.map((item, index) => {
                    return (
                      <SwiperSlide className="p-0" key={index}>
                        <Link href="#">
                          <img
                            src={item.thumbnail}
                            alt={`product-${item.id}`}
                            className="img-fluid product-detail-image"
                          />
                        </Link>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <Swiper
                  thumbs={{
                    swiper:
                      thumbsSwiper && typeof thumbsSwiper !== 'function'
                        ? thumbsSwiper
                        : null,
                  }}
                  
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[Thumbs, FreeMode]}
                  slidesPerView={4}
                  spaceBetween={20}
                  loop={true}
                  className="product-tab-slider-images"
                >
                  {product.map((item, index) => {
                    return (
                      <SwiperSlide className="p-0" key={index}>
                        <img
                          src={item.thumbnail}
                          alt={`product-${item.id}`}
                          className="img-fluid"
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </Col>
            <Col lg="6" className="mt-lg-0 mt-5 ps-lg-5">
              <h3>{props.product_name}</h3>
              <div className="mt-2">
                <RatingStar count="5" count1="0" starColor="text-warning" />
              </div>
              <h4 className="price mt-3 mb-0">{props.final_price}</h4>
              <p className="mt-4 mb-0">{props.description}</p>
              <div className="add-product-wrapper mt-5 pb-5">
                <ul className="list-inline m-0 p-0 d-flex align-items-center gap-3 flex-wrap">
                  <li>
                    <Counter />
                  </li>
                  <li className="wish-list">
                    <Link
                      href="#"
                      className="d-inline-block bg-soft-primary border border-white wishlist-btn"
                      onClick={wishlistSwal}
                    >
                      <i className="far fa-heart"></i>
                    </Link>
                  </li>
                  <li>
                    <div className="iq-button">
                      <Link
                        href="#"
                        className="btn btn-sm cart-btn text-uppercase position-relative"
                        onClick={cartSwal}
                      >
                        <span className="button-text">Add to Cart</span>
                        <i className="fa-solid fa-play"></i>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="product-meta-wrapper">
                <ul className="list-inline m-0 p-0">
                  <li className="mb-2">
                    <span className="text-white fw-semibold">SKU : </span>{" "}
                    <h6 className="d-inline text-capitalize"> {props.sku}</h6>
                  </li>
                  <li className="mb-2">
                    <span className="text-white fw-semibold">
                      Categories :{" "}
                    </span>
                    {props.category.map((item:any, index:any) => {
                      return (
                        <h6
                          className="d-inline text-primary text-capitalize"
                          key={index}
                        >
                          {" "}
                          {item},{" "}
                        </h6>
                      );
                    })}
                  </li>
                  <li>
                    <span className="text-white fw-semibold">Tags : </span>
                    {props.tags.map((item:any, index:any) => {
                      return (
                        <h6
                          className="d-inline text-primary text-capitalize"
                          key={index}
                        >
                          {item},{" "}
                        </h6>
                      );
                    })}
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <div className="section-padding px-0">
            <div className="product-detail-tab">
              <Tab.Container defaultActiveKey="first">
                <Nav
                  as="ul"
                  className="list-inline nav-pills justify-content-center iq-custom-tab tab-bg-gredient-center flex-md-row flex-column gap-md-5 gap-3 mb-5"
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
                      Reviews
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content className="tab-content">
                  <Tab.Pane id="description" eventKey="first">
                    <p className="m-0">{props.description}</p>
                  </Tab.Pane>
                  <Tab.Pane
                    id="additional-info"
                    eventKey="second"
                    className="fade"
                  >
                    <div className="table-responsive additional-info-table">
                      <table className="table table-border">
                        <tbody>
                          <tr className="text-body">
                            <th className="text-white">Color</th>
                            <td className="bordertd">
                              {props.additional_info.map((item:any, index:any) => {
                                return (
                                  <div key={index}>
                                    <span key={index}>{item.color[0]}, </span>
                                    <span>{item.color[1]}, </span>
                                    <span>{item.color[2]} </span>
                                  </div>
                                );
                              })}
                            </td>
                          </tr>
                          <tr className="text-body">
                            <th className="text-white">Size</th>
                            <td className="bordertd">
                              {props.additional_info.map((item:any, index:any) => {
                                return (
                                  <Link href="#" rel="color" key={index}>
                                    {item.size.map((size:any, index:any) => {
                                      return (
                                        <span className="ms-2" key={index}>
                                          {size},
                                        </span>
                                      );
                                    })}
                                  </Link>
                                );
                              })}
                            </td>
                          </tr>
                          <tr className="text-body">
                            <th className="text-white">Weight</th>
                            <td className="bordertd">
                              {props.additional_info.map((item:any, index:any) => {
                                return <div key={index}>50ml, 100ml</div>;
                              })}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane
                    id="reviews"
                    eventKey="third"
                    className="tab-pane animated fadeInUp fade"
                  >
                    <h4 className="mb-4">Reviews For Believe Mask</h4>
                    <div className="product-review-list">
                      <ul className="list-inline m-0 p-0">
                        <li className="pb-5 mb-5 border-bottom">
                          <div className="d-flex flex-sm-row flex-column align-items-sm-center align-items-start gap-4">
                            <div className="user-image flex-shrink-0">
                              <img
                                src="/assets/images/shop/avatar.webp"
                                alt=""
                              />
                            </div>
                            <div className="about-user">
                              <div className="d-flex align-items-center flex-wrap gap-2">
                                <h5 className="mb-0">Jack Stark</h5>
                                <span className="text-uppercase fst-italic fw-semibold published-date">
                                  <i className="fas fa-minus fa-xs"></i> march
                                  2, 2022
                                </span>
                                <div className="lh-1 ratting">
                                  <RatingStar
                                    count="5"
                                    count1="0"
                                    starColor="text-warning"
                                  />
                                </div>
                              </div>
                              <p className="mt-2 mb-0">
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="pb-5 mb-5">
                          <div className="d-flex flex-sm-row flex-column align-items-sm-center align-items-start gap-4">
                            <div className="user-image flex-shrink-0">
                              <img
                                src="/assets/images/shop/avatar.webp"
                                alt=""
                              />
                            </div>
                            <div className="about-user">
                              <div className="d-flex align-items-center flex-wrap gap-2">
                                <h5 className="mb-0">Jhon Deo</h5>
                                <span className="text-uppercase fst-italic fw-semibold published-date">
                                  <i className="fas fa-minus fa-xs"></i> march
                                  2, 2022
                                </span>
                                <div className="lh-1 ratting">
                                  <RatingStar
                                    count="5"
                                    count1="0"
                                    starColor="text-warning"
                                  />
                                </div>
                              </div>
                              <p className="mt-2 mb-0">
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout.
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-5 review-form">
                      <h4>Add a review</h4>
                      <p className="mb-5">
                        Your email address will not be published. Required
                        fields are marked *
                      </p>
                      <p className="mb-2">Your rating *</p>
                      <Form className="needs-validation" noValidate>
                        <div className="rating">
                          <RatingStar
                            count="5"
                            count1="0"
                            starColor="text-warning"
                          />
                        </div>
                        <div className="mb-5 mt-4">
                          <label className="form-label">Your review *</label>
                          <textarea
                            className="form-control rounded-0"
                            required
                          ></textarea>
                        </div>
                        <div className="mb-5">
                          <label className="form-label">Name*</label>
                          <input
                            type="text"
                            className="form-control rounded-0"
                            required
                          />
                        </div>
                        <div className="mb-5">
                          <label className="form-label">Email*</label>
                          <input
                            type="email"
                            className="form-control rounded-0"
                            required
                          />
                        </div>
                        <div className="mb-5 form-check">
                          <input
                            type="checkbox"
                            className="form-check-input rounded-0"
                            id="exampleCheck1"
                            required
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                          >
                            Save my name, email, and website in this browser for
                            the next time I comment.
                          </label>
                        </div>
                        <div className="iq-button">
                          <Link
                            href="#"
                            className="btn text-uppercase position-relative"
                          >
                            <span className="button-text">submit</span>
                            <i className="fa-solid fa-play"></i>
                          </Link>
                        </div>
                      </Form>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
});

ProductDetailCard.displayName = "ProductDetailCard";
export default ProductDetailCard;
