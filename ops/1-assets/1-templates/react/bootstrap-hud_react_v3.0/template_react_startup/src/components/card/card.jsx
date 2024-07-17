import React, { useEffect } from 'react';
import { Tooltip } from 'bootstrap';

function Card(props) {
	return (
		<div className={'card '+ (props.className ? props.className : '')} style={props.style}>
			{ props.children }
			
			<div className="card-arrow">
				<div className="card-arrow-top-left"></div>
				<div className="card-arrow-top-right"></div>
				<div className="card-arrow-bottom-left"></div>
				<div className="card-arrow-bottom-right"></div>
			</div>
		</div>
	);
};

function CardHeader(props) {
	return (
		<div className={'card-header '+ ((props.className) ? props.className : '') } style={props.style}>
			{ props.children }
		</div>
	);
}

function CardBody(props) {
	return (
		<div className={"card-body "+ ((props.className) ? props.className : '')} style={props.style}>
			{ props.children }
		</div>
	);
};

function CardImgOverlay(props) {
	return (
		<div className={"card-img-overlay "+ ((props.className) ? props.className : '')} style={props.style}>
			{ props.children }
		</div>
	);
};

function CardFooter(props) {
	return (
		<div className={"card-footer "+ ((props.className) ? props.className : '')} style={props.style}>
			{ props.children }
		</div>
	);
};

function CardGroup(props) {
	return (
		<div className={"card-group "+ ((props.className) ? props.className : '')} style={props.style}>
			{ props.children }
		</div>
	);
};


function CardExpandToggler(props) {
	const tooltipRef = React.createRef();
	
	useEffect(() => {
		new Tooltip(tooltipRef.current, {
			title: 'Expand / Compress',
			placement: 'bottom',
			trigger: 'hover',
			container: 'body'
		});
	});
	
	function toggleCardExpand(e) {
		e.preventDefault();
		
		var target = (e.target).closest('.card');
		var targetClass = 'card-expand';

		if (document.body.classList.contains(targetClass) && target.classList.contains(targetClass)) {
			target.removeAttribute('style');
			target.classList.remove(targetClass);
			document.body.classList.remove(targetClass);
		} else {
			document.body.classList.add(targetClass);
			target.classList.add(targetClass);
		}

		window.dispatchEvent(new Event('resize'));
	}
	
	return (
		<a href="#/" onClick={toggleCardExpand} ref={tooltipRef} className="text-inverse text-opacity-50 text-decoration-none"><i className="bi bi-fullscreen"></i></a>
	);
}

export { Card, CardHeader, CardBody, CardImgOverlay, CardFooter, CardGroup, CardExpandToggler };
