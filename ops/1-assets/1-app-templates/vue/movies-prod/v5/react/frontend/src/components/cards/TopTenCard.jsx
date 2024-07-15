import { Fragment, memo } from "react";

//react-router-dom
import { Link } from "react-router-dom";

const TopTenCard = memo((props) => {
  return (
   <Fragment>
    <div className="iq-top-ten-block">
      <div className="block-image position-relative">
        <div className="img-box">
          <Link className="overly-images" to={props.link}>
            <img
              src={props.imagePath}
              alt="movie-card"
              className="img-fluid object-cover"
            />
          </Link>
          <span className="top-ten-numbers texture-text">{props.countValue}</span>
        </div>
      </div>
    </div>
   </Fragment> 
  );
});

TopTenCard.displayName = "TopTenCard";
export default TopTenCard;
