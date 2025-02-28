import { useEffect, useState } from "react";
import "./profile.css";

export default function Profile({ email, setcurrState, setUserData }) {
  // const [Name, setName] = useState(name);
  // const [Email, setEmail] = useState(email);
  // const [Phone, setPhone] = useState("");
  // const [yearofjoin, setYearofjoin] = useState("");
  // const [designation, setDesignation] = useState("");
  // const [deptID, setDeptID] = useState("");
  // const [dob, setDOB] = useState("");
  // const [gender, setGender] = useState("");
  // const [category, setCategory] = useState("");
  // const [education, setEducation] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    if (setcurrState) {
      fetchData();
    }
  }, [setcurrState]);

  const fetchData = async () => {
    try {
      const reponse = await fetch("http://localhost:8000/fetch-user-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await reponse.json();
      setData(data);
      setUserData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="profile">
      <div className="profile-form">
        <div className="profile-form-left">
          <p className="title">Self-Appraisal Form</p>
          <hr />
          <div className="info-inputs">
            <p>Name:</p>
            <p>{data.name}</p>
          </div>
          <div className="info-inputs">
            <p>Phone Number:</p>
            <p>{data.phoneno}</p>
          </div>
          <div className="info-inputs">
            <p>E-mail:</p>
            <p>{email}</p>
          </div>
          <div className="info-inputs">
            <p>Gender:</p>
            <p>{data.gender}</p>
          </div>
          <div className="info-inputs">
            <p>DOB:</p>
            <p>{data.dob}</p>
          </div>
          <div className="info-inputs">
            <p>Category:</p>
            <p>{data.category}</p>
          </div>
          <div className="info-inputs">
            <p>Education:</p>
            <p>{data.education}</p>
          </div>
          <div className="info-inputs">
            <p>Year of Joining:</p>
            <p>{data.yearofjoin}</p>
          </div>
          <div className="info-inputs">
            <p>Designation:</p>
            <p>{data.designation}</p>
          </div>
          <div className="info-inputs">
            <p>Department ID:</p>
            <p>{data.deptID}</p>
          </div>
          <hr />
          <div className="info-inputs">
            <p>Lectures Taken:</p>
            <p>32</p>
          </div>
          <div className="info-inputs">
            <p>Projects Led:</p>
            <p>7</p>
          </div>
          <div className="info-inputs">
            <p>Research Published:</p>
            <p>2</p>
          </div>
          <hr />
        </div>
        <div className="profile-form-right">
          <img
            src="https://img.freepik.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-friendly-smiling-office-manager-greeting-new-coworker-businesswoman-welcome-clients-with-hand-wave-hold-laptop_1258-59122.jpg"
            alt=""
            width="300px"
            className="profile-photo"
          />
        </div>
      </div>
    </div>
  );
}
