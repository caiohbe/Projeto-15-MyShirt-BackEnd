import { getPurchases, postPurchases } from "../controllers/purchasesController.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";
import { validatePurchase } from "../middlewares/purchaseMiddleware.js";
import { Router } from "express";

const router = Router()

router.get("/purchases", validateToken, getPurchases)
router.post("/purchases", validateToken, validatePurchase, postPurchases)

export default router