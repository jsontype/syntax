import { memo } from "react";
import { useDispatch } from "react-redux";
import SettingAction from "../../../store/setting/actions";

const RadioBtn = memo((props) => {
  const dispatch = useDispatch();
  const radioCheckValue = (selector, value) => {
    if (selector === value) {
      return true;
    }
    return false;
  };
  return (
    <div className={`text-center w-100`}>
      <input
        type="radio"
        value={props.value}
        className={"btn-check"}
        name={props.btnName}
        id={props.id}
        autoComplete="off"
        defaultChecked={radioCheckValue(props.defaultChecked, props.value)}
        onClick={() => dispatch(SettingAction[props.btnName](props.value))}
      />
      <label
        className={"btn dir-btn cutomizer-button w-100"}
        htmlFor={props.id}
      >
        {props.children}
      </label>
    </div>
  );
});

RadioBtn.displayName = "RadioBtn";
export default RadioBtn;
