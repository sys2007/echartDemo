<!-- 2条图 -->
<template>
  <div :style="{width: chartWidth + 'px', height: chartHeight + 'px'}">
    <IEcharts :option="bars"></IEcharts>
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
          default: 430
        },
        chartHeight:{
          default: 500
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
                title: {
                    text: '区划人员分析',                    
                    textStyle:{color:"#fff"}
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['面积', '人口'],
                    textStyle:{color:"#fff"}
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01],
                    axisLabel:{
                      show:true,
                      textStyle:{
                        color:'#fff'
                      }
                    },
                },
                yAxis: {
                    type: 'category',
                    data: ['长安区','新华区','桥西区','裕华区','井陉县','井陉矿区','元氏县','平山县','新乐市','无极县','晋州市','栾城区','正定县','深泽县','灵寿县','藁城区','行唐县','赞皇县','赵县','辛集市','高邑县','鹿泉区'],
                    axisLabel:{
                      show:true,
                      textStyle:{
                        color:'#fff'
                      }
                    }
                },
                series: [
                    {
                        name: '面积',
                        type: 'bar',
                        data: [110.24,92.11,54.46,101.45,1381,69.98,676,2648,525,524,619,347,468,296.39,1069,863,1025,1210,675,951,222,603]
                    },
                    {
                        name: '人口',
                        type: 'bar',
                        data: [42.65,48.8,51.69,41.69,32.9,13,40,46,48.8,50.26,53.3,33,47.5,25,32.7,77.51,45,24,58.83,61.9,18,38.46]
                    }
                ]
              }  
          }
        }
    }
</script>
