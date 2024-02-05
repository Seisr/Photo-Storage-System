import express from "express";
import { getImage } from "../controller/homeController.js";

const homeRoutes = express.Router();

homeRoutes.get("/get-image/:page/:size", getImage);

export default homeRoutes;
