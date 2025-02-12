export async function getPosts(query: string = ""): Promise<Post[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10&q=${query}`
  );
  return res.json();
}

export async function getPostById(id: number): Promise<Post | undefined> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}
