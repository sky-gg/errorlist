import Vue from 'vue'
import Router from 'vue-router'
import OMG from '@/view/fatherandsonplayboll.vue'
import RNG from '@/view/elementshopcartanimate.vue'
import WE from '@/view/vuex.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/fn'
    },
    {
      path: '/index',
      name: 'index',
      component: OMG
    },
    {
      path: '/fn',
      name: 'fn',
      component: RNG
    }, 
    {
      path: '/vuex',
      name: 'vuex',
      component: WE
    }
  ]
})
