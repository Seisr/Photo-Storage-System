import express from "express";
import { login, signUp } from "../controller/authControllers.js";

const authRoutes = express.Router();

authRoutes.post("/login", login);
authRoutes.post("/sign-up", signUp);

export default authRoutes;
