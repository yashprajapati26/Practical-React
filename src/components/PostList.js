import React, { useEffect, useState } from "react";
import axios from "axios";
import Paginator from "../pages/Paginator";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [curruntPage, setCurruntPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  let lastIndex = curruntPage * postPerPage;
  let firstIndex = lastIndex - postPerPage;
  let pagePost = posts.slice(firstIndex, lastIndex);


  const changePage = (page) => {
    console.log(page);
    setCurruntPage(page);
  };

  const PrevPage = () => {
    if (curruntPage - 1 != 0) setCurruntPage(curruntPage - 1);
  };

  const NextPage = () => {
    if (curruntPage + 1 <= Math.ceil(posts.length / postPerPage))
      setCurruntPage(curruntPage + 1);
  };

  return (
    <>
      <h1 className="my-3 md:p-5 p-3 mx-20 text-center font-bold text-3xl shadow-lg shadow-blue-500 rounded-xl border">
        Popular Posts
      </h1>
      <div className="md:mx-20 flex flex-wrap">
        {pagePost.map((post) => (
          <div key={post.id} className="flex md:flex-col md:w-1/2">
            <div className="bg-blue-300 p-5 m-3 rounded-lg">
              <h1 className="rounded p-2 w-fit bg-blue-100 text-xl font-cold">
                {post.id}. {post.title}
              </h1>
              <div className="p-3">{post.body}</div>
              <div className="flex p-2">
                <span className="md:mx-3 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  {Math.ceil(Math.random() * 1000)} Likes
                </span>
                <span className="md:mx-3 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                    />
                  </svg>
                  {Math.ceil(Math.random() * 1000)} Share
                </span>
              </div>
            </div>
          </div>
        ))}
        <Paginator
          TotalPages={Math.ceil(posts.length / postPerPage)}
          changePage={changePage}
          PrevPage={PrevPage}
          NextPage={NextPage}
        />

        {/* <button
          onClick={clickHandler}
          className="bg-blue-300 p-2 border border-black"
        >
          Click
        </button>
        <ProductList />

        <p className="bg-blue-300">Add Product : </p>
        <input type="text" className="border" ref={inputRef}></input>
        <button
          className="bg-blue-300"
          onClick={() => {
            alert(inputRef.current.value);
          }}
        >
          Submit
        </button>

        <LifeCycle></LifeCycle> */}
      </div>
    </>
  );
}

export default PostList;
