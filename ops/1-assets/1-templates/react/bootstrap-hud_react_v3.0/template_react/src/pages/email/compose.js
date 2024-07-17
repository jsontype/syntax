import React, { useEffect, useContext } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import ReactQuill from 'react-quill';
import { AppSettings } from './../../config/app-settings.js';
import { Link } from 'react-router-dom';
import { Card } from './../../components/card/card.jsx';
import { TagsInput } from 'react-tag-input-component';
import 'react-quill/dist/quill.snow.css';

function EmailCompose() {
	const context = useContext(AppSettings);
	var mailTo = ['support@seantheme.com'];
	var mailCc = [];
	var mailBcc = [];
	var mailBody = '';
  
  function setMailBody(value) {
  
  }

	useEffect(() => {
		context.setAppContentFullHeight(true);
		context.setAppContentClass('p-3');
		
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
					<div className="mailbox-toolbar-item"><span className="mailbox-toolbar-text">New Message</span></div>
					<div className="mailbox-toolbar-item"><a href="#/" className="mailbox-toolbar-link active">Send</a></div>
					<div className="mailbox-toolbar-item"><a href="#/" className="mailbox-toolbar-link">Attachment</a></div>
					<div className="mailbox-toolbar-item"><Link to="/email/inbox" className="mailbox-toolbar-link">Discard</Link></div>
					<div className="mailbox-toolbar-item dropdown">
						<a href="#/" className="mailbox-toolbar-link" data-bs-toggle="dropdown"><i className="fa fa-ellipsis-h"></i></a>
						<div className="dropdown-menu ms-n1 position-fixed">
							<a href="#/" className="dropdown-item">Save draft</a>
							<a href="#/" className="dropdown-item">Show From</a>
							<a href="#/" className="dropdown-item">Check names</a>
							<a href="#/" className="dropdown-item">Set importance</a>
							<a href="#/" className="dropdown-item">Switch to plain text</a>
							<a href="#/" className="dropdown-item">Check for accessibility issues</a>
						</div>
					</div>
					<div className="mailbox-toolbar-item ms-auto"><a href="#/" className="mailbox-toolbar-link"><i className="fa fa-redo fa-fw fs-12px me-1"></i> Undo</a></div>
					<div className="mailbox-toolbar-item"><Link to="/email/inbox" className="mailbox-toolbar-link"><i className="fa fa-times fa-fw"></i> Cancel</Link></div>
				</div>
				<div className="mailbox-body">
					<div className="mailbox-content">
						<PerfectScrollbar className="h-100">
							<div className="mailbox-form h-100">
								<form action="#" method="POST" name="email_form" className="h-100">
									<div className="mailbox-form-header">
										<div className="row mb-2">
											<label className="col-form-label w-100px px-2 fw-500 text-lg-end">To:</label>
											<div className="col-lg">
												<TagsInput value={mailTo} name="mailTo" placeHolder="enter email" />
											</div>
										</div>
										<div className="row mb-2">
											<label className="col-form-label w-100px px-2 fw-500 text-lg-end">Cc:</label>
											<div className="col-lg">
												<TagsInput value={mailCc} name="mailCc" placeHolder="" />
											</div>
										</div>
										<div className="row mb-2">
											<label className="col-form-label w-100px px-2 fw-500 text-lg-end">Bcc:</label>
											<div className="col-lg">
												<TagsInput value={mailBcc} name="mailBcc" placeHolder="" />
											</div>
										</div>
										<div className="row mb-0">
											<label className="col-form-label w-100px px-2 fw-500 text-lg-end">Subject:</label>
											<div className="col-lg">
												<input type="text" className="form-control" placeholder="Email subject" />
											</div>
										</div>
									</div>
									<ReactQuill theme="snow" className="h-100" value={mailBody} onChange={setMailBody} />
								</form>
							</div>
						</PerfectScrollbar>
					</div>
				</div>
			</div>
		</Card>
	)
}

export default EmailCompose;