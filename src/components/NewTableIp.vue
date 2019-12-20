<template>
  <div>
    <h3>Daily visitor</h3>
    <canvas id="myChartLine" width="400" height="250"></canvas>
  </div>
</template>
<script>
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
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
      }
    }
  }
</script>