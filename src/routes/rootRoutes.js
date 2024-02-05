import express from "express";
import homeRoutes from "./homeRoutes.js";
import detailRoutes from "./detailRoutes.js";

const rootRoutes = express.Router();

rootRoutes.use("/home", homeRoutes);
rootRoutes.use("/detail", detailRoutes);

export default rootRoutes;
