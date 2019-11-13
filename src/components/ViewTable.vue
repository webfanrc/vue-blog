<template>
  <div class="viewTable" ref="viewTable">
    <div id="myChart" :style="{width: defaultWidth, height: defaultHeight}"></div>
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
        defaultWidth: '100%',
        defaultHeight: '400px',
        chartStyle: '',
      }
    },
    props: ['lineTableData'],
    mounted(){
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
      init(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'));
        let that = this;
        // 绘制图表
        myChart.setOption({
          title: { text: '每日访问量' },
          itemStyle: {
            width: that.defaultWidth,
          },
          xAxis: {
            data: this.time,
            name: '',
            type: 'category',
            boundaryGap: false,
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            name: '时间',
            type: 'line',
            data: this.number,
            smooth: true,
            areaStyle: {
            }
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