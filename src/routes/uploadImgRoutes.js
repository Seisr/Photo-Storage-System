import express from "express";
import { createImg } from "../controller/uploadImgControllers.js";

const uploadImgRoutes = express.Router();

uploadImgRoutes.use("/create-img", createImg);

export default uploadImgRoutes;
