import react from "react";
import { useState } from "react";
import Profile from "../../components/profile/profile";
import Settings from "../../components/settings/settings";
import MenuUsage from "../../components/menu/menuusage";
import PdfDownload from "../../components/pdf/pdf";
import Entry from "../../components/entry/entry";
import Attendance from "../../components/chart/attendancechart";
import "./dashboard.css";

export default function Dashboard({ FullNav, showFullNav }) {
  const [currState, setcurrState] = useState("Profile");
  const [userData, setUserData] = useState([]);
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get("email");
  console.log(email);
  return (
    <div className="dashboard">
      {currState === "Profile" ? (
        <Profile
          email={email}
          setcurrState={setcurrState}
          setUserData={setUserData}
        />
      ) : currState === "Settings" ? (
        <Settings
          email={email}
          setcurrState={setcurrState}
          userData={userData}
        />
      ) : currState === "Download" ? (
        <PdfDownload userData={userData} />
      ) : currState === "Add New Entry" ? (
        <Entry
          userData={userData}
          setUserData={setUserData}
          setcurrState={setcurrState}
        />
      ) : currState === "Performance" ? (
        <>
          <Attendance />
        </>
      ) : (
        <></>
      )}
      <MenuUsage
        setcurrState={setcurrState}
        FullNav={FullNav}
        showFullNav={showFullNav}
      />
    </div>
  );
}
