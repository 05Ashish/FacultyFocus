import adminDataModel from "../models/admindataModel.js";

export const setAdminData = async (req, res) => {
  console.log(req.body);
  const AdminData = await new adminDataModel({
    name: req.body.name,
    email: req.body.email,
  });
  try {
    await AdminData.save();
    // res.status(200).json({
    //   success: true,
    // });
  } catch (err) {
    // res.status(400).json({
    //   success: false,
    //   error: err,
    // });
  }
};
