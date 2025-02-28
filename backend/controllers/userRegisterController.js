import userModel from "../models/userRegisterModel.js";
import { setUserData } from "./userdataController.js";

export const registerData = async (req, res) => {
  console.log(req.body);
  const User = await new userModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    await User.save();
    setUserData(req, res);
    res.status(200).json({
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};
