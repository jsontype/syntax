import React, { Fragment, memo } from "react";

//react-bootstrap
import { Button, Col, Form, Row } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";
// the hook
import { useTranslation } from "react-i18next";

const FormWidget = memo((props) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Row className="blog-nav">
        <Col lg="6" className="blog-prev-post mb-5 mb-lg-0 border-end">
          <Link to={props.prevLink ? `${props.prevLink}` : "/blog-template"}>
            <div className="blog-arrow font-size-14 fw-normal mb-3">
              <i className="fas fa-arrow-left"></i>
              <span className="previous fw-medium fst-italic">
                {" "}
                {t("form.previous_post")}
              </span>
            </div>
            <span className="fw-semibold text-white">
              {t("form.amy_admas")}
            </span>
          </Link>
        </Col>
        <Col lg="6" className="blog-next-post text-start text-lg-end">
          <Link to={props.nextLink ? `${props.nextLink}` : "/blog-single/audio"}>
            <div className="blog-arrow font-size-14 fw-normal mb-3">
              <span className="next fw-medium fst-italic">
                {" "}
                {t("form.next_post")}
              </span>{" "}
              <i className="fas fa-arrow-right"></i>
            </div>
            <span className="fw-semibold text-white">
              {t("form.gillian_shares")}
            </span>
          </Link>
        </Col>
      </Row>
      <Form>
        <h4 className="fw-500 mb-3">{t("form.leave_reply")}</h4>
        <p className="mb-4">
          {t("form.logged_jenny")}{" "}
          <span className="text-primary">{t("form.edit_profile")}{" "}</span>
          {t("form.require_fields")} *
        </p>
        <Row>
          <Col md="12">
            <Form.Group className="form-group">
              <textarea
                className="form-control"
                name="comment"
                cols={5}
                rows={8}
                required
                placeholder={t('blogs.comment')}
              ></textarea>
            </Form.Group>
          </Col>
          <Col md="12">
            <div className="form-submit mt-4">
              <div className="iq-button">
                <Button
                  name="submit"
                  type="submit"
                  id="submit"
                  className="btn text-uppercase position-relative"
                >
                  <span className="button-text">{t("form.post_comment")}</span>{" "}
                  <i className="fa-solid fa-play"></i>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
});

FormWidget.displayName = "FormWidget";
export default FormWidget;
