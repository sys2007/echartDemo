<template>
  <div class="box_1">
    <div class="box_1_top">
      <div class="box_1_top_l"></div>
      <div class="box_1_top_m width1">
        <div class="box_1_tit">人、房指标统计</div>
      </div>
      <div class="box_1_top_r"></div>
    </div>
    <div class="box_1_left">
      <div class="box_1_right height1">
        <div class="box_1_nr">
          <ul class="jytj_01">
            <li>总人口(万)
              <div>1,015.12</div>
            </li>
            <li>户籍人口(万)
              <div>930.99</div>
            </li>
            <li>流动人口(万)
              <div>61.72</div>
            </li>
            <li>留守人口(万)
              <div>16.24</div>
            </li>
            <li>境外人口(万)
              <div>6.17</div>
            </li>
          </ul>
          <ul class="jytj_01 jytj_02">
            <li>有证（房产证）楼栋（万）
              <div>38.0111</div>
            </li>
              <li>房屋数（万户）
              <div>289.3782</div>
            </li> 
          </ul>
          <div class="gaugeGroup">
            <ul>
                           
            </ul>
          </div>
      </div>
    </div>

    </div>
    <div class="box_1_bottom width1"></div>

  </div>


</template>

<script>
    import customGauge from '../baseCharts/gaugeChart.vue'
    
    export default{
      components:{
        customGauge
      },
      mounted:function () {
        this.loadData()
      },
      methods:{
        loadData:function () {
          
        }
      },
      data:function () {
        return {
          dailyWarning: {
              "name": "有证（房产证）楼栋",
              "value": 38.0111
          },
          monthlyWarning: {
              "name": "房屋数",
              "value": 289.3782
          },
          fireRescueStatisticsData:{
              jcjs:0, //接出警数
              cdxfll:0,  //出动消防力量
              swrs:0, //伤亡人数
              wjcc:0, //挽救财产
              lsrw:0, //临时任务
              qjbkry:0,  //抢救被困人员
              ssrs:0  //疏散人数
          }
        }
      }
    }
</script>
<style scoped="scoped">
  .gaugeGroup li {
    display: inline-block;
  }
  .box_1 {
    margin-left:10px;
    position:relative;
  }
  .box_1_top {
     height:40px;
     margin-top:10px;
   }
  .box_1_top_l {
    width:40px;
    height:40px;
    background:url(../../assets/box/top_l.png) no-repeat;
    float:left;
  }
  .box_1_top_m {
    height:40px;
    width:auto;
    background:url(../../assets/box/top_m.png) repeat-x;
    float:left;
  }
  .width1 {
    width:381px;
  }
  .box_1_tit {
    width:100%;
    heith:36px;
    text-align:center;
    line-height:36px;
    color:#fff;
    font-size:18px;
    font-weight:bold;
    background:url(../../assets/box/tit_l.png) no-repeat top center;
  }
  .box_1_top_r {
    width:40px;
    height:40px;
    background:url(../../assets/box/top_r.png) no-repeat;
    float:right;
  }
  .box_1_left {
    width:100%;
    background:url(../../assets/box/left.png) no-repeat left bottom;
    clear:both;
  }
  .box_1_right {
    width:100%;
    background:url(../../assets/box/right.png) no-repeat right bottom;
    height:100px;
    position:relative;
  }
  .height1 {
    height:160px;
  }
  .box_1_nr {
    padding: 5px 10px;
    position: absolute;
    color: #fff;
    text-align:center;
  }
  .jytj_01 {
    width:100%;
    margin:0;
    padding:0;
  }
  .jytj_01 li {
    height:56px;
    background:url(../../assets/jytj_bg.png) no-repeat;
    background-size:100% 56px;
    font-size:13px;
    color:#fff;
    float:left;
    padding:3px 8px;
    line-height:25px;
    text-align:center;
  }
  .jytj_01 li span {
    color:#00b4ff;
  }
  .jytj_01 li div {
    font-size:14px;
    color:#00b4ff;
    font-weight:bold;
    line-height:20px;
    text-align:center;
  }
  .jytj_02 {
    width:80%;
    margin:auto;
  }
  .box_1_bottom {
    height:40px;
    background:url(../../assets/box/bottom.png) repeat-x;
    position:absolute;
    bottom:0;
    left:40px;
  }
  .width1 {
    width:381px;
  }
</style>

