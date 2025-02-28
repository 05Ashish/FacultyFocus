import express from "express";
import { registerData } from "../controllers/userRegisterController.js";
// import { setUserData } from "../controllers/userdataController.js";
const userRegisterRouter = express.Router();

// userRegisterRouter.post("/user-signup", registerData);
userRegisterRouter.post("/user-signup", registerData);

export default userRegisterRouter;
