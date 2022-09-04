import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Index() {
  const navigate=useNavigate()
  const [seconds,setseconds]=useState(59)
  const [minute,setminutes]=useState(24)

  let timer;
  useEffect(()=>{
      timer= setInterval(()=>{
          setseconds(seconds-1)
          if(seconds===0){
              setminutes(minute-1);
              setseconds(59)
          }
      },1000)
      return ()=> clearInterval(timer)
  })
  const restart=()=>{
      setseconds(59)
      setminutes(24)
  }
  const stop=()=>{
      clearInterval(timer)
  }
return (
  <div className='text-center container-fluid'> 
       Welcome To Home Page

          <div className="row">
              <div className="col-sm-6 offset-sm-3">
                  <div className="card">
                      <div className="card-header">
                          Timer
                      </div>
                      <div className="card-body">
                          <h4>{minute<10?"0"+minute:minute}:{seconds<10?"0"+seconds:seconds}</h4><br />
                          <button className="btn btn-danger w-50 m-2" onClick={restart}>Restart</button>
                          <button className="btn btn-info w-50 m-2" onClick={stop}>Stop</button>
                      </div>
                  </div><br />
       <button className='btn btn-dark' onClick={e => {
                    localStorage.removeItem("signup")
                    navigate("/")
                }}>Sign Out</button><br />
              </div><br />
          </div> <br />
  </div>
)
}
