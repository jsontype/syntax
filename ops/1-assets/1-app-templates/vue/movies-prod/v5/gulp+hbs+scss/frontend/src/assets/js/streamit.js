/*!
* Version: 5.1.1
* Template: Streamit - Responsive Bootstrap 5.3.2 Template
* Author: iqonic.design
* Design and Developed by: iqonic.design
* NOTE: This file contains the styling for Template.
*
*/

/*----------------------------------------------
Index Of Script
------------------------------------------------

:: LoaderInit
:: Sticky-Header
:: Popover
:: Tooltip
:: Calculate Header Height
:: Back To Top
:: Owl Carousel
:: DropDown
:: Header Toggle
:: Active Menu
:: Accordian
:: Popup Action
:: CounterUp 2
:: Rtl Mode

------------------------------------------------
Index Of Script
----------------------------------------------*/

(function () {
  "use strict";

  /*------------LoaderInit----------------*/
  document.addEventListener("DOMContentLoaded", function () {
    loaderInit();
  });

  const loaderInit = () => {
    const loader = document.querySelector(".loader");
    if (loader) {
      loader.classList.add("animate__animated", "animate__fadeOut");
      setTimeout(() => {
        loader.classList.add("d-none");
      }, 200);
    }
  };

  /*----------Sticky-Header-----------*/
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 1) {
      jQuery(".header-sticky").addClass("sticky");
    } else {
      jQuery(".header-sticky").removeClass("sticky");
    }
  });

  /*------------Popover--------------*/
  const popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  if (typeof bootstrap !== typeof undefined) {
    popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });
  }

  /*------------Tooltip--------------*/
  if (typeof bootstrap !== typeof undefined) {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    const sidebarTooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-sidebar-toggle="tooltip"]')
    );
    sidebarTooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  /*------------Calculate Header height--------------*/
  function headerHeightCount() {
    let is_header = document.querySelector("header");
    if (is_header !== null) {
      let headerHeight = document
        .querySelector("header")
        ?.getBoundingClientRect().height;
      document
        .querySelector(":root")
        .style.setProperty("--header-height", headerHeight + "px");
    }
  }
  headerHeightCount();
  jQuery(window).on("resize", function () {
    headerHeightCount();
  });

  /*------------Back To Top--------------*/
  const backToTop = document.getElementById("back-to-top");
  if (backToTop !== null && backToTop !== undefined) {
    backToTop.classList.add("animate__animated", "animate__fadeOut");
    window.addEventListener("scroll", (e) => {
      if (document.documentElement.scrollTop > 250) {
        backToTop.classList.remove("animate__fadeOut");
        backToTop.classList.add("animate__fadeIn");
      } else {
        backToTop.classList.remove("animate__fadeIn");
        backToTop.classList.add("animate__fadeOut");
      }
    });
    // scroll body to 0px on click
    document.querySelector("#top").addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /*------------DropDown--------------*/
  function darken_screen(yesno) {
    if (yesno) {
      const screenDarken = document.querySelector(".screen-darken");
      if (screenDarken !== null) {
        screenDarken.classList.add("active");
      }
    } else {
      const screenDarken = document.querySelector(".screen-darken");
      if (screenDarken !== null) {
        screenDarken.classList.remove("active");
      }
    }
  }

  function close_offcanvas() {
    darken_screen(false);
    const mobileOffcanvas = document.querySelector(".mobile-offcanvas.show");
    if (mobileOffcanvas !== null) {
      mobileOffcanvas.classList.remove("show");
      document.body.classList.remove("offcanvas-active");
    }
  }

  function show_offcanvas(offcanvas_id) {
    darken_screen(true);
    const offcanvasElement = document.getElementById(offcanvas_id);
    if (offcanvasElement !== null) {
      offcanvasElement.classList.add("show");
      document.body.classList.add("offcanvas-active");
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    document
      .querySelectorAll("[data-trigger]")
      .forEach(function (everyelement) {
        let offcanvas_id = everyelement.getAttribute("data-trigger");
        everyelement.addEventListener("click", function (e) {
          e.preventDefault();
          show_offcanvas(offcanvas_id);
        });
      });
    const closeButtonList = document.querySelectorAll(".btn-close");
    if (closeButtonList) {
      closeButtonList.forEach(function (everybutton) {
        everybutton.addEventListener("click", function (e) {
          close_offcanvas();
        });
      });
    }
    const screenDarkenElement = document.querySelector(".screen-darken");
    if (screenDarkenElement) {
      screenDarkenElement.addEventListener("click", function (event) {
        close_offcanvas();
      });
    }
  });

  if (document.querySelector("#navbarSideCollapse")) {
    document
      .querySelector("#navbarSideCollapse")
      .addEventListener("click", function () {
        document.querySelector(".offcanvas-collapse").classList.toggle("open");
      });
  }

  /*--------------------------------------
    Active Menu
  ------------------------------------------*/
  jQuery(document).ready(function () {
    addActiveClassToParentLinks();
  });

  function addActiveClassToParentLinks() {
    jQuery("header .iq-nav-menu ul li a.active").each(function () {
      jQuery(this).addClass("active");

      const parentLiWithUl = jQuery(this).closest("li:has(ul)");
      if (parentLiWithUl) {
        parentLiWithUl.find("> a").addClass("active");

        const parentUl = parentLiWithUl.closest("ul");
        if (parentUl) {
          parentUl.prev("a").addClass("active");
        }
      }
    });
  }

  /*------------Minus-plus--------------*/
  const plusBtns = document.querySelectorAll(".iq-quantity-plus");
  const minusBtns = document.querySelectorAll(".iq-quantity-minus");
  const updateQtyBtn = (elem, value) => {
    const oldValue = elem
      .closest('[data-qty="btn"]')
      .querySelector('[data-qty="input"]').value;
    const newValue = Number(oldValue) + Number(value);
    if (newValue >= 1) {
      elem
        .closest('[data-qty="btn"]')
        .querySelector('[data-qty="input"]').value = newValue;
    }
  };
  Array.from(plusBtns, (elem) => {
    elem.addEventListener("click", (e) => {
      updateQtyBtn(elem, 1);
    });
  });
  Array.from(minusBtns, (elem) => {
    elem.addEventListener("click", (e) => {
      updateQtyBtn(elem, -1);
    });
  });

  /*------------Accordian--------------*/
  jQuery(".iq-accordian .iq-accordian-block .iq-accordian-details").hide();
  jQuery(".iq-accordian .iq-accordian-block:first")
    .addClass("iq-active")
    .children()
    .slideDown("slow");
  jQuery(".iq-accordian .iq-accordian-block").on("click", function () {
    if (jQuery(this).children("div.iq-accordian-details").is(":hidden")) {
      jQuery(".iq-accordian .iq-accordian-block")
        .removeClass("iq-active")
        .children("div.iq-accordian-details")
        .slideUp("slow");
      jQuery(this)
        .toggleClass("iq-active")
        .children("div.iq-accordian-details")
        .slideDown("slow");
    }
  });

  /*------------Popup Action--------------*/
  jQuery(".delete-btn").on("click", function () {
    const __this = $(this);
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this item",
      icon: "error",
      background: "var(--bs-gray-900)",
      showCancelButton: true,
      backdrop: `rgba(60,60,60,0.8)`,
      confirmButtonText: "Yes, delete it!",
      confirmButtonColor: "#c03221",
      customClass: {
        title: "text-white",
        content: "text-white",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        $(__this).closest('[data-item="list"]').remove();
        Swal.fire({
          title: "Deleted!",
          text: "Your item has been deleted.",
          icon: "success",
          background: "var(--bs-gray-900)",
          customClass: {
            title: "text-white",
            content: "text-white",
          },
        });
      }
    });
  });

  jQuery(".wishlist-btn").on("click", function () {
    Swal.fire({
      title: "Added!",
      text: "Your item has been Added to the wishlist.",
      icon: "success",
      background: "var(--bs-gray-900)",
      customClass: {
        title: "text-white",
        content: "text-white",
      },
    });
  });

  jQuery(".cart-btn").on("click", function () {
    Swal.fire({
      title: "Added!",
      text: "Your item has been added to the cart.",
      icon: "success",
      background: "var(--bs-gray-900)",
      customClass: {
        title: "text-white",
        content: "text-white",
      },
    });
  });

  /*-------------CounterUp 2--------------*/
  if (window.counterUp !== undefined) {
    const counterUp = window.counterUp["default"];
    const counterUp2 = document.querySelectorAll(".counter");
    Array.from(counterUp2, (el) => {
      if (typeof Waypoint !== typeof undefined) {
        const waypoint = new Waypoint({
          element: el,
          handler: function () {
            counterUp(el, {
              duration: 1000,
              delay: 10,
            });
            this.destroy();
          },
          offset: "bottom-in-view",
        });
      }
    });
  }

  jQuery(document).ready(function () {
    function currentYear() {
      const year = new Date().getFullYear();
      jQuery(".currentYear").text(year);
    }

    currentYear();
  });
})();
