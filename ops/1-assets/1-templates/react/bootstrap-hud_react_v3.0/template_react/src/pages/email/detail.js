import React, { useEffect, useContext, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { AppSettings } from './../../config/app-settings.js';
import { Link } from 'react-router-dom';
import { Card } from './../../components/card/card.jsx';

function EmailDetail() {
	const context = useContext(AppSettings);
	const [mailData, setMailData] = useState();
	
	useEffect(() => {
		context.setAppContentFullHeight(true);
		context.setAppContentClass('p-3');
		
		fetch('/assets/data/email/inbox.json').then(res => res.json()).then((result) => { setMailData(result); });
		
		return function cleanUp() {
			context.setAppContentFullHeight(false);
			context.setAppContentClass('');
		}
		
		// eslint-disable-next-line
	}, []);

	return (
		<Card className="h-100">
			<div className="mailbox">
				<div className="mailbox-toolbar">
					<div className="mailbox-toolbar-item"><span className="mailbox-toolbar-text">Mailboxes</span></div>
					<div className="mailbox-toolbar-item"><Link to="/email/inbox" className="mailbox-toolbar-link active">Inbox</Link></div>
					<div className="mailbox-toolbar-item"><Link to="/email/inbox" className="mailbox-toolbar-link">Sent</Link></div>
					<div className="mailbox-toolbar-item"><Link to="/email/inbox" className="mailbox-toolbar-link">Drafts (1)</Link></div>
					<div className="mailbox-toolbar-item"><Link to="/email/inbox" className="mailbox-toolbar-link">Junk</Link></div>
					<div className="mailbox-toolbar-item"><Link to="/email/compose" className="mailbox-toolbar-link text-inverse bg-inverse bg-opacity-15">New Message <i className="fa fa-pen fs-12px ms-1"></i></Link></div>
				</div>
				<div className="mailbox-body">
					<div className="mailbox-sidebar d-none d-lg-block">
						<PerfectScrollbar className="h-100">
							<div className="mailbox-list">
								{mailData && mailData.length > 0 ? (mailData.map((mail, index) => (
									<div key={index} className={'mailbox-list-item' + ((mail.unread) ? ' unread' : '') + ((mail.hasAttachment) ? ' has-attachment' : '')}>
										<div className="mailbox-checkbox">
											<div className="form-check">
												<input className="form-check-input" type="checkbox" value="" id={'mailCheckbox' + index} />
												<label className="form-check-label" htmlFor={'mailCheckbox'+ index}></label>
											</div>
										</div>
										<div className="mailbox-message">
											<Link to="/email/detail" className="mailbox-list-item-link">
												<div className="mailbox-sender">
													<span className="mailbox-sender-name">{mail.sender}</span>
													<span className="mailbox-time">{mail.time}</span>
												</div>
												<div className="mailbox-title">{mail.title}</div>
												<div className="mailbox-desc">{mail.desc}</div>
											</Link>
										</div>
									</div>
								))) : (
									<div className="mailbox-list-item" style={{ minWidth: '360px' }}>
										No records found
									</div>
								)}
							</div>
						</PerfectScrollbar>
					</div>
					<div className="mailbox-content">
						<PerfectScrollbar className="h-100">
							<div className="mailbox-detail">
								<div className="mailbox-detail-header">
									<div className="d-flex">
										<a href="#/">
											<img src="/assets/img/user/user-1.jpg" alt="" width="40" className="rounded-circle" />
										</a>
										<div className="flex-fill ms-3">
											<div className="d-lg-flex align-items-center">
												<div className="flex-1">
													<div className="fw-600">John Smith &lt;support@seantheme.com&gt;</div>
													<div className="fs-13px">
														<span className="me-1">to</span> <a href="#/" className="text-decoration-none">support@seantheme.com</a>, <a href="#/" className="text-decoration-none">seantheme@admin.com</a>
													</div>
												</div>
												<div className="fs-12px text-white text-opacity-50 text-lg-end mt-lg-0 mt-3">Nov 27, 2024 <span className="d-none d-lg-inline"><br /></span>at 7.00pm</div>
											</div>
										</div>
									</div>
								</div>
								<div className="mailbox-detail-content">
									<h4 className="mb-3">Your payment is received</h4>
									<div className="mailbox-detail-attachment">
										<div className="mailbox-attachment">
											<a href="#/">
												<div className="document-file">
													<i className="fa fa-file-archive"></i>
												</div>
												<div className="document-name">invoice.zip</div>
											</a>
										</div>
										<div className="mailbox-attachment">
											<a href="#/">
												<div className="document-file">
													<i className="fa fa-file-video"></i>
												</div>
												<div className="document-name">video.mp4</div>
											</a>
										</div>
										<div className="mailbox-attachment">
											<a href="#/">
												<div className="document-file">
													<img src="/assets/img/gallery/gallery-10.jpg" alt="" />
												</div>
												<div className="document-name">image.jpg</div>
											</a>
										</div>
									</div>
									<div className="mb-3"><a href="#/" className="btn btn-rounded px-3 btn-sm bg-theme bg-opacity-20 text-theme fw-600 rounded">Download</a></div>
									<div className="mailbox-detail-body">
										Hi Dear Customer,<br />
										<br />
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel auctor nisi, vel auctor orci. <br />
										Aenean in pretium odio, ut lacinia tellus. Nam sed sem ac enim porttitor vestibulum vitae at erat.<br />
										<br />
										Curabitur auctor non orci a molestie. Nunc non justo quis orci viverra pretium id ut est. <br />
										Nullam vitae dolor id enim consequat fermentum. Ut vel nibh tellus. <br />
										Duis finibus ante et augue fringilla, vitae scelerisque tortor pretium. <br />
										Phasellus quis eros erat. Nam sed justo libero.<br />
										<br />
										Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.<br />
										Sed tempus dapibus libero ac commodo.<br />
										<br />
										<br />
										Regards,<br />
										Twitter Inc,<br />
										795 Folsom Ave, Suite 600<br />
										San Francisco, CA 94107<br />
										P: (123) 456-7890<br />
									</div>
								</div>
							</div>
						</PerfectScrollbar>
					</div>
				</div>
			</div>
		</Card>
	)
}

export default EmailDetail;