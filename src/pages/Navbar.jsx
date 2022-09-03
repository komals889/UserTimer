import React, { useState } from 'react' 
import { Link,useNavigate} from 'react-router-dom'
 
export default function Navbar() {
  const [data,setdata]=useState(JSON.parse(localStorage.getItem( "signup") ))
  const navigate =useNavigate()
  
  return (
    <div> 
        <nav className="navbar navbar-expand-lg navbar-warning bg-warning py-2 px-5 sticky-top" style={{backgroundColor:"red"}}>
         <a href="" className="navbar-brand text-white"><h4>Portal</h4></a>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" >
          <span className="navbar-toggler-icon">
          <i class="bi bi-justify h2"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              {/* <Link className="nav-link text-white" to="/">Home</Link> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/signup">Sign-up </Link>
            </li>
            <li className="nav-item">
              {
                data
                  ?
                  <div class="dropdown show">
                  <a class="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown">
                    <strong>{data?.username}</strong>
                  </a>
                  <div class="dropdown-menu dropdown-menu-start start-0" aria-labelledby="dropdownMenuLink">
                    <Link class="dropdown-item" to="indexpage">Profile</Link>
                    {/* <Link class="dropdown-item" to="/profile">Account</Link> */}
                    <a class="dropdown-item" onClick={e => {
                      localStorage.removeItem("signup")
                      navigate("/")
                  }}>Logout</a>
                  </div>
                </div>
                  
                    :   
                  <Link className="nav-link text-white" to="/">Login
                     
                  </Link>
              } 
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
