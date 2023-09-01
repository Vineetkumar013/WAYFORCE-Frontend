import React, { useState, useEffect } from "react";
import Navbar from "./Home/Navbar";
import { Link } from "react-router-dom";
import baseUrl from "../config";
import axios from "axios";

function PostQuery() {
  const [postData, setPostData] = useState([]);
  
  useEffect(() => {
    const apiUrl = `${baseUrl}/api/v1/employer/getAll`;
    
    axios.get(apiUrl)
      .then(response => setPostData(response.data.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
      <div className="row justify-content-center">
        <Navbar heading="Post Verification" />
        {/* <div className="col-lg-4 my-2">
          <div className="bg-white rounded shadow-sm p-3">
            <div className="d-flex justify-content-between">
              <div>abc</div>
              <div>
                <button
                  className="btn btn-success btn-sm"
                  style={{ fontSize: "10px" }}
                >
                  Active
                </button>
                <button
                  className="btn btn-danger btn-sm mx-1"
                  style={{ fontSize: "10px" }}
                >
                  Delete
                </button>
              </div>
            </div>
            <h6>Carpenter</h6>
            <p className="color">
              <i className="bi bi-currency-rupee"></i>14000 -{" "}
              <i className="bi bi-currency-rupee"></i>25000
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore,
              suscipit?
            </p>
            <div>
              <span>
                <i className="bi bi-geo-alt"></i> New Delhi
              </span>{" "}
              <span>
                <i className="bi bi-clock"></i> Full Time
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 my-2">
          <div className="bg-white rounded shadow-sm p-3">
            <div className="d-flex justify-content-between">
              <div>abc</div>
              <div>
                <button
                  className="btn btn-success btn-sm"
                  style={{ fontSize: "10px" }}
                >
                  Active
                </button>
                <button
                  className="btn btn-danger btn-sm mx-1"
                  style={{ fontSize: "10px" }}
                >
                  Delete
                </button>
              </div>
            </div>
            <h6>Carpenter</h6>
            <p className="color">
              <i className="bi bi-currency-rupee"></i>14000 -{" "}
              <i className="bi bi-currency-rupee"></i>25000
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore,
              suscipit?
            </p>
            <div>
              <span>
                <i className="bi bi-geo-alt"></i> New Delhi
              </span>{" "}
              <span>
                <i className="bi bi-clock"></i> Full Time
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 my-2">
          <div className="bg-white rounded shadow-sm p-3">
            <div className="d-flex justify-content-between">
              <div>abc</div>
              <div>
                <button
                  className="btn btn-success btn-sm"
                  style={{ fontSize: "10px" }}
                >
                  Active
                </button>
                <button
                  className="btn btn-danger btn-sm mx-1"
                  style={{ fontSize: "10px" }}
                >
                  Delete
                </button>
              </div>
            </div>
            <h6>Carpenter</h6>
            <p className="color">
              <i className="bi bi-currency-rupee"></i>14000 -{" "}
              <i className="bi bi-currency-rupee"></i>25000
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore,
              suscipit?
            </p>
            <div>
              <span>
                <i className="bi bi-geo-alt"></i> New Delhi
              </span>{" "}
              <span>
                <i className="bi bi-clock"></i> Full Time
              </span>
            </div>
          </div>
        </div>   */}
       <div className="col-lg-11 bg-white rounded">
          <h6 className="p-2">Total Pendings ({postData.length})</h6>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">S.NO</th>
                <th scope="col">Employer Name</th>
                <th scope="col">Category</th>
                <th scope="col">Date</th>
                <th scope="col">num of Opening</th>
                <th scope="col">Status</th>
                <th scope="col">View</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {postData.map((post, index) => (
                <tr key={post._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{post.employerName}</td>
                  {/* <td>{post.obj[0].category}</td> */}
                  {/* <td>{post.obj[0].date}</td> */}
                  {/* <td>{post.obj[0].no_Of_opening}</td> */}
                  <td>
                    <button className={`status bg-${post.status === 'pending' ? 'warning' : 'success'}`}>
                      {post.status}
                    </button>
                  </td>
                  <td>
                    <Link to={`/postView/${post._id}`}>
                      <i className="bi bi-eye-fill text-success"></i>
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PostQuery;