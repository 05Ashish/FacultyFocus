import AdminLoginStep, { Step } from "./adminloginstep";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AdminLoginStep
      initialStep={1}
      onStepChange={(step) => {
        console.log(step);
      }}
      onFinalStepCompleted={() => console.log("All steps completed!")}
      backButtonText="Previous"
      nextButtonText="Next"
      email={email}
      password={password}
    >
      <Step>
        <h4>ADMIN</h4>
        <h2>Welcome back to FacultyFocus!</h2>
        <p>Please enter your login credentials.</p>
        <p>
          New user?
          <Link to="/admin-register">
            <span> Create Account</span>
          </Link>
        </p>
      </Step>
      <Step>
        <h3>E-mail:</h3>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your E-mail"
        />
        <h3>Password:</h3>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your Password"
        />
      </Step>
      <Step>
        <h2>Welcome back!</h2>
        <p>Please continue with your journey.</p>
      </Step>
    </AdminLoginStep>
  );
}
