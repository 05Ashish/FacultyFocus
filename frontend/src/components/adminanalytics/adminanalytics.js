import React from "react";
import { motion } from "framer-motion";
import {
  Chart,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  BarElement,
  Tooltip,
} from "chart.js";
import "./adminanalytics.css";

// Register necessary Chart.js components
// Chart.register(LineElement, PointElement, LinearScale, CategoryScale);
// Chart.register(BarElement, LinearScale, CategoryScale, Tooltip);

const users = [
  { name: "Olivia Martin", email: "m@example.com", access: "Can edit" },
  { name: "Isabella Nguyen", email: "b@example.com", access: "Can view" },
  { name: "Sofia Davis", email: "p@example.com", access: "Can view" },
  { name: "Olivia Martin", email: "m@example.com", access: "Can edit" },
  { name: "Isabella Nguyen", email: "b@example.com", access: "Can view" },
  { name: "Sofia Davis", email: "p@example.com", access: "Can view" },
];
export default function Attendance() {
  return (
    <div className="chart-div">
      <motion.div
        className="share-box"
        initial={{ opacity: 0, y: -50, scale: 0.9, rotateX: 45 }}
        animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="share-header">
          <h2>Faculty Members</h2>
          <p>Keep complete track of your department!</p>
        </div>

        <div className="share-user-list">
          {users.map((user, index) => (
            <motion.div
              key={index}
              className="share-user-card"
              initial={{ opacity: 0, x: -50, rotateY: 90 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="share-user-avatar">
                <span>{user.name[0]}</span>
              </div>
              <div className="share-user-info">
                <h4>{user.name}</h4>
                <p>{user.email}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
