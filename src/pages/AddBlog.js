import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  title: "",
  description: "",
  forum_img: "",
};

const AddBlog = () => {
  const [forumValue, setForumValue] = useState(initialState);
  const { title, description, forum_img } = forumValue;

  const navigate = useNavigate();

 
  
  // Get Full Date
  const getFullDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2,'0')
    let mm = String(today.getMonth() + 1 ).padStart(2,'0')
    let yy = today.getFullYear()
    let hour = today.getHours()
    let minute = today.getMinutes()

    today = dd + '/' + mm + '/' + yy + " | " + hour +":"+ minute
    return today 
  } 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(title && description && forum_img){
      const currentDate = getFullDate()
      const updatedForumDate = {...forumValue,date : currentDate}
      const blogResponse = await axios.post('http://localhost:5000/blogs',updatedForumDate)

      if (blogResponse.status === 201){
        toast.success('Blog Posted Successfully')
      } else {
        toast.error('Something went wrong')
      }
      setForumValue({title:"",description:"",forum_img:""})
      navigate('/')
    }

  };

  // Get Value of Title and Description
  const inputOnChange = (e) => {
    let {name,value} = e.target;
    setForumValue({...forumValue,[name]:value})
  };

  // Get Value of Img using cloudinary
  const onUploadImg = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "g2rsyq29");
    axios
      .post("http://api.cloudinary.com/v1_1/dzdjfl1at/image/upload", formData)
      .then((resp) => {
        toast.info("Image uploaded Successfully");
        setForumValue({ ...forumValue, forum_img: resp.data.url });
      })
      .catch((err) => toast.error("something went wrong"));
  };

  return (
    <div className="container mt-5 text-center">
      <h1>AddBlog</h1>
      <form className="add-form row g-3 mt-3 m-auto" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="title"
              value={title || ""}
              name="title"
              onChange={inputOnChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Enter Forum Description"
            value={description || ""}
            name="description"
            onChange={inputOnChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlFile1">Example file input</label>
          <input
            type="file"
            className="form-control-file"
            placeholder="pleases select forum image"
            onChange={(e) => onUploadImg(e.target.files[0])}
            id="exampleFormControlFile1"
            required
          />
        </div>
        <div className="form-group btn-group gap-4">
          <button type="submit" className="btn rounded btn-primary">
            Upload Forum
          </button>
          <button
            className="btn rounded btn-warning"
            onClick={(e) => navigate("/")}
          >
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
