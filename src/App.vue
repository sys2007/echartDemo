<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @charset "utf-8";
  html{ width:100%; height:100%;}

  body{
    padding:0;
    margin:0;
    font-family:"微软雅黑";
    background:#02071b; 
    background:url(./assets/bg.jpg) no-repeat bottom center; 
  }
  input{font-family:"微软雅黑";}
  ul,li{padding:0; margin:0; list-style:none;}
</style>