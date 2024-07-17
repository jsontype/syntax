(function () {
    ("use strict");

    let setting_options = {
        "saveLocal": "sessionStorage",
        "storeKey": "quisetting-html",
        "setting": {
            "app_name": {
                "value": "Streamit"
            },
            "theme_scheme_direction": {
                "value": "ltr"
            },
            "theme_scheme": {
                "value": "dark"
            },
            "theme_color": {
                "colors": {
                    "--{{prefix}}primary": "#b00c1f",
                    "--{{prefix}}secondary": "#adafb8",
                    "--{{prefix}}tertiray": "#3FF0B9",
                    "--{{prefix}}success": "#1AA053",
                    "--{{prefix}}danger": "#C03221",
                    "--{{prefix}}warning": "#F16A1B"
                },
                "value": "theme-color-default"
            },
            "theme_font_size": {
                "value": "theme-fs-md"
            },
            "page_layout": {
                "value": "container-fluid"
            },
            "sidebar_color": {
                "value": "sidebar-white"
            },
            "sidebar_type": {
                "value": []
            },
            "sidebar_menu_style": {
                "value": "sidebar-default navs-rounded-all"
            }
        }
    }
    
    const theme = IQUtils.getQueryString('theme')
    if(theme !== '' && theme !== null) {
        setting_options = selectTheme(theme)
    }

    const setting = (window.IQSetting = new IQSetting(setting_options));

    const layout = IQUtils.getQueryString('layout')
    if(layout !== '' && layout !== null) {
        switch(layout) {
            case 'dark':
                setting.theme_scheme('dark')           
                break;
            case 'semi-dark':
                setting.theme_scheme('light') 
                setting.sidebar_color('sidebar-dark')
                break;
            case 'full-width':
                setting.page_layout('container-fluid')
                break;
            case 'mini':
                setting.sidebar_type(['sidebar-mini'])
                setting.sidebar_menu_style('sidebar-default navs-rounded-all')
                setting.page_layout('container-fluid')
                break;
            case 'sidebar-pill-one':
                setting.setSettingColorChoice('theme_color', {
                    key: '--{{prefix}}primary',
                    value: '#fa6aae',
                  })
                setting.theme_color('theme-color-pink')
                setting.sidebar_menu_style('sidebar-default navs-pill')
                setting.page_layout('container-fluid')
                break;
            case 'sidebar-pill-all':
                setting.setSettingColorChoice('theme_color', {
                    key: '--{{prefix}}primary',
                    value: '#2185F4',
                  })
                setting.theme_color('theme-color-blue')
                setting.sidebar_menu_style('sidebar-default navs-pill-all')
                setting.page_layout('container-fluid')
                break;
            case 'sidebar-rounded-one':
                setting.setSettingColorChoice('theme_color', {
                    key: '--{{prefix}}primary',
                    value: '#34A853',
                  })
                setting.theme_color('theme-color-green')
                setting.sidebar_type([])
                setting.sidebar_menu_style('sidebar-default navs-rounded')
                setting.page_layout('container-fluid')
                break;
            case 'sidebar-rounded-all':
                setting.setSettingColorChoice('theme_color', {
                    key: '--{{prefix}}primary',
                    value: '#553AF9',
                  })
                setting.theme_color('theme-color-royal-blue')
                setting.sidebar_type([])
                setting.sidebar_menu_style('sidebar-default navs-rounded-all')
                setting.page_layout('container-fluid')
                break;
            case 'rtl':
                setting.theme_scheme_direction('rtl')
                break;
            case 'dark-rtl':
                setting.theme_scheme('dark')
                setting.theme_scheme_direction('rtl')
                break;
            default:
                break
        }
    }

    // Sidebar type event listener
    $(document).on("sidebar_type", function (e) {
        if (typeof setting !== typeof undefined) {
        const sidebarType = setting.options.setting.sidebar_type.value;
        if(e.detail.value.length !== 0) {
            if(e.detail.currentValue !== 'sidebar-mini' && e.detail.currentValue !== '') {
            if (sidebarType.includes("sidebar-hover") && !e.detail.value.includes("sidebar-mini")) {
                const newTypes = sidebarType;
                newTypes.push("sidebar-mini");
                setting.sidebar_type(newTypes);
            }
            }
        }
        }
    });

    // navbar style event listener
    $(document).on("header_navbar", function () {
        if (typeof setting !== typeof undefined) {
        const headerNavbar = setting.options.setting.header_navbar;
        if (headerNavbar.value == "nav-glass") {
            $(headerNavbar.target).addClass("navs-sticky");
        }
        }
    });

    document.addEventListener('click', function(e) {
        const liveCustomizerPannel = document.querySelector('#live-customizer')
        if(liveCustomizerPannel !== null) {
        if(liveCustomizerPannel.classList.contains('show')) {
            if(e.target.closest('.live-customizer') == null && e.target.closest('#settingbutton') == null && e.target.closest('.btn-check') == null) {
                bootstrap.Offcanvas.getInstance(liveCustomizerPannel).hide()
            }
        }
        }
    })

    const liveCusomizer = IQUtils.getQueryString('live-customizer')
    if(liveCusomizer !== '' && liveCusomizer !== null && liveCusomizer === 'open') {
        const liveCustomizerPannel = document.querySelector('#live-customizer')
        const liveCustomizerInstance = new bootstrap.Offcanvas(liveCustomizerPannel)
        if(liveCustomizerInstance !== null) {
            liveCustomizerInstance.show()
        }
    }

    

    /*---------------------------------------------------------------------
                Reset Settings
    -----------------------------------------------------------------------*/
    const resetSettings = document.querySelector('[data-reset="settings"]');
    if(resetSettings !== null){
        resetSettings.addEventListener('click', (e) => {
            e.preventDefault();
            const confirm = window.confirm('Are you sure you want to reset your settings?');
            if (confirm) {
                window.IQSetting.reInit()
            }
        })
    }

    function selectTheme(theme) {
        switch (theme) {
            case '0':
            break;
        }
    }

})(jQuery);
