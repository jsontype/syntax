import { Fragment, Suspense } from "react";

// reacr-router
import { Outlet } from "react-router-dom";

import Loader from "../components/Loader";
import SettingOffCanvas from "../components/setting/SettingOffCanvas";

const BlankLayout = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loader></Loader>}>
        <Outlet></Outlet>
      </Suspense>
      <SettingOffCanvas />
    </Fragment>
  );
};
export default BlankLayout;
