import { LIKE_POST } from "./postType";
import { DISLIKE_POST } from "./postType";
export const postLike = () => {
  return {
    type: LIKE_POST,
  };
};

export const postDisLike = () => {
  return {
    type: DISLIKE_POST,
  };
};
