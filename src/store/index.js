import Vue from "vue";
import Vuex from "vuex";
import content from "./content";

const vm = new Vue();
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    content: content(vm),
  },
});
