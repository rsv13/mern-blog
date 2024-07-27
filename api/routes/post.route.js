import express from "express";
import { createPost } from "../controllers/post.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/createPost", verifyToken, createPost);

export default router;
