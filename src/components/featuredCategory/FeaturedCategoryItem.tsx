/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { TCategoryItem } from "../../../@types/common";

const FeaturedCategoryItem = ({ display_name }: TCategoryItem) => {
  return (
    <li className="group">
      <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
        <div className="flex items-center">
          <div>
            <Image
              width={100}
              height={100}
              src="https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b@resize_w320_nl.webp"
              alt="x"
            />
          </div>
          <div className="pl-4">
            <h3 className="text-sm text-gray-600  font-medium leading-tight line-clamp-1  group-hover">
              {display_name}
            </h3>
            <ul className="pt-1 mt-1">
              <li className="pt-1">
                <a className="flex items-center  text-xs text-gray-400 cursor-pointer">
                  <span className="text-xs text-gray-400 ">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        strokeLinecap="square"
                        strokeMiterlimit={10}
                        strokeWidth={48}
                        d="M184 112l144 144-144 144"
                      />
                    </svg>
                  </span>
                  Fish
                </a>
              </li>
              <li className="pt-1">
                <a className="flex items-center text-xs text-gray-400 cursor-pointer">
                  <span className="text-xs text-gray-400 ">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        strokeLinecap="square"
                        strokeMiterlimit={10}
                        strokeWidth={48}
                        d="M184 112l144 144-144 144"
                      />
                    </svg>
                  </span>
                  Meat
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
