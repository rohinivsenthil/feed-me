import Vue from 'vue'
import Vuex from 'vuex'
let Parser = require("rss-parser");
let parser = new Parser();

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    feed: [],
    subscribed: []

  },
  mutations: {
    addToFeed(state, items) {
      state.feed = [...items, ...state.feed].sort((item1, item2) => Date.parse(item2.isoDate) - Date.parse(item1.isoDate));

    },
    addToSubscribed(state, site) {
      state.subscribed = [site, ...state.subscribed]
      console.log(state.subscribed);
    }
  },
  actions: {
    async getRSS({ commit }, link) {
      const response = await parser.parseURL(link);
      commit("addToFeed", response.items);
    },

  },
  modules: {
  }
})
