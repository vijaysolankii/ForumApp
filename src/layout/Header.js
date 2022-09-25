import React from "react";
import { Link } from "react-router-dom";



function Header() {
  
  const toggle = () =>{
    document.querySelector('#navbarSupportedContent').classList.toggle('show')
  }
  const closeMenu = () => {
    let closeMenu = document.querySelectorAll('ul li .nav-link')
    closeMenu.forEach(item => item.addEventListener('click',function(){document.querySelector('#navbarSupportedContent').classList.remove('show')}))
  }
  
  
  return (
    <div className="bg-primary text-white">
      <div className="container-fluid">
      <nav className="navbar navbar-expand-lg">
        <Link to="/"  className="text-white font-weight-bold navbar-brand">Discussion Forum</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"  onClick={()=> toggle()}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link onClick={closeMenu} to="/addBlog" className="nav-link text-white">Add Forum</Link>
            </li>
            <li className="nav-item">
              <Link onClick={closeMenu} to="/about" className="nav-link text-white">about</Link>
            </li>
            <li className="nav-item">
              <Link onClick={closeMenu} to="/contact" className="nav-link text-white">contact</Link>
            </li>
            
          </ul>
        </div>
      </nav>
      </div>
    </div>
  );
}

export default Header;
