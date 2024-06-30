import React, { Fragment, memo } from "react";

// react-router-dom
import { Link } from "react-router-dom";

const TagsCard = memo((props) => {
  return (
    <Fragment>
      <Link to="/view-all" className="iq-tag-box">
        <span className="iq-tag">{props.title}</span>
      </Link>
    </Fragment>
  );
});

TagsCard.displayName = "TagsCard";
export default TagsCard;
