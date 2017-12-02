<!-- 2条图 -->
<template>
  <div :style="{width: chartWidth + 'px', height: chartHeight + 'px'}">
    <IEcharts :option="lines"></IEcharts>
  </div>
</template>

<script>
    import IEcharts from 'vue-echarts-v3/src/lite.js'
    import 'echarts/theme/dark'
    export default{
      components:{
        IEcharts
      },
      props:{
        chartWidth:{
          default: 450
        },
        chartHeight:{
          default: 260
        }
      },
      mounted:function () {
        //初始化图表数据
        this.findChartOptionData();
      },
      watch:{
        //监听items数据变化进行更新
        
      },
      methods:{
        findChartOptionData:function(){
            
        }
      },
        data:function () {
          return {
            lines:{
                  // title: {
                  //     text: '折线图堆叠'
                  // },
                  tooltip: {
                      trigger: 'axis'
                  },
                  legend: {
                      data:['治安类','矛盾纠纷类','民事纠纷类'],
                      textStyle:{color:"#fff"}
                  },
                  // grid: {
                  //     left: '3%',
                  //     right: '4%',
                  //     bottom: '3%',
                  //     containLabel: true
                  // },
                  // toolbox: {
                  //     feature: {
                  //         saveAsImage: {}
                  //     }
                  // },
                  xAxis: {
                      type: 'category',
                      boundaryGap: false,
                      data: ['7月','8月','9月','10月','11月','12月'],
                      axisLabel:{
                        show:true,
                        textStyle:{
                          color:'#fff'
                        }
                      }
                  },
                  yAxis: {
                      type: 'value',
                      axisLabel:{
                        show:true,
                        textStyle:{
                          color:'#fff'
                        }
                      }
                  },
                  series: [
                      {
                          name:'治安类',
                          type:'line',
                          stack: '总量',
                          data:[74704, 60714, 62636, 62636, 55921, 8921]
                      },
                      {
                          name:'矛盾纠纷类',
                          type:'line',
                          stack: '总量',
                          data:[89921, 93957, 92956, 71831, 64610, 1820]
                      },
                      {
                          name:'民事纠纷类',
                          type:'line',
                          stack: '总量',
                          data:[45212, 52213, 42351, 58274, 36315, 960]
                      }
                  ]
              }  
          }
        }
    }
</script>
