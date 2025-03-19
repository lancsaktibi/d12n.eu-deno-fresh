// Post: the post structure
// the post content is received as page prop

import { Post } from "../utils/posts.ts";

// postcard definition
export function PostCard(props: { post: Post }) {
    const { post } = props;
    return (
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{post.title}</h5>
          <p class="card-text">{post.snippet}</p>
          <a href={`/pol-bildung/${post.slug}`} class="btn btn-primary">Mehr...</a>
        </div>
      </div>
    );
  }