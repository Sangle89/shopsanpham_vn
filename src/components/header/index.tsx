import { Fragment } from "react";
import HeaderLink from "./HeaderLink";
import HeaderSearch from "./HeaderSearch";
import HeaderIcon from "./HeaderIcon";

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
                href="tel:+090999999"
                className="font-bold text-emerald-500 ml-1"
              >
                +090999999
              </a>
            </span>
            <div className="lg:text-right flex items-center navBar">
              <div>
                <a
                  className="font-medium hover:text-emerald-600"
                  href="/gioi-thieu"
                >
                  Giới thiệu
                </a>
                <span className="mx-2">|</span>
              </div>
              <div>
                <a
                  className="font-medium hover:text-emerald-600"
                  href="/lien-he"
                >
                  Liên hệ
                </a>
              </div>
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
              <div className="relative w-40 h-20 flex items-center">
                <img
                  alt="logo"
                  fetchPriority="high"
                  width={0}
                  height={0}
                  decoding="async"
                  data-nimg={1}
                  className="w-full h-auto"
                  src="/logo-shopsanpham.png"
                  style={{ color: "transparent" }}
                />
              </div>
            </a>
            <HeaderSearch />
            <HeaderIcon />
          </div>
        </div>
        <HeaderLink />
      </div>
    </Fragment>
  );
};
export default Header;
