export default function ProductImage() {
  return (
    <div className="flex-shrink-0 xl:pr-10 lg:block w-full mx-auto md:w-6/12 lg:w-5/12 xl:w-4/12">
      <img
        alt="product"
        fetchPriority="high"
        width={650}
        height={650}
        decoding="async"
        data-nimg={1}
        srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1682058933%2Fproduct%2FCMTHP-COR12-deep-ash-920x920.webp&w=750&q=75 1x, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1682058933%2Fproduct%2FCMTHP-COR12-deep-ash-920x920.webp&w=1920&q=75 2x"
        src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1682058933%2Fproduct%2FCMTHP-COR12-deep-ash-920x920.webp&w=1920&q=75"
        style={{ color: "transparent" }}
      />
      <div className="flex flex-row flex-wrap mt-4 border-t"></div>
    </div>
  );
}
