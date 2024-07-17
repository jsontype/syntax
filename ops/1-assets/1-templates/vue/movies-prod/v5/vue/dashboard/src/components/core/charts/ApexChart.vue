<template>
  <div :id="element"></div>
</template>

<script>
import ApexCharts from 'apexcharts';
export default {
  name: 'ApexChart',
  // eslint-disable-next-line vue/require-prop-types
  props: ['element', 'chartOption', 'isLive'],
  data() {
    return {
      lastDate: 0,
      data: [],
      TICKINTERVAL: 86400000,
      XAXISRANGE: 777600000,
    };
  },
  mounted() {
    const _this = this;
    const selector = '#' + _this.element;
    const chart = new ApexCharts(document.querySelector(selector), _this.chartOption);
    setTimeout(function () {
      chart.render();
      if (_this.isLive) {
        setInterval(function () {
          _this.getNewSeries(_this.lastDate, {
            min: 10,
            max: 90,
          });
          chart.updateSeries([
            {
              data: _this.data,
            },
          ]);
        }, 1000);
      }
    }, 500);
  },

  methods: {
    getNewSeries(baseval, yrange) {
      const newDate = baseval + this.TICKINTERVAL;
      this.lastDate = newDate;
      for (var i = 0; i < this.data.length - 10; i++) {
        this.data[i].x = newDate - this.XAXISRANGE - this.TICKINTERVAL;
        this.data[i].y = 0;
      }
      this.data.push({
        x: newDate,
        y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min,
      });
    },
  },
};
</script>
