import React, { useState, useEffect } from "react";
import Navbar from "../Home/Navbar";
import axios from "axios";
import baseUrl from "../../config";

function EmployeeVerification() {
  const [employerData, setEmployerData] = useState({});
  const [generalData, setGeneralData] = useState({});

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const fetchEmployeeData = async (employeeId) => {
    try {
      const response = await axios.put(
        `${baseUrl}api/v1/employer/update/Employer/${employeeId}`
      );
      const data = response.data.data;
      setEmployerData(data.employerData);
      setGeneralData(data.generalData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
        <div className="row justify-content-center">
          <Navbar heading="Employer Verification" />
          <div className="col-lg-11 text-end my-3">
            <button
              className="btn-cancel"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Cancel
            </button>
            <button className="btn-style">Verify</button>
          </div>
          <div className="col-lg-8">
            <div className="bg-white rounded shadow-sm p-3">
              <h5>General Details</h5>
              <hr />
              <div className="row">
                <div className="col-lg-6 col-6">
                  <p>
                    <b>Full Name</b>
                  </p>
                  <p>{generalData.fullName}</p>
                  <p>
                    <b>Address</b>
                  </p>
                  <p>{generalData.address}</p>
                  <p>
                    <b>Business Details</b>
                  </p>
                  <p>{generalData.explainYourWork}</p>
                  <p>
                    <b>Mobile Number</b>
                  </p>
                  <p>{generalData.mobile}</p>
                  <p>
                    <b>Aadhar Number</b>
                  </p>
                  <p>{generalData.aadharCard}</p>
                  <p>
                    <b>Email</b>
                  </p>
                  <p>{generalData.email}</p>
                  <p>
                    <b>Pan Number</b>
                  </p>
                  <p>{generalData.panCard}</p>
                </div>
              </div>
              <h5 className="color">Employer Details</h5>
              <hr />
              <div className="row">
                <div className="col-lg-6 col-6">
                  <p>
                    <b>Employer Name</b>
                  </p>
                  <p>{employerData.employerName}</p>
                  <p>
                    <b>Address</b>
                  </p>
                  <p>{employerData.address}</p>
                  <p>
                    <b>State</b>
                  </p>
                  <p>{employerData.state}</p>
                  <p>
                    <b>City</b>
                  </p>
                  <p>{employerData.city}</p>
                  <p>
                    <b>Pin Code</b>
                  </p>
                  <p>{employerData.pinCode}</p>
                  <p>
                    <b>GST Number</b>
                  </p>
                  <p>{employerData.GST_Number}</p>
                  <p>
                    <b>Registration Number</b>
                  </p>
                  <p>{employerData.registration_Number}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
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
                  Verified <i className="bi bi-x-circle text-danger"></i>
                </div>
                <p>Amit kumar</p>
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
            </div>
          </div>
        </div>
      </div>
      {/* form */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                WayForce
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div>
                <label htmlFor="">Enter Reason For Cancel</label>
                <input
                  type="text"
                  placeholder="Reason"
                  className="form-control"
                />
              </div>
              <div className="my-3">
                <label htmlFor="">Status</label>
                <select name="" id="" className="form-control">
                  <option value={false}>False</option>
                  <option value={true}>true</option>
                </select>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn-cancel" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn-style">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeVerification;
