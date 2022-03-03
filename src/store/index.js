import { createStore } from "vuex";
import commentsModule from "@/store/modules/comments/index.js";

const store = createStore({
  modules: { comments: commentsModule },
  strict: true,
});

export default store;
