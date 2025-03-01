import Stepi, { Step } from "./step";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Stepi
      initialStep={1}
      onStepChange={(step) => {
        console.log(step);
      }}
      onFinalStepCompleted={() => console.log("All steps completed!")}
      backButtonText="Previous"
      nextButtonText="Next"
      name={name}
      email={email}
      password={password}
    >
      <Step>
        <h2>Welcome to FacultyFocus!</h2>
        <p>Become a part of our Faculty Family!</p>
        <p>
          Existing user?
          <Link to="/login">
            <span> Login</span>
          </Link>
        </p>
      </Step>
      <Step>
        <h3>Name:</h3>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />
        <h3>E-mail:</h3>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your E-mail"
          type="email"
        />
        <h3>Password:</h3>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your Password"
        />
      </Step>
      <Step>
        <h2>All done!</h2>
        <p>You are now a part of our faculty family.</p>
      </Step>
    </Stepi>
  );
}
