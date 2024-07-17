import React, { useEffect, useState } from "react";

//router
import Link from "next/link";

// header
import HeaderDefault from "../components/partials/HeaderDefault";

// footer
import FooterDefault from "../components/partials/FooterDefault";

//breadcrumb
import BreadCrumbWidget from "@/components/BreadcrumbWidget";

//seetingoffCanvas
import SettingOffCanvas from "../components/setting/SettingOffCanvas";

const Frontend = (({ children }: any) => {
  const [animationClass, setAnimationClass] = useState("animate__fadeIn");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleScroll = () => {
    if (document.documentElement.scrollTop > 250) {
      setAnimationClass("animate__fadeIn");
    } else {
      setAnimationClass("animate__fadeOut");
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <main className="main-content">
        <BreadCrumbWidget />
        <HeaderDefault />

        {children}
      </main>
      <FooterDefault />
      <div
        id="back-to-top"
        style={{ display: "none" }}
        className={`animate__animated ${animationClass}`}
        onClick={scrollToTop}
      >
        <Link
          className="p-0 btn bg-primary btn-sm position-fixed top border-0 rounded-circle"
          id="top"
          href="#top"
        >
          <i className="fa-solid fa-chevron-up"></i>
        </Link>
      </div>
      <SettingOffCanvas />
    </>
  )
})

export default Frontend