import React, { useState } from "react";

// react-bootstrap
import { Form, Button, Modal, Row, Col } from "react-bootstrap";

// components
import InputField from "./inputfield";

// the hook
import { useTranslation } from "react-i18next";

const SubtitleModalEdit = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const options1 = [
    { value: `${t('castmodel.cast')}`, label: `${t('castmodel.cast')}` },
    { value: `${t('castmodel.crew')}`, label: `${t('castmodel.crew')}` },
    { value: `${t('castmodel.production')}`, label: `${t('castmodel.production')}` },
    { value: `${t('castmodel.director')}`, label: `${t('castmodel.director')}` },
    { value: `${t('castmodel.actor')}`, label: `${t('castmodel.actor')}` },
  ];

  return (
    <>
      <Button onClick={handleShow}>
        <i className="fa-solid fa-square-plus me-2"></i>
        {t("Datatable.edit_subtitle")}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h5 className="modal-title" id="subtitle-modal-label">{t("Datatable.edit_subtitle")}</h5>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col sm="12">
                <div className="form-group px-3 d-flex flex-column">
                  <label
                    className="form-label flex-grow-1"
                    htmlFor="occupation"
                  >
                    <strong>{t("castmodal.occupation")}:</strong>
                  </label>
                  <span className="choices iq-custom-select">
                          <ChoicesJs options={options1} className="js-choice" select="one" />
                  </span>
                </div>
              </Col>
              <Col sm="12">
                <InputField
                  isLabel={true}
                  isRequired={true}
                  label="Video"
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

export default SubtitleModalEdit;
