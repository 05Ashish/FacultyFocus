import adminDataModel from "../models/admindataModel.js";

export const adminUpdate = async (req, res) => {
  console.log(req.body);
  const Admin = await adminDataModel.findOne({
    email: req.body.email,
  });
  if (Admin) {
    Admin.yearofjoin = req.body.yearofjoin;
    Admin.phoneno = req.body.phoneno;
    Admin.gender = req.body.gender;
    Admin.education = req.body.education;
    Admin.category = req.body.category;
    Admin.designation = req.body.designation;
    Admin.deptID = req.body.deptID;
    Admin.dob = req.body.dob;
    console.log(Admin.yearofjoin);
    Admin.save();
    return res.status(200).json({
      success: true,
    });
  }
  return res.status(400).json({
    success: false,
  });
};
