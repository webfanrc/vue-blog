<template>
  <div>
    <h3>Monthly article</h3>
    <canvas id="myChart" width="400" height="250"></canvas>
  </div>
</template>
<script>
  import Chart from 'chart.js'
  export default {
    name: 'NewTableArticle',
    data() {
      return {
        time: [],
        number: [],
      }
    },
    props: ['barTableData'],
    mounted() {
      this.setData();
      this.init();
    },
    methods: {
      setData() {
        let that = this;

        let temp = [];
        let length = this.barTableData.length;
        let gapMonth = 0;

        temp.push(this.barTableData[0]);
        for (let i = 1; i < length; i++) {

          gapMonth = this.calculateMonthGap(temp[temp.length - 1].date, this.barTableData[i].date);


          if (gapMonth == 1) {
            temp.push(this.barTableData[i]);
          } else {

            for (let j = 0; j < gapMonth - 1; j++) {
              temp.push({
                date: this.addMonth(temp[temp.length - 1].date, 1),
                count: 0,
              });
            }
            temp.push(this.barTableData[i]);


          }
        }

        this.barTableDataComponents = temp;

        this.barTableDataComponents.forEach(function(n) {
          that.time.push(n.date);
          that.number.push(n.count);
        })
      },
      // e.g. 2018-01 2019-01 => 12
      calculateMonthGap(A, B) {
        let A_Obj = {
          year: Number(A.split('-')[0]),
          month: Number(A.split('-')[1]),
        };
        let B_Obj = {
          year: Number(B.split('-')[0]),
          month: Number(B.split('-')[1]),
        };

        if (A_Obj.year == B_Obj.year) {
          return B_Obj.month - A_Obj.month;
        } else {
          return (B_Obj.year - A_Obj.year) * 12 + (B_Obj.month - A_Obj.month);
        }
      },
      // e.g 2018-11 1 => 2019-12
      addMonth(A, gap) {
        let A_Obj = {
          year: Number(A.split('-')[0]), //2018
          month: Number(A.split('-')[1]) + gap, //12
        };

        let year = A_Obj.year + Math.floor(A_Obj.month / 12);
        let month = A_Obj.month % 12;

        if (month == 0) {
          month = 12;
        }

        if (month < 10) {
          return year + '-0' + month;
        } else {
          return year + '-' + month;
        }
      },
      init() {
        let ctx = document.getElementById('myChart').getContext('2d');

        let myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: this.time,
            datasets: [{
              label: '# of articles',
              data: this.number,
              backgroundColor: 'rgba(51, 113, 230, 0.69)',
              borderColor: 'rgba(51, 113, 230, 1)',
              borderWidth: 1,
              showLine: false
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
                  beginAtZero: false // ？
                },
                gridLines: {
                  // color: "rgba(0, 0, 0, 0)",
                }
              }]
            },
            tooltips: {
              enabled: false
            }
          }
        });
      },

    }
  }
</script>