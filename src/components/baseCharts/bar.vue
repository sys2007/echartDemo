<!-- 2条图 -->
<template>
  <div :style="{width: chartWidth + 'px', height: chartHeight + 'px'}">
    <IEcharts :option="bars"></IEcharts>
  </div>
</template>

<script>
    import IEcharts from 'vue-echarts-v3/src/lite.js'
    import 'echarts/theme/dark'

    let dataAll = [21,19,154,53,32,92,283,16,37,92,38,112];
    let yAxisData = ['房屋及不动产纠纷','合同纠纷','家庭纠纷','交通事故','劳务损害','邻里纠纷','民事案件','物权纠纷','消费及服务纠纷','行政案件','医疗损害','治安事件'];

    export default{
      components:{
        IEcharts
      },
      props:{
        chartWidth:{
          default: 430
        },
        chartHeight:{
          default: 560
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
            bars:{
                // title: {
                //     text: '主要事件每日排位',                    
                //     textStyle:{color:"#fff"}
                // },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },                
                grid: {
                  top: '5%',
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01],
                    axisLabel:{
                      rotate : 30,
                      show:true,
                      textStyle:{
                        color:'#fff'
                      }
                    },
                },
                yAxis: {
                    type: 'category',
                    data: yAxisData,
                    axisLabel:{
                      rotate : 30,
                      show:true,
                      textStyle:{
                        color:'#fff'
                      }
                    }
                },
                series: [
                    {
                      color:['#86c9f4','#4da8ec','#3a91d2','#005fa6','#315f97'],
                        name: '面积',
                        type: 'bar',
                        barMaxWidth: 20,
                        data: dataAll.sort()
                    }
                ]
              }  
          }
        }
    }
</script>
