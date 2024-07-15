(function (jQuery) {
  "use strict";

  /*---------------------------default chart-----*/
  if (document.querySelectorAll("#sales-chart-01").length) {
    const variableColors = IQUtils.getVariableColor();
    const colors = [variableColors.secondary];
    var options = {
      chart: {
        height: 220,
        type: "area",
        toolbar: {
              show: false
          },
      },
      dataLabels: {
        enabled: false
      },
      series: [
        {
          name: "Series 1",
          data: [60, 40, 40, 60, 70, 70, 60]
        }
      ],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100]
        }
      },
      grid: {
        show: true,
        strokeDashArray: 7,
      },
      colors: colors,
      stroke: {
          curve: 'straight',
          width: 2
        },
        yaxis: {
            tickAmount: 4,
            floating: false,
          
            labels: {
              minWidth: 20,
              maxWidth: 20,
              offsetY: -7,
              offsetX: 0,
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false
            }
          },
      xaxis: {
        axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
        labels: {
              minHeight: 20,
              maxHeight: 20,
            },
        categories: [
          "S",
          "M",
          "T",
          "W",
          "T",
          "F",
          "S"
        ]
      }
    };
    
    const chart = new ApexCharts(
      document.querySelector("#sales-chart-01"),
      options
    );
    chart.render();

    //color customizer
    document.addEventListener("theme_color", (e) => {
      const variableColors = IQUtils.getVariableColor();
      const colors = [variableColors.secondary];

      const newOpt = {
        colors: colors,
        fill: {
          type: "gradient",
          gradient: {
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

    //Font customizer
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
  if (document.querySelectorAll("#sales-chart-02").length) {
    const variableColors = IQUtils.getVariableColor();
    const colors = [variableColors.primary, variableColors.secondary, variableColors.tertiray];
    const options = {
      series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 72, 39, 21, 148]
        },
        {
          name: "Mobile",
          data: [20, 62, 70, 88, 67, 30, 100, 51, 98]
      },
        {
          name: "Tablet",
          data: [10, 82, 75, 68, 47, 90, 59, 101, 108]
      }],
      colors: colors,
      chart: {
        height: "100%",
        type: "line",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 3,
      },
      legend: {
        show: false,
      },
      grid: {
        show: true,
        strokeDashArray: 7,
      },
       forecastDataPoints: {
        count: 3,
      },
      markers: {
        size: 6,
        colors: "#FFFFFF",
        strokeColors: colors,
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 0,
        shape: "circle",
        radius: 2,
        offsetX: 0,
        offsetY: 0,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    };

    const chart = new ApexCharts(
      document.querySelector("#sales-chart-02"),
      options
    );
    chart.render();

    //color customizer
    document.addEventListener("theme_color", (e) => {
      const variableColors = IQUtils.getVariableColor();
      const colors = [variableColors.primary, variableColors.secondary, variableColors.tertiray];

      const newOpt = {
        colors: colors,
        markers: {
          strokeColors: colors,
        },
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

    //Font customizer
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
  if (document.querySelectorAll("#sales-chart-04").length) {
    const variableColors = IQUtils.getVariableColor();
    const colors = [variableColors.primary, variableColors.secondary, variableColors.tertiray];
    const options = {
      series: [15,40,45],
      chart: {
      type: 'donut',
      width: '100%',
      height: 450
    },
    dataLabels: {
      enabled: false,
    },
    colors:colors,
    plotOptions: {
      pie: {
        customScale: 0.8,
        donut: {
          size: '55%',
        },
      },
      stroke: {
        colors: undefined,
        width:30,
      }
    },
    labels: ['Themeforest: 15%', 'Dribble: 40%', 'Figma 45%'],
    legend: {
      position: 'bottom',
    },
    responsive: [{
      breakpoint: 480,
      legend: {
        position: 'right',
      },
      options: {
        chart: {
          width: 300
        },
      },
      breakpoint: 280,
      options: {
        chart: {
          width: 200
        },
      },
    }]
    };
    const chart = new ApexCharts(
      document.querySelector("#sales-chart-04"),
      options
    );
    chart.render();

    //color customizer
    document.addEventListener("theme_color", (e) => {
      const variableColors = IQUtils.getVariableColor();
      const colors = [variableColors.primary, variableColors.secondary, variableColors.tertiray];
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

    //Font customizer
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

  /*---------------------------analytics chart-----*/
  if (document.querySelectorAll("#analytics-chart-03").length) {
    const variableColors = IQUtils.getVariableColor();
    const colors = [variableColors.primary, variableColors.secondary, variableColors.tertiray];
    var options = {
      series: [{
        name: 'High',
        data: [44, 55, 41 ]
      }, {
        name: 'Medium',
        data: [53, 32,48]
      }, {
        name: 'Low',
        data: [43,55,40]
      }],
      chart: {
      type: 'bar',
      height: 250,
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: true,
      position:'bottom',
    },
    plotOptions: {
      bar: {
        barHeight: '100%',
        distributed: true,
        horizontal: true,
        borderRadius: 5,
        dataLabels: {
          position: 'bottom'
        },
      }
    },
    colors: colors,
    dataLabels: {
      enabled: false,
      textAnchor: 'start',
      style: {
        colors: ['#fff']
      },
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
      },
      dropShadow: {
        enabled: true
      }
    },
    stroke: {
      width: 5,
      colors: ['transparent']
    },
    
    xaxis: {
      categories: ['USA', 'Russia', 'Brazil', 'India', 'UK', 'Canada'],
      labels:{
        minHeight: 20,
        maxHeight: 20
      }
    },
    grid: {
      show:false,
    },
    yaxis: {
      labels: {
        show: true,
      }
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return ''
          }
        }
      }
    }
    };

   const chart = new ApexCharts(
      document.querySelector("#analytics-chart-03"),
      options
    );
    chart.render();

    //color customizer
    document.addEventListener("theme_color", (e) => {
      const variableColors = IQUtils.getVariableColor();
      const colors = [variableColors.primary, variableColors.secondary, variableColors.tertiray];

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

    //Font customizer
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
  if (document.querySelectorAll("#analytics-chart-02").length) {
    const variableColors = IQUtils.getVariableColor();
    const colors = [variableColors.primary, variableColors.secondary];
    const options = {
    series: [{
    data: [800, 780, 610, 410, 350, 200,110,80]
  }],
    chart: {
    type: 'bar',
    height: 250,
    toolbar: {
      show: false,
    },
    },
    plotOptions: {
      bar: {
        barHeight: '100%',
        distributed: true,
        borderRadius: 5,
        dataLabels: {
          position: 'bottom'
        },
      }
    },
    colors:colors,
    legend: {
      show: false,
    },
    stroke: {
      show: false,      
  },
    grid: {
      show: true,
      strokeDashArray: 7,
    },
    dataLabels: {
      enabled: false,
      textAnchor: 'start',
      style: {
        colors: ['#fff']
      },
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
      },
      dropShadow: {
        enabled: true
      }
    },
    xaxis: {
      categories: ['Korrea', 'India', 'Spain', 'UAE', 'USA', 'Japan', 'Italy', 'Greece'],
    },

    yaxis: {
      labels: {
        show: true,
        minWidth: 20,
        maxWidth: 20
      }
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return ''
          }
        }
      }
    }
    };
   const chart = new ApexCharts(
      document.querySelector("#analytics-chart-02"),
      options
    );
    chart.render();

    //color customizer
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

    //Font customizer
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
  if (document.querySelectorAll("#analytics-chart-04").length) {
    const variableColors = IQUtils.getVariableColor();
    const colors = [variableColors.primary, variableColors.secondary, variableColors.tertiray];
    const options = {
      series: [44, 55, 41],
      chart: {
      type: 'donut',
      width: '100%',
      height: 340,
    },
    plotOptions: {
      pie: {
        startAngle: -120,
        endAngle: 120,
      }
    },
    colors:colors,
    dataLabels: {
      enabled: false,
    },
    legend: {
      show:false
    },
    grid: {
      padding: {
        bottom: -80
      }
    },
    responsive: [{
      breakpoint: 1400,
      options: {
        chart: {
          width: 270,
          height: 300
        },
        
      },
    },
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 300
        },
        
      }
    },
    {
      breakpoint: 380,
      options: {
        chart: {
          width: 100,
        }
        
      }
    }
  ]
    };
   const chart = new ApexCharts(
      document.querySelector("#analytics-chart-04"),
      options
    );
    chart.render();

    //color customizer
    document.addEventListener("theme_color", (e) => {
      const variableColors = IQUtils.getVariableColor();
      const colors = [variableColors.primary, variableColors.secondary, variableColors.tertiray];

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

    //Font customizer
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
  if (document.querySelectorAll("#analytics-chart-01").length) {
    const variableColors = IQUtils.getVariableColor();
    const colors = [ variableColors.secondary, variableColors.tertiray,variableColors.primary,];
    var options = {
      series: [{
      name: 'Avg.Session',
      data: [11, 5, 32, 20, 33, 15, 25, 45, 10 ,25, 15, 30]
    }, {
      name: 'Conversion Rate',
      data: [20, 25, 15, 30, 35, 40, 25, 42, 28, 45, 15, 20]
    },
    { name: 'Avg. Session Durations',
    data: [22, 17, 20, 25, 15, 15, 10, 25, 18, 25, 35, 45]
    }],
      chart: {
      height: 400,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    colors: colors,
    dataLabels: {
      enabled: false
    },
    grid: {
      show: true,
      strokeDashArray: 7,
      padding: {
        right: 0
      }
    },
    stroke: {
      curve: 'smooth',
      width:2
    },
    legend: {
     show:false,
    },
    yaxis: {
      labels:{
        minWidth: 20,
        maxWidth: 20
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nove', 'Dec'],
      labels:{
        minHeight: 20,
        maxHeight: 20
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityTo: 0.5
        ,
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
    };

   const chart = new ApexCharts(
      document.querySelector("#analytics-chart-01"),
      options
    );
    chart.render();
    //color customizer
    document.addEventListener("theme_color", (e) => {
      const variableColors = IQUtils.getVariableColor();
      const colors = [variableColors.secondary, variableColors.tertiray,variableColors.primary];

      const newOpt = {
        colors: colors,
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            colors: colors,
          },
        },
      };
      chart.updateOptions(newOpt);
    });

    //Font customizer
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

/*---------------------------ecommerace chart-----*/
if (document.querySelectorAll("#eccomerce-chart-01").length) {
  const variableColors = IQUtils.getVariableColor();
    const colors = [variableColors.primary, variableColors.secondary];
    const options = {
      series: [
        {
          name: "Successful deals",
          data: [30, 50, 35, 60, 40, 60],
        },
        {
          name: "Failed deals",
          data: [40, 50, 55, 50, 30, 80],
        },
      ],
      chart: {
        type: "bar",
        height: "270",
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      colors: colors,
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "28%",
          borderRadius: 5,
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 3,
        colors: ["transparent"],
      },
      grid: {
        show: true,
        strokeDashArray: 7,
      },
      xaxis: {
        categories: ["June", "July", "Aug", "Sep", "Nov", "Dec"],
        labels: {
          minHeight: 24,
          maxHeight: 24,
          style: {
            colors: "#4E4E4E",
          },
        },
      },
      yaxis: {
        labels: {
          minWidth: 20,
          maxWidth: 20,
          style: {
            colors: "#4E4E4E",
          },
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
      responsive: [
        {
          breakpoint: 1025,
          options: {
            chart: {
              height: 280,
            },
          },
        },
      ],
    };

    const chart = new ApexCharts(
      document.querySelector("#eccomerce-chart-01"),
      options
    );
    chart.render();
     //color customizer
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

    //Font customizer
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
if (document.querySelectorAll('#eccomerce-chart-02').length) {
  const variableColors = IQUtils.getVariableColor();
  const colors = [variableColors.primary, variableColors.secondary, variableColors.tertiray];
    const options = {
        series: [50, 30 ,20],
        chart: {
            height: 200,
            type: 'radialBar',
        },
        colors:colors,
        plotOptions: {
        radialBar: {
            inverseOrder: false,
            endAngle: 360,
            hollow: {
                margin: 5,
                size: '50%',
                background: 'transparent',
                imageWidth: 180,
                imageHeight: 180,
                imageClipped: true,
                position: 'front',
                dropShadow: {
                  enabled: false,
                  blur: 3,
                  opacity: 0.5
                }
            },
            track: {
                show: true,
                background: '#EEEEEE',
                strokeWidth: '70%',
                opacity: 1,
                margin: 6,
                dropShadow: {
                    enabled: false,
                    blur: 3,
                    opacity: 0.5
                }
            },
            dataLabels: {
                show: true,
                name: {
                    show: true,
                    fontSize: '16px',
                    fontWeight: 600,
                    offsetY: -10
                  },
                  value: {
                    show: true,
                    fontSize: '14px',
                    fontWeight: 400,
                    offsetY: 16,
                    formatter: function (val) {
                      return val + '%'
                    }
                },
            }
        }
    },
    labels: ['Electronics', 'Accessories' ,'Hardware'],
    };

    const chart = new ApexCharts(document.querySelector("#eccomerce-chart-02"), options);
    chart.render();
    document.addEventListener('theme_color', (e) => {
      const variableColors = IQUtils.getVariableColor();
      const colors = [variableColors.primary, variableColors.secondary,variableColors.tertiray];

        const newOpt = {
          colors: colors,
          fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: "vertical",
                gradientToColors: colors, // optional, if not defined - uses the shades of same color in series
                opacityFrom: 1,
                opacityTo: 1,
                colors: colors,
            }
          },
       }
        chart.updateOptions(newOpt)
    })
    document.addEventListener('body_font_family',(e) =>{
        let prefix = getComputedStyle(document.body).getPropertyValue('--prefix') || 'bs-';
        if (prefix) {
            prefix = prefix.trim()
        }
        const font_1 = getComputedStyle(document.body).getPropertyValue(`--${prefix}body-font-family`);
        const fonts = [font_1.trim()];
        const newOpt = {
            chart: {
                fontFamily: fonts,
            }
    }
    chart.updateOptions(newOpt)
    })
}
//*------------------------crypto dashboard------------*//
if (jQuery("#crypto-chart-01").length) {
  var options = {
    series: [{
      name: "Bitcoin",
      data: [10, 21, 15, 31, 29, 42, 39, 61, 41, 51, 32, 51, 51, 55,60]
  }],
    chart: {
    height: 80,
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
    curve: 'straight',
    width: 2
  },
  legend: {
    show: false
  },
  colors:['#1AA053'],
  grid: {
    show:false,
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
  var chart = new ApexCharts(document.querySelector("#crypto-chart-01"), options);
  chart.render();
   //color customizer
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

  //Font customizer
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

if (jQuery("#crypto-chart-02").length) {
   var options = {
    series: [{
      name: "Bitcoin",
      data: [10, 21, 15, 31, 29, 42, 39, 61, 41, 51, 32, 51, 51, 55,60]
  }],
    chart: {
    height: 80,
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
    curve: 'straight',
    width: 2
  },
  legend: {
    show: false
  },
  colors:['#1AA053'],
  grid: {
    show:false,
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
  var chart = new ApexCharts(document.querySelector("#crypto-chart-02"), options);
  chart.render();
   //color customizer
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

  //Font customizer
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
if (jQuery("#crypto-chart-03").length) {
  var options = {
    series: [{
      name: "Bitcoin",
      data: [10, 21, 15, 31, 29, 42, 39, 61, 41, 51, 32, 51, 51, 55,60]
  }],
    chart: {
    height: 80,
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
    curve: 'straight',
    width: 2
  },
  legend: {
    show: false
  },
  colors:['#C03221'],
  grid: {
    show:false,
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
  var chart = new ApexCharts(document.querySelector("#crypto-chart-03"), options);
  chart.render();
    //color customizer
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

    //Font customizer
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
if (jQuery("#crypto-chart-04").length) {
  var options = {
    series: [{
      name: "Bitcoin",
      data: [10, 21, 15, 31, 29, 42, 39, 61, 41, 51, 32, 51, 51, 55,60]
  }],
    chart: {
    height: 80,
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
    curve: 'straight',
    width: 2
  },
  legend: {
    show: false
  },
  colors:['#7016d0'],
  grid: {
    show:false,
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
  var chart = new ApexCharts(document.querySelector("#crypto-chart-04"), options);
  chart.render();
     //color customizer
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

    //Font customizer
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
if (document.querySelectorAll("#crypto-chart-05").length) {
  const variableColors = IQUtils.getVariableColor();
  const colors = [variableColors.primary, variableColors.secondary];
  const options = {
    series: [{
    data: [{
        x: 1996,
        y: 500
      },
      {
        x: 1997,
        y: 400
      },
      {
        x: 1998,
        y: 429
      },
      {
        x: 1999,
        y: 342
      },
      {
        x: 2000,
        y: 448
      },
      {
        x: 2001,
        y: 234
      },
      {
        x: 2002,
        y: 325
      },
      {
        x: 2003,
        y: 316
      },
      {
        x: 2004,
        y: 218
      },
      {
        x: 2005,
        y: 430
      },
      {
        x: 2006,
        y: 355
      },
      {
        x: 2007,
        y: 466
      },
      {
        x: 2008,
        y: 337
      },
      {
        x: 2009,
        y: 452
      },
      {
        x: 2010,
        y: 377
      }
    ]
  
  }],
    chart: {
    type: 'area',
    toolbar: {
      show: false
  },
    height: 215
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight',
    width: 2,
  },
  colors: ['#c03221'],
  xaxis: {
    type: 'datetime',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      minHeight: 20,
      maxHeight: 20,
    },
  },
  yaxis: {
    tickAmount: 4,
    floating: false,
  
    labels: {
      minWidth: 20,
      maxWidth: 20,
      offsetY: -7,
      offsetX: 0,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false
    }
  },
  fill: {
    opacity: 0.5
  },
  tooltip: {
    x: {
      format: "yyyy",
    },
    fixed: {
      enabled: false,
      position: 'topRight'
    }
  },
  grid: {
    show: true,
    strokeDashArray: 7,
    yaxis: {
      lines: {
        offsetX: -30
      }
    },
  }
  };

  const chart = new ApexCharts(
    document.querySelector("#crypto-chart-05"),
    options
  );
  chart.render();

  //color customizer
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

  //Font customizer
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
if (document.querySelectorAll("#crypto-chart-06").length) {
  const variableColors = IQUtils.getVariableColor();
  const colors = [variableColors.primary, variableColors.secondary];
  var options = {
    series: [{
    data: [{
        x: new Date(1538778600000),
        y: [6629.81, 6650.5, 6623.04, 6633.33]
      },
      {
        x: new Date(1538780400000),
        y: [6632.01, 6643.59, 6620, 6630.11]
      },
      {
        x: new Date(1538782200000),
        y: [6630.71, 6648.95, 6623.34, 6635.65]
      },
      {
        x: new Date(1538784000000),
        y: [6635.65, 6651, 6629.67, 6638.24]
      },
      {
        x: new Date(1538785800000),
        y: [6638.24, 6640, 6620, 6624.47]
      },
      {
        x: new Date(1538787600000),
        y: [6624.53, 6636.03, 6621.68, 6624.31]
      },
      {
        x: new Date(1538789400000),
        y: [6624.61, 6632.2, 6617, 6626.02]
      },
      {
        x: new Date(1538791200000),
        y: [6627, 6627.62, 6584.22, 6603.02]
      },
      {
        x: new Date(1538793000000),
        y: [6605, 6608.03, 6598.95, 6604.01]
      },
      {
        x: new Date(1538794800000),
        y: [6604.5, 6614.4, 6602.26, 6608.02]
      },
      {
        x: new Date(1538796600000),
        y: [6608.02, 6610.68, 6601.99, 6608.91]
      },
      {
        x: new Date(1538798400000),
        y: [6608.91, 6618.99, 6608.01, 6612]
      },
      {
        x: new Date(1538800200000),
        y: [6612, 6615.13, 6605.09, 6612]
      },
      {
        x: new Date(1538802000000),
        y: [6612, 6624.12, 6608.43, 6622.95]
      },
      {
        x: new Date(1538803800000),
        y: [6623.91, 6623.91, 6615, 6615.67]
      },
      {
        x: new Date(1538805600000),
        y: [6618.69, 6618.74, 6610, 6610.4]
      },
      {
        x: new Date(1538807400000),
        y: [6611, 6622.78, 6610.4, 6614.9]
      },
      {
        x: new Date(1538809200000),
        y: [6614.9, 6626.2, 6613.33, 6623.45]
      },
      {
        x: new Date(1538811000000),
        y: [6623.48, 6627, 6618.38, 6620.35]
      },
      {
        x: new Date(1538812800000),
        y: [6619.43, 6620.35, 6610.05, 6615.53]
      },
      {
        x: new Date(1538814600000),
        y: [6615.53, 6617.93, 6610, 6615.19]
      },
      {
        x: new Date(1538816400000),
        y: [6615.19, 6621.6, 6608.2, 6620]
      },
      {
        x: new Date(1538818200000),
        y: [6619.54, 6625.17, 6614.15, 6620]
      },
      {
        x: new Date(1538820000000),
        y: [6620.33, 6634.15, 6617.24, 6624.61]
      },
      {
        x: new Date(1538821800000),
        y: [6625.95, 6626, 6611.66, 6617.58]
      },
      {
        x: new Date(1538823600000),
        y: [6619, 6625.97, 6595.27, 6598.86]
      },
      {
        x: new Date(1538825400000),
        y: [6598.86, 6598.88, 6570, 6587.16]
      },
      {
        x: new Date(1538827200000),
        y: [6588.86, 6600, 6580, 6593.4]
      },
      {
        x: new Date(1538829000000),
        y: [6593.99, 6598.89, 6585, 6587.81]
      },
      {
        x: new Date(1538830800000),
        y: [6587.81, 6592.73, 6567.14, 6578]
      },
      {
        x: new Date(1538832600000),
        y: [6578.35, 6581.72, 6567.39, 6579]
      },
      {
        x: new Date(1538834400000),
        y: [6579.38, 6580.92, 6566.77, 6575.96]
      },
      {
        x: new Date(1538836200000),
        y: [6575.96, 6589, 6571.77, 6588.92]
      },
      {
        x: new Date(1538838000000),
        y: [6588.92, 6594, 6577.55, 6589.22]
      },
      {
        x: new Date(1538839800000),
        y: [6589.3, 6598.89, 6589.1, 6596.08]
      },
      {
        x: new Date(1538841600000),
        y: [6597.5, 6600, 6588.39, 6596.25]
      },
      {
        x: new Date(1538843400000),
        y: [6598.03, 6600, 6588.73, 6595.97]
      },
      {
        x: new Date(1538845200000),
        y: [6595.97, 6602.01, 6588.17, 6602]
      },
      {
        x: new Date(1538847000000),
        y: [6602, 6607, 6596.51, 6599.95]
      },
      {
        x: new Date(1538848800000),
        y: [6600.63, 6601.21, 6590.39, 6591.02]
      }

    ]
  }],
    chart: {
    type: 'candlestick',
    toolbar: {
      show: false,
    },
    height: 280
  },
  plotOptions: {
    candlestick: {
      colors: {
        upward: '#7016d0',
        downward: '#08B1BA'
      }
    }
  },
  xaxis: {
    type: 'datetime',
    labels: {
      minHeight:20,
      maxHeight:20
    }
  },
  grid: {
    show: true,
    strokeDashArray: 7,
  },
  yaxis: {
    tooltip: {
      enabled: true
    }
  }
  };
  const chart = new ApexCharts(
    document.querySelector("#crypto-chart-06"),
    options
  );
  chart.render();

  //color customizer
  document.addEventListener("theme_color", (e) => {
    const variableColors = IQUtils.getVariableColor();
    const colors = [variableColors.primary, variableColors.secondary];

    const newOpt = {
      colors: colors,
      
    };
    chart.updateOptions(newOpt);
  });

  //Font customizer
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
})(jQuery);

