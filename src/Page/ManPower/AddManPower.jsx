import React, { useState } from "react";
import axios from "axios";
import baseUrl from "../../config";
import Navbar from "../Home/Navbar";
import { Link } from "react-router-dom";


function AddManPower({ userId }) {
  const [formData, setFormData] = useState({
    manpowerName: "",
    profilePicture: "",
    address: "",
    landmark: "",
    village: "",
    postOffice: "",
    pinCode: "",
    block: "",
    city: "",
    state: "",
    country: "",
    education: "",
    age: "",
    gender: "",
    dob: "",
    serviceLocation: "",
    experience: "",
    type: "",
    minSalary: "",
    maxSalary: "",
    category: "",
    skill: "",
    language: "",
    workingDays: "",
    workingHour: "",
    bio: "",
    panNumber: "",
    panImage: "",
    aNumber: "",
    aImage: "",
  });



  const [selectedWorkingDays, setSelectedWorkingDays] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedWorkingHours, setSelectedWorkingHours] = useState("");

  const handleProfilePictureUpload = (e) => {
    const selectedFile = e.target.files[0];
    const formData = new FormData();
    formData.append("profilePicture", selectedFile);

    axios.post(`${baseUrl}/api/v1/upload`, formData)
      .then((response) => {
        console.log("Upload Successful:", response.data);
        setFormData((prevData) => ({
          ...prevData,
          profilePicture: response.data.url,
        }));
      })
      .catch((error) => {
        console.error("Upload Error:", error);
      });
  };

  const handleFormSubmit = async (e) => {
    const userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6IjY0ZjAzZTA0M2Y1ZjhhN2ZjNzhjZTMzYiIsImlhdCI6MTY5MzQ4MDE1NH0.hJCc8KZ0nDgpP8KqZD0ntLWxAkUqltl4uuBgBfQQdJU";
    e.preventDefault();

    try {
      const response = await axios.post(
        `${baseUrl}/api/v1/manpower/registrationthroughAdmin`,
        {
          ...formData,
          workingDays: selectedWorkingDays,
          category: selectedCategory,
          skill: selectedSkill,
          language: selectedLanguage,
          WorkingHours: selectedWorkingHours,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      console.log("API Response:", response.data);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "workingDays") {
      setSelectedWorkingDays(value);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <div className="col-xl-10 bg mainContainer">
      <div className="row justify-content-center">
        <Navbar heading="Add ManPower" />
        <div className="col-lg-12 my-3">
          <h6 className="yellow">Personals Details</h6>
          <div className="rounded-2 shadow p-3 bg-white">
            <div className="row">
              <div className="col-lg-4 my-2">
                <label className="form-label">Full Name*</label>
                <input
                  required
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                  placeholder="fullName"
                  value={formData.manpowerName}
                  name="manpowerName"
                />
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">Upload Profile Picture*</label>
                <div className="input-group">
                  <input
                    required
                    onChange={handleInputChange}
                    type="url"
                    className="form-control"
                    value={formData.profilePicture}
                    placeholder="profile picture"
                  />
                  <label htmlFor="profilePicture" className="upload-label">
                    <img src="https://www.flaticon.com/free-icon/photo_685669.png" alt="Upload" className="upload-icon" /> Upload
                  </label>
                  <input
                    type="file"
                    id="profilePicture"
                    className="hidden-input"
                    accept="image/*"
                    onChange={handleProfilePictureUpload}
                  />
                </div>
              </div>
              {/* <div className="col-lg-4 my-2">
                  <label className="form-label">Address*</label>
                  <input
                    required
                    // onChange={handleChange}
                    onChange={handleInputChange}
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    value={formData.address}
                    name="address"
                  />
                </div> */}
              <div className="col-lg-4 my-2">
                <label className="form-label">Landmark*</label>
                <input
                  required
                  // onChange={handleChange}
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                  placeholder="Landmark"
                  value={formData.landmark}
                  name="landmark"
                />
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">Village*</label>
                <input
                  required
                  // onChange={handleChange}
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                  placeholder="Village"
                  value={formData.village}
                  name="village"
                />
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">Post Office*</label>
                <input
                  required
                  // onChange={handleChange}
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                  placeholder="Post Office"
                  value={formData.postOffice}
                  name="postOffice"
                />
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">pinCode*</label>
                <input
                  required
                  // onChange={handleChange}
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                  placeholder="pinCode"
                  value={formData.pinCode}
                  name="pinCode"
                />
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">Block*</label>
                <input
                  required
                  // onChange={handleChange}
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                  placeholder="Block"
                  value={formData.block}
                  name="block"
                />
              </div>
              <div className="col-lg-4">
                <label htmlFor="">City</label>
                <select name="" className="form-control" id="">
                  <option value="">Delhi</option>
                </select>
              </div>
              <div className="col-lg-4">
                <label htmlFor="">State</label>
                <select name="" className="form-control" id="">
                  <option value="">Delhi</option>
                </select>
              </div>
              {/* <CityList
                      name="state"
                      formData={Address.city}
                      handleInputChange={handleChange}
                    /> */}
              {/* <StateList
                      formData={Address.state}
                      name="city"
                      required
                      handleInputChange={handleChange}
                    /> */}
              <div className="col-lg-4 my-2">
                <label className="form-label">Country*</label>
                <select
                  name="country"
                  className="form-control"
                  // value={Address.country}
                  required
                  // onChange={handleChange}
                  onChange={handleInputChange}
                >
                  <option value="">select Country</option>
                  <option value="india">India</option>
                </select>
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">Education*</label>
                <select
                  className="form-control"
                  id=""
                // value={degree}
                // onChange={(e) => setDegree(e.target.value)}
                >
                  <option value="">select Education</option>
                  <option value="BCA">BCA</option>
                </select>
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">Passing Year*</label>
                <select
                  // value={yearOfPassing}
                  // onChange={(e) => setyearOfPassing(e.target.value)}
                  className="form-control"
                >
                  <option value="">select Year</option>
                  <option value="2010">2010</option>
                </select>
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">Age*</label>
                <input
                  required
                  // onChange={(e) => setAge(e.target.value)}
                  type="number"
                  className="form-control"
                  placeholder="Enter Your Age"
                // value={age}
                />
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">Gander*</label>
                <select
                  className="form-control"
                // value={gender}
                // onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">select Gander</option>
                  <option value="Male">Male</option>
                </select>
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">Date Of Birth*</label>
                <input
                  required
                  // onChange={(e) => setDob(e.target.value)}
                  type="date"
                  className="form-control"
                  placeholder="Enter Your DOB"
                // value={dob}
                />
              </div>
            </div>
          </div>
          {/* <div className="text-center">
              <button
                onClick={() => setStep(2)}
                className="btn button-style my-3"
              >
                Next
              </button>
            </div> */}
        </div>
        {/* )} */}

        {/* second */}
        {/* {step === 2 && ( */}
        <div className="col-lg-12 my-3">
          <h6 className="yellow">Work Details</h6>
          <div className="rounded-2 shadow p-3 bg-white">
            <div className="row">
              <div className="col-lg-4 my-2">
                <label className="form-label">location</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="Service Location"
                  value={formData.serviceLocation}
                  onChange={handleInputChange}
                  name="serviceLocation"
                />
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">Experience</label>
                <select
                  className="form-control"
                  value={formData.experience}
                  onChange={handleInputChange}
                  name="experience"
                >
                  <option value="fresher">Fresher</option>
                  <option value="1">1 Year</option>
                  <option value="2">2 Year</option>
                  <option value="2">above 5 Year</option>
                  <option value="2">blew 5 Year</option>
                </select>
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">Experience</label>
                <select
                  className="form-control"
                  value={formData.type}
                  onChange={handleInputChange}
                // name="type"
                >
                  <option value="type">type</option>
                  <option value="PartTime">Part Time</option>
                  <option value="FullTime">Full Time</option>
                </select>
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">Salary</label>
                <div className="input-group">
                  <input
                    required
                    type="number"
                    className="form-control"
                    placeholder="minimum Salary"
                    value={formData.minSalary}
                    onChange={handleInputChange}
                  //   value={minSalary}
                  //   onChange={(e) => setMinSalary(e.target.value)}
                  />
                  <input
                    required
                    type="number"
                    className="form-control"
                    placeholder="maximum Salary"
                    value={formData.maxSalary}
                    onChange={handleInputChange}
                  //   onChange={(e) => setMaxSalary(e.target.value)}
                  />
                </div>
              </div>
              {/* <Category formData={category} handleInputChange={setCategory} /> */}
              <div className="col-lg-4 my-2">
                <label className="form-label">Category</label>
                <select
                  className="form-control"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  name="category"
                >
                  <option value="type">Category</option>
                  <option value="PartTime">Plumber</option>
                  <option value="FullTime">Painter</option>
                </select>
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">Skill</label>
                <select
                  className="form-control"
                  value={selectedSkill}
                  onChange={(e) => setSelectedSkill(e.target.value)}
                  name="skill"
                >
                  <option value="type">Skill</option>
                  <option value="PartTime">Plumber</option>
                  <option value="FullTime">Painter</option>
                </select>
              </div>
              {/* <div className="col-lg-4 my-2">
                  <label className="form-label">Skill*</label>
                  <MultiSelect
                    options={Skills}
                    value={SkillSelected}
                    onChange={setSkillSelected}
                    labelledBy="Select"
                  />{" "}
                </div> */}
              {/* <div className="col-lg-4 my-2">
                  <label className="form-label">Speaking Language*</label>
                  <MultiSelect
                    options={Languages}
                    value={LanguageSelected}
                    onChange={setLanguageSelected}
                    labelledBy="Select"
                  />{" "}
                </div> */}
              <div className="col-lg-4 my-2">
                <label className="form-label">Language</label>
                <select
                  className="form-control"
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  name="language"
                >
                  <option value="type">Language</option>
                  <option value="PartTime">Hindi</option>
                  <option value="FullTime">English</option>
                </select>
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">working Days*</label>
                <select
                  className="form-control"
                  name="workingDays"
                  value={selectedWorkingDays}
                  onChange={handleInputChange}
                >
                  <option value="">Select working Days</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                </select>
              </div>
              {/* <div className="col-lg-4 my-2">
                  <label className="form-label">working Days*</label>
                  <MultiSelect
                    options={workingDays}
                    value={workingDaysSelected}
                    onChange={setWorkingDaysSelected}
                    labelledBy="Select"
                  />{" "}
                </div> */}
              {/* <div className="col-lg-4 my-2">
                  <label className="form-label">working Hour*</label>
                  <MultiSelect
                    options={workingHour}
                    value={workingHourSelected}
                    onChange={setWorkingHourSelected}
                    labelledBy="Select"
                  />{" "}
                </div> */}
              <div className="col-lg-4 my-2">
                <label className="form-label">working Hour</label>
                <select
                  className="form-control"
                  value={selectedLanguage}
                  onChange={(e) => setSelectedWorkingHours(e.target.value)}
                  name="language"
                >
                  <option value="type">working Hour</option>
                  <option value="PartTime">09:05</option>
                  <option value="FullTime">05:09</option>
                </select>
              </div>
              <div className="col-lg-12 my-2">
                <label className="form-label">Bio</label>
                <textarea
                  className="form-control"
                  placeholder="Write Description"
                  onChange={handleInputChange}
                  value={formData.bio}
                // onChange={(e) => setBio(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
          {/* <div className="text-center">
              <button
                onClick={() => setStep(1)}
                className="btn button-style my-3 mx-2"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="btn button-style my-3 mx-2"
              >
                Next
              </button>
            </div> */}
        </div>
        {/* )} */}

        {/* third */}
        {/* {step === 3 && ( */}
        <div className="col-lg-12 my-3">
          <h6 className="yellow">Documents</h6>
          <div className="rounded-2 shadow p-3 bg-white">
            <div className="row">
              <div className="col-lg-4 my-2">
                <label className="form-label">Pan card No.(Optional)</label>
                <input
                  required
                  // onChange={(e) => setPanNumber(e.target.value)}
                  onChange={handleInputChange}
                  value={formData.panNumber}
                  type="text"
                  className="form-control"
                  placeholder="pan card number"
                />
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">upload Image(pan card)</label>
                <input
                  required
                  // onChange={(e) => setPanImage(e.target.value)}
                  onChange={handleInputChange}
                  value={formData.panImage}
                  name="panImage"
                  type="url"
                  className="form-control"
                />
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">Aadhar No.*</label>
                <input
                  required
                  // onChange={(e) => setANumber(e.target.value)}
                  onChange={handleInputChange}
                  value={formData.aNumber}
                  type="text"
                  placeholder="adhar number"
                  className="form-control"
                />
              </div>
              <div className="col-lg-4 my-2">
                <label className="form-label">upload Image(Aadhar card)</label>
                <input
                  required
                  // onChange={(e) => setAImage(e.target.value)}
                  onChange={handleInputChange}
                  value={formData.aImage}
                  type="url"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="my-2">
            <p style={{ fontSize: "13px" }}>
              <input
                required
                type="checkbox"
                // checked={isChecked}
                // onChange={handleCheckboxChange}
                name=""
                id=""
                className=" input required Accent"
              />{" "}
              I Accept{" "}
              <span>
                <Link to={"/"} className="yellow">
                  Terms & Condition
                </Link>{" "}
              </span>
              And{" "}
              <span>
                <Link className="yellow" to={"/"}>
                  Privacy Policy*
                </Link>
              </span>
            </p>
            <div className="text-center">
              {/* <button
                  onClick={() => setStep(2)}
                  className="btn button-style my-3 mx-2"
                >
                  Back
                </button> */}
              {/* <button className="btnStyle">Post</button> */}
            </div>

            <div className="text-center">
              <button
                type="submit"
                onClick={handleFormSubmit}
                className="btnStyle"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default AddManPower;
