/*
Template: Streamit - Responsive Bootstrap 5 Admin Dashboard Template
Author: iqonic.design
Design and Developed by: iqonic.design
NOTE: This file contains the all calender events.
*/
(function (jQuery) {
    "use strict";

if (document.querySelectorAll('#calendar1').length) {
  document.addEventListener('DOMContentLoaded', function () {
    let calendarEl = document.getElementById('calendar1');
    let calendar1 = new FullCalendar.Calendar(calendarEl, {
      selectable: true,
      plugins: ["timeGrid", "dayGrid", "list", "interaction"],
      timeZone: "UTC",
      defaultView: "dayGridMonth",
      contentHeight: "auto",
      eventLimit: true,
      dayMaxEvents: 4,
      header: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
      },
      dateClick: function (info) {
          $('#schedule-start-date').val(info.dateStr)
          $('#schedule-end-date').val(info.dateStr)
          $('#date-event').modal('show')
      },
      events: [
        {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: moment(new Date(), 'YYYY-MM-DD').add(-20, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
            backgroundColor: 'rgba(58,87,232,0.2)',
            textColor: 'rgba(58,87,232,1)',
            borderColor: 'rgba(58,87,232,1)'
        },
        {
            title: 'All Day Event',
            start: moment(new Date(), 'YYYY-MM-DD').add(-18, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
            backgroundColor: 'rgba(108,117,125,0.2)',
            textColor: 'rgba(108,117,125,1)',
            borderColor: 'rgba(108,117,125,1)'
        },
        {
            title: 'Click for Google',
            start: moment(new Date(), 'YYYY-MM-DD').add(-16, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
            backgroundColor: 'rgba(8,130,12,0.2)',
            textColor: 'rgba(8,130,12,1)',
            borderColor: 'rgba(8,130,12,1)'
        },
        {
            groupId: '999',
            title: 'All day Event',
            start: moment(new Date(), 'YYYY-MM-DD').add(-14, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
            color: '#161D2B',
            backgroundColor: '#E1E6EF',
            textColor: '#161D2B',
            borderColor: '#161D2B'
        },
        {
            groupId: '999',
            title: 'Long Event',
            start: moment(new Date(), 'YYYY-MM-DD').add(-11, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
            color:'#1AA053',
            backgroundColor: '#D5EBDF',
            textColor: '#1AA053',
            borderColor: '#1AA053'
        },
        {
            title: 'Birthday Party',
            start: moment(new Date(), 'YYYY-MM-DD').add(-8, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
            color: '#161D2B',
            backgroundColor: '#E1E6EF',
            textColor: '#161D2B',
            borderColor: '#161D2B'
        },
        {
            title: 'Reporting Event',
            start: moment(new Date(), 'YYYY-MM-DD').add(-7, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
            color:'#F16A1B',
            backgroundColor: '#FCE1D1',
            textColor: '#F16A1B',
            borderColor: '#F16A1B'
        },
        {
            title: 'Repeating Event',
            start: moment(new Date(), 'YYYY-MM-DD').add(-5, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
            color:'#C03221',
            backgroundColor: '#F2D6D3',
            textColor: '#C03221',
            borderColor: '#C03221'
        },
        {
            title: 'Birthday Party',
            start: moment(new Date(), 'YYYY-MM-DD').add(-3, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
            color: '#161D2B',
            backgroundColor: '#E1E6EF',
            textColor: '#161D2B',
            borderColor: '#161D2B'
        },

        {
            title: 'Meeting',
            start: moment(new Date(), 'YYYY-MM-DD').add(-1, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
            color:'#1AA053',
            backgroundColor: '#D5EBDF',
            textColor: '#1AA053',
            borderColor: '#1AA053'
        },
        {
            title: 'Birthday Party',
            start: moment(new Date(), 'YYYY-MM-DD').add(0, 'days').format('YYYY-MM-DD') + 'T08:30:00.000Z',
            backgroundColor: '#FCE1D1',
            textColor: '#F16A1B',
            borderColor: '#F16A1B'
        },
        {
            title: 'Doctor Meeting',
            start: moment(new Date(), 'YYYY-MM-DD').add(5, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
            color:'#C03221',
            backgroundColor: '#F2D6D3',
            textColor: '#C03221',
            borderColor: '#C03221'
        },
        {
            title: 'All Day Event',
            start: moment(new Date(), 'YYYY-MM-DD').add(5, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
            backgroundColor: '#FCE1D1',
            textColor: '#F16A1B',
            borderColor: '#F16A1B'
        },
        {
            groupId: '999',
            title: 'click for Google',
            start: moment(new Date(), 'YYYY-MM-DD').add(5, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
            color: '#161D2B',
            backgroundColor: '#E1E6EF',
            textColor: '#161D2B',
            borderColor: '#161D2B'
        },
        {
            groupId: '999',
            title: 'All day Event',
            start: moment(new Date(), 'YYYY-MM-DD').add(6, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
            color: '#161D2B',
            backgroundColor: '#E1E6EF',
            textColor: '#161D2B',
            borderColor: '#161D2B'
        },
        {
            groupId: '999',
            title: 'Repeating Event',
            start: moment(new Date(), 'YYYY-MM-DD').add(13, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
            color: '#161D2B',
            backgroundColor: '#E1E6EF',
            textColor: '#161D2B',
            borderColor: '#161D2B'
        },
        {
            groupId: '999',
            title: 'Repeating Event',
            start: moment(new Date(), 'YYYY-MM-DD').add(15, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
            color: '#1AA053',
            backgroundColor: '#D5EBDF',
            textColor: '#1AA053',
            borderColor: '#1AA053'
        }
      ]
  });
  calendar1.render();
  });
  
}

})(jQuery);