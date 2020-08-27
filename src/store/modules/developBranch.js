const state = {
  appSystemList: []
}

const mutations = {
  SAVE_APPSYSTEMLIST (state, appSystemList) {
    state.appSystemList = appSystemList
  }
}
const actions = {
  saveAppSystemList ({ commit }, appSystemList) {
    commit('SAVE_APPSYSTEMLIST', appSystemList)
  }
}

export default {
  state,
  mutations,
  actions
}
