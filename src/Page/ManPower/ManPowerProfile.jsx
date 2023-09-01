import React, { useState, useEffect } from "react";
import Navbar from "../Home/Navbar";
import { Link, useParams } from "react-router-dom";
import baseUrl from "../../config";
import axios from "axios";

function ManPowerProfile() {
  const [activeContainer, setActiveContainer] = useState(1);
  const [manpowerData, setManpowerData] = useState(null);
  const { id } = useParams();

  
  useEffect(() => {
    const fetchManpowerData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/v1/manpower/profile/${id}`
          );
          setManpowerData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchManpowerData();
  }, [id]);
  
    const handleClick = (containerNumber) => {
      setActiveContainer(containerNumber);
  };
  
    if (!manpowerData) {
    return <p>Loading...</p>;
  }

    return (
      <>
      <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
        <div className="row justify-content-center">
          <Navbar heading="Manpower Profile" />
          <div className="col-lg-11 my-2">
            <button
              className={`${activeContainer === 1 ? "btnStyle-active" : "btnStyle"
                }`}
              onClick={() => handleClick(1)}
            >
              General Details
            </button>
            <button
              className={`${activeContainer === 2 ? "btnStyle-active" : "btnStyle"
                }`}
              onClick={() => handleClick(2)}
            >
              Applied Job
            </button>
            <button
              className={`${activeContainer === 3 ? "btnStyle-active" : "btnStyle"
                }`}
              onClick={() => handleClick(3)}
            >
              Instant Hired
            </button>
            <button
              className={`${activeContainer === 4 ? "btnStyle-active" : "btnStyle"
                }`}
              onClick={() => handleClick(4)}
            >
              Direct Hired
            </button>
            <button
              className={`${activeContainer === 5 ? "btnStyle-active" : "btnStyle"
                }`}
              onClick={() => handleClick(5)}
            >
              Wallet
            </button>
          </div>
          <div
            className="col-lg-11"
            style={{
              display: activeContainer === 1 ? "block" : "none",
              overflow: "auto",
            }}
          >
            <div className="row">
              <div className="col-lg-8">
                <div className="bg-white rounded shadow-sm p-3">
                  <h5 className="color">Manpower Details</h5>
                  <hr />
                  <div className="row">
                    <div className="col-lg-6">
                      {/* {manpowerData.name && ( */}
                        <>
                          <p><b>Manpower Name</b></p>
                          <p><b>Address</b></p>
                          <p><b>State</b></p>
                          <p><b>City</b></p>
                          <p><b>Pin Code</b></p>
                          <p><b>GST Number</b></p>
                          <p><b>Registration Number</b></p>
                        </>
                      {/* )} */}
                    </div>
                    <div className="col-lg-6">
                    {manpowerData ? (
                      <>
                        <p>{manpowerData.manpowerName || "N/A"}</p>
                        <p>{manpowerData.address || "N/A"}</p>
                        <p>{manpowerData.state || "N/A"}</p>
                        <p>{manpowerData.city || "N/A"}</p>
                        <p>{manpowerData.pinCode || "N/A"}</p>
                        <p>{manpowerData.gst || "N/A"}</p>
                        <p>{manpowerData.Registrationnumber || "N/A"}</p>
                      </>
                    ) : (
                      <p>Loading...</p>
                    )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="bg-white rounded shadow-sm p-3">
                  <div className="text-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      height={"100px"}
                      width={"100px"}
                      className="img-rounded-circle me-1"
                      alt="img"
                    />
                    <div>
                      Verified{" "}
                      <i className="bi bi-check-circle-fill text-success"></i>
                    </div>
                    <div>Amit kumar</div>
                  </div>
                  {/* <div className="d-flex justify-content-evenly">
                        <div className="border text-center rounded p-2">
                          <div>
                            {" "}
                            <b>200</b>
                          </div>
                          <span>Job Posted</span>
                        </div>
                        <div className="border text-center rounded p-2">
                          <div>
                            {" "}
                            <b>100</b>
                          </div>
                          <span>Job Hired</span>
                        </div>
                      </div> */}
                  <hr />
                  <div>
                    <div>
                      <i className="bi bi-telephone-fill text-success fs-5"></i>{" "}
                      8700282172
                    </div>
                    <div>
                      <i className="bi bi-envelope-fill color fs-5"></i>{" "}
                      ak7280032@gmail.com
                    </div>
                  </div>
                  <div className="text-center">
                    <button className="btn-danger btn btn-sm">InActive</button>
                  </div>
                </div>

                <div className="bg-white rounded shadow-sm p-3 my-3">
                  <div className="d-flex justify-content-between">
                    <div>Reviews(10)</div>
                    <div>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-half text-warning"></i>
                    </div>
                  </div>
                  <div
                    className="p-1 border rounded"
                    style={{ height: 150, overflow: "auto" }}
                  >
                    <div className="">
                      <div className="d-flex">
                        {" "}
                        <span>
                          <i className="bi bi-person fs-2"></i>
                        </span>{" "}
                        <span className="fs-5">Name</span>
                      </div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio, provident. Enim ipsum reprehenderit impedit aut
                      voluptate nam illo iste maxime? cscnsncwncdnini
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* post JOb */}
          <div
            className="col-lg-11 shadow-sm rounded bg-white"
            style={{
              display: activeContainer === 2 ? "block" : "none",
              overflow: "auto",
            }}
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
                  <td scope="col-table">S.NO</td>
                  <td scope="col-table">Job Title</td>
                  {/* <td scope="col-table">Participate</td> */}
                  <td scope="col-table">Date/Time</td>
                  <td scope="col-table">Status</td>
                  <td scope="col-table">View</td>
                  <td scope="col-table">Action</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1 </th>
                  <td>Plumber</td>

                  {/* <td>10</td> */}
                  <td>10-feb-2023</td>
                  <td>
                    <button className="status bg-success">active</button>
                  </td>
                  <td>
                    <Link to={"/mainPowerAppliedJob"}>
                      <button className="btn-sm btn btn-success"> View</button>
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
              </tbody>
            </table>
          </div>
          {/* Instant Hired */}
          <div
            className="col-lg-11 shadow-sm rounded bg-white"
            style={{
              display: activeContainer === 3 ? "block" : "none",
              overflow: "auto",
            }}
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
                  <td scope="col-table">S.NO</td>
                  <td scope="col-table">Job Title</td>
                  <td scope="col-table">Employee Name</td>
                  <td scope="col-table">Date/Time</td>
                  <td scope="col-table">Status</td>
                  <td scope="col-table">View</td>
                  <td scope="col-table">Action</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1 </th>
                  <td>Plumber</td>

                  <td>Amit Kumar</td>
                  <td>10-feb-2023</td>
                  <td>
                    <button className="status bg-success">active</button>
                  </td>
                  <td>
                    <Link to={"/manPowerInstantHired"}>
                      <button className="btn-sm btn btn-success"> View</button>
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
              </tbody>
            </table>
          </div>
          {/* direct hired */}
          <div
            className="col-lg-11 shadow-sm rounded bg-white"
            style={{
              display: activeContainer === 4 ? "block" : "none",
              overflow: "auto",
            }}
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
                  <td scope="col-table">S.NO</td>
                  <td scope="col-table">Job Title</td>
                  <td scope="col-table">Employee Name</td>
                  <td scope="col-table">Date/Time</td>
                  <td scope="col-table">Status</td>
                  {/* <td scope="col-table">View</td> */}
                  <td scope="col-table">Action</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1 </th>
                  <td>Plumber</td>

                  <td>Amit Kumar</td>
                  <td>10-feb-2023</td>
                  <td>
                    <button className="status bg-success">active</button>
                  </td>
                  <td>
                    <Link to={"/manPowerDirectHired"}>
                      <button className="btn-sm btn btn-success"> View</button>
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
              </tbody>
            </table>
          </div>
          {/* wallet */}
          <div
            className="col-lg-11 shadow-sm rounded bg-white"
            style={{
              display: activeContainer === 5 ? "block" : "none",
              overflow: "auto",
            }}
          >
            <div className="row justify-content-between p-4">
              <div className="text-center">
                <i className="bi bi-wallet-fill yellow fs-1"></i>
                <div>Total Blance</div>
                <h2>
                  {" "}
                  <i className="bi bi-currency-rupee"></i>
                  {"10000"}
                </h2>
              </div>
              <div className="">
                <div className="row d-flex justify-content-between">
                  <div className="col-lg-3">
                    <h5>History</h5>
                  </div>
                  <div className="col-lg-3">
                    <select name="" id="" className="form-control">
                      <option value="">Filter</option>
                      <option value="">date</option>
                      <option value="">month</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="my-2 p-2 rounded shadow-sm d-flex justify-content-between">
                <div>
                  <div className="">payment Name</div>
                  <div style={{ fontSize: "13px" }} className="text-secondary">
                    Today, 02:33 Pm
                  </div>
                </div>
                <div>
                  <div className="text-danger fw-bold mt-3">-1000</div>
                </div>
              </div>
              <div className="my-2 p-2 rounded shadow-sm d-flex justify-content-between">
                <div>
                  <div className="">payment Name</div>
                  <div style={{ fontSize: "13px" }} className="text-secondary">
                    Today, 02:33 Pm
                  </div>
                </div>
                <div>
                  <div className="text-success fw-bold mt-3">+1000</div>
                </div>
              </div>
              <div className="my-2 p-2 rounded shadow-sm d-flex justify-content-between">
                <div>
                  <div className="">payment Name</div>
                  <div style={{ fontSize: "13px" }} className="text-secondary">
                    Today, 02:33 Pm
                  </div>
                </div>
                <div>
                  <div className="text-danger fw-bold mt-3">-1000</div>
                </div>
              </div>
              <div className="my-2 p-2 rounded shadow-sm d-flex justify-content-between">
                <div>
                  <div className="">payment Name</div>
                  <div style={{ fontSize: "13px" }} className="text-secondary">
                    Today, 02:33 Pm
                  </div>
                </div>
                <div>
                  <div className="text-success fw-bold mt-3">+1000</div>
                </div>
              </div>
              <div className="my-2 p-2 rounded shadow-sm d-flex justify-content-between">
                <div>
                  <div className="">payment Name</div>
                  <div style={{ fontSize: "13px" }} className="text-secondary">
                    Today, 02:33 Pm
                  </div>
                </div>
                <div>
                  <div className="text-danger fw-bold mt-3">-1000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManPowerProfile;
