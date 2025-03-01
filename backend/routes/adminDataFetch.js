import express from "express";
import { fetchAdminData } from "../controllers/adminDataFetchController.js";
const adminFetchDataRoute = express.Router();

adminFetchDataRoute.post("/fetch-admin-data", fetchAdminData);

export default adminFetchDataRoute;
