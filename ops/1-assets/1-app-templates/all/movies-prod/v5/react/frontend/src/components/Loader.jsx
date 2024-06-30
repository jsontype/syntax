import { Fragment, memo } from "react";

// img
import LoaderGif from '/assets/images/loader.gif'

const Loader = memo(() => {
  return (
    <Fragment>
      <div className="loader simple-loader animate__animated">
        <div className="loader-body">
          <img
            src={LoaderGif}
            alt="loader"
            className="img-fluid"
            width="300"
          />
        </div>
      </div>
    </Fragment>
  );
});

Loader.displayName = "Loader";
export default Loader;
