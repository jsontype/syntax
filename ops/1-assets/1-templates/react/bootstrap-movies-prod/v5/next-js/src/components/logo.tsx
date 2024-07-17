import React, { memo, Fragment } from "react";

//router
import Link from "next/link";

const Logo = memo(() => {
  return (
    <Fragment>
      <div className="logo-default">
        <Link className="navbar-brand text-primary" href="/">
          <img
            className="img-fluid logo"
            src="/assets/images/logo.webp"
            loading="lazy"
            alt="streamit"
          />
        </Link>
      </div>
      <div className="logo-hotstar">
        <Link className="navbar-brand text-primary" href="/">
          <img
            className="img-fluid logo"
            src="/assets/images/logo-hotstar.webp"
            loading="lazy"
            alt="streamit"
          />
        </Link>
      </div>
      <div className="logo-prime">
        <Link className="navbar-brand text-primary" href="/">
          <img
            className="img-fluid logo"
            src="/assets/images/logo-prime.webp"
            loading="lazy"
            alt="streamit"
          />
        </Link>
      </div>
      <div className="logo-hulu">
        <Link className="navbar-brand text-primary" href="/">
          <img
            className="img-fluid logo"
            src="/assets/images/logo-hulu.webp"
            loading="lazy"
            alt="streamit"
          />
        </Link>
      </div>
    </Fragment>
  );
});

Logo.displayName = "Logo";
export default Logo;
