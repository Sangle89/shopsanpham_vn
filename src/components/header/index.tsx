import { Fragment } from "react";
import HeaderLink from "./HeaderLink";
import HeaderSearch from "./HeaderSearch";
import HeaderIcon from "./HeaderIcon";

const Header = () => {
  return (
    <Fragment>
      <div className=" bg-[#f53d2d] sticky top-0 z-20">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div className="top-bar h-16 lg:h-auto flex items-center justify-between py-3 mx-auto">
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
      </div>
    </Fragment>
  );
};
export default Header;
