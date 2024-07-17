import React, { memo, Fragment, Suspense } from "react";

// reacr-router
import { Outlet } from "react-router-dom";

const BlankLayout = memo(() => {
  return (
    <Fragment>
      <div className="wrapper">
        <Suspense fallback={<div className="react-load"></div>}>
          <Outlet></Outlet>
        </Suspense>
      </div>
    </Fragment>
  );
});

BlankLayout.displayName = "BlankLayout";
export default BlankLayout;
