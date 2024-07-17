import { Fragment, memo } from "react";

// Next-Image
import Image from "next/image";

// img
// import Loader from '/assets/images/loader.gif'
import LoaderImg from '../../public/assets/images/loader.gif'

const Loader = memo(() => {
  return (
    <Fragment>
      <div className="loader simple-loader animate__animated animate__fadeOut">
        <div className="loader-body">
          <Image
            src={LoaderImg}
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
