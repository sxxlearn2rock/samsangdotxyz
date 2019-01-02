import Vue from 'vue'
import App from './app.vue'
import store from './vuex/store.js'
import router from './route/index.js'

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});