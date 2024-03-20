import express from "express"; // Import express module.
import { test } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test", test);

export default router;
