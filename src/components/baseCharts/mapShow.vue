<template>
    <div class="box_map">
      <div :style="{width:chartWidth+'px',height:chartHeight+'px'}" >
        <IEcharts :option="chartOption"></IEcharts>
      </div>
    </div>
</template>
<script>

  import IEcharts from 'vue-echarts-v3/src/lite.js'
  import 'echarts/lib/chart/map'
  import hebei from 'echarts/map/json/province/hebei.json';

  IEcharts.registerMap('河北',hebei);
  var geoCoordMap = {
    '邯郸':[114.47,36.6],
    '邢台':[114.48,37.05],
    '石家庄':[114.48,38.03],
    '保定':[115.48,38.85],
    '张家口':[114.87,40.82],
    '廊坊':[116.7,39.53],
    '衡水':[115.72,37.72],
    '沧州':[116.83,38.33],
    '秦皇岛':[119.57,39.95],
    '唐山':[118.02,39.63],
    '承德':[117.93,40.97]
  };
  export default {
      components: {
        IEcharts
      },
      props:{
          chartWidth:{
              default:900
          },
          chartHeight:{
              default:400
          }
      },
      data(){
        return{
          chartOption: {
//            backgroundColor: '#404a59',
            geo: {
              map: '河北',
              aspectScale:1.3,
              layoutCenter:['50%','50%'],
              layoutSize:400,
              label: {
                emphasis: {
                  show: false
                }
              },
              itemStyle: {
                normal: {
                  areaColor: '#02071b',
                  borderColor: '#1ac2ff'
                },
                emphasis: {
                  areaColor: '#2a333d'
                }
              }
            },
            series: [
              {
                type: 'lines',
                effect: {
                  show: true,
                  period: 6,
                  color: '#47BFFF',
                  symbolSize: 10,
//                  loop:false
                },

                lineStyle: {
                  normal: {
                    color: '#fff',
                    width: 1,
                    curveness: 0.2,
                  }
                },
                data: []
              },
              {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                rippleEffect: {
                  brushType: 'stroke'
                },
                label: {
                  normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                  }
                },
                itemStyle: {
                  normal: {
                    color: function (params) {
                        if(params.value[2]>0&&params.value[2]<=20) {
                            return '#3ea8ff'
                        } else if(params.value[2]>20&&params.value[2]<=40) {
                          return '#3eff33'
                        }else if(params.value[2]>40&&params.value[2]<=60) {
                          return '#ffca74'
                        }else if(params.value[2]>60) {
                          return '#ff565b'
                      }
                    }
                  }
                },
                data:[]
              }
            ]
          }
        }
      },
      mounted(){
        this.loadData();
      },
      methods:{
        loadData:function () {
          let data = [
              {
                  "name": "邯郸",
                  "value": 55
              },
              {
                  "name": "邢台",
                  "value": 50
              },
              {
                  "name": "石家庄",
                  "value": 80
              },
              {
                  "name": "保定",
                  "value": 10
              },
              {
                  "name": "张家口",
                  "value": 46
              },
              {
                  "name": "廊坊",
                  "value": 55
              },
              {
                  "name": "衡水",
                  "value": 33
              },
              {
                  "name": "沧州",
                  "value": 47
              },
              {
                  "name": "秦皇岛",
                  "value": 38
              },
              {
                  "name": "唐山",
                  "value": 38
              },
              {
                  "name": "承德",
                  "value": 38
              }
          ]
          this.initLineData(data);
          this.initEffectScatterData(data);
           
        },
        initLineData:function (data) {
          let res = [];
          var toCoord = geoCoordMap['石家庄'];
          for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            if(dataItem.name==='石家庄'){
              continue;
            }
            var fromCoord = geoCoordMap[dataItem.name];
            if (fromCoord && toCoord) {
              res.push({
                fromName: dataItem.name,
                toName: '石家庄',
                coords: [fromCoord,toCoord]
              });
            }
          }
          this.chartOption.series[0].data=res;
        },

        initEffectScatterData:function (data) {
          let res = data.map(function (dataItem) {
            return {
              name: dataItem.name,
              value: geoCoordMap[dataItem.name].concat([dataItem.value])
            }
          });
          this.chartOption.series[1].data=res;
        }
     }
  }
</script>
<style scoped="scoped">
  .box_map {
    width:950px;
    margin-left:10px;
    /*margin-top:10px;*/
    height:380px;
    text-align:center;
    /*padding-top:10px;*/
  }
</style>
