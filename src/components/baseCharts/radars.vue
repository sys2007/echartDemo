<!-- 仪表图 -->
<template>
  <div :style="{width: chartWidth + 'px', height: chartHeight + 'px'}">
    <IEcharts :option="radars"></IEcharts>
  </div>
</template>

<script>
    import IEcharts from 'vue-echarts-v3/src/lite.js'
    import 'echarts/lib/chart/radar'
    import 'echarts/theme/dark'
    export default{
      components:{
        IEcharts
      }, 
      props:{
        chartWidth:{
          default: 440
        },
        chartHeight:{
          default: 400
        }
      },     
      mounted:function () {
        //初始化图表数据
        
      },     
      methods:{
        
      },
      data:function () {
        return {
          radars:{
            // title: {
            //     text: '多雷达图'
            // },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                x: 'center',
                data:['长安区','新华区','桥西区','裕华区'],
                textStyle:{color:"#fff"}
            },
            radar: [
                {
                    indicator: [
                        {text: '受理量', max: 230000},
                        {text: '处置量', max: 230000},
                        {text: '结案率', max: 100},
                        {text: '完好率', max: 100}
                    ],
                    center: ['25%','50%'],
                    radius: 55
                },
                {
                    indicator: [
                        {text: '上报量', max: 3000},
                        {text: '受理量', max: 3000},
                        {text: '处置量', max: 3000},
                        {text: '结案率', max: 100},
                        {text: '完好率', max: 100}
                    ],
                    radius: 55,
                    center: ['75%','50%'],
                }
            ],
            series: [
                {
                    type: 'radar',
                     tooltip: {
                        trigger: 'item'
                    },
                    // itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data: [
                        {
                            value: [227893,227201,89,92],
                            name: '长安区'
                        },
                        {
                            value: [197852,197701,92,98],
                            name: '裕华区'
                        },
                        {
                            value: [201231,200986,91,95],
                            name: '新华区'
                        },
                        {
                            value: [192313,192198,95,88],
                            name: '桥西区'
                        }
                    ]
                },
                {
                    type: 'radar',
                    radarIndex: 1,
                    data: [
                        {
                            value: [2565, 2434, 2274, 72, 98],
                            name: '长安区'
                        },
                        {
                            value: [1775, 1762, 1660, 80, 98],
                            name: '新华区'
                        },
                        {
                            value: [1314, 1300, 1255, 77, 97],
                            name: '桥西区'
                        },
                        {
                            value: [2123, 2097, 2017, 82, 98],
                            name: '裕华区'
                        }
                    ]
                }
              ]
            }
        }
      }
    }
</script>
