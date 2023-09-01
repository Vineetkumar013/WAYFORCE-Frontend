import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Home/Navbar';

function ManPowerInstantHired() {
  return (
    <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
        <div className="row justify-content-center">
          <Navbar heading="Direct Hired" />
          <div className="col-lg-8">
            <div className="bg-white rounded shadow-sm p-3">
            <button className="status bg-success">Active</button>   
              <h5 className="color">Booking Details</h5>
              <hr />
              <div className="row">
                <div className="col-lg-6 col-6">
                    <p> <b> Job title </b></p>
                    <p>
                    <b>Date</b>
                  </p>
                  <p><b>Booking Time / Close Time</b></p>
                <p>
                    <b>Address</b>
                  </p>
                  <p>
                    <b>Site Location</b>
                  </p>
                  <p>
                    <b>Time Duration</b>
                  </p>
                 
                  <p>
                    <b>Work Amount</b>
                  </p>
                  <p>
                    <b>payment Mode</b>
                  </p>
                </div>
                <div className="col-lg-6 col-6">
                    <p>job title</p>
                    <p>Date</p>
                    <p>11:12 / 11:12</p>
                <p>House No. 100 , Vaishali</p>
                  <p><a href="https://goo.gl/maps/12KaX8urFEVimKmK7" target="_blank">site Location</a></p>
                  <p>10 Hours</p>
                  <p>100000 Rs.</p>
                  <p>Online</p>
                </div>
              </div>
              <div className="row">
                <h5>Work image</h5>
                <div className="col-lg-4 my-2">
                  <img src="https://www.newsclick.in/sites/default/files/styles/amp_1200x675_16_9/public/2018-01/ILO%20Report%20Indian%20Workers.jpg?itok=gs-CSW6q" className="img-fluid rounded" alt="work image" />
                </div>
                <div className="col-lg-4 my-2">
                  <img src="https://www.newsclick.in/sites/default/files/styles/amp_1200x675_16_9/public/2018-01/ILO%20Report%20Indian%20Workers.jpg?itok=gs-CSW6q" className="img-fluid rounded" alt="work image" />
                </div>
                <div className="col-lg-4 my-2">
                  <img src="https://www.newsclick.in/sites/default/files/styles/amp_1200x675_16_9/public/2018-01/ILO%20Report%20Indian%20Workers.jpg?itok=gs-CSW6q" className="img-fluid rounded" alt="work image" />
                </div>
                <div className="col-lg-4 my-2">
                  <img src="https://www.newsclick.in/sites/default/files/styles/amp_1200x675_16_9/public/2018-01/ILO%20Report%20Indian%20Workers.jpg?itok=gs-CSW6q" className="img-fluid rounded" alt="work image" />
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
                  Verified <i className="bi bi-check-circle text-success"></i>
                </div>
                <div className="color">Amit kumar</div>
                <div>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-half text-warning"></i>
                </div>

                <p>
                  <Link to="/manPowerProfile">Visit Profile</Link>
                </p>
              </div>
              <hr />
              <div>
                <div>
                  <i className="bi bi-grid text-secondary fs-5"></i>{" "}
                  Carpenter
                </div>
                <div>
                  <i className="bi bi-telephone-fill text-success fs-5"></i>{" "}
                  8700282172
                </div>
              </div>
            </div>
            <div className="bg-white rounded shadow-sm p-3 my-2">
              <div className="text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  height={"100px"}
                  width={"100px"}
                  className="img-rounded-circle me-1"
                  alt="img"
                />
                <div>
                  Verified <i className="bi bi-check-circle text-success"></i>
                </div>
                <div className="color">Amit kumar</div>
                <div>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-half text-warning"></i>
                </div>

                <p>
                  <Link to="/manPowerProfile">Visit Profile</Link>
                </p>
              </div>
              <hr />
              <div>
                {/* <div>
                  <i className="bi bi-grid text-secondary fs-5"></i>{" "}
                  Carpenter
                </div> */}
                <div>
                  <i className="bi bi-telephone-fill text-success fs-5"></i>{" "}
                  8700282172
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ManPowerInstantHired