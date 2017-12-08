<template>
  <div class="page_body">
    <div class="page_left" style="background:none;">
        <totalShow/>
    </div>
    <div class="page_center" style="background:none;">        
        
    </div>
    <div class="page_right" style="background:none;">
        
    </div>
  </div>
</template>

<script>
    import totalShow from './DemoShow/TotalShow.vue' 
    

    export default{
    mounted:function(){
      
    },
      components:{
        totalShow
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
