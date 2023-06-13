import { LIKE_POST } from "./postType";

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
  }
};
