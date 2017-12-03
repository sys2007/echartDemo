<!-- 条+单饼图 -->
<template>
  <div :style="{width: chartWidth + 'px', height: chartHeight + 'px'}">
    <IEcharts :option="barPies"></IEcharts>
  </div>
</template>

<script>
    import IEcharts from 'vue-echarts-v3/src/lite.js'
    import 'echarts/theme/dark'
    
    let dataAll = [42.65,48.8,51.69,41.69,32.9,13,40,46,48.8,50.26,53.3,33,47.5,25,32.7,77.51,45,24,58.83,61.9,18,38.46];
    let xAxisData = ['长安区','新华区','桥西区','裕华区','井陉县','井陉矿区','元氏县','平山县','新乐市','无极县','晋州市','栾城区','正定县','深泽县','灵寿县','藁城区','行唐县','赞皇县','赵县','辛集市','高邑县','鹿泉区'];
    let pieData = [{value:110.24,  name: '长安区'},
{value:92.11,   name: '新华区'},
{value:54.46,   name: '桥西区'},
{value:101.45,  name: '裕华区'},
{value:1381,    name: '井陉县'},
{value:69.98,   name: '井陉矿区'},
{value:676,     name: '元氏县'},
{value:2648,    name: '平山县'},
{value:525,     name: '新乐市'},
{value:524,     name: '无极县'},
{value:619,     name: '晋州市'},
{value:347,     name: '栾城区'},
{value:468,     name: '正定县'},
{value:296.39,  name: '深泽县'},
{value:1069,    name: '灵寿县'},
{value:863,     name: '藁城区'},
{value:1025,    name: '行唐县'},
{value:1210,    name: '赞皇县'},
{value:675,     name: '赵县'},
{value:951,     name: '辛集市'},
{value:222,     name: '高邑县'},
{value:603,      name: '鹿泉区'}]

    export default{
      components:{
        IEcharts
      },
      props:{
        chartWidth:{
          default: 940
        },
        chartHeight:{
          default: 615
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
                  {text:"各区面积（平方千米）",x: '10%', y: '5%',textStyle:{color:"#fff",fontSize:"14"}},
                  {text:"各区人口（万人）",x: '45%', y: '5%',textStyle:{color:"#fff",fontSize:"14"}}
            ],
            grid: [
                {x: '50%', y: '15%', width: '50%', height: '75%'},
            ],
            tooltip: {
                formatter: '{b} [{c}]'
            },
             xAxis: [
                {                  
                  type : 'category',
                  nameRotate : 10,
                  axisTick: {alignWithLabel: true},
                  data:xAxisData.reverse(),
                  axisLine: {show:true,lineStyle:{color:"#6173a3"}},              
                  axisTick: {show:false},
                  axisLabel: {rotate : 30,show:true},
                  splitLine: {show:false}
                }
            ],                            
            yAxis: [
                    {
                        type: 'value',
                        name: '人口',
                        position: 'left',
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        },
                        splitLine: {show:false},
                        axisLabel: {
                          formatter: '{value} ',
                          // show:true,
                          textStyle:{
                            color:'#fff'
                          }
                        }
                    }
            ],
            series: [
                {
                    name: '各事件占比',
                    type: 'pie',
                    radius : '30%',
                    center: ['20%', '50%'],
                    color:['#86c9f4','#4da8ec','#3a91d2','#005fa6','#315f97'],
                    data:pieData,
                    labelLine:{normal:{show:false}},
                    itemStyle: {normal: {label:{ rotate:30,show: true,  formatter: '{b} \n ({d}%)', textStyle:{color:'#B1B9D3'}} },},
                },
                {
                    name: '主要事件top5',
                    type: 'bar',xAxisIndex: 0,yAxisIndex: 0,barWidth:'25%',
                    itemStyle:{normal:{color:['#86c9f4','#4da8ec','#3a91d2','#005fa6','#315f97']}},
                    label:{normal:{show:false, position:"right",textStyle:{color:"#9EA7C4"}}},
                    data: dataAll
                }                
            ]
        }
      }
    }
  }
</script>
