import express from "express";
import { editUser } from "../controller/editUserControllers.js";

const editUserRoutes = express.Router();

editUserRoutes.put("/edit", editUser);

export default editUserRoutes;
