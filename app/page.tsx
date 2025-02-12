import BlogPostWithSearch from "@/components/BlogPostWithSearch";

async function getPosts(): Promise<Post[]> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5"
  );
  return res.json();
}

export default async function Home() {
  const posts = await getPosts();
  return <BlogPostWithSearch sortedPosts={posts} />;
}
