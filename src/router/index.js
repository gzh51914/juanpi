import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Classify from '../views/Classify.vue'
import Cart from '../views/Cart.vue'
import Personal from '../views/Personal.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Brand from '../views/Brand.vue'
import Detail from '../views/Detail.vue'
import Search from '../views/Search.vue'
import Cate from '../views/Cate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  //页面组件懒加载，导致在随意路由下刷新页面，this.$route 都是空的问题。 解决（bottomNav.vue）组件的进入状态
  {
    path: '/cart',
    name: 'cart',
    // component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue'), 
    component: Cart,
    meta: {
      hiddenBottomNav: true,
    }

  },
  {
    path: '/login',
    name: 'login',
    // component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue'), 
    component: Login,
    meta: {
      hiddenBottomNav: true,
    }
  },
  {
    path: '/register',
    name: 'register',
    // component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue'), 
    component: Register,
    meta: {
      hiddenBottomNav: true,
    }
  },
  {
    path: '/personal',
    name: 'personal',
    // component: () => import(/* webpackChunkName: "about" */ '../views/Personal.vue'),
    component: Personal,
    meta: {
      hiddenBottomNav: true,
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail,
    meta: {
      hiddenBottomNav: true,
    }
  },
  {
    path: '/cate',
    name: 'cate',
    component: Cate,
    meta: {
      hiddenBottomNav: true,
    }
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
    meta: {
      hiddenBottomNav: true,
    }
  },
  {
    path: '/brand',
    name: 'brand',
    component: Brand,
    meta: {
      hiddenBottomNav: true,
    }
  },
  {
    path: '/classify',
    name: 'classify',
    // component: () => import(/* webpackChunkName: "about" */ '../views/Classify.vue'),
    component: Classify
  },
  {
    path: '*',
    redirect: "/home"
  },
]

const router = new VueRouter({
  mode: 'history', //hash
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   console.log(to)
//   next();

// });



export default router
