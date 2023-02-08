import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import UserMiddleware from '../middlewares/userMiddleware';

const router = Router();

const loginController = new LoginController();
const userMiddleware = new UserMiddleware();

router.post('/Login', userMiddleware.login, loginController.login);

export default router;