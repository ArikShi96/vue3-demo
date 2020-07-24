import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    count: 0
  },
  mutations: {
    ADD(state) {
      state.count++
    }
  },
  actions: {
    add({ commit }) {
      commit('ADD')
    }
  },
  modules: {
  }
})