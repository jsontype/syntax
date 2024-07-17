import React, { useEffect } from 'react';
import { ScrollSpy } from 'bootstrap';

function NavScrollTo(props) {
	useEffect(() => {
		new ScrollSpy(document.body, {
			target: '#sidebar-bootstrap',
			offset: 200
		});
		
		var elms = [].slice.call(document.querySelectorAll('#sidebar-bootstrap .nav-link'));
		elms.map(function(elm) {
			elm.onclick = function(e) {
				e.preventDefault();
				
				var targetAttr = this.getAttribute('href');
				var targetElm = document.querySelectorAll(targetAttr)[0];
				var targetHeader = document.querySelectorAll('.app-header')[0];
				var targetHeight = targetHeader.offsetHeight;
				if (targetElm) {
					var targetTop = targetElm.offsetTop - targetHeight - 24;
					window.scrollTo({top: targetTop, behavior: 'smooth'});
				}
			}
			return true;
		});
	});
	
	return (
		<nav id="sidebar-bootstrap" className="navbar navbar-sticky">
			{ props.children }
		</nav>
	);
};

export { NavScrollTo };
