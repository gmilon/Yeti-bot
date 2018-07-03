import Vuex from 'vuex'
import yeti from './modules/yeti'
import chatBar from './modules/chatbar'
import Bubble from './modules/bubble'


const createStore = () => {
  return new Vuex.Store({
    modules: {
      yeti,
      chatBar,
      Bubble,
    },
    strict: true
  })
};

export default createStore
