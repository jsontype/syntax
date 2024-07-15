import { memo, Fragment } from 'react'

const fillstar = <span><i className="fa fa-star" aria-hidden="true"></i></span>

const unfill = <span><i className="fa fa-star-o" ></i></span>

const StarRating = memo(function StarRating({ count, value, count1,
  inactiveColor = '#ddd',
  activeColor = '#f00', onChange }) {

  // short trick 
  const stars = Array.from({ length: count }, () => fillstar)
  const stars1 = Array.from({ length: count1 }, () => unfill)

  // Internal handle change function
  const handleChange = (value) => {
    onChange(value + 1);
  }

  return (
    <div>
      {stars.map((s, index) => {
        let style = inactiveColor;
        if (index < value) {
          style = activeColor;
        }
        return (
          <span className={"star"}
            key={index}
            style={{ color: style }}
            onClick={() => handleChange(index)}>{s}</span>
        )
      })}
      {value}

      {stars1.map((s, index) => {
        let style = inactiveColor;
        if (index < value) {
          style = activeColor;
        }
        return (
          <span className={"star"}
            key={index}
            style={{ color: style }}
            onClick={() => handleChange(index)}>{s}</span>
        )
      })}
      {value}
    </div>
  )
})

const RatingStar = memo((props) => {

  return (
    <Fragment>
      <StarRating count1={props.count1} count={props.count} />
    </Fragment>
  )
})

RatingStar.displayName = "RatingStar"
export default RatingStar; 
