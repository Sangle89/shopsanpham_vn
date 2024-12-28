import { productImage } from "@/utils/function";
import { TPost } from "../../../@types/common";
import Image from "next/image";
export default function PostItem(props: TPost) {
  return (
    <div className="flex flex-row sm:block hover-img">
      <a href={`/blog/${props.slug}`}>
        <Image
          width={300}
          height={200}
          src={productImage(props.image)}
          alt={props.title}
          className="object-contain transition duration-150 ease-linear transform group-hover:scale-105 p-2"
        />
      </a>
      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
        <h3 className="text-lg font-bold leading-tight mb-2">
          <a href={`/blog/${props.slug}`}>{props.title}</a>
        </h3>
        <p className="hidden md:block text-gray-600 leading-tight mb-1">
          {props.short_content}
        </p>
      </div>
    </div>
  );
}
