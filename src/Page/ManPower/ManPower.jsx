import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Home/Navbar";
import { Link } from "react-router-dom";
import baseUrl from "../../config";

function ManPower() {
  const [manpowerData, setManpowerData] = useState([]);
  const [editManpower, setEditManpower] = useState({
    id: "",
    name: "",
  });

  const fetchManpowerData = async () => {
    try {
      const apiUrl = `${baseUrl}/api/v1/manpower`;
      const response = await axios.get(apiUrl);
      setManpowerData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchManpowerData();
  }, []);

  const editManpowerData = async () => {
    try {
      await axios.put(`${baseUrl}/api/v1/manpower/fill/details/${editManpower.id}`, {
        manpowerName: editManpower.name,
      });
      setEditManpower({ id:"", name: "" });
      fetchManpowerData();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteManpower = async (id) => {
    try {
      await axios.delete(`${baseUrl}/api/v1/manpower/delete/${id}`);
      fetchManpowerData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-xl-10 bg">
      <div className="row justify-content-center">
        <Navbar heading="Manpower" />

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
            <span>Add Manpower</span>
             <Link to="/AddManPower"><button className='btn-sm btn-success btn'> <i className='bi bi-plus'></i> Add</button></Link> 
            </div>
            <div className="col-lg-2 py-2">
            <span>Import Data</span>
             <Link to="/AddManPower"><button className='btn-sm btn-success btn'> <i className='bi bi-plus'></i> Import</button></Link> 
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
              {manpowerData.length > 0 ? (
                manpowerData.map((manpower, index) => {
                  const formattedDate = manpower.createdAt.split("T")[0];
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{manpower.manpowerName}</td>
                      <td>{manpower.active === "true" ? "Active" : "Inactive"}</td>
                      {/* ... Map other fields accordingly ... */}
                      <td>{manpower.gender}</td>
                      <td>{manpower.mobile}</td>
                      <td>{manpower.email}</td>
                      <td>{formattedDate}</td>
                      <td>
                        {/* <DropDown /> */}
                        <Link to={`/manPowerProfile/${manpower._id}`}>
                          <i className="bi bi-eye-fill text-success fs-5"></i>
                        </Link>
                      </td>
                      <td className="d-flex justify-content-evenly cursor">
                        <div>
                          <i
                            className="bi bi-pencil-square text-warning fs-5"
                            onClick={() =>
                              setEditManpower({
                                id: manpower._id,
                                name: manpower.manpowerName,
                              })
                            }
                            data-bs-toggle="modal"
                            data-bs-target="#editModal"
                          ></i>
                        </div>
                        <div>
                          <i
                            className="bi bi-archive text-danger fs-5"
                            onClick={() => deleteManpower(manpower._id)}
                            data-bs-toggle="modal"
                            data-bs-target={`#deleteModal${manpower._id}`}
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
                  Edit Manpower
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
                    setEditManpower({ ...editManpower, name: e.target.value })
                  }
                  value={editManpower.name}
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
                  onClick={editManpowerData}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>

        {manpowerData.map((manpower) => (
          <div
            key={manpower._id}
            className="modal fade"
            id={`deleteModal${manpower._id}`}
            tabIndex="-1"
            aria-labelledby={`deleteModalLabel${manpower._id}`}
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id={`deleteModalLabel${manpower._id}`}>
                    Delete Manpower
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  Are you sure you want to delete the manpower:{" "}
                  <strong>{manpower.manpowerName}</strong>?
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
                        `Are you sure you want to delete ${manpower.manpowerName}?`
                      );
                      if (shouldDelete) {
                        deleteManpower(manpower._id);
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
              Showing 1 to {manpowerData.length} of {manpowerData.length}{" "}
              Manpowers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManPower;
