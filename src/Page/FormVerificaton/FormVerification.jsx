import React, { useState, useEffect } from "react";
import Navbar from "../Home/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import baseUrl from "../../config";

function Project() {
  const [activeContainer, setActiveContainer] = useState(1);
  const [formData, setFormData] = useState([]);
  const [agentData, setAgentData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/employer/getAll`);
      setFormData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAgentData = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/api/v1/agentt/get/getAllAgent`
      );
      setAgentData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (activeContainer === 2) {
      fetchAgentData();
    }
  }, [activeContainer]);

  const [manpowerData, setManpowerData] = useState([]);

  const fetchManpowerData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/manpower`);
      setManpowerData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (activeContainer === 3) {
      fetchManpowerData();
    }
  }, [activeContainer]);

  const handleClick = (containerNumber) => {
    setActiveContainer(containerNumber);
  };
  return (
    <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
      <div className="row justify-content-center">
        <Navbar heading="Form Verification" />
        <div className="col-lg-11 my-3">
          <div className="d-flex">
            <button className="btn-1" onClick={() => handleClick(1)}>
              Employer
            </button>
            <button className="btn-2" onClick={() => handleClick(2)}>
              Agent /Contractor
            </button>
            <button className="btn-3" onClick={() => handleClick(3)}>
              ManPower
            </button>
          </div>
        </div>
        <div
          className="col-lg-11 shadow-sm rounded bg-white"
          style={{
            display: activeContainer === 1 ? "block" : "none",
            overflow: "auto",
          }}
        >
          <div className="row justify-content-between">
            <div className="col-lg-3 py-2">
              <span>Employer Form List</span>
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

          <table className="table">
            <thead>
              <tr>
                <th scope="col-table">S.NO</th>
                <th scope="col-table">Name</th>
                <th scope="col-table">Apply Date</th>
                <th scope="col-table">View</th>
              </tr>
            </thead>
            <tbody>
              {formData.map((data, index) => {
                const formattedDate = new Date(data.createdAt)
                  .toISOString()
                  .slice(0, 10);
                return (
                  <tr key={data._id}>
                    <th scope="row">
                      {index + 1}{" "}
                      <span>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          height={"30px"}
                          width={"30px"}
                          className="img-rounded-circle me-1"
                          alt="img"
                        />
                      </span>
                    </th>
                    <td>{data.employerName}</td>
                    <td>{formattedDate}</td>
                    <td>
                      <Link to={`/employeeVerification/${data._id}`}>
                        <i className="bi bi-eye-fill fs-5 text-success"></i>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/*agent  */}
        <div
          className="col-lg-11 shadow-sm rounded bg-white"
          style={{
            display: activeContainer === 2 ? "block" : "none",
            overflow: "auto",
          }}
        >
          <div className="row justify-content-between">
            <div className="col-lg-2 py-2">
              <span>Agent Form List</span>
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
                <th scope="col-table">Apply Date</th>
                <th scope="col-table">Action</th>
              </tr>
            </thead>
            <tbody>
              {agentData.map((data, index) => {
                const formattedDate = new Date(data.createdAt)
                  .toISOString()
                  .slice(0, 10);
                return (
                  <tr key={data._id}>
                    <th scope="row">
                      {index + 1}{" "}
                      <span>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          height={"30px"}
                          width={"30px"}
                          className="img-rounded-circle me-1"
                          alt="img"
                        />
                      </span>
                    </th>
                    <td>{data.employerName}</td>
                    <td>{formattedDate}</td>
                    <td>
                      <Link to={`/employeeVerification`}>
                        <i className="bi bi-eye-fill fs-5 text-success"></i>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* ManPower */}
        <div
          className="col-lg-11 shadow-sm rounded bg-white"
          style={{
            display: activeContainer === 3 ? "block" : "none",
            overflow: "auto",
          }}
        >
          <div className="row justify-content-between">
            <div className="col-lg-3 py-2">
              <span>Manpower Form List</span>
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
                <th scope="col-table">Apply Date</th>
                <th scope="col-table">Action</th>
              </tr>
            </thead>
            <tbody>
      {manpowerData.map((data, index) => {
        const formattedDate = new Date(data.createdAt)
          .toISOString()
          .slice(0, 10);
        return (
          <tr key={data._id}>
            <th scope="row">
              {index + 1}{" "}
              <span>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  height={"30px"}
                  width={"30px"}
                  className="img-rounded-circle me-1"
                  alt="img"
                />
              </span>
            </th>
            <td>{data.employerName}</td>
            <td>{formattedDate}</td>
            <td>
              <button className="btn btn-sm btn-outline-warning">
                View
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
          </table>
        </div>
        {/* <div className="col-lg-11 my-3">
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <p>Showing 1 to 5 of 30 Projects</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Project;
