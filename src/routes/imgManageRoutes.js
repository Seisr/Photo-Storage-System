import express from "express";
import {
  deleteImgById,
  getCreatedImgById,
  getInfoUser,
  getSavedImgById,
} from "../controller/imgManageControllers.js";

const imgManageRoutes = express.Router();

imgManageRoutes.get("/get-info-user", getInfoUser);
imgManageRoutes.get("/get-saved-img/:nguoi_dung_id", getSavedImgById);
imgManageRoutes.get("/get-created-img/:nguoi_dung_id", getCreatedImgById);
imgManageRoutes.delete("/delete-img/:imgId", deleteImgById);

export default imgManageRoutes;
