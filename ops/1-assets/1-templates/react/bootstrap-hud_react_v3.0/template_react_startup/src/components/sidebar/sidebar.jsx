import React, { useEffect } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import SidebarNav from './sidebar-nav.jsx';

function Sidebar() {
	useEffect(() => {
		document.querySelector('body').classList.add('app-init');
		
		var handleSidebarMenuToggle = function(menus) {
			menus.map(function(menu) {
				menu.onclick = function(e) {
					e.preventDefault();
					var target = this.nextElementSibling;

					menus.map(function(m) {
						var otherTarget = m.nextElementSibling;
						if (otherTarget !== target) {
							otherTarget.style.display = 'none';
							otherTarget.closest('.menu-item').classList.remove('expand');
						}
						return true;
					});

					var targetItemElm = target.closest('.menu-item');

					if (targetItemElm.classList.contains('expand') || (targetItemElm.classList.contains('active') && !target.style.display)) {
						targetItemElm.classList.remove('expand');
						target.style.display = 'none';
					} else {
						targetItemElm.classList.add('expand');
						target.style.display = 'block';
					}
				}
				return true;
			});
		};
	
		var menuBaseSelector = '.app-sidebar .menu > .menu-item.has-sub';
		var submenuBaseSelector = ' > .menu-submenu > .menu-item.has-sub';

		// menu
		var menuLinkSelector =  menuBaseSelector + ' > .menu-link';
		var menus = [].slice.call(document.querySelectorAll(menuLinkSelector));
		handleSidebarMenuToggle(menus);

		// submenu lvl 1
		var submenuLvl1Selector = menuBaseSelector + submenuBaseSelector;
		var submenusLvl1 = [].slice.call(document.querySelectorAll(submenuLvl1Selector + ' > .menu-link'));
		handleSidebarMenuToggle(submenusLvl1);

		// submenu lvl 2
		var submenuLvl2Selector = menuBaseSelector + submenuBaseSelector + submenuBaseSelector;
		var submenusLvl2 = [].slice.call(document.querySelectorAll(submenuLvl2Selector + ' > .menu-link'));
		handleSidebarMenuToggle(submenusLvl2);
	});
	
	const toggleAppSidebarMobile = () => {
		var elm = document.querySelector('.app');
		elm.classList.toggle('app-sidebar-mobile-toggled');
	}
		
	return (
		<React.Fragment>
			<div id="sidebar" className="app-sidebar">
				<PerfectScrollbar className="app-sidebar-content" options={{suppressScrollX: true}}>
					<SidebarNav />
					<div className="p-3 px-4 mt-auto">
						<a href="https://seantheme.com/hud-react/documentation/index.html" rel="noreferrer" target="_blank" className="btn d-block btn-outline-theme">
							<i className="fa fa-code-branch me-2 ms-n2 opacity-5"></i> Documentation
						</a>
					</div>
				</PerfectScrollbar>
			</div>
			<button className="app-sidebar-mobile-backdrop" onClick={toggleAppSidebarMobile}></button>
		</React.Fragment>
	)
}

export default Sidebar;
