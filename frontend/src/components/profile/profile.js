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
          <div className="info-inputs">
            <p>
              <strong>Research:</strong>
            </p>
            {data.research && Array.isArray(data.research) ? (
              <p style={{ whiteSpace: "pre-line" }}>
                {data.research.join("\n")}
              </p>
            ) : (
              <p>{data.research}</p>
            )}
          </div>
          <div className="info-inputs">
            <p>
              <strong>Projects Led:</strong>
            </p>
            {data.projects && Array.isArray(data.projects) ? (
              <p style={{ whiteSpace: "pre-line" }}>
                {data.projects.join("\n")}
              </p>
            ) : (
              <p>{data.projects}</p>
            )}
          </div>
          <div className="info-inputs">
            <p>
              <strong>Subjects Taught:</strong>
            </p>
            {data.subjectstaught && Array.isArray(data.subjectstaught) ? (
              <p style={{ whiteSpace: "pre-line" }}>
                {data.subjectstaught.join("\n")}
              </p>
            ) : (
              <p>{data.subjectstaught}</p>
            )}
          </div>
          <div className="info-inputs">
            <p>
              <strong>Addition in course:</strong>
            </p>
            {data.courseaddition && Array.isArray(data.courseaddition) ? (
              <p style={{ whiteSpace: "pre-line" }}>
                {data.courseaddition.join("\n")}
              </p>
            ) : (
              <p>{data.courseaddition}</p>
            )}
          </div>
          <div className="info-inputs">
            <p>
              <strong>Teaching method adopted:</strong>
            </p>
            {data.teachingmethods && Array.isArray(data.teachingmethods) ? (
              <p style={{ whiteSpace: "pre-line" }}>
                {data.teachingmethods.join("\n")}
              </p>
            ) : (
              <p>{data.teachingmethods}</p>
            )}
          </div>
          <div className="info-inputs">
            <p>
              <strong>Avg Percentage of your class:</strong>
            </p>
            {data.percentage && Array.isArray(data.percentage) ? (
              <p style={{ whiteSpace: "pre-line" }}>
                {data.percentage.join("\n")}
              </p>
            ) : (
              <p>{data.percentage}</p>
            )}
          </div>
          <div className="info-inputs">
            <p>
              <strong>Any other Achievements:</strong>
            </p>
            {data.other && Array.isArray(data.other) ? (
              <p style={{ whiteSpace: "pre-line" }}>{data.other.join("\n")}</p>
            ) : (
              <p>{data.other}</p>
            )}
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
