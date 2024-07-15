import { Fragment, memo } from "react";

//router
import Link from "next/link";

interface Props {
  image: string,
  title: string,
  category: string
  categoryLink?: string
}

const PersonalityCard = memo((props: Props) => {
  return (
    <Fragment>
      <img
        src={props.image}
        alt="personality"
        className="img-fluid object-cover mb-4 rounded"
      />
      <div className="text-center">
        <h6 className="cast-title fw-500">
          <Link href="/cast/detail">{props.title}</Link>
          </h6>
          <span className="cast-subtitle"> {props.category}</span>
          </div>
    </Fragment>
  );
});

PersonalityCard.displayName = "PersonalityCard";
export default PersonalityCard;
