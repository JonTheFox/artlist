import * as types from "./mutationTypes";

const addComments = ({ commit }, comments) => {
  commit(types.ADD_COMMENTS, comments);
};
const addComment = ({ commit }, newComment) => {
  commit(types.ADD_COMMENT, newComment);
};

export default {
  addComments,
  addComment,
};
