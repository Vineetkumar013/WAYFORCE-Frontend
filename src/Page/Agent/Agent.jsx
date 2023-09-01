import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import baseUrl from "../../config";
import Navbar from '../Home/Navbar';



function Agent() {
  const [agentData, setAgentData] = useState([]);

  useEffect(() => {
    const apiUrl = `${baseUrl}/api/v1/agentt/get/getAllAgent`;
    
    axios.get(apiUrl)
      .then(response => setAgentData(response.data.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);



  return (
    <div className="col-xl-10 bg">
      <div className="row justify-content-center">
        <Navbar heading="Agent" />
        <div
          className="col-lg-11 shadow-sm rounded bg-white"
          style={{ overflow: "auto" }}
        >
          <div className="row justify-content-between">
            <div className="col-lg-2 py-2">
              <span>Show Entries</span>
              <select name="" className="form-control" id="">
                <option value="">10</option>
                <option value="">20</option>
                <option value="">30</option>
              </select>
            </div>
            <div className="col-lg-2 py-2">
            <span>Add New Agent</span>
             <Link to="/agent"><button className='btn-sm btn-success btn'> <i className='bi bi-plus'></i> Add</button></Link> 
            </div>
            <div className="col-lg-2 py-2">
            <span>Import Data</span>
             <Link to="/agent"><button className='btn-sm btn-success btn'> <i className='bi bi-plus'></i> Import</button></Link> 
            </div>
            <div className="col-lg-3 py-2">
              <span>Search</span>
              <input
                type="text"
                className="form-control"
                placeholder="search"
              />
            </div>
          </div>
          <hr />

          <table class="table">
            <thead>
              <tr>
                <th scope="col-table">S.NO</th>
                <th scope="col-table">Name</th>
                <th scope="col-table">Status</th>
                <th scope="col-table">Gender</th>
                <th scope="col-table">Mobile</th>
                <th scope="col-table">Join Date</th>
                <th scope="col-table">View</th>
                <th scope="col-table">Action</th>
              </tr>
            </thead>
            <tbody>
              {agentData.length > 0 ? (
                agentData.map((agent, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{agent.agentName}</td>
                    <td>{agent.active === "true" ? "Active" : "Inactive"}</td>
                    {/* ... Map other fields accordingly ... */}
                    <td>{agent.gender}</td>
                    <td>{agent.mobile}</td>
                    <td>{agent.createdAt}</td>
                    <td>
                      {/* <DropDown /> */}
                      <Link to={`/AgentProfile/${agent._id}`}>
                        <i className="bi bi-eye-fill text-success fs-5"></i>
                      </Link>
                    </td>
                    <td className="d-flex justify-content-evenly cursor">
                      <div>
                        <i className="bi bi-pencil-square text-warning fs-5"></i>
                      </div>
                      <div>
                        <i className="bi bi-archive text-danger fs-5"></i>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9">Loading.....</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="col-lg-11 my-3">
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <p>Showing 1 to 5 of 30 Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agent