import React from 'react';
import { useResolvedPath, useMatch, NavLink, useLocation, matchPath } from 'react-router-dom';
import menus from './../../config/app-menu.jsx';

function NavItem({ menu, ...props }: LinkProps) {
	let path = (menu.path) ? menu.path : '';
	let resolved = useResolvedPath(path);
  let match = useMatch({ path: resolved.pathname });
	let location = useLocation();
	
	if (menu.is_header || menu.is_divider) {
		return '';
	}
  
	let match2 = matchPath({path: path, end: false, },location.pathname);

	let icon = menu.icon && <div className="menu-icon"><i className={menu.icon}></i></div>;
	let img = menu.img && <div className="menu-icon-img"><img src={menu.img} alt="" /></div>;
	let caret = (menu.children && !menu.badge) && <div className="menu-caret"><b className="caret"></b></div>;
	let label = menu.label && <span className="menu-label ms-5px">{menu.label}</span>;
	let badge = menu.badge && <div className="menu-badge">{menu.badge}</div>;
	let highlight = menu.highlight && <i className="fa fa-paper-plane text-theme"></i>;
	let title = menu.title && <div className="menu-text">{menu.title} {label} {highlight}</div>;
	
	return (
		<div className={'menu-item' + ((match || match2) ? ' active' : '') + (menu.children ? ' has-sub' : '')}>
			<NavLink className="menu-link" to={menu.path} {...props}>
				{ img } { icon } { title }{ caret } { badge }
			</NavLink>
		
			{menu.children && (
				<div className="menu-submenu">
					{menu.children.map((submenu, i) => (
						<NavItem key={i} menu={submenu} />
					))}
				</div>
			)}
		</div>
	);
}

function TopNavNav() {
	// function handle menu button action - next / prev
	const handleMenuButtonAction = (element, direction) => {
		var obj = element.closest('.menu');
		var objStyle = window.getComputedStyle(obj);
		var bodyStyle = window.getComputedStyle(document.querySelector('body'));
		var targetCss = (bodyStyle.getPropertyValue('direction') === 'rtl') ? 'margin-right' : 'margin-left';
		var marginLeft = parseInt(objStyle.getPropertyValue(targetCss));  
		var containerWidth = document.querySelector('.app-top-nav').clientWidth - document.querySelector('.app-top-nav').clientHeight * 2;
		var totalWidth = 0;
		var finalScrollWidth = 0;
		var controlPrevObj = obj.querySelector('.menu-control-start');
		var controlPrevWidth = (controlPrevObj) ? controlPrevObj.clientWidth : 0;
		var controlNextObj = obj.querySelector('.menu-control-end');
		var controlNextWidth = (controlPrevObj) ? controlNextObj.clientWidth : 0;
		var controlWidth = controlPrevWidth + controlNextWidth;
		
		var elms = [].slice.call(obj.querySelectorAll('.menu-item'));
		if (elms) {
			elms.map(function(elm) {
				if (!elm.classList.contains('.menu-control')) {
					totalWidth += elm.clientWidth;
				}
				return true;
			});
		}

		switch (direction) {
			case 'next':
				var widthLeft = totalWidth + marginLeft - containerWidth;
				if (widthLeft <= containerWidth) {
					finalScrollWidth = widthLeft - marginLeft - controlWidth;
					setTimeout(function() {
						obj.querySelector('.menu-control.menu-control-end').classList.remove('show');
					}, 300);
				} else {
					finalScrollWidth = containerWidth - marginLeft - controlWidth;
				}

				if (finalScrollWidth !== 0) {
					obj.style.transitionProperty = 'height, margin, padding';
					obj.style.transitionDuration = '300ms';
					if (bodyStyle.getPropertyValue('direction') !== 'rtl') {
						obj.style.marginLeft = '-' + finalScrollWidth + 'px';
					} else {
						obj.style.marginRight = '-' + finalScrollWidth + 'px';
					}
					setTimeout(function() {
						obj.style.transitionProperty = '';
						obj.style.transitionDuration = '';
						obj.querySelector('.menu-control.menu-control-start').classList.add('show');
					}, 300);
				}
				break;
			case 'prev':
				widthLeft = -marginLeft;

				if (widthLeft <= containerWidth) {
					obj.querySelector('.menu-control.menu-control-start').classList.remove('show');
					finalScrollWidth = 0;
				} else {
					finalScrollWidth = widthLeft - containerWidth + controlWidth;
				}
				
				obj.style.transitionProperty = 'height, margin, padding';
				obj.style.transitionDuration = '300ms';
				
				if (bodyStyle.getPropertyValue('direction') !== 'rtl') {
					obj.style.marginLeft = '-' + finalScrollWidth + 'px';
				} else {
					obj.style.marginRight = '-' + finalScrollWidth + 'px';
				}
				
				setTimeout(function() {
					obj.style.transitionProperty = '';
					obj.style.transitionDuration = '';
					obj.querySelector('.menu-control.menu-control-end').classList.add('show');
				}, 300);
				break;
			default:
				break;
		}
	}
	
	const handleButtonClick = (event, action) => {
		handleMenuButtonAction(event.target, action);
	}
	
	return (
		<div className="menu">
			{menus.map((menu, i) => (
				<NavItem key={i} menu={menu} />
			))}
			<div className="menu-item menu-control menu-control-start">
				<button className="btn btn-link menu-link" onClick={(event) => handleButtonClick(event, 'prev')}><i className="bi bi-caret-left"></i></button>
			</div>
			<div className="menu-item menu-control menu-control-end">
				<button className="btn btn-link menu-link" onClick={(event) => handleButtonClick(event, 'next')}><i className="bi bi-caret-right"></i></button>
			</div>
		</div>
	);
}

export default TopNavNav;