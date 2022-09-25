import React from "react";
import { Link } from "react-router-dom";

const Blogs = ({ title, id, description, forum_img, excert }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={forum_img} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {excert(description)}
        </p>
        <Link to={`/blogs/${id}`} className="btn btn-primary">
          read more
        </Link>
      </div>
    </div>
  );
};

export default Blogs;