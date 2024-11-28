import ProductBreadcrumb from "@/components/productDetail/ProductBreadcrumb";
import ProductImage from "@/components/productDetail/ProductImage";
import { API_URL } from "@/configs/constant";
import { extractProductSlug, formatMoney } from "@/utils/function";
import { TProductItem } from "../../../../@types/common";
import { Fragment } from "react";

async function fetchData(
  slug: string
): Promise<{ data: TProductItem; breadcrumbs: any }> {
  try {
    const item_id = extractProductSlug(slug);
    console.log(item_id);
    const res = await fetch(API_URL + "/product/detail/" + item_id);
    const data = await res.json();
    return data;
  } catch (err) {
    return { data: {} };
  }
}

export default async function ProductPage({ params }) {
  const { data, breadcrumbs } = await fetchData((await params).slug);
  return (
    <div className="bg-gray-50">
      <div className="px-0 py-10 lg:py-10">
        <div className="mx-auto px-3 lg:px-10 max-w-screen-2xl">
          <div className="flex items-center pb-4">
            <ProductBreadcrumb data={breadcrumbs} />
          </div>
          <div className="w-full rounded-lg p-3 lg:p-12 bg-white">
            <div className="flex flex-col xl:flex-row">
              <ProductImage />
              <div className="w-full">
                <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row">
                  <div className=" w-3/5 xl:pr-6 md:pr-6  md:w-2/3 mob-w-full">
                    <div className="mb-6">
                      <h1 className="leading-7 text-lg md:text-xl lg:text-2xl mb-1 font-semibold  text-gray-800">
                        {data.title}
                      </h1>
                      <p className="uppercase  font-medium text-gray-500 text-sm">
                        SKU : <span className="font-bold text-gray-600" />
                      </p>
                      <div className="relative">
                        <span className="bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center px-2 py-0 text-xs font-semibold ">
                          Stock :
                          <span className="text-orange-700 pl-1 font-bold">
                            {data.stock}
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className=" product-price font-bold">
                      <span className="inline-block text-2xl">
                        {formatMoney(data.price)}
                      </span>
                      {data.price < data.price_before_discount ? (
                        <del className="text-lg font-normal text-gray-400 ml-1">
                          {formatMoney(data.price_before_discount)}
                        </del>
                      ) : null}
                      {data.raw_discount ? (
                        <span className="ml-2 text-dark text-sm bg-orange-500 text-white py-1 px-2 rounded font-medium">
                          -{data.raw_discount} %
                        </span>
                      ) : null}
                    </div>
                    <div className="mb-4">
                      <span>
                        <h4 className="text-sm py-1">Color:</h4>
                        <div className="flex flex-row mb-3"></div>
                      </span>
                    </div>
                    <div>
                      <div className="text-sm leading-6 text-gray-500 md:leading-7">
                        A T-shirt (also spelled tee-shirt or tee shirt), or tee
                        for short, is a style of fabric shirt named after the T
                        shape of its body and sleeves. Traditionally, it has
                        short sleeves and a round neckline, known as a crew
                        neck, which l<br />
                        <span className="read-or-hide">More Info</span>
                      </div>
                      <div className="flex items-center mt-4">
                        <div className="flex items-center justify-between space-s-3 sm:space-s-4 w-full">
                          <button className="text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold  text-center justify-center border-0 border-transparent rounded-md focus-visible:outline-none focus:outline-none text-white px-4 ml-4 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white bg-emerald-500 hover:bg-emerald-600 w-full h-12">
                            Mua ngay
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col mt-4">
                        <span className=" font-semibold py-1 text-sm d-block">
                          <span className="text-gray-800">Category:</span>{" "}
                          <a href="/search?category=men&_id=632ab2b64d87ff2494210aa7">
                            <button
                              type="button"
                              className="text-gray-600  font-medium underline ml-2 hover:text-teal-600"
                            >
                              men
                            </button>
                          </a>
                        </span>
                        <div className="flex flex-row">
                          <span className="bg-gray-50 mr-2 border-0 text-gray-600 rounded-full inline-flex items-center justify-center px-3 py-1 text-xs font-semibold  mt-2">
                            premium-shirt
                          </span>
                          <span className="bg-gray-50 mr-2 border-0 text-gray-600 rounded-full inline-flex items-center justify-center px-3 py-1 text-xs font-semibold  mt-2">
                            t-shirt
                          </span>
                          <span className="bg-gray-50 mr-2 border-0 text-gray-600 rounded-full inline-flex items-center justify-center px-3 py-1 text-xs font-semibold  mt-2">
                            new-t-shirt
                          </span>
                        </div>
                      </div>
                      <div className="mt-2">
                        <h3 className="text-base font-semibold mb-1 ">
                          Share your social network
                        </h3>
                        <p className="font-sans text-sm text-gray-500">
                          For get lots of traffic from social network share this
                          product
                        </p>
                        <ul className="flex mt-4">
                          <li className="flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500  mr-2 transition ease-in-out duration-500">
                            <button
                              aria-label="facebook"
                              className="react-share__ShareButton"
                              style={{
                                backgroundColor: "transparent",
                                border: "none",
                                padding: 0,
                                font: "inherit",
                                color: "inherit",
                                cursor: "pointer",
                              }}
                            >
                              <svg viewBox="0 0 64 64" width={32} height={32}>
                                <circle cx={32} cy={32} r={31} fill="#3b5998" />
                                <path
                                  d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
                                  fill="white"
                                />
                              </svg>
                            </button>
                          </li>
                          <li className="flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500  mr-2 transition ease-in-out duration-500">
                            <button
                              quote=""
                              aria-label="twitter"
                              className="react-share__ShareButton"
                              style={{
                                backgroundColor: "transparent",
                                border: "none",
                                padding: 0,
                                font: "inherit",
                                color: "inherit",
                                cursor: "pointer",
                              }}
                            >
                              <svg viewBox="0 0 64 64" width={32} height={32}>
                                <circle cx={32} cy={32} r={31} fill="#00aced" />
                                <path
                                  d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
                                  fill="white"
                                />
                              </svg>
                            </button>
                          </li>
                          <li className="flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500  mr-2 transition ease-in-out duration-500">
                            <button
                              quote=""
                              aria-label="reddit"
                              className="react-share__ShareButton"
                              style={{
                                backgroundColor: "transparent",
                                border: "none",
                                padding: 0,
                                font: "inherit",
                                color: "inherit",
                                cursor: "pointer",
                              }}
                            >
                              <svg viewBox="0 0 64 64" width={32} height={32}>
                                <circle cx={32} cy={32} r={31} fill="#ff4500" />
                                <path
                                  d="m 52.8165,31.942362 c 0,-2.4803 -2.0264,-4.4965 -4.5169,-4.4965 -1.2155,0 -2.3171,0.4862 -3.128,1.2682 -3.077,-2.0247 -7.2403,-3.3133 -11.8507,-3.4782 l 2.5211,-7.9373 6.8272,1.5997 -0.0102,0.0986 c 0,2.0281 1.6575,3.6771 3.6958,3.6771 2.0366,0 3.6924,-1.649 3.6924,-3.6771 0,-2.0281 -1.6575,-3.6788 -3.6924,-3.6788 -1.564,0 -2.8968,0.9758 -3.4357,2.3443 l -7.3593,-1.7255 c -0.3213,-0.0782 -0.6477,0.1071 -0.748,0.4233 L 32,25.212062 c -4.8246,0.0578 -9.1953,1.3566 -12.41,3.4425 -0.8058,-0.7446 -1.8751,-1.2104 -3.0583,-1.2104 -2.4905,0 -4.5152,2.0179 -4.5152,4.4982 0,1.649 0.9061,3.0787 2.2389,3.8607 -0.0884,0.4794 -0.1462,0.9639 -0.1462,1.4569 0,6.6487 8.1736,12.0581 18.2223,12.0581 10.0487,0 18.224,-5.4094 18.224,-12.0581 0,-0.4658 -0.0493,-0.9248 -0.1275,-1.377 1.4144,-0.7599 2.3885,-2.2304 2.3885,-3.9406 z m -29.2808,3.0872 c 0,-1.4756 1.207,-2.6775 2.6894,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 -1.4824,0 -2.6894,-1.2002 -2.6894,-2.6758 z m 15.4037,7.9373 c -1.3549,1.3481 -3.4816,2.0043 -6.5008,2.0043 l -0.0221,-0.0051 -0.0221,0.0051 c -3.0209,0 -5.1476,-0.6562 -6.5008,-2.0043 -0.2465,-0.2448 -0.2465,-0.6443 0,-0.8891 0.2465,-0.2465 0.6477,-0.2465 0.8942,0 1.105,1.0999 2.9393,1.6337 5.6066,1.6337 l 0.0221,0.0051 0.0221,-0.0051 c 2.6673,0 4.5016,-0.5355 5.6066,-1.6354 0.2465,-0.2465 0.6477,-0.2448 0.8942,0 0.2465,0.2465 0.2465,0.6443 0,0.8908 z m -0.3213,-5.2615 c -1.4824,0 -2.6877,-1.2002 -2.6877,-2.6758 0,-1.4756 1.2053,-2.6775 2.6877,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 z"
                                  fill="white"
                                />
                              </svg>
                            </button>
                          </li>
                          <li className="flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500  mr-2 transition ease-in-out duration-500">
                            <button
                              quote=""
                              aria-label="whatsapp"
                              className="react-share__ShareButton"
                              style={{
                                backgroundColor: "transparent",
                                border: "none",
                                padding: 0,
                                font: "inherit",
                                color: "inherit",
                                cursor: "pointer",
                              }}
                            >
                              <svg viewBox="0 0 64 64" width={32} height={32}>
                                <circle cx={32} cy={32} r={31} fill="#25D366" />
                                <path
                                  d="m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"
                                  fill="white"
                                />
                              </svg>
                            </button>
                          </li>
                          <li className="flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500  mr-2 transition ease-in-out duration-500">
                            <button
                              quote=""
                              aria-label="linkedin"
                              className="react-share__ShareButton"
                              style={{
                                backgroundColor: "transparent",
                                border: "none",
                                padding: 0,
                                font: "inherit",
                                color: "inherit",
                                cursor: "pointer",
                              }}
                            >
                              <svg viewBox="0 0 64 64" width={32} height={32}>
                                <circle cx={32} cy={32} r={31} fill="#007fb1" />
                                <path
                                  d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
                                  fill="white"
                                />
                              </svg>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="w-full xl:w-5/12 lg:w-6/12 md:w-5/12">
                    <div className="mt-6 md:mt-0 lg:mt-0 bg-gray-50 border border-gray-100 p-4 lg:p-8 rounded-lg">
                      <ul className="my-0">
                        <li className="flex items-center py-3">
                          <span className="text-xl text-gray-400 items-start mr-4">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect x={1} y={3} width={15} height={13} />
                              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                              <circle cx="5.5" cy="18.5" r="2.5" />
                              <circle cx="18.5" cy="18.5" r="2.5" />
                            </svg>
                          </span>
                          <p className="font-sans leading-5 text-sm text-gray-500">
                            Free shipping applies to all orders over shipping
                            €100
                          </p>
                        </li>
                        <li className="flex items-center py-3">
                          <span className="text-xl text-gray-400 items-start mr-4">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                              <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                          </span>
                          <p className="font-sans leading-5 text-sm text-gray-500">
                            Home Delivery within 1 Hour
                          </p>
                        </li>
                        <li className="flex items-center py-3">
                          <span className="text-xl text-gray-400 items-start mr-4">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <line x1={12} y1={1} x2={12} y2={23} />
                              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                            </svg>
                          </span>
                          <p className="font-sans leading-5 text-sm text-gray-500">
                            Cash on Delivery Available
                          </p>
                        </li>
                        <li className="flex items-center py-3">
                          <span className="text-xl text-gray-400 items-start mr-4">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <polyline points="17 1 21 5 17 9" />
                              <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                              <polyline points="7 23 3 19 7 15" />
                              <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                            </svg>
                          </span>
                          <p className="font-sans leading-5 text-sm text-gray-500">
                            7 Days returns money back guarantee
                          </p>
                        </li>
                        <li className="flex items-center py-3">
                          <span className="text-xl text-gray-400 items-start mr-4">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18" />
                              <path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38" />
                              <line x1={1} y1={1} x2={23} y2={23} />
                            </svg>
                          </span>
                          <p className="font-sans leading-5 text-sm text-gray-500">
                            Warranty not available for this item
                          </p>
                        </li>
                        <li className="flex items-center py-3">
                          <span className="text-xl text-gray-400 items-start mr-4">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx={12} cy={12} r={5} />
                              <line x1={12} y1={1} x2={12} y2={3} />
                              <line x1={12} y1={21} x2={12} y2={23} />
                              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                              <line
                                x1="18.36"
                                y1="18.36"
                                x2="19.78"
                                y2="19.78"
                              />
                              <line x1={1} y1={12} x2={3} y2={12} />
                              <line x1={21} y1={12} x2={23} y2={12} />
                              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                            </svg>
                          </span>
                          <p className="font-sans leading-5 text-sm text-gray-500">
                            Guaranteed 100% organic from natural products.
                          </p>
                        </li>
                        <li className="flex items-center py-3">
                          <span className="text-xl text-gray-400 items-start mr-4">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                              <circle cx={12} cy={10} r={3} />
                            </svg>
                          </span>
                          <p className="font-sans leading-5 text-sm text-gray-500">
                            Delivery from our pick point Boho One, Bridge Street
                            West, Middlesbrough, North Yorkshire, TS2 1AE.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10 lg:pt-20 lg:pb-10">
            <h3 className="leading-7 text-lg lg:text-xl mb-3 font-semibold  hover:text-gray-600">
              Related Products
            </h3>
            <div className="flex">
              <div className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                  <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                    <div className="w-full flex justify-between">
                      <span className="bg-gray-100 absolute z-10 text-green-500 rounded-full text-xs px-2 py-0 font-medium">
                        Stock :
                        <span className="text-orange-700 pl-1 font-bold">
                          431{" "}
                        </span>
                      </span>
                    </div>
                    <div className="relative flex justify-center cursor-pointer pt-2 w-full h-44">
                      <div className="relative w-full h-full p-2">
                        <img
                          alt="product"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain transition duration-150 ease-linear transform group-hover:scale-105 p-2"
                          sizes="100%"
                          srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fy6JNy6b0%2FTropica-Mustard-honey-250g.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fy6JNy6b0%2FTropica-Mustard-honey-250g.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fy6JNy6b0%2FTropica-Mustard-honey-250g.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fy6JNy6b0%2FTropica-Mustard-honey-250g.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fy6JNy6b0%2FTropica-Mustard-honey-250g.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fy6JNy6b0%2FTropica-Mustard-honey-250g.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fy6JNy6b0%2FTropica-Mustard-honey-250g.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fy6JNy6b0%2FTropica-Mustard-honey-250g.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fy6JNy6b0%2FTropica-Mustard-honey-250g.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fy6JNy6b0%2FTropica-Mustard-honey-250g.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fy6JNy6b0%2FTropica-Mustard-honey-250g.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fy6JNy6b0%2FTropica-Mustard-honey-250g.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fy6JNy6b0%2FTropica-Mustard-honey-250g.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fy6JNy6b0%2FTropica-Mustard-honey-250g.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fy6JNy6b0%2FTropica-Mustard-honey-250g.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fy6JNy6b0%2FTropica-Mustard-honey-250g.jpg&w=3840&q=75 3840w"
                          src="https://kachabazar-store-nine.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fy6JNy6b0%2FTropica-Mustard-honey-250g.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            objectFit: "contain",
                            color: "transparent",
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                      <div className="relative mb-1">
                        <span className="text-gray-400 font-medium text-xs d-block mb-1" />
                        <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                          <span className="line-clamp-2">
                            Tropica Mustard honey
                          </span>
                        </h2>
                      </div>
                      <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                        <div className=" product-price font-bold">
                          <span className="inline-block text-lg font-semibold text-gray-800">
                            $284.68
                          </span>
                        </div>
                        <button
                          aria-label="cart"
                          className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                        >
                          {" "}
                          <span className="text-xl">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z" />
                            </svg>
                          </span>{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                    <div className="w-full flex justify-between">
                      <span className="bg-gray-100 absolute z-10 text-green-500 rounded-full text-xs px-2 py-0 font-medium">
                        Stock :
                        <span className="text-orange-700 pl-1 font-bold">
                          178{" "}
                        </span>
                      </span>
                    </div>
                    <div className="relative flex justify-center cursor-pointer pt-2 w-full h-44">
                      <div className="relative w-full h-full p-2">
                        <img
                          alt="product"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain transition duration-150 ease-linear transform group-hover:scale-105 p-2"
                          sizes="100%"
                          srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQtt2stTm%2FSaffola-honey-500ml.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQtt2stTm%2FSaffola-honey-500ml.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQtt2stTm%2FSaffola-honey-500ml.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQtt2stTm%2FSaffola-honey-500ml.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQtt2stTm%2FSaffola-honey-500ml.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQtt2stTm%2FSaffola-honey-500ml.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQtt2stTm%2FSaffola-honey-500ml.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQtt2stTm%2FSaffola-honey-500ml.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQtt2stTm%2FSaffola-honey-500ml.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQtt2stTm%2FSaffola-honey-500ml.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQtt2stTm%2FSaffola-honey-500ml.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQtt2stTm%2FSaffola-honey-500ml.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQtt2stTm%2FSaffola-honey-500ml.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQtt2stTm%2FSaffola-honey-500ml.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQtt2stTm%2FSaffola-honey-500ml.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQtt2stTm%2FSaffola-honey-500ml.jpg&w=3840&q=75 3840w"
                          src="https://kachabazar-store-nine.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQtt2stTm%2FSaffola-honey-500ml.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            objectFit: "contain",
                            color: "transparent",
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                      <div className="relative mb-1">
                        <span className="text-gray-400 font-medium text-xs d-block mb-1" />
                        <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                          <span className="line-clamp-2">Saffola honey</span>
                        </h2>
                      </div>
                      <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                        <div className=" product-price font-bold">
                          <span className="inline-block text-lg font-semibold text-gray-800">
                            $210.86
                          </span>
                        </div>
                        <button
                          aria-label="cart"
                          className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                        >
                          {" "}
                          <span className="text-xl">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z" />
                            </svg>
                          </span>{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                    <div className="w-full flex justify-between">
                      <span className="bg-gray-100 absolute z-10 text-green-500 rounded-full text-xs px-2 py-0 font-medium">
                        Stock :
                        <span className="text-orange-700 pl-1 font-bold">
                          548{" "}
                        </span>
                      </span>
                    </div>
                    <div className="relative flex justify-center cursor-pointer pt-2 w-full h-44">
                      <div className="relative w-full h-full p-2">
                        <img
                          alt="product"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain transition duration-150 ease-linear transform group-hover:scale-105 p-2"
                          sizes="100%"
                          srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FJtwvb5dY%2FShefa-a-Natural-honey-250g.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FJtwvb5dY%2FShefa-a-Natural-honey-250g.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FJtwvb5dY%2FShefa-a-Natural-honey-250g.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FJtwvb5dY%2FShefa-a-Natural-honey-250g.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FJtwvb5dY%2FShefa-a-Natural-honey-250g.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FJtwvb5dY%2FShefa-a-Natural-honey-250g.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FJtwvb5dY%2FShefa-a-Natural-honey-250g.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FJtwvb5dY%2FShefa-a-Natural-honey-250g.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FJtwvb5dY%2FShefa-a-Natural-honey-250g.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FJtwvb5dY%2FShefa-a-Natural-honey-250g.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FJtwvb5dY%2FShefa-a-Natural-honey-250g.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FJtwvb5dY%2FShefa-a-Natural-honey-250g.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FJtwvb5dY%2FShefa-a-Natural-honey-250g.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FJtwvb5dY%2FShefa-a-Natural-honey-250g.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FJtwvb5dY%2FShefa-a-Natural-honey-250g.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2FJtwvb5dY%2FShefa-a-Natural-honey-250g.jpg&w=3840&q=75 3840w"
                          src="https://kachabazar-store-nine.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FJtwvb5dY%2FShefa-a-Natural-honey-250g.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            objectFit: "contain",
                            color: "transparent",
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                      <div className="relative mb-1">
                        <span className="text-gray-400 font-medium text-xs d-block mb-1" />
                        <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                          <span className="line-clamp-2">
                            Shefa Natural honey
                          </span>
                        </h2>
                      </div>
                      <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                        <div className=" product-price font-bold">
                          <span className="inline-block text-lg font-semibold text-gray-800">
                            $92.63
                          </span>
                        </div>
                        <button
                          aria-label="cart"
                          className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                        >
                          {" "}
                          <span className="text-xl">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z" />
                            </svg>
                          </span>{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
                    <div className="w-full flex justify-between">
                      <span className="bg-gray-100 absolute z-10 text-green-500 rounded-full text-xs px-2 py-0 font-medium">
                        Stock :
                        <span className="text-orange-700 pl-1 font-bold">
                          228{" "}
                        </span>
                      </span>
                    </div>
                    <div className="relative flex justify-center cursor-pointer pt-2 w-full h-44">
                      <div className="relative w-full h-full p-2">
                        <img
                          alt="product"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-contain transition duration-150 ease-linear transform group-hover:scale-105 p-2"
                          sizes="100%"
                          srcSet="/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F4dSr3gvg%2FDabur-honey-250g.jpg&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2F4dSr3gvg%2FDabur-honey-250g.jpg&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2F4dSr3gvg%2FDabur-honey-250g.jpg&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2F4dSr3gvg%2FDabur-honey-250g.jpg&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2F4dSr3gvg%2FDabur-honey-250g.jpg&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2F4dSr3gvg%2FDabur-honey-250g.jpg&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2F4dSr3gvg%2FDabur-honey-250g.jpg&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2F4dSr3gvg%2FDabur-honey-250g.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2F4dSr3gvg%2FDabur-honey-250g.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2F4dSr3gvg%2FDabur-honey-250g.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2F4dSr3gvg%2FDabur-honey-250g.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2F4dSr3gvg%2FDabur-honey-250g.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2F4dSr3gvg%2FDabur-honey-250g.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2F4dSr3gvg%2FDabur-honey-250g.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2F4dSr3gvg%2FDabur-honey-250g.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fi.postimg.cc%2F4dSr3gvg%2FDabur-honey-250g.jpg&w=3840&q=75 3840w"
                          src="https://kachabazar-store-nine.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F4dSr3gvg%2FDabur-honey-250g.jpg&w=3840&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            objectFit: "contain",
                            color: "transparent",
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                      <div className="relative mb-1">
                        <span className="text-gray-400 font-medium text-xs d-block mb-1" />
                        <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                          <span className="line-clamp-2">Dabur honey</span>
                        </h2>
                      </div>
                      <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                        <div className=" product-price font-bold">
                          <span className="inline-block text-lg font-semibold text-gray-800">
                            $72.25
                          </span>
                        </div>
                        <button
                          aria-label="cart"
                          className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                        >
                          {" "}
                          <span className="text-xl">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z" />
                            </svg>
                          </span>{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
