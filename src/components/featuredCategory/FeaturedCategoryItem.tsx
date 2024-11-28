/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { TCategoryItem } from "../../../@types/common";
import { CgChevronRight } from "react-icons/cg";
import Link from "next/link";
import { categoryUrl } from "@/utils/function";

const FeaturedCategoryItem = ({ display_name, cat_id_fe }: TCategoryItem) => {
  return (
    <li className="group">
      <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
        <div className="flex items-center">
          <Link href={categoryUrl(display_name, cat_id_fe)}>
            <Image
              width={100}
              height={100}
              src="https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b@resize_w320_nl.webp"
              alt="x"
            />
          </Link>
          <div className="pl-4">
            <h3 className="text-sm text-gray-600  font-medium leading-tight line-clamp-1  group-hover">
              <Link href={categoryUrl(display_name, cat_id_fe)}>
                {display_name}
              </Link>
            </h3>
            <ul className="pt-1 mt-1">
              <li className="pt-1">
                <a className="flex items-center  text-xs text-gray-400 cursor-pointer">
                  <span className="text-xs text-gray-400 ">
                    <CgChevronRight />
                  </span>
                  Fish
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
};
export default FeaturedCategoryItem;
