<template>
  <div>
    <h3>Page views</h3>
    <canvas id="myChartLinePv" width="400" height="250"></canvas>
  </div>
</template>
<script>
  import service from '../utils/http'
  import Chart from 'chart.js'
  export default {
    name: 'NewTableIp',
    data() {
      return {
        time: [],
        number: [],
        lineTableData: {},
      }
    },
    mounted() {
      this.getData();
    },
    methods: {
      getData() {
        let that = this
        service.get('/statistic/pv').then(function(response) {
          that.lineTableData = response.data.pvListFormat;
          that.setData();
          that.init();
        });
      },
      setData() {
        let that = this;
        this.lineTableData.forEach(function(n) {

          that.time.push(n.date);
          that.number.push(n.count);
        })
      },
      init() {
        let ctx = document.getElementById('myChartLinePv').getContext('2d');

        let myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: this.time,
            datasets: [{
              label: '# of visitors',
              data: this.number,
              backgroundColor: 'rgba(51, 113, 230, 0.69)',
              borderColor: 'rgba(51, 113, 230, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              xAxes: [{
                gridLines: {
                  color: "rgba(0, 0, 0, 0)",
                }
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: false
                }
              }]
            }
          }
        });
      }
    }
  }
</script>