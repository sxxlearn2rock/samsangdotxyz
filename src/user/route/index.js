import Vue from 'vue'
import Router from 'vue-router'

import home from '../page/home/index.vue'
import article from '../page/article/index.vue'
import articleList from '../page/article/list.vue'
import articleContent from '../page/article/content.vue'
import articlePublish from '../page/article/publish.vue'
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
    component: article,
    children: [
    // 子路由前面不要加/
      {
        path: ':id(\\d+)',
        name: articleContent,
        component: articleContent
      },
      {
        path: 'list',
        name: 'articleList',
        component: articleList
      },
      {
        path: 'publish',
        name: 'articlePublish',
        component: articlePublish
      }
    ]
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