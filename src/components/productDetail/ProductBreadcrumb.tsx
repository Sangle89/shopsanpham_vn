export default function ProductBreadcrumb() {
  return (
    <ol className="flex items-center w-full overflow-hidden font-serif">
      <li className="text-sm pr-1 transition duration-200 ease-in cursor-pointer hover:text-emerald-500 font-semibold">
        <a href="/">Home</a>
      </li>
      <li className="text-sm mt-[1px]">
        {" "}
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
          <polyline points="9 18 15 12 9 6" />
        </svg>{" "}
      </li>
      <li className="text-sm pl-1 transition duration-200 ease-in cursor-pointer hover:text-emerald-500 font-semibold ">
        <a href="/search?category=men&_id=632ab2b64d87ff2494210aa7">
          <button type="button">men</button>
        </a>
      </li>
      <li className="text-sm mt-[1px]">
        {" "}
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
          <polyline points="9 18 15 12 9 6" />
        </svg>{" "}
      </li>
      <li className="text-sm px-1 transition duration-200 ease-in ">
        Premium T-Shirt
      </li>
    </ol>
  );
}
