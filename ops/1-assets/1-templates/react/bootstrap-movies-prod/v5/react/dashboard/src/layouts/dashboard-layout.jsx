import React, { memo, Fragment, Suspense,useContext,useEffect } from "react";
import { useLocation } from "react-router-dom";
// reacr-router
import { Outlet } from "react-router-dom";

import { ShepherdTour, ShepherdTourContext } from "react-shepherd";

//react bootstrap
import { Container } from "react-bootstrap";

// header
import HeaderStyle from "../components/partials/dashboard/header/HeaderStyle";

//subheader
import Subheader from "../components/custom/Subheader";

// sidebar
import SidebarStyle from "../components/partials/dashboard/sidebar/sidebar";

// footer
import FooterStyle from "../components/partials/dashboard/footer/FooterStyle";

//seetingoffCanvas
import SettingOffCanvas from '../components/setting/SettingOffCanvas'

// Import selectors & action from setting store
import * as SettingSelector from '../store/setting/selectors'

// Redux Selector / Action
import { useSelector } from 'react-redux';

const Tour = () => {
  const tour = useContext(ShepherdTourContext);
  const { pathname } = useLocation();
  useEffect(() => {
    if (
      pathname === "/" &&
      sessionStorage.getItem("tour") !== "true"
    ) {
      tour?.start();
    }
  });
  return <Fragment></Fragment>;
};

const DashboardLayout = memo((props) => {
  useEffect(() => { });
  const closeTour = () => {
    sessionStorage.setItem("tour", "true");
  };
  // shepherd
  const newSteps = [
    {
      title: "<h4>Menu</h4>",
      text: '<p className="mb-0">Check the content under Menu Style. Click to view all oavailable Menu Style options for you.</p>',
      attachTo: { element: ".sidebar ", on: "right" },
      buttons: [
        {
          type: "next",
          text: "Next",
        },
      ],
      when: {
        show: () => {
          document
            .querySelector(".shepherd-modal-overlay-container")
            .classList.add("shepherd-modal-is-visible");
        },
        cancel: () => closeTour(),
      },
    },
    {
      title: "<h4>Profile Setting</h4>",
      text: '<p className="mb-0">Configure your Profile using Profile Settings. Edit, save and update your profile from here.</p>',
      attachTo: { element: ".iq-tour ", on: "bottom" },
      buttons: [
        {
          type: "back",
          classes: "shepherd-button-secondary",
          text: "Back",
        },
        {
          type: "next",
          text: "Next",
        },
      ],
      when: {
        cancel: () => closeTour(),
      },
    },
    {
      title: "<h4>Live Customizer</h4>",
      text: '<p className="mb-0">Transform the entire look, color, style and appearance of using Live Customizer settings. Change and copy the settings from here.</p>',
      attachTo: { element: ".btn-setting", on: "left" },
      buttons: [
        {
          type: "back",
          classes: "shepherd-button-secondary",
          text: "Back",
        },
        {
          action() {
            sessionStorage.setItem("tour", "true");
            return this.next();
          },
          text: "Done",
        },
      ],
      when: {
        cancel: () => closeTour(),
      },
    },
  ];
  const tourOptions = {
    defaultStepOptions: {
      cancelIcon: {
        enabled: true,
      },
    },
    when: {
      cancel: function () { },
    },
  };
  const pageLayout = useSelector(SettingSelector.page_layout)
  return (
    <Fragment>
      <ShepherdTour steps={newSteps} tourOptions={tourOptions}>
        <Tour />
      <div className="wrapper">
        <SidebarStyle />
        <main className="main-content">
          <div className="position-relative">
            <HeaderStyle />
            {props.isBanner == "true" ? <Subheader /> : ""}
          </div>
          <div className={` ${pageLayout} content-inner pb-0`}>
              <Suspense fallback={<div className="react-load"></div>}>
                <Outlet></Outlet>
              </Suspense>
            </div>
          <FooterStyle />
        </main>
      </div>
        <SettingOffCanvas />
        </ShepherdTour>
    </Fragment>
  );
});

DashboardLayout.displayName = "DashboardLayout";
export default DashboardLayout;
