import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    empId: '0',
    password:'qazplm',
    goalCalorie: 500,
    intakeCalorie: 0,
  },
  mutations: {
    updateUser(state, user) {
      state.empId = user.empId;
      state.password = user.password;
    },
    setCalorie(state, user) {
      state.intakeCalorie = user.intakeCalorie;
    }
  },
  actions: {
    auth(context, user) {
      context.commit('updateUser', user);
    },
    setcalo(context, user) {
      context.commit('setCalorie', user)
    },
  },
  getters: {
    userInfo: state => state.empId? state.empId: '',
  },
  plugins: [createPersistedState({ storage: window.sessionStorage })],
  modules: {
  }
})
