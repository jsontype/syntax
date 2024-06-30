import React from "react";

//react-bootstrap
import { Row, Col, Form, Button } from "react-bootstrap";

//components
import Card from "../../../components/bootstrap/card";

// the hook
import { useTranslation } from "react-i18next";

const FormElement = () => {
  const { t } = useTranslation();
  return (
    <Row>
      <Col sm="12" lg="6">
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">{t("formelement.basic_form")}</h4>
            </div>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="form-group">
                <Form.Label htmlFor="email">
                  {t("formelement.email_address")}:
                </Form.Label>
                <Form.Control type="email" id="email1" />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label htmlFor="pwd">
                  {t("formelement.password")}:
                </Form.Label>
                <Form.Control type="password" id="pwd" />
              </Form.Group>
              <div className="checkbox mb-3">
                <Form.Check className="form-check ">
                  <Form.Check.Input type="checkbox" id="flexCheckDefault3" />
                  <Form.Check.Label htmlFor="flexCheckDefault3">
                    {t("formelement.remember_me")}
                  </Form.Check.Label>
                </Form.Check>
              </div>
              <Button type="button" variant="btn btn-primary">
                {t("formelement.submit")}
              </Button>{" "}
              <Button type="button" variant="btn btn-danger">
                {t("formelement.cancel")}
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">{t("formelement.form_grid")}</h4>
            </div>
          </Card.Header>
          <Card.Body>
            <Form>
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder={t("formelement.first_name")}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder={t("formelement.last_name")}
                  />
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">{t("formelement.input")}</h4>
            </div>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="form-group">
                <Form.Label htmlFor="exampleInputText1">
                  {t("formelement.input_text")}
                </Form.Label>
                <Form.Control
                  type="text"
                  id="exampleInputText1"
                  defaultValue="Mark Jhon"
                  placeholder="Enter Name"
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label htmlFor="exampleInputEmail3">
                  {t("formelement.email_input")}
                </Form.Label>
                <Form.Control
                  type="email"
                  id="exampleInputEmail3"
                  defaultValue="markjhon@gmail.com"
                  placeholder="Enter Email"
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label htmlFor="exampleInputurl">
                  {t("formelement.url_input")}
                </Form.Label>
                <Form.Control
                  type="url"
                  id="exampleInputurl"
                  defaultValue="https://getbootstrap.com"
                  placeholder="Enter Url"
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label htmlFor="exampleInputphone">
                  {t("formelement.teliphone_input")}
                </Form.Label>
                <Form.Control
                  type="tel"
                  id="exampleInputphone"
                  defaultValue="1-(555)-555-5555"
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label htmlFor="exampleInputNumber1">
                  {t("formelement.number_input")}
                </Form.Label>
                <Form.Control
                  type="number"
                  id="exampleInputNumber1"
                  defaultValue="2356"
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label htmlFor="exampleInputPassword3">
                  {t("formelement.password_input")}
                </Form.Label>
                <Form.Control
                  type="password"
                  id="exampleInputPassword3"
                  defaultValue="markjhon123"
                  placeholder="Enter Password"
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label htmlFor="exampleInputdate">
                  {t("formelement.date_input")}
                </Form.Label>
                <Form.Control
                  type="date"
                  id="exampleInputdate"
                  defaultValue="2019-12-18"
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label htmlFor="exampleInputmonth">
                  {t("formelement.month_input")}
                </Form.Label>
                <Form.Control
                  type="month"
                  id="exampleInputmonth"
                  defaultValue="2019-12"
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label htmlFor="exampleInputweek">
                  {t("formelement.week_input")}
                </Form.Label>
                <Form.Control
                  type="week"
                  id="exampleInputweek"
                  defaultValue="2019-W46"
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label htmlFor="exampleInputtime">
                  {t("formelement.time_input")}
                </Form.Label>
                <Form.Control
                  type="time"
                  id="exampleInputtime"
                  defaultValue="13:45"
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label htmlFor="exampleInputdatetime">
                  {t("formelement.date_time")}
                </Form.Label>
                <Form.Control
                  type="datetime-local"
                  id="exampleInputdatetime"
                  defaultValue="2019-12-19T13:45:00"
                />
              </Form.Group>
              <Form.Group className="mb-3 form-group">
                <Form.Label htmlFor="exampleFormControlTextarea1">
                  {t("formelement.example_textarea")}
                </Form.Label>
                <Form.Control
                  as="textarea"
                  id="exampleFormControlTextarea1"
                  rows="5"
                />
              </Form.Group>
              <Button type="button" variant="btn btn-primary">
                {t("formelement.submit")}
              </Button>{" "}
              <Button type="button" variant="btn btn-danger">
                {t("formelement.cancel")}
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">{t("formelement.input_size")}</h4>
            </div>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="form-group">
                <Form.Label htmlFor="colFormLabelSm">
                  {t("formelement.small")}
                </Form.Label>
                <Form.Control
                  type="email"
                  className=" form-control-sm"
                  id="colFormLabelSm"
                  placeholder="form-control-sm"
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label htmlFor="colFormLabel">
                  {t("formelement.default")}
                </Form.Label>
                <Form.Control
                  type="email"
                  id="colFormLabel"
                  placeholder="form-control"
                />
              </Form.Group>
              <Form.Group className=" mb-0 form-group">
                <Form.Label className="pb-0" htmlFor="colFormLabelLg">
                  {t("formelement.large")}
                </Form.Label>
                <Form.Control
                  type="email"
                  className="form-control-lg"
                  id="colFormLabelLg"
                  placeholder="form-control-lg"
                />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">{t("formelement.select_size")}</h4>
            </div>
          </Card.Header>
          <Card.Body>
            <Form.Group className="form-group">
              <Form.Label>{t("formelement.small")}</Form.Label>
              <select className="form-select form-select-sm mb-3 shadow-none">
                <option>{t("formelement.open_menu")}</option>
                <option value="1">{t("formelement.one")}</option>
                <option value="2">{t("formelement.two")}</option>
                <option value="3">{t("formelement.three")}</option>
              </select>
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label>{t("formelement.default")}</Form.Label>
              <select className="form-select mb-3 shadow-none">
                <option>{t("formelement.open_menu")}</option>
                <option value="1">{t("formelement.one")}</option>
                <option value="2">{t("formelement.two")}</option>
                <option value="3">{t("formelement.three")}</option>
              </select>
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label>{t("formelement.large")}</Form.Label>
              <select className="form-select form-select-lg shadow-none">
                <option>{t("formelement.open_menu")}</option>
                <option value="1">{t("formelement.one")}</option>
                <option value="2">{t("formelement.two")}</option>
                <option value="3">{t("formelement.three")}</option>
              </select>
            </Form.Group>
          </Card.Body>
        </Card>
      </Col>
      <Col sm="12" lg="6">
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">{t("formelement.horizontal_form")}</h4>
            </div>
          </Card.Header>
          <Card.Body>
            <Form className="form-horizontal" action="/action_page.php">
              <Form.Group as={Row} className="form-group">
                <Form.Label
                  column
                  sm="3"
                  className="control-label align-self-center mb-0"
                  htmlFor="email"
                >
                  {t("formelement.email")}:
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="email"
                    placeholder={t("formelement.enter_email")}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="form-group">
                <Form.Label
                  column
                  sm="3"
                  className="control-label  align-self-center mb-0"
                  htmlFor="pwd1"
                >
                  {t("formelement.password")}:
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="password"
                    placeholder={t("formelement.enter_password")}
                  />
                </Col>
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Check className="mb-3">
                  <Form.Check.Input
                    type="checkbox"

                    id="flexCheckDefault"
                  />
                  <Form.Check.Label htmlFor="flexCheckDefault">
                    {t("formelement.remember_me")}
                  </Form.Check.Label>
                </Form.Check>
              </Form.Group>
              <Form.Group className="form-group">
                <Button type="button" variant="btn btn-primary">
                  {t("formelement.submit")}
                </Button>{" "}
                <Button type="button" variant="btn btn-danger">
                  {t("formelement.cancel")}
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
        {/* <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Form row</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col>
                    <Form.Control type="text" placeholder="First name" />
                  </Col>
                  <Col>
                    <Form.Control type="text" placeholder="Last name" />
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card> */}
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">{t("formelement.input")}</h4>
            </div>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="form-group">
                <Form.Label htmlFor="exampleInputDisabled1">
                  {t("formelement.disabled_input")}
                </Form.Label>
                <Form.Control
                  type="text"
                  id="exampleInputDisabled1"
                  disabled
                  defaultValue="Mark Jhon"
                />
              </Form.Group>
            </Form>
            <Card.Body>
              <Form className="form-horizontal" action="/action_page.php">
                <Form.Group as={Row} className="form-group">
                  <Form.Label
                    column
                    sm="3"
                    className="control-label align-self-center mb-0"
                    htmlFor="email"
                  >
                    {t("formelement.email")}:
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      type="email"
                      placeholder="Enter Your  email"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="form-group">
                  <Form.Label
                    column
                    sm="3"
                    className="control-label align-self-center mb-0"
                    htmlFor="pwd1"
                  >
                    {t("formelement.password")}:
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      type="password"
                      placeholder="Enter Your password"
                    />
                  </Col>
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Check className="mb-3">
                    <Form.Check.Input
                      type="checkbox"

                      id="flexCheckDefault1"
                    />
                    <Form.Check.Label htmlFor="flexCheckDefault1">
                      {t("formelement.remember_me")}
                    </Form.Check.Label>
                  </Form.Check>
                </Form.Group>
                <Form.Group className="form-group">
                  <Button type="button" variant="btn btn-primary">
                    {t("formelement.submit")}
                  </Button>{" "}
                  <Button type="button" variant="btn btn-danger">
                    {t("formelement.cancel")}
                  </Button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">{t("formelement.form_row")}</h4>
            </div>
          </Card.Header>
          <Card.Body>
            <Form.Group className="form-group">
              <Form.Label htmlFor="exampleInputReadonly">
                {t("formelement.readonly")}
              </Form.Label>
              <Form.Control
                type="text"
                id="exampleInputReadonly"
                disabled
                defaultValue="Mark Jhon"
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label className="form-label" htmlFor="exampleInputcolor">
                {t("formelement.input_color")}{" "}
              </Form.Label>
              <input
                type="color"
                className="form-control w-100 "
                id="exampleInputcolor"
                defaultValue="#50b5ff"
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label htmlFor="exampleFormControlSelect1">
                {t("formelement.select_input1")}
              </Form.Label>
              <select className="form-select" id="exampleFormControlSelect1">
                <option>{t("formelement.select_age")}</option>
                <option>0-18</option>
                <option>18-26</option>
                <option>26-46</option>
                <option>46-60</option>
                <option>Above 60</option>
              </select>
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label htmlFor="choices-single-default">
                {t("formelement.select_input")}
              </Form.Label>
              <select
                className="form-select"
                data-trigger
                name="choices-single-default"
                id="choices-single-default"
              >
                <option>{t("formelement.this_placeholder")}</option>
                <option value="Choice 1">
                  {t("formelement.this_placeholder")}
                </option>
                <option value="Choice 2">{t("formelement.choice_2")}</option>
                <option value="Choice 3">{t("formelement.choice_3")}</option>
              </select>
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label htmlFor="choices-multiple-default">
                {t("formelement.default")}
              </Form.Label>
              <select
                className="form-select"
                data-trigger
                name="choices-multiple-default"
                id="choices-multiple-default"
                multiple
              >
                <option defaultValue>{t("formelement.choice_1")}</option>
                <option value="Choice 2">{t("formelement.choice_2")}</option>
                <option value="Choice 3">{t("formelement.choice_3")}</option>
                <option value="Choice 4" disabled>
                  {t("formelement.choice_4")}
                </option>
              </select>
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label htmlFor="exampleFormControlSelect2">
                {t("formelement.example_multiple")}
              </Form.Label>
              <select
                className="form-select"
                data-trigger
                name="choices-multiple-default"
                id="choices-multiple-default"
                multiple
              >
                <option>{t("formelement.select_1")}</option>
                <option>{t("formelement.select_2")}</option>
                <option>{t("formelement.select_3")}</option>
                <option>{t("formelement.select_4")}</option>
                <option>{t("formelement.select_5")}</option>
                <option>{t("formelement.select_6")}</option>
                <option>{t("formelement.select_7")}</option>
                <option>{t("formelement.select_8")}</option>
              </select>
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label htmlFor="customRange1">
                {t("formelement.range_input")}
              </Form.Label>
              <Form.Range id="customRange1" />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Check className="d-block">
                <Form.Check.Input

                  type="checkbox"
                  id="flexCheckDefault"
                />
                <Form.Check.Label htmlFor="flexCheckDefault">
                  {t("formelement.default_checkbox")}
                </Form.Check.Label>
              </Form.Check>
              <Form.Check className="form-check d-block">
                <Form.Check.Input
                  type="checkbox"
                  id="flexCheckChecked"
                  defaultChecked
                />
                <Form.Check.Label htmlFor="flexCheckChecked">
                  {t("formelement.checked_checkbox")}
                </Form.Check.Label>
              </Form.Check>
              <Form.Check className="form-check d-block">
                <Form.Check.Input
                  type="checkbox"
                  id="flexCheckDisabled"
                  disabled
                />
                <Form.Check.Label htmlFor="flexCheckDisabled">
                  {t("formelement.disabled_checkbox")}
                </Form.Check.Label>
              </Form.Check>
              <Form.Check className="d-block">
                <Form.Check.Input

                  type="checkbox"
                  id="flexCheckCheckedDisabled"
                  defaultChecked
                  disabled
                />
                <Form.Check.Label htmlFor="flexCheckCheckedDisabled">
                  {t("formelement.disabled_checked_checkbox")}
                </Form.Check.Label>
              </Form.Check>
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Check className="d-block">
                <Form.Check.Input

                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <Form.Check.Label htmlFor="flexRadioDefault1">
                  {t("formelement.default_radio")}
                </Form.Check.Label>
              </Form.Check>
              <Form.Check className="d-block">
                <Form.Check.Input

                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  defaultChecked
                />
                <Form.Check.Label htmlFor="flexRadioDefault2">
                  {t("formelement.default_checked_radio")}
                </Form.Check.Label>
              </Form.Check>
              <Form.Check className="d-block">
                <Form.Check.Input
                  type="radio"
                  name="flexRadioDisabled"
                  id="flexRadioDisabled"
                  disabled
                />
                <Form.Check.Label htmlFor="flexRadioDisabled">
                  {t("formelement.disabled_radio")}
                </Form.Check.Label>
              </Form.Check>
              <Form.Check className="d-block">
                <Form.Check.Input

                  type="radio"
                  name="flexRadioDisabled"
                  id="flexRadioCheckedDisabled"
                  defaultChecked
                  disabled
                />
                <Form.Check.Label htmlFor="flexRadioCheckedDisabled">
                  {t("formelement.disabled_checked_radio")}
                </Form.Check.Label>
              </Form.Check>
              <Form.Check className="form-radio">
                <Form.Check.Input
                  type="radio"
                  id="customRadio5"
                  name="customRadio5"
                  disabled
                  defaultChecked
                />
                <Form.Check.Label htmlFor="customRadio5">

                  {t("formelement.selected_disabled_radio")}
                </Form.Check.Label>
              </Form.Check>
            </Form.Group>
            <Form.Group className="form-group">
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="customRadio6"
                  name="customRadio1"
                  className="custom-control-input"
                />{" "}
                <label
                  className="custom-control-label"
                  htmlFor="customRadio6"
                >
                  {t("formelement.default_radio")}
                </label>
              </div>
              <Form.Group className="form-group">
                <Form.Check className="d-block">
                  <Form.Check.Input

                    type="checkbox"
                    id="flexCheckDefault2"
                  />
                  <Form.Check.Label htmlFor="flexCheckDefault2">
                    {t("formelement.default_checkbox")}
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check className="d-block">
                  <Form.Check.Input

                    type="checkbox"
                    id="flexCheckChecked"
                    defaultChecked
                  />
                  <Form.Check.Label htmlFor="flexCheckChecked">
                    {t("formelement.checked_checkbox")}
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check className="d-block">
                  <Form.Check.Input

                    type="checkbox"
                    id="flexCheckDisabled"
                    disabled
                  />
                  <Form.Check.Label htmlFor="flexCheckDisabled">
                    {t("formelement.disabled_checkbox")}
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check className="d-block">
                  <Form.Check.Input

                    type="checkbox"
                    id="flexCheckCheckedDisabled"
                    defaultChecked
                    disabled
                  />
                  <Form.Check.Label htmlFor="flexCheckCheckedDisabled">
                    {t("formelement.disabled_checked_checkbox")}
                  </Form.Check.Label>
                </Form.Check>
              </Form.Group>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadio8" name="customRadio6" className="custom-control-input" defaultChecked />{" "}
                <label
                  className="custom-control-label"
                  htmlFor="customRadio8"
                >
                  {" "}
                  {t("formelement.selected_radio")}
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadio8" name="customRadio6" className="custom-control-input" />{" "}
                <label
                  className="custom-control-label"
                  htmlFor="customRadio9"
                >
                  {" "}
                  {t("formelement.disabled_radio")}
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadio10" name="customRadio8" className="custom-control-input" disabled checked />{" "}
                <label className="custom-control-label" htmlFor="customRadio10"> Selected and  disabled radio</label>
              </div>
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Check className="form-switch">
                <Form.Check.Input
                  type="checkbox"

                  id="flexSwitchCheckDefault"
                />
                <Form.Check.Label htmlFor="flexSwitchCheckDefault">
                  {t("formelement.default_input")}
                </Form.Check.Label>
              </Form.Check>
              <Form.Group>
                <Form.Label className="custom-file-input">
                  {t("formelement.choose_file")}
                </Form.Label>
                <Form.Control type="file" id="customFile1" />
              </Form.Group>
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label className="custom-file-input">
                {t("formelement.example_file")}
              </Form.Label>
              <Form.Control type="file" id="customFile" />
            </Form.Group>
            <Form.Group className="mb-3 form-group">
              <Form.Label className="custom-file-input">
                {t("formelement.choose_file")}
              </Form.Label>
              <Form.Control type="file" id="customFile" />
            </Form.Group>
            <Button type="button">{t("formelement.submit")}</Button>{" "}
            <Button type="button" className="btn btn-danger">{t("formelement.cancel")}</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default FormElement;
