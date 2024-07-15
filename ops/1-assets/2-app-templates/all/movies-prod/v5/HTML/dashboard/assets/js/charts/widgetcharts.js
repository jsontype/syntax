(function (jQuery) {
  "use strict";

  //chart-1
  if (document.querySelectorAll("#chart-1").length) {
    const variableColors = IQUtils.getVariableColor();
    const colors = [variableColors.primary];
    const options = {
      chart: {
        height: 80,
        type: "area",
        sparkline: {
          enabled: true,
        },
        group: "sparklines",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 3,
        curve: "smooth",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0,
        },
      },

      series: [
        {
          name: "series1",
          data: [60, 15, 50, 30, 70],
        },
      ],
      colors: colors,

      xaxis: {
        type: "datetime",
        categories: [
          "2018-08-19T00:00:00",
          "2018-09-19T01:30:00",
          "2018-10-19T02:30:00",
          "2018-11-19T01:30:00",
          "2018-12-19T01:30:00",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
        enabled: false,
      },
    };
    const chart = new ApexCharts(document.querySelector("#chart-1"), options);
    chart.render();
  }

  //chart-2
  if (document.querySelectorAll("#chart-2").length) {
    const variableColors = IQUtils.getVariableColor();
    const colors = [variableColors.warning];
    const options = {
      chart: {
        height: 80,
        type: "area",
        sparkline: {
          enabled: true,
        },
        group: "sparklines",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 3,
        curve: "smooth",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0,
        },
      },
      series: [
        {
          name: "series1",
          data: [70, 40, 60, 30, 60],
        },
      ],
      colors: colors,

      xaxis: {
        type: "datetime",
        categories: [
          "2018-08-19T00:00:00",
          "2018-09-19T01:30:00",
          "2018-10-19T02:30:00",
          "2018-11-19T01:30:00",
          "2018-12-19T01:30:00",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
        enabled: false,
      },
    };
    const chart = new ApexCharts(document.querySelector("#chart-2"), options);

    chart.render();
  }

  /*--------------Widget Chart 3----------------*/
  if (document.querySelectorAll("#chart-3").length) {
    const variableColors = IQUtils.getVariableColor();
    const colors = ["#07750b"];
    const options = {
      chart: {
        height: 80,
        type: "area",
        sparkline: {
          enabled: true,
        },
        group: "sparklines",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 3,
        curve: "smooth",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0,
        },
      },
      series: [
        {
          name: "series1",
          data: [60, 40, 60, 40, 70],
        },
      ],
      colors: colors,

      xaxis: {
        type: "datetime",
        categories: [
          "2018-08-19T00:00:00",
          "2018-09-19T01:30:00",
          "2018-10-19T02:30:00",
          "2018-11-19T01:30:00",
          "2018-12-19T01:30:00",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
        enabled: false,
      },
    };
    const chart = new ApexCharts(document.querySelector("#chart-3"), options);
    chart.render();
  }

  /*--------------Widget Chart 4----------------*/
  if (document.querySelectorAll("#chart-4").length) {
    const variableColors = IQUtils.getVariableColor();
    const colors = [variableColors.primary];
    const options = {
      chart: {
        height: 80,
        type: "area",
        sparkline: {
          enabled: true,
        },
        group: "sparklines",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 3,
        curve: "smooth",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0,
        },
      },
      series: [
        {
          name: "series1",
          data: [75, 30, 60, 35, 60],
        },
      ],
      colors: colors,

      xaxis: {
        type: "datetime",
        categories: [
          "2018-08-19T00:00:00",
          "2018-09-19T01:30:00",
          "2018-10-19T02:30:00",
          "2018-11-19T01:30:00",
          "2018-12-19T01:30:00",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
        enabled: false,
      },
    };
    const chart = new ApexCharts(document.querySelector("#chart-4"), options);
    chart.render();
  }

  /*--------------Widget Chart 5----------------*/
  if (document.querySelectorAll("#chart-5").length) {
    const variableColors = IQUtils.getVariableColor();
    const colors = [variableColors.primary];
    const options = {
      series: [
        {
          name: "series1",
          data: [25, 27, 24, 26],
        },
      ],
      colors: colors,
      chart: {
        height: 65,
        width: 140,
        type: "area",
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
        ],
      },
      tooltip: {
        enabled: false,
      },
    };

    const chart = new ApexCharts(document.querySelector("#chart-5"), options);
    chart.render();
  }

  /*--------------Widget Box----------------*/

  if (document.querySelectorAll("#iq-chart-box1").length) {
    const variableColors = IQUtils.getVariableColor();
    const colors = [variableColors.primary];
    const options = {
      series: [
        {
          name: "Total sales",
          data: [10, 10, 35, 10],
        },
      ],
      colors: colors,
      chart: {
        height: 50,
        width: 100,
        type: "line",
        sparkline: {
          enabled: true,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "",
        align: "left",
      },

      xaxis: {
        categories: ["Jan", "Feb", "Mar"],
      },
      tooltip: {
        enabled: false,
      },
    };
    const chart = new ApexCharts(
      document.querySelector("#iq-chart-box1"),
      options
    );
    chart.render();
  }

  //box-chart-2
  if (document.querySelectorAll("#iq-chart-box2").length) {
    const variableColors = IQUtils.getVariableColor();
    const colors = [variableColors.warning];
    const options = {
      series: [
        {
          name: "Sale Today",
          data: [10, 10, 35, 10],
        },
      ],
      colors: colors,
      chart: {
        height: 50,
        width: 100,
        type: "line",
        sparkline: {
          enabled: true,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "",
        align: "left",
      },

      xaxis: {
        categories: ["Jan", "Feb", "Mar"],
      },
      tooltip: {
        enabled: false,
      },
    };
    const chart = new ApexCharts(
      document.querySelector("#iq-chart-box2"),
      options
    );
    chart.render();
  }

  //box-chart-3
  if (document.querySelectorAll("#iq-chart-box3").length) {
    const variableColors = IQUtils.getVariableColor();
    const colors = ["#07750b"];
    const options = {
      series: [
        {
          name: "Total Classon",
          data: [10, 10, 35, 10],
        },
      ],
      colors: colors,
      chart: {
        height: 50,
        width: 100,
        type: "line",
        sparkline: {
          enabled: true,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "",
        align: "left",
      },

      xaxis: {
        categories: ["Jan", "Feb", "Mar"],
      },
      tooltip: {
        enabled: false,
      },
    };

    const chart = new ApexCharts(
      document.querySelector("#iq-chart-box3"),
      options
    );
    chart.render();
  }

  //box-chart-4
  if (document.querySelectorAll("#iq-chart-box4").length) {
    const variableColors = IQUtils.getVariableColor();
    const colors = [variableColors.primary];
    const options = {
      series: [
        {
          name: "Total Profit",
          data: [10, 10, 35, 10],
        },
      ],
      colors: colors,
      chart: {
        height: 50,
        width: 100,
        type: "line",
        sparkline: {
          enabled: true,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "",
        align: "left",
      },

      xaxis: {
        categories: ["Jan", "Feb", "Mar"],
      },
      tooltip: {
        enabled: false,
      },
    };

    const chart = new ApexCharts(
      document.querySelector("#iq-chart-box4"),
      options
    );
    chart.render();
  }

  //chart 2
  if (document.querySelectorAll("#extrachart").length) {
    const variableColors = IQUtils.getVariableColor();
    const colors = [variableColors.primary, variableColors.secondary];
    const options = {
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 44, 55, 57, 56],
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 76, 85, 101, 98],
        },
      ],
      chart: {
        type: "bar",
        height: 250,
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          borderRadius: 5,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        curve: "smooth",
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
        colors: colors,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    };
    const chart = new ApexCharts(
      document.querySelector("#extrachart"),
      options
    );
    chart.render();
  }
  /*-------------- Service Chart ----------------*/
  if (document.querySelectorAll("#service-chart-01").length) {
    const variableColors = IQUtils.getVariableColor();
    const colors = ["#344ed1"];
    const options = {
      series: [
        {
          name: "series1",
          data: [25, 30, 22, 29],
        },
      ],
      colors: colors,
      chart: {
        height: 65,
        width: 140,
        type: "area",
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
        ],
      },
      tooltip: {
        enabled: false,
      },
    };

    const chart = new ApexCharts(
      document.querySelector("#service-chart-01"),
      options
    );
    chart.render();
  }
  if (document.querySelectorAll("#service-chart-02").length) {
    const variableColors = IQUtils.getVariableColor();
    const colors = [variableColors.primary];
    const options = {
      series: [
        {
          name: "series1",
          data: [25, 23, 28, 26],
        },
      ],
      colors: colors,
      chart: {
        height: 65,
        width: 140,
        type: "area",
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
        ],
      },
      tooltip: {
        enabled: false,
      },
    };

    const chart = new ApexCharts(
      document.querySelector("#service-chart-02"),
      options
    );
    chart.render();
  }
  if (document.querySelectorAll("#service-chart-03").length) {
    const variableColors = IQUtils.getVariableColor();
    const colors = [variableColors.warning];
    const options = {
      series: [
        {
          name: "series1",
          data: [25, 23, 28, 23],
        },
      ],
      colors: colors,
      chart: {
        height: 65,
        width: 140,
        type: "area",
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
        ],
      },
      tooltip: {
        enabled: false,
      },
    };

    const chart = new ApexCharts(
      document.querySelector("#service-chart-03"),
      options
    );
    chart.render();
  }
  if (document.querySelectorAll("#service-chart-04").length) {
    const variableColors = IQUtils.getVariableColor();
    const colors = ["#07750b"];
    const options = {
      series: [
        {
          name: "series1",
          data: [25, 27, 24, 26],
        },
      ],
      colors: colors,
      chart: {
        height: 65,
        width: 140,
        type: "area",
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
        ],
      },
      tooltip: {
        enabled: false,
      },
    };

    const chart = new ApexCharts(
      document.querySelector("#service-chart-04"),
      options
    );
    chart.render();
  }

  /*-------------- Ethernet Chart ----------------*/
  if (jQuery("#ethernet-chart-01").length) {
    const variableColors = IQUtils.getVariableColor();
    const colors = [variableColors.primary];
    var options = {
      series: [{
        name: "Desktops",
        data: [5, 30, 6, 20, 5, 18, 10]
      }],
      chart: {
        height: 60,
        sparkline: {
          enabled: true
        },
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      legend: {
        show: false
      },
      colors: colors,
      grid: {
        show: false,
      },
      xaxis: {
        labels: {
          show: false,
        },

      },
      yaxis: {
        labels: {
          show: false,
        },
      }
    };
    var chart = new ApexCharts(document.querySelector("#ethernet-chart-01"), options);
    chart.render();
  }
  if (document.querySelectorAll("#ethernet-chart-02").length) {
    const variableColors = IQUtils.getVariableColor();
    const colors = [variableColors.secondary];
    var options = {
      series: [{
        name: "Bitcoin",
        data: [5, 20, 6, 18, 5, 15, 4]
      }],
      chart: {
        height: 60,
        sparkline: {
          enabled: true
        },
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      legend: {
        show: false
      },
      colors: colors,
      grid: {
        show: false,
      },
      xaxis: {
        labels: {
          show: false,
        },

      },
      yaxis: {
        labels: {
          show: false,
        },
      }
    };

    const chart = new ApexCharts(
      document.querySelector("#ethernet-chart-02"),
      options
    );
    chart.render();
  }
  if (document.querySelectorAll("#ethernet-chart-03").length) {
    const variableColors = IQUtils.getVariableColor();
    const colors = [variableColors.tertiray];
    var options = {
      series: [{
        name: "Bitcoin",
        data: [5, 20, 6, 18, 5, 15, 4]
      }],
      chart: {
        height: 60,
        sparkline: {
          enabled: true
        },
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      legend: {
        show: false
      },
      colors: colors,
      grid: {
        show: false,
      },
      xaxis: {
        labels: {
          show: false,
        },

      },
      yaxis: {
        labels: {
          show: false,
        },
      }
    };

    const chart = new ApexCharts(
      document.querySelector("#ethernet-chart-03"),
      options
    );
    chart.render();
  }
  if (document.querySelectorAll("#ethernet-chart-04").length) {
    const variableColors = IQUtils.getVariableColor();
    const colors = [variableColors.warning];
    var options = {
      series: [{
        name: "Bitcoin",
        data: [5, 20, 6, 18, 5, 15, 4]
      }],
      chart: {
        height: 60,
        sparkline: {
          enabled: true
        },
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      legend: {
        show: false
      },
      colors: colors,
      grid: {
        show: false,
      },
      xaxis: {
        labels: {
          show: false,
        },

      },
      yaxis: {
        labels: {
          show: false,
        },
      }
    };

    const chart = new ApexCharts(
      document.querySelector("#ethernet-chart-04"),
      options
    );
    chart.render();
  }
  /*-------------- Ethernet Chart End ----------------*/

})(jQuery);
