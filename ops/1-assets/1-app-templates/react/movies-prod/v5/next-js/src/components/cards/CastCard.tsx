import React, { Fragment, memo } from "react";

//react-router-dom
import Link from "next/link";

interface Props {
  image: string,
  title: string,
  category: string
}

const CastCard = memo((props: Props) => {
  return (
    <Fragment>
      <div className="iq-cast">
        <img src={props.image} alt={`cast-${props.title}`} loading="lazy" />
        <div className="card-img-overlay iq-cast-body">
          <h6 className="cast-title fw-500">
            <Link href="/cast/detail">{props.title}</Link>
          </h6>
          <span className="cast-subtitle">{props.category}</span>
        </div>
      </div>
    </Fragment>
  );
});

CastCard.displayName = "CastCard";
export default CastCard;
