import ProductBreadcrumb from "@/components/productDetail/ProductBreadcrumb";
import ProductImage from "@/components/productDetail/ProductImage";
import { API_URL } from "@/configs/constant";
import { extractProductSlug, formatMoney } from "@/utils/function";
import { TProductItem, TShop } from "../../../../@types/common";
import { Fragment } from "react";
import StarRatings from "react-star-ratings";

import SocialSharing from "@/components/SocialSharing";
import ShopInfo from "@/components/shopInfo";
import ProductRelated from "@/components/productRelated";
import ProductContent from "@/components/productDetail/ProductContent";
import IButton from "@/components/UI/Button";
import ProductRating from "@/components/productDetail/ProductRating";
import { Metadata } from "next";
import ProductModel from "@/components/productDetail/ProductModel";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = extractProductSlug((await params).slug);
  const res = await fetch(API_URL + "/product/seo/" + id);
  const product = await res.json();

  return {
    title: product.metaData.title,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

async function fetchData(slug: string): Promise<{
  product: TProductItem | null;
  shop: TShop | null;
  breadcrumbs: any;
  product_related: TProductItem[] | null;
}> {
  try {
    const id = extractProductSlug(slug);
    const res = await fetch(API_URL + "/product/detail/" + id);
    const data = await res.json();
    return data;
  } catch (err) {
    return {
      product: null,
      breadcrumbs: [],
      shop: null,
      product_related: null,
    };
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { product, shop, breadcrumbs, product_related } = await fetchData(
    (
      await params
    ).slug
  );

  if (!product?.id) {
    return false;
  }

  return (
    <div className="bg-gray-50">
      <div className="px-0 py-10 lg:py-10">
        <div className="mx-auto px-3 lg:px-10 max-w-screen-2xl">
          <div className="flex items-center pb-4">
            <ProductBreadcrumb data={breadcrumbs} />
          </div>
          <div className="w-full rounded-lg p-3 lg:p-12 bg-white mb-4">
            <div className="flex flex-col xl:flex-row">
              <ProductImage image={product.image} />
              <div className="w-full">
                <div className="flex flex-col">
                  <div className="mob-w-full">
                    <div className="mb-3">
                      <h1 className="leading-7 text-lg md:text-xl lg:text-2xl mb-1 font-semibold  text-gray-800">
                        {product.title}
                      </h1>
                    </div>
                    <ProductRating product={product} />
                    <div className=" product-price font-bold mb-4 bg-gray-200 p-3">
                      <span className="inline-block text-2xl">
                        {formatMoney(product.price)}
                      </span>
                      {product.price < product.price_before_discount ? (
                        <del className="text-lg font-normal text-gray-400 ml-1">
                          {formatMoney(product.price_before_discount)}
                        </del>
                      ) : null}
                      {product.raw_discount ? (
                        <span className="ml-2 text-dark text-sm bg-orange-500 text-white py-1 px-2 rounded font-medium">
                          -{product.raw_discount} %
                        </span>
                      ) : null}
                    </div>
                    <div className="flex flex-row mb-4 text-sm">
                      <div className="w-[20%] mr-2">Chính sách trả hàng</div>
                      <div className="w-[50%] flex flex-row items-center">
                        <img src="/img/return-icon.svg" />
                        <span className="mr-3">Trả hàng 15 ngày</span>
                        <span className="text-gray-500">Trả hàng miễn phí</span>
                      </div>
                    </div>
                    <div className="flex mb-4 text-sm">
                      <div className="mr-2 w-[20%]">Vận chuyển</div>
                      <div className="w-[50%]">
                        <div className="flex gap-2 mb-3">
                          <img src="/img/ship-icon.svg" />
                          <span>Xử lý đơn hàng bởi Shopee</span>
                        </div>
                        <div className="flex gap-2">
                          <img src="/img/free-ship.png" width="30" />
                          <span>Miễn phí vận chuyển</span>
                        </div>
                      </div>
                    </div>
                    <ProductModel models={product.models} />
                    <div className="flex items-center mt-4 mb-4">
                      <div className="flex items-center justify-between space-s-3 sm:space-s-4 w-full">
                        <IButton label="Mua ngay" />
                      </div>
                    </div>
                    <hr />
                    <SocialSharing />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {shop !== null ? <ShopInfo shop={shop} /> : null}
          <ProductContent description={product.description} />
          <ProductRelated products={product_related} />
        </div>
      </div>
    </div>
  );
}
