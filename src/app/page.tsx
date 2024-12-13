/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import FeaturedCategoryItem from "@/components/featuredCategory/FeaturedCategoryItem";
import ProductItem from "@/components/product/ProductItem";
import { API_URL } from "@/configs/constant";
import Image from "next/image";
import { Fragment } from "react";
import { TCategoryItem, TProductItem, TSeo } from "../../@types/common";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const res = await fetch(API_URL + "/home/seo");
  const product = await res.json();

  return {
    title: product.metaData.title,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

async function fetchData(): Promise<{
  products: TProductItem[];
  categories: TCategoryItem[];
  seo: TSeo;
}> {
  try {
    const res = await fetch(API_URL + "/home");
    const data = await res.json();
    return data;
  } catch (err) {
    return {
      products: [],
      categories: [],
      seo: {
        meta_title: "",
        meta_keywords: "",
        meta_description: "",
        og_image: "",
        top_content: "",
        bottom_content: "",
      },
    };
  }
}

export default async function Home() {
  const { products, categories, seo } = await fetchData();

  return (
    <Fragment>
      <div className="bg-gray-50">
        <div className="min-h-screen">
          <div className="bg-gray-100 lg:py-12 py-8">
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
              <div className="mb-10 flex justify-center">
                <div className="text-center w-full lg:w-2/5">
                  <h2 className="text-xl lg:text-2xl mb-2  font-semibold">
                    Danh mục sản phẩm
                  </h2>
                </div>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
                {(categories || []).map((item) => (
                  <FeaturedCategoryItem key={item.id} {...item} />
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-gray-50 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10">
            <div className="mb-10 flex justify-center">
              <div className="text-center w-full lg:w-2/5">
                <h2 className="text-xl lg:text-2xl mb-2  font-semibold">
                  Sản phẩm nổi bật
                </h2>
              </div>
            </div>
            <div className="flex">
              <div className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                  {(products || []).map((item: TProductItem) => (
                    <Fragment key={item.id}>
                      <ProductItem {...item} />
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-10 mb-4 mt-4">
        <div dangerouslySetInnerHTML={{ __html: seo?.bottom_content }} />
      </div>
    </Fragment>
  );
}
