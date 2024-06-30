import { Fragment, memo } from "react";

//react-router-dom
import { Link } from "react-router-dom";

//hook
import { useTranslation } from "react-i18next";

const EpisodeCard = memo(
  ({ image, link, showEpisod, episodDate, episodTime, episodTitle }) => {
    const { t } = useTranslation();
    return (
      <Fragment>
        <div className="episode-block">
          <div className="block-image position-relative">
            <Link to={link}>
              <img
                src={image}
                className="img-fluid img-zoom"
                loading="lazy"
                alt=""
              />
            </Link>
            <div className="episode-number">{showEpisod}</div>
            <div className="episode-play">
              <Link to="/episodes" tabIndex="0">
                <i className="fa-solid fa-play"></i>
              </Link>
            </div>
          </div>
          <div className="epi-desc p-3">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <span className="border-gredient-left text-white rel-date">
                {t(episodDate)}
              </span>
              <span className="text-primary run-time">{t(episodTime)}</span>
            </div>
            <Link to="/episodes">
              <h5 className="epi-name text-white mb-0">{t(episodTitle)}</h5>
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
);

EpisodeCard.displayName = "EpisodeCard";
export default EpisodeCard;
