import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { formatMoney, productUrl } from "@/utils/function";
import { TProductItem } from "../../../@types/common";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const ProductItem = ({
  title,
  price,
  image,
  stock,
  rating_star,
  raw_discount,
  item_id,
  shop_id,
}: TProductItem) => {
  return (
    <Link href={productUrl(title, item_id, shop_id)}>
      <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
        <div className="w-full flex justify-between">
          <span className="bg-gray-100 absolute z-10 text-green-500 rounded-full text-xs px-2 py-0 font-medium">
            Kho :
            <span className="text-orange-700 pl-1 font-bold">{stock} </span>
          </span>
        </div>
        <div className="relative flex justify-center cursor-pointer pt-2 w-full">
          <div className="relative w-full h-full p-2">
            <Image
              width={300}
              height={200}
              src={`https://down-vn.img.susercontent.com/file/${image}.webp`}
              alt={title}
              className="object-contain transition duration-150 ease-linear transform group-hover:scale-105 p-2"
            />
          </div>
        </div>
        <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
          <div className="relative mb-1">
            <span className="text-gray-400 font-medium text-xs d-block mb-1" />
            <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
              <span className="line-clamp-2">{title}</span>
            </h2>
          </div>
          <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
            <div className="flex items-center product-price gap-1">
              <span className="inline-block text-lg text-gray-800">
                {formatMoney(price)}
              </span>
              {raw_discount > 0 ? (
                <span className="text-dark text-xs bg-orange-500 text-white px-1 rounded font-xs">
                  -{raw_discount}%
                </span>
              ) : null}
            </div>
            <div className="flex items-center justify-center text-sm text-yellow-600">
              <CiStar />
              {rating_star.toFixed(1)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProductItem;
