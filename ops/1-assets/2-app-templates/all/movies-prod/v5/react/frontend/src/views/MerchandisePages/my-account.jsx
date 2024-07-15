import React, { memo, Fragment, useState } from "react";

// react-bootstrap
import { Container, Row, Col, Nav, Tab, Form, Table, Collapse } from "react-bootstrap";

// react-router
import { Link } from "react-router-dom";

// components
import CustomButton from "../../components/CustomButton";
import BreadCrumbWidget from "../../components/BreadcrumbWidget";

// the hook
import { useTranslation } from "react-i18next";
import ChoicesJs from "../../components/choice";
const MyAccount = memo(() => {
  const { t } = useTranslation();

  const options = [
    { value: `${t("shop.choose")}`, label: `${t("shop.choose")}` },
    { value: `${t("shop.gujrat")}`, label: `${t("shop.gujrat")}` },
    { value: `${t("shop.dehli")}`, label: `${t("shop.dehli")}` },
    { value: `${t("shop.goa")}`, label: `${t("shop.goa")}` },
    { value: `${t("shop.haryana")}`, label: `${t("shop.haryana")}` },
    { value: `${t("shop.ladakh")}`, label: `${t("shop.ladakh")}` },
  ];
  const options1 = [
    { value: `${t("shop.chooes_country")}`, label: `${t("shop.chooes_country")}` },
    { value: `${t("shop.india")}`, label: `${t("shop.india")}` },
    { value: `${t("shop.united_kindom")}`, label: `${t("shop.united_kindom")}` },
    { value: `${t("shop.united_states")}`, label: `${t("shop.united_states")}` },
    { value: `${t("shop.australia")}`, label: `${t("shop.australia")}` },
    { value: `${t("shop.north_corea")}`, label: `${t("shop.north_corea")}` },
  ];

  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)
  return (
    <Fragment>
      <BreadCrumbWidget title={t("header.my_account")} />
      <div className="section-padding service-details">
        <Container>
          <Tab.Container defaultActiveKey="first">
            <Row>
              <Col md="4" lg="3">
                <div className="acc-left-menu p-4 mb-5 mb-lg-0 mb-md-0">
                  <div className="product-menu">
                    <Nav
                      as="ul"
                      variant="tabs"
                      className="list-inline m-0 nav-tabs flex-column bg-transparent border-0"
                      id="nav-tab"
                      role="tablist"
                    >
                      <Nav.Item as="li" className="pb-3">
                        <Nav.Link
                          eventKey="first"
                          className="p-0 bg-transparent"
                        >
                          <i className="fas fa-tachometer-alt"></i>
                          <span className="ms-2">{t("shop.dashboard")}</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li" className="py-3">
                        <Nav.Link
                          eventKey="second"
                          className="p-0 bg-transparent"
                        >
                          <i className="fas fa-list"></i>
                          <span className="ms-2">{t("shop.orders")}</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li" className="py-3">
                        <Nav.Link
                          eventKey="third"
                          className="p-0 bg-transparent"
                        >
                          <i className="fas fa-download"></i>
                          <span className="ms-2">{t("shop.downloads")}</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li" className="py-3">
                        <Nav.Link
                          eventKey="fourth"
                          className="p-0 bg-transparent"
                        >
                          <i className="fas fa-map-marker-alt"></i>
                          <span className="ms-2">{t("shop.address")}</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li" className="py-3">
                        <Nav.Link
                          eventKey="five"
                          className="p-0 bg-transparent"
                        >
                          <i className="fas fa-user"></i>
                          <span className="ms-2">
                            {t("shop.account_details")}
                          </span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li" className="pt-3">
                        <Nav.Link
                          eventKey="sixth"
                          className="p-0 bg-transparent"
                        >
                          <i className="fas fa-sign-out-alt"></i>
                          <span className="ms-2">{t("shop.logout")}</span>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </div>
              </Col>
              <Col lg="9" md="8">
                <Tab.Content id="product-menu-content">
                  <Tab.Pane className="fade" eventKey="first">
                    <div className="myaccount-content text-body p-4">
                      <p>
                        {t("shop.hello_jenny")}{" "}
                        <Link to="/login">{t("shop.log_out")}</Link>)
                      </p>
                      <p>
                        {t("shop.your_account")}{" "}
                        <Link to="#">{t("shop.recent_orders")}</Link>,{" "}
                        {t("shop.manage_your")}{" "}
                        <Link to="#">{t("shop.shipping_billing")}</Link>,{" "}
                        {t("shop.and")}{" "}
                        <Link to="#">{t("shop.edit_password")}</Link>.
                      </p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane className="fade" eventKey="second">
                    <div className="orders-table text-body p-4">
                      <Table responsive>
                        <thead>
                          <tr className="border-bottom">
                            <th className="fw-bolder p-3">{t("shop.order")}</th>
                            <th className="fw-bolder p-3">{t("shop.date")}</th>
                            <th className="fw-bolder p-3">
                              {t("shop.status")}
                            </th>
                            <th className="fw-bolder p-3">
                              {t("shop.total")}
                            </th>
                            <th className="fw-bolder p-3">
                              {t("shop.actions")}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-bottom">
                            <td className="text-primary fs-6">#32604</td>
                            <td>October 28, 2022</td>
                            <td>{t("shop.cancelled")}</td>
                            <td>$215.00 For 0 Items</td>
                            <td>
                              <div className="d-flex align-items-center gap-2">
                                <CustomButton
                                  buttonTitle={t("shop.pay")}
                                  link="#"
                                  linkButton="false"
                                />
                                <CustomButton
                                  buttonTitle={t("shop.view")}
                                  link="#"
                                  linkButton="false"
                                />
                                <CustomButton
                                  buttonTitle={t("shop.cancel")}
                                  link="#"
                                  linkButton="false"
                                />
                              </div>
                            </td>
                          </tr>
                          <tr className="border-bottom">
                            <td className="text-primary fs-6">#32584</td>
                            <td>October 27, 2022</td>
                            <td>{t("shop.on_hold")}</td>
                            <td>$522.00 For 0 Items</td>
                            <td>
                              <div className="d-flex align-items-center gap-2">
                                <CustomButton
                                  buttonTitle={t("shop.pay")}
                                  link="#"
                                  linkButton="false"
                                />
                                <CustomButton
                                  buttonTitle={t("shop.view")}
                                  link="#"
                                  linkButton="false"
                                />
                                <CustomButton
                                  buttonTitle={t("shop.cancel")}
                                  link="#"
                                  linkButton="false"
                                />
                              </div>
                            </td>
                          </tr>
                          <tr className="border-bottom">
                            <td className="text-primary fs-6">#31756</td>
                            <td>October 19, 2022</td>
                            <td>{t("shop.processing")}</td>
                            <td>$243.00 For 0 Items</td>
                            <td>
                              <div className="d-flex align-items-center gap-2">
                                <CustomButton
                                  buttonTitle={t("shop.pay")}
                                  link="#"
                                  linkButton="false"
                                />
                                <CustomButton
                                  buttonTitle={t("shop.view")}
                                  link="#"
                                  linkButton="false"
                                />
                                <CustomButton
                                  buttonTitle={t("shop.cancel")}
                                  link="#"
                                  linkButton="false"
                                />
                              </div>
                            </td>
                          </tr>
                          <tr className="border-bottom">
                            <td className="text-primary fs-6">#23663</td>
                            <td>October 7, 2022</td>
                            <td>{t("shop.completed")}</td>
                            <td>$123.00 For 0 Items</td>
                            <td className="fs-6">
                              <div className="d-flex align-items-center gap-2">
                                <CustomButton
                                  buttonTitle={t("shop.view")}
                                  link="#"
                                  linkButton="false"
                                />
                              </div>
                            </td>
                          </tr>
                          <tr className="border-bottom">
                            <td className="text-primary fs-6">#23612</td>
                            <td>October 7, 2022</td>
                            <td>{t("shop.completed")}</td>
                            <td>$64.00 For 0 Items</td>
                            <td className="fs-6">
                              <div className="d-flex align-items-center gap-2">
                                <CustomButton
                                  buttonTitle={t("shop.view")}
                                  link="#"
                                  linkButton="false"
                                />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-primary fs-6">#19243</td>
                            <td>April 1, 2022</td>
                            <td>{t("shop.completed")}</td>
                            <td>$159.00 For 0 Items</td>
                            <td className="fs-6">
                              <div className="d-flex align-items-center gap-2">
                                <CustomButton
                                  buttonTitle={t("shop.view")}
                                  link="#"
                                  linkButton="false"
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane className=" fade" eventKey="third">
                    <div className="orders-table text-body p-4">
                      <Table responsive>
                        <thead>
                          <tr className="border-bottom">
                            <th className="fw-bolder p-3">
                              {t("shop.product_")}
                            </th>
                            <th className="fw-bolder p-3">
                              {t("shop.download_remaining")}
                            </th>
                            <th className="fw-bolder p-3">
                              {t("shop.expires")}
                            </th>
                            <th className="fw-bolder p-3">
                              {t("shop.download")}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-3 fs-6">
                              {t("shop.electric_toothbrush")}
                            </td>
                            <td className="p-3">∞</td>
                            <td className="p-3 fs-6">{t("shop.never")}</td>
                            <td className="p-3">
                              <Link
                                to="#"
                                className="p-2 bg-primary text-white fs-6"
                                download
                              >
                                {t("shop.product_demo")}
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane className=" fade" eventKey="fourth">
                    <div className="text-body p-4">
                      <p className="my-3">
                        {t("shop.default_addresses")}
                      </p>
                      <div className="d-flex align-items-center justify-content-between my-5 gap-2 flex-wrap">
                        <h4 className="mb-0">{t("shop.billing_addess")}</h4>
                        <div className="iq-button">
                          <Link
                            to="#"
                            className="btn text-uppercase position-relative"
                            onClick={() => setShow(!show)}
                          >
                            <span className="button-text">
                              {t("shop.edit")}
                            </span>
                            <i className="fa-solid fa-play"></i>
                          </Link>
                        </div>
                      </div>
                      <Collapse in={show} id="edit-address-1" >
                        <div className="text-body mb-4">
                          <Form>
                            <div className="form-group mb-5">
                              <label className="mb-2">
                                {t("shop.first_name")}&nbsp;{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                name="first-name"
                                defaultValue="John"
                                className="form-control"
                                required="required"
                              />
                            </div>
                            <div className="form-group mb-5">
                              <label className="mb-2">
                                {t("shop.last_name")}&nbsp;{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                name="last-name"
                                defaultValue="deo"
                                className="form-control"
                                required="required"
                              />
                            </div>
                            <div className="form-group mb-5">
                              <label className="mb-2">
                                {t("shop.company_name")}
                              </label>
                              <input
                                type="text"
                                name="last-name"
                                defaultValue="Iqonic Design"
                                className="form-control"
                              />
                            </div>
                            <div className="form-group mb-5">
                              <label className="mb-2">
                                {t("shop.country_region")}&nbsp;{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <div className="mb-5 iq-custom-select">
                                <ChoicesJs options={options1} className="js-choice" select="one" />
                              </div>
                            </div>
                            <div className="form-group mb-5">
                              <label className="mb-2">
                                {t("shop.street_address")}&nbsp;{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                name="address"
                                placeholder="House number and street name"
                                defaultValue="4517 Kentucky"
                                className="form-control mb-3 rounded-0"
                                required="required"
                              />
                              <input
                                type="text"
                                name="address"
                                placeholder="Apartment, suite, unit, etc. (optional)"
                                className="form-control"
                              />
                            </div>
                            <div className="form-group mb-5">
                              <label className="mb-2">
                                {t("shop.town_city")}&nbsp;{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                name="city"
                                defaultValue="Navsari"
                                className="form-control"
                                required="required"
                              />
                            </div>
                            <div className="form-group mb-5">
                              <label className="mb-2">
                                {t("shop.state")}&nbsp;{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <div className="mb-5 iq-custom-select">
                                <ChoicesJs options={options} className="js-choice" select="one" />
                              </div>
                            </div>
                            <div className="form-group mb-5">
                              <label className="mb-2">
                                {t("shop.pin_code")}&nbsp;{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                name="pin code"
                                defaultValue="396321"
                                className="form-control"
                                required="required"
                              />
                            </div>
                            <div className="form-group mb-5">
                              <label className="mb-2">
                                {t("shop.phone")}&nbsp;{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="tel"
                                name="number"
                                defaultValue="1234567890"
                                className="form-control"
                                required="required"
                              />
                            </div>
                            <div className="form-group mb-5">
                              <label className="mb-2">
                                {t("shop.email_address")}&nbsp;{" "}
                                {/* <span className="text-danger">*</span> */}
                              </label>
                              <input
                                type="email"
                                name="email"
                                defaultValue="johndeo@gmail.com"
                                className="form-control"
                                required="required"
                              />
                            </div>
                            <div className="form-group mb-5">
                              <CustomButton
                                buttonTitle="Save Address"
                                link="#"
                                linkButton="false"
                              />
                            </div>
                          </Form>
                        </div>
                      </Collapse>
                      <Table className="edit-address w-100" responsive>
                        <tbody>
                          <tr>
                            <td className="label-name p-2">{t("shop.name")}</td>
                            <td className="seprator p-2">
                              <span>:</span>
                            </td>
                            <td className="p-2">{t("shop.john_deo")}</td>
                          </tr>
                          <tr>
                            <td className="label-name p-2">
                              {t("shop.company")}
                            </td>
                            <td className="seprator p-2">
                              <span>:</span>
                            </td>
                            <td className="p-2">{t("shop.iqonic_design")}</td>
                          </tr>
                          <tr>
                            <td className="label-name p-2">
                              {t("shop.country")}
                            </td>
                            <td className="seprator p-2">
                              <span>:</span>
                            </td>
                            <td className="p-2">{t("shop.india")}</td>
                          </tr>
                          <tr>
                            <td className="label-name p-2">
                              {t("shop.address")}
                            </td>
                            <td className="seprator p-2">
                              <span>:</span>
                            </td>
                            <td className="p-2">
                              4517 {t("shop.washington_manchester")}.
                            </td>
                          </tr>
                          <tr>
                            <td className="label-name p-2">
                              {t("shop.e_mail")}
                            </td>
                            <td className="seprator p-2">
                              <span>:</span>
                            </td>
                            <td className="p-2">johndeo@gmail.com</td>
                          </tr>
                          <tr>
                            <td className="label-name p-2">
                              {t("shop.phone")}
                            </td>
                            <td className="seprator p-2">
                              <span>:</span>
                            </td>
                            <td className="p-2">1234567890</td>
                          </tr>
                        </tbody>
                      </Table>
                      <div className="d-flex align-items-center justify-content-between my-5 gap-2 flex-wrap">
                        <h4 className="mb-0">{t("shop.shipping_address")}</h4>
                        <div className="iq-button">
                          <Link
                            to="#"
                            className="btn text-uppercase position-relative"
                            onClick={() => setShow1(!show1)}
                          >
                            <span className="button-text">
                              {t("shop.edit")}
                            </span>
                            <i className="fa-solid fa-play"></i>
                          </Link>
                        </div>
                      </div>
                      <Collapse in={show1} id="edit-address-2">
                        <div className="text-body mb-4">
                          <Form>
                            <div className="form-group mb-5">
                              <label className="mb-2">
                                {t("shop.first_name")}&nbsp;{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                name="first-name"
                                defaultValue="John"
                                className="form-control"
                                required="required"
                              />
                            </div>
                            <div className="form-group mb-5">
                              <label className="mb-2">
                                {t("shop.last_name")}&nbsp;{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                name="last-name"
                                defaultValue="deo"
                                className="form-control"
                                required="required"
                              />
                            </div>
                            <div className="form-group mb-5">
                              <label className="mb-2">
                                {t("shop.company_name")}
                              </label>
                              <input
                                type="text"
                                name="last-name"
                                defaultValue="Iqonic Design"
                                className="form-control"
                              />
                            </div>
                            <div className="form-group mb-5">
                              <label className="mb-2">
                                {t("shop.country_region")}&nbsp;{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <div className="mb-5 iq-custom-select">
                                <ChoicesJs options={options1} className="js-choice" select="one" />
                              </div>
                            </div>
                            <div className="form-group mb-5">
                              <label className="mb-2">
                                {t("shop.street_address")}&nbsp;{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                name="address"
                                placeholder="House number and street name"
                                defaultValue="4517 Kentucky"
                                className="form-control mb-3 rounded-0"
                                required="required"
                              />
                              <input
                                type="text"
                                name="address"
                                placeholder="Apartment, suite, unit, etc. (optional)"
                                className="form-control mb-5 rounded-0"
                              />
                            </div>
                            <div className="form-group mb-5">
                              <label className="mb-2">
                                {t("shop.town_city")}&nbsp;{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                name="city"
                                defaultValue="Navsari"
                                className="form-control"
                                required="required"
                              />
                            </div>
                            <div className="form-group mb-5">
                              <label className="mb-2">
                                {t("shop.state")}&nbsp;{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <div className="mb-5 iq-custom-select">
                                <ChoicesJs options={options} className="js-choice" select="one" />
                              </div>
                            </div>
                            <div className="form-group mb-5">
                              <label className="mb-2">
                                {t("shop.pin_code")}&nbsp;{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                name="pin code"
                                defaultValue="396321"
                                className="form-control"
                                required="required"
                              />
                            </div>
                            <div className="form-group mb-5">
                              <label className="mb-2">
                                {t("shop.phone")}&nbsp;{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="tel"
                                name="number"
                                defaultValue="1234567890"
                                className="form-control"
                                required="required"
                              />
                            </div>
                            <div className="form-group mb-5">
                              <label className="mb-2">
                                {t("shop.email_address")}&nbsp;{" "}
                                {/* <span className="text-danger">*</span> */}
                              </label>
                              <input
                                type="email"
                                name="email"
                                defaultValue="johndeo@gmail.com"
                                className="form-control"
                                required="required"
                              />
                            </div>
                            <div className="form-group">
                              <CustomButton
                                buttonTitle="Save Address"
                                link="#"
                                linkButton="false"
                              />
                            </div>
                          </Form>
                        </div>
                      </Collapse>
                      <Table className="edit-address w-100" responsive>
                        <tbody>
                          <tr>
                            <td className="label-name p-2">{t("shop.name")}</td>
                            <td className="seprator p-2">
                              <span>:</span>
                            </td>
                            <td className="p-2">{t("shop.john_deo")}</td>
                          </tr>
                          <tr>
                            <td className="label-name p-2">
                              {t("shop.company")}
                            </td>
                            <td className="seprator p-2">
                              <span>:</span>
                            </td>
                            <td className="p-2">{t("shop.iqonic_design")}</td>
                          </tr>
                          <tr>
                            <td className="label-name p-2">
                              {t("shop.country")}
                            </td>
                            <td className="seprator p-2">
                              <span>:</span>
                            </td>
                            <td className="p-2">{t("shop.india")}</td>
                          </tr>
                          <tr>
                            <td className="label-name p-2">
                              {t("shop.address")}
                            </td>
                            <td className="seprator p-2">
                              <span>:</span>
                            </td>
                            <td className="p-2">
                              4517 {t("shop.washington_manchester")}.
                            </td>
                          </tr>
                          <tr>
                            <td className="label-name p-2">
                              {t("shop.e_mail")}
                            </td>
                            <td className="seprator p-2">
                              <span>:</span>
                            </td>
                            <td className="p-2">johndeo@gmail.com</td>
                          </tr>
                          <tr>
                            <td className="label-name p-2">
                              {t("shop.phone")}
                            </td>
                            <td className="seprator p-2">
                              <span>:</span>
                            </td>
                            <td className="p-2">1234567890</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane className=" fade" eventKey="five">
                    <div className="text-body p-4">
                      <form>
                        <div className="form-group mb-5">
                          <label className="mb-2">
                            {t("shop.first_name")}&nbsp;{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            defaultValue="John"
                            className="form-control"
                            required="required"
                          />
                        </div>
                        <div className="form-group mb-5">
                          <label className="mb-2">
                            {t("shop.last_name")}&nbsp;{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            defaultValue="deo"
                            className="form-control"
                            required="required"
                          />
                        </div>
                        <div className="form-group mb-5">
                          <label className="mb-2">
                            {t("shop.display_name")}&nbsp;{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="display-name"
                            defaultValue="John"
                            className="form-control"
                            required="required"
                          />
                        </div>
                        <em className="d-block mb-5">
                          {t("shop.displayed_name")}
                        </em>
                        <div className="form-group mb-5">
                          <label className="mb-2">
                            {t("shop.email_address")}&nbsp;{" "}
                            {/* <span className="text-danger">*</span> */}
                          </label>
                          <input
                            type="email"
                            name="email"
                            defaultValue="johndeo@gmail.com"
                            className="form-control"
                            required="required"
                          />
                        </div>
                        <h4 className="fw-normal mb-5">
                          {t("shop.password_change")}
                        </h4>
                        <div className="form-group mb-5">
                          <label className="mb-2">
                            {t("shop.current_password")}
                          </label>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group mb-5">
                          <label className="mb-2">{t("shop.new_password")}</label>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group mb-5">
                          <label className="mb-2">
                            {t("shop.comfirm_password")}
                          </label>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <CustomButton
                            buttonTitle={t("shop.save_changes")}
                            link="#"
                            linkButton="false"
                          />
                        </div>
                      </form>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane className=" fade" eventKey="sixth">
                    <div className="p-4">
                      <div className="row">
                        <div className="col-md-6">
                          <h4 className="mb-5 text-primary">
                            {t("shop.login")}
                          </h4>
                          <Form method="post">
                            <div className="mb-4">
                              <input
                                type="text"
                                name="user-name"
                                className="form-control"
                                placeholder={t("form.username_or_email")}
                                required
                              />
                            </div>
                            <div className="mb-4">
                              <input
                                type="password"
                                name="pwd"
                                className="form-control"
                                placeholder={t("form.password")}
                                required
                              />
                            </div>
                            <label className="custom-form-field mb-5">
                              <input
                                type="checkbox"
                                required="required"
                                className="mr-2"
                              />
                              <span className="checkmark"></span>
                              <span>{t("shop.remember_me")}</span>
                            </label>
                            <CustomButton
                              buttonTitle={t("shop.login")}
                              link="#"
                              linkButton="false"
                            />
                          </Form>
                          <div className="mt-3">
                            <CustomButton
                              buttonTitle={t("shop.lost_password")}
                              link="#"
                              linkButton="true"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h4 className="mb-5 mt-5 mt-lg-0 mt-md-0 text-primary">
                            {t("shop.register")}
                          </h4>
                          <form method="post">
                            <div className="mb-4">
                              <input
                                type="text"
                                name="user-name"
                                placeholder={t("form.username")}
                                className="form-control"
                                required
                              />
                            </div>
                            <div className="mb-4">
                              <input
                                type="email"
                                name="email-address"
                                placeholder={t("shop.email_address")}
                                className="form-control"
                                required
                              />
                            </div>
                            <div className="mb-4">
                              <input
                                type="password"
                                name="password"
                                placeholder={t("form.password")}
                                className="form-control"
                                required
                              />
                            </div>
                            <p className="mb-5">
                              {" "}
                              {t("shop.user_personal_data")}{" "}
                              <Link to="/privacy-policy">
                                {" "}
                                {t("shop.privacy_policy")}
                              </Link>
                              .
                            </p>
                            <CustomButton
                              buttonTitle={t("shop.register")}
                              link="#"
                              linkButton="false"
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    </Fragment>
  );
});

MyAccount.displayName = "MyAccount";
export default MyAccount;
