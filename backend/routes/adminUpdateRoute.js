import express from "express";
import { adminUpdate } from "../controllers/adminUpdateController.js";
const adminUpdateRouter = express.Router();

adminUpdateRouter.post("/admin-update", adminUpdate);

export default adminUpdateRouter;
