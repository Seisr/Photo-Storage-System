import express from "express";
import homeRoutes from "./homeRoutes.js";
import detailRoutes from "./detailRoutes.js";
import imgManageRoutes from "./imgManageRoutes.js";

const rootRoutes = express.Router();

rootRoutes.use("/home", homeRoutes);
rootRoutes.use("/detail", detailRoutes);
rootRoutes.use("/imgManage", imgManageRoutes);

export default rootRoutes;
