<template>
  <div class="viewTableArticle" ref="viewTableArticle">
    <div id="articleChart" ref="articleChart" :style="{width: defaultWidth, height: defaultHeight, zIndex: -1}"></div>
  </div>
</template>

<script>
  export default {
    name: 'ViewTableArticle',
    data () {
      return {
        time: [],
        number: [],
        defaultWidth: '100%',
        defaultHeight: '400px',
        chartStyle: '',

        barTableDataComponents: [],
      }
    },
    props: ['barTableData'],
    mounted(){
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
      init(){
        // 基于准备好的dom，初始化echarts实例
        let echarts = require('echarts/lib/echarts');

        require('echarts/lib/chart/bar');

        require('echarts/lib/component/title');
        let myChart = echarts.init(this.$refs.articleChart);
        let that = this;
        // 绘制图表
        myChart.setOption({
          title: { text: 'Monthly article' },
          xAxis: {
            data: this.time,
            type: 'category',
          },
          yAxis: {
            type: 'value',
            axisPointer: true,
          },
          series: [{
            name: '时间',
            type: 'bar',
            data: this.number,
          }]
        });
      }
    }
  }
</script>
<style>
  /**
   * The default size is 600px×400px, for responsive charts
   * you may need to set percentage values as follows (also
   * don't forget to provide a size for the container).
   */
  .echarts {
    width: 100%;
    height: 100%;
  }
</style>