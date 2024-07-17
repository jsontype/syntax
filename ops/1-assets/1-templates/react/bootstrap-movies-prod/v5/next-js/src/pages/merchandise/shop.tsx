import { useEffect } from "react";

import { useBreadcrumb } from "@/utilities/usePage";

//react bootstrap
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";

// Next-link
import Link from 'next/link'

//components
import ShopCategorySidebar from '@/components/merchandise/ShopCategorySidebar'
import CardShopListView from "@/components/merchandise/Cardshoplistview";
import CardShopGridView from "@/components/merchandise/Cardshowgridview";

//static data
import { products } from "@/StaticData/shop";
import { newProduct } from "@/StaticData/shop";

// redux
import { useSelector, useDispatch } from "react-redux";

import { getnewProductAsync } from "@/store/shop/actions";

// Import selectors & action from setting store
import * as SettingSelector from "@/store/shop/selectors";
import { AnyAction } from "@reduxjs/toolkit";


const ShopPage = () => {
  useBreadcrumb('Shop')

  // selector
  const newProduct = useSelector(SettingSelector.newProduct);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getnewProductAsync() as unknown as AnyAction)
  })
  let filterWiseProducts = products

  return (
    <>
      <Container className="section-padding">
        <Row>
          <Col lg="3">
            <ShopCategorySidebar>
              {newProduct.map((item:any, index:any) => {
                return (
                  <span key={index}>
                    <ul className="list-unstyled m-0 p-0 shop-product">
                      <li className="d-flex align-items-center mb-4">
                        <div className="top-product-img pe-3">
                          <img src={item.thumbnail} className="img-fluid" />
                        </div>
                        <div className="">
                          <Link href="/merchandise/product-detail" className="">
                            {item.product_name}
                          </Link>
                          <div>
                            <del>{item.price}</del> {item.final_price}
                          </div>
                        </div>
                      </li>
                    </ul>
                  </span>
                );
              })}
            </ShopCategorySidebar>
          </Col>
          <Col xl="9">
            <Tab.Container defaultActiveKey="third">
              <div className="d-flex align-items-center justify-content-between mb-5 shop-filter flex-wrap">
                <p>
                  Showing 1–10 of 31 results{" "}
                </p>
                <div className="d-flex align-items-center">
                  <div className="product-view-button">
                    <Nav
                      as="ul"
                      id="pills-tab"
                      className="nav_shop nav d-flex nav-pills mb-0 iq-product-filter d-flex bg-transparent align-items-center list-inline"
                      role="tablist"
                    >
                      <Nav.Item
                        as="li"
                        className="nav-item"
                        role="presentation"
                      >
                        <Nav.Link
                          id="list-view-tab"
                          className="btn-sm btn-icon rounded-pill p-0"
                          data-toggle="pill"
                          data-bs-target="#pills-list-view"
                          eventKey="first"
                          role="tab"
                          aria-selected="true"
                        >
                          <span className="btn-inner">
                            <svg
                              className="hover_effect active_effect"
                              width="18"
                              height="16"
                              viewBox="0 0 18 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_1379_355)">
                                <path
                                  d="M3.42857 0H0V3.42857H3.42857V0Z"
                                  fill=""
                                ></path>
                                <path
                                  d="M18 0.857422H6V2.57171H18V0.857422Z"
                                  fill=""
                                ></path>
                                <path
                                  d="M3.42857 6H0V9.42857H3.42857V6Z"
                                  fill=""
                                ></path>
                                <path
                                  d="M18 6.85742H6V8.57171H18V6.85742Z"
                                  fill=""
                                ></path>
                                <path
                                  d="M3.42857 12H0V15.4286H3.42857V12Z"
                                  fill=""
                                ></path>
                                <path
                                  d="M18 12.8574H6V14.5717H18V12.8574Z"
                                  fill=""
                                ></path>
                              </g>
                              <defs>
                                <clipPath id="clip0_1379_355">
                                  <rect
                                    width="18"
                                    height="15.4286"
                                    fill=""
                                  ></rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        as="li"
                        className="nav-item ms-2"
                        role="presentation"
                      >
                        <Nav.Link
                          id="grid-view-tab"
                          className="nav-link btn-sm btn-icon rounded-pill p-0"
                          data-toggle="pill"
                          data-bs-target="#pills-grid-view"
                          eventKey="second"
                          role="tab"
                          aria-selected="false"
                        >
                          <span className="btn-inner">
                            <svg
                              className="hover_effect active_effect"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.57143 0H0V8.57143H8.57143V0Z"
                                fill=""
                              ></path>
                              <path
                                d="M17.9999 0H9.42847V8.57143H17.9999V0Z"
                                fill=""
                              ></path>
                              <path
                                d="M8.57143 9.42871H0V18.0001H8.57143V9.42871Z"
                                fill=""
                              ></path>
                              <path
                                d="M17.9999 9.42871H9.42847V18.0001H17.9999V9.42871Z"
                                fill=""
                              ></path>
                            </svg>
                          </span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        as="li"
                        className="nav-item ms-2"
                        role="presentation"
                      >
                        <Nav.Link
                          id="grid-three-view-tab"
                          className="nav-link btn-sm btn-icon rounded-pill p-0"
                          data-toggle="pill"
                          data-bs-target="#pills-grid-three-view-tab"
                          eventKey="third"
                          role="tab"
                          aria-selected="false"
                        >
                          <span className="btn-inner">
                            <svg
                              className="hover_effect active_effect"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.90909 0H0V4.90909H4.90909V0Z"
                                fill=""
                              ></path>
                              <path
                                d="M11.4545 0H6.54541V4.90909H11.4545V0Z"
                                fill=""
                              ></path>
                              <path
                                d="M17.9999 0H13.0908V4.90909H17.9999V0Z"
                                fill=""
                              ></path>
                              <path
                                d="M4.90909 6.5459H0V11.455H4.90909V6.5459Z"
                                fill=""
                              ></path>
                              <path
                                d="M11.4545 6.5459H6.54541V11.455H11.4545V6.5459Z"
                                fill=""
                              ></path>
                              <path
                                d="M17.9999 6.5459H13.0908V11.455H17.9999V6.5459Z"
                                fill=""
                              ></path>
                              <path
                                d="M4.90909 13.0908H0V17.9999H4.90909V13.0908Z"
                                fill=""
                              ></path>
                              <path
                                d="M11.4545 13.0908H6.54541V17.9999H11.4545V13.0908Z"
                                fill=""
                              ></path>
                              <path
                                d="M17.9999 13.0908H13.0908V17.9999H17.9999V13.0908Z"
                                fill=""
                              ></path>
                            </svg>
                          </span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        as="li"
                        className="nav-item ms-2"
                        role="presentation"
                      >
                        <Nav.Link
                          id="grid-four-view-tab"
                          className="nav-link btn-sm btn-icon rounded-pill p-0"
                          data-toggle="pill"
                          data-bs-target="#pills-grid-four-view-tab"
                          eventKey="forth"
                          role="tab"
                          aria-selected="false"
                        >
                          <span className="btn-inner">
                            <svg
                              className="hover_effect active_effect"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.85714 0H0V3.85714H3.85714V0Z"
                                fill=""
                              ></path>
                              <path
                                d="M8.5715 0H4.71436V3.85714H8.5715V0Z"
                                fill=""
                              ></path>
                              <path
                                d="M13.2856 0H9.42847V3.85714H13.2856V0Z"
                                fill=""
                              ></path>
                              <path
                                d="M18 0H14.1428V3.85714H18V0Z"
                                fill=""
                              ></path>
                              <path
                                d="M3.85714 4.71387H0V8.57101H3.85714V4.71387Z"
                                fill=""
                              ></path>
                              <path
                                d="M8.5715 4.71387H4.71436V8.57101H8.5715V4.71387Z"
                                fill=""
                              ></path>
                              <path
                                d="M13.2856 4.71387H9.42847V8.57101H13.2856V4.71387Z"
                                fill=""
                              ></path>
                              <path
                                d="M18 4.71387H14.1428V8.57101H18V4.71387Z"
                                fill=""
                              ></path>
                              <path
                                d="M3.85714 9.42871H0V13.2859H3.85714V9.42871Z"
                                fill=""
                              ></path>
                              <path
                                d="M8.5715 9.42871H4.71436V13.2859H8.5715V9.42871Z"
                                fill=""
                              ></path>
                              <path
                                d="M13.2856 9.42871H9.42847V13.2859H13.2856V9.42871Z"
                                fill=""
                              ></path>
                              <path
                                d="M18 9.42871H14.1428V13.2859H18V9.42871Z"
                                fill=""
                              ></path>
                              <path
                                d="M3.85714 14.1426H0V17.9997H3.85714V14.1426Z"
                                fill=""
                              ></path>
                              <path
                                d="M8.5715 14.1426H4.71436V17.9997H8.5715V14.1426Z"
                                fill=""
                              ></path>
                              <path
                                d="M13.2856 14.1426H9.42847V17.9997H13.2856V14.1426Z"
                                fill=""
                              ></path>
                              <path
                                d="M18 14.1426H14.1428V17.9997H18V14.1426Z"
                                fill=""
                              ></path>
                            </svg>
                          </span>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                  <div className="iq-custom-select d-inline-block shop-select">
                    <select
                      name="cars"
                      className="form-select season-select"
                    >
                      <option value="season1">Default sorting</option>
                      <option>Sort by popularity</option>
                      <option>Sort by average rating</option>
                      <option>Sort by latest</option>
                      <option>Sort by price: low to high</option>
                      <option>Sort by price: high to low</option>
                    </select>
                  </div>
                </div>
              </div>
              <Tab.Content >
                {/* <!-- List View --> */}
                <Tab.Pane
                  id="pills-list-view"
                  eventKey="first"
                  className="tab-pane fade show "
                  role="tabpanel"
                  data-current-page="1"
                >
                  {filterWiseProducts.slice(0, 9).map((item, index) => {
                    return (
                      <Row className="row-cols-1" key={index}>
                        <CardShopListView
                          thumbnail={item.thumbnail}
                          slug={item.slug}
                          is_sale={item.is_sale}
                          is_new={item.is_new}
                          product_name={item.product_name}
                          price={item.price}
                          final_price={item.final_price}
                          rating="4"
                          count1="1"
                        />
                      </Row>
                    );
                  })}
                </Tab.Pane>

                {/* <!-- Grid View --> */}
                <Tab.Pane
                  id="pills-grid-view"
                  eventKey="second"
                  className="tab-pane fade"
                  role="tabpanel"
                  aria-labelledby="grid-view-tab"
                  tab-current-page="2"
                >
                  <Row className="row-cols-1 row-cols-md-2 row-cols-lg-2">
                    {filterWiseProducts.slice(0, 9).map((item, index) => {
                      return (
                        <Col key={index}>
                          <CardShopGridView
                            thumbnail={item.thumbnail}
                            slug={item.slug}
                            is_sale={item.is_sale}
                            is_new={item.is_new}
                            product_name={item.product_name}
                            price={item.price}
                            final_price={item.final_price}
                            rating="5"
                            count1="0"
                          />
                        </Col>
                      );
                    })}
                  </Row>
                </Tab.Pane>
                {/* <!-- Three Grid view --> */}
                <Tab.Pane
                  id="pills-grid-view"
                  eventKey="third"
                  className="tab-pane fade"
                  role="tabpanel"
                  aria-labelledby="grid-view-tab"
                  tab-current-page="3"
                >
                  <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
                    {filterWiseProducts.slice(0, 9).map((item, index) => {
                      return (
                        <Col key={index}>
                          <CardShopGridView
                            thumbnail={item.thumbnail}
                            is_sale={item.is_sale}
                            is_new={item.is_new}
                            product_name={item.product_name}
                            price={item.price}
                            final_price={item.final_price}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                </Tab.Pane>
                {/* <!-- Four Grid View --> */}
                <Tab.Pane
                  id="pills-grid-view"
                  eventKey="forth"
                  className="tab-pane fade"
                  role="tabpanel"
                  aria-labelledby="grid-view-tab"
                  tab-current-page="4"
                >
                  <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
                    {filterWiseProducts.map((item, index) => {
                      return (
                        <Col key={index}>
                          <CardShopGridView
                            thumbnail={item.thumbnail}
                            is_sale={item.is_sale}
                            is_new={item.is_new}
                            product_name={item.product_name}
                            price={item.price}
                            final_price={item.final_price}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

ShopPage.layout = "Merchandise";
export default ShopPage;
