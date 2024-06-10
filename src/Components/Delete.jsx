import React, { useState } from 'react'
import Navbar from './Navbar'

const Delete = () => {
    const [data,setData] = useState(
        {

            "empid":""
    
        }
    )
    const inputHandler = (event) =>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue = () =>{
        console.log(data)
    }
  return (
    <div>
<Navbar/>
<div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <row className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">EMPLOYEE ID</label>
                            <input type="text" className="form-control" name='empid' value={data.empid} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-danger" onClick={readValue}>REMOVE</button>

                            </div>
                        </row>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Delete