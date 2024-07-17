import React, { useEffect, useState, memo, Fragment } from "react";

// react-router
import { Link } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";

// Import selectors & action from setting store
import * as SettingSelector from "../../store/setting/selector";

const ThemeScheme = memo(() => {
  const [show, setShow] = useState(false);
  const direction = useSelector(SettingSelector.themeDirection);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className={`rtl-box ${show === true ? "show" : ""}`}>
        <button type="button" className="btn btn-light rtl-btn">
          <svg
            onClick={() => setShow(!show)}
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="30px"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="rtl-panel">
          <ul className="modes">
            <li
              className={(direction == "ltr" ? "active" : "") + " dir-btn"}
              data-mode="rtl"
              data-value="ltr"
              value="ltr"
              onClick={() => dispatch(theme_scheme_direction("ltr"))}
            >
              <Link to="#">LTR</Link>
            </li>
            <li
              className={(direction == "rtl" ? "active" : "") + " dir-btn"}
              data-mode="rtl"
              data-value="rtl"
              value="rtl"
              onClick={() => dispatch(theme_scheme_direction("rtl"))}
            >
              <Link to="#">RTL</Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
});

ThemeScheme.displayName = "ThemeScheme";
export default ThemeScheme;
