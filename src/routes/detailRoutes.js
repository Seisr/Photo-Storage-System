import express from "express";
import { getInfoImage } from "../controller/detailControllers.js";

const detailRoutes = express.Router();

detailRoutes.get("/get-info-image-by-id/:imgId", getInfoImage);

export default detailRoutes;
