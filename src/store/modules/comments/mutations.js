import * as types from "./mutationTypes";

export default {
  [types.SET_COMMENTS](state, comments) {
    state.comments = comments;
  },
};
