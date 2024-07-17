/*
* Version: 5.1.1
* Template:Streamit - Responsive Bootstrap 5 Admin Dashboard Template
* Author: iqonic.design
* Design and Developed by: iqonic.design
* NOTE: This file contains the script for initialize & listener Template.
*/
/*----------------------------------------------
Index Of Script
------------------------------------------------
------- Plugin Init --------
:: Tooltip
:: Popover
:: Progress Bar
:: CopyToClipboard
:: Vanila Datepicker
:: SliderTab
:: Data Tables
:: Active Class for Pricing Table
------ Functions --------
:: Loader Init
:: Resize Plugins
:: Back To Top
------- Listners ---------
:: DOMContentLoaded
:: Window Resize
:: FullScreen
:: Font size change script
:: header toggle
:: Pro Sidebar Left Active Border
:: Reset Settings
:: Copy Json
:: Logo Change Functionality Preview purpose only based on user selected file
------------------------------------------------
Index Of Script
----------------------------------------------*/
(function () {
  "use strict";
  /*------------LoaderInit----------------*/
  const loaderInit = () => {
    const loader = document.querySelector('.loader')
    if (loader !== null) {
      loader.classList.add('animate__animated', 'animate__fadeOut')
      setTimeout(() => {
        loader.classList.add('d-none')
      }, 200)
    }
  }
  /*----------Sticky-Nav-----------*/
  window.addEventListener('scroll', function () {
    let yOffset = document.documentElement.scrollTop;
    let navbar = document.querySelector(".navs-sticky")
    if (navbar !== null) {
      if (yOffset >= 100) {
        navbar.classList.add("menu-sticky");
      } else {
        navbar.classList.remove("menu-sticky");
      }
    }
  });
  /*------------Popover--------------*/
  const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  if (typeof bootstrap !== typeof undefined) {
    popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })
  }
  /*-------------Tooltip--------------------*/
  if (typeof bootstrap !== typeof undefined) {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    const sidebarTooltipTriggerList = [].slice.call(document.querySelectorAll('[data-sidebar-toggle="tooltip"]'))
    sidebarTooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  }
  /*-------------Progress Bar------------------*/
  const progressBarInit = (elem) => {
    const currentValue = elem.getAttribute('aria-valuenow')
    elem.style.width = '0%'
    elem.style.transition = 'width 2s'
    if (typeof Waypoint !== typeof undefined) {
      new Waypoint({
        element: elem,
        handler: function () {
          setTimeout(() => {
            elem.style.width = currentValue + '%'
          }, 100);
        },
        offset: 'bottom-in-view',
      })
    }
  }
  const customProgressBar = document.querySelectorAll('[data-toggle="progress-bar"]')
  Array.from(customProgressBar, (elem) => {
    progressBarInit(elem)
  })
  /*------------Copy To Clipboard---------------*/
  const copy = document.querySelectorAll('[data-toggle="copy"]')
  if (typeof copy !== typeof undefined) {
    Array.from(copy, (elem) => {
      elem.addEventListener('click', (e) => {
        const target = elem.getAttribute("data-copy-target");
        let value = elem.getAttribute("data-copy-value");
        const container = document.querySelector(target);
        if (container !== undefined && container !== null) {
          if (container.value !== undefined && container.value !== null) {
            value = container.value;
          } else {
            value = container.innerHTML;
          }
        }
        if (value !== null) {
          const elem = document.createElement("textarea");
          document.querySelector("body").appendChild(elem);
          elem.value = value;
          elem.select();
          document.execCommand("copy");
          elem.remove();
        }
        elem.setAttribute('data-bs-original-title', 'Copied!');
        let btn_tooltip = bootstrap.Tooltip.getInstance(elem);
        btn_tooltip.show();
        // reset the tooltip title
        elem.setAttribute('data-bs-original-title', 'Copy');
        setTimeout(() => {
          btn_tooltip.hide();
        }, 500)
      })
    });
  }
  /*------------Minus-plus--------------*/
  const plusBtns = document.querySelectorAll('.iq-quantity-plus')
  const minusBtns = document.querySelectorAll('.iq-quantity-minus')
  const updateQtyBtn = (elem, value) => {
    const oldValue = elem.closest('[data-qty="btn"]').querySelector('[data-qty="input"]').value
    const newValue = Number(oldValue) + Number(value)
    if (newValue >= 1) {
      elem.closest('[data-qty="btn"]').querySelector('[data-qty="input"]').value = newValue
    }
  }
  Array.from(plusBtns, (elem) => {
    elem.addEventListener('click', (e) => {
      updateQtyBtn(elem, 1)
    })
  })
  Array.from(minusBtns, (elem) => {
    elem.addEventListener('click', (e) => {
      updateQtyBtn(elem, -1)
    })
  })
  /*------------Flatpickr--------------*/
  const date_flatpickr = document.querySelectorAll('.date_flatpicker')
  Array.from(date_flatpickr, (elem) => {
    if (typeof flatpickr !== typeof undefined) {
      flatpickr(elem, {
        minDate: "today",
        dateFormat: "Y-m-d",
      })
    }
  })
  /*----------Range Flatpickr--------------*/
  const range_flatpicker = document.querySelectorAll('.range_flatpicker')
  Array.from(range_flatpicker, (elem) => {
    if (typeof flatpickr !== typeof undefined) {
      flatpickr(elem, {
        mode: "range",
        minDate: "today",
        dateFormat: "Y-m-d",
      })
    }
  })
  /*------------Wrap Flatpickr---------------*/
  const wrap_flatpicker = document.querySelectorAll('.wrap_flatpicker')
  Array.from(wrap_flatpicker, (elem) => {
    if (typeof flatpickr !== typeof undefined) {
      flatpickr(elem, {
        wrap: true,
        minDate: "today",
        dateFormat: "Y-m-d",
      })
    }
  })
  /*-------------Time Flatpickr---------------*/
  const time_flatpickr = document.querySelectorAll('.time_flatpicker')
  Array.from(time_flatpickr, (elem) => {
    if (typeof flatpickr !== typeof undefined) {
      flatpickr(elem, {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
      })
    }
  })
  /*-------------Inline Flatpickr-----------------*/
  const inline_flatpickr = document.querySelectorAll('.inline_flatpickr')
  Array.from(inline_flatpickr, (elem) => {
    if (typeof flatpickr !== typeof undefined) {
      flatpickr(elem, {
        inline: true,
        minDate: "today",
        dateFormat: "Y-m-d",
      })
    }
  })

  /*-------------CounterUp 2--------------*/
  if (window.counterUp !== undefined) {
    const counterUp = window.counterUp["default"];
    const counterUp2 = document.querySelectorAll('.counter')
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
    })
  }

  /*----------------SliderTab------------------*/
  Array.from(document.querySelectorAll('[data-toggle="slider-tab"]'), (elem) => {
    if (typeof SliderTab !== typeof undefined) {
      window.SliderTab.init(elem)
    }
  })
  let Scrollbar
  if (typeof Scrollbar !== typeof null) {
    if (document.querySelectorAll(".data-scrollbar").length) {
      Scrollbar = window.Scrollbar
      Scrollbar.init(document.querySelector('.data-scrollbar'), {
        continuousScrolling: false,
      })
    }
  }
  /*-------------Data tables---------------*/
  if ($.fn.DataTable) {
    // Bootstrap DataTable
    if ($('[data-toggle="data-table"]').length) {
      $('[data-toggle="data-table"]').DataTable({
        "autoWidth": false,
        "dom": '<"row align-items-center"<"col-md-6" l><"col-md-6" f>><"table-responsive my-3" rt><"row align-items-center" <"col-md-6" i><"col-md-6" p>><"clear">',
      });
    }
    // Column hidden datatable
    if ($('[data-toggle="data-table-column-hidden"]').length) {
      var hiddentable = $('[data-toggle="data-table-column-hidden"]').DataTable({});
      $('a.toggle-vis').on('click', function (e) {
        e.preventDefault();
        const column = hiddentable.column($(this).attr('data-column'));
        column.visible(!column.visible());
      });
    }
    // Column filter datatable
    if ($('[data-toggle="data-table-column-filter"]').length) {
      $('[data-toggle="data-table-column-filter"] tfoot th').each(function () {
        const title = $(this).attr('title');
        $(this).html(`<td><input type="text" class="form-control" placeholder="${title}" /></td>`);
      });
      $('[data-toggle="data-table-column-filter"]').DataTable({
        initComplete: function () {
          this.api().columns().every(function () {
            var that = this;

            $('input', this.footer()).on('keyup change clear', function () {
              if (that.search() !== this.value) {
                that
                  .search(this.value)
                  .draw();
              }
            });
          });
        }
      });
    };
    // Multilanguage datatable
    if ($('[data-toggle="data-table-multi-language"]').length) {
      function languageSelect() {
        return Array.from(document.querySelector('#langSelector').options).filter(option => option.selected).map(option => option.getAttribute('data-path'))
      }
      function dataTableInit() {
        $('[data-toggle="data-table-multi-language"]').DataTable({
          "language": {
            "url": languageSelect()
          }
        });
      }
      dataTableInit()
      document.querySelector('#langSelector').addEventListener('change', (e) => {
        $('[data-toggle="data-table-multi-language"]').dataTable().fnDestroy();
        dataTableInit()
      })
    };
  };

  /*--------------Active Class for Pricing Table------------------------*/
  const tableTh = document.querySelectorAll('#my-table tr th')
  const tableTd = document.querySelectorAll('#my-table td')
  if (tableTh !== null) {
    Array.from(tableTh, (elem) => {
      elem.addEventListener('click', (e) => {
        Array.from(tableTh, (th) => {
          if (th.children.length) {
            th.children[0].classList.remove('active')
          }
        })
        elem.children[0].classList.add('active')
        Array.from(tableTd, (td) => td.classList.remove('active'))
        const col = Array.prototype.indexOf.call(document.querySelector('#my-table tr').children, elem);
        const tdIcons = document.querySelectorAll("#my-table tr td:nth-child(" + parseInt(col + 1) + ")");
        Array.from(tdIcons, (td) => td.classList.add('active'))
      })
    })
  }
  /*------------------Pricing--------------------*/

  $("#contcheckbox").change(function () {
    if (this.checked) {
      $('.montlypricing').css('display', 'none');
      $('.yearlypricing').css('display', 'flex');
    } else {
      $('.montlypricing').css('display', 'flex');
      $('.yearlypricing').css('display', 'none');
    }
  });
  /*------------Resize Plugins--------------*/
  const resizePlugins = () => {
    // For sidebar-mini & responsive
    const tabs = document.querySelectorAll('.nav')
    if (window.innerWidth < 1025) {
      Array.from(tabs, (elem) => {
        if (!elem.classList.contains('flex-column') && elem.classList.contains('nav-tabs') && elem.classList.contains('nav-pills')) {
          elem.classList.add('flex-column', 'on-resize');
        }
      })
    } else {
      Array.from(tabs, (elem) => {
        if (elem.classList.contains('on-resize')) {
          elem.classList.remove('flex-column', 'on-resize');
        }
      })
    }
  }
  /*----------------Back To Top--------------------*/
  const backToTop = document.getElementById("back-to-top")
  if (backToTop !== null && backToTop !== undefined) {
    document.getElementById("back-to-top").classList.add("animate__animated", "animate__fadeOut")
    window.addEventListener('scroll', (e) => {
      if (document.documentElement.scrollTop > 250) {
        document.getElementById("back-to-top").classList.remove("animate__fadeOut")
        document.getElementById("back-to-top").classList.add("animate__fadeIn")
      } else {
        document.getElementById("back-to-top").classList.remove("animate__fadeIn")
        document.getElementById("back-to-top").classList.add("animate__fadeOut")
      }
    })
    // scroll body to 0px on click
    document.querySelector('#top').addEventListener('click', (e) => {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
  }
  /*------------DOMContentLoaded--------------*/
  document.addEventListener('DOMContentLoaded', (event) => {
    resizePlugins()
    loaderInit()
  });
  /*------------Window Resize------------------*/
  window.addEventListener('resize', function (event) {
    resizePlugins()
  });
  /*--------DropDown--------*/

  function darken_screen(yesno) {
    if (yesno == true) {
      if (document.querySelector('.screen-darken') !== null) {
        document.querySelector('.screen-darken').classList.add('active');
      }
    }
    else if (yesno == false) {
      if (document.querySelector('.screen-darken') !== null) {
        document.querySelector('.screen-darken').classList.remove('active');
      }
    }
  }
  function close_offcanvas() {
    darken_screen(false);
    if (document.querySelector('.mobile-offcanvas.show') !== null) {
      document.querySelector('.mobile-offcanvas.show').classList.remove('show');
      document.body.classList.remove('offcanvas-active');
    }
  }
  function show_offcanvas(offcanvas_id) {
    darken_screen(true);
    if (document.getElementById(offcanvas_id) !== null) {
      document.getElementById(offcanvas_id).classList.add('show');
      document.body.classList.add('offcanvas-active');
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('[data-trigger]').forEach(function (everyelement) {
      let offcanvas_id = everyelement.getAttribute('data-trigger');
      everyelement.addEventListener('click', function (e) {
        e.preventDefault();
        show_offcanvas(offcanvas_id);
      });
    });
    if (document.querySelectorAll('.btn-close')) {
      document.querySelectorAll('.btn-close').forEach(function (everybutton) {
        everybutton.addEventListener('click', function (e) {
          close_offcanvas();
        });
      });
    }
    if (document.querySelector('.screen-darken')) {
      document.querySelector('.screen-darken').addEventListener('click', function (event) {
        close_offcanvas();
      });
    }
  });
  if (document.querySelector('#navbarSideCollapse')) {
    document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
      document.querySelector('.offcanvas-collapse').classList.toggle('open')
    })
  }


  /*---------------------------------------------------------------------
              FullScreen
  -----------------------------------------------------------------------*/
  jQuery(document).ready(function () {
    jQuery(".search-full").click(function () {
      jQuery(".search-mini").toggleClass("active");

    });
  });

  jQuery(document).on('click', '.iq-full-screen', function () {
    if (!document.fullscreenElement &&
      !document.mozFullScreenElement && // Mozilla
      !document.webkitFullscreenElement && // Webkit-Browser
      !document.msFullscreenElement) { // MS IE ab version 11

      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
      document.querySelector('.iq-full-screen').querySelector('.normal-screen').classList.add('d-none');
      document.querySelector('.iq-full-screen').querySelector('.full-normal-screen').classList.remove('d-none');
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      document.querySelector('.iq-full-screen').querySelector('.full-normal-screen').classList.add('d-none');
      document.querySelector('.iq-full-screen').querySelector('.normal-screen').classList.remove('d-none');
    }
  });

  /*---------------------------------------------------------------------
            Font size change script
  -----------------------------------------------------------------------*/

  const sizes = document.querySelectorAll('[data-change="fs"]');
  sizes.forEach(size => size.addEventListener('click', () => changeSize(size)));
  function changeSize(params) {
    const size = params.dataset.size;
    sizes.forEach(params => params.classList.remove('btn-primary'));
    if (document.querySelector('html').style.fontSize !== size) {
      document.querySelector('html').style.fontSize = size;
      params.classList.add('btn-primary');
    } else {
      document.querySelector('html').style.removeProperty('font-size');
    }
    window.dispatchEvent(new Event('resize'));
    hideTooltip();
  }

  function hideTooltip() {
    const tooltipElms = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    tooltipElms.forEach(tooltipElm => {
      const tooltip = bootstrap.Tooltip.getInstance(tooltipElm)
      tooltip.hide();
    });

  }

  /*---------------------------------------------------------------------
            header toggle
  -----------------------------------------------------------------------*/
  const toggleelem = document.getElementById('navbarSupportedContent');
  const offcanvasheader = document.getElementById('offcanvasBottom')
  if (offcanvasheader !== null && offcanvasheader !== undefined) {
    const bsOffcanvas = new bootstrap.Offcanvas(offcanvasheader);
    toggleelem.addEventListener('show.bs.collapse', function () {
      bsOffcanvas.show()
      document.querySelector('.offcanvas-backdrop').addEventListener('click', function () {
        const toggleInstace = bootstrap.Collapse.getInstance(toggleelem)
        toggleInstace.hide()
      })
    })
    toggleelem.addEventListener('hide.bs.collapse', function () {
      bsOffcanvas.hide()
    })
  }

  const toggleelem1 = document.getElementById('navbarSupportedContent1');
  const offcanvas = document.getElementById('offcanvasBottom1')
  if (offcanvas !== null && toggleelem1 !== null) {
    const offcanvas = new bootstrap.Offcanvas();
    toggleelem1.addEventListener('show.bs.collapse', function () {
      offcanvas.show()
      document.querySelector('.offcanvas-backdrop').addEventListener('click', function () {
        const toggleInstace = bootstrap.Collapse.getInstance(toggleelem1)
        toggleInstace.hide()
      })
    })
    toggleelem1.addEventListener('hide.bs.collapse', function () {
      offcanvas.hide()
    })
  }


  /*---------------------------------------------------------------------
            Pro Sidebar Left Active Border
  -----------------------------------------------------------------------*/
  window.addEventListener('load', () => {
    const leftSidebar = document.querySelector('[data-toggle="main-sidebar"]')
    if (leftSidebar !== null) {
      const collapseElementList = [].slice.call(leftSidebar.querySelectorAll('.collapse'))
      const collapseList = collapseElementList.map(function (collapseEl) {
        collapseEl.addEventListener('show.bs.collapse', function (elem) {
          collapseEl.closest('li').classList.add('active')
        })
        collapseEl.addEventListener('hidden.bs.collapse', function (elem) {
          collapseEl.closest('li').classList.remove('active')
        })
      })

      const active = leftSidebar.querySelector('.active')
      if (active !== null) {
        active.closest('li').classList.add('active')
      }
    }
  })

  /*---------------------------------------------------------------------
            Reset Settings
  -----------------------------------------------------------------------*/
  const resetSettings = document.querySelector('[data-reset="settings"]');
  if (resetSettings !== null) {
    resetSettings.addEventListener('click', (e) => {
      e.preventDefault();
      const confirm = window.confirm('Are you sure you want to reset your settings?');
      if (confirm) {
        window.IQSetting.reInit()
      }
    })
  }


  /*---------------------------------------------------------------------
            Copy Json
  -----------------------------------------------------------------------*/
  const copySettings = document.querySelector('[data-copy="settings"]');
  if (copySettings !== null) {
    copySettings.addEventListener('click', (e) => {
      e.preventDefault();
      let settingJson = window.IQSetting.getSettingJson()
      const elem = document.createElement("textarea");
      document.querySelector("body").appendChild(elem);
      elem.value = settingJson;
      elem.select();
      document.execCommand("copy");
      elem.remove();
      copySettings.setAttribute('data-bs-original-title', 'Copied!');
      let btn_tooltip = bootstrap.Tooltip.getInstance(copySettings);
      btn_tooltip.show();
      // reset the tooltip title
      copySettings.setAttribute('data-bs-original-title', 'Copy to clipboard');
      setTimeout(() => {
        btn_tooltip.hide();
      }, 500)
    })
  }

  $('.iq-status').on('change', function () {
    const status = $(this).is(":checked")
    if (status) {
      $(".iq-reset-status").text("Online")
    } else {
      $(".iq-reset-status").text("Offline")
    }
  })


  $(".delete-btn").on("click", function () {
    const __this = $(this)
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this item",
      icon: 'error',
      showCancelButton: true,
      backdrop: `rgba(60,60,60,0.8)`,
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor: "#c03221"
    }).then((result) => {
      if (result.isConfirmed) {
        $(__this).closest('[data-item="list"]').remove();
        Swal.fire(
          'Deleted!',
          'Your item has been deleted.',
          'success'
        )
      }
    })
  })

  $(".restore-btn").on("click", function () {
    const __this = $(this)
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to restore this item",
      icon: 'info',
      showCancelButton: true,
      backdrop: `rgba(60,60,60,0.8)`,
      confirmButtonText: 'Yes',
      confirmButtonColor: "#c03221"
    }).then((result) => {
      if (result.isConfirmed) {
        $(__this).closest('[data-item="list"]').remove();
        Swal.fire(
          'Restore!',
          'Your item has been restore.',
          'success'
        )
      }
    })
  })


  $(".wishlist-btn").on("click", function () {
    Swal.fire(
      'Added!',
      'Your item has been Added to the wishlist.',
      'success'
    )
  })

  $(".cart-btn").on("click", function () {
    Swal.fire(
      'Added!',
      'Your item has been Added to the cart.',
      'success'
    )
  })


  /*---------------Form Validation--------------------*/
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);

})();

