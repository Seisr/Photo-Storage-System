import express from "express";
import { getInfoUser } from "../controller/imgManageControllers.js";

const imgManageRoutes = express.Router();

imgManageRoutes.get("/get-info-user", getInfoUser);

export default imgManageRoutes;
