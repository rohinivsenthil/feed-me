import Vue from 'vue'
import Vuex from 'vuex'
let Parser = require("rss-parser");
let parser = new Parser();

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    feed: []
  },
  mutations: {
    addToFeed(state, items) {
      state.feed = [...items, ...state.feed]
    }
  },
  actions: {
    async getRSS({ commit }, link) {
      const response = await parser.parseURL(link);
      commit("addToFeed", response.items);
    }
  },
  modules: {
  }
})
