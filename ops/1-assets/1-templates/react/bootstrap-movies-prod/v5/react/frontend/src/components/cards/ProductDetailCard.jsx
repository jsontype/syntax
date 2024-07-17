import React, { Fragment, memo, useState, useEffect } from "react";

//react-bootstrap
import { Container, Row, Col, Tab, Nav, Form } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

//components
import RatingStar from "../rating-star";
import Counter from "../counter";

//function
import { generateImgPath } from "../../StaticData/data";

//redux
// import { useSelector } from "react-redux";

//plugins
//swipers
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper";

//sweetalert2
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
// Redux Selector / Action
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "../../store/setting/selectors";

// the hook
import { useTranslation } from "react-i18next";
// import { theme_scheme_direction } from "../../store/setting/selectors";

import { useLocation } from "react-router-dom";

const ProductDetailCard = memo((props) => {
  const { t } = useTranslation();
  const themeSchemeDirection = useSelector(theme_scheme_direction);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [swiperindex, setswiperindex] = useState(false)
  const location = useLocation()




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
      title: `${t("sweetalert.added")}`,
      text: `${t("sweetalert.added_to_cart")}`,
      icon: "success",
      confirmButtonText: `${t("sweetalert.ok_btn")}`,
      background: "#141314",
      color: "#ffffff",
    });
  };
  const wishlistSwal = () => {
    Swal.fire({
      title: `${t("sweetalert.added")}`,
      text: `${t("sweetalert.added_to_wishlist")}`,
      icon: "success",
      confirmButtonText: `${t("sweetalert.ok_btn")}`,
      background: "#141314",
      color: "#ffffff",
    });
  };

  useEffect(() => {
    if (location.pathname === "/product-detail") {
      if (themeSchemeDirection == 'rtl') {
        const wrapperclass = document.getElementsByClassName('swiper-wrapper');
        console.log("product", location.pathname)
        wrapperclass[0].classList.add('swiper-rtl-wrapper');
        wrapperclass[1].classList.add('swiper-rtl-wrapper');
        const classaccess = document.getElementsByClassName('swiper-rtl-wrapper')
        classaccess[0].childNodes.forEach(element => {
          if (element.classList.contains('swiper-slide-active')) {
            console.log("ele", element)
            document.getElementById("iq-product-rtl-swiper").parentElement.removeAttribute("class")
            document.getElementById("iq-product-rtl-swiper").parentElement.classList.add('swiper-wrapper', 'swiper-rtl-wrapper')
            switch (parseInt(element.getAttribute('data-swiper-product-slide-index'))) {
              case 0:
                element.parentNode.classList.add('iq-product-rtl')
                break;
              case 1:
                element.parentNode.classList.add('iq-product-rtl-one')
                break;
              case 2:
                element.parentNode.classList.add('iq-product-rtl-two')
                break;
              case 3:
                element.parentNode.classList.add('iq-product-rtl-three')
                break;
            }

          }


        });

        classaccess[1].childNodes.forEach(element => {
          if (element.classList.contains('swiper-slide-active')) {
            console.log("eles", element)
            document.getElementById("iq-small-product-rtl-swiper").parentElement.removeAttribute("class")
            document.getElementById("iq-small-product-rtl-swiper").parentElement.classList.add('swiper-wrapper', 'swiper-rtl-wrapper')
            switch (parseInt(element.getAttribute('data-swiper-small-product-slide-index'))) {
              case 0:
                element.parentNode.classList.add('iq-small-product-rtl')
                break;
              case 1:
                element.parentNode.classList.add('iq-small-product-rtl-one')
                break;
              case 2:
                element.parentNode.classList.add('iq-small-product-rtl-two')
                break;
              case 3:
                element.parentNode.classList.add('iq-small-product-rtl-three')
                break;
            }
          }

        });
      }
    }
  }, [swiperindex, themeSchemeDirection])

  return (
    <Fragment>
      <div className="section-padding-top product-detail">
        <Container>
          <Row>
            <Col lg="6">
              <div className="product-tab-slider">
                <Swiper
                  dir={themeSchemeDirection}
                  slidesPerView={1}
                  spaceBetween={20}
                  className="product-tab-slider-thumb swiper-pointer-events swiper-fade wrapper-class"
                  loop={true}
                  watchSlidesProgress={true}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  modules={[Thumbs]}
                  id="responsive-rtl-swiper"
                >
                  {product.map((item, index) => {
                    return (
                      <SwiperSlide className="p-0" key={index} id="iq-product-rtl-swiper" indexs={index} data-swiper-product-slide-index={index}>
                        <Link href="#">
                          <img
                            src={item.thumbnail}
                            alt={`product- ${item.id}`}
                            className="img-fluid product-detail-image"
                          />
                        </Link>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <Swiper
                  dir={themeSchemeDirection}
                  onSwiper={setThumbsSwiper}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[Thumbs, FreeMode]}
                  slidesPerView={4}
                  spaceBetween={20}
                  loop={true}
                  onTap={() => {
                    setswiperindex(!swiperindex)
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 2,
                    },
                    576: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    1025: {
                      slidesPerView: 4,
                    },
                    1500: {
                      slidesPerView: 4,
                    },
                  }}
                  className="product-tab-slider-images"

                >
                  {product.map((item, index) => {
                    return (
                      <SwiperSlide className="p-0" key={index} id="iq-small-product-rtl-swiper" indexs={index} data-swiper-small-product-slide-index={index}>
                        <img
                          src={item.thumbnail}
                          alt={`product - ${item.id}`}
                          className="img-fluid"
                        />

                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </Col>
            <Col lg="6" className="mt-lg-0 mt-5 ps-lg-5">
              <h3>{t(props.product_name)}</h3>
              <div className="mt-2">
                <RatingStar count="5" count1="0" starColor="text-warning" />
              </div>
              <h4 className="price mt-3 mb-0">{props.final_price}</h4>
              <p className="mt-4 mb-0">{t(props.description)}</p>
              <div className="add-product-wrapper mt-5 pb-5">
                <ul className="list-inline m-0 p-0 d-flex align-items-center gap-3 flex-wrap">
                  <li>
                    <Counter />
                  </li>
                  <li className="wish-list">
                    <Link
                      to="#"
                      className="d-inline-block bg-soft-primary border border-white wishlist-btn"
                      onClick={wishlistSwal}
                    >
                      <i className="far fa-heart"></i>
                    </Link>
                  </li>
                  <li>
                    <div className="iq-button">
                      <Link
                        to="#"
                        className="btn btn-sm cart-btn text-uppercase position-relative"
                        onClick={cartSwal}
                      >
                        <span className="button-text">
                          {t("shop.add_to_cart")}
                        </span>
                        <i className="fa-solid fa-play"></i>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="product-meta-wrapper">
                <ul className="list-inline m-0 p-0">
                  <li className="mb-2">
                    <span className="text-white fw-semibold">
                      {t("shop.sku")} :{" "}
                    </span>{" "}
                    <h6 className="d-inline text-capitalize">
                      {" "}
                      {t(props.sku)}
                    </h6>
                  </li>
                  <li className="mb-2">
                    <span className="text-white fw-semibold">
                      {t("form.categories")} :{" "}
                    </span>
                    {props.category.map((item, index) => {
                      return (
                        <h6
                          className="d-inline text-primary text-capitalize"
                          key={index}
                        >
                          {" "}
                          {t(item)},{" "}
                        </h6>
                      );
                    })}
                  </li>
                  <li>
                    <span className="text-white fw-semibold">
                      {t(props.tags)} :{" "}
                    </span>
                    {props.tags.map((item, index) => {
                      return (
                        <h6
                          className="d-inline text-primary text-capitalize"
                          key={index}
                        >
                          {t(item)},{" "}
                        </h6>
                      );
                    })}
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <div className="section-padding-top px-0">
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
                      {t("shop.reviews")}
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content className="tab-content">
                  <Tab.Pane id="description" eventKey="first">
                    <p className="m-0">{t(props.description)}</p>
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
                            <th className="text-white">{t("shop.color")}</th>
                            <td className="bordertd">
                              {props.additional_info.map((item, index) => {
                                return (
                                  <div key={index}>
                                    {item.color.map((color, index) => {
                                      return (
                                        <span key={index}>{color}{item.color.length > 1 ? "," : ""} </span>
                                      )
                                    })
                                    }

                                  </div>
                                );
                              })}
                            </td>
                          </tr>
                          <tr className="text-body">
                            <th className="text-white">{t("shop.size")}</th>
                            <td className="bordertd">
                              {props.additional_info.map((item, index) => {
                                return (
                                  <span to="#" rel="color" key={index}>
                                    {item.size.map((size, index) => {
                                      return (
                                        <span className="ms-2" key={index}>
                                          {size},
                                        </span>
                                      );
                                    })}
                                  </span>
                                );
                              })}
                            </td>
                          </tr>
                          <tr className="text-body">
                            <th className="text-white">{t("shop.weight")}</th>
                            <td className="bordertd">
                              {props.additional_info.map((item, index) => {
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
                    <h4 className="mb-4">
                      {t("shop.reviews_believe_mask")}
                    </h4>
                    <div className="product-review-list">
                      <ul className="list-inline m-0 p-0">
                        <li className="pb-5 mb-5 border-bottom">
                          <div className="d-flex flex-sm-row flex-column align-items-sm-center align-items-start gap-4">
                            <div className="user-image flex-shrink-0">
                              <img
                                src={generateImgPath("/assets/images/shop/avatar.webp")}
                                alt=""
                              />
                            </div>
                            <div className="about-user">
                              <div className="d-flex align-items-center flex-wrap gap-2">
                                <h5 className="mb-0">{t("shop.jack_stark")}</h5>
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
                              <p className="mt-2 mb-0">{t("shop.desc1")}.</p>
                            </div>
                          </div>
                        </li>
                        <li className="pb-5 mb-5">
                          <div className="d-flex flex-sm-row flex-column align-items-sm-center align-items-start gap-4">
                            <div className="user-image flex-shrink-0">
                              <img
                                src={generateImgPath("/assets/images/shop/avatar.webp")}
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
                              <p className="mt-2 mb-0">{t("faq.desc")}</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-5 review-form">
                      <h4>{t("shop.add_review")}</h4>
                      <p className="mb-5">
                        {t(
                          "detail_page.published_email"
                        )}
                      </p>
                      <p className="mb-2">{t("shop.your_rating")} *</p>
                      <Form className="needs-validation" noValidate>
                        <div className="rating">
                          <RatingStar
                            count="5"
                            count1="0"
                            starColor="text-warning"
                          />
                        </div>
                        <div className="mb-5 mt-4">
                          <label className="form-label">{t("shop.your_review")} *</label>
                          <textarea
                            className="form-control rounded-0"
                            required=""
                          ></textarea>
                        </div>
                        <div className="mb-5">
                          <label className="form-label">{t("shop.name")}*</label>
                          <input
                            type="text"
                            className="form-control rounded-0"
                            required
                          />
                        </div>
                        <div className="mb-5">
                          <label className="form-label">{t("form.email")}*</label>
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
                            {t("shop.save_name")}
                          </label>
                        </div>
                        <div className="iq-button">
                          <Link
                            to="#"
                            className="btn text-uppercase position-relative"
                          >
                            <span className="button-text">
                              {t("shop.submit")}
                            </span>
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
