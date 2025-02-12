async function getPost(id: number): Promise<Post | undefined> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

type Props = {
  params: Promise<{ id: number }>;
};

export default async function Page({ params }: Props) {
  const id = (await params).id;
  const post = await getPost(id);

  if (!post?.id) {
    return (
      <article>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Post not found
        </h1>
      </article>
    );
  }

  return (
    <article>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        {post?.title}
      </h1>
      <div className="w-full mt-4 prose dark:prose-dark dark:text-gray-100 max-w-none break-words text-justify">
        <p>{post?.body}</p>
        <slot />
      </div>
    </article>
  );
}
