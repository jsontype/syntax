/*
* Version: 5.1.1
* Template: Streamit - Responsive Bootstrap 5 Admin Dashboard Template
* Author: iqonic.design
* Author URL: https://iqonic.design/
* Design and Developed by: iqonic.design
* Description: This file contains the script for initialize & listener Template.
*/

(function(){
    "use strict";
    const sidebarInit = () => {
        const sidebarType = IQSetting.options.setting.sidebar_type.value
        const newTypes = sidebarType
        const sidebarResponsive = document.querySelector('[data-sidebar="responsive"]')
        if (window.innerWidth < 1025) {
            if (sidebarResponsive !== null) {
                if (!sidebarResponsive.classList.contains('sidebar-mini')) {
                    newTypes.push('sidebar-mini')
                }
            } else {
                if (sidebarResponsive !== null) {
                    if (sidebarResponsive.classList.contains('sidebar-mini')) {
                        const indexOf = newTypes.findIndex(x => x == 'sidebar-mini')
                        newTypes.splice(indexOf, 1)
                    }
                }
            }
        }
        IQSetting.sidebar_type(newTypes)
    }
    sidebarInit()
    window.addEventListener('resize', function (event) {
        sidebarInit()
    });

    /*-------------Sidebar Toggle Start-----------------*/
    function updateSidebarType() {
        if(typeof IQSetting !== typeof undefined) {
        const sidebarType = IQSetting.options.setting.sidebar_type.value
        const newTypes = sidebarType
        if(sidebarType.includes('sidebar-mini')) {
            const indexOf = newTypes.findIndex(x => x == 'sidebar-mini')
            newTypes.splice(indexOf, 1)
        } else {
            newTypes.push('sidebar-mini')
        }
        IQSetting.sidebar_type(newTypes)
        }
    }
    const sidebarToggle = (elem) => {
        elem.addEventListener('click', (e) => {
        const sidebar = document.querySelector('.sidebar')
        if (sidebar.classList.contains('sidebar-mini')) {
            sidebar.classList.remove('sidebar-mini')
            updateSidebarType()
        } else {
            sidebar.classList.add('sidebar-mini')
            updateSidebarType()
        }
        })
    }
    const sidebarToggleBtn = document.querySelectorAll('[data-toggle="sidebar"]')
    const sidebar = document.querySelector('[data-toggle="main-sidebar"]')
    if (sidebar !== null) {
        const sidebarActiveItem = sidebar.querySelectorAll('.active')
        Array.from(sidebarActiveItem, (elem) => {
            elem.classList.add('active')
            if (!elem.closest('ul').classList.contains('iq-main-menu')) {
                const childMenu = elem.closest('ul')
                const parentMenu = childMenu.closest('li').querySelector('.nav-link')
                parentMenu.classList.add('active')
                new bootstrap.Collapse(childMenu, {
                toggle: true
                });
            }
        })
        const collapseElementList = [].slice.call(sidebar.querySelectorAll('.collapse'))
        const collapseList = collapseElementList.map(function (collapseEl) {
            collapseEl.addEventListener('show.bs.collapse', function (elem) {
                collapseEl.closest('li').classList.add('active')
            })
            collapseEl.addEventListener('hidden.bs.collapse', function (elem) {
                collapseEl.closest('li').classList.remove('active')
            })
        })

        const active = sidebar.querySelector('.active')
        if (active !== null) {
            active.closest('li').classList.add('active')
        }
    }
    Array.from(sidebarToggleBtn, (sidebarBtn) => {
        sidebarToggle(sidebarBtn)
    })
    /*-------------Sidebar Toggle End-----------------*/
})()
