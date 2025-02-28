import mongoose from "mongoose";

const userDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  yearofjoin: {
    type: String,
  },
  phoneno: {
    type: String,
  },
  gender: {
    type: String,
  },
  education: {
    type: String,
  },
  designation: {
    type: String,
  },
  category: {
    type: String,
  },
  deptID: {
    type: String,
  },
  dob: {
    type: String,
  },
  research: {
    type: [String],
    default: [],
  },
  projects: {
    type: [String],
    default: [],
  },
  subjectstaught: {
    type: [String],
    default: [],
  },
  courseaddition: {
    type: [String],
    default: [],
  },
  teachingmethods: {
    type: [String],
    default: [],
  },
  percentage: {
    type: [String],
    default: [],
  },
  other: {
    type: [String],
    default: [],
  },
});

const userDataModel =
  mongoose.models.UserData || mongoose.model("UserData", userDataSchema);
export default userDataModel;
