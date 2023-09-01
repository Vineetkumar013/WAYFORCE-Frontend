import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Home/Navbar";

function MainPowerAppliedJob() {
  return (
    <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
      <div className="row justify-content-center">
        <Navbar heading="MainPower Applied Job" />
        <div className="col-lg-12">
          <div className="bg-white rounded shadow-sm p-3">
            
            <hr />
            <h5>Amit kumar  <button className="status bg-success">Active</button> </h5>
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
            <p>
              {" "}
              <b>Address</b> : Address
            </p>
            <p>
              <b>Experience : </b> 6 Months , 5 Days{" "}
            </p>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default MainPowerAppliedJob;
