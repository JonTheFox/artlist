import * as types from "./mutationTypes";

const addComment = ({ commit, state, getters }, comment) => {
  const allComments = getters["comments"];
  const updatedComments = [comment, ...allComments];
  commit(types.SET_COMMENTS, updatedComments);
};

export default {
  addComment,
};
