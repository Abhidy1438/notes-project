import express, { Router } from "express";
import { checkAuth } from "../middlewares/auth.middleware.js";
import { userController } from "../controllers/user.controller.js";

const userRouter = express.Router();

// userRouter.method(route, handler);
userRouter.route("/").get(checkAuth, userController.readOne);

//

export { userRouter };
