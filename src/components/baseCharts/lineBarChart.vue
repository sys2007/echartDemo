<!-- 条+单条图 -->
<template>
  <div :style="{width: chartWidth + 'px', height: chartHeight + 'px'}">
    <IEcharts :option="gauge"></IEcharts>
  </div>
</template>

<script>
    import IEcharts from 'vue-echarts-v3/src/lite.js'
    import 'echarts/lib/chart/gauge'
    import 'echarts/theme/dark'
    let colors = ['#5793f3', '#d14a61'];
    export default{
      components:{
        IEcharts
      },
      props:{
        chartWidth:{
          default: 450
        },
        chartHeight:{
          default: 200
        }
      },
      mounted:function () {
        //初始化图表数据
        //this.findChartOptionData();
      },
      watch:{
        //监听items数据变化进行更新
        
      },
      methods:{
        findChartOptionData:function(){
            //items[{name:'',value:''}] name渲染为title
          this.gauge.series[0].data = this.items;
        }
      },
        data:function () {
          return {
            gauge:{
                color: colors,
                tooltip:{
                  trigger: 'axis',
                  axisPointer: {
                      type: 'cross',
                      crossStyle: {
                          color: '#999'
                      }
                  }
                },
                // grid: {
                //     right: '20%'
                // },
                // toolbox: {
                //     feature: {
                //         dataView: {show: true, readOnly: false},
                //         magicType: {show: true, type: ['line', 'bar']},
                //         restore: {show: true},
                //         saveAsImage: {show: true}
                //     }
                // },
                legend: {
                    data:['处置量','完好率'],
                    textStyle:{color:"#fff"}
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true
                        },
                        data: ['市公安局','市环保局','市卫生局','市交管局','市工商局'],
                        axisPointer: {
                            type: 'shadow'
                        },
                        axisLabel: {                         
                          show:true,
                          textStyle:{
                            color:'#fff'
                          }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '处置量',
                        min: 0,
                        max: 500,
                        position: 'left',
                        //interval: 100,
                        axisLine: {
                            lineStyle: {
                                color: colors[0]
                            }
                        },
                        axisLabel: {
                          formatter: '{value} ',
                          show:true,
                          textStyle:{
                            color:'#fff'
                          }
                        }
                    },
                    {
                        type: 'value',
                        name: '完好率',
                        min: 0,
                        max: 100,
                        position: 'right',
                        //interval: 5,
                        axisLine: {
                            lineStyle: {
                                color: colors[1]
                            }
                        },
                        axisLabel: {
                            formatter: '{value} %',
                            show:true,
                            textStyle:{
                              color:'#fff'
                            }
                        }
                    }
                ],
                series: [
                    {
                        name:'处置量',
                        type:'bar',
                        barMaxWidth: 20,
                        data:[455, 342, 323, 322, 298]
                    },
                    {
                        name:'完好率',
                        type:'line',
                        yAxisIndex: 1,
                        data:[99, 97, 96, 100, 95]
                    }
                ]
              }
          }
        }
    }
</script>
