import { Router } from 'express';
import UserController from '../controllers/user.controller';
import UsernameMiddleware from '../middlewares/usernameMiddleware';
import VocationMiddleware from '../middlewares/vocationMiddleware';
import LevelMiddleware from '../middlewares/levelMiddleware';
import PasswordMiddleware from '../middlewares/passwordMiddleware';

const router = Router();

const userController = new UserController();
const usernameMiddleware = new UsernameMiddleware();
const vocationMiddleware = new VocationMiddleware();
const levelMiddleware = new LevelMiddleware();
const passwordMiddleware = new PasswordMiddleware();

router.post(
  '/users',
  usernameMiddleware.username,
  vocationMiddleware.vocation,
  levelMiddleware.level,
  passwordMiddleware.password,
  userController.create,
);

export default router;