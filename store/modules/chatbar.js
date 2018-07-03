// initial state
const state = {
  cursorPosition: 0
};

// getters
const getters = {
  cursorPosition: state => state.cursorPosition
};

// mutations
const mutations = {
  setCursorPosition (state, newState) {
    state.cursorPosition = newState
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
