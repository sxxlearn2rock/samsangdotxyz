export default {
  getArticles({ commit }, queryBody) {
    commit('GET_ARTICLES', queryBody);
  },
  setActiveNav({ commit }, nav) {
    commit('SET_ACTIVE_NAV', nav)
  }
}