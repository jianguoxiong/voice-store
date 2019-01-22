import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/Login'
import Index from '@/index'
Vue.use(Router)

export default new Router({
  routes: [    
		{
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
    },
		{
      path: '/Login',
      name: 'Login',
      component: Login,
		}
  ]
})