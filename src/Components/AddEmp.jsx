import React, { useState } from 'react'
import Navbar from './Navbar'

const AddEmp = () => {
    const [data,setData] = useState(
        {

            "empid":"",
            "empname":"",
            "mobno":"",
            "email":""
    
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
                    <div className="row g-3">
                            <div className="col 12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">EMPLOYEE ID</label>
                            <input type="text" className="form-control" name='empid' value={data.empid} onChange={inputHandler}/>

                            </div>
                            <div className="col 12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">EMPLOYEE NAME</label>
                            <input type="text" className="form-control" name='empname' value={data.empname} onChange={inputHandler}/>

                            </div>
                            <div className="col 12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">MOBILE NO</label>
                            <input type="text" className="form-control" name='mobno' value={data.mobno} onChange={inputHandler}/>

                            </div>
                            <div className="col 12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">EMAIL ID</label>
                            <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler}/>

                            </div>
                            <div className="col 12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>REGISTER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default AddEmp