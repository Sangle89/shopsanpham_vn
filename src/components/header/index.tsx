import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <div className="hidden lg:block bg-gray-100">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div className="text-gray-700 py-2 font-sans text-xs font-medium border-b flex justify-between items-center">
            <span className="flex items-center">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              We are available 24/7, Need help?
              <a
                href="tel:+099949343"
                className="font-bold text-emerald-500 ml-1"
              >
                +099949343
              </a>
            </span>
            <div className="lg:text-right flex items-center navBar">
              <div>
                <a
                  className="font-medium hover:text-emerald-600"
                  href="/about-us"
                >
                  About Us
                </a>
                <span className="mx-2">|</span>
              </div>
              <div>
                <a
                  className="font-medium hover:text-emerald-600"
                  href="/contact-us"
                >
                  Contact Us
                </a>
                <span className="mx-2">|</span>
              </div>
              <a
                className="font-medium hover:text-emerald-600"
                href="/user/my-account"
              >
                My Account
              </a>
              <span className="mx-2">|</span>
              <a
                className="flex items-center font-medium hover:text-emerald-600"
                href="/auth/login"
              >
                <span className="mr-1">
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
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </span>
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#f53d2d] sticky top-0 z-20">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div className="top-bar h-16 lg:h-auto flex items-center justify-between py-4 mx-auto">
            <a
              className="mr-3 lg:mr-12 xl:mr-12 hidden md:hidden lg:block"
              href="/"
            >
              <div className="relative w-32 h-10">
                <img
                  alt="logo"
                  fetchPriority="high"
                  width={0}
                  height={0}
                  decoding="async"
                  data-nimg={1}
                  className="w-full h-auto"
                  src="https://res.cloudinary.com/ahossain/image/upload/v1697687802/settings/logo-light_hls14v.svg"
                  style={{ color: "transparent" }}
                />
              </div>
            </a>
            <div className="w-full transition-all duration-200 ease-in-out lg:flex lg:max-w-[520px] xl:max-w-[750px] 2xl:max-w-[900px] md:mx-12 lg:mx-4 xl:mx-0">
              <div className="w-full flex flex-col justify-center flex-shrink-0 relative z-30">
                <div className="flex flex-col mx-auto w-full">
                  <form className="relative pr-12 md:pr-14 bg-white overflow-hidden shadow-sm rounded-md w-full">
                    <label className="flex items-center py-0.5">
                      <input
                        className="form-input w-full pl-5 appearance-none transition ease-in-out border text-input text-sm font-sans rounded-md min-h-10 h-10 duration-200 bg-white focus:ring-0 outline-none border-none focus:outline-none placeholder-gray-500 placeholder-opacity-75"
                        placeholder="Search for products (e.g. fish, apple, oil)"
                        defaultValue=""
                      />
                    </label>
                    <button
                      aria-label="Search"
                      type="submit"
                      className="outline-none text-xl text-gray-400 absolute top-0 right-0 end-0 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none"
                    >
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
                          strokeMiterlimit={10}
                          strokeWidth={32}
                          d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                        />
                        <path
                          fill="none"
                          strokeLinecap="round"
                          strokeMiterlimit={10}
                          strokeWidth={32}
                          d="M338.29 338.29L448 448"
                        />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="hidden md:hidden md:items-center lg:flex xl:block absolute inset-y-0 right-0 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                className="pr-5 text-white text-2xl font-bold"
                aria-label="Alert"
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
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </button>
              <button
                aria-label="Total"
                className="relative px-5 text-white text-2xl font-bold"
              >
                <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
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
                className="pl-5 text-white text-2xl font-bold"
                aria-label="Login"
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
            </div>
          </div>
        </div>
        <div className="hidden lg:block xl:block bg-white border-b">
          <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 h-12 flex justify-between items-center">
            <div className="inline-flex">
              <div className="relative" data-headlessui-state="">
                <div className="max-w-7xl mx-auto">
                  <div className="flex justify-between items-center md:justify-start md:space-x-10">
                    <nav className="md:flex space-x-10 items-center">
                      <div className="relative " data-headlessui-state="">
                        <button
                          className="group inline-flex items-center py-2 hover:text-emerald-600 focus:outline-none"
                          type="button"
                          aria-expanded="false"
                          data-headlessui-state=""
                          id="headlessui-popover-button-:r21:"
                        >
                          <span className=" text-sm font-medium">
                            Categories
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            aria-hidden="true"
                            className="ml-1 h-3 w-3 group-hover:text-emerald-600"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </div>
                      <a
                        className=" mx-4 py-2 text-sm font-medium hover:text-emerald-600"
                        href="/about-us"
                      >
                        About Us
                      </a>
                      <a
                        className=" mx-4 py-2 text-sm font-medium hover:text-emerald-600"
                        href="/contact-us"
                      >
                        Contact Us
                      </a>
                      <div className="relative " data-headlessui-state="">
                        <button
                          className="group inline-flex items-center py-2 text-sm font-medium hover:text-emerald-600 focus:outline-none"
                          type="button"
                          aria-expanded="false"
                          data-headlessui-state=""
                          id="headlessui-popover-button-:r23:"
                        >
                          <span>Pages</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            aria-hidden="true"
                            className="ml-1 h-3 w-3 group-hover:text-emerald-600"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </div>
                      <a
                        className="relative inline-flex items-center  bg-red-100  ml-4 py-0 px-2 rounded text-sm font-medium text-red-500 hover:text-emerald-600"
                        href="/offer"
                      >
                        Offers
                        <div className="absolute flex w-2 h-2 left-auto -right-1 -top-1">
                          <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                        </div>
                      </a>
                    </nav>
                    <div
                      style={{
                        position: "fixed",
                        top: 1,
                        left: 1,
                        width: 1,
                        height: 0,
                        padding: 0,
                        margin: "-1px",
                        overflow: "hidden",
                        clip: "rect(0px, 0px, 0px, 0px)",
                        whiteSpace: "nowrap",
                        borderWidth: 0,
                        display: "none",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  position: "fixed",
                  top: 1,
                  left: 1,
                  width: 1,
                  height: 0,
                  padding: 0,
                  margin: "-1px",
                  overflow: "hidden",
                  clip: "rect(0px, 0px, 0px, 0px)",
                  whiteSpace: "nowrap",
                  borderWidth: 0,
                  display: "none",
                }}
              />
            </div>
            <div className="flex">
              <div className="dropdown">
                <div className="flot-l flag us" />
                <button className="dropbtn">
                  English&nbsp;
                  <i className="fas fa-angle-down" />
                </button>
                <div className="dropdown-content">
                  <a href="/">
                    <div className="flot-l flag in" />
                    Tamil
                  </a>
                </div>
              </div>
              <a
                className=" mx-4 py-2 text-sm font-medium hover:text-emerald-600"
                href="/privacy-policy"
              >
                Privacy Policy
              </a>
              <a
                className=" mx-4 py-2 text-sm font-medium hover:text-emerald-600"
                href="/terms-and-conditions"
              >
                Terms &amp; Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Header;
