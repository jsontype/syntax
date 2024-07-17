import { FC, Fragment, memo } from "react";
import Link from 'next/link';

interface EpisodeCardProps {
  image: string;
  link: string;
  showEpisod: string;
  episodDate: string;
  episodTime: string;
  episodTitle: string;
}

const EpisodeCard: FC<EpisodeCardProps> = memo(({ image, link, showEpisod, episodDate, episodTime, episodTitle }) => {
  return (
    <Fragment>
      <div className="episode-block">
        <div className="block-image position-relative">
          <Link href={link}>
              <img
                src={image}
                className="img-fluid img-zoom"
                loading="lazy"
                alt=""
              />
          </Link>
          <div className="episode-number">{showEpisod}</div>
          <div className="episode-play">
            <Link href="/tv-shows/episode" tabIndex={0}>
              <i className="fa-solid fa-play"></i>
            </Link>
          </div>
        </div>
        <div className="epi-desc p-3">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <span className="border-gredient-left text-white rel-date">
              {episodDate}
            </span>
            <span className="text-primary run-time">{episodTime}</span>
          </div>
          <Link href="/tv-shows/episode">
            <h5 className="epi-name text-white mb-0">{episodTitle}</h5>
          </Link>
        </div>
      </div>
    </Fragment>
  );
});

EpisodeCard.displayName = "EpisodeCard";
export default EpisodeCard;
