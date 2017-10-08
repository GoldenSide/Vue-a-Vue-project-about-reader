import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
      // name: 'Hello',
      // component: Hello
    },
    {
       path:'/home',
       name:'home',
       component:resolve=>require(
         ['../components/home.vue'],resolve)

    }
  ]
})
