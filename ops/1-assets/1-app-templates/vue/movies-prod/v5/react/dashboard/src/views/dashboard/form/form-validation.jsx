import { useState } from "react";

//react-bootstrap
import { Row, Col, Form, Button } from "react-bootstrap";

//components
import Card from "../../../components/bootstrap/card";

// the hook
import { useTranslation } from "react-i18next";

const FormValidation = () => {
  const { t } = useTranslation();
  //form validation
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  const [validated1, setValidated1] = useState(false);
  const handleSubmit1 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated1(true);
  };
  return (
    <Row>
      <Col sm="12" lg="6">
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">
                {t("formvalidation.default_validation")}
              </h4>
            </div>
          </Card.Header>
          <Card.Body>
            <p>{t("formvalidation.line_1")}</p>
            <Form>
              <Row>
                <Col md="6" className="mb-3">
                  <Form.Label md="6" htmlFor="validationDefault01">
                    {t("formvalidation.first_name")}
                  </Form.Label>
                  <Form.Control type="text" id="validationDefault01" required />
                </Col>
                <Col md="6" className="mb-3">
                  <Form.Label htmlFor="validationDefault02">
                    {t("formvalidation.last_name")}
                  </Form.Label>
                  <Form.Control type="text" id="validationDefault02" required />
                </Col>
                <Col md="6" className="mb-3">
                  <Form.Label htmlFor="validationCustomUsername">
                    {t("formvalidation.username")}
                  </Form.Label>
                  <Form.Group className="input-group form-group">
                    <span className="input-group-text" id="basic-addon1">
                      @
                    </span>
                    <Form.Control
                      type="text"
                      id="validationCustomUsername"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md="6" className="mb-3">
                  <Form.Label htmlFor="validationDefault03">
                    {t("formvalidation.city")}
                  </Form.Label>
                  <Form.Control type="text" id="validationDefault03" required />
                </Col>
                <Col md="6" className="mb-3">
                  <Form.Label htmlFor="validationDefault04">
                    {t("formvalidation.state")}
                  </Form.Label>
                  <Form.Select id="validationDefault04" required>
                    <option defaultValue>
                      {t("formvalidation.choose")}...
                    </option>
                    <option>...</option>
                  </Form.Select>
                </Col>
                <Col md="6" className="mb-3">
                  <Form.Label htmlFor="validationDefault05">
                    {t("formvalidation.zip")}
                  </Form.Label>
                  <Form.Control type="text" id="validationDefault05" required />
                </Col>
              </Row>
              <Form.Group>
                <Form.Check className="mb-3">
                  <Form.Check.Input
                    className=""
                    type="checkbox"
                    defaultValue
                    id="invalidCheck2"
                    required
                  />
                  <Form.Check.Label htmlFor="invalidCheck2">
                    {t("formvalidation.agree")}
                  </Form.Check.Label>
                </Form.Check>
              </Form.Group>
              <Form.Group>
                <Button variant="btn btn-primary" type="submit">
                  {t("formvalidation.submit")}
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title"> {t("formvalidation.supported")}</h4>
            </div>
          </Card.Header>
          <Card.Body>
            <p>{t("formvalidation.line_1")}</p>
            <Form className="was-validated" validated>
              <Form.Group className="form-group">
                <Form.Label htmlFor="validationTextarea" className="form-label">
                  {t("formvalidation.textarea")}
                </Form.Label>
                <Form.Control
                  as="textarea"
                  className="is-invalid"
                  id="validationTextarea"
                  placeholder="Required example textarea"
                  required
                />
                <div className="invalid-feedback">
                  {t("formvalidation.enter_message")}
                </div>
              </Form.Group>
              <Form.Check className="form-group">
                <Form.Check.Input
                  type="checkbox"
                  id="validationFormCheck1"
                  required
                />
                <Form.Check.Label htmlFor="validationFormCheck1">
                  {t("formvalidation.check_checkbox")}
                </Form.Check.Label>
                <div className="invalid-feedback">
                  {t("formvalidation.more_feedback")}
                </div>
              </Form.Check>
              <Form.Check>
                <Form.Check.Input
                  type="radio"
                  id="validationFormCheck2"
                  name="radio-stacked"
                  required
                />
                <Form.Check.Label htmlFor="validationFormCheck2">
                  {t("formvalidation.toggle")}
                </Form.Check.Label>
              </Form.Check>
              <Form.Check className="form-group">
                <Form.Check.Input
                  type="radio"
                  id="validationFormCheck3"
                  name="radio-stacked"
                  required
                />
                <Form.Check.Label htmlFor="validationFormCheck3">
                  {t("formvalidation.toggle_other")}
                </Form.Check.Label>
                <div className="invalid-feedback">
                  {t("formvalidation.more_example")}
                </div>
              </Form.Check>
              <Form.Group className="form-group">
                <Form.Select aria-label="Default select example" isInvalid>
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {t("formvalidation.invalid_feedback")}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-0">
                <Form.Control type="file" aria-label="file example" required />
                <div className="invalid-feedback">
                  {t("formvalidation.example_invalid")}
                </div>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Col sm="12" lg="6">
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">
                {t("formvalidation.custom_validation")}
              </h4>
            </div>
          </Card.Header>
          <Card.Body>
            <p>{t("formvalidation.line_1")}</p>
            <Form noValidate validated={validated} onClick={handleSubmit}>
              <Row className="g-3 needs-validation">
                <Col md="6">
                  <Form.Label htmlFor="validationCustom01">
                    {t("formvalidation.first_name")}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue=""
                    id="validationCustom01"
                    required
                  />
                  <Form.Control.Feedback>
                    {t("formvalidation.looks_good")}
                  </Form.Control.Feedback>
                </Col>
                <Col md="6">
                  <Form.Label htmlFor="validationCustom02">
                    {t("formvalidation.last_name")}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue=""
                    id="validationCustom02"
                    required
                  />
                  <Form.Control.Feedback>
                    {t("formvalidation.looks_good")}
                  </Form.Control.Feedback>
                </Col>
                <Col md="6">
                  <Form.Label htmlFor="validationCustomUsername01">
                    {t("formvalidation.username")}
                  </Form.Label>
                  <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend">
                      @
                    </span>
                    <Form.Control
                      type="text"
                      defaultValue=""
                      id="validationCustomUsername01"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      {t("formvalidation.username")}
                    </Form.Control.Feedback>
                  </div>
                </Col>
                <Col md="6">
                  <Form.Label htmlFor="validationCustom03">
                    {t("formvalidation.city")}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue=""
                    id="validationCustom03"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {t("formvalidation.city")}
                  </Form.Control.Feedback>
                </Col>
                <Col md="6">
                  <Form.Label htmlFor="validationDefault041">State</Form.Label>
                  <Form.Select id="validationDefault041" required>
                    <option defaultValue="">
                      {t("formvalidation.choose")}...
                    </option>
                    <option>...</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {t("formvalidation.valid_state")}
                  </Form.Control.Feedback>
                </Col>
                <Col md="6" className="">
                  <Form.Label htmlFor="validationCustom05">
                    {t("formvalidation.zip")}
                  </Form.Label>
                  <Form.Control
                    defaultValue=""
                    type="text"
                    id="validationCustom05"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {t("formvalidation.valid_zip")}
                  </Form.Control.Feedback>
                </Col>
                <div className="col-12">
                  <Form.Check className="">
                    <Form.Check.Input
                      className=""
                      type="checkbox"
                      defaultValue
                      id="invalidCheck"
                      required
                    />
                    <Form.Check.Label htmlFor="invalidCheck">
                      {t("formvalidation.agree")}
                    </Form.Check.Label>
                    <Form.Control.Feedback type="invalid">
                      {t("formvalidation.agree_submitting")}
                    </Form.Control.Feedback>
                  </Form.Check>
                </div>
                <div className="col-12">
                  <Button type="button">{t("formvalidation.submit")}</Button>
                </div>
              </Row>
            </Form>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">{t("formvalidation.tooltips")}</h4>
            </div>
          </Card.Header>
          <Card.Body>
            <p>{t("formvalidation.line_1")}</p>
            <Form
              validated={validated1}
              onClick={handleSubmit1}
              className="needs-validation"
              noValidate
            >
              <Row className="g-3 needs-validation">
                <Col md="6" className="position-relative">
                  <Form.Label htmlFor="validationTooltip01">
                    {t("formvalidation.first_name")}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="validationTooltip01"
                    defaultValue="Mark"
                    required
                  />
                  <Form.Control.Feedback tooltip>
                    {t("formvalidation.looks_good")}
                  </Form.Control.Feedback>
                </Col>
                <Col md="6" className="position-relative">
                  <Form.Label htmlFor="validationTooltip02">
                    {t("formvalidation.last_name")}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="validationTooltip02"
                    defaultValue="Otto"
                    required
                  />
                  <Form.Control.Feedback tooltip>
                    {t("formvalidation.looks_good")}
                  </Form.Control.Feedback>
                </Col>
                <Col md="6" className="position-relative">
                  <Form.Label htmlFor="validationTooltipUsername">
                    {t("formvalidation.username")}
                  </Form.Label>
                  <div className="input-group has-validation">
                    <span
                      className="input-group-text"
                      id="validationTooltipUsernamePrepend"
                    >
                      @
                    </span>
                    <Form.Control
                      defaultValue=""
                      type="text"
                      id="validationTooltipUsername"
                      aria-describedby="validationTooltipUsernamePrepend"
                      required
                    />
                    <Form.Control.Feedback tooltip type="invalid">
                      {t("formvalidation.username")}
                    </Form.Control.Feedback>
                  </div>
                </Col>
                <Col md="6" className="position-relative">
                  <Form.Label htmlFor="validationTooltip03">
                    {t("formvalidation.city")}
                  </Form.Label>
                  <Form.Control type="text" id="validationTooltip03" required />
                  <Form.Control.Feedback tooltip type="invalid">
                    {t("formvalidation.city")}
                  </Form.Control.Feedback>
                </Col>
                <Col md="6" className="position-relative">
                  <Form.Label htmlFor="validationTooltip04">
                    {t("formvalidation.state")}
                  </Form.Label>
                  <Form.Select id="validationTooltip04" required>
                    <option defaultValue>
                      {t("formvalidation.choose")}...
                    </option>
                    <option>...</option>
                  </Form.Select>
                  <Form.Control.Feedback tooltip type="invalid">
                    {t("formvalidation.valid_state")}
                  </Form.Control.Feedback>
                </Col>
                <Col md="6" className="position-relative">
                  <Form.Label htmlFor="validationTooltip05">
                    {t("formvalidation.zip")}
                  </Form.Label>
                  <Form.Control
                    defaultValue=""
                    type="text"
                    id="validationTooltip05"
                    required
                  />
                  <Form.Control.Feedback tooltip type="invalid">
                    {t("formvalidation.valid_zip")}
                  </Form.Control.Feedback>
                </Col>
                <div className="col-12">
                  <Button variant="btn btn-primary" type="button">
                    {t("formvalidation.submit")}
                  </Button>
                </div>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default FormValidation;
