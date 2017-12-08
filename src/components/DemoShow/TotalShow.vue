<template>
  <boxContiner>
    <span slot="title">人、房指标统计</span>
    <div slot="container">
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
      </div>
  </boxContiner>
</template>

<script>
    import boxContiner from '../BaseContainers/BoxContainer.vue'
    
    export default{
      components:{
        boxContiner
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
  
</style>

