import { memo, Fragment } from "react";
import RadioBtn from "../elements/radio-btn";

interface Props{
  themeSchemeDirection?:any
}

const Direction = memo((props:Props) => {
  return (
    <Fragment>
      <div className="modes row row-cols-2 gx-2">
        <div className="col">
          <RadioBtn
            btnName="theme_scheme_direction"
            label="LTR"
            className="form-check mb-3 w-100"
            id="theme-scheme-direction-ltr"
            defaultChecked={props.themeSchemeDirection}
            value="ltr"
          >
            LTR
          </RadioBtn>
        </div>
        <div className="col">
          <RadioBtn
            btnName="theme_scheme_direction"
            label="RTL"
            className="form-check mb-3 w-100"
            id="theme-scheme-direction-rtl"
            defaultChecked={props.themeSchemeDirection}
            value="rtl"
          >
            RTL
          </RadioBtn>
        </div>
      </div>
    </Fragment>
  );
});

Direction.displayName = "Direction";
export default Direction;
