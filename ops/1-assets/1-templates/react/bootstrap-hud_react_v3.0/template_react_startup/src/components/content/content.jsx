import React from 'react';
import { Outlet } from 'react-router-dom';

function Content(props) {
	return (
		<div className={'app-content '+ (props.className ? props.className : '')}>
			<Outlet />
		</div>
	)
}

export default Content;
