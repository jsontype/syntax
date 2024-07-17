import React, { useEffect, useContext, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { AppSettings } from './../../config/app-settings.js';
import { Link } from 'react-router-dom';
import { Card } from './../../components/card/card.jsx';

function EmailInbox() {
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
					<div className="mailbox-sidebar">
						<PerfectScrollbar className="h-100" options={{suppressScrollX: true}}>
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
					<div className="mailbox-content d-none d-lg-block">
						<PerfectScrollbar className="h-100">
							<div className="mailbox-empty-message">
								<div className="mailbox-empty-message-icon"><i className="bi bi-inbox text-theme text-opacity-50"></i></div>
								<div className="mailbox-empty-message-title">No message selected</div>
							</div>
						</PerfectScrollbar>
					</div>
				</div>
			</div>
		</Card>
	)
}

export default EmailInbox;