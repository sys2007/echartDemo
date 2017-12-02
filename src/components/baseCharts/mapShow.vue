<template>
    <div class="box_map">
      <div :style="{width:chartWidth+'px',height:chartHeight+'px'}" >
        <IEcharts :option="chartOption"></IEcharts>
      </div>
    </div>
</template>
<script>

  import IEcharts from 'vue-echarts-v3/src/lite.js'
  import guizhou from 'echarts/map/json/province/guizhou.json';

  IEcharts.registerMap('贵州',guizhou);
  var geoCoordMap = {
    '贵阳': [106.713478,26.578343],
    '遵义': [106.937265,27.706626],
    '铜仁': [109.191555,27.718346],
    '毕节': [105.28501,27.301693],
    '六盘水': [104.846743,26.584643],
    '安顺': [105.932188,26.245544],
    '黔西南布依族苗族自治州': [104.897971,25.08812],
    '黔南布依族苗族自治州': [107.517156,26.258219],
    '黔东南苗族侗族自治州': [107.977488,26.583352]
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
              default:416
          }
      },
      data(){
        return{
//          baseDataMapUrl:common.DEFAULT_BASEURL+'/getjson/getMapData',
          baseDataMapUrl:common.DEFAULT_BASEURL_LUBIN+'/getBaseInfo/getMapData ',
          chartOption: {
//            backgroundColor: '#404a59',
            geo: {
              map: '贵州',
              aspectScale:1.3,
              layoutCenter:['50%','50%'],
              layoutSize:650,
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
            Vue.http.get(this.baseDataMapUrl).then(response=>{
                var data = response.data;
                this.initLineData(data);
                this.initEffectScatterData(data);
            })
        },
        initLineData:function (data) {
          let res = [];
          var toCoord = geoCoordMap['贵阳'];
          for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            if(dataItem.name==='贵阳'){
              continue;
            }
            var fromCoord = geoCoordMap[dataItem.name];
            if (fromCoord && toCoord) {
              res.push({
                fromName: dataItem.name,
                toName: '贵阳',
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
    margin-top:10px;
    height:421px;
    text-align:center;
    padding-top:10px;
  }
</style>
