import { useEffect, useState } from "react";
import "./adminprofile.css";

export default function AdminProfile({ email, setcurrState, setAdminData }) {
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
      const reponse = await fetch("http://localhost:8000/fetch-admin-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await reponse.json();
      setData(data);
      setAdminData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="profile">
      <div className="profile-form">
        <div className="profile-form-left">
          <p className="title">Profile</p>
          <hr />
          <div className="info-inputs">
            <p>
              <strong>Name:</strong>
            </p>
            <p>{data.name}</p>
          </div>
          <div className="info-inputs">
            <p>
              <strong>E-mail:</strong>
            </p>
            <p>{email}</p>
          </div>
          <div className="info-inputs">
            <p>
              <strong>Phone Number:</strong>
            </p>
            <p>{data.phoneno}</p>
          </div>
          <div className="info-inputs">
            <p>
              <strong>Gender:</strong>
            </p>
            <p>{data.gender}</p>
            <p>
              <strong>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Date of Birth:
              </strong>
            </p>
            <p>{data.dob}</p>
          </div>
          <div className="info-inputs">
            <p>
              <strong>Category:</strong>
            </p>
            <p>{data.category}</p>
          </div>
          <div className="info-inputs">
            <p>
              <strong>Education:</strong>
            </p>
            <p>{data.education}</p>
            <p>
              <strong>
                &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;Designation:
              </strong>
            </p>
            <p>{data.designation}</p>
          </div>
          <div className="info-inputs">
            <p>
              <strong>Year of Joining:</strong>
            </p>
            <p>{data.yearofjoin}</p>
            <p>
              <strong>&emsp;&emsp;&emsp;Department ID:</strong>
            </p>
            <p>{data.deptID}</p>
          </div>
          <hr />
        </div>
        <div className="profile-form-right">
          <img
            src="http://static.vecteezy.com/system/resources/previews/050/445/793/non_2x/a-woman-in-a-business-suit-is-sitting-at-a-desk-with-a-computer-and-a-mouse-vector.jpg"
            alt=""
            width="300px"
            className="profile-photo"
          />
        </div>
      </div>
    </div>
  );
}
