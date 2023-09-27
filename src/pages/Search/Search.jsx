import React from "react";
import icons from "../../utils/icons";

const Search = () => {
  const { AiOutlineSearch } = icons;
  return (
    <div className="w-main grid grid-cols-1 gap-4 lg:grid-cols-[120px_1fr] lg:gap-8">
      <div className="rounded-lg bg-gray-200">1</div>
      <div className="rounded-lg bg-gray-200">
        <div className="relative">
          <label for="Search" className="sr-only">
            {" "}
            Search{" "}
          </label>

          <input
            type="text"
            id="Search"
            placeholder="Search for..."
            className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
          />

          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button type="button" className="text-gray-600 hover:text-gray-700">
              <span className="sr-only">Search</span>
              <AiOutlineSearch />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Search;
