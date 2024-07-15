import { memo, Fragment } from "react";
import RadioBtn from "../elements/radio-btn";

const ThemeScheme = memo((props) => {
  return (
    <Fragment>
      <h5 className="mb-3">Theme</h5>
      <RadioBtn
        btnName="theme_scheme"
        imgComponent
        id="color-mode-light"
        className="form-check mb-3 w-100"
        inputclassName="form-check-input custum-redio-btn"
        labelclassName="form-check-label d-flex align-items-center justify-content-between"
        defaultChecked={props.themeScheme}
        value="light"
      >
        <span>Light Theme</span>
        <div className="text-primary ">
          <svg
            width="60"
            height="27"
            viewBox="0 0 60 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.375"
              y="0.375"
              width="59.25"
              height="26.25"
              rx="4.125"
              fill="white"
            ></rect>
            <circle cx="9.75" cy="9.75" r="3.75" fill="#80868B"></circle>
            <rect
              x="16.5"
              y="8.25"
              width="37.5"
              height="3"
              rx="1.5"
              fill="#DADCE0"
            ></rect>
            <rect
              x="6"
              y="18"
              width="48"
              height="3"
              rx="1.5"
              fill="currentColor"
            ></rect>
            <rect
              x="0.375"
              y="0.375"
              width="59.25"
              height="26.25"
              rx="4.125"
              stroke="#DADCE0"
              strokeWidth="0.75"
            ></rect>
          </svg>
        </div>
      </RadioBtn>
      <RadioBtn
        btnName="theme_scheme"
        id="color-mode-dark"
        className="form-check mb-3 w-100"
        inputclassName="form-check-input custum-redio-btn"
        labelclassName="form-check-label d-flex align-items-center justify-content-between"
        defaultChecked={props.themeScheme}
        value="dark"
      >
        <span>Dark Theme</span>
        <div className="text-primary ">
          <svg
            width="60"
            height="27"
            viewBox="0 0 60 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.375"
              y="0.375"
              width="59.25"
              height="26.25"
              rx="4.125"
              fill="#1E2745"
            ></rect>
            <circle cx="9.75" cy="9.75" r="3.75" fill="#80868B"></circle>
            <rect
              x="16.5"
              y="8.25"
              width="37.5"
              height="3"
              rx="1.5"
              fill="#DADCE0"
            ></rect>
            <rect
              x="6"
              y="18"
              width="48"
              height="3"
              rx="1.5"
              fill="currentColor"
            ></rect>
            <rect
              x="0.375"
              y="0.375"
              width="59.25"
              height="26.25"
              rx="4.125"
              stroke="currentColor"
              strokeWidth="0.75"
            ></rect>
          </svg>
        </div>
      </RadioBtn>
      <RadioBtn
        btnName="theme_scheme"
        id="color-mode-auto"
        className="form-check mb-3 w-100"
        inputclassName="form-check-input custum-redio-btn"
        labelclassName="form-check-label d-flex align-items-center justify-content-between"
        defaultChecked={props.themeScheme}
        value="auto"
      >
        <span>Device Default</span>
        <div className="text-primary ">
          <svg
            className="rounded"
            width="60"
            height="27"
            viewBox="0 0 60 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.375"
              y="0.375"
              width="59.25"
              height="26.25"
              rx="4.125"
              fill="#1E2745"
            ></rect>
            <circle cx="9.75" cy="9.75" r="3.75" fill="#80868B"></circle>
            <rect
              x="16.5"
              y="8.25"
              width="37.5"
              height="3"
              rx="1.5"
              fill="#DADCE0"
            ></rect>
            <rect
              x="6"
              y="18"
              width="48"
              height="3"
              rx="1.5"
              fill="currentColor"
            ></rect>
            <g clipPath="url(#clip0_507_92)">
              <rect width="30" height="27" fill="white"></rect>
              <circle cx="9.75" cy="9.75" r="3.75" fill="#80868B"></circle>
              <rect
                x="16.5"
                y="8.25"
                width="37.5"
                height="3"
                rx="1.5"
                fill="#DADCE0"
              ></rect>
              <rect
                x="6"
                y="18"
                width="48"
                height="3"
                rx="1.5"
                fill="currentColor"
              ></rect>
            </g>
            <rect
              x="0.375"
              y="0.375"
              width="59.25"
              height="26.25"
              rx="4.125"
              stroke="#DADCE0"
              strokeWidth="0.75"
            ></rect>
            <defs>
              <clipPath id="clip0_507_92">
                <rect width="30" height="27" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
      </RadioBtn>
    </Fragment>
  );
});
ThemeScheme.displayName = "ThemeScheme";
export default ThemeScheme;
