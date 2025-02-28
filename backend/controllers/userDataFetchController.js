import userDataModel from "../models/userdataModel.js";

export const fetchUserData = async (req, res) => {
  console.log(req.body);
  const User = await userDataModel.findOne({
    email: req.body.email,
  });
  if (User) {
    return res.status(200).json({
      name: User.name,
      email: User.email,
      yearofjoin: User.yearofjoin,
      phoneno: User.phoneno,
      gender: User.gender,
      education: User.education,
      designation: User.designation,
      category: User.category,
      deptID: User.deptID,
      dob: User.dob,
      research: User.research,
      projects: User.projects,
      subjectstaught: User.subjectstaught,
      courseaddition: User.courseaddition,
      teachingmethods: User.teachingmethods,
      percentage: User.percentage,
      other: User.other,
    });
  }
  return res.status(400).json({
    success: false,
    message: "database entry not found",
  });
};
