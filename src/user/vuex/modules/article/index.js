import actions from './actions.js';
import mutations from './mutations.js';

const state = {
  articles: [],
  curArticle: {},
  activeNav: ''
};

const getters = {
  articles: state => state.articles,
  curArticle: state => state.curArticle,
  activeNav: state => state.activeNav
};

export default {
  // 将组建的状态封装在命名空间内
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}