import React, { Fragment, memo } from "react";

//react-router-dom
import { Link } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";

const CastCard = memo((props) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div className="iq-cast">
        <img src={props.image} alt={`cast-${props.title}`} loading="lazy" />
        <div className="card-img-overlay iq-cast-body">
          <h6 className="cast-title fw-500">
            <Link to="/cast-detail">{t(props.title)}</Link>
          </h6>
          <span className="cast-subtitle">{t(props.category)}</span>
        </div>
      </div>
    </Fragment>
  );
});

CastCard.displayName = "CastCard";
export default CastCard;
