import React, { Fragment, memo } from "react";

//router
import Link from "next/link";

//components
import RecentPost from "./sidebar/RecentPost";
import CategoriesWidget from "./sidebar/CategoriesWidget";
import TagsWidget from "./sidebar/TagsWidget";
import FollowUs from "./sidebar/FollowUs";

const DetailMetaList = memo(() => {
  return (
    <Fragment>
      <div className="widget-area">
        <div id="search-2" className="widget widget_search">
          <form
            method="get"
            className="search-form"
            action="#"
            autoComplete="off"
          >
            <div className="block-search_inside-wrapper position-relative d-flex">
              <input
                type="search"
                className="form-control"
                placeholder="Search"
                name="s"
                defaultValue=""
              />
              <button type="submit" className="block-search_button">
                <i aria-hidden="true" className="fa fa-search"></i>
              </button>
            </div>
          </form>
        </div>
        <RecentPost />
        <CategoriesWidget />
        <TagsWidget />
        <FollowUs />
        <div className="widget text-center">
          <Link href="/merchandise/shop">
            <img src="/assets/images/blog/blog1.webp" />
          </Link>
        </div>
      </div>
    </Fragment>
  );
});

DetailMetaList.displayName = "DetailMetaList";
export default DetailMetaList;
