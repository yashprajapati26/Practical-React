import React, { Component } from "react";
import axios from "axios";
export default class PostListClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        this.state.posts = res.data;
        this.setState({ posts: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        List of Post
        {
        posts.length ?
        posts.map((post) => <div key={post.id}> {post.title}</div>):
        null
        }
      </div>
    );
  }
}
