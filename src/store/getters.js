const getters = {
  timeout: state => state.app.timeout,
  _axiosPromiseCancel: state => state.app._axiosPromiseCancel
}

export default getters
