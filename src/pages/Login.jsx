import React, { useState,useEffect } from "react"; 
import swal from 'sweetalert'
import { Link,useNavigate } from "react-router-dom";
import './Login.css'
import {firbase} from '../firebase/firbase-config'
import {signInWithPopup, GoogleProvider, GoogleAuthProvider} from "firebase/auth"
export default function Login({history}) {
    const [email,setemail] = useState("")
    const [password, setpassword] = useState("")     
    let x = true;
    const navigate=useNavigate()
     const [data,setdata]=useState(JSON.parse(localStorage.getItem( "signup") ))
    const handleUserLogin = (e) => {
        e.preventDefault()        
        
        if(email==data.email && password==data.pass){
            navigate("/index")
         }else{
            navigate("/")
         }
    } 
     
    const signInWithGoogle=()=>{
        const provider= new GoogleAuthProvider()
        signInWithPopup(firbase,provider).then((res)=>{
          console.log(res)
            navigate("/index")
        }).catch((err)=>{
          console.log(err)
        })
      }
    
    return <div className="backimg2">
        <br /> <br /> <br /><br />
        <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-sm-3 alert alert-danger">
                <div className="card">
                    <div className="card-header">
                        <h5 className="text-info">Login</h5>
                    </div>
                    <div className="card-body">
                            <form action="" onSubmit={handleUserLogin}>
                                 
                            <label htmlFor="" >Email</label><br />
                            <input type="email" name="" id="" placeholder="Enter Email" className="form-control mb-2" required onChange={e=>{
                                setemail(e.target.value)
                                }} />
                                {}
                            <label htmlFor="" >Password</label><br />
                             <div className="input-group">
                          <input type="password" className="form-control" required name=""  placeholder="Enter Password" id="password" onChange={e=>{
                           setpassword(e.target.value)
                            }} />
                            <span className="input-group-text"><i id="btn" className="bi bi-eye-fill"  onClick={(e) => {  
                                if (x) {
                                    document.getElementById("password").setAttribute("type", "text")
                                    document.getElementById("btn").classList.add("bi-eye-slash-fill")
                                    document.getElementById("btn").classList.remove("bi-eye-fill")
                                    x = false;
                                }else {
                                    document.getElementById("password").setAttribute("type","password")
                                    document.getElementById("btn").classList.add("bi-eye-fill") 
                                    document.getElementById("btn").classList.remove("bi-eye-slash-fill")
                                    x = true;
                                }
                                    }}></i></span>    
                        </div> <br />
                            <button className="btn btn-info btn-sm px-4 w-100 text-white">Login</button>
                            <br />
                            <div className=" text-center mt-2">
                            <Link className="text-black " to="/signUp">Create Account</Link>
                           </div>
                           <button className='btn btn-success w-100' onClick={signInWithGoogle}>Sign In with Google</button>

                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
}