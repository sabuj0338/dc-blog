import { getPostById } from "@/services/api.service";
import Image from "next/image";

type Props = {
  params: Promise<{ id: number }>;
};

export default async function Page({ params }: Props) {
  const id = (await params).id;
  const post = await getPostById(id);

  // Check if the post exists
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
      <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
        <div className="flex items-center">
          <Image
            src="/avatar.png"
            className="rounded-full h-6 w-6"
            alt="avatar"
            loading="lazy"
            width={24}
            height={24}
          />
          <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
            {"Sabuj Islam / Jul 8, 2022"}
          </p>
        </div>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
          2 min
          {` • `}
          23k views
        </p>
      </div>
      <div className="w-full mt-4 prose dark:prose-dark dark:text-gray-100 max-w-none break-words text-justify">
        <p>{post?.body}</p>
        <slot />
      </div>
    </article>
  );
}
