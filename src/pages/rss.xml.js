import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    title: "Philosophy",
    description: "",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      // TODO: Clean up the path parsing below
      link: `/philosophy/blog/posts/${post.filePath.split("/").slice(-1)[0].slice(0,-4)}/`,
    })),
  });
}
