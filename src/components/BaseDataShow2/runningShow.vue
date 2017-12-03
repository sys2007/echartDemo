<template>
  <div class="box_1">
    <div class="box_1_top">
      <div class="box_1_top_l"></div>
      <div class="box_1_top_m width1">
        <div class="box_1_tit">运行数据</div>
      </div>
      <div class="box_1_top_r"></div>
    </div>
    <div class="box_1_left">
      <div class="box_1_right height1">
        <div class="box_1_nr">
          <radars/>
          <tables/>
      </div>
    </div>

    </div>
    <div class="box_1_bottom width1"></div>

  </div>


</template>

<script>
    import radars from '../baseCharts/radar.vue'
    import tables from './tablesShow.vue'
    
    export default{
      components:{
        radars,
        tables
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
    height:830px;
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

