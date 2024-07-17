import React, { useEffect, useContext, useState } from 'react';
import Highlight from 'react-highlight';
import { Card } from './../../components/card/card.jsx';
import { AppSettings } from './../../config/app-settings.js';
import { useNavigate } from 'react-router-dom';

function LayoutFullWidth() {
	const context = useContext(AppSettings);
	const navigate = useNavigate();
	const [code1, setCode1] = useState();
	
	function handleBackBtn() {
		navigate(-1);
	}
	
	useEffect(() => {
		fetch('/assets/data/layout/full-width-code-1.json').then(function(response) { return response.text(); }).then((html) => { setCode1(html) });
		context.setAppSidebarNone(true);
		
		return function cleanUp() {
			context.setAppSidebarNone(false);
		}
		
		// eslint-disable-next-line
	}, []);
	
	return (
		<div>
			<ul className="breadcrumb">
				<li className="breadcrumb-item"><a href="#/">LAYOUT</a></li>
				<li className="breadcrumb-item active">FULL WIDTH</li>
			</ul>
	
			<h1 className="page-header">
				Full Width <small>page header description goes here...</small>
			</h1>
	
			<hr className="mb-4" />
	
			<p>
				Below is the example for how to setup a full width page
			</p>
	
			<Card className="mb-3">
				<div className="hljs-container border-0">
					<Highlight className='javascript'>{code1}</Highlight>
				</div>
			</Card>
			<p>
				<button onClick={handleBackBtn} className="btn btn-outline-theme"><i className="bi bi-chevron-left fa-fw ms-n1"></i> Back to previous Page</button>
			</p>
		</div>
	)
}

export default LayoutFullWidth;