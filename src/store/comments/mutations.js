import * as types from "./mutationTypes";

export default {
  [types.ADD_COMMENT](state, comment) {
    state.comment = comment;
  },
};
