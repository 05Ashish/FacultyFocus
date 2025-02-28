import userDataModel from "../models/userdataModel.js";

export const userUpdate = async (req, res) => {
  console.log(req.body);
  const User = await userDataModel.findOne({
    email: req.body.email,
  });
  if (User) {
    User.yearofjoin = req.body.yearofjoin;
    User.phoneno = req.body.phoneno;
    User.gender = req.body.gender;
    User.education = req.body.education;
    User.category = req.body.category;
    User.designation = req.body.designation;
    User.deptID = req.body.deptID;
    User.dob = req.body.dob;
    console.log(User.yearofjoin);
    User.save();
    return res.status(200).json({
      success: true,
    });
  }
  return res.status(400).json({
    success: false,
  });
};
