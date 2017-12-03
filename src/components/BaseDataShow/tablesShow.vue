<template>
    <el-table     
      :data="tableData"
      style="width: 100%;background-color:transparent !important;">
      <el-table-column        
        prop="id"
        label="工号">
      </el-table-column>
      <el-table-column
        prop="xiaqu"
        label="辖区">
      </el-table-column>
      <el-table-column
        prop="shangbao"
        label="上报量">
      </el-table-column>
      <el-table-column
        prop="youxiao"
        label="有效率">
      </el-table-column>
    </el-table>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            id: '00147',
            xiaqu: '长安区',
            shangbao: '102',
            youxiao: '99%'
          }, {
            id: '00221',
            xiaqu: '长安区',
            shangbao: '98',
            youxiao: '99%'
          }, {
            id: '00542',
            xiaqu: '裕华区',
            shangbao: '92',
            youxiao: '97%'
          }, {
            id: '00027',
            xiaqu: '裕华区',
            shangbao: '91',
            youxiao: '97%'
          }, {
            id: '01058',
            xiaqu: '长安区',
            shangbao: '88',
            youxiao: '97%'
          }, {
            id: '01224',
            xiaqu: '新华区',
            shangbao: '85',
            youxiao: '94%'
          }, {
            id: '01004',
            xiaqu: '长安区',
            shangbao: '83',
            youxiao: '92%'
          }]
        }
      }
    }
  </script>
  <style>
    .el-table tr,
    .el-table th,
    .cell {
      color: #fff;
      background-color: transparent !important;
    }
    .el-table th {}
    .el-table tr {}
      
  </style>