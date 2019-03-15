import Vue from 'vue'
//1.导入路由组件vue-router
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import one from '@/components/one'

//2.调用vue-router
Vue.use(Router)
//3.创建vue-router实例
const router=new Router({
  routes: [
     {
          path: '/',
          component: one
     },
     {
          path: '/HelloWorld',
          component: HelloWorld
     },
     {
          path: '/one',
          component: one
     },
  ]
});
export default router;
