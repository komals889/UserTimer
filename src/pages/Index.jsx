import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Index() {
    const navigate=useNavigate()
  return (
    <div className='text-center'> 
         Welcome To Home Page

         <button className='btn btn-dark' onClick={e => {
                      localStorage.removeItem("signup")
                      navigate("/")
                  }}>Sign Out</button>
    </div>
  )
}
