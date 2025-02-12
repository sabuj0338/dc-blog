"use client";

import { useDebounce } from "@/hooks/useDebounce";
import { getPosts } from "@/services/api.service";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogPostWithSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false); // Loading state

  // Debounce the query
  const debouncedQuery = useDebounce(query, 500); // 500ms debounce delay

  /**
   * Fetches the blog post results for the given search term.
   * @param {string} [searchTerm=""] - The search term to filter the posts by.
   * @returns {Promise<void>} - A promise that resolves when the data is fetched.
   */
  const fetchResults = async (searchTerm: string = "") => {
    setLoading(true); // Start loading
    try {
      const data = await getPosts(searchTerm);
      setResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Fetch all posts on initial load
  useEffect(() => {
    fetchResults();
  }, []);

  // Fetch posts when the debounced query changes
  useEffect(() => {
    fetchResults(debouncedQuery);
  }, [debouncedQuery]);

  return (
    <>
      <div className="relative w-full mb-4">
        <input
          aria-label="Search articles"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles"
          className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
        />
        <svg
          className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
        All Posts
      </h3>
      {loading && (
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Loading posts...
        </p>
      )}
      {!results.length && (
        <p className="mb-4 text-gray-600 dark:text-gray-400">No posts found.</p>
      )}
      {results.length > 0 &&
        results.map((post) => (
          <Link href={`/blog/${post.id}`} className="w-full" key={post.id}>
            <div className="w-full mb-8 group">
              <div className="flex flex-col justify-between md:flex-row">
                <h4 className="w-full mb-2 text-lg font-medium text-gray-700 md:text-xl dark:text-gray-300 group:hover:text-gray-900 dark:group-hover:text-gray-100">
                  {post.title}
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-justify">
                {post.body}{" "}
                <span className="text-blue-600 hover:text-blue-700">
                  see more..
                </span>
              </p>
            </div>
            <hr className="my-8 border-gray-200 dark:border-gray-800" />
          </Link>
        ))}
    </>
  );
}
