(function (jQuery) {
  "use strict";
  
if (document.querySelectorAll("#bar_apexcharts").length) {
  const variableColors = IQUtils.getVariableColor();
  const colors = [variableColors.primary, variableColors.secondary];
  const options = {
    series: [
      {
        data: [44, 55, 41, 64, 22, 43, 21],
      },
      {
        data: [53, 32, 33, 52, 13, 44, 32],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
    },
    colors: colors,

    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: "12px",
      },
    },
    stroke: {
      show: true,
      width: 1,
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    xaxis: {
      categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
    },
  };
  if (ApexCharts !== undefined) {
    const chart = new ApexCharts(
      document.querySelector("#bar_apexcharts"),
      options
    );
    chart.render();
    document.addEventListener("theme_color", (e) => {
      const variableColors = IQUtils.getVariableColor();
      const colors = [variableColors.primary, variableColors.secondary];

      const newOpt = {
        colors: colors,
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            gradientToColors: colors, // optional, if not defined - uses the shades of same color in series
            opacityFrom: 1,
            opacityTo: 1,
            colors: colors,
          },
        },
      };
      chart.updateOptions(newOpt);
    });
    document.addEventListener("body_font_family", (e) => {
      let prefix =
        getComputedStyle(document.body).getPropertyValue("--prefix") || "bs-";
      if (prefix) {
        prefix = prefix.trim();
      }
      const font_1 = getComputedStyle(document.body).getPropertyValue(
        `--${prefix}body-font-family`
      );
      const fonts = [font_1.trim()];
      const newOpt = {
        chart: {
          fontFamily: fonts,
        },
      };
      chart.updateOptions(newOpt);
    });
  }
}

if (document.querySelectorAll("#line_apexcharts").length) {
  const variableColors = IQUtils.getVariableColor();
  const colors = [variableColors.primary, variableColors.secondary];
  const options = {
    chart: {
      height: 350,
      type: "line",
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: colors,
    series: [
      {
        name: "Series A",
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
      },
      {
        name: "Series B",
        data: [20, 29, 37, 36, 44, 45, 50, 58],
      },
    ],
    stroke: {
      curve: 'straight',
      width: [4, 4],
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
      },
    },
    xaxis: {
      categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#8A92A6",
        },
        labels: {
          style: {
            colors: "#8A92A6",
          },
        },
        title: {
          text: "Series A",
          style: {
            colors: "#8A92A6",
          },
        },
      },
      {
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          colors: "#8A92A6",
        },
        labels: {
          style: {
            colors: "#8A92A6",
          },
        },
        title: {
          text: "Series B",
          style: {
            colors: "#8A92A6",
          },
        },
      },
    ],
    tooltip: {
      enabled: true,
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40,
    },
  };
  if (ApexCharts !== undefined) {
    const chart = new ApexCharts(
      document.querySelector("#line_apexcharts"),
      options
    );

    chart.render();
    document.addEventListener("theme_color", (e) => {
      const variableColors = IQUtils.getVariableColor();
      const colors = [variableColors.primary, variableColors.secondary];

      const newOpt = {
        colors: colors,
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            gradientToColors: colors, // optional, if not defined - uses the shades of same color in series
            opacityFrom: 1,
            opacityTo: 1,
            colors: colors,
          },
        },
      };
      chart.updateOptions(newOpt);
    });
    document.addEventListener("body_font_family", (e) => {
      let prefix =
        getComputedStyle(document.body).getPropertyValue("--prefix") || "bs-";
      if (prefix) {
        prefix = prefix.trim();
      }
      const font_1 = getComputedStyle(document.body).getPropertyValue(
        `--${prefix}body-font-family`
      );
      const fonts = [font_1.trim()];
      const newOpt = {
        chart: {
          fontFamily: fonts,
        },
      };
      chart.updateOptions(newOpt);
    });
  }
}

if (document.querySelectorAll("#pie_apexcharts").length) {
  const variableColors = IQUtils.getVariableColor();
  const colors = [variableColors.primary, variableColors.secondary];
  const options = {
    series: [44, 55, 13, 43, 22],
    chart: {
      height: 365,
      type: "pie",
    },
    chart: {
      type: "pie",
      height: 365,
    },
    colors: colors,
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  if (ApexCharts !== undefined) {
    const chart = new ApexCharts(
      document.querySelector("#pie_apexcharts"),
      options
    );
    chart.render();
    document.addEventListener("theme_color", (e) => {
      const variableColors = IQUtils.getVariableColor();
      const colors = [variableColors.primary, variableColors.secondary];

      const newOpt = {
        colors: colors,
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            gradientToColors: colors, // optional, if not defined - uses the shades of same color in series
            opacityFrom: 1,
            opacityTo: 1,
            colors: colors,
          },
        },
      };
      chart.updateOptions(newOpt);
    });
    document.addEventListener("body_font_family", (e) => {
      let prefix =
        getComputedStyle(document.body).getPropertyValue("--prefix") || "bs-";
      if (prefix) {
        prefix = prefix.trim();
      }
      const font_1 = getComputedStyle(document.body).getPropertyValue(
        `--${prefix}body-font-family`
      );
      const fonts = [font_1.trim()];
      const newOpt = {
        chart: {
          fontFamily: fonts,
        },
      };
      chart.updateOptions(newOpt);
    });
  }
}

if (document.querySelectorAll("#radar_apexcharts").length) {
  const variableColors = IQUtils.getVariableColor();
  const colors = [variableColors.primary, variableColors.secondary];
  const options = {
    series: [
      {
        name: "Series 1",
        data: [80, 50, 30, 40, 100, 20],
      },
      {
        name: "Series 2",
        data: [20, 30, 40, 80, 20, 80],
      },
    ],
    colors: colors,
    chart: {
      height: 350,
      type: "radar",
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1,
      },
    },
    title: {
      text: "Radar Chart - Multi Series",
    },
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.1,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
    },
  };
  if (ApexCharts !== undefined) {
    const chart = new ApexCharts(
      document.querySelector("#radar_apexcharts"),
      options
    );
    chart.render();
    document.addEventListener("theme_color", (e) => {
      const variableColors = IQUtils.getVariableColor();
      const colors = [variableColors.primary, variableColors.secondary];

      const newOpt = {
        colors: colors,
        fill: {
          opacity: [0.35, 0.45],
          gradient: {
            inverseColors: true,
            shade: "light",
            type: "vertical",
            opacityFrom: 0.35,
            opacityTo: 0.45,
          },
        },
      };
      chart.updateOptions(newOpt);
    });
    document.addEventListener("body_font_family", (e) => {
      let prefix =
        getComputedStyle(document.body).getPropertyValue("--prefix") || "bs-";
      if (prefix) {
        prefix = prefix.trim();
      }
      const font_1 = getComputedStyle(document.body).getPropertyValue(
        `--${prefix}body-font-family`
      );
      const fonts = [font_1.trim()];
      const newOpt = {
        chart: {
          fontFamily: fonts,
        },
      };
      chart.updateOptions(newOpt);
    });
  }
}

if (document.querySelectorAll("#Scatter_apexcharts").length) {
  const variableColors = IQUtils.getVariableColor();
  const colors = [variableColors.primary, variableColors.secondary];
  const options = {
    series: [
      {
        name: "SAMPLE A",
        data: [
          [16.4, 5.4],
          [21.7, 2],
          [25.4, 3],
          [19, 2],
          [10.9, 1],
          [13.6, 3.2],
          [10.9, 7.4],
          [10.9, 0],
          [10.9, 8.2],
          [16.4, 0],
          [16.4, 1.8],
          [13.6, 0.3],
          [13.6, 0],
          [29.9, 0],
          [27.1, 2.3],
          [16.4, 0],
          [13.6, 3.7],
          [10.9, 5.2],
          [16.4, 6.5],
          [10.9, 0],
          [24.5, 7.1],
          [10.9, 0],
          [8.1, 4.7],
          [19, 0],
          [21.7, 1.8],
          [27.1, 0],
          [24.5, 0],
          [27.1, 0],
          [29.9, 1.5],
          [27.1, 0.8],
          [22.1, 2],
        ],
      },
      {
        name: "SAMPLE B",
        data: [
          [36.4, 13.4],
          [1.7, 11],
          [5.4, 8],
          [9, 17],
          [1.9, 4],
          [3.6, 12.2],
          [1.9, 14.4],
          [1.9, 9],
          [1.9, 13.2],
          [1.4, 7],
          [6.4, 8.8],
          [3.6, 4.3],
          [1.6, 10],
          [9.9, 2],
          [7.1, 15],
          [1.4, 0],
          [3.6, 13.7],
          [1.9, 15.2],
          [6.4, 16.5],
          [0.9, 10],
          [4.5, 17.1],
          [10.9, 10],
          [0.1, 14.7],
          [9, 10],
          [12.7, 11.8],
          [2.1, 10],
          [2.5, 10],
          [27.1, 10],
          [2.9, 11.5],
          [7.1, 10.8],
          [2.1, 12],
        ],
      },
    ],
    colors: colors,
    chart: {
      height: 350,
      type: "scatter",
      zoom: {
        enabled: true,
        type: "xy",
      },
    },
    xaxis: {
      tickAmount: 10,
      labels: {
        formatter: function (val) {
          return parseFloat(val).toFixed(1);
        },
      },
    },
    yaxis: {
      tickAmount: 7,
    },
  };

  if (ApexCharts !== undefined) {
    const chart = new ApexCharts(
      document.querySelector("#Scatter_apexcharts"),
      options
    );
    chart.render();
    document.addEventListener("theme_color", (e) => {
      const variableColors = IQUtils.getVariableColor();
      const colors = [variableColors.primary, variableColors.secondary];

      const newOpt = {
        colors: colors,
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            gradientToColors: colors, // optional, if not defined - uses the shades of same color in series
            opacityFrom: 1,
            opacityTo: 1,
            colors: colors,
          },
        },
      };
      chart.updateOptions(newOpt);
    });
    document.addEventListener("body_font_family", (e) => {
      let prefix =
        getComputedStyle(document.body).getPropertyValue("--prefix") || "bs-";
      if (prefix) {
        prefix = prefix.trim();
      }
      const font_1 = getComputedStyle(document.body).getPropertyValue(
        `--${prefix}body-font-family`
      );
      const fonts = [font_1.trim()];
      const newOpt = {
        chart: {
          fontFamily: fonts,
        },
      };
      chart.updateOptions(newOpt);
    });
  }
}

if (document.querySelectorAll("#Polar_apexcharts").length) {
  const variableColors = IQUtils.getVariableColor();
  const colors = [variableColors.primary, variableColors.secondary];
  const options = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    chart: {
      height: 365,
      type: "polarArea",
    },

    fill: {
      opacity: 0.8,
    },
    colors: colors,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  if (ApexCharts !== undefined) {
    const chart = new ApexCharts(
      document.querySelector("#Polar_apexcharts"),
      options
    );
    chart.render();
    document.addEventListener("theme_color", (e) => {
      const variableColors = IQUtils.getVariableColor();
      const colors = [variableColors.primary, variableColors.secondary];

      const newOpt = {
        colors: colors,
        fill: {
          opacity: 0.8,
          gradient: {
            inverseColors: false,
            shade: "light",
            type: "vertical",
            opacityFrom: 1,
            opacityTo: 0.9,
          },
        },
      };
      chart.updateOptions(newOpt);
    });
    document.addEventListener("body_font_family", (e) => {
      let prefix =
        getComputedStyle(document.body).getPropertyValue("--prefix") || "bs-";
      if (prefix) {
        prefix = prefix.trim();
      }
      const font_1 = getComputedStyle(document.body).getPropertyValue(
        `--${prefix}body-font-family`
      );
      const fonts = [font_1.trim()];
      const newOpt = {
        chart: {
          fontFamily: fonts,
        },
      };
      chart.updateOptions(newOpt);
    });
  }
}

if (document.querySelectorAll("#timeline_apexcharts").length) {
  const variableColors = IQUtils.getVariableColor();
  const colors = [variableColors.primary, variableColors.secondary];
  const options = {
    series: [
      {
        data: [
          {
            x: "Code",
            y: [
              new Date("2019-03-02").getTime(),
              new Date("2019-03-04").getTime(),
            ],
          },
          {
            x: "Test",
            y: [
              new Date("2019-03-04").getTime(),
              new Date("2019-03-08").getTime(),
            ],
          },
          {
            x: "Validation",
            y: [
              new Date("2019-03-08").getTime(),
              new Date("2019-03-12").getTime(),
            ],
          },
          {
            x: "Deployment",
            y: [
              new Date("2019-03-12").getTime(),
              new Date("2019-03-18").getTime(),
            ],
          },
        ],
      },
    ],
    chart: {
      height: 350,
      type: "rangeBar",
    },
    colors: colors,
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      type: "datetime",
    },
  };

  if (ApexCharts !== undefined) {
    const chart = new ApexCharts(
      document.querySelector("#timeline_apexcharts"),
      options
    );
    chart.render();
    document.addEventListener("theme_color", (e) => {
      const variableColors = IQUtils.getVariableColor();
      const colors = [variableColors.primary, variableColors.secondary];

      const newOpt = {
        colors: colors,
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            gradientToColors: colors, // optional, if not defined - uses the shades of same color in series
            opacityFrom: 1,
            opacityTo: 1,
            colors: colors,
          },
        },
      };
      chart.updateOptions(newOpt);
    });
    document.addEventListener("body_font_family", (e) => {
      let prefix =
        getComputedStyle(document.body).getPropertyValue("--prefix") || "bs-";
      if (prefix) {
        prefix = prefix.trim();
      }
      const font_1 = getComputedStyle(document.body).getPropertyValue(
        `--${prefix}body-font-family`
      );
      const fonts = [font_1.trim()];
      const newOpt = {
        chart: {
          fontFamily: fonts,
        },
      };
      chart.updateOptions(newOpt);
    });
  }
}

if (document.querySelectorAll("#Mixed_apexcharts").length) {
  const variableColors = IQUtils.getVariableColor();
  const colors = [
    variableColors.primary,
    variableColors.secondary,
    variableColors.tertiray,
  ];
  const options = {
    series: [
      {
        name: "TEAM A",
        type: "column",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
      },
      {
        name: "TEAM B",
        type: "area",
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
      },
      {
        name: "TEAM C",
        type: "line",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
      },
    ],
    chart: {
      height: 350,
      type: "line",
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: "smooth",
    },
    colors: colors,
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },

    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: true,
        shade: "light",
        type: "vertical",
        opacityFrom: 1,
        opacityTo: 0.9,
      },
    },
    labels: [
      "01/01/2003",
      "02/01/2003",
      "03/01/2003",
      "04/01/2003",
      "05/01/2003",
      "06/01/2003",
      "07/01/2003",
      "08/01/2003",
      "09/01/2003",
      "10/01/2003",
      "11/01/2003",
    ],
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      title: {
        text: "Points",
      },
      min: 0,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        },
      },
    },
  };
  if (ApexCharts !== undefined) {
    const chart = new ApexCharts(
      document.querySelector("#Mixed_apexcharts"),
      options
    );
    chart.render();
    document.addEventListener("theme_color", (e) => {
      const variableColors = IQUtils.getVariableColor();
      const colors = [
        variableColors.primary,
        variableColors.secondary,
        variableColors.tertiray,
      ];

      const newOpt = {
        colors: colors,
        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: true,
            shade: "light",
            type: "vertical",
            opacityFrom: 1,
            opacityTo: 0.9,
          },
        },
      };
      chart.updateOptions(newOpt);
    });
    document.addEventListener("body_font_family", (e) => {
      let prefix =
        getComputedStyle(document.body).getPropertyValue("--prefix") || "bs-";
      if (prefix) {
        prefix = prefix.trim();
      }
      const font_1 = getComputedStyle(document.body).getPropertyValue(
        `--${prefix}body-font-family`
      );
      const fonts = [font_1.trim()];
      const newOpt = {
        chart: {
          fontFamily: fonts,
        },
      };
      chart.updateOptions(newOpt);
    });
  }
}

})(jQuery);