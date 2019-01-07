import Vue from 'vue'
import Router from 'vue-router'

import home from '../page/home/index.vue'
import article from '../page/article/index.vue'
import testPage from '../page/testPage/index.vue'
import lab from '../page/lab/index.vue'

import store from '../vuex/store.js'

Vue.use(Router)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/article',
    name: 'article',
    component: article
  },
  {
    path: '/testPage',
    name: 'testPage',
    component: testPage
  },
  {
    path: '/lab',
    name: 'lab',
    component: lab
  },
]

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  // 设置当前active的首级菜单 
  const paths = to.path.split('/')
  if(paths[1]) {
    store.dispatch('setActiveNavMenu', paths[1])
  }
  next()
})

export default router