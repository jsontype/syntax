import React from 'react';
import { useResolvedPath, useMatch, NavLink, useLocation, matchPath } from 'react-router-dom';
import menus from './../../config/app-menu.jsx';

function NavItem({ menu, ...props }: LinkProps) {
	let path = (menu.path) ? menu.path : '';
	let resolved = useResolvedPath(path);
  let match = useMatch({ path: resolved.pathname });
	let location = useLocation();
	
	if (menu.is_header) {
		return (
			<div className="menu-header">{ menu.title }</div>
		);
	}
	
	if (menu.is_divider) {
		return (
			<div className="menu-divider"></div>
		);
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

function SidebarNav() {
	return (
		<div className="menu">
			{menus.map((menu, i) => (
				<NavItem key={i} menu={menu} />
			))}
		</div>
	);
}

export default SidebarNav;