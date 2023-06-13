import React from "react";

function Paginator(props) {
  const Pages = [];

  for (let i = 1; i <= props.TotalPages; i++) {
    Pages.push(i);
  }

  const pageChangeHandler = (page)=>{ 
    props.changePage(page)
  }

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center mb-2">
        <p className="p-2 bg-gray-300 mx-3" onClick={()=>{props.PrevPage()}}>Prev</p>
        {Pages.map((page) => (
          <button key={page} className="p-2 bg-gray-300 mx-3" onClick={() => {pageChangeHandler(page)}}>{page}</button>
        ))}
        <p className="p-2 bg-gray-300 mx-3" onClick={()=>{props.NextPage()}}>Next</p>

      </div>
    </div>
  );
}

export default Paginator;
