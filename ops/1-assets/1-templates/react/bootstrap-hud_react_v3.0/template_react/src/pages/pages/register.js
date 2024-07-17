import React, { useEffect, useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AppSettings } from './../../config/app-settings.js';

function PagesRegister() {
	const context = useContext(AppSettings);
	const [redirect, setRedirect] = useState(false);
	
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
	
	function handleSubmit(event) {
		event.preventDefault();
		
		setRedirect(true);
  }
  
	if (redirect) {
		return <Navigate to='/' />;
	}
	return (
		<div className="register">
			<div className="register-content">
				<form onSubmit={handleSubmit}>
					<h1 className="text-center">Sign Up</h1>
					<p className="text-inverse text-opacity-50 text-center">One Admin ID is all you need to access all the Admin services.</p>
					<div className="mb-3">
						<label className="form-label">Name <span className="text-danger">*</span></label>
						<input type="text" className="form-control form-control-lg bg-white bg-opacity-5" placeholder="e.g John Smith" />
					</div>
					<div className="mb-3">
						<label className="form-label">Email Address <span className="text-danger">*</span></label>
						<input type="text" className="form-control form-control-lg bg-white bg-opacity-5" placeholder="username@address.com" />
					</div>
					<div className="mb-3">
						<label className="form-label">Password <span className="text-danger">*</span></label>
						<input type="password" className="form-control form-control-lg bg-white bg-opacity-5" />
					</div>
					<div className="mb-3">
						<label className="form-label">Confirm Password <span className="text-danger">*</span></label>
						<input type="password" className="form-control form-control-lg bg-white bg-opacity-5" />
					</div>
					<div className="mb-3">
						<label className="form-label">Country <span className="text-danger">*</span></label>
						<select className="form-select form-select-lg bg-white bg-opacity-5">
							<option>United States</option>
						</select>
					</div>
					<div className="mb-3">
						<label className="form-label">Gender <span className="text-danger">*</span></label>
						<select className="form-select form-select-lg bg-white bg-opacity-5">
							<option>Female</option>
						</select>
					</div>
					<div className="mb-3">
						<label className="form-label">Date of Birth <span className="text-danger">*</span></label>
						<div className="row gx-2">
							<div className="col-6">
								<select className="form-select form-select-lg bg-white bg-opacity-5">
									<option>Month</option>
								</select>
							</div>
							<div className="col-3">
								<select className="form-select form-select-lg bg-white bg-opacity-5">
									<option>Day</option>
								</select>
							</div>
							<div className="col-3">
								<select className="form-select form-select-lg bg-white bg-opacity-5">
									<option>Year</option>
								</select>
							</div>
						</div>
					</div>
					<div className="mb-3">
						<div className="form-check">
							<input className="form-check-input" type="checkbox" id="customCheck1" />
							<label className="form-check-label" htmlFor="customCheck1">I have read and agree to the <a href="#/">Terms of Use</a> and <a href="#/">Privacy Policy</a>.</label>
						</div>
					</div>
					<div className="mb-3">
						<button type="submit" className="btn btn-outline-theme btn-lg d-block w-100">Sign Up</button>
					</div>
					<div className="text-inverse text-opacity-50 text-center">
						Already have an Admin ID? <Link to="/pages/login">Sign In</Link>
					</div>
				</form>
			</div>
		</div>
	)
}

export default PagesRegister;