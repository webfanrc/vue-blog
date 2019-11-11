<template>
  <div>
    <div id="myChart" :style="{width: '700px', height: '400px'}"></div>
  </div>
</template>

<script>
  import 'echarts/lib/chart/line'
  import 'echarts/lib/component/polar'

  export default {
    name: 'ViewTable',
    data () {
      return {
        time: [],
        number: [],
      }
    },
    props: ['lineTableData'],
    mounted(){
      this.formate();
      this.init();
    },
    methods: {
      formate() {
        let that = this;
        this.lineTableData.forEach(function(n) {

          that.time.push(n.date);
          that.number.push(n.count);
        })
      },
      init(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'));
        // 绘制图表
        myChart.setOption({
          title: { text: '' },
          tooltip: {},
          xAxis: {
            data: this.time,
            type: 'category',
            boundaryGap: false,
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            name: 'Time',
            type: 'line',
            data: this.number,
            smooth: true,
            areaStyle: {}
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