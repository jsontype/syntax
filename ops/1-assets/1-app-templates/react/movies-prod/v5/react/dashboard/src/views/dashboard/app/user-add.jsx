import { memo, Fragment } from "react";

//react-bootstrap
import { Row, Col, Image, Form, Button } from "react-bootstrap";

//components
import Card from "../../../components/bootstrap/card";

//router
import { Link } from "react-router-dom";

// img
import avatars1 from "/assets/images/avatars/01.png";
import avatars2 from "/assets/images/avatars/avtar_1.png";
import avatars3 from "/assets/images/avatars/avtar_2.png";
import avatars4 from "/assets/images/avatars/avtar_3.png";
import avatars5 from "/assets/images/avatars/avtar_4.png";
import avatars6 from "/assets/images/avatars/avtar_5.png";

// the hook
import { useTranslation } from "react-i18next";

const UserAdd = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Row>
        <Col xl="3" lg="4" className="">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">{t("useradd.add_user")}</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="form-group">
                  <div className="profile-img-edit position-relative">
                    <Image
                      className="theme-color-default-img  profile-pic rounded avatar-100"
                      src={avatars1}
                      alt="profile-pic"
                    />
                    <Image
                      className="theme-color-blue-img profile-pic rounded avatar-100"
                      src={avatars2}
                      alt="profile-pic"
                    />
                    <Image
                      className="theme-color-green-img profile-pic rounded avatar-100"
                      src={avatars3}
                      alt="profile-pic"
                    />
                    <Image
                      className="theme-color-royal-blue-img profile-pic rounded avatar-100"
                      src={avatars5}
                      alt="profile-pic"
                    />
                    <Image
                      className="theme-color-red-img profile-pic rounded avatar-100"
                      src={avatars6}
                      alt="profile-pic"
                    />
                    <Image
                      className="theme-color-pink-img profile-pic rounded avatar-100"
                      src={avatars4}
                      alt="profile-pic"
                    />
                    <div className="upload-icone bg-primary">
                      <svg
                        className="upload-button"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#ffffff"
                          d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
                        />
                      </svg>
                      <Form.Control
                        className="file-upload"
                        type="file"
                        accept="image/*"
                      />
                    </div>
                  </div>
                  <div className="img-extension mt-3">
                    <div className="d-inline-block align-items-center">
                      <span>{t("useradd.only")}</span>{" "}
                      <Link to="#">.{t("useradd.jpg")}</Link>{" "}
                      <Link to="#">.{t("useradd.png")}</Link>{" "}
                      <Link to="#">.{t("useradd.jpeg")}</Link>{" "}
                      <span>{t("useradd.allowed")}</span>
                    </div>
                  </div>
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Label>{t("useradd.user_role")}:</Form.Label>
                  <select
                    name="type"
                    className="selectpicker form-control"
                    data-style="py-0"
                  >
                    <option>{t("useradd.select")}</option>
                    <option>{t("useradd.web_designer")}</option>
                    <option>{t("useradd.web_developer")}</option>
                    <option>{t("useradd.tester")}</option>
                    <option>{t("useradd.php_developer")}</option>
                    <option>{t("useradd.ios_developer")}</option>
                  </select>
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Label htmlFor="furl">
                    {t("useradd.facebook_url")}:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="furl"
                    placeholder="Facebook Url"
                  />
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Label htmlFor="turl">
                    {t("useradd.twitter_url")}:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="turl"
                    placeholder="Twitter Url"
                  />
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Label htmlFor="instaurl">
                    {t("useradd.instagram_url")}:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="instaurl"
                    placeholder="Instagram Url"
                  />
                </Form.Group>
                <Form.Group className="mb-0 form-group">
                  <Form.Label htmlFor="lurl">
                    {t("useradd.linkedin_url")}:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="lurl"
                    placeholder="Linkedin Url"
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col xl="9" lg="8">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">{t("useradd.user_information")}</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="new-user-info">
                <Form>
                  <div className="row">
                    <Form.Group className="col-md-6 form-group">
                      <Form.Label htmlFor="fname">
                        {t("useradd.first_name")}:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="fname"
                        placeholder="First Name"
                      />
                    </Form.Group>
                    <Form.Group className="col-md-6 form-group">
                      <Form.Label htmlFor="lname">
                        {t("useradd.last_name")}:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="lname"
                        placeholder="Last Name"
                      />
                    </Form.Group>
                    <Form.Group className="col-md-6 form-group">
                      <Form.Label htmlFor="add1">
                        {t("useradd.street_address")} 1:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="add1"
                        placeholder="Street Address 1"
                      />
                    </Form.Group>
                    <Form.Group className="col-md-6 form-group">
                      <Form.Label htmlFor="add2">
                        {t("useradd.street_address")} 2:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="add2"
                        placeholder="Street Address 2"
                      />
                    </Form.Group>
                    <Form.Group className="col-md-12 form-group">
                      <Form.Label htmlFor="cname">
                        {t("useradd.company_name")}:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="cname"
                        placeholder="Company Name"
                      />
                    </Form.Group>
                    <Form.Group className="col-sm-12 form-group">
                      <Form.Label>{t("useradd.country")}:</Form.Label>
                      <select
                        name="type"
                        className="selectpicker form-control"
                        data-style="py-0"
                      >
                        <option>{t("useradd.select_country")}</option>
                        <option>{t("useradd.canada")}</option>
                        <option>{t("useradd.noida")}</option>
                        <option>{t("useradd.usa")}</option>
                        <option>{t("useradd.india")}</option>
                        <option>{t("useradd.africa")}</option>
                      </select>
                    </Form.Group>
                    <Form.Group className="col-md-6  form-group">
                      <Form.Label htmlFor="mobno">
                        {t("useradd.mobile_number")}:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="mobno"
                        placeholder="Mobile Number"
                      />
                    </Form.Group>
                    <Form.Group className="col-md-6  form-group">
                      <Form.Label htmlFor="altconno">
                        {t("useradd.alternate_contact")}:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="altconno"
                        placeholder="Alternate Contact"
                      />
                    </Form.Group>
                    <Form.Group className="col-md-6  form-group">
                      <Form.Label htmlFor="email">
                        {t("useradd.email")}:
                      </Form.Label>
                      <Form.Control
                        type="email"
                        id="email"
                        placeholder="Email"
                      />
                    </Form.Group>
                    <Form.Group className="col-md-6 form-group">
                      <Form.Label htmlFor="pno">
                        {t("useradd.pin_code")}:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="pno"
                        placeholder="Pin Code"
                      />
                    </Form.Group>
                    <Form.Group className="col-md-12 form-group">
                      <Form.Label htmlFor="city">
                        {t("useradd.town_city")}:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="city"
                        placeholder="Town/City"
                      />
                    </Form.Group>
                  </div>
                  <hr />
                  <h5 className="mb-3">{t("useradd.security")}</h5>
                  <div className="row">
                    <Form.Group className="col-md-12 form-group">
                      <Form.Label htmlFor="uname">
                        {t("useradd.user_name")}:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="uname"
                        placeholder="User Name"
                      />
                    </Form.Group>
                    <Form.Group className="col-md-6 form-group">
                      <Form.Label htmlFor="pass">
                        {t("useradd.password")}:
                      </Form.Label>
                      <Form.Control
                        type="password"
                        id="pass"
                        placeholder="Password"
                      />
                    </Form.Group>
                    <Form.Group className="col-md-6 form-group">
                      <Form.Label htmlFor="rpass">
                        {t("useradd.repeat_password")}:
                      </Form.Label>
                      <Form.Control
                        type="password"
                        id="rpass"
                        placeholder="Repeat Password "
                      />
                    </Form.Group>
                  </div>
                  <div className="checkbox">
                    <label className="form-label">
                      <input
                        type="checkbox"
                        className="me-2 form-check-input"
                        value=""
                        id="flexCheckChecked"
                      />
                      {t("useradd.factor_authentication")}
                    </label>
                  </div>
                  <Button type="button" variant="btn btn-primary">
                    {t("useradd.add_new")}
                  </Button>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

UserAdd.displayName = "UserAdd";
export default UserAdd;
