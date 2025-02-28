import express from "express";
import { userAddDataEntry } from "../controllers/userAddEntryController.js";

const userAddEntryRouter = express.Router();

userAddEntryRouter.post("/user-add-entry", userAddDataEntry);

export default userAddEntryRouter;
