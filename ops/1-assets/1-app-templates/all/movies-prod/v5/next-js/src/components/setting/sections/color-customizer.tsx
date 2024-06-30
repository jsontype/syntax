import { memo, Fragment } from "react";

import _ from "lodash";

//react-bootstrap
import { Tooltip, OverlayTrigger } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { theme_color } from "../../../store/setting/actions";

// Images

interface Props{
  themeColor?:any
}

const ColorCustomizer = memo((props:Props) => {
  const dispatch = useDispatch();

  const colorValue = props.themeColor;

  const colorChange = (colorClassName:any) => {
    dispatch(theme_color(colorClassName));
  };

  return (
    <Fragment>
      <div className="mt-3">
        <div className="color-customizer mb-3">
          <h6 className="mb-0 title-customizer">Color Customizer</h6>
        </div>
        <div className="row row-cols-2 gx-2">
          <div className="col mb-3">
            <input
              type="radio"
              value="dark"
              className="btn-check"
              name="theme_color"
              id="netflix"
              onClick={() => colorChange("dark")}
              defaultChecked={colorValue.value === "dark"}
            />
            <label
              className={`btn dir-btn cutomizer-button w-100`}
              htmlFor="netflix"
            >
              Netflix
            </label>
          </div>
          <div className="col mb-3">
            <input
              type="radio"
              value="hotstar"
              className="btn-check"
              name="theme_color"
              id="hotstar"
              onClick={() => colorChange("hotstar")}
              defaultChecked={colorValue.value === "hotstar"}
            />
            <label
              className={` btn dir-btn cutomizer-button w-100`}
              htmlFor="hotstar"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-original-title="Theme-2"
            >
              Hotstar
            </label>
          </div>
          <div className="col">
            <input
              type="radio"
              value="amazonprime"
              className="btn-check"
              name="theme_color"
              id="amezonprime"
              onClick={() => {
                colorChange("amazonprime");
              }}
              defaultChecked={colorValue.value === "amazonprime"}
            />
            <label
              className={` btn dir-btn cutomizer-button w-100`}
              htmlFor="amezonprime"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-original-title="Theme-3"
            >
              Prime
            </label>
          </div>
          <div className="col">
            <input
              type="radio"
              value="hulu"
              className="btn-check"
              name="theme_color"
              id="hulu"
              onClick={() => {
                colorChange("hulu");
              }}
              defaultChecked={colorValue.value === "hulu"}
            />
            <label
              className={` btn dir-btn cutomizer-button w-100`}
              htmlFor="hulu"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-original-title="Theme-4"
            >
              Hulu
            </label>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

ColorCustomizer.displayName = "ColorCustomizer";
export default ColorCustomizer;
