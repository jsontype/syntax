import { Fragment, memo } from "react";

// react-router-dom
import { Link } from "react-router-dom";

const GenersCard = memo((props) => {
  return (
    <Fragment>
      <div className="iq-card-geners card-hover-style-two">
        <div className="block-images position-relative w-100">
          <div className="img-box rounded position-relative">
            <img
              src={props.image}
              alt="geners-img"
              className="img-fluid object-cover w-100 rounded"
            />
            <div className="blog-description">
              <h6 className="mb-0 iq-title">
                <Link
                  to={{
                    pathname: "/view-all",
                  }}
                  className="text-decoration-none text-capitalize line-count-2 p-2"
                >
                  {props.title}
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

GenersCard.displayName = "GenersCard";
export default GenersCard;
