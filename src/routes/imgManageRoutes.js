import express from "express";
import {
  getInfoUser,
  getSavedImgById,
} from "../controller/imgManageControllers.js";

const imgManageRoutes = express.Router();

imgManageRoutes.get("/get-info-user", getInfoUser);
imgManageRoutes.get("/get-saved-img/:nguoi_dung_id", getSavedImgById);

export default imgManageRoutes;
