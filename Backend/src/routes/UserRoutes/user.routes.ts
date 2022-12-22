import express, { Request, Response } from "express";
import SignupController from "../../controller/user/signup.controller";
import LoginController from "../../controller/user/login.controller";
import userPasswordReset from "../../controller/user/userPasswordReset.controller";
import changePasswordController from "../../controller/user/changePassword.controller";
import authMiddleware from "../../middlewares/UserMiddleware/userAuth.middleware";

const router = express.Router();
router.use("/changepassword", authMiddleware);
router.use("/loggedUser", authMiddleware);

// Public Routes
router.get("/", (req, res) => {
  res.send("Working User Routes");
});

router.post("/register", SignupController.userRegistration);
router.post("/login", LoginController.userLogin);
router.post("/userPasswordReset", userPasswordReset.sendUserPasswordResetEmail);
router.post("/resetPassword/:id/:token", userPasswordReset.userPasswordReset);

// Private Routes
router.post("/changePassword", changePasswordController.changeUserPassword);
router.get("/loggedUser", LoginController.loggedUser);

export default router;
