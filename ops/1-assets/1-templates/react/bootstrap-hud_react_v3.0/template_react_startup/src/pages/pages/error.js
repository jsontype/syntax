import React, { useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardBody } from './../../components/card/card.jsx';
import { AppSettings } from './../../config/app-settings.js';

function PagesError() {
	const context = useContext(AppSettings);
	const navigate = useNavigate();
	
	function handleBackBtn() {
		navigate(-1);
	}
	
	useEffect(() => {
		context.setAppHeaderNone(true);
		context.setAppSidebarNone(true);
		context.setAppContentClass('p-0');
		
		return function cleanUp() {
			context.setAppHeaderNone(false);
			context.setAppSidebarNone(false);
			context.setAppContentClass('');
		};
		
		// eslint-disable-next-line
	}, []);

	return (
		<div className="error-page">
			<div className="error-page-content">
				<Card className="mb-5 mx-auto" style={{maxWidth: '320px'}}>
					<CardBody>
						<Card>
							<div className="error-code">404</div>
						</Card>
					</CardBody>
				</Card>
				<h1>Oops!</h1> 
				<h3>We can't seem to find the page you're looking for</h3>
				<hr />
				<p className="mb-1">
					Here are some helpful links instead:
				</p>
				<p className="mb-5">
					<Link to="/" className="text-decoration-none text-inverse text-opacity-50">Home</Link>
					<span className="link-divider"></span>
					<Link to="/pages/search-results" className="text-decoration-none text-inverse text-opacity-50">Search</Link>
					<span className="link-divider"></span>
					<Link to="/email/inbox" className="text-decoration-none text-inverse text-opacity-50">Email</Link>
					<span className="link-divider"></span>
					<Link to="/calendar" className="text-decoration-none text-inverse text-opacity-50">Calendar</Link>
					<span className="link-divider"></span>
					<Link to="/settings" className="text-decoration-none text-inverse text-opacity-50">Settings</Link>
					<span className="link-divider"></span>
					<Link to="/helper" className="text-decoration-none text-inverse text-opacity-50">Helper</Link>
				</p>
				<button onClick={handleBackBtn} className="btn btn-outline-theme px-3 rounded-pill"><i className="fa fa-arrow-left me-1 ms-n1"></i> Go Back</button>
			</div>
		</div>
	)
}

export default PagesError;