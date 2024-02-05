import express from "express";
import {
  getImgIsSaved,
  getInfoComment,
  getInfoImage,
} from "../controller/detailControllers.js";

const detailRoutes = express.Router();

detailRoutes.get("/get-info-image-by-id/:imgId", getInfoImage);
detailRoutes.get("/get-info-comment-by-id/:imgId", getInfoComment);
detailRoutes.get("/get-image-is-saved/:imgId", getImgIsSaved);

export default detailRoutes;
