import { useEffect, memo, Fragment } from "react";

const Progress = memo((props) => {
  useEffect(() => {
    //progressbar
    const progressBarInit = (elem) => {
      const currentValue = elem.getAttribute("aria-valuenow");
      elem.style.width = "0%";
      elem.style.transition = "width 2s";
      elem.style.width = currentValue + "%";
    };
    const customProgressBar = document.querySelectorAll(
      '[data-toggle="progress-bar"]'
    );
    Array.from(customProgressBar, (elem) => {
      return progressBarInit(elem);
    });
  });
  return (
    <Fragment>
      <div
        className={`progress bg-${props.softcolors}-subtle ${props.className}`}
        style={props.style}
      >
        <div
          className={`progress-bar bg-${props.color}`}
          data-toggle="progress-bar"
          role="progressbar"
          aria-valuenow={props.value}
          aria-valuemin={props.minvalue}
          aria-valuemax={props.maxvalue}
        ></div>
      </div>
    </Fragment>
  );
});

Progress.displayName = "Progress";
export default Progress;
