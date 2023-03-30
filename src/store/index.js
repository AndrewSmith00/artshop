import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import paintings from './modules/paintings'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    paintings
  },
  plugins: [createPersistedState()],
})
