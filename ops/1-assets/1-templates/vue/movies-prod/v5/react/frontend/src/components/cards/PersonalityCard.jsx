import { Fragment, memo } from "react";

//react-router-dom
import { Link } from "react-router-dom";

const PersonalityCard = memo((props) => {
  return (
    <Fragment>
      <img
        src={props.image}
        alt="personality"
        className="img-fluid object-cover mb-4 rounded"
      />
      <div className="text-center">
        <h6 className="mb-0">
          <Link
            to={props.link}
            className="font-size-14 text-decoration-none cast-title text-capitalize"
          >
            {props.title}
          </Link>
        </h6>
        <Link
          to={props.categoryLink}
          className="font-size-14 text-decoration-none text-capitalize text-body"
        >
          {props.category}
        </Link>
      </div>
    </Fragment>
  );
});

PersonalityCard.displayName = "PersonalityCard";
export default PersonalityCard;
