import React, { Fragment } from "react";

// Redux Selector / Action
import { useDispatch } from "react-redux";

// import state selectors
import {
  setSetting
} from "./store/setting/actions";

function App({children}) {
  const dispatch = useDispatch();
  dispatch(setSetting());
  return (
    <Fragment>
      <div className="App">{children}</div>
    </Fragment>
  );
}

export default App;
