import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Home/Navbar";
import { Link } from "react-router-dom";
import baseUrl from "../../config";

function Employer() {
  const [employerData, setEmployerData] = useState([]);
  const [editEmployer, setEditEmployer] = useState({
    id: "",
    name: "",
  });

  const fetchEmployerData = async () => {
    try {
      const apiUrl = `${baseUrl}/api/v1/employer/getAll`;
      const response = await axios.get(apiUrl);
      setEmployerData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchEmployerData();
  }, []);

  const editEmployerData = async () => {
    try {
      await axios.put(`${baseUrl}/api/v1/employer/update/Employer/${editEmployer.id}`, {
        employerName: editEmployer.name,
      });
      setEditEmployer({ id: "", name: "" });
      fetchEmployerData();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEmployer = async (id) => {
    try {
      await axios.delete(`${baseUrl}/api/v1/employer/${id}`);
      fetchEmployerData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-xl-10 bg">
      <div className="row justify-content-center">
        <Navbar heading="Employer" />

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
            <span>Add Employer</span>
             <Link to="/AddEmployer"><button className='btn-sm btn-success btn'> <i className='bi bi-plus'></i> Add</button></Link> 
            </div>
            <div className="col-lg-2 py-2">
            <span>Import Data</span>
             <Link to="/AddEmployer"><button className='btn-sm btn-success btn'> <i className='bi bi-plus'></i> Import</button></Link> 
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
                <th scope="col-table">Status</th>
                <th scope="col-table">Gender</th>
                <th scope="col-table">Mobile</th>
                <th scope="col-table">Email</th>
                <th scope="col-table">Join Date</th>
                <th scope="col-table">View</th>
                <th scope="col-table">Action</th>
              </tr>
            </thead>
            <tbody>
              {employerData.length > 0 ? (
                employerData.map((employer, index) => {
                  const formattedDate = employer.createdAt.split("T")[0];
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{employer.employerName}</td>
                      <td>{employer.active === "true" ? "Active" : "Inactive"}</td>
                      {/* ... Map other fields accordingly ... */}
                      <td>{employer.gender}</td>
                      <td>{employer.mobile}</td>
                      <td>{employer.email}</td>
                      <td>{formattedDate}</td>
                      <td>
                        {/* <DropDown /> */}
                        <Link to={`/employerProfile/${employer._id}`}>
                          <i className="bi bi-eye-fill text-success fs-5"></i>
                        </Link>
                      </td>
                      <td className="d-flex justify-content-evenly cursor">
                        <div>
                          <i
                            className="bi bi-pencil-square text-warning fs-5"
                            onClick={() =>
                              setEditEmployer({
                                id: employer._id,
                                name: employer.employerName,
                              })
                            }
                            data-bs-toggle="modal"
                            data-bs-target="#editModal"
                          ></i>
                        </div>
                        <div>
                          <i
                            className="bi bi-archive text-danger fs-5"
                            onClick={() => deleteEmployer(employer._id)}
                            data-bs-toggle="modal"
                            data-bs-target={`#deleteModal${employer._id}`}
                          ></i>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="9">Loading.....</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div
          className="modal fade"
          id="editModal"
          tabIndex="-1"
          aria-labelledby="editModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editModalLabel">
                  Edit Employer
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {/* Form to edit employer details */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter New Name"
                  onChange={(e) =>
                    setEditEmployer({ ...editEmployer, name: e.target.value })
                  }
                  value={editEmployer.name}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                  onClick={editEmployerData}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>

        {employerData.map((employer) => (
          <div
            key={employer._id}
            className="modal fade"
            id={`deleteModal${employer._id}`}
            tabIndex="-1"
            aria-labelledby={`deleteModalLabel${employer._id}`}
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id={`deleteModalLabel${employer._id}`}>
                    Delete Employer
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  Are you sure you want to delete the employer:{" "}
                  <strong>{employer.employerName}</strong>?
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                    onClick={() => {
                      const shouldDelete = window.confirm(
                        `Are you sure you want to delete ${employer.employerName}?`
                      );
                      if (shouldDelete) {
                        deleteEmployer(employer._id);
                      }
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="col-lg-11 my-3">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <p>
              Showing 1 to {employerData.length} of {employerData.length}{" "}
              Employers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employer;
