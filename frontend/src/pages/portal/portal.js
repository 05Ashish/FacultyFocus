import react from "react";
import { useState } from "react";
import AdminProfile from "../../components/adminprofile/adminprofile";
import AdminSettings from "../../components/adminsettings/adminsettings";
import OptionsUsage from "../../components/options/optionsusage";
import AdminAnalytics from "../../components/adminanalytics/adminanalytics";
import "./portal.css";

export default function Portal({ FullNav, showFullNav }) {
  const [currState, setcurrState] = useState("Profile");
  const [adminData, setAdminData] = useState([]);
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get("email");
  console.log(email);
  return (
    <div className="portal">
      {currState === "Profile" ? (
        <AdminProfile
          email={email}
          setcurrState={setcurrState}
          setAdminData={setAdminData}
        />
      ) : currState === "Settings" ? (
        <AdminSettings
          email={email}
          setcurrState={setcurrState}
          adminData={adminData}
        />
      ) : currState === "Performance" ? (
        <>
          <AdminAnalytics />
        </>
      ) : (
        <></>
      )}
      <OptionsUsage
        setcurrState={setcurrState}
        FullNav={FullNav}
        showFullNav={showFullNav}
      />
    </div>
  );
}
