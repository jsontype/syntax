import React, { useEffect, useContext } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Card } from './../../components/card/card.jsx';
import { AppSettings } from './../../config/app-settings.js';

function PagesMessenger() {
	const context = useContext(AppSettings);
  
	useEffect(() => {
		context.setAppContentClass('p-3');
		context.setAppContentFullHeight(true);
		
		return function cleanUp() {
			context.setAppContentClass('');
			context.setAppContentFullHeight(false);
		};
		
		// eslint-disable-next-line
	}, []);
  
	return (
		<Card className="h-100">
			<div className="messenger">
				<div className="messenger-sidebar">
					<div className="messenger-sidebar-header">
						<h3 className="mb-10px">Chats</h3>
						<div className="position-relative">
							<button type="submit" className="btn position-absolute top-0"><i className="bi bi-search"></i></button>
							<input type="text" className="form-control rounded-pill ps-35px" placeholder="Search Messenger" />
						</div>
					</div>
					<div className="messenger-sidebar-body">
						<PerfectScrollbar className="h-100">
							<div className="messenger-item">
								<a href="#/" data-toggle="messenger-content" className="messenger-link active">
									<div className="messenger-media bg-theme text-black text-opacity-75 rounded-pill fs-24px fw-bold">
										<i className="bi bi-android2"></i>
									</div>
									<div className="messenger-info">
										<div className="messenger-name">Mobile App Development Group 10</div>
										<div className="messenger-text">Roberto says Hey Gabe, can you forward me the meeting notes?</div>
									</div>
									<div className="messenger-time-badge">
										<div className="messenger-time">13:02</div>
										<div className="messenger-badge">2</div>
									</div>
								</a>
							</div>
							<div className="messenger-item">
								<a href="#/" data-toggle="messenger-content" className="messenger-link">
									<div className="messenger-media">
										<img src="/assets/img/user/user-2.jpg" alt="" className="mw-100 mh-100 rounded-pill" />
									</div>
									<div className="messenger-info">
										<div className="messenger-name">Roberto</div>
										<div className="messenger-text">Say hello to Alice</div>
									</div>
									<div className="messenger-time-badge">
										<div className="messenger-time">14:59</div>
										<div className="messenger-badge">1</div>
									</div>
								</a>
							</div>
							<div className="messenger-item">
								<a href="#/" data-toggle="messenger-content" className="messenger-link">
									<div className="messenger-media">
										<img src="/assets/img/user/user-3.jpg" alt="" className="mw-100 mh-100 rounded-pill" />
									</div>
									<div className="messenger-info">
										<div className="messenger-name">Graduation Party</div>
										<div className="messenger-text"><b>Dan:</b> Wow, almost 2,500 members!</div>
									</div>
									<div className="messenger-time-badge">
										<div className="messenger-time">14:42</div>
										<div className="messenger-badge empty"></div>
									</div>
								</a>
							</div>
							<div className="messenger-item">
								<a href="#/" data-toggle="messenger-content" className="messenger-link">
									<div className="messenger-media">
										<img src="/assets/img/user/user-4.jpg" alt="" className="mw-100 mh-100 rounded-pill" />
									</div>
									<div className="messenger-info">
										<div className="messenger-name">Karen Stanford</div>
										<div className="messenger-text">Table for four, 2 PM. Be there.</div>
									</div>
									<div className="messenger-time-badge">
										<div className="messenger-time">14:40</div>
										<div className="messenger-badge empty"></div>
									</div>
								</a>
							</div>
							<div className="messenger-item">
								<a href="#/" data-toggle="messenger-content" className="messenger-link">
									<div className="messenger-media">
										<img src="/assets/img/user/user-5.jpg" alt="" className="mw-100 mh-100 rounded-pill" />
									</div>
									<div className="messenger-info">
										<div className="messenger-name">Wave Hunters</div>
										<div className="messenger-text"><b>Monika Parker:</b> Poll</div>
									</div>
									<div className="messenger-time-badge">
										<div className="messenger-time">12:45</div>
										<div className="messenger-badge empty"></div>
									</div>
								</a>
							</div>
							<div className="messenger-item">
								<a href="#/" data-toggle="messenger-content" className="messenger-link">
									<div className="messenger-media">
										<img src="/assets/img/user/user-6.jpg" alt="" className="mw-100 mh-100 rounded-pill" />
									</div>
									<div className="messenger-info">
										<div className="messenger-name">Little Sister</div>
										<div className="messenger-text">I got a job at NASA!</div>
									</div>
									<div className="messenger-time-badge">
										<div className="messenger-time">12:45</div>
										<div className="messenger-badge empty"></div>
									</div>
								</a>
							</div>
							<div className="messenger-item">
								<a href="#/" data-toggle="messenger-content" className="messenger-link">
									<div className="messenger-media">
										<img src="/assets/img/user/user-7.jpg" alt="" className="mw-100 mh-100 rounded-pill" />
									</div>
									<div className="messenger-info">
										<div className="messenger-name">Monika Parker</div>
										<div className="messenger-text">I don't remember anything.</div>
									</div>
									<div className="messenger-time-badge">
										<div className="messenger-time"><i className="bi bi-check2-all"></i> 10:00</div>
										<div className="messenger-badge empty"></div>
									</div>
								</a>
							</div>
							<div className="messenger-item">
								<a href="#/" data-toggle="messenger-content" className="messenger-link">
									<div className="messenger-media">
										<img src="/assets/img/user/user-8.jpg" alt="" className="mw-100 mh-100 rounded-pill" />
									</div>
									<div className="messenger-info">
										<div className="messenger-name">Cat Videos</div>
										<div className="messenger-text"><b><i className="bi bi-play-circle-fill"></i> Video</b></div>
									</div>
									<div className="messenger-time-badge">
										<div className="messenger-time">09:00</div>
										<div className="messenger-badge empty"></div>
									</div>
								</a>
							</div>
							<div className="messenger-item">
								<a href="#/" data-toggle="messenger-content" className="messenger-link">
									<div className="messenger-media">
										<img src="/assets/img/user/user-9.jpg" alt="" className="mw-100 mh-100 rounded-pill" />
									</div>
									<div className="messenger-info">
										<div className="messenger-name">Garrick Banks</div>
										<div className="messenger-text">What are we doing for Jen's birthday on Friday?</div>
									</div>
									<div className="messenger-time-badge">
										<div className="messenger-time">09:41</div>
										<div className="messenger-badge empty"></div>
									</div>
								</a>
							</div>
							<div className="messenger-item">
								<a href="#/" data-toggle="messenger-content" className="messenger-link">
									<div className="messenger-media">
										<img src="/assets/img/user/user-10.jpg" alt="" className="mw-100 mh-100 rounded-pill" />
									</div>
									<div className="messenger-info">
										<div className="messenger-name">Michelle</div>
										<div className="messenger-text">Let's get lunch tomorrow</div>
									</div>
									<div className="messenger-time-badge">
										<div className="messenger-time">08:45</div>
										<div className="messenger-badge">1</div>
									</div>
								</a>
							</div>
							<div className="messenger-item">
								<a href="#/" data-toggle="messenger-content" className="messenger-link">
									<div className="messenger-media">
										<img src="/assets/img/user/user-2.jpg" alt="" className="mw-100 mh-100 rounded-pill" />
									</div>
									<div className="messenger-info">
										<div className="messenger-name">Dana Klein</div>
										<div className="messenger-text">Next Friday works for me</div>
									</div>
									<div className="messenger-time-badge">
										<div className="messenger-time">08:30</div>
										<div className="messenger-badge">1</div>
									</div>
								</a>
							</div>
							<div className="messenger-item">
								<a href="#/" data-toggle="messenger-content" className="messenger-link">
									<div className="messenger-media">
										<img src="/assets/img/user/user-1.jpg" alt="" className="mw-100 mh-100 rounded-pill" />
									</div>
									<div className="messenger-info">
										<div className="messenger-name">April</div>
										<div className="messenger-text">Yes or yes? ;)</div>
									</div>
									<div className="messenger-time-badge">
										<div className="messenger-time">08:22</div>
										<div className="messenger-badge empty"></div>
									</div>
								</a>
							</div>
						</PerfectScrollbar>
					</div>
				</div>
				<div className="messenger-content">
					<div className="messenger-content-header">
						<div className="messenger-content-header-mobile-toggler">
							<a href="#/" data-toggle="messenger-content" className="me-2">
								<i className="bi bi-chevron-left"></i>
							</a>
						</div>
						<div className="messenger-content-header-media">
							<div className="media bg-theme text-black text-opacity-75 rounded-pill fs-24px fw-bold">
								<i className="bi bi-android2"></i>
							</div>
						</div>
						<div className="messenger-content-header-info">
							Mobile App Development Group
							<small>10 members</small>
						</div>
						<div className="messenger-content-header-btn">
							<a href="#/" className="btn btn-link"><i className="bi bi-search"></i></a>
							<span className="dropdown">
								<a href="#/" className="btn btn-link" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
								<div className="dropdown-menu fs-11px">
									<a href="#/" className="dropdown-item d-flex align-items-center"><i className="bi bi-pencil-square fs-14px my-n1 me-3 ms-n2"></i> EDIT</a>
									<a href="#/" className="dropdown-item d-flex align-items-center"><i className="bi bi-info-circle fs-14px my-n1 me-3 ms-n2"></i> INFO</a>
									<a href="#/" className="dropdown-item d-flex align-items-center"><i className="bi bi-bell-slash fs-14px my-n1 me-3 ms-n2"></i> MUTE</a>
									<a href="#/" className="dropdown-item d-flex align-items-center"><i className="bi bi-x-circle fs-14px my-n1 me-3 ms-n2"></i> CLEAR CHAT HISTORY</a>
									<div className="dropdown-divider"></div>
									<a href="#/" className="dropdown-item d-flex align-items-center text-danger"><i className="bi bi-trash fs-14px my-n1 me-3 ms-n2"></i> DELETE AND LEAVE</a>
								</div>
							</span>
						</div>
					</div>
					<div className="messenger-content-body">
						<PerfectScrollbar className="h-100">
							<div className="widget-chat">
								<div className="widget-chat-date">YESTERDAY</div>
								<div className="widget-chat-item">
									<div className="widget-chat-media"><img src="/assets/img/user/user-5.jpg" alt="" /></div>
									<div className="widget-chat-content">
										<div className="widget-chat-name">Ann Gray</div>
										<div className="widget-chat-message">
											Hey folks, please check your emails. I have shared you the slide.
										</div>
										<div className="widget-chat-status">Yesterday 3:25PM</div>
									</div>
								</div>
								<div className="widget-chat-item">
									<div className="widget-chat-media"><img src="/assets/img/user/user-6.jpg" alt="" /></div>
									<div className="widget-chat-content">
										<div className="widget-chat-name">Jeffrey Clark</div>
										<div className="widget-chat-message">
											Hey folks, please check your emails. I have shared you the slide.
										</div>
										<div className="widget-chat-status">Yesterday 3:27PM</div>
									</div>
								</div>
								<div className="widget-chat-item">
									<div className="widget-chat-media"><img src="/assets/img/user/user-7.jpg" alt="" /></div>
									<div className="widget-chat-content">
										<div className="widget-chat-name">Adam Lee</div>
										<div className="widget-chat-message">
											Yes, we are going to use this slide. But we will have only 5 minutes to present it.
										</div>
										<div className="widget-chat-status">Yesterday 3:30PM</div>
									</div>
								</div>
								<div className="widget-chat-date">TODAY</div>
								<div className="widget-chat-item">
									<div className="widget-chat-media"><img src="/assets/img/user/user-1.jpg" alt="" /></div>
									<div className="widget-chat-content">
										<div className="widget-chat-name">Roberto Lambert</div>
										<div className="widget-chat-message">
											Hi, will be a little late to the production meeting.
										</div>
										<div className="widget-chat-status">2:21PM</div>
									</div>
								</div>
								<div className="widget-chat-item reply">
									<div className="widget-chat-content">
										<div className="widget-chat-message last">
											No problem. I will be sure to take notes.
										</div>
										<div className="widget-chat-status">2:22PM</div>
									</div>
								</div>
								<div className="widget-chat-item">
									<div className="widget-chat-media"><img src="/assets/img/user/user-2.jpg" alt="" /></div>
									<div className="widget-chat-content">
										<div className="widget-chat-name">Roberto Lambert</div>
										<div className="widget-chat-message">
											Thank you! I should be there by 9:10.
										</div>
										<div className="widget-chat-status">2:25PM</div>
									</div>
								</div>
								<div className="widget-chat-item reply">
									<div className="widget-chat-content">
										<div className="widget-chat-message last">
											Don't rush. I've got it covered.
										</div>
										<div className="widget-chat-status">2:27PM</div>
									</div>
								</div>
								<div className="widget-chat-item">
									<div className="widget-chat-media"><img src="/assets/img/user/user-1.jpg" alt="" /></div>
									<div className="widget-chat-content">
										<div className="widget-chat-name">Roberto Lambert</div>
										<div className="widget-chat-message">
											Hey Gabe, can you forward me the meeting notes?
										</div>
										<div className="widget-chat-status">4:30PM</div>
									</div>
								</div>
							</div>
						</PerfectScrollbar>
					</div>
					<div className="messenger-content-footer">
						<div className="input-group input-group-lg position-relative">
							<button className="btn position-absolute start-0" id="trigger"><i className="far fa-face-smile"></i></button>
							<input type="text" className="form-control rounded-start ps-45px" id="input" placeholder="Write a message..." />
							<button className="btn btn-outline-default" type="button"><i className="fa fa-paper-plane text-muted"></i></button>
						</div>
					</div>
				</div>
			</div>
		</Card>
	)
}

export default PagesMessenger;