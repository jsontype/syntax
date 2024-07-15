import { memo, Fragment } from "react";

const fillstar = (
  <span>
    <i className="fa fa-star" aria-hidden="true"></i>
  </span>
);

const unfill = (
  <span>
    <i className="fa fa-star"></i>
  </span>
);

const StarRating = memo(function StarRating({
  count,
  count1,
  starColor,
  inactiveColor = "text-white",
  activeColor = starColor,
  onChange,
}) {
  const stars = Array.from({ length: count }, () => fillstar);
  const stars1 = Array.from({ length: count1 }, () => unfill);

  const handleChange = (value) => {
    onChange(value + 1);
  };

  return (
    <div>
      {stars.map((s, index) => {
        let style = inactiveColor;
        if (index < count) {
          style = activeColor;
        }
        return (
          <span
            className={"star me-1 " + style}
            key={index}
            onClick={() => handleChange(index)}
          >
            {s}
          </span>
        );
      })}

      {stars1.map((s, index) => {
        let style;
        if (index < count1) {
          style = inactiveColor;
        }
        return (
          <span
            className={"star me-1 " + style}
            key={index}
            onClick={() => handleChange(index)}
          >
            {s}
          </span>
        );
      })}
    </div>
  );
});

const RatingStar = memo((props) => {
  return (
    <Fragment>
      <StarRating
        count1={props.count1}
        count={props.count}
        starColor={props.starColor}
      />
    </Fragment>
  );
});

RatingStar.displayName = "RatingStar";
export default RatingStar;
