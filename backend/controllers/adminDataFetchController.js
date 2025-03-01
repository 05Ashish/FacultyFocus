import adminDataModel from "../models/admindataModel.js";

export const fetchAdminData = async (req, res) => {
  console.log(req.body);
  const Admin = await adminDataModel.findOne({
    email: req.body.email,
  });
  if (Admin) {
    return res.status(200).json({
      name: Admin.name,
      email: Admin.email,
      yearofjoin: Admin.yearofjoin,
      phoneno: Admin.phoneno,
      gender: Admin.gender,
      education: Admin.education,
      designation: Admin.designation,
      category: Admin.category,
      deptID: Admin.deptID,
      dob: Admin.dob,
    });
  }
  return res.status(400).json({
    success: false,
    message: "database entry not found",
  });
};
