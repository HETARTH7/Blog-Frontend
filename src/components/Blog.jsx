import React, { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
  const [postItem, setPostItem] = useState([]);

  const BlogPost = (props) => {
    return (
      <div>
        <h1>{props.newPost.title}</h1>
        <p>{props.newPost.post}</p>
      </div>
    );
  };
  const viewPosts = () => {
    return postItem.map((y, index) => {
      return <BlogPost key={index} newPost={y} />;
    });
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => {
        setPostItem(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>You can view your blog posts here!</h1>
      <div>{viewPosts()}</div>
    </div>
  );
};
export default Blog;
