<template>
  <el-container>
    <el-header><span style="color: #409EFF;font-size: 40px;font-weight: block">雪亮工程－石家庄</span></el-header>
    <el-container>
      <el-aside><gauge :items="dailyWarning"/></el-aside>
      <el-main>Main</el-main>
      <el-aside>Aside</el-aside>
    </el-container>
  </el-container>

  <!--
  <div class="page_body">
    <div class="page_left" style="background:none;">
        <gauge :items="dailyWarning"/>
        <line-bar :items="dailyWarning"/>
    </div>
    <div class="page_center" style="background:none;">
        <div style="width: 100%;height: 100%">
          aaa
        </div>  
    </div>
    <div class="page_right" style="background:none;">
      <bar-pie :items="dailyWarning"></bar-pie>
    </div>
  </div>
-->
</template>

<script>
  import gauge from './baseCharts/gaugeChart.vue'
  import lineBar from './baseCharts/lineBarChart.vue'
  import barRadar from './baseCharts/barRadarChart.vue'
  import barPie from './baseCharts/barPiesChart.vue'

export default {
  components:{
    gauge,
    lineBar,
    barRadar,
    barPie
  },
  mounted:function () {
    this.loadData()
  },
  methods:{
    loadData:function () {
      this.initDailyWarning()
    },
    initDailyWarning:function () {
      this.dailyWarning
    },
  },
  name: 'ChartsDemos',
  data () {
    return {
      dailyWarning: {
              "name": "日报警量",
              "value": 12
          }
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="scoped">
  .el-header, .el-footer {
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    text-align: center;
    line-height: 471px;
  }
  
  .el-main {
    text-align: center;
    line-height: 160px;
  } 
  
  body > .el-container {
    width:100%; height:100%;
    margin-bottom: 40px;
  }

  .page_left, .page_right {
    width:471px;
    float:left;
    background:#02071b;
  }
  .page_center {
    width:960px;
    float:left;
    background:#02071b;
  }
  .page_body {
    /*background:url(../assets/bg.jpg) no-repeat ;*/
    background-size:100% 100%;
    width:1920px;
  }
  .page_body:after {
    content:"";display:block;clear:both;
  }
