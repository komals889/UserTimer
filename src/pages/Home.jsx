import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Home() {
    const [userName,setuserName]=useState("")
    const [data,setdata]=useState({})
    const [isLoading,setisLoading]=useState(false)
    const handleSubmitUsername=async(e)=>{
        e.preventDefault()
        const result=await axios.get(`https://api.github.com/users/${userName}`)
        console.log(result.data);
        setisLoading(pre=>!pre)
        setdata(result.data)
    }
    useEffect(()=>{

    },[data,isLoading])
  return (
    <div> 
        <div className="row">
            <div className="col-sm-6 offset-sm-3 mt-5">
                <div className="card">

                <div className="card-body">
                     <form onSubmit={handleSubmitUsername}>
                        <input type="text" onChange={e=>setuserName(e.target.value)} className='form-control' /><br />
                        <button className="btn btn-success w-100" onClick={e=>handleSubmitUsername(e)}>Click Me</button>
                     </form>
                </div>
                </div>
            </div>
        </div>
        <br />

         {
            isLoading ? <div className="row">
            <div className="col-sm-6 offset-sm-3">
              <div className="card" >
                <div className="card-header">
                  Profile
                </div> 
                  <div className="card-body">
                  <div className="card-header bg-dark">
                  <div className="list-group">
                      <div className="list-group-item">
                       Profile Pic : <span>
                        <img src={data?.avatar_url } height="30%" width="30%" alt="" />
                       </span>
                      </div>
                      <div className="list-group-item">
                       Username : <span>{data?.login}</span>
                      </div>
                      <div className="list-group-item">
                      Name : <span>{ data?.name}</span>
                      </div> 
                      <div className="list-group-item">
                      No. of public repos : <span>{data?.public_repos}</span>
                      </div> 
                      <div className="list-group-item">
                      No. of public gists : <span>{data?.public_gists}</span>
                      </div> 
                      <div className="list-group-item">
                      Profile created at in time : <span>{data?.created_at}</span>
                      </div> 
                    </div>
                   </div>
                  </div>
               </div>
            </div>
           </div>:<></>
         }

    </div>
  )
}
