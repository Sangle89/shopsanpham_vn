import ProductBreadcrumb from "@/components/productDetail/ProductBreadcrumb";
import { API_URL } from "@/configs/constant";
import { extractCategorySlug } from "@/utils/function";
import { TCategoryItem, TProductItem } from "../../../../@types/common";
import ProductItem from "@/components/product/ProductItem";
import SidebarCategory from "@/components/sidebarCategory";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat_id = extractCategorySlug((await params).slug);
  const res = await fetch(API_URL + "/product/search/seo?cat_id=" + cat_id);
  const product = await res.json();

  return {
    title: product.metaData.title,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

async function fetchData(slug: string): Promise<{
  data: { data: TProductItem[]; total: number };
  breadcrumbs: any[];
}> {
  const cat_id = extractCategorySlug(slug);
  const res = await fetch(API_URL + "/product/search?cat_id=" + cat_id);
  const data = await res.json();
  return data;
}

async function fetchCategory(): Promise<{ data: TCategoryItem[] }> {
  const res = await fetch(API_URL + "/category");
  const data = await res.json();
  return data;
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const {
    data: { data, total },
    breadcrumbs,
  } = await fetchData((await params).slug);
  const { data: categories } = await fetchCategory();
  return (
    <div className="bg-gray-50">
      <div className="px-0 py-10 lg:py-10">
        <div className="mx-auto px-3 lg:px-10 max-w-screen-2xl">
          <div className="flex items-center pb-4">
            <ProductBreadcrumb data={breadcrumbs} />
          </div>
          <div className="w-full">
            <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row">
              <div className="w-full xl:w-3/12 lg:w-3/12 md:w-3/12">
                <SidebarCategory categories={categories} />
              </div>
              <div className="w-9/12 xl:pl-6 md:pl-6 md:w-9/12 mob-w-full">
                <div className="flex justify-between mb-3 bg-orange-100 border border-gray-100 rounded p-3">
                  <h6 className="text-sm font-serif">
                    Có <span className="font-bold">{total}</span> sản phẩm
                  </h6>
                  <span className="text-sm font-serif">
                    <select className="py-0 text-sm font-serif font-medium block w-full rounded border-0 bg-white pr-10 cursor-pointer focus:ring-0">
                      <option className="px-3" value="All">
                        Sort By Price
                      </option>
                      <option className="px-3" value="Low">
                        Low to High
                      </option>
                      <option className="px-3" value="High">
                        High to Low
                      </option>
                    </select>
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-2 md:gap-3 lg:gap-3">
                  {(data || []).map((item: TProductItem) => (
                    <ProductItem key={item.item_id} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
