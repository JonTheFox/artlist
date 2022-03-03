import * as types from "./mutationTypes";

export default {
  [types.ADD_COMMENTS](state, newComments) {
    state.comments.push(...newComments);
  },
  [types.ADD_COMMENT](state, newComment) {
    const existingComments = state.comments;
    const updatdedCommments = [newComment, ...existingComments];
    state.comments = updatdedCommments;
  },
};
