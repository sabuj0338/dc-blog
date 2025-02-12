/**
 * Fetches a list of posts from the JSONPlaceholder API.
 * The list is limited to 10 items and can be filtered by a query string.
 * @param {string} [query=""] - The query string to filter the posts by.
 * @returns {Promise<Post[]>} - A promise that resolves to an array of posts.
 */
export async function getPosts(query: string = ""): Promise<Post[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10&q=${query}`
  );
  return res.json();
}

/**
 * Fetches a single post from the JSONPlaceholder API by its ID.
 * @param {number} id - The ID of the post to fetch.
 * @returns {Promise<Post | undefined>} - A promise that resolves to the post
 *   or undefined if the post does not exist.
 */
export async function getPostById(id: number): Promise<Post | undefined> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}
