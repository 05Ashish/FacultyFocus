import express from "express";
import { fetchUserData } from "../controllers/userDataFetchController.js";
const userFetchDataRoute = express.Router();

userFetchDataRoute.post("/fetch-user-data", fetchUserData);

export default userFetchDataRoute;
