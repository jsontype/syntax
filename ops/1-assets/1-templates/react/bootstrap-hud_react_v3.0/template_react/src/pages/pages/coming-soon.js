import React, { useEffect, useContext } from 'react';
import Countdown from 'react-countdown';
import { AppSettings } from './../../config/app-settings.js';

function PagesComingSoon() {
	const context = useContext(AppSettings);
	
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
		<div className="coming-soon">
			<div className="flex-1">
				<div className="coming-soon-timer text-center">
					<Countdown 
						date={Date.now() + 1000000000}
						renderer={
							props =>
							<div className="is-countdown">
								<div className="countdown-row countdown-show4">
									<div className="countdown-section">
										<div className="countdown-amount">{props.days}</div>
										<div className="countdown-period">Days</div>
									</div>
									<div className="countdown-section">
										<div className="countdown-amount">{props.hours}</div>
										<div className="countdown-period">Hours</div>
									</div>
									<div className="countdown-section">
										<div className="countdown-amount">{props.minutes}</div>
										<div className="countdown-period">Minutes</div>
									</div>
									<div className="countdown-section">
										<div className="countdown-amount">{props.seconds}</div>
										<div className="countdown-period">Seconds</div>
									</div>
								</div>
							</div>
						}
					/>
				</div>
				<div className="coming-soon-content d-flex flex-column">
					<div className="flex-1 mb-3">
						<h2 className="mb-3">We're coming soon!</h2>
						<p className="mb-4">We are working very hard on the new version of our site.<br /> It will bring a lot of new features. Stay tuned!</p>
						<div className="input-group mb-2">
							<input type="text" className="form-control" placeholder="Email Address" />
							<button type="submit" className="btn btn-outline-theme">SUBSCRIBE</button>
						</div>
						<div className="mb-1 small text-inverse text-opacity-50">* Subscribe and get notified for latest news</div>
					</div>
					<div className="text-center small text-inverse text-opacity-50">
						&copy; 2024 SeanTheme Right Reserved
					</div>
				</div>
			</div>
		</div>
	)
}

export default PagesComingSoon;