import React, { useEffect } from 'react';
import TopNavNav from './top-nav-nav.jsx';
import { slideToggle } from './../../composables/slideToggle.js';
import { slideUp } from './../../composables/slideUp.js';


function handleUnlimitedTopNavRender() {

	// handle page load active menu focus
	function handlePageLoadMenuFocus() {
		var targetMenu = document.querySelector('.app-top-nav .menu');
		if (!targetMenu) {
			return;
		}
		var bodyStyle = window.getComputedStyle(document.body);
		var viewWidth = document.querySelector('.app-top-nav').clientWidth;
		var prevWidth = 0;
		var fullWidth = 0;
		var controlPrevObj = targetMenu.querySelector('.menu-control-start');
		var controlNextObj = targetMenu.querySelector('.menu-control-end');
		var controlNextWidth = (controlPrevObj) ? controlNextObj.clientWidth : 0;
		var controlWidth = 0;

		var elms = [].slice.call(document.querySelectorAll('.app-top-nav .menu > .menu-item'));
		if (elms) {
			var found = false;
			elms.map(function(elm) {
				if (!elm.classList.contains('menu-control')) {
					fullWidth += elm.clientWidth;
					if (!found) {
						prevWidth += elm.clientWidth;
					}
					if (elm.classList.contains('active')) {
						found = true;
					}
				}
				return true;
			});
		}
		
		var elm = targetMenu.querySelector('.menu-control.menu-control-end');
		if (prevWidth !== fullWidth && fullWidth >= viewWidth) {
			elm.classList.add('show');
			controlWidth += controlNextWidth;
		} else {
			elm.classList.remove('show');
		}
		
		var elm2 = targetMenu.querySelector('.menu-control.menu-control-start');
		if (prevWidth >= viewWidth && fullWidth >= viewWidth) {
			elm2.classList.add('show');
		} else {
			elm2.classList.remove('show');
		}
		
		if (prevWidth >= viewWidth) {
			var finalScrollWidth = prevWidth - viewWidth + controlWidth;
			if (bodyStyle.getPropertyValue('direction') !== 'rtl') {
				targetMenu.style.marginLeft = '-' + finalScrollWidth + 'px';
			} else {
				targetMenu.style.marginRight = '-' + finalScrollWidth + 'px';
			}
		}
	}
	
	function enableFluidContainerDrag(containerClassName) {
		const container = document.querySelector(containerClassName);
		if (!container) {
			return;
		}
		const menu = container.querySelector('.menu');
		const menuItem = menu.querySelectorAll('.menu-item:not(.menu-control)');

		let startX, scrollLeft, mouseDown;
		let menuWidth = 0;
		let maxScroll = 0;

		menuItem.forEach((element) => {
			menuWidth += element.offsetWidth;
		});

		container.addEventListener('mousedown', (e) => {
			mouseDown = true;
			startX = e.pageX;
			scrollLeft = (menu.style.marginLeft) ? parseInt(menu.style.marginLeft) : 0;
			maxScroll = container.offsetWidth - menuWidth;
		});

		container.addEventListener('touchstart', (e) => {
			mouseDown = true;
			const touch = e.targetTouches[0];
			startX = touch.pageX;
			scrollLeft = (menu.style.marginLeft) ? parseInt(menu.style.marginLeft) : 0;
			maxScroll = container.offsetWidth - menuWidth;
		});

		container.addEventListener('mouseup', () => {
			mouseDown = false;
		});

		container.addEventListener('touchend', () => {
			mouseDown = false;
		});

		container.addEventListener('mousemove', (e) => {
			if (!startX || !mouseDown) return;
			if (window.innerWidth < 768) return;
			e.preventDefault();
			const x = e.pageX;
			const walkX = (x - startX) * 1;
			var totalMarginLeft = scrollLeft + walkX;
			if (totalMarginLeft <= maxScroll) {
				totalMarginLeft = maxScroll;
				menu.querySelector('.menu-control.menu-control-end').classList.remove('show');
			} else {
				menu.querySelector('.menu-control.menu-control-end').classList.add('show');
			}
			if (menuWidth < container.offsetWidth) {
				menu.querySelector('.menu-control.menu-control-start').classList.remove('show');
			}
			if (maxScroll > 0) {
				menu.querySelector('.menu-control.menu-control-end').classList.remove('show');
			}
			if (totalMarginLeft > 0) {
				totalMarginLeft = 0;
				menu.querySelector('.menu-control.menu-control-start').classList.remove('show');
			} else {
				menu.querySelector('.menu-control.menu-control-start').classList.add('show');
			}
			menu.style.marginLeft = totalMarginLeft + 'px';
		});

		container.addEventListener('touchmove', (e) => {
			if (!startX || !mouseDown) return;
			if (window.innerWidth < 768) return;
			e.preventDefault();
			const touch = e.targetTouches[0];
			const x = touch.pageX;
			const walkX = (x - startX) * 1;
			var totalMarginLeft = scrollLeft + walkX;
			if (totalMarginLeft <= maxScroll) {
				totalMarginLeft = maxScroll;
				menu.querySelector('.menu-control.menu-control-end').classList.remove('show');
			} else {
				menu.querySelector('.menu-control.menu-control-end').classList.add('show');
			}
			if (menuWidth < container.offsetWidth) {
				menu.querySelector('.menu-control.menu-control-start').classList.remove('show');
			}
			if (maxScroll > 0) {
				menu.querySelector('.menu-control.menu-control-end').classList.remove('show');
			}
			if (totalMarginLeft > 0) {
				totalMarginLeft = 0;
				menu.querySelector('.menu-control.menu-control-start').classList.remove('show');
			} else {
				menu.querySelector('.menu-control.menu-control-start').classList.add('show');
			}
			menu.style.marginLeft = totalMarginLeft + 'px';
		});
	}
	
	window.addEventListener('resize', function() {
		if (window.innerWidth >= 768) {
			var targetElm = document.querySelector('.app-top-nav');
			if (targetElm) {
				targetElm.removeAttribute('style');
			}
			var targetElm2 = document.querySelector('.app-top-nav .menu');
			if (targetElm2) {
				targetElm2.removeAttribute('style');
			}
			var targetElm3 = document.querySelectorAll('.app-top-nav .menu-submenu');
			if (targetElm3) {
				targetElm3.forEach((elm3) => {
					elm3.removeAttribute('style');
				});
			}
			handlePageLoadMenuFocus();
		}
		enableFluidContainerDrag('.app-top-nav');
	});
	
	if (window.innerWidth >= 768) {
		handlePageLoadMenuFocus();
		enableFluidContainerDrag('.app-top-nav');
	}
};

function handleTopNavToggle(menus, forMobile = false) {
	menus.map(function(menu) {
		menu.onclick = function(e) {
			e.preventDefault();
			
			if (!forMobile || (forMobile && document.body.clientWidth < 768)) {
				var target = this.nextElementSibling;
				menus.map(function(m) {
					var otherTarget = m.nextElementSibling;
					if (otherTarget !== target) {
						slideUp(otherTarget);
						otherTarget.closest('.menu-item').classList.remove('expand');
						otherTarget.closest('.menu-item').classList.add('closed');
					}
					return true;
				});
			
				slideToggle(target);
			}
		}
		return true;
	});
};

function handleTopNavSubMenu() {
	var menuBaseSelector = '.app-top-nav .menu > .menu-item.has-sub';
	var submenuBaseSelector = ' > .menu-submenu > .menu-item.has-sub';
	
	// 14.1 Menu - Toggle / Collapse
	var menuLinkSelector =  menuBaseSelector + ' > .menu-link';
	var menus = [].slice.call(document.querySelectorAll(menuLinkSelector));
	handleTopNavToggle(menus, true);
	
	// 14.2 Menu - Submenu lvl 1
	var submenuLvl1Selector = menuBaseSelector + submenuBaseSelector;
	var submenusLvl1 = [].slice.call(document.querySelectorAll(submenuLvl1Selector + ' > .menu-link'));
	handleTopNavToggle(submenusLvl1);
	
	// 14.3 submenu lvl 2
	var submenuLvl2Selector = menuBaseSelector + submenuBaseSelector + submenuBaseSelector;
	var submenusLvl2 = [].slice.call(document.querySelectorAll(submenuLvl2Selector + ' > .menu-link'));
	handleTopNavToggle(submenusLvl2);
};

function TopNav() {
	useEffect(() => {
		handleUnlimitedTopNavRender();
		handleTopNavSubMenu();
	});
		
	return (
		<React.Fragment>
			<div id="top-nav" className="app-top-nav">
				<TopNavNav />
			</div>
		</React.Fragment>
	)
}

export default TopNav;
