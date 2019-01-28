import Vue from 'vue'
import App from './app.vue'
import store from './vuex/store.js'
import router from './route/index.js'

import * as CONST from '../common/js/constant.js'


window.$CONST = CONST


new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
