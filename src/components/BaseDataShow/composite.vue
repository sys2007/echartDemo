<template>
  <div class="box_1">
    <div class="box_1_top">
      <div class="box_1_top_l"></div>
      <div class="box_1_top_m width2">
        <div class="box_1_tit2">全省基本情况</div>
      </div>
      <div class="box_1_top_r"></div>
    </div>
    <div class="box_1_left">
      <div class="box_1_right height1">
        <div class="box_1_nr">
          <div class="gaugeGroup">
            <ul>
              <li>
                <lineBar/>
              </li>
              <li>
                <lines/>
              </li>              
            </ul>
          </div>          
        </div>
      </div>
    </div>
    <div class="box_1_bottom width2"></div>
  </div>
</template>

<script>
    import lineBar from '../baseCharts/lineBarChart.vue'
    import lines from '../baseCharts/linesChart.vue'

    export default{
      mounted:function () {
        
      },
      components: {
        lineBar,
        lines
      },
      methods:{
        
      },
      data:function () {
        return {
            
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
  .width2 {
    width:870px;
  }
  .box_1_top_r {
    width:40px;
    height:40px;
    background:url(../../assets/box/top_r.png) no-repeat;
    float:right;
  }
  .box_1_tit2 {
    width:100%;
    heith:36px;
    text-align:center;
    line-height:36px;
    color:#fff;
    font-size:18px;
    font-weight:bold;
    background:url(../../assets/box/tit_m.png) no-repeat top center;
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
    height:234px;
  }
  .box_1_nr {
    padding: 5px 10px;
    position: absolute;
    color: #fff;
    text-align:center;
  }
  .center_bottom_box {f
    padding:2px 10px 3px 20px;
  }
  .center_bottom_box ul {
    padding:0;
    margin:0;
    color:#00b4ff;
    display: inline;
  }
  .center_bottom_box ul li {
    list-style:none;
    float:left;
    width:108px;
    margin:0 0 0 10px;
    text-align:center;
    background:url(../../assets/center_bg_03.png);
    border:1px solid #0068b7;
    padding:0;
  }
  .center_bottom_box ul li span {
    display:block;
  }
  .center_bottom_tit {
    float:left;
    color:#FFF;
    width:20px;
    font-size:14px;
    font-weight:bold;
    text-align:center;
    background:none;
    border:1px solid #0068b7;
    padding:2px 5px;
    margin:-1px 0 0 0;
    line-height:16px;
  }
  .span_data4 {
    font-size:20px;
    font-weight:bold;
    color:#00b4ff;
    padding:5px 0 0 0;
    line-height:28px;
  }
  .span_tit2 {
    font-size:14px;
    color:#00b4ff;
    line-height:16px;
    height:32px;
    display: table-cell;
    vertical-align: middle;
  }
  .clear{
    clear:both;
    font-size:1px;
    height:1px;
  }
  .box_1_bottom {
    height:40px;
    background:url(../../assets/box/bottom.png) repeat-x;
    position:absolute;
    bottom:0;
    left:40px;
  }
</style>
