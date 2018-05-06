import * as body from '../yeti-states'

// initial state
const state = {
  body: body.states.NORMAL
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
  changeBody({commit, state}) {
    commit('changeBody')
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
