// initial state
const state = {
  body: 'normal' //TODO: try to export global vars with right way (using plugins, mixins, simple export ??)
};

// getters
const getters = {
  body: state => state.body
};

// mutations
const mutations = {
  changeBody (state, newState) {
    state.body = newState
  }
};

// actions
const actions = {
  changeBody({commit, state}, newState) {
    commit('changeBody', newState)
  },
};

export default {
  state,
  getters,
  actions,
  mutations
}
