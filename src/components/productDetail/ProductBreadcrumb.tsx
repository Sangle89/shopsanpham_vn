import Link from "next/link";
import { Fragment } from "react";
import { CgChevronRight } from "react-icons/cg";

export default function ProductBreadcrumb({ data }) {
  return (
    <ol className="flex items-center w-full overflow-hidden font-serif">
      <li className="text-sm pr-1 transition duration-200 ease-in cursor-pointer hover:text-emerald-500 font-semibold">
        <Link href="/">Trang chủ</Link>
      </li>
      <li className="text-sm mt-[1px]"></li>
      {(data || []).map((item, index) => (
        <Fragment key={index}>
          <li className="">
            <CgChevronRight />
          </li>
          <li className="text-sm pl-1 transition duration-200 ease-in cursor-pointer hover:text-emerald-500 ">
            <a href="">
              <button type="button">{item.display_name}</button>
            </a>
          </li>
        </Fragment>
      ))}
    </ol>
  );
}
