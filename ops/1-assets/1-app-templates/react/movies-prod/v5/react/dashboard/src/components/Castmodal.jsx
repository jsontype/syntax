import React, { useState } from "react";

// react-bootstrap
import { Button, Modal, Row, Col, Form } from "react-bootstrap";

// components
import InputField from "./inputfield";

// the hook
import { useTranslation } from "react-i18next";

//choice js
import ChoicesJs from "../components/choices";

const CastCrewForm = () => {
  const { t } = useTranslation();

  const options1 = [
    { value: `${t('castmodal.cast')}`, label: `${t('castmodal.cast')}` },
    { value: `${t('castmodal.crew')}`, label: `${t('castmodal.crew')}` },
    { value: `${t('castmodal.production')}`, label: `${t('castmodal.production')}` },
    { value: `${t('castmodal.director')}`, label: `${t('castmodal.director')}` },
    { value: `${t('castmodal.actor')}`, label: `${t('castmodal.actor')}` },
  ];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Button onClick={handleShow}>
        <i className="fa-solid fa-square-plus me-2"></i>
        {t("castmodal.add")}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="h5">{t("castmodal.add")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit} className="section-form">
            <Row>
              <Col sm="12">
                <InputField
                  isLabel={true}
                  isRequired={true}
                  label="Person"
                  type="text"
                  placeholder="Enter Name"
                />
              </Col>
              <Col sm="12">
                <div className="form-group px-3 flex-column">
                  <label
                    className="form-label flex-grow-1"
                    htmlFor="occupation"
                  >
                    <strong>{t("castmodal.occupation")}:</strong>
                  </label>
                  {/* <select
                    id="occupation"
                    type="select"
                    className="form-control select2-basic-multiple"
                    placeholder="Select Occupation"
                  >
                    <option>{t("castmodal.cast")}</option>
                    <option>{t("castmodal.crew")}</option>
                    <option>{t("castmodal.production")}</option>
                    <option>{t("castmodal.director")}</option>
                    <option>{t("castmodal.actor")}</option>
                  </select> */}
                  <span className="choices iq-custom-select">
                    <ChoicesJs options={options1} className="js-choice" select="one" />
                  </span>
                </div>
              </Col>
              <Col sm="12">
                <InputField
                  isLabel={true}
                  label="As"
                  type="text"
                  placeholder="Played as"
                />
              </Col>
              <Col sm="12">
                <InputField
                  label="Status"
                  type="toggle"
                  placeholder=""
                  className="d-flex align-self-start justify-content-between"
                  name="status"
                />
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t("castmodal.close")}
          </Button>
          <Button variant="primary" onClick={handleClose}>
            {t("castmodal.save")}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CastCrewForm;
