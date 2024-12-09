import { productImage } from "@/utils/function";
import Image from "next/image";
import { TShop } from "../../../@types/common";

export default function ShopInfo({ shop }: { shop: TShop }) {
  return (
    <div className="p-3 mb-4 bg-white w-full">
      <div className="flex items-center">
        <div className="">
          <Image
            src={productImage(shop?.account?.portrait)}
            width={100}
            height={100}
            alt=""
          />
        </div>
        <div className="flex flex-col ml-4">
          <div className="font-bold">{shop?.name}</div>
          <div className="text-sm text-gray-500 mt-0">Online 9 phút trước</div>
          <a href="py-2 px-3">Xem shop</a>
        </div>
        <div className="ml-4 flex gap-4">
          <div>
            <div className="flex">
              <div className="text-gray-500">Đánh giá</div>
              <div className="ml-auto">10</div>
            </div>
            <div className="flex">
              <div className="text-gray-500">Sản phẩm</div>
              <div className="ml-auto">10</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
