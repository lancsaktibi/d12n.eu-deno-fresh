// Post: the Post structure 
// getPost: the post content reader
// Handlers: performs a task once the route is called 
// PageProps: an object to store and transfer data across pages
// CSS, render: markdown formatting from gfm
// Head: html head section for rendering
import { Post, getPost } from "../utils/posts.ts";
import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import { CSS, render } from "@deno/gfm"
import { Head } from "$fresh/runtime.ts";

// activate handler to call getPost() that reads the post content from the disk
export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    const post = await getPost("/start/willkommen");
    if (post === null) return ctx.renderNotFound();
    return ctx.render(post);
  },
};

// render the index page and use post content from PageProps
export default function PostPage(props: PageProps<Post>) {
  const post = props.data;
  const markdown = render(post.content);
  
  return (
    <main class="max-w-screen-md px-4 pt-16 mx-auto">
      <Head>
        <style dangerouslySetInnerHTML={{ __html: CSS}} />
      </Head>
      <h4 class="font-bold">{post.title}</h4>
      <div class="mt-8 markdown-body" 
        dangerouslySetInnerHTML={{ __html: markdown }}
        />
    </main>
  )
}

