(function(jQuery) {

    "use strict";
    jQuery(document).ready(function() {
        var rightSideBarMini = false;
        checkRightSideBar(rightSideBarMini);
        jQuery(document).on('click', '.right-sidebar-toggle', function() {
            if (rightSideBarMini) {
                rightSideBarMini = false;
            } else {
                rightSideBarMini = true;
            }
            checkRightSideBar(rightSideBarMini);
        })
    });

    function checkRightSideBar(rightSideBarMini) {
        if (rightSideBarMini) {
            rightSideBarShow();
        } else {
            rightSideBarHide()
        }
    }

    function rightSideBarShow() {
        jQuery('.right-sidebar-mini').addClass('right-sidebar')
    }

    function rightSideBarHide() {
        jQuery('.right-sidebar-mini').removeClass('right-sidebar')
    }

})(jQuery);


/*--------------Chart 1----------------*/

var options = {
    chart: {
        height: 80,
        type: 'area',
        sparkline: {
            enabled: true
        },
        group: 'sparklines',

    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 3,
        curve: 'smooth'
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0,
        }
    },

    series: [{
        name: 'series1',
        data: [60, 15, 50, 30, 70]
    }, ],
    colors: ['#ff4545'],

    xaxis: {
        type: 'datetime',
        categories: ["2018-08-19T00:00:00", "2018-09-19T01:30:00", "2018-10-19T02:30:00", "2018-11-19T01:30:00", "2018-12-19T01:30:00"],
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    }
};

if(jQuery('#chart-1').length){
    var chart = new ApexCharts(
        document.querySelector("#chart-1"),
        options
    );
    chart.render();
}


/*--------------Chart 2----------------*/
var options = {
    chart: {
        height: 80,
        type: 'area',
        sparkline: {
            enabled: true
        },
        group: 'sparklines',

    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 3,
        curve: 'smooth'
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0,
        }
    },
    series: [{
        name: 'series1',
        data: [70, 40, 60, 30, 60]
    }, ],
    colors: ['#ff4545'],

    xaxis: {
        type: 'datetime',
        categories: ["2018-08-19T00:00:00", "2018-09-19T01:30:00", "2018-10-19T02:30:00", "2018-11-19T01:30:00", "2018-12-19T01:30:00"],
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    }
};

if(jQuery('#chart-2').length){
    var chart = new ApexCharts(
        document.querySelector("#chart-2"),
        options
    );

    chart.render();
}

/*--------------Chart 3----------------*/
var options = {
    chart: {
        height: 80,
        type: 'area',
        sparkline: {
            enabled: true
        },
        group: 'sparklines',

    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 3,
        curve: 'smooth'
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0,
        }
    },
    series: [{
        name: 'series1',
        data: [60, 40, 60, 40, 70]
    }, ],
    colors: ['#1ee2ac'],

    xaxis: {
        type: 'datetime',
        categories: ["2018-08-19T00:00:00", "2018-09-19T01:30:00", "2018-10-19T02:30:00", "2018-11-19T01:30:00", "2018-12-19T01:30:00"],
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    }
};
if(jQuery('#chart-3').length){
    var chart = new ApexCharts(
        document.querySelector("#chart-3"),
        options
    );
    chart.render();
}

/*--------------Chart 4----------------*/
var options = {
    chart: {
        height: 80,
        type: 'area',
        sparkline: {
            enabled: true
        },
        group: 'sparklines',

    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 3,
        curve: 'smooth'
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0,
        }
    },
    series: [{
        name: 'series1',
        data: [75, 30, 60, 35, 60]
    }, ],
    colors: ['#e64141'],

    xaxis: {
        type: 'datetime',
        categories: ["2018-08-19T00:00:00", "2018-09-19T01:30:00", "2018-10-19T02:30:00", "2018-11-19T01:30:00", "2018-12-19T01:30:00"],
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    }
};

if(jQuery('#chart-4').length){
    var chart = new ApexCharts(
        document.querySelector("#chart-4"),
        options
    );

    chart.render();
}

/*--------------Chart 5----------------*/
var options = {
    chart: {
        height: 200,
        type: 'line',
        sparkline: {
            enabled: true
        },
        stacked: false,
    },
    stroke: {
        width: [2, 3],
        curve: 'smooth',
        dashArray: [0, 5]
    },
    plotOptions: {
        bar: {
            columnWidth: '50%'
        }
    },
    colors: ['#1ee2ac', '#ff4545'],
    series: [{
        name: 'Vine',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    }, {
        name: 'Dribbble',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }],
    fill: {
        opacity: [0.2, 1],
        gradient: {
            inverseColors: false,
            shade: 'light',
            type: "vertical",
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
        }
    },
    labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
    markers: {
        size: 0
    },
    xaxis: {
        type: 'datetime'
    },
    yaxis: {
        min: 0
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function(y) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0) + " views";
                }
                return y;

            }
        }
    },
    legend: {
        labels: {
            useSeriesColors: true
        },
        markers: {
            customHTML: [
                function() {
                    return ''
                },
                function() {
                    return ''
                },
                function() {
                    return ''
                }
            ]
        }
    }
};

if(jQuery('#chart-5').length) {
    var chart = new ApexCharts(
        document.querySelector("#chart-5"),
        options
    );

    chart.render();
}


/*--------------Chart 6----------------*/
var options = {
    chart: {
        height: 400,
        type: 'bar',
        sparkline: {
            show: false

        },
        toolbar: {
            show: false
        },
    },
    colors: ['#ff4545', '#ff4545'],
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '30%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: false,
        width: 5,
        colors: ['#ffffff'],
    },
    series: [{
        name: 'Mobile',
        enabled: 'true',
        data: [44, 90, 90, 60, 115]
    }, {
        name: 'Desktop',
        data: [35, 80, 100, 70, 95]
    }],


    fill: {
        opacity: 1

    },
    tooltip: {
        y: {
            formatter: function(val) {
                return "$ " + val + " thousands"
            }
        }
    }
};

if(jQuery('#bar-chart-6').length){
    var chart = new ApexCharts(
        document.querySelector("#bar-chart-6"),
        options
    );

    chart.render();
}
if(jQuery('#chart-6').length){
    var chart = new ApexCharts(
        document.querySelector("#chart-6"),
        options
    );

    chart.render();
}


/*---------------- Chart - 7, Chart - 8 --------------------*/
var lastDate = 0;
var data = [];
var TICKINTERVAL = 86400000;
let XAXISRANGE = 777600000;

function getDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    while (i < count) {
        var x = baseval;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        data.push({
            x,
            y
        });
        lastDate = baseval;
        baseval += TICKINTERVAL;
        i++;
    }
}

getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
    min: 10,
    max: 90
});

function getNewSeries(baseval, yrange) {
    var newDate = baseval + TICKINTERVAL;
    lastDate = newDate;
    for (var i = 0; i < data.length - 10; i++) {
        data[i].x = newDate - XAXISRANGE - TICKINTERVAL;
        data[i].y = 0;
    }
    data.push({
        x: newDate,
        y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    })

}

function resetData() {
    // Alternatively, you can also reset the data at certain intervals to prevent creating a huge series
    data = data.slice(data.length - 10, data.length);
}


var options = {
    chart: {
        height: 150,
        type: 'area',
        animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
                speed: 1000
            }
        },
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: true
        },
        group: 'sparklines',
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight',
        width: 3
    },
    series: [{
        data: data
    }],
    markers: {
        size: 4
    },
    xaxis: {
        type: 'datetime',
        range: XAXISRANGE,
    },
    yaxis: {
        max: 100
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
        },
    },
    legend: {
        show: false
    },
};
options.colors = ['#ff4545'];

if(jQuery('#wave-chart-7').length){
    options.markers.size=0;
    options.chart.type='area';
    options.stroke.curve="smooth";
    options.chart.height=70;
    var wave_chart_7 = new ApexCharts(
        document.querySelector("#wave-chart-7"),
        options
    );
    wave_chart_7.render();
}
if(jQuery('#chart-7').length){
    var chart_7 = new ApexCharts(
        document.querySelector("#chart-7"),
        options
    );
    chart_7.render();
}


options.colors = ['#1ee2ac'];
if(jQuery('#wave-chart-8').length){
    options.markers.size=0;
    options.chart.height=70;
    options.stroke.curve="smooth";
    options.chart.type='area';
    var wave_chart_8 = new ApexCharts(
        document.querySelector("#wave-chart-8"),
        options
    );
    wave_chart_8.render();
}
if(jQuery('#chart-8').length){
    var chart_8 = new ApexCharts(
        document.querySelector("#chart-8"),
        options
    );
    chart_8.render();
}
if(jQuery('#wave-chart-7').length || jQuery('#wave-chart-8').length) {
    window.setInterval(function () {
        getNewSeries(lastDate, {
            min: 10,
            max: 90
        });
        if(jQuery('#wave-chart-7').length){
            wave_chart_7.updateSeries([{
                data: data
            }]);
        }
        if(jQuery('#wave-chart-8').length) {
            wave_chart_8.updateSeries([{
                data: data
            }])
        }
    }, 1000);
}
// if(jQuery('#chart-7').length || jQuery('#chart-8').length) {
//     window.setInterval(function () {
//         getNewSeries(lastDate, {
//             min: 10,
//             max: 90
//         });
//         if(jQuery('#chart-7').length){
//             chart_7.updateSeries([{
//                 data: data
//             }]);
//         }
//         if(jQuery('#chart-8').length) {
//             chart_8.updateSeries([{
//                 data: data
//             }])
//         }
//     }, 1000);
// }
/*--------------- Chart-9 --------------*/
var options = {
    chart: {
        height: 112,
        type: 'area',
        animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
                speed: 1000
            }
        },
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: true
        },
        group: 'sparklines',
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 3
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0,
        }
    },
    series: [{
        data: data
    }],
    markers: {
        size: 0
    },
    xaxis: {
        type: 'datetime',
        range: XAXISRANGE,
    },
    yaxis: {
        max: 100
    },
    legend: {
        show: false
    },
};
options.colors = ['#ff4545'];

if(jQuery('#chart-9').length){
    var chart9 = new ApexCharts(
        document.querySelector("#chart-9"),
        options
    );
    chart9.render();
    window.setInterval(function () {
        getNewSeries(lastDate, {
            min: 10,
            max: 90
        });
        if (jQuery('#chart-9').length) {
            chart9.updateSeries([{
                data: data
            }]);
        }
    },1000);
}

/*----------------- Chart-10 ----------------*/

function generateData(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

        series.push([x, y, z]);
        baseval += 86400000;
        i++;
    }
    return series;
}

var options = {
    chart: {
        height: 440,
        type: 'bubble',
        stacked: false,
        toolbar: {
            show: false
        },
        animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
                speed: 1000
            }
        },
        sparkline: {
            enabled: true
        },
        group: 'sparklines',
    },
    dataLabels: {
        enabled: false
    },
    series: [
        {
            name: 'Bubble1',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 10, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Bubble2',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 10, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Bubble3',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 10, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Bubble4',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 10, {
                min: 10,
                max: 60
            })
        }
    ],
    fill: {
        opacity: 0.8
    },
    title: {
        show: false
    },
    xaxis: {
        tickAmount: 8,
        type: 'category',
        labels: {
            show:false
        }
    },
    yaxis: {
        max: 70,
        labels: {
            show:false
        }
    },
    legend:{
        show:false
    }
};

if(jQuery('#chart-10').length) {
    var chart_2 = new ApexCharts(
        document.querySelector("#chart-10"),
        options
    );

    chart_2.render();
}


/*----------------- Chart-11 ----------------*/
var chart11 = {
    chart: {
        height: 407,
        type: 'line',
        zoom: {
            enabled: false
        },
        toolbar:{
            show:false
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [5, 7, 5],
        curve: 'straight',
        dashArray: [0, 8, 5]
    },
    series: [{
        name: "Session Duration",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    },
        {
            name: "Page Views",
            data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        },
        {
            name: 'Total Visits',
            data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
        }
    ],
    legend: {
        show:false
    },
    markers: {
        size: 0,

        hover: {
            sizeOffset: 6
        }
    },
    xaxis: {
        categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
            '10 Jan', '11 Jan', '12 Jan'
        ]
    },
    yaxis:{
        labels:{
            show:false
        }
    },
    tooltip: {
        y: [{
            title: {
                formatter: function (val) {
                    return val + " (mins)"
                }
            }
        }, {
            title: {
                formatter: function (val) {
                    return val + " per session"
                }
            }
        }, {
            title: {
                formatter: function (val) {
                    return val;
                }
            }
        }]
    },
    grid: {
        borderColor: '#f1f1f1',
    }
}
if(jQuery('#chart-11').length) {
    var chart_3 = new ApexCharts(
        document.querySelector("#chart-11"),
        chart11
    );
    chart_3.render();
}


/*--------------Chart 12----------------*/
var options12 = {
    chart: {
        height: 140,
        type: 'area',
        sparkline: {
            enabled: true
        },
        group: 'sparklines',

    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 5,
        curve: 'smooth'
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0,
        }
    },
    series: [{
        name: 'series1',
        data: [70, 40, 60, 30, 60]
    }, ],
    colors: ['#ff4545'],

    xaxis: {
        type: 'datetime',
        categories: ["2018-08-19T00:00:00", "2018-09-19T01:30:00", "2018-10-19T02:30:00", "2018-11-19T01:30:00", "2018-12-19T01:30:00"],
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    }
};
if(jQuery('#chart-12').length) {
    var chart12 = new ApexCharts(
        document.querySelector("#chart-12"),
        options12
    );

    chart12.render();
}

var barOptions12 = {
    chart: {
        height: 150,
        type: 'bar',
        sparkline: {
            enabled: true
        },
        group: 'sparklines',
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 15
    },
    series: [{
        name: 'series1',
        data: [70, 40, 60, 30, 60, ]
    }, ],
    colors: ['#e5f2ff'],
    xaxis: {
        type: 'datetime',
        categories: ["2019-08-19T00:00:00", "2019-09-19T00:00:00", "2019-10-19T00:00:00", "2019-11-19T00:00:00"],
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    }
};
if(jQuery('#bar-chart-12').length) {
    var chart12 = new ApexCharts(
        document.querySelector("#bar-chart-12"),
        barOptions12
    );

    chart12.render();
    window.setInterval(function () {
        getNewSeries(lastDate, {
            min: 10,
            max: 90
        });
        if (jQuery('#bar-chart-12').length) {
            chart12.updateSeries([{
                data: data
            }]);
        }
    },1000);
}



/*--------------Chart 13----------------*/
var option13 = {
    chart: {
        height: 420,
        type: 'radialBar',
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 3,
            dashArray: 0,
        },
    },
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 10,
                size: '30%',
                background: 'transparent',
                image: undefined,
                imageWidth: 64,
                imageHeight: 64,
            },
            dataLabels: {
                name: {
                    fontSize: '22px',
                },
                value: {
                    fontSize: '16px',
                },
                total: {
                    show: true,
                    label: 'Total',
                    formatter: function (w) {
                        // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                        return 249
                    }
                }
            }
        }
    },
    fill: {
        type: 'gradient',
    },
    colors: ['#ff4545','#1ee2ac','#ff4545' ],
    series: [44, 55, 67],
    stroke: {
        lineCap: 'round'
    },
    labels: [' Mobile', 'Desktop', 'Tablet', 'Watch'],
};

if(jQuery('#chart-13').length) {
    var chart13 = new ApexCharts(
        document.querySelector("#chart-13"),
        option13
    );
    chart13.render();

}

/*--------------Chart 13----------------*/

var option14 = {
    chart: {
        height: 350,
        type: 'radialBar',
    },
    plotOptions: {
        hollow: {
            margin: 10,
            size: '30%',
            background: 'transparent',
            image: undefined,
            imageWidth: 64,
            imageHeight: 64,
        },
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
                name: {
                    fontSize: '16px',
                    color: undefined,
                    offsetY: 120
                },
                value: {
                    offsetY: 76,
                    fontSize: '22px',
                    color: undefined,
                    formatter: function (val) {
                        return val + "%";
                    }
                }
            }
        }
    },
    fill: {
    },
    stroke: {
        dashArray: 5,
    },
    series: [67],
    labels: ['User traffic'],
    colors: ['#ff4545'],

};

if(jQuery('#chart-14').length) {
    var chart14 = new ApexCharts(
        document.querySelector("#chart-14"),
        option14
    );

    chart14.render();
}



/*--------------Chart 15----------------*/
var option15 = {
    chart: {
        height: 310,
        type: 'line',
        stacked: false,
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#1ee2ac' ,'#ff4545','#e64141'],
    series: [{
        name: 'Income',
        type: 'column',
        data: [14, 2, 25, 15, 25, 28, 38, 46]
    }, {
        name: 'Cashflow',
        type: 'column',
        data: [11, 3, 31, 4, 41, 49, 65, 85]
    }, {
        name: 'Revenue',
        type: 'line',
        data: [20, 29, 37, 36, 44, 45, 50, 58]
    }],
    stroke: {
        width: [1, 1, 4]
    },
    xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        labels:{
            show:false
        }
    },
    yaxis: {
        show: false
    },
    tooltip: {
        theme: 'dark',
        fixed: {
            enabled: true,
            position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60
        },
    },
    legend: {
        show: false,
    }
};

if(jQuery('#chart-15').length) {
    var chart15 = new ApexCharts(
        document.querySelector("#chart-15"),
        option15
    );

    chart15.render();
}

/*--------------Chart 16----------------*/

var option16 = {
    chart: {
        height: 350,
        type: 'area',
        sparkline: {
            enabled: true
        },
        group: 'sparklines',

    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    series: [{
        name: 'series1',
        data: [3, 30, 15, 25, 35]
    }, ],
    colors:['#6f32ff'],

    xaxis: {
        type: 'datetime',
        categories: ["2018-08-19T00:00:00", "2018-09-19T01:30:00", "2018-10-19T02:30:00", "2018-11-19T01:30:00", "2018-12-19T01:30:00"],
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    }
};

if(jQuery('#chart-16').length) {
    var chart16 = new ApexCharts(
        document.querySelector("#chart-16"),
        option16
    );

    chart16.render();
}

/*--------------Chart 17----------------*/

var option17 = {
    chart: {
        height: 268,
        type: 'area',
        zoom: {
            enabled: false
        },
        toolbar:{
            show:false
        },
        sparkline: {
            enabled: true
        },
        group: 'sparklines',
    },
    colors: ['#ff4545','#1ee2ac','#ff4545' ],
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [3,2,3],
        curve: 'straight',
    },
    series: [{
        name: "Session Duration",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    },
        {
            name: "Page Views",
            data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        },
        {
            name: 'Total Visits',
            data: [87, 57, 74, 30, 75, 38, 62, 47, 82, 56, 45, 47]
        }
    ],
    legend: {
        show:false
    },
    markers: {
        size: 0,

        hover: {
            sizeOffset: 6
        }
    },
    xaxis: {
        categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
            '10 Jan', '11 Jan', '12 Jan'
        ],
        labels:{
            show:false
        }
    },
    yaxis:{
        labels:{
            show:false
        }
    },
    tooltip: {
        y: [{
            title: {
                formatter: function (val) {
                    return val + " (mins)"
                }
            }
        }, {
            title: {
                formatter: function (val) {
                    return val + " per session"
                }
            }
        }, {
            title: {
                formatter: function (val) {
                    return val;
                }
            }
        }]
    },
    grid: {
        borderColor: '#f1f1f1',
    }
}

if(jQuery('#Dash1MultiBarChart').length) {
    var chart17 = new ApexCharts(
        document.querySelector("#Dash1MultiBarChart"),
        option17
    );

    chart17.render();
}

/*--------------Chart 18----------------*/


var option18 = {
    chart: {
        height: 235,
        type: 'donut',
    },
    plotOptions: {
        pie: {
            donut: {
                size: '55%'
            }
        }
    },
    series: [44, 55, 41],
    colors: ['#1ee2ac','#e64141' ,'#ff4545'],
    labels:['Server1','Server2','Server3'],
    legend: {
        position: 'bottom'
    }
};

if(jQuery('#Dash1DonetChart').length) {
    var chart18 = new ApexCharts(
        document.querySelector("#Dash1DonetChart"),
        option18
    );

    chart18.render();
}


var option19 =  {
    chart: {
        height: 308,
        type: 'line',
        toolbar: {
            show: false
        }
    },
    series: [{
        name: 'Website Blog',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    }, {
        name: 'Social Media',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }],
    stroke: {
        width: [0, 4]
    },
    title: {
        show: false
    },
    legend: {
        show: false
    },
    // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
    colors: ['#ff4545','#1ee2ac' ],
    xaxis: {
        labels: {
            show: false,
        },
        type: 'datetime'
    },
    yaxis: [{
        labels: {
            show: false,
        }
    },{
        labels: {
            show: false,
        }
    }],
};

if(jQuery('#chart-19').length) {

    var chart19 = new ApexCharts(
        document.querySelector("#chart-19"),
        option19
    );

    chart19.render();
}

var option20 = {
    chart: {
        height: 387,
        type: 'line',
        stacked: false,
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: true
        },
        group: 'sparklines',
    },
    stroke: {
        width: [ 2, 3],
        curve: 'smooth'
    },
    plotOptions: {
        bar: {
            columnWidth: '20%'
        }
    },
    colors: ['#1ee2ac', '#ff4545' ],
    series: [ {
        name: 'Vine',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    }, {
        name: 'Dribbble',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }],
    fill: {
        opacity: [0.25,1],
        gradient: {
            inverseColors: false,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
        }
    },
    labels: ['01/01/2003', '02/01/2003','03/01/2003','04/01/2003','05/01/2003','06/01/2003','07/01/2003','08/01/2003','09/01/2003','10/01/2003','11/01/2003'],

    xaxis: {
        type:'datetime',
        labels:{
            show:false
        }
    },
    yaxis: {
        min: 0,
        labels:{
            show:false
        }
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (y) {
                if(typeof y !== "undefined") {
                    return  y.toFixed(0) + " views";
                }
                return y;

            }
        }
    },
    legend: {
        show: false
    }
};


if(jQuery('#chart-20').length) {

    var chart20 = new ApexCharts(
        document.querySelector("#chart-20"),
        option20
    );

    chart20.render();
}


/*---------------------------------------------------------------------
   Editable Table
-----------------------------------------------------------------------*/
const $tableID = $('#table');
 const $BTN = $('#export-btn');
 const $EXPORT = $('#export');

 const newTr = `
<tr class="hide">
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half">
    <span class="table-up"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-up" aria-hidden="true"></i></a></span>
    <span class="table-down"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-down" aria-hidden="true"></i></a></span>
  </td>
  <td>
    <span class="table-remove"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0 waves-effect waves-light">Remove</button></span>
  </td>
</tr>`;

 $('.table-add').on('click', 'i', () => {

   const $clone = $tableID.find('tbody tr').last().clone(true).removeClass('hide table-line');

   if ($tableID.find('tbody tr').length === 0) {

     $('tbody').append(newTr);
   }

   $tableID.find('table').append($clone);
 });

 $tableID.on('click', '.table-remove', function () {

   $(this).parents('tr').detach();
 });

 $tableID.on('click', '.table-up', function () {

   const $row = $(this).parents('tr');

   if ($row.index() === 1) {
     return;
   }

   $row.prev().before($row.get(0));
 });

 $tableID.on('click', '.table-down', function () {

   const $row = $(this).parents('tr');
   $row.next().after($row.get(0));
 });

 // A few jQuery helpers for exporting only
 jQuery.fn.pop = [].pop;
 jQuery.fn.shift = [].shift;

 $BTN.on('click', () => {

   const $rows = $tableID.find('tr:not(:hidden)');
   const headers = [];
   const data = [];

   // Get the headers (add special header logic here)
   $($rows.shift()).find('th:not(:empty)').each(function () {

     headers.push($(this).text().toLowerCase());
   });

   // Turn all existing rows into a loopable array
   $rows.each(function () {
     const $td = $(this).find('td');
     const h = {};

     // Use the headers from earlier to name our hash keys
     headers.forEach((header, i) => {

       h[header] = $td.eq(i).text();
     });

     data.push(h);
   });

   // Output the result
   $EXPORT.text(JSON.stringify(data));
 });

/*---------------------------------------------------------------------
    Form Wizard - 1
-----------------------------------------------------------------------*/

$(document).ready(function(){

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;

    setProgressBar(current);

    $(".next").click(function(){

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //Add Class Active
    $("#top-tab-list li").eq($("fieldset").index(next_fs)).addClass("active");
    $("#top-tab-list li").eq($("fieldset").index(current_fs)).addClass("done");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;

    current_fs.css({
    'display': 'none',
    'position': 'relative',

    });

    next_fs.css({'opacity': opacity});
    },
    duration: 500
    });
    setProgressBar(++current);
    });

    $(".previous").click(function(){

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //Remove class active
    $("#top-tab-list li").eq($("fieldset").index(current_fs)).removeClass("active");
    $("#top-tab-list li").eq($("fieldset").index(previous_fs)).removeClass("done");

    //show the previous fieldset
    previous_fs.show();

    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;

    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    previous_fs.css({'opacity': opacity});
    },
    duration: 500
    });
    setProgressBar(--current);
    });

    function setProgressBar(curStep){
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar")
    .css("width",percent+"%")
    }

    $(".submit").click(function(){
    return false;
    })

});

 /*---------------------------------------------------------------------
   validate form wizard
-----------------------------------------------------------------------*/

$(document).ready(function () {

    var navListItems = $('div.setup-panel div a'),
            allWells = $('.setup-content'),
            allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.addClass('active');
            $item.parent().addClass('active');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='email'],input[type='password'],input[type='url'],textarea"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for(var i=0; i<curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.active').trigger('click');
});
 /*---------------------------------------------------------------------
   Vertical form wizard
-----------------------------------------------------------------------*/
$(document).ready(function(){

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;

    setProgressBar(current);

    $(".next").click(function(){

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //Add Class Active
    $("#top-tabbar-vertical li").eq($("fieldset").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;

    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    next_fs.css({'opacity': opacity});
    },
    duration: 500
    });
    setProgressBar(++current);
    });

    $(".previous").click(function(){

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //Remove class active
    $("#top-tabbar-vertical li").eq($("fieldset").index(current_fs)).removeClass("active");

    //show the previous fieldset
    previous_fs.show();

    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;

    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    previous_fs.css({'opacity': opacity});
    },
    duration: 500
    });
    setProgressBar(--current);
    });

    function setProgressBar(curStep){
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar")
    .css("width",percent+"%")
    }

    $(".submit").click(function(){
    return false;
    })

});


/*---------------------------------------------------------------------
   Profile Image Edit
-----------------------------------------------------------------------*/

$(document).ready(function() {

    
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    

    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });
});


// top chart 1
 if(jQuery('#view-chart-01').length){
       var options = {
          series: [44, 55, 30, 30],
          chart: {
        width: 250,
          type: 'donut',
        },
        colors:['#e20e02', '#f68a04', '#007aff','#545e75'],
        labels: ["New Customer", "Exsisting Subscriber's", "Daily Visitor's", "Extented Subscriber's"],
        dataLabels: {
          enabled: false
        },
        stroke: {
            show: false,
            width: 0
        },
        legend: {
            show: false,
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
        };

        var chart = new ApexCharts(document.querySelector("#view-chart-01"), options);
        chart.render();
      
      }

    // top chart 2
 if(jQuery('#view-chart-02').length){
        var options = {
          series: [44, 30, 20, 43, 22,20],
          chart: {
          width: 250,
          type: 'donut',
        },
        colors:['#e20e02','#83878a', '#007aff','#f68a04', '#14e788','#545e75'],
        labels: ['Actions', 'Comedy', 'Harror', 'Drama', 'Kids','Thrilled'],
        dataLabels: {
          enabled: false
        },
        stroke: {
            show: false,
            width: 0
        },
        legend: {
            show: false,
          formatter: function(val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex]
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
        };

        var chart = new ApexCharts(document.querySelector("#view-chart-02"), options);
        chart.render();
    }
      
// top chart 2
 if(jQuery('#view-chart-03').length){
        var options = {
          series: [{
          name: 'This Month',
          data: [44, 55,30,60]
        }, {
          name: 'Last Month',
          data: [35, 41,20,40]
        }],
        colors:['#e20e02', '#007aff'],
          chart: {
          type: 'bar',
          height: 230,
          foreColor: '#D1D0CF'
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['a','b','c','d'],
        },
        yaxis: {
          title: {
            text: ''
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
            enabled: false,
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        }
        };

        var chart = new ApexCharts(document.querySelector("#view-chart-03"), options);
        chart.render();
    }
      
    

