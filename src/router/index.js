import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/Login'
import Index from '@/index'
import NavBar from '@/components/NavBar'
import Coupon from '@/coupon'
import Center from '@/center'
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
		},
		{
			path: '/coupon',
			name:'Coupon',
			component:Coupon
		},
		{
			path: '/center',
			name:'Center',
			component:Center			
		},
		{path:'*',redirect:'/'}
  ]
})
