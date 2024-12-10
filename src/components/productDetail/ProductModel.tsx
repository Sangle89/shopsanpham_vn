import { TProductModel } from "../../../@types/common";

export default function ProductModel({ models }: { models: TProductModel[] }) {
  return (
    <div className="flex mb-4 text-sm">
      <div className="w-[20%]">Màu sắc</div>
      <div className="flex gap-3 w-[50%]">
        {models.map((item) => (
          <div className="px-2 text-sm py-1 border border-gray-300">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
