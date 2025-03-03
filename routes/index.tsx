// Post: the Post structure 
// getPosts: the shortlist reader
// Handlers: performs a task once the route is called 
// PageProps: an object to store and transfer data across pages
// PostCard: the short version of a post
import { Post, getPosts } from "../utils/posts.ts";
import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import { PostCard } from "../components/PostCard.tsx";


// activate handler to call getPosts() that reads post titles from the disk
export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};

// render the index page and use post titles from PageProps
export default function IndexPage(props: PageProps<Post[]>) {
  const posts = props.data;
  return (
    <main class="max-w-screen-md px-4 pt-16 mx-auto">
      <h1 class="text-5xl font-bold">D12N.EU</h1>
      <div class="mt-8">
        {posts.map((post) => <PostCard post={post} />)}
      </div>
    </main>
  );
}

