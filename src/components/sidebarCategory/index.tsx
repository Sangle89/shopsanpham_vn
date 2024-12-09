import { CgChevronRight } from "react-icons/cg";
import { TCategoryItem } from "../../../@types/common";
import { categoryUrl } from "@/utils/function";

export default function SidebarCategory({
  categories,
}: {
  categories: TCategoryItem[];
}) {
  return (
    <div className="bg-white p-4 sm:p-5 lg:p-8 rounded-md sticky top-32">
      {categories
        .filter((item) => item.parent_id === 0)
        .map((item) => (
          <span
            key={item.id}
            className="p-2 my-2 flex font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600"
          >
            <CgChevronRight />
            <a
              className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-emerald-600"
              href={categoryUrl(item.display_name, item.cat_id_fe)}
            >
              {item.display_name}
            </a>
          </span>
        ))}
    </div>
  );
}
