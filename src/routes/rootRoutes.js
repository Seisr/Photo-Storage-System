import express from "express";
import homeRoutes from "./homeRoutes.js";
import detailRoutes from "./detailRoutes.js";
import imgManageRoutes from "./imgManageRoutes.js";
import uploadImgRoutes from "./uploadImgRoutes.js";
import authRoutes from "./authRoutes.js";

const rootRoutes = express.Router();

rootRoutes.use("/home", homeRoutes);
rootRoutes.use("/detail", detailRoutes);
rootRoutes.use("/imgManage", imgManageRoutes);
rootRoutes.use("/uploadImg", uploadImgRoutes);
rootRoutes.use("/auth", authRoutes);

export default rootRoutes;
