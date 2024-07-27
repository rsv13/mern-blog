import express from "express";
import { createPost, getPost } from "../controllers/post.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/createPost", verifyToken, createPost);
router.get("/getPost", getPost);

export default router;
