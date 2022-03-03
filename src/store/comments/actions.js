import * as types from "./mutationTypes";

const addComment = ({ commit }, comment) => {
  commit(types.ADD_COMMENT, comment);
};

export default {
  addComment,
};
