import api from "../../services/api";

const state = {
  report: {},
  code: ""
}

const mutations = {
  setCode(state, val) {
    state.code = val;
  },
  setReport(state, val) {
    state.report = val;
  }
}

const getters = {
  code: state => state.code,
  report: state => state.report
}

const actions = {

  async getByCode({ commit }, code) {
    let result = await api.get(`reportCard/${code}`);
    
    commit("setReport", result.data);
  },

  async save({ commit }, { reportCard }) {
    let result = await api.post("reportCard", reportCard);

    commit("setCode", result.data.code);
  },
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}