//路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Seach from '../pages/Seach/Seach.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    //所有路由
    routes:[
       {
           path:'/msite',
           name:'msite',
           component:MSite,
           meta:{
               showFooter: true
           }
       },
       {
        path:'/seach',
        name:'seach',
        component:Seach,
        meta:{
            showFooter: true
           }
       },
       {
           path:'/order',
           name:'order',
           component:Order,
           meta:{
            showFooter: true
          }
       },
       {
           path:'/profile',
           name:'profile',
           component:Profile,
           meta:{
            showFooter: true
          }
       },
       {   //默认路由  一打开就是这个页面
           path:'/',
           redirect:'/msite'
       },
       {
        path:'/login',
        name:'login',
        component:Login
       }
    ]
})
