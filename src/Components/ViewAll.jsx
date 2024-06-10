import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const [data,changedData] = useState(
        [
            {

                "empid":"101",
                "empname":"Kevin",
                "mobno":"70546789541",
                "email":"abc@gmail.com"
        
            }
        ]
    )
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">EMPLOYEE ID</th>
                                            <th scope="col">EMPLOYEE NAME</th>
                                            <th scope="col">MOBILE NO</th>
                                            <th scope="col">EMAIL ID</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(
                                            (value, index)=>{
                                                return <tr>
                                                <th scope="row">{value.empid}</th>
                                                <td>{value.empname}</td>
                                                <td>{value.mobno}</td>
                                                <td>{value.email}</td>
                                            </tr>
                                            }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAll