import { createStore } from "vuex";
import modules from "@/store/index.js";

const store = createStore({
  modules,
  mutations: {
    addComment(state, { comment }) {
      debugger;
      state.comments.push(comment);
    },
  },
});

export default store;
