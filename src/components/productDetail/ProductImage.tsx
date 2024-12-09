import { productImage } from "@/utils/function";
import Image from "next/image";
export default function ProductImage({ image }: { image: string }) {
  return (
    <div className="flex-shrink-0 xl:pr-10 lg:block w-full mx-auto md:w-6/12 lg:w-5/12 xl:w-4/12">
      <Image
        src={`${productImage(image)}`}
        alt="product"
        width={400}
        height={400}
      />
    </div>
  );
}
