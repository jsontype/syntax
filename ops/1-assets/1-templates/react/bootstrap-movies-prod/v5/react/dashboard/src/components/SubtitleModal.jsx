import React, { useState } from "react";

// react-bootstrap
import { Form, Button, Modal, Row, Col } from "react-bootstrap";

// components
import InputField from "./inputfield";

// the hook
import { useTranslation } from "react-i18next";

import ChoicesJs from "../components/choices";
const SubtitleModal = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const options1 = [
    { value: `${t('Datatable.hindi')}`, label: `${t('Datatable.hindi')}` },
    { value: `${t('Datatable.english')}`, label: `${t('Datatable.english')}` },
    { value: `${t('Datatable.french')}`, label: `${t('Datatable.french')}` },
    { value: `${t('Datatable.marathi')}`, label: `${t('Datatable.marathi')}` },
    { value: `${t('Datatable.gujrati')}`, label: `${t('Datatable.gujrati')}` },
  ];
  return (
    <>
      <Button onClick={handleShow}>
        <i className="fa-solid fa-square-plus me-2"></i>
        {t("Datatable.add_subtitle")}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="h5">{t("Datatable.add_subtitle")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col sm="12">
                <div className="form-group px-3 flex-column">
                  <label
                    className="form-label flex-grow-1"
                    htmlFor="occupation"
                  >
                    <strong>{t("Datatable.substitle")}:</strong>
                  </label>
                  <span className="choices iq-custom-select">
                    <ChoicesJs options={options1} className="js-choice" select="one" isMultiple={true} />
                  </span>
                </div>
              </Col>
              <Col sm="12">
                <InputField
                  isLabel={true}
                  isRequired={true}
                  label="File"
                  type="file"
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
    </>
  );
};

export default SubtitleModal;
