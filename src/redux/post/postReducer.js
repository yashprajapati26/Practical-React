import { DISLIKE_POST, LIKE_POST } from "./postType";

const initialState = {
  numOfLikes: 0,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_POST:
      return {
        ...state,
        numOfLikes: state.numOfLikes + 1,
      };
    case DISLIKE_POST:
      return {
        ...state,
        numOfLikes: state.numOfLikes - 1,
      };
  }
};
