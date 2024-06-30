import { FC, Fragment, memo } from "react";
import Link from 'next/link';

interface TopTenCardProps {
  link: string;
  imagePath: string;
  countValue: number;
}

const TopTenCard: FC<TopTenCardProps> = memo(({ link, imagePath, countValue }) => {
  return (
    <Fragment>
      <div className="iq-top-ten-block">
        <div className="block-image position-relative">
          <div className="img-box">
            <Link className="overly-images" href={link}>
                <img
                  src={imagePath}
                  alt="movie-card"
                  className="img-fluid object-cover"
                />
            </Link>
            <span className="top-ten-numbers texture-text">{countValue}</span>
          </div>
        </div>
      </div>
    </Fragment> 
  );
});

TopTenCard.displayName = "TopTenCard";
export default TopTenCard;
