import express from "express";
import homeRoutes from "./homeRoutes.js";

const rootRoutes = express.Router();

rootRoutes.use("/home", homeRoutes);

export default rootRoutes;
