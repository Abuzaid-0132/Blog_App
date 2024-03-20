import express from "express"; // Import express module.
import { signup } from "../controllers/auth.controller.js";

const router = router.express();

router.post("/signup", signup);

export default router;
