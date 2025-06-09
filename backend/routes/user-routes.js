import express from 'express';
import userController from '../controllers/user-controller.js';

const router = express.Router();

router.get("/", userController.getUsers);
router.post("/signup", userController.signUp);
router.post("/login", userController.loginUser);

export default router;