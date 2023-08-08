import React, { useState } from "react";



const SearchBar = (props) => {
  return (
    <div className="flex mx-auto w-[1220px] justify-between items-center bg-slate-800 gap-3 m-4 ">
      <input onChange={(e)=>props.getQuery(e.target.value)} className="w-full flex-1 text-lg outline-none p-5 bg-transparent text-white" placeholder="Search Movie"></input>
      <div onClick={()=>props.handleClick()} className="bg-primary p-6 h-full w-50px">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      </div>
    </div>
  );
};

export default SearchBar;
