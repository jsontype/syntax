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
    <div className={`${props.className}`}>
      <input
        type="radio"
        value={props.value}
        className={props.inputclassName}
        name={props.btnName}
        id={props.id}
        autoComplete="off"
        defaultChecked={radioCheckValue(props.defaultChecked, props.value)}
        onClick={() => dispatch(SettingAction[props.btnName](props.value))}
      />
      <label className={props.labelclassName} htmlFor={props.id}>
        {props.children}
      </label>
    </div>
  );
});

RadioBtn.displayName = "RadioBtn";
export default RadioBtn;
