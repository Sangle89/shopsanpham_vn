import { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer className="lg:hidden fixed z-30 bottom-0 bg-emerald-500 flex items-center justify-between w-full h-16 px-3 sm:px-10">
        <button
          aria-label="Bar"
          className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none"
        >
          <span className="text-xl text-white">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 drop-shadow-xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1={17} y1={10} x2={3} y2={10} />
              <line x1={21} y1={6} x2={3} y2={6} />
              <line x1={21} y1={14} x2={3} y2={14} />
              <line x1={17} y1={18} x2={3} y2={18} />
            </svg>
          </span>
        </button>
        <a
          className="text-xl text-white"
          rel="noreferrer"
          aria-label="Home"
          href="/"
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 drop-shadow-xl"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </a>
        <button className="h-9 w-9 relative whitespace-nowrap inline-flex items-center justify-center text-white text-lg">
          <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 bg-red-500 rounded-full">
            1
          </span>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 drop-shadow-xl"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={9} cy={21} r={1} />
            <circle cx={20} cy={21} r={1} />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </button>
        <button
          aria-label="User"
          type="button"
          className="text-xl text-white indicator justify-center"
        >
          <a href="/auth/login">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 drop-shadow-xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx={12} cy={7} r={4} />
            </svg>
          </a>
        </button>
      </footer>
      <div className="w-full">
        <div
          id="downloadApp"
          className="bg-indigo-50 py-10 lg:py-16 bg-repeat bg-center overflow-hidden"
        >
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-2 md:gap-3 lg:gap-3 items-center">
              <div className="flex-grow hidden lg:flex md:flex md:justify-items-center lg:justify-start">
                <img
                  alt="app download"
                  fetchpriority="high"
                  width={500}
                  height={394}
                  decoding="async"
                  data-nimg={1}
                  className="block w-auto"
                  srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1697688091%2Fsettings%2Fapp-download-img-left_s5n2zf.webp&w=640&q=75 1x, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1697688091%2Fsettings%2Fapp-download-img-left_s5n2zf.webp&w=1080&q=75 2x"
                  src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1697688091%2Fsettings%2Fapp-download-img-left_s5n2zf.webp&w=1080&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold  mb-3">
                  Get Your Daily Needs From Our KachaBazar Store
                </h3>
                <p className="text-base opacity-90 leading-7">
                  There are many products you will find in our shop, Choose your
                  daily necessary product from our KachaBazar shop and get some
                  special offers.
                </p>
                <div className="mt-8 flex">
                  <a
                    className="mx-2"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.apple.com/app-store/"
                  >
                    <img
                      alt="app store"
                      loading="lazy"
                      width={0}
                      height={0}
                      decoding="async"
                      data-nimg={1}
                      className="w-full h-auto"
                      src="https://res.cloudinary.com/ahossain/image/upload/v1697688165/settings/app-store_cyyc0f.svg"
                      style={{ color: "transparent" }}
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://play.google.com/store/games?utm_source=apac_med&utm_medium=hasem&utm_content=Jun0122&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-lk-1003227-med-hasem-py-Evergreen-Jun0122-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700071429441653_creativeid_600975795576_device_c&gclid=CjwKCAjwwo-WBhAMEiwAV4dybdy60tnQqCSnQ-cXShNnEcxmaBx2I6iwwc_WEqoA5sN9YSLJEXh9fBoC3u4QAvD_BwE&gclsrc=aw.ds"
                  >
                    <img
                      alt="play store"
                      loading="lazy"
                      width={0}
                      height={0}
                      decoding="async"
                      data-nimg={1}
                      className="w-full h-auto"
                      src="https://res.cloudinary.com/ahossain/image/upload/v1697688167/settings/play-store_cavwua.svg"
                      style={{ color: "transparent" }}
                    />
                  </a>
                </div>
              </div>
              <div className="md:hidden lg:block">
                <div className="flex-grow hidden lg:flex md:flex lg:justify-end">
                  <img
                    alt="app download"
                    fetchpriority="high"
                    width={500}
                    height={394}
                    decoding="async"
                    data-nimg={1}
                    className="block w-auto"
                    srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1697688091%2Fsettings%2Fapp-download-img_c7xqg4.webp&w=640&q=75 1x, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1697688091%2Fsettings%2Fapp-download-img_c7xqg4.webp&w=1080&q=75 2x"
                    src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1697688091%2Fsettings%2Fapp-download-img_c7xqg4.webp&w=1080&q=75"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden relative lg:block mx-auto max-w-screen-2xl py-6 px-3 sm:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 mx-auto">
            <div className=" border-r border-gray-200 py-1 flex items-center justify-center bg-white">
              <div className="mr-3">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 h-4 w-4 text-emerald-600"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x={1} y={3} width={15} height={13} />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <div className="">
                <span className="block  text-sm font-medium leading-5">
                  Free Shipping From €500.00
                </span>
              </div>
            </div>
            <div className=" border-r border-gray-200 py-1 flex items-center justify-center bg-white">
              <div className="mr-3">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 h-4 w-4 text-emerald-600"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="">
                <span className="block  text-sm font-medium leading-5">
                  Support 24/7 At Anytime
                </span>
              </div>
            </div>
            <div className=" border-r border-gray-200 py-1 flex items-center justify-center bg-white">
              <div className="mr-3">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 h-4 w-4 text-emerald-600"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
                  <line x1={1} y1={10} x2={23} y2={10} />
                </svg>
              </div>
              <div className="">
                <span className="block  text-sm font-medium leading-5">
                  Secure Payment Totally Safe
                </span>
              </div>
            </div>
            <div className=" border-r border-gray-200 py-1 flex items-center justify-center bg-white">
              <div className="mr-3">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 h-4 w-4 text-emerald-600"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 12 20 22 4 22 4 12" />
                  <rect x={2} y={7} width={20} height={5} />
                  <line x1={12} y1={22} x2={12} y2={7} />
                  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                </svg>
              </div>
              <div className="">
                <span className="block  text-sm font-medium leading-5">
                  Latest Offer Upto 20% Off
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="hr-line" />
        <div className="border-t border-gray-100 w-full">
          <div className="pb-16 lg:pb-0 xl:pb-0 bg-white">
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
              <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 lg:py-16 justify-between">
                <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
                  <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                    Company
                  </h3>
                  <ul className="text-sm flex flex-col space-y-3">
                    <li className="flex items-baseline">
                      <a
                        className="text-gray-600 inline-block w-full hover:text-emerald-500"
                        href="/about-us"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="flex items-baseline">
                      <a
                        className="text-gray-600 inline-block w-full hover:text-emerald-500"
                        href="/contact-us"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li className="flex items-baseline">
                      <a
                        className="text-gray-600 inline-block w-full hover:text-emerald-500"
                        href="/#"
                      >
                        Careers
                      </a>
                    </li>
                    <li className="flex items-baseline">
                      <a
                        className="text-gray-600 inline-block w-full hover:text-emerald-500"
                        href="/#"
                      >
                        Latest News
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
                  <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                    Latest News
                  </h3>
                  <ul className="text-sm lg:text-15px flex flex-col space-y-3">
                    <li className="flex items-baseline">
                      <a
                        className="text-gray-600 inline-block w-full hover:text-emerald-500"
                        href="/search?category=fish-meat"
                      >
                        Fish &amp; Meat
                      </a>
                    </li>
                    <li className="flex items-baseline">
                      <a
                        className="text-gray-600 inline-block w-full hover:text-emerald-500"
                        href="/search?category=drinks"
                      >
                        Soft Drink
                      </a>
                    </li>
                    <li className="flex items-baseline">
                      <a
                        className="text-gray-600 inline-block w-full hover:text-emerald-500"
                        href="/search?category=milk-dairy"
                      >
                        Milk &amp; Dairy
                      </a>
                    </li>
                    <li className="flex items-baseline">
                      <a
                        className="text-gray-600 inline-block w-full hover:text-emerald-500"
                        href="/search?category=beauty-health"
                      >
                        Beauty &amp; Health
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
                  <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                    My Account
                  </h3>
                  <ul className="text-sm lg:text-15px flex flex-col space-y-3">
                    <li className="flex items-baseline">
                      <a
                        className="text-gray-600 inline-block w-full hover:text-emerald-500"
                        href="/#"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li className="flex items-baseline">
                      <a
                        className="text-gray-600 inline-block w-full hover:text-emerald-500"
                        href="/#"
                      >
                        My Orders
                      </a>
                    </li>
                    <li className="flex items-baseline">
                      <a
                        className="text-gray-600 inline-block w-full hover:text-emerald-500"
                        href="/#"
                      >
                        Recent Orders
                      </a>
                    </li>
                    <li className="flex items-baseline">
                      <a
                        className="text-gray-600 inline-block w-full hover:text-emerald-500"
                        href="/#"
                      >
                        Update Profile
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
                  <a
                    className="mr-3 lg:mr-12 xl:mr-12"
                    rel="noreferrer"
                    href="/"
                  >
                    <div className="relative w-32 h-10">
                      <img
                        alt="logo"
                        loading="lazy"
                        width={0}
                        height={0}
                        decoding="async"
                        data-nimg={1}
                        className="w-full h-auto"
                        src="https://res.cloudinary.com/ahossain/image/upload/v1697688576/settings/logo-color_el4zmy.svg"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </a>
                  <p className="leading-7 font-sans text-sm text-gray-600 mt-3">
                    987 Andre Plain Suite High Street 838, Lake Hestertown, USA
                    <br />
                    <span> Tel : 02.356.1666</span>
                    <br />
                    <span> Email : ccruidk@test.com</span>
                  </p>
                </div>
              </div>
              <hr className="hr-line" />
              <div className="mx-auto max-w-screen-2xl px-4 sm:px-10 bg-gray-50 shadow-sm border border-gray-50 rounded-lg">
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-8 items-center justify-between">
                  <div className="col-span-1">
                    <div>
                      <span className="text-base leading-7 font-medium block mb-2 pb-0.5">
                        Follow Us
                      </span>
                      <ul className="text-sm flex">
                        <li className="flex items-center mr-3 transition ease-in-out duration-500">
                          <a
                            aria-label="Social Link"
                            rel="noreferrer"
                            target="_blank"
                            className="block text-center mx-auto text-gray-500 hover:text-white"
                            href="https://www.facebook.com/"
                          >
                            <svg viewBox="0 0 64 64" width={34} height={34}>
                              <circle cx={32} cy={32} r={31} fill="#3b5998" />
                              <path
                                d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
                                fill="white"
                              />
                            </svg>
                          </a>
                        </li>
                        <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                          <a
                            aria-label="Social Link"
                            rel="noreferrer"
                            target="_blank"
                            className="block text-center mx-auto text-gray-500 hover:text-white"
                            href="https://twitter.com/"
                          >
                            <svg viewBox="0 0 64 64" width={34} height={34}>
                              <circle cx={32} cy={32} r={31} fill="#00aced" />
                              <path
                                d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
                                fill="white"
                              />
                            </svg>
                          </a>
                        </li>
                        <li className="flex items-center mr-3 transition ease-in-out duration-500">
                          <a
                            aria-label="Social Link"
                            rel="noreferrer"
                            target="_blank"
                            className="block text-center mx-auto text-gray-500 hover:text-white"
                            href="https://www.pinterest.com/"
                          >
                            <svg viewBox="0 0 64 64" width={34} height={34}>
                              <circle cx={32} cy={32} r={31} fill="#cb2128" />
                              <path
                                d="M32,16c-8.8,0-16,7.2-16,16c0,6.6,3.9,12.2,9.6,14.7c0-1.1,0-2.5,0.3-3.7 c0.3-1.3,2.1-8.7,2.1-8.7s-0.5-1-0.5-2.5c0-2.4,1.4-4.1,3.1-4.1c1.5,0,2.2,1.1,2.2,2.4c0,1.5-0.9,3.7-1.4,5.7 c-0.4,1.7,0.9,3.1,2.5,3.1c3,0,5.1-3.9,5.1-8.5c0-3.5-2.4-6.1-6.7-6.1c-4.9,0-7.9,3.6-7.9,7.7c0,1.4,0.4,2.4,1.1,3.1 c0.3,0.3,0.3,0.5,0.2,0.9c-0.1,0.3-0.3,1-0.3,1.3c-0.1,0.4-0.4,0.6-0.8,0.4c-2.2-0.9-3.3-3.4-3.3-6.1c0-4.5,3.8-10,11.4-10 c6.1,0,10.1,4.4,10.1,9.2c0,6.3-3.5,11-8.6,11c-1.7,0-3.4-0.9-3.9-2c0,0-0.9,3.7-1.1,4.4c-0.3,1.2-1,2.5-1.6,3.4 c1.4,0.4,3,0.7,4.5,0.7c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16z"
                                fill="white"
                              />
                            </svg>
                          </a>
                        </li>
                        <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                          <a
                            aria-label="Social Link"
                            rel="noreferrer"
                            target="_blank"
                            className="block text-center mx-auto text-gray-500 hover:text-white"
                            href="https://www.linkedin.com/"
                          >
                            <svg viewBox="0 0 64 64" width={34} height={34}>
                              <circle cx={32} cy={32} r={31} fill="#007fb1" />
                              <path
                                d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
                                fill="white"
                              />
                            </svg>
                          </a>
                        </li>
                        <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                          <a
                            aria-label="Social Link"
                            rel="noreferrer"
                            target="_blank"
                            className="block text-center mx-auto text-gray-500 hover:text-white"
                            href="https://web.whatsapp.com/"
                          >
                            <svg viewBox="0 0 64 64" width={34} height={34}>
                              <circle cx={32} cy={32} r={31} fill="#25D366" />
                              <path
                                d="m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"
                                fill="white"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-1 text-center hidden lg:block md:block">
                    <div>
                      <p className="text-base leading-7 font-medium block">
                        Call Us Today!
                      </p>
                      <h5 className="text-2xl font-bold text-emerald-500 leading-7">
                        +6599887766
                      </h5>
                    </div>
                  </div>
                  <div className="col-span-1 hidden lg:block md:block">
                    <ul className="lg:text-right">
                      <li className="px-1 mb-2 md:mb-0 transition hover:opacity-80 inline-flex">
                        <img
                          alt="payment method"
                          loading="lazy"
                          width={274}
                          height={85}
                          decoding="async"
                          data-nimg={1}
                          className="w-full"
                          srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1697688607%2Fsettings%2Fpayment-logo_qhslgz.webp&w=384&q=75 1x, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1697688607%2Fsettings%2Fpayment-logo_qhslgz.webp&w=640&q=75 2x"
                          src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1697688607%2Fsettings%2Fpayment-logo_qhslgz.webp&w=640&q=75"
                          style={{ color: "transparent" }}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 flex justify-center py-4">
              <p className="text-sm text-gray-500 leading-6">
                Copyright 2024 @{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-500"
                  href="https://themeforest.net/user/htmllover"
                >
                  HtmlLover
                </a>
                , All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Footer;