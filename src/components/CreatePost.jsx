import React from "react";

const CreatePost = () => {
  return (
    <div className="container">
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input class="form-control"></input>
      </div>
      <div className="mb-3">
        <label className="form-label">Write Post</label>
        <textarea className="form-control" rows="15"></textarea>
      </div>
    </div>
  );
};
export default CreatePost;
