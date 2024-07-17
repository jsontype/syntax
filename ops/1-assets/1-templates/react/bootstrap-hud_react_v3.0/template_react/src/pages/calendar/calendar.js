import React, { useEffect, useContext, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { AppSettings } from './../../config/app-settings.js';

function Calendar() {
	const context = useContext(AppSettings);
	const plugins = [ dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin, bootstrapPlugin ];
	const headerToolbar = {
		left: 'dayGridMonth,timeGridWeek,timeGridDay',
		center: 'title',
		right: 'prev,next today'
	};
	const buttonText = {
		today:    'Today',
		month:    'Month',
		week:     'Week',
		day:      'Day'
	};
	const views = {
		timeGrid: {
			eventLimit: 6
		}
	};
	const [events, setEvents] = useState();
	
	useEffect(() => {
		context.setAppContentFullHeight(true);
		context.setAppContentClass('p-0');
		
		var containerEl = document.getElementById('external-events');
		new Draggable(containerEl, {
			itemSelector: '.fc-event-link',
			eventData: function(eventEl) {
				return {
					title: eventEl.innerText,
					color: eventEl.getAttribute('data-color')
				};
			}
		});
		
		var themeColor = (getComputedStyle(document.body).getPropertyValue('--bs-theme')).trim();
		var blue = (getComputedStyle(document.body).getPropertyValue('--bs-blue')).trim();
		var pink = (getComputedStyle(document.body).getPropertyValue('--bs-pink')).trim();
		var indigo = (getComputedStyle(document.body).getPropertyValue('--bs-indigo')).trim();
		var green = (getComputedStyle(document.body).getPropertyValue('--bs-green')).trim();
		var red = (getComputedStyle(document.body).getPropertyValue('--bs-red')).trim();
		var orange = (getComputedStyle(document.body).getPropertyValue('--bs-orange')).trim();
		
		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
				month = (month < 10) ? '0' + month : month;
		
		setEvents([{
			title: 'Trip to London',
			start: year + '-'+ month +'-01',
			end: year + '-'+ month +'-05',
			color: themeColor
		},{
			title: 'Meet with Sean Ngu',
			start: year + '-'+ month +'-02T06:00:00',
			color: blue
		},{
			title: 'Mobile Apps Brainstorming',
			start: year + '-'+ month +'-10',
			end: year + '-'+ month +'-12',
			color: pink
		},{
			title: 'Stonehenge, Windsor Castle, Oxford',
			start: year + '-'+ month +'-05T08:45:00',
			end: year + '-'+ month +'-06T18:00',
			color: indigo
		},{
			title: 'Paris Trip',
			start: year + '-'+ month +'-12',
			end: year + '-'+ month +'-16'
		},{
			title: 'Domain name due',
			start: year + '-'+ month +'-15',
			end: year + '-'+ month +'-15',
			color: blue
		},{
			title: 'Cambridge Trip',
			start: year + '-'+ month +'-19',
			end: year + '-'+ month +'-19'
		},{
			title: 'Visit Apple Company',
			start: year + '-'+ month +'-22T05:00:00',
			color: green
		},{
			title: 'Exercise Class',
			start: year + '-'+ month +'-22T07:30:00',
			color: orange
		},{
			title: 'Live Recording',
			start: year + '-'+ month +'-22T03:00:00',
			color: blue
		},{
			title: 'Announcement',
			start: year + '-'+ month +'-22T15:00:00',
			color: red
		},{
			title: 'Dinner',
			start: year + '-'+ month +'-22T18:00:00'
		},{
			title: 'New Android App Discussion',
			start: year + '-'+ month +'-25T08:00:00',
			end: year + '-'+ month +'-25T10:00:00',
			color: red
		},{
			title: 'Marketing Plan Presentation',
			start: year + '-'+ month +'-25T12:00:00',
			end: year + '-'+ month +'-25T14:00:00',
			color: blue
		},{
			title: 'Chase due',
			start: year + '-'+ month +'-26T12:00:00',
			color: orange
		},{
			title: 'Heartguard',
			start: year + '-'+ month +'-26T08:00:00',
			color: orange
		},{
			title: 'Lunch with Richard',
			start: year + '-'+ month +'-28T14:00:00',
			color: blue
		},{
			title: 'Web Hosting due',
			start: year + '-'+ month +'-30',
			color: blue
		}]);
		
		return function cleanUp() {
			context.setAppContentFullHeight(false);
			context.setAppContentClass('');
		}
		
		// eslint-disable-next-line
	}, []);
	
	return (
		<div className="calendar">
			<div className="calendar-body">
				<PerfectScrollbar className="h-100">
					<FullCalendar 
						plugins={plugins}
						initialView="dayGridMonth"
						themeSystem="bootstrap"
						headerToolbar={headerToolbar}
						buttonText={buttonText}
						events={events}
						views={views}
					/>
				</PerfectScrollbar>
			</div>
			<div className="calendar-sidebar">
				<div className="desktop-sticky-top flex-fill h-100">
					<div className="calendar-sidebar-title">Draggable Events:</div>
					<div className="fc-event-list" id="external-events">
						<div className="fc-event-item"><div className="fc-event-link" data-color="#ff2d55"><i className="fa fa-circle fs-8px me-2 text-pink"></i> Meeting</div></div>
						<div className="fc-event-item"><div className="fc-event-link" data-color="#ff3b30"><i className="fa fa-circle fs-8px me-2 text-danger"></i> Group Discussion</div></div>
						<div className="fc-event-item"><div className="fc-event-link" data-color="#FF9500"><i className="fa fa-circle fs-8px me-2 text-warning"></i> Brainstorming</div></div>
						<div className="fc-event-item"><div className="fc-event-link" data-color="#FFCC00"><i className="fa fa-circle fs-8px me-2 text-yellow"></i> Presentation</div></div>
						<div className="fc-event-item"><div className="fc-event-link" data-color="#1ABD36"><i className="fa fa-circle fs-8px me-2 text-success"></i> Holiday</div></div>
						<div className="fc-event-item"><div className="fc-event-link" data-color="#0cd096"><i className="fa fa-circle fs-8px me-2 text-theme"></i> Sick Leave</div></div>
						<div className="fc-event-item"><div className="fc-event-link" data-color="#30beff"><i className="fa fa-circle fs-8px me-2 text-info"></i> Overtime</div></div>
						<div className="fc-event-item"><div className="fc-event-link" data-color="#1f6bff"><i className="fa fa-circle fs-8px me-2 text-blue"></i> Work from Home</div></div>
						<div className="fc-event-item"><div className="fc-event-link" data-color="#640DF3"><i className="fa fa-circle fs-8px me-2 text-indigo"></i> Business Travel</div></div>
						<div className="fc-event-item"><div className="fc-event-link" data-color="#5b2e91"><i className="fa fa-circle fs-8px me-2 text-purple"></i> Breakfast</div></div>
						<div className="fc-event-item"><div className="fc-event-link" data-color="#869ac0"><i className="fa fa-circle fs-8px me-2 text-muted"></i> Lunch</div></div>
						<div className="fc-event-item"><div className="fc-event-link" data-color="#869ac0"><i className="fa fa-circle fs-8px me-2 text-muted"></i> Dinner</div></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Calendar;