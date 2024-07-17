import React, { useEffect, useContext, useState } from 'react';
import Highlight from 'react-highlight';
import { Card } from './../../components/card/card.jsx';
import { AppSettings } from './../../config/app-settings.js';

function LayoutFixedFooter() {
	const context = useContext(AppSettings);
	const [code1, setCode1] = useState();
	
	useEffect(() => {
		fetch('/assets/data/layout/fixed-footer-code-1.json').then(function(response) { return response.text(); }).then((html) => { setCode1(html); });
		context.setAppFooter(true);
		
		return function cleanUp() {
			context.setAppFooter(false);
		}
		
		// eslint-disable-next-line
	}, []);
	
	return (
		<div>
			<ul className="breadcrumb">
				<li className="breadcrumb-item"><a href="#/">LAYOUT</a></li>
				<li className="breadcrumb-item active">FIXED FOOTER</li>
			</ul>
	
			<h1 className="page-header">
				Fixed Footer <small>page header description goes here...</small>
			</h1>
	
			<hr className="mb-4" />
	
			<p>
				Below is the example for how to setup a fixed footer page
			</p>
	
			<Card>
				<div className="hljs-container border-0">
					<Highlight className='javascript'>{code1}</Highlight>
				</div>
			</Card>
		</div>
	)
}

export default LayoutFixedFooter;