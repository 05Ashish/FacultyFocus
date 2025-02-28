import { useState } from "react";
import "./settings.css";

export default function Settings({ email, setcurrState, userData }) {
  const [phoneno, setPhoneNo] = useState(userData.phoneno);
  const [dob, setDOB] = useState(userData.dob);
  const [designation, setDesignation] = useState(userData.designation);
  const [education, setEducation] = useState(userData.education);
  const [gender, setGender] = useState(userData.gender);
  const [category, setCategory] = useState(userData.category);
  const [yearofjoin, setYearofjoin] = useState(userData.yearofjoin);
  const [deptID, setDeptID] = useState(userData.deptID);

  const handleSubmit = async () => {
    await fetch("http://localhost:8000/user-update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        yearofjoin: yearofjoin,
        phoneno: phoneno,
        gender: gender,
        education: education,
        designation: designation,
        category: category,
        deptID: deptID,
        dob: dob,
      }),
    });
    setcurrState("Profile");
  };

  return (
    <div className="settings">
      <form className="settings-form">
        <div className="settings-form-left">
          <p className="title">Profile Details</p>
          <div className="info-inputs">
            <input
              type="text"
              placeholder="Phone Number"
              onChange={(e) => setPhoneNo(e.target.value)}
            />
            <input
              type="text"
              placeholder="DD/MM/YY"
              onChange={(e) => setDOB(e.target.value)}
            />
          </div>
          <div className="info-inputs">
            <input
              type="text"
              placeholder="Designation"
              onChange={(e) => setDesignation(e.target.value)}
            />
          </div>
          <div className="info-inputs">
            <input
              type="text"
              placeholder="Educational Qualification"
              onChange={(e) => setEducation(e.target.value)}
            />
          </div>
          <div className="info-inputs">
            <input
              type="text"
              placeholder="Gender"
              onChange={(e) => setGender(e.target.value)}
            />
            <input
              type="text"
              placeholder="Category"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="info-inputs">
            <input
              type="text"
              placeholder="Year of Joining"
              onChange={(e) => {
                console.log(yearofjoin);
                setYearofjoin(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Department ID"
              onChange={(e) => setDeptID(e.target.value)}
            />
          </div>
        </div>
        <div className="settings-form-right">
          <img
            src="https://img.freepik.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-friendly-smiling-office-manager-greeting-new-coworker-businesswoman-welcome-clients-with-hand-wave-hold-laptop_1258-59122.jpg"
            alt=""
            width="300px"
            className="profile-photo"
          />
          <button>Edit Picture</button>
        </div>
      </form>
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
}
