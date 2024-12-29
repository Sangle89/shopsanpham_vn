import { API_URL } from "@/configs/constant";
import { TPost } from "../../../../@types/common";

async function fetchData(slug: string): Promise<{
  post: TPost;
}> {
  const res = await fetch(API_URL + "/blog/" + slug);
  const data = await res.json();
  return data;
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { post } = await fetchData((await params).slug);
  return (
    <section className="py-5">
      <div className="lg:w-[900px] m-auto">
        <h1 className="text-gray-800 text-2xl font-bold mb-3">{post.title}</h1>
        <div className="table-of-content">
          <div dangerouslySetInnerHTML={{ __html: post.tag_heading }} />
        </div>
        <div className="blog-content">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </section>
  );
}
