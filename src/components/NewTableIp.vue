<template>
  <div>
    <h3>Daily visitor</h3>
    <canvas id="myChartLine" width="400" height="250"></canvas>
  </div>
</template>
<script>
  import Chart from 'chart.js'
  export default {
    name: 'NewTableIp',
    data() {
      return {
        time: [],
        number: [],
      }
    },
    props: ['lineTableData'],
    mounted() {
      this.setData();
      this.init();
    },
    methods: {
      setData() {
        let that = this;
        this.lineTableData.forEach(function(n) {

          that.time.push(n.date);
          that.number.push(n.count);
        })
      },
      init() {
        let ctx = document.getElementById('myChartLine').getContext('2d');

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