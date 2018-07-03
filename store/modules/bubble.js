// initial state
const state = {
  content: ''
};

// getters
const getters = {
  getContent: state => state.content,
};

// mutations
const mutations = {
  changeContent (state, newState) {
    state.content = newState
  }
};

// actions
const actions = {
};

export default {
  state,
  getters,
  actions,
  mutations
}
