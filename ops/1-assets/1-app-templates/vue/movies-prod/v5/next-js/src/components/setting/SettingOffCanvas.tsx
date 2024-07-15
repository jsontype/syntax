import { useState, useEffect, memo, Fragment } from "react";

//react-bootstrap
import { Offcanvas, Row, Col } from "react-bootstrap";

// Redux Selector / Action
import { useSelector } from "react-redux";

// Import selectors & action from setting store
import * as SettingSelector from "../../store/setting/selectors";

// Section Components
// Style Setting Section Components
import ColorCustomizer from "./sections/color-customizer";
import Direction from "./sections/direction";


const SettingOffCanvas = memo(() => {
  const [show, setShow] = useState(false);
  
  // Define selectors
  const themeSchemeDirection = useSelector(SettingSelector.theme_scheme_direction);
  const themeColor = useSelector(SettingSelector.theme_color);
  return (
    <Fragment>
      <div className="rtl-box">
        <a
          className="btn btn-fixed-end btn-icon btn-setting"
          id="settingbutton"
          role="button"
          onClick={(e) => {
            e.stopPropagation();
            setShow(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.875em"
            height="1.875em"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <div
          className={`offcanvas offcanvas-end live-customizer end ${
            show ? "show" : "hiding"
          }`}
          // placement={`${themeSchemeDirection === "rtl" ? 'start' : 'end'}`}
        >
          <div className="offcanvas-header">
            <div className="d-flex align-items-center">
              <h5
                id="live-customizer-label"
                className="offcanvas-title text-dark"
              >
                Live Customizer
              </h5>
            </div>
            <div className="d-flex gap-1 align-items-center">
              <button
                className="btn btn-icon text-primary"
                data-reset="settings"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                aria-label="Reset All Settings"
                data-bs-original-title="Reset All Settings"
              >
                <span className="btn-inner">
                  <i className="fa-solid fa-arrows-rotate"></i>
                </span>
              </button>
              <button
                type="button"
                className="btn btn-icon btn-close px-0 text-reset shadow-none text-dark"
                onClick={() => setShow(false)}
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
          <div className="offcanvas-body pt-0 modes">
            <Row>
              <Col lg={12}>
                <div>
                  <div>
                    <Direction themeSchemeDirection={themeSchemeDirection}></Direction>
                    <ColorCustomizer themeColor={themeColor}></ColorCustomizer>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

SettingOffCanvas.displayName = "SettingOffCanvas";
export default SettingOffCanvas;
