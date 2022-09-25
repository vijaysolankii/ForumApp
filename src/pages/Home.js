import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { toast } from 'react-toastify'
import Blogs from '../components/Blogs'
import Search from "../components/search";

function Home() {
  const [data, setData] = useState([])
  const [searchValue, setSearchValue] = useState("")
  useEffect(()=>{
    loadData();
  },[])




  const loadData = async() => {
    const blogData = await axios.get('http://localhost:5000/blogs')
    blogData.status === 200 ? setData(blogData.data) : toast.error('something went wrong')
  }
  const excert = (string) => {
    if(string.length > 50){
      string = string.substring(0,50) + '...'
    }
    return string
  }
  const OnInputChange = (e) => {setSearchValue(e.target.value)}
  const handleSearch = async(e) => {
    e.preventDefault();
    const response = await axios.get(`http://localhost:5000/blogs?q=${searchValue}`)
    response.status === 200 ? setData(response.data) : toast.error("Something went wrong")
    console.log(response.data)
  }
  return (
    <div className='container mt-5'>
      <Search searchValue={searchValue} OnInputChange={OnInputChange} handleSearch={handleSearch} />
      {data.length === 0 && <h2>No Blog Found</h2>}
      
      <div className='row mt-5'>
          {data.map((item,index)=>(
          <div className='col-md-3'>
              <Blogs key={index} {...item} excert={excert}  />
          </div>
          ))}
      </div>
    </div>
  )
}

export default Home