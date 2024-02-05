import express from "express";
import {
  getInfoComment,
  getInfoImage,
} from "../controller/detailControllers.js";

const detailRoutes = express.Router();

detailRoutes.get("/get-info-image-by-id/:imgId", getInfoImage);
detailRoutes.get("/get-info-comment-by-id/:imgId", getInfoComment);

export default detailRoutes;
