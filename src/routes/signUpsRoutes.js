import { postSignIn, postSignUp } from "../controllers/signUpController.js";
import { Router } from "express"
import { validateSignIn } from "../middlewares/signInMiddleware.js";
import { validateSignUp } from "../middlewares/signUpMiddleware.js";

const router = Router()

router.post("/sign-up", validateSignUp, postSignUp)
router.post("/sign-in", validateSignIn, postSignIn)

export default router