import userDataModel from "../models/userdataModel.js";

export const userAddDataEntry = async (req, res) => {
  console.log(req.body);
  const field = req.body.field;
  const heading = req.body.heading;
  const User = await userDataModel.findOne({
    email: req.body.email,
  });
  if (!User) {
    return res.status(400).json({ success: false, message: "User not found" });
  }
  if (!Array.isArray(User[field])) {
    User[field] = [];
  }
  if (!User[field].includes(heading)) {
    User[field].push(heading);
  } else {
    return res
      .status(400)
      .json({ success: false, message: "Entry already exists" });
  }
  await User.save();
  return res.status(200).json({
    success: true,
    message: "Entry added successfully",
    user: User,
  });
};
