// Post: the Post structure 
// getPost: the post content reader
// Handlers: performs a task once the route is called 
// PageProps: an object to store and transfer data across pages
// CSS, render: markdown formatting from gfm
import { Post, getPost } from "../utils/posts.ts";
import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import { CSS, render } from "@deno/gfm"

// activate handler to call getPost() that reads the post content from the disk
export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    const post = await getPost(ctx.params.slug);
    if (post === null) return ctx.renderNotFound();
    return ctx.render(post);
  },
};

// render the index page and use post content from PageProps
// dangerouslySetInnerHTML={{ __html: post.content }}
export default function PostPage(props: PageProps<Post>) {
  const post = props.data;
  const markdown = render(post.content);
  return (
    <main class="max-w-screen-md px-4 pt-16 mx-auto">
      <h1 class="text-5xl font-bold">{post.title}</h1>
      <time class="text-gray-500">
        {new Date(post.publishedAt).toLocaleDateString("en-us", {
          year: "numeric",
          month: "long",
          day: "numeric"
        })}
      </time>
      <div class="mt-8 markdown-body" 
        dangerouslySetInnerHTML={{ __html: post.content }}
        />
    </main>
  )
}