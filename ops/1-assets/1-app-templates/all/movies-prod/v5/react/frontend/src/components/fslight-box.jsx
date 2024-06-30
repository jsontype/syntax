import React, { memo, Fragment } from "react";

// // react-bootstrap
import { Col } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";


// the hook
import { useTranslation } from "react-i18next";

const FsLightBoxComponent = memo((props) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Col
        md="3"
        className="trailor-video  col-12 mt-lg-0 mt-4 mb-md-0 mb-1 text-lg-right"
      >
        <Link
          to="#"
          className="video-open playbtn block-images position-relative playbtn_thumbnail"
          onClick={props.handleToggle}
        >
          <img
            src={props.image}
            className="attachment-medium-large size-medium-large wp-post-image"
            alt=""
            loading="lazy"
          />
          <span className="content btn btn-transparant iq-button">
            <i className="fa fa-play me-2 text-white" onClick={props.handleToggle}></i>
            <span onClick={props.handleToggle}>{t('detail_page.trailer_link')}</span>
          </span>
        </Link>
      </Col>
    </Fragment>
  );
});
FsLightBoxComponent.displayName = "FsLightBoxComponent";
export default FsLightBoxComponent;
