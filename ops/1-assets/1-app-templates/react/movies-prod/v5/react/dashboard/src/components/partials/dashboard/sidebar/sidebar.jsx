import { useEffect, memo, Fragment, useState } from "react";

//router
import { Link } from "react-router-dom";

//components
import VerticalNav from "./vertical-nav";
// import Logo from "../../components/logo";

//scrollbar
import Scrollbar from "smooth-scrollbar";
import BrandLogo from "../../../custom/logo/brand-logo";

// Import selectors & action from setting store
import * as SettingSelector from "../../../../store/setting/selectors";

// Redux Selector / Action
import { useSelector, useDispatch } from "react-redux";

import { sidebar_type } from "../../../../store/setting/actions";

const Sidebar = memo(() => {

  const dispatch = useDispatch();

  const sidebarColor = useSelector(SettingSelector.sidebar_color);
  const sidebarType = useSelector(SettingSelector.sidebar_type);
  const sidebarMenuStyle = useSelector(SettingSelector.sidebar_menu_style);
  const minisidebar = () => {
    if (sidebarType === "sidebar-mini") {
      dispatch(sidebar_type(""));
    }
    else {
      dispatch(sidebar_type("sidebar-mini"));
    }
  };

  // const resizePlugins = () => {
  //     // For sidebar-mini & responsive

  //   }
  useEffect(() => {
    Scrollbar.init(document.querySelector("#my-scrollbar"));

    window.addEventListener("resize", () => {
      const tabs = document.querySelectorAll(".nav");
      const sidebarResponsive = document.querySelector(
        '[data-sidebar="responsive"]'
      );
      if (window.innerWidth < 1025) {
        Array.from(tabs, (elem) => {
          if (
            !elem.classList.contains("flex-column") &&
            elem.classList.contains("nav-tabs") &&
            elem.classList.contains("nav-pills")
          ) {
            elem.classList.add("flex-column", "on-resize");
          }
          return elem.classList.add("flex-column", "on-resize");
        });
        if (sidebarResponsive !== null) {
          if (!sidebarResponsive.classList.contains("sidebar-mini")) {
            sidebarResponsive.classList.add("sidebar-mini", "on-resize");
          }
        }
      } else {
        Array.from(tabs, (elem) => {
          if (elem.classList.contains("on-resize")) {
            elem.classList.remove("flex-column", "on-resize");
          }
          return elem.classList.remove("flex-column", "on-resize");
        });
        if (sidebarResponsive !== null) {
          if (
            sidebarResponsive.classList.contains("sidebar-mini") &&
            sidebarResponsive.classList.contains("on-resize")
          ) {
            sidebarResponsive.classList.remove("sidebar-mini", "on-resize");
          }
        }
      }
    });
  });

  return (
    <Fragment>
      <aside
        className={`${sidebarColor} ${sidebarType} ${sidebarMenuStyle} sidebar sidebar-base  navs-rounded-all`}
        data-sidebar="responsive" >
        <div className="sidebar-header d-flex align-items-center justify-content-start">
          <Link to="/" className="navbar-brand">
            <BrandLogo />
            {/* <h4 className="logo-title">{props.app_name}</h4> */}
          </Link>
          <div
            className="sidebar-toggle"
            data-toggle="sidebar"
            data-active="true"
            onClick={minisidebar}
          >
            {sidebarType.includes("sidebar-mini") ?
              <i className="chevron-right">
                <svg xmlns="http://www.w3.org/2000/svg" height="1.2rem" viewBox="0 0 512 512" fill="white"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"></path></svg>
              </i>
              :
              <i className="chevron-left">
                <svg xmlns="http://www.w3.org/2000/svg" height="1.2rem" viewBox="0 0 512 512" fill="white" transform="rotate(180)">
                  <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"></path>
                </svg>
              </i>
            }
          </div>
        </div>
        <div
          className="pt-0 sidebar-body data-scrollbar"
          data-scroll="1"
          id="my-scrollbar"
        >
          {/* sidebar-list class to be added after replace css */}
          <div className="sidebar-list" id="sidebar">
            <VerticalNav />
          </div>
        </div>
        <div className="sidebar-footer"></div>
      </aside>
    </Fragment>
  );
});

Sidebar.displayName = "Sidebar";
export default Sidebar;
