import Vue from 'vue'
import App from './app.vue'
import store from './vuex/store.js'
import router from './route/index.js'

import mavonEditor from 'mavon-editor'

import * as CONST from '../common/js/constant.js'

import 'mavon-editor/dist/css/index.css'

window.$CONST = CONST

Vue.use(mavonEditor)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
