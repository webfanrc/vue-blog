import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    requestLoading: 0,
  },
  mutations: {
    Set_Loading (state, boolean) {
      boolean ? ++state.requestLoading : --state.requestLoading;
      // console.log(state.requestLoading);
    }
  },
  actions: {
    SetLoading(context, boolean) {
      context.commit('Set_Loading', boolean);
    },
  }
});
