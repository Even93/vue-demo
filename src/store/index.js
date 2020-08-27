import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import getters from './getters'
import home from './modules/home'
import demand from './modules/demand'
import testPage from './modules/testPage'
import testCase from './modules/testCase'
import bugList from './modules/bugList'
import developBranch from './modules/developBranch'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const router = new Vuex.Store({
  modules: {
    app,
    home,
    demand,
    testPage,
    testCase,
    bugList,
    developBranch
  },
  getters,
  plugins: [persistedState()] // vuex内存持久化 ---localstorage
})

export default router
