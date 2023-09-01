import React from "react";
import Navbar from "./Home/Navbar";
function PostView() {
  return (
    <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
      <div className="row justify-content-center">
        <Navbar heading="View Post" />
        <div className="col-lg-10 my-2">
          <div className="bg-white rounded shadow-sm p-3">
            <div className="d-flex justify-content-between">
              <div>Project ID</div>
              <div>
              <button className="btn btn-warning mx-1">Edit</button>
                <button className="btn btn-danger">Hold</button>
                <button className="btn-style">Verify</button>
              </div>
            </div>
            {/* <h6>Carpenter</h6>
            <p className="color">
              <i className="bi bi-currency-rupee"></i>14000 -{" "}
              <i className="bi bi-currency-rupee"></i>25000
            </p> */}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostView;
