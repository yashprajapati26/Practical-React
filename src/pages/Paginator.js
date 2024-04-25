import React from "react";

function Paginator({
  TotalPages,
  changePage,
  PrevPage,
  NextPage,
  setPostPerPage,
}) {
  const Pages = [];

  for (let i = 1; i <= TotalPages; i++) {
    Pages.push(i);
  }

  const pageChangeHandler = (page) => {
    changePage(page);
  };

  return (
    <div className="flex items-center mx-auto">
      <div className="flex flex-wrap justify-center mb-2">
        <p
          className="p-2 bg-gray-300 mx-3 cursor-pointer"
          onClick={() => {
            PrevPage();
          }}
        >
          Prev
        </p>
        {Pages.map((page) => (
          <button
            key={page}
            className="p-2 bg-gray-300 mx-3"
            onClick={() => {
              pageChangeHandler(page);
            }}
          >
            {page}
          </button>
        ))}
        <p
          className="p-2 bg-gray-300 mx-3 cursor-pointer"
          onClick={() => {
            NextPage();
          }}
        >
          Next
        </p>
      </div>
      <div className="flex items-center">
        <h3>Per Page : </h3>
        <select onChange={(e) => setPostPerPage(e.target.value)}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
}

export default Paginator;
