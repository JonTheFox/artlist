import { createStore } from "vuex";
import modules from "@/store/index.js";
import mutations from "@/store/index.js";

const store = createStore({
  modules,
  mutations,
});

export default store;
