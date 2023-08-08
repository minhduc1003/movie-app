import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { dbApi, fetcher } from "../../config";
import CardItem from "../CardItem";
import SearchBar from "../SearchBar";
import ReactPaginate from "react-paginate";
const Movie = () => {
  const [query, setQuery] = useState("");
  const [updateQuery, setUpdateQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(1);
  const [page, setPage] = useState(false);
  const getQuery = (searchQuery) => {
    setQuery(searchQuery);
  };
  const { data } = useSWR(dbApi.movieSearch(updateQuery, itemOffset), fetcher);
  const handleSearch = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setUpdateQuery(query);
      setPage(true);
    }, 1500);
  };
  document.addEventListener("keydown", function (event) {
    if (event.code === "Enter") {
      handleSearch();
    }
  });

  useEffect(() => {
    if (!data) return;
    setPageCount(Math.ceil(data.total_results / 20));
  }, [data]);
  const handlePageClick = (event) => {
    const newOffSet = event.selected + 1;
    setItemOffset(newOffSet);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <SearchBar handleClick={handleSearch} getQuery={getQuery}></SearchBar>
      {isLoading && (
        <div className="h-14 w-14 rounded-full border-4 border-l-transparent border-solid border-blue-500 animate-spin mx-auto my-10"></div>
      )}
      <div className="flex flex-wrap page-container gap-3 justify-center items-center text-white ">
        {data &&
          !data.errors &&
          data.results.length > 0 &&
          data.results.map((item) => (
            <CardItem key={item.id} item={item} size={"w-[400px]"}></CardItem>
          ))}
      </div>
      {page && (
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="text-white flex gap-3 absolute left-2/4 -translate-x-2/4   my-10"
        />
      )}
    </>
  );
};

export default Movie;
