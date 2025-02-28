import userDataModel from "../models/userdataModel.js";

export const setUserData = async (req, res) => {
  console.log(req.body);
  const UserData = await new userDataModel({
    name: req.body.name,
    email: req.body.email,
  });
  try {
    await UserData.save();
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
