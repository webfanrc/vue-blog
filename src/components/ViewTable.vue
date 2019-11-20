<template>
  <div class="viewTable" ref="viewTable">
    <div id="visitorChart" ref="visitorChart" :style="{width: defaultWidth, height: defaultHeight, zIndex: -1}"></div>
  </div>
</template>

<script>

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

        let echarts = require('echarts/lib/echarts');

        require('echarts/lib/chart/line');

        require('echarts/lib/component/title');

        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(this.$refs.visitorChart);
        let that = this;
        // 绘制图表
        myChart.setOption({
          title: { text: 'Daily visitor' },
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
            smooth: false,
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