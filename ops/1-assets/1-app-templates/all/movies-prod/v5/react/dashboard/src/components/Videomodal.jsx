import React, { useState } from "react";

// react-bootstrap
import { Button, Modal, Row, Col } from "react-bootstrap";

// components
import InputField from "./inputfield";

// the hook
import { useTranslation } from "react-i18next";

import ChoicesJs from "../components/choices";

const VideoModal = () => {
  const { t } = useTranslation();

  const options1 = [
    { value: "480p", label: "480p" },
    { value: "720p", label: "720p" },
    { value: "1080p", label: "1080p" },
  ];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>
        <i className="fa-solid fa-square-plus me-2"></i>
        {t("castmodal.add_video")}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="h5">{t("castmodal.add_video")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <Row className="row">
              <Col sm="12">
                <div className="form-group px-3 flex-column">
                  <label className="form-label flex-grow-1" htmlFor="quality">
                    <strong>{t("castmodal.quality")}:</strong>
                  </label>
                  {/* <select
                    defaultValue="1"
                    id="quality"
                    type="select"
                    className="form-control select2-basic-multiple"
                    placeholder="Select Quality"
                  >
                    <option value="1">480p</option>
                    <option value="2">720p</option>
                    <option value="3">1080p</option>
                  </select> */}
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
              <Col sm="12">
                <InputField
                  label="Download Link "
                  type="toggle"
                  placeholder=""
                  className="d-flex align-self-start justify-content-between"
                  name="Download Link "
                />
              </Col>
            </Row>
          </form>
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

export default VideoModal;
