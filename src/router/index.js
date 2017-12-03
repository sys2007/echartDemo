import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ChartsDemos from '@/components/ChartsDemos'
import dataShowDemo2 from '@/components/baseDataShow2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dataShowDemo',
      component: dataShowDemo2
    },
    {
      path: '/chartDemo',
      name: 'ChartsDemos',
      component: ChartsDemos
    }
  ]
})
