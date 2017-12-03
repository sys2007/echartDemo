<!-- 仪表图 -->
<template>
  <div :style="{width: chartWidth + 'px', height: chartHeight + 'px'}">
    <IEcharts :option="scatter"></IEcharts>
  </div>
</template>

<script>
    import IEcharts from 'vue-echarts-v3/src/lite.js'
    import 'echarts/lib/chart/scatter'
    import 'echarts/theme/dark'
    export default{
      components:{
        IEcharts
      },
      props:{
        chartWidth:{
          default: 240
        },
        chartHeight:{
          default: 300
        }
      },
      mounted:function () {
        //初始化图表数据
        this.findChartOptionData();
      },
      watch:{
        
      },
      methods:{
        findChartOptionData:function(){
           
        }
      },
        data:function () {
          return {
            scatter:{
                tooltip: {
                    position: 'top'
                },
                title: [{
                          textBaseline: 'middle',
                          top: (0.5) * 100 / 5 + '%',
                          text: "上报量"
                        },{
                          textBaseline: 'middle',
                          top: (1) * 100 / 5 + '%',
                          text: "受理量"
                        },{
                          textBaseline: 'middle',
                          top: (1.5) * 100 / 5 + '%',
                          text: "处置量"
                        },{
                          textBaseline: 'middle',
                          top: (2) * 100 / 5 + '%',
                          text: "结案率"
                        },{
                          textBaseline: 'middle',
                          top: (2.5) * 100 / 5 + '%',
                          text: "完好率"
                        }],
                singleAxis: [{
                          left: 150,
                          type: 'category',
                          boundaryGap: false,
                          data: "长安区",
                          top: (1 * 100 / 5 + 5) + '%',
                          height: (100 / 5 - 10) + '%',
                          axisLabel: {
                              interval: 2
                          }
                      },{
                          left: 150,
                          type: 'category',
                          boundaryGap: false,
                          data: "新华区",
                          top: (2 * 100 / 5 + 5) + '%',
                          height: (100 / 5 - 10) + '%',
                          axisLabel: {
                              interval: 2
                          }
                      },{
                          left: 150,
                          type: 'category',
                          boundaryGap: false,
                          data: "桥西区",
                          top: (3 * 100 / 5 + 5) + '%',
                          height: (100 / 5 - 10) + '%',
                          axisLabel: {
                              interval: 2
                          }
                      },{
                          left: 150,
                          type: 'category',
                          boundaryGap: false,
                          data: "裕华区",
                          top: (4 * 100 / 5 + 5) + '%',
                          height: (100 / 5 - 10) + '%',
                          axisLabel: {
                              interval: 2
                          }
                      }],
                series: [{
                          singleAxisIndex: 1,
                          coordinateSystem: 'singleAxis',
                          type: 'scatter',
                          data: [2565,2434,2274,72,98],
                          // symbolSize: function (dataItem) {
                          //     return dataItem[1] * 4;
                          // }
                      },{
                          singleAxisIndex: 2,
                          coordinateSystem: 'singleAxis',
                          type: 'scatter',
                          data: [1775, 1762, 1660, 80, 98],
                          // symbolSize: function (dataItem) {
                          //     return dataItem[1] * 4;
                          // }
                      },{
                          singleAxisIndex: 3,
                          coordinateSystem: 'singleAxis',
                          type: 'scatter',
                          data: [1314, 1300, 1255, 77, 97],
                          // symbolSize: function (dataItem) {
                          //     return dataItem[1] * 4;
                          // }
                      },{
                          singleAxisIndex: 4,
                          coordinateSystem: 'singleAxis',
                          type: 'scatter',
                          data: [2123, 2097, 2017, 82, 98],
                          // symbolSize: function (dataItem) {
                          //     return dataItem[1] * 4;
                          // }
                      }]
              }
          }
        }
    }
</script>
