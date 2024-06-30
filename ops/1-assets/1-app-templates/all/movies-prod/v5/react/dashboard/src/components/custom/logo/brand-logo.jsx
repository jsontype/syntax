import React, { memo, Fragment } from "react";

import FullLogo from "/assets/images/logo-full.png";
import logo from "/assets/images/logo.png";

const BrandLogo = memo((props) => {
  return (
    <Fragment>
      <img className="img-fluid logo-normal" src={logo} alt="logo" />

      <img className="logo-full" src={FullLogo} alt="logo" />
    </Fragment>
  );
});

BrandLogo.displayName = "BrandLogo";
export default BrandLogo;
