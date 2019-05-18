import Vue from 'vue';
import Vuex from 'vuex';

import { usersState } from './users';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    usersState
  }
});
