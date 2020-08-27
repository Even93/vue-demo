const state = {
  pageRecord: {
    currentPage: 1,
    pageSize: 20
  }
};

const mutations = {
  keep_record(state, pageRecord) {
    state.pageRecord = Object.assign({}, pageRecord)
  }
};

const actions = {
  bugListKeepRecord({commit}, pageRecord) {
    commit('keep_record', pageRecord)
  }
};

export default {
  state,
  mutations,
  actions
}
