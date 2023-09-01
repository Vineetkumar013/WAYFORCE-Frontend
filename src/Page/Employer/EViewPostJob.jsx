import React from "react";
import Navbar from "../Home/Navbar";
import { Link } from "react-router-dom";

function EViewPostJob() {
  return (
    <>
      <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
        <div className="row justify-content-center">
          <Navbar heading="Post Jobs" />
          <div className="col-lg-12">
            <div className="bg-white rounded shadow-sm p-3">
              <div className="d-flex justify-content-end">
                <div>
                  <button
                    className="btn-cancel"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    close
                  </button>
                  <button className="btn-style">Inactive</button>
                </div>
              </div>
              <hr />
              <h5>Amit kumar</h5>
            <h6>work Details</h6>
            <p className="border p-3 rounded">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              necessitatibus, veniam ut soluta, accusamus et ipsa voluptas,
              magni fugit ad eum id aut. Natus repellendus officiis quia eius!
              Perferendis, voluptas!
            </p>     
           
            <h5>Employee Details</h5>
            <p>
              <b>workInfo :</b> job
            </p>
            <p>
              <b>category :</b> Plumber
            </p>
            <p>
              <b>num Of Openings :</b> numOfOpenings
            </p>
            <p>
              <b>minSalary :</b> 1400
            </p>
            <p>
              <b>maxSalary :</b> 1400
            </p>
            <p>
              <b>Language : </b> Hindi,English
            </p>
            <p>
              <b>skills : </b> plumber,carpenter
            </p>
            <p>
              <b>Type : </b> Full Time
            </p>
            <p> <b>Address</b> : Address</p>
            <p><b>Experience : </b> 6 Months , 5 Days </p>
            
            <h6>Amount Paid</h6>
            <p className="text-success">550000 Rs.</p>

              {/* accordian */}
              <div
                class="accordion accordion-flush my-3 border"
                id="accordionFlushExample"
              >
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Participates (10)
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col-table">S.NO</th>
                            <th scope="col-table">Name</th>
                            {/* <th scope="col-table">Status</th> */}
                            <th scope="col-table">Gender</th>
                            <th scope="col-table">Mobile</th>
                            {/* <th scope="col-table">Email</th> */}
                            <th scope="col-table">Apply Date</th>
                            <th scope="col-table">View</th>
                            <th scope="col-table">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              1{" "}
                              <span>
                                {" "}
                                
                              </span>
                            </th>
                            <td>Amit</td>
                            {/* <td>
                              <button className="status bg-success">
                                active
                              </button>
                            </td> */}
                            <td>Male</td>
                            <td>8700282172</td>
                            {/* <td>ak7280032@gmail.com</td> */}
                            <td>23-05-2023</td>
                            <td>
                              {/* <DropDown/> */}
                              <Link to="/appliedJobSinglePost">
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
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-3">
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
                  <div className="d-flex justify-content-evenly">
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
                  </div>
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
              </div> */}
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

export default EViewPostJob;
