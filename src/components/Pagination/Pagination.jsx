import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import icons from "../../utils/icons";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const { BsChevronLeft, BsChevronRight } = icons;

  const handlerPageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  const [showNextButton, setShowNextButton] = useState(false);
  const [showPrevButton, setShowPrevButton] = useState(false);

  useEffect(() => {
    setShowPrevButton(currentPage !== totalPages - 1);
    setShowNextButton(currentPage !== 0);
  }, [showPrevButton, showNextButton]);
  return (
    <>
      <ReactPaginate
        breakLabel={<span className="mr-4">...</span>}
        nextLabel={
          showNextButton && (
            <span className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md cursor-poiter">
              <BsChevronRight />
            </span>
          )
        }
        onPageChange={handlerPageClick}
        pageRangeDisplayed={3}
        pageCount={totalPages}
        previousLabel={
          showPrevButton && (
            <span className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md mr-4 cursor-poiter">
              <BsChevronLeft />
            </span>
          )
        }
        containerClassName="flex justify-center items-center mt-8 mb-4"
        pageClassName="block border border-solid border hover:bg-gray-200 w-10 h-10 flex items-center justify-center rounded-md mr-4 cursor-poiter"
        activeClassName="bg-main text-white"
      />
    </>
  );
};

export default Pagination;
