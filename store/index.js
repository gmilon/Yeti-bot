import Vuex from 'vuex'
import yeti from './modules/yeti'
import chatBar from './modules/chatbar'


const createStore = () => {
  return new Vuex.Store({
    modules: {
      yeti,
      chatBar
    },
    strict: true
  })
}

export default createStore
