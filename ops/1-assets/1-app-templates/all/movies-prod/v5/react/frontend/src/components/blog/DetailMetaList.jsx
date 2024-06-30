import React, { Fragment, memo } from "react";

//react-router-dom
import { Link } from "react-router-dom";

//components
import RecentPost from "./sidebar/RecentPost";
import CategoriesWidget from "./sidebar/CategoriesWidget";
import TagsWidget from "./sidebar/TagsWidget";
import FollowUs from "./sidebar/FollowUs";

// the hook
import { useTranslation } from "react-i18next";
import { generateImgPath } from "../../StaticData/data";

const DetailMetaList = memo(() => {
  const { t } = useTranslation();
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
                placeholder={t('blogs.search1')}
                name="s"
                defaultValue=""
              />
              <button type="submit" className="block-search_button">
                <svg className="icon-16" width="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                  <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
        <RecentPost />
        <CategoriesWidget />
        <TagsWidget />
        <FollowUs />
        <div className="widget text-center">
          <Link to="/shop">
            <img src={generateImgPath("/assets/images/blog/blog1.webp")} />
          </Link>
        </div>
      </div>
    </Fragment>
  );
});

DetailMetaList.displayName = "DetailMetaList";
export default DetailMetaList;
