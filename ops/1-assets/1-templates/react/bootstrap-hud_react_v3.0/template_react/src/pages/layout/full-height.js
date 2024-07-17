import React, { useEffect, useState, useContext } from 'react';
import Highlight from 'react-highlight';
import { Card } from './../../components/card/card.jsx';
import { AppSettings } from './../../config/app-settings.js';

function LayoutFullHeight() {
	const context = useContext(AppSettings);
	const [code1, setCode1] = useState();
	
	useEffect(() => {
		fetch('/assets/data/layout/full-height-code-1.json').then(function(response) { return response.text(); }).then((html) => { setCode1(html); });
		
		context.setAppContentFullHeight(true);
		
		return function cleanup() {
			context.setAppContentFullHeight(false);
		}
		// eslint-disable-next-line
	}, []);
	
	return (
		<div>
			<ul className="breadcrumb">
				<li className="breadcrumb-item"><a href="#/">LAYOUT</a></li>
				<li className="breadcrumb-item active">FULL HEIGHT</li>
			</ul>
	
			<h1 className="page-header">
				Full Height <small>page header description goes here...</small>
			</h1>
	
			<hr className="mb-4" />
	
			<p>
				Below is the example for how to setup a full height page
			</p>
	
			<Card className="mb-3">
				<div className="hljs-container border-0">
					<Highlight className='javascript'>{code1}</Highlight>
				</div>
			</Card>
			
			<div className="pb-5">
				Content Area with scrollbar. Try to scroll down. <i className="bi bi-chevron-down text-theme"></i>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				You got the bottom
			</div>
		</div>
	)
}

export default LayoutFullHeight;