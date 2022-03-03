import state from "@/store/modules/comments/state.js";
import mutations from "@/store/modules/comments/mutations.js";
import actions from "@/store/modules/comments/actions.js";
import getters from "@/store/modules/comments/getters.js";

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state,
};
