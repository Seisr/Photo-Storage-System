import express from "express";
import homeRoutes from "./homeRoutes.js";
import detailRoutes from "./detailRoutes.js";
import imgManageRoutes from "./imgManageRoutes.js";
import uploadImgRoutes from "./uploadImgRoutes.js";
import authRoutes from "./authRoutes.js";
import editUserRoutes from "./editUserRoutes.js";
import { lockApi } from "../config/jwt.js";

const rootRoutes = express.Router();

rootRoutes.use("/auth", authRoutes);
rootRoutes.use("/home", homeRoutes);
rootRoutes.use("/detail", detailRoutes);
rootRoutes.use("/imgManage", lockApi, imgManageRoutes);
rootRoutes.use("/uploadImg", lockApi, uploadImgRoutes);
rootRoutes.use("/editUser", lockApi, editUserRoutes);

export default rootRoutes;
