const state = {
  userInfo: {},
  userList: []
}

const mutations = {
  SET_USERINFO (state, info) {
    state.userInfo = Object.assign({}, info)
  },
  SAVE_USERLIST (state, userList) {
    state.userList = userList
  }
}

const actions = {
  setUserInfo ({ commit }, info) {
    commit('SET_USERINFO', info)
  },
  saveUserList ({ commit }, userList) {
    commit('SAVE_USERLIST', userList)
  }
}

export default {
  state,
  mutations,
  actions
}
