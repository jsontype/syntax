import { FC, Fragment, memo } from "react";

//react-bootstrap
import { ProgressBar } from "react-bootstrap";

//react-router-dom
import Link from "next/link";

interface ContinueWatchCardProps {
  link: string;
  imagePath: string;
  dataLeftTime: string;
  progressValue: number;
}

const ContinueWatchCard: FC<ContinueWatchCardProps> = memo(
  ({ link, imagePath, dataLeftTime, progressValue }) => {
    return (
      <Fragment>
        <div className="iq-watching-block">
          <div className="block-images position-relative">
            <div className="iq-image-box overly-images">
              <Link className="d-block" href={link} passHref>
                  <img
                    src={imagePath}
                    alt="movie-card"
                    className="img-fluid object-cover w-100 d-block border-0"
                  />
              </Link>
            </div>
            <div className="iq-preogress">
              <span className="data-left-timing font-size-14 fw-500 text-lowercase">
                {dataLeftTime}
              </span>
              <ProgressBar now={progressValue} style={{ height: "1px" }} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
);

ContinueWatchCard.displayName = "ContinueWatchCard";
export default ContinueWatchCard;
