import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { CgArrowDown, CgMenuGridR } from "react-icons/cg";

export default function HeaderLink() {
  return (
    <div className="hidden lg:block xl:block bg-white border-b">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 h-12 flex justify-between items-center">
        <div className="inline-flex">
          <div className="relative" data-headlessui-state="">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center md:justify-start md:space-x-10">
                <nav className="md:flex space-x-10 items-center">
                  <Popover>
                    <PopoverButton className="group inline-flex items-center py-2 hover:text-emerald-600 focus:outline-none">
                      <span className=" text-sm font-medium">Danh mục</span>
                      <CgArrowDown />
                    </PopoverButton>
                    <PopoverPanel className="absolute z-10 -ml-1 mt-1 transform w-screen max-w-xs c-h-65vh bg-white opacity-100 translate-y-0">
                      <div className="rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-y-scroll flex-grow scrollbar-hide w-full h-full">
                        <div className="flex flex-col w-full h-full bg-white cursor-pointer scrollbar-hide">
                          <div className="w-full max-h-full">
                            <div className="relative grid gap-2 p-6">
                              <a
                                className="p-2 flex items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600"
                                role="button"
                              >
                                <CgMenuGridR />
                                <div className="inline-flex items-center justify-between ml-3 text-sm font-medium w-full hover:text-emerald-600">
                                  Test2
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </PopoverPanel>
                  </Popover>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <a
            className=" mx-4 py-2 text-sm font-medium hover:text-emerald-600"
            href="/quy-dinh"
          >
            Quy định
          </a>
          <a
            className=" mx-4 py-2 text-sm font-medium hover:text-emerald-600"
            href="/chinh-sach-bao-mat"
          >
            Chính sách bảo mật
          </a>
        </div>
      </div>
    </div>
  );
}
