import React from "react";
import Homecomp from "../components/Homecomp";
import PostList from "../components/PostList";
import Subscribe from "./Subscribe";
function Home() {
  // intilize ref
  let inputRef = React.createRef();

  return (
    <div>

      <Homecomp />
      <PostList />
      {/* <Subscribe/> */}
      
    </div>
  );
}

export default Home;
