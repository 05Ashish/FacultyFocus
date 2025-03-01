import mongoose from "mongoose";

const adminDataSchema = new mongoose.Schema({
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
});

const adminDataModel =
  mongoose.models.AdminData || mongoose.model("AdminData", adminDataSchema);
export default adminDataModel;
