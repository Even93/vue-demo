const state = {
  pageRecord: {
    currentPage: 1,
    pageSize: 20
  },
  rowInfo: {}, // 当前选中的信息
  ifshowBar: false // 是否展示编辑条

}

const mutations = {
  keep_record (state, pageRecord) {
    state.pageRecord = Object.assign({}, pageRecord)
  },
  save_row (state, rowInfo) {
    state.rowInfo = Object.assign({}, rowInfo)
  },
  set_bar (state, bar) {
    state.ifshowBar = Boolean(bar)
  }
}

const actions = {
  keepRecord ({ commit }, pageRecord) {
    commit('keep_record', pageRecord)
  },
  saveRow ({ commit }, rowInfo) {
    commit('save_row', rowInfo)
  },
  setBar ({ commit }, bar) {
    commit('set_bar', bar)
  }
}

export default {
  state,
  mutations,
  actions
}
