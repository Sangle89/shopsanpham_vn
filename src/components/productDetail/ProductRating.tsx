"use client";

import StarRatings from "react-star-ratings";
import { TProductItem } from "../../../@types/common";

export default function ProductRating({ product }: { product: TProductItem }) {
  return (
    <div className="mb-3">
      <span className="underline mr-6">
        <span className="mr-1">{product.rating_star.toFixed(1)}</span>

        <StarRatings
          rating={product.rating_star}
          starRatedColor="#b08317"
          numberOfStars={5}
          starDimension="15px"
          starSpacing="1px"
        />
      </span>
      <span className=" mr-6">
        <span className="underline mr-2">{product.total_rating_count}</span>
        <span className="text-sm text-gray-400">Đánh giá</span>
      </span>
      <span className="">
        <span className="underline mr-2">{product.global_sold}</span>
        <span className="text-sm text-gray-400">Đã bán</span>
      </span>
    </div>
  );
}
