import Vue from 'vue'
import Router from 'vue-router'

import indexList from '@/components/indexList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexList',
      component: indexList
    }
  ]
})
