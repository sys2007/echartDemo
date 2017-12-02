import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ChartsDemos from '@/components/ChartsDemos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChartsDemos',
      component: ChartsDemos
    }
  ]
})
