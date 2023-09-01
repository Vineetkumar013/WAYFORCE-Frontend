import { React, useState, useEffect } from "react";
import Navbar from "../Home/Navbar";
import "./Employer.css";
import { Link, useParams } from "react-router-dom";
import baseUrl from "../../config";
import axios from "axios";

function EmployerProfile() {
  const [activeContainer, setActiveContainer] = useState(1);
  const [employerData, setEmployerData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fetch data from the API
    // axios.get("http://localhost:8080/api/v1/employer/64e6f3844f56a5a15b379010")
    axios
      .get(`${baseUrl}/api/v1/employer/${id}`)
      .then((response) => {
        setEmployerData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  const handleClick = (containerNumber) => {
    setActiveContainer(containerNumber);
  };

  // Render loading state while fetching data
  if (!employerData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
        <div className="row justify-content-center">
          <Navbar heading="Employer Profile" />
          <div className="col-lg-11 my-2">
            <button
              className={`${
                activeContainer === 1 ? "btnStyle-active" : "btnStyle"
              }`}
              onClick={() => handleClick(1)}
            >
              General Details
            </button>
            <button
              className={`${
                activeContainer === 2 ? "btnStyle-active" : "btnStyle"
              }`}
              onClick={() => handleClick(2)}
            >
              Post Job
            </button>
            <button
              className={`${
                activeContainer === 3 ? "btnStyle-active" : "btnStyle"
              }`}
              onClick={() => handleClick(3)}
            >
              Instant Hired
            </button>
            <button
              className={`${
                activeContainer === 4 ? "btnStyle-active" : "btnStyle"
              }`}
              onClick={() => handleClick(4)}
            >
              Direct Hired
            </button>
            <button
              className={`${
                activeContainer === 5 ? "btnStyle-active" : "btnStyle"
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
                  <h5>General Details</h5>
                  <hr />
                  <div className="row">
                    <div className="col-lg-6">
                      <p>
                        <b>Full Name</b>
                      </p>
                      <p>
                        <b>Address</b>
                      </p>
                      <p>
                        <b>Category</b>
                      </p>
                      <p>
                        <b>Business Details</b>
                      </p>
                      <p>
                        <b>MObile Number</b>
                      </p>
                      <p>
                        <b>Aadhar Number</b>
                      </p>
                      <p>
                        <b>Email</b>
                      </p>
                      <p>
                        <b>Pan Number</b>
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <p>{employerData?.employerName || "N/A"}</p>
                      <p>{employerData?.siteLocation || "N/A"}</p>
                      <p>{employerData?.category || "N/A"}</p>
                      <p>{employerData?.job_desc || "N/A"}</p>
                      <p>{employerData?.mobile || "N/A"}</p>
                      <p>{employerData?.aadharCard || "N/A"}</p>
                      <p>{employerData?.email || "N/A"}</p>
                      <p>{employerData?.panCard || "N/A"}</p>
                    </div>
                  </div>
                  <h5 className="color">Employer Details</h5>
                  <hr />
                  <div className="row">
                    <div className="col-lg-6">
                      <p>
                        <b>Employer Name</b>
                      </p>
                      <p>
                        <b>Address</b>
                      </p>
                      <p>
                        <b>State</b>
                      </p>
                      <p>
                        <b>City</b>
                      </p>
                      <p>
                        <b>Pin Code</b>
                      </p>
                      <p>
                        <b>GST Number</b>
                      </p>
                      <p>
                        <b>Registration Number</b>
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <p>{employerData?.employerName || "N/A"}</p>
                      <p>{employerData?.siteLocation || "N/A"}</p>
                      <p>{employerData?.state || "N/A"}</p>
                      <p>{employerData?.city || "N/A" || "N/A"}</p>
                      <p>{employerData?.pinCode || "N/A"}</p>
                      <p>{employerData?.GST_Number || "N/A"}</p>
                      <p>{employerData?.registration_Number || "N/A"}</p>
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
                  <td scope="col-table">Participate</td>
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

                  <td>10</td>
                  <td>10-feb-2023</td>
                  <td>
                    <button className="status bg-success">active</button>
                  </td>
                  <td>
                    <Link to={"/eViewPostJob"}>
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
                    <Link to={"/employerInstantHireView"}>
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
                <tr>
                  <th scope="row">1 </th>
                  <td>Plumber</td>

                  <td>Amit Kumar</td>
                  <td>10-feb-2023</td>
                  <td>
                    <button className="status bg-danger">close</button>
                  </td>
                  <td>
                    <Link to={"/employerInstantHireView"}>
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
                  <th scope="col-table">S.NO</th>
                  <th scope="col-table">Job Title</th>
                  <th scope="col-table">Manpower</th>
                  <th scope="col-table">Booking Date</th>
                  <th scope="col-table">Work Date</th>
                  <th scope="col-table">Status</th>
                  <th scope="col-table">View</th>
                  <th scope="col-table">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1 </th>
                  <td>Plumber</td>
                  <td>Amit Kumar</td>
                  <td>10-feb-2023</td>
                  <td>10-feb-2023</td>
                  <td>
                    <button className="status bg-success">active</button>
                  </td>
                  <td>
                    <Link to={"/employerDircetHireView"}>
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
                <tr>
                  <th scope="row">1 </th>
                  <td>Plumber</td>

                  <td>Amit Kumar</td>
                  <td>10-feb-2023</td>
                  <td>10-feb-2023</td>
                  <td>
                    <button className="status bg-warning">schedule</button>
                  </td>
                  <td>
                    <Link to={"/appliedJobSinglePost"}>
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
        </div>
      </div>
    </>
  );
}

export default EmployerProfile;
