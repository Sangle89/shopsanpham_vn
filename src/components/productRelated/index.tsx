import { TProductItem } from "../../../@types/common";
import ProductItem from "../product/ProductItem";

export default function ProductRelated({
  products,
}: {
  products: TProductItem[] | null;
}) {
  return (
    <div className="pt-10 lg:pt-20 lg:pb-10">
      <h3 className="leading-7 text-lg lg:text-xl mb-3 font-semibold  hover:text-gray-600">
        Sản phẩm liên quan
      </h3>
      <div className="flex">
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
            {(products || []).map((item) => (
              <ProductItem {...item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
