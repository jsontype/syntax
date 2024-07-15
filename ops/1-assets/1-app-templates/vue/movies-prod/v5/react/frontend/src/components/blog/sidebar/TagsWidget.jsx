import React, { Fragment, memo } from "react";

//react-router-dom
import { Link } from "react-router-dom";

//static data
import { blogTags } from "../../../StaticData/blogs";

// the hook
import { useTranslation } from "react-i18next";

const TagsWidget = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div id="tag_cloud-2" className="widget">
        <h5 className="widget-title position-relative">{t("header.tags")}</h5>
        <div className="tagcloud">
          <ul className="p-0 m-0 list-unstyled gap-2 widget_tags">
            {blogTags.map((tags, index) => {
              return (
                <li key={index}>
                  <Link to="/blogs-tag" className="position-relative">
                    {t(tags.name)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Fragment>
  );
});

TagsWidget.displayName = "TagsWidget";
export default TagsWidget;
