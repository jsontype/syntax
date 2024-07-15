import React, { useEffect, useState } from "react";

//router
import Link from "next/link";

//breadcrumb
import BreadCrumbWidget from "@/components/BreadcrumbWidget";

// header
import HeaderDefault from '@/components/merchandise/partials/HeaderDefault';

// footer
import FooterDefault from "@/components/merchandise/partials/FooterDefault";

//seetingoffCanvas
import SettingOffCanvas from "../components/setting/SettingOffCanvas";

const Merchandise = (({ children }: any) => {
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
           
                <HeaderDefault />

                <BreadCrumbWidget />
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

export default Merchandise