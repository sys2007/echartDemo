<!-- 条+单饼图 -->
<template>
  <div :style="{width: chartWidth + 'px', height: chartHeight + 'px'}">
    <IEcharts :option="barPies"></IEcharts>
  </div>
</template>

<script>
    import IEcharts from 'vue-echarts-v3/src/lite.js'
    import 'echarts/theme/dark'
    
    let dataAll = [323, 267, 212, 184, 118];
    let yAxisData = ['交通事故','消费及服务纠纷','物权纠纷','合同纠纷','民事案件'];

    export default{
      components:{
        IEcharts
      },
      props:{
        chartWidth:{
          default: 800
        },
        chartHeight:{
          default: 210
        }
      },
      mounted:function () {
        
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
          //图表加载
          barPies:{
                  title:[
                  {text:"各事件占比",x: '2%', y: '1%',textStyle:{color:"#fff",fontSize:"14"}},
                  {text:"主要事件top5",x: '40%', y: '1%',textStyle:{color:"#fff",fontSize:"14"}}
            ],
            grid: [
                {x: '50%', y: '10%', width: '50%', height: '90%'},
            ],
            tooltip: {
                formatter: '{b} ({c})'
            },
            xAxis: [
                {gridIndex: 0, axisTick: {show:false},axisLabel: {show:false},splitLine: {show:false},axisLine: {show:false }},
            ],
            yAxis: [
                 {  gridIndex: 0, interval:0,data:yAxisData.reverse(),
                    axisTick: {show:false}, axisLabel: {show:true},splitLine: {show:false},
                    axisLine: {show:true,lineStyle:{color:"#6173a3"}},
                }
            ],
            series: [
                {
                    name: '各事件占比',
                    type: 'pie',
                    radius : '50%',
                    center: ['20%', '50%'],
                    color:['#86c9f4','#4da8ec','#3a91d2','#005fa6','#315f97'],
                    data:[
                        {value:323, name:'交通事故'},
                        {value:267, name:'消费及服务纠纷'},
                        {value:212, name:'物权纠纷'},
                        {value:184, name:'合同纠纷'},
                        {value:118, name:'民事案件'},
                    ],
                    labelLine:{normal:{show:false}},
                    itemStyle: {normal: {label:{ show: true,  formatter: '{b} \n ({d}%)', textStyle:{color:'#B1B9D3'}} },},
                },
                {
                    name: '主要事件top5',
                    type: 'bar',xAxisIndex: 0,yAxisIndex: 0,barWidth:'45%',
                    itemStyle:{normal:{color:['#86c9f4','#4da8ec','#3a91d2','#005fa6','#315f97']}},
                    label:{normal:{show:true, position:"right",textStyle:{color:"#9EA7C4"}}},
                    data: dataAll.sort(),
                }                
            ]
        }
      }
    }
  }
</script>
