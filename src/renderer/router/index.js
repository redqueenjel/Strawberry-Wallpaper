import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const mainContent=()=>import('../page/mian-content.vue');
const setter=()=>import('../page/setter.vue')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainContent',
      component: mainContent
    },
    {
      path: '/set',
      component:setter
    }
  ]
})
