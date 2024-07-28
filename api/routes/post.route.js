import express from "express";
import {
  createPost,
  deletepost,
  getPost,
  updatepost,
} from "../controllers/post.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/createPost", verifyToken, createPost);
router.get("/getPost", getPost);
router.delete("/deletePost/:postId/:userId", verifyToken, deletepost);
router.put("/updatePost/:postId/:userId", verifyToken, updatepost);

export default router;
