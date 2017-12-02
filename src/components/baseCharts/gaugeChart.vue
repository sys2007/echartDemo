<!-- 仪表图 -->
<template>
  <div :style="{width: chartWidth + 'px', height: chartHeight + 'px'}">
    <IEcharts :option="gauge"></IEcharts>
  </div>
</template>

<script>
    import IEcharts from 'vue-echarts-v3/src/lite.js'
    import 'echarts/lib/chart/gauge'
    import 'echarts/theme/dark'
    export default{
      components:{
        IEcharts
      },
      props:{
        chartWidth:{
          default: 140
        },
        chartHeight:{
          default: 100
        },
        items:{
          default:[]
        },
      },
      mounted:function () {
        //初始化图表数据
        this.findChartOptionData();
      },
      watch:{
        //监听items数据变化进行更新
        items : {
          handler : function(val,oldVal){
            this.findChartOptionData();
          },
          deep:true
        }
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
                tooltip:{
                  formatter:'{b}:{c}'
                },
                  series:[
                    {
                      type:'gauge',
                      min:0,
                      max:500,
                      center:['50%','50%'],
                      radius:'95%',
                      axisLine: {
                        lineStyle: {
                          color:[[0.3, '#3399ff'], [0.7, '#ff9933'], [1, '#cc3300']],
                          width: 5
                        }
                      },
                      axisTick: {
                        show:false
                      },
                      axisLabel:{
                        show:false,
                        textStyle:{
                            fontSize:4
                        }
                      },
                      splitLine: {
                        length: 12,
                        lineStyle: {
                          color: 'auto'
                        }
                      },
                      detail:{
                          textStyle:{
                              fontSize:16
                          }
                      },
                      title : {
                          //data中name显示的配置
                        offsetCenter:[0, '90%'],
                        textStyle: {
                          fontSize: 16,
                          color:'#3399ff'
                        }
                      },
                      pointer:{
                        show:true,
                        width:3,
                        length:'70%'
                      },
                      data:[]
                    }
                  ]
              }
          }
        }
    }
</script>
