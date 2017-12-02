<template>
  <div :style="{width: chartWidth + 'px', height: chartHeight + 'px'}">
    <IEcharts :option="barPie"></IEcharts>
  </div>
</template>

<script>
    import IEcharts from 'vue-echarts-v3/src/lite.js'
    import 'echarts/lib/chart/radar'
    import 'echarts/theme/dark'
    
    let dataAll = [323, 267, 212, 184, 118];
    let yAxisData = ['交通事故','消费及服务纠纷','物权纠纷','合同纠纷','民事案件'];

    export default{
      components:{
        IEcharts
      },
      props:{
        chartWidth:{
          default: 100
        },
        chartHeight:{
          default: 100
        },
        items:{
          default:[]
        },
      },
      mounted:function () {
        
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
          //图表加载
          barPie:{
                  title:[
                  {text:"各渠道投诉占比",x: '2%', y: '1%',textStyle:{color:"#fff",fontSize:"14"}},
                  {text:"主要事件top5",x: '40%', y: '1%',textStyle:{color:"#fff",fontSize:"14"}},
                  {text:"各级别投诉占比",x: '2%', y: '50%',textStyle:{color:"#fff",fontSize:"14"}},
            ],
            grid: [
                {x: '50%', y: '7%', width: '45%', height: '90%'},
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
                    name: '各渠道投诉占比',
                    type: 'pie',
                    radius : '30%',
                    center: ['22%', '25%'],
                    color:['#86c9f4','#4da8ec','#3a91d2','#005fa6','#315f97'],
                    data:[
                        {value:335, name:'客服电话'},
                        {value:310, name:'奥迪官网'},
                        {value:234, name:'媒体曝光'},
                        {value:135, name:'质检总局'},
                        {value:105, name:'其他'},
                    ],
                    labelLine:{normal:{show:false}},
                    itemStyle: {normal: {label:{ show: true,  formatter: '{b} \n ({d}%)', textStyle:{color:'#B1B9D3'}} },},
                },
                {
                    name: '各级别投诉占比',
                    type: 'pie',
                    radius : '30%',
                    center: ['22%', '75%'],
                    color:['#86c9f4','#4da8ec','#3a91d2','#005fa6','#315f97'],
                    labelLine:{normal:{show:false}},
                    data:[
                        {value:335, name:'A级'},
                        {value:310, name:'B级'},
                        {value:234, name:'C级'},
                        {value:135, name:'D级'},
                    ],
                    itemStyle: {normal: {label:{ show: true,  formatter: '{b} \n ({d}%)', textStyle:{color:'#B1B9D3'}} },},
                },
                {
                    name: '主要事件top5',
                    type: 'bar',xAxisIndex: 0,yAxisIndex: 0,barWidth:'45%',
                    itemStyle:{normal:{color:'#86c9f4'}},
                    label:{normal:{show:true, position:"right",textStyle:{color:"#9EA7C4"}}},
                    data: dataAll.sort(),
                }                
            ]
        }
      }
    }
  }
</script>
