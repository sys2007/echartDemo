import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ChartsDemos from '@/components/ChartsDemos'
import dataShowDemo from '@/components/baseDataShow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dataShowDemo',
      component: dataShowDemo
    },
    {
      path: '/chartDemo',
      name: 'ChartsDemos',
      component: ChartsDemos
    }
  ]
})
