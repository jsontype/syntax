import React, { useEffect, useContext, useState } from 'react';
import Highlight from 'react-highlight';
import { Card } from './../../components/card/card.jsx';
import { AppSettings } from './../../config/app-settings.js';

function LayoutTopNav() {
	const context = useContext(AppSettings);
	const [code1, setCode1] = useState();
	
	useEffect(() => {
		fetch('/assets/data/layout/top-nav-code-1.json').then(function(response) { return response.text(); }).then((html) => { setCode1(html); });
		context.setAppTopNav(true);
		context.setAppSidebarNone(true);
		
		return function cleanUp() {
			context.setAppTopNav(false);
			context.setAppSidebarNone(false);
		}
		
		// eslint-disable-next-line
	}, []);
	
	return (
		<div>
			<ul className="breadcrumb">
				<li className="breadcrumb-item"><a href="#/">LAYOUT</a></li>
				<li className="breadcrumb-item active">TOP NAV</li>
			</ul>
	
			<h1 className="page-header">
				Top Nav <small>page header description goes here...</small>
			</h1>
	
			<hr className="mb-4" />
	
			<p>
				Below is the example for how to setup a top nav page
			</p>
	
			<Card>
				<div className="hljs-container border-0">
					<Highlight className='javascript'>{code1}</Highlight>
				</div>
			</Card>
		</div>
	)
}

export default LayoutTopNav;