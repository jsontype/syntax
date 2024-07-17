import React, { Fragment, memo } from "react";

//react-router-dom
import { Link } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";

const Sources = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div className="source-list-content table-responsive">
        <table className="table custom-table">
          <thead>
            <tr>
              <th>{t("detail_page.links")}</th>
              <th>{t("detail_page.quality")}</th>
              <th>{t("detail_page.language")}</th>
              <th>{t("detail_page.player")}</th>
              <th>{t("detail_page.date_added")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="iq-button">
                  <Link
                    to="/movies-detail"
                    className="btn text-uppercase position-relative"
                  >
                    <span className="button-text">
                      {" "}
                      {t("detail_page.play_now")}
                    </span>{" "}
                    <i className="fa-solid fa-play"></i>
                  </Link>
                </div>
              </td>
              <td>1080p</td>
              <td>{t("detail_page.eng")}</td>
              <td>{t("detail_page.musicbee")}</td>
              <td>2021-11-28</td>
            </tr>
            <tr>
              <td>
                <div className="iq-button">
                  <Link
                    to="/movies-detail"
                    className="btn text-uppercase position-relative"
                  >
                    <span className="button-text">
                      {t("detail_page.play_now")}
                    </span>{" "}
                    <i className="fa-solid fa-play"></i>
                  </Link>
                </div>
              </td>
              <td>800p</td>
              <td>{t("detail_page.eng")}</td>
              <td>{t("detail_page.k_player")}</td>
              <td>2021-11-25</td>
            </tr>
            <tr>
              <td>
                <div className="iq-button">
                  <Link
                    to="/movies-detail"
                    className="btn text-uppercase position-relative"
                  >
                    <span className="button-text">
                      
                      {t("detail_page.play_now")}
                    </span>{" "}
                    <i className="fa-solid fa-play"></i>
                  </Link>
                </div>
              </td>
              <td>720p</td>
              <td>{t("detail_page.eng")}</td>
              <td>{t("detail_page.mediamonkey")}</td>
              <td>2021-11-20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
});

export default Sources;
