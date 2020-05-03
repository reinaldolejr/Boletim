import Vue from "vue";
import Vuex from "vuex";
import reportCard from "./modules/reportCard";


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    reportCard,
  }
});
