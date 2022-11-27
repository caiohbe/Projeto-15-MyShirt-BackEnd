import { postPurchases } from "../controllers/purchasesController.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";
import { Router } from "express";

const router = Router()

router.post("/purchases", validateToken, postPurchases)

export default router