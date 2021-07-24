import { PostService } from "./post.service";

export const postService = new PostService(
  "https://versatileapi.herokuapp.com/api"
);
