<template>
  <div class="page_body">
    <div class="page_left" style="background:none;">
        <total-show></total-show>
        <areaPeople/>
    </div>
    <div class="page_center" style="background:none;">        
        <scatter/>
        <composite/>
    </div>
    <div class="page_right" style="background:none;">
        <running/>
    </div>
  </div>
</template>

<script>
    import totalShow from './BaseDataShow2/TotalShow.vue' 
    import eventTop from './BaseDataShow/EventTop10.vue'
    import areaPeople from './BaseDataShow2/areaPeople.vue'
    import composite from './BaseDataShow/composite.vue'
    import scatter from './baseCharts/columnPieChart.vue'
    import running from './BaseDataShow2/runningShow.vue'

    export default{
    mounted:function(){
      
    },
      components:{
        totalShow,
        eventTop,
        areaPeople,
        composite,
        scatter,
        running
      }
    }
</script>
<style scoped="scoped">
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
    background-size:100% 100%;
    width:1920px;
  }
  .page_body:after {
    content:"";display:block;clear:both;
  }
</style>
