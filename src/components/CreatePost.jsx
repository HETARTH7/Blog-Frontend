import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangePost = (e) => {
    setPost(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const blogPost = {
      title: title,
      post: post,
    };
    console.log(blogPost);
    axios("http://localhost:5000/add", blogPost)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={onSubmit} className="container">
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input onChange={onChangeTitle} className="form-control"></input>
      </div>
      <div className="mb-3">
        <label className="form-label">Write Post</label>
        <textarea
          onChange={onChangePost}
          className="form-control"
          rows="15"
        ></textarea>
      </div>
      <button type="submit">POST</button>
    </form>
  );
};
export default CreatePost;
