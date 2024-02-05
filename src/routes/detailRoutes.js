import express from "express";
import {
  getImgIsSaved,
  getInfoComment,
  getInfoImage,
  saveComment,
} from "../controller/detailControllers.js";

const detailRoutes = express.Router();

detailRoutes.get("/get-info-image-by-id/:imgId", getInfoImage);
detailRoutes.get("/get-info-comment-by-id/:imgId", getInfoComment);
detailRoutes.get("/get-image-is-saved/:imgId", getImgIsSaved);
detailRoutes.post("/save-comment", saveComment);

export default detailRoutes;
