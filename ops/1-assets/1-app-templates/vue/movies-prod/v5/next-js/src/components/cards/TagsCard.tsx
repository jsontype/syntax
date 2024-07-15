import React, { Fragment, memo } from "react";

// Next-Link
import Link from "next/link";

interface TagCardProps{
  title?:string
}

const TagsCard = memo((props:TagCardProps) => {
  return (
    <Fragment>
      <Link href="/view-all">
        <span className="iq-tag-box">{props.title}</span>
      </Link>
    </Fragment>
  );
});

TagsCard.displayName = "TagsCard";
export default TagsCard;
