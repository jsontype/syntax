import React, { Fragment } from "react";

// Next-Link
import Link from "next/link";

// Next-Image
import Image from 'next/image'

// react-bootstrap
import { Row, Col, Container } from "react-bootstrap";  

// components
import ShopSectionSlider from "@/components/slider/ShopSectionSlider";
import ProductCard from "@/components/merchandise/product-card";
import Logo from "@/components/logo";
import CustomButton from "@/components/CustomButton";

//data
import { heroSlider, newProduct, category, } from "@/StaticData/shop";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Redux Selector / Action
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "@/store/setting/selectors";

// Images
import img1 from "../../../public/assets/images/shop/card/capton-america.webp";
import img2 from "../../../public/assets/images/shop/card/deadpool.webp";
import img3 from "../../../public/assets/images/shop/card/multipal.webp";
import location from "../../../public/assets/images/shop/card/location.webp";

const MerchandiseHome = () => {
    const themeSchemeDirection = useSelector(theme_scheme_direction);

    return (
        <Fragment>
        <Swiper
          key={String(themeSchemeDirection)}
          dir={String(themeSchemeDirection)}
          navigation={{
            prevEl: ".swiper-banner-button-prev",
            nextEl: ".swiper-banner-button-next",
          }}
          loop={true}
          modules={[Navigation]}
          className="position-relative"
        >
          {heroSlider.map((item, index) => {
            return (
              <SwiperSlide className="slide m-0 p-0 home-slider" key={index}>
                <Link href="/merchandise/product-detail" className="card-link">
                  <img
                    src={item.thumbnail}
                    alt="swiperimg"
                    className="img-fluid w-100"
                  />
                </Link>
              </SwiperSlide>
            );
          })}
          <div
            className="swiper-banner-button-prev swiper-nav"
            id="home-banner-slider-prev"
          >
            <i></i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 44 44"
              width="44"
              height="44"
              fill="none"
              stroke="currentColor"
            >
              <circle r="20" cy="22" cx="22"></circle>
            </svg>
          </div>
          <div
            className="swiper-banner-button-next swiper-nav"
            id="home-banner-slider-next"
          >
            <i></i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 44 44"
              width="44"
              height="44"
              fill="none"
              stroke="currentColor"
            >
              <circle r="20" cy="22" cx="22"></circle>
            </svg>
          </div>
        </Swiper>
  
        <section className="category-slider-block">
          <Container fluid>
            <div className="text-center">
              <h4 className="my-4 mt-md-3 mt-sm-3">Best Selling Categories</h4>
            </div>
            <Swiper
              key={String(themeSchemeDirection)}
              dir={String(themeSchemeDirection)}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              modules={[Navigation]}
              breakpoints={{
                320: { slidesPerView: 1 },
                550: { slidesPerView: 2 },
                991: { slidesPerView: 3 },
                1400: { slidesPerView: 4 },
              }}
              loop={true}
              slidesPerView={4}
              tag="ul"
              className="position-relative swiper-card "
            // wrapperClass="p-0 m-0  list-inline"
            >
              {category.map((item, index) => {
                return (
                  <SwiperSlide className="slide-item" tag="li" key={index}>
                    <ShopSectionSlider
                      shopsellingImg={item.image}
                      shopsellingText={item.title}
                      slug={item.slug}
                    />
                  </SwiperSlide>
                );
              })}
              <div className="swiper-button swiper-button-next"></div>
              <div className="swiper-button swiper-button-prev"></div>
            </Swiper>
          </Container>
        </section>
  
        <section className="">
          <Container fluid className="p-xl-0">
            <Row className="gx-0">
              <Col lg="4" md="6" className="d-flex flex-column">
                <div className="product-box left-1-productbox">
                  <Link href="/merchandise/shop" className="card-link"></Link>
                  <div
                    className="card-img-overlay product-card-img-overlay"
                    style={{
                      backgroundImage: "url(../../assets/images/shop/card/01.webp)",
                    }}
                  ></div>
                  <div className="card-body w-100">
                    <h5 className="card-title">Ghost Spider </h5>
                    <h4 className="parent-heading">Monster-House</h4>
                    <div className="iq-btn-container">
                      <CustomButton
                        linkButton="true"
                        buttonTitle="ShopNow"
                        link="/"
                      />
                    </div>
                  </div>
                </div>
                <div className="product-box left-2-productbox">
                  <Link href="/merchandise/shop" className="card-link"></Link>
                  <div
                    className="card-img-overlay product-card-img-overlay mt-lg-0 mt-md-4 mt-4"
                    style={{
                      backgroundImage: "url(../../assets/images/shop/card/02.webp)",
                    }}
                  ></div>
                  <div className="card-body w-100">
                    <h5 className="card-title">Harry David </h5>
                    <h4 className="parent-heading">Warner Bro Films</h4>
                    <div className="iq-btn-container">
                      <CustomButton
                        linkButton="true"
                        buttonTitle="ShopNow"
                        link="/"
                      />
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="6" className="mt-md-0 mt-4">
                <div className="center-productbox product-box">
                  <Link href="/merchandise/shop" className="card-link"></Link>
                  <div
                    className="card-img-overlay product-card-img-overlay"
                    style={{
                      backgroundImage: "url(../../assets/images/shop/card/03.webp)",
                    }}
                  ></div>
                  <div className="card-body w-100">
                    <h5 className="card-title">Avengers </h5>
                    <h4 className="parent-heading">Marvel Studios</h4>
                    <div className="iq-btn-container">
                      <CustomButton
                        linkButton="true"
                        buttonTitle="ShopNow"
                        link="/"
                      />
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                lg="4"
                md="12"
                className="d-flex flex-column mt-lg-0 mt-md-4 mt-4"
              >
                <div className="product-box right-1-productbox">
                  <Link href="/merchandise/shop" className="card-link"></Link>
                  <div
                    className="card-img-overlay product-card-img-overlay md-mt-5"
                    style={{
                      backgroundImage: "url(../../assets/images/shop/card/04.webp)",
                    }}
                  ></div>
                  <div className="card-body w-100">
                    <h5 className="card-title">Harry David </h5>
                    <h4 className="parent-heading">Warner Bros Films</h4>
                    <div className="iq-btn-container">
                      <CustomButton
                        linkButton="true"
                        buttonTitle="ShopNow"
                        link="/"
                      />
                    </div>
                  </div>
                </div>
                <div className="product-box right-2-productbox">
                  <Link href="/merchandise/shop" className="card-link"></Link>
                  <div
                    className="card-img-overlay product-card-img-overlay mt-lg-0 mt-md-4 mt-4"
                    style={{
                      backgroundImage: "url(../../assets/images/shop/card/05.webp)",
                    }}
                  ></div>
                  <div className="card-body w-100">
                    <h5 className="card-title">Fantasia </h5>
                    <h4 className="parent-heading">Disney World</h4>
                    <div className="iq-btn-container">
                      <CustomButton
                        linkButton="true"
                        buttonTitle="ShopNow"
                        link="/"
                      />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
  
        <div className="newest-product-block section-padding-top streamit-block">
          <Container fluid>
            <div className="overflow-hidden">
              <div className="d-flex align-items-center justify-content-between px-3 my-4">
                <h5 className="main-title text-capitalize mb-0">
                  Newest Products
                </h5>
                <Link
                  href="/merchandise/all-product"
                  className="text-primary iq-view-all text-decoration-none flex-none"
                >
                  Want More?
                </Link>
              </div>
              <div className="card-style-slider">
                <Swiper
                  key={String(themeSchemeDirection)}
                  dir={String(themeSchemeDirection)}
                  slidesPerView={5}
                  navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                  }}
                  loop={true}
                  modules={[Navigation]}
                  tag="ul"
                  className="position-relative swiper-card"
                  // wrapperClass="p-0 m-0  list-inline"
                  breakpoints={{
                    0: {
                      slidesPerView: 2,
                      spaceBetween: 0,
                    },
                    576: {
                      slidesPerView: 2,
                      spaceBetween: 0,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 0,
                    },
                    1025: {
                      slidesPerView: 5,
                      spaceBetween: 0,
                    },
                    1500: {
                      slidesPerView: 5,
                      spaceBetween: 0,
                    },
                  }}
                >
                  {newProduct.map((item:any, index:any) => {
                    return (
                      <SwiperSlide tag="li" key={index}>
                        <ProductCard
                          thumbnail={item.thumbnail}
                          product_name={item.product_name}
                          price={item.price}
                          final_price={item.final_price}
                          rating="5"
                          count1="0"
                          is_sale={item.is_sale}
                          is_new={item.is_new}
                          slug={item.slug}
                        />
                      </SwiperSlide>
                    );
                  })}
                  <div className="swiper-button swiper-button-next"></div>
                  <div className="swiper-button swiper-button-prev"></div>
                </Swiper>
              </div>
            </div>
          </Container>
        </div>
  
        <section className="section-padding-bottom">
          <Container fluid>
            <Row>
              <Col lg="6" md="6">
                <div className="categorie-about-left">
                  <div className="categorie-about-image">
                    <Image src={img1} className="img-fluid" alt='Captain America' />
                  </div>
                  <div className=" text-left mb-4 pt-3">
                    <h4 className="mb-2 line-count-1">Captain America</h4>
                    <p className="mb-4 mt-2 line-count-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <CustomButton
                      linkButton="false"
                      buttonTitle="view collection"
                      link="/merchandise/shop"
                    />
                  </div>
                </div>
              </Col>
              <Col lg="6" md="6">
                <div className="categorie-about-right">
                  <div className="categorie-about-image">
                    <Image src={img2} className="img-fluid" alt='Dead Pool' />
                  </div>
                  <div className=" text-left mb-4 pt-3">
                    <h4 className="mb-2 line-count-1">Dead Pool</h4>
                    <p className="mb-4 mt-2 line-count-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <CustomButton
                      linkButton="false"
                      buttonTitle="view collection"
                      link="/merchandise/shop"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
  
        <section
          className="section-padding"
          style={{
            backgroundImage: "url(../assets/images/shop/card/bg-img.webp)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 ">
                <Image src={img3} className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 col-md-12 mt-4 mt-md-0">
                <Logo />
                <h2 className="mt-3 mb-3">
                  {" "}
                  Wear Streamit, Buy Streamit and Love Streamit{" "}
                </h2>
                <p className="mb-4 line-count-3">
                  Buy exclusive streamit products from our store and get amazing
                  benefits.
                </p>
                <CustomButton
                  linkButton="false"
                  buttonTitle="shop now"
                  link="/merchandise/product-detail"
                />
              </div>
            </div>
          </div>
        </section>
  
        <div className="best-product-block section-padding-top">
          <Container fluid>
            <div className="overflow-hidden">
              <div className="d-flex align-items-center justify-content-between px-3 my-4">
                <h5 className="main-title text-capitalize mb-0">Best Sellers</h5>
                <Link
                  href="/merchandise/all-product"
                  className="text-primary iq-view-all text-decoration-none flex-none"
                >
                  Want More?
                </Link>
              </div>
              <div className="card-style-slider">
                <Swiper
        key={String(themeSchemeDirection)}
        dir={String(themeSchemeDirection)}
                  slidesPerView={5}
                  navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                  }}
                  loop={true}
                  modules={[Navigation]}
                  tag="ul"
                  className="position-relative swiper-card"
                  // wrapperClass="p-0 m-0  list-inline"
                  breakpoints={{
                    0: {
                      slidesPerView: 2,
                      spaceBetween: 0,
                    },
                    576: {
                      slidesPerView: 2,
                      spaceBetween: 0,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 0,
                    },
                    1025: {
                      slidesPerView: 5,
                      spaceBetween: 0,
                    },
                    1500: {
                      slidesPerView: 5,
                      spaceBetween: 0,
                    },
                  }}
                >
                  {newProduct.map((item:any, index:any) => {
                    return (
                      <SwiperSlide tag="li" key={index}>
                        <ProductCard
                          thumbnail={item.thumbnail}
                          product_name={item.product_name}
                          price={item.price}
                          final_price={item.final_price}
                          rating="5"
                          count1="0"
                          is_sale={item.is_sale}
                          is_new={item.is_new}
                          slug={item.slug}
                        />
                      </SwiperSlide>
                    );
                  })}
                  <div className="swiper-button swiper-button-next"></div>
                  <div className="swiper-button swiper-button-prev"></div>
                </Swiper>
              </div>
            </div>
          </Container>
        </div>
  
        <div className="product_container">
          <Row className=" gx-0">
            <Col lg="6" className="shop-contact-one">
              <Link href="#">
                <div className="channel-logo border-gredient-left">
                  <h5>Our Multiple Locations</h5>
                </div>
              </Link>
              <Row className="my-4">
                <Col lg="6" md="12">
                  <h5 className="mb-3">Australia:</h5>
                  <p>24 Isaac Road. Ellendale, Tasmania 7140</p>
                </Col>
                <Col lg="6" md="12">
                  <h5 className="mb-3">Australia: </h5>
                  <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                </Col>
              </Row>
              <div className="d-flex align-items-center gap-3">
                <h5 className="m-0">Working Hours: </h5>
                <i className="text-primary shop_store_time">
                  {" "}
                  Mon – Fri : 09:00 AM to 06:00 PM
                </i>
              </div>
            </Col>
            <Col lg="6" md="12" className="shop-contact">
              <Image src={location} alt="" className="img-fluid h-100 w-100" />
            </Col>
          </Row>
        </div>
      </Fragment>
    );
};

MerchandiseHome.layout = "Merchandise";
export default MerchandiseHome;
