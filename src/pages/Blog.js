import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Blog = () => {
  const [blog, setBlog] = useState();
  const {id} = useParams();

  useEffect(() => {
    if (id) {
      getSingleBlog();
    }
  }, [id]);

  const getSingleBlog = async () => {
    const response = await axios.get(`http://localhost:5000/blogs/${id}`);
    response.status === 200
      ? setBlog(response.data)
      : toast.error("something went wrong");
  };
  

  return (
    <>
      <div className="container mt-5 single-forum">
        <Link to="/">Go Back</Link>
        <div className="heading my-3 d-flex align-items-center justify-content-between">
          <h1 className="text-center"> {blog&& blog.title}  </h1>
          <span >{blog&&blog.date}</span>
        </div>
        <div className="img">
          <img className="img-fluid" src={blog&&blog.forum_img} alt={"img"} />
        </div>
        <div className="heading">{blog&&blog.description}</div>
      </div>
    </>
  );
};

export default Blog;
