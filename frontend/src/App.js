import "./App.css";
import Navbar from "./components/navbar/navbar";
import CircularGallery from "./components/gallery/gallery";
import { useRef, useState } from "react";
import VariableProximity from "./components/heading/heading";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/signin/signin";
import SignUp from "./pages/signup/signup";
import AdminLogin from "./pages/admin/adminlogin";
import AdminRegister from "./pages/admin/adminregister";
import Dashboard from "./pages/dashboard/dashboard";
import Features from "./components/features/features";
import Reviews from "./components/reviews/reviews";
import Footer from "./components/footer/footer";
import Portal from "./pages/portal/portal";

export default function App() {
  const containerRef = useRef(null);
  const [FullNav, showFullNav] = useState(true);

  return (
    <div className="App">
      <Router>
        <Navbar FullNav={FullNav} showFullNav={showFullNav} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div
                  className="main-heading"
                  ref={containerRef}
                  style={{ position: "relative" }}
                >
                  <VariableProximity
                    label={
                      "Streamlining Faculty Self-Appraisal & Career Progression"
                    }
                    className={"variable-proximity-demo"}
                    fromFontVariationSettings="'wght' 400, 'opsz' 9"
                    toFontVariationSettings="'wght' 1000, 'opsz' 40"
                    containerRef={containerRef}
                    radius={100}
                    falloff="linear"
                  />
                </div>
                <div style={{ height: "600px", position: "relative" }}>
                  <CircularGallery
                    bend={3}
                    textColor="#ffffff"
                    borderRadius={0.05}
                  />
                </div>
                <VariableProximity
                  label={"Why Choose Us?"}
                  className={"variable-proximity-demo"}
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={containerRef}
                  radius={100}
                  falloff="linear"
                />
                <Features />
                <div style={{ height: "600px", position: "relative" }}>
                  <Reviews
                    baseWidth={300}
                    autoplay={true}
                    autoplayDelay={3000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
                  />
                </div>
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-register" element={<AdminRegister />} />
          <Route
            path="/dashboard/*"
            element={<Dashboard FullNav={FullNav} showFullNav={showFullNav} />}
          />
          <Route
            path="/admin-portal/*"
            element={<Portal FullNav={FullNav} showFullNav={showFullNav} />}
          />
        </Routes>
      </Router>
    </div>
  );
}
