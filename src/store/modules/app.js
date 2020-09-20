import { userRegister } from '@/api/api'
const state = {
  timeout: false, // 请求超时状态
  _axiosPromiseCancel: [], // axios cancelToken队列
  routesArr:[]
}

const mutations = {
  SET_TIMEOUT: (state, isTimeout) => {
    state.timeout = isTimeout
  },
  SET_AXIOSPROMISECENCEL: (state, c) => {
    if (typeof c === 'function') {
      state._axiosPromiseCancel.push(c)
    } else if (typeof c === 'object') {
      state._axiosPromiseCancel = c
    }
  },
  add_routesArr(state,data){}
}

const actions = {
  registerUser ({ commit }, data) {
    return new Promise(resolve => {
      const params = {
        dc: 'auth',
        ou: 'People',
        uid: data.uid
      }
      userRegister(params).then(res => {
        if (res.code == 1) {
          resolve(res)
        }
      })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
