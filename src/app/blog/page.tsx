import { API_URL } from "@/configs/constant";
import { TBreadcrumb, TPost } from "../../../@types/common";
import PostItem from "@/components/PostItem";
import { Metadata } from "next";
type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const res = await fetch(API_URL + "/blog");
  const { meta_data } = await res.json();

  return {
    title: meta_data.title,
    keywords: meta_data.keywords,
    openGraph: {
      title: meta_data.title,
      description: meta_data.description,
    },
  };
}

async function fetchData(): Promise<{
  posts: { data: TPost[]; total: number };
  breadcrumbs: TBreadcrumb[];
}> {
  const res = await fetch(API_URL + "/blog");
  const data = await res.json();
  return data;
}

export default async function BlogPage() {
  const {
    posts: { data, total },
  } = await fetchData();
  return (
    <div className="mx-auto px-3 lg:px-10 max-w-screen-2xl">
      <div className="w-full py-3">
        <h2 className="text-gray-800 text-2xl font-bold">
          <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
          Blog
        </h2>
      </div>
      <div className="flex flex-row flex-wrap -mx-3">
        {data.map((post) => (
          <div
            key={post.id}
            className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100"
          >
            <PostItem {...post} />
          </div>
        ))}
      </div>
    </div>
  );
}
