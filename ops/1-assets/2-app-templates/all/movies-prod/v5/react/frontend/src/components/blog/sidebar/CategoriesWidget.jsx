import React, { Fragment, memo } from "react";

//react-router-dom
import { Link } from "react-router-dom";

//static data
import { blogCategories } from "../../../StaticData/blogs";

// the hook
import { useTranslation } from "react-i18next";

const CategoriesWidget = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div id="categories-2" className="widget widget_categories">
        <h5 className="widget-title position-relative">
          {t("form.categories")}
        </h5>
        <ul className="p-0 m-0 list-unstyled">
          {blogCategories.map((item, index) => {
            return (
              <li className="text-capitalize" key={index}>
                <Link to="/blogs-category" className="position-relative">
                  {t(item.title)}
                </Link>
                <span className="post_count">({item.post_count})</span>
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
});

CategoriesWidget.displayName = "CategoriesWidget";
export default CategoriesWidget;
