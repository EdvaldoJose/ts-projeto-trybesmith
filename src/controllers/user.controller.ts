// import { log } from 'console';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserService from '../services/user.service';

const JWT_SECRET = 'senha_secreta';

class UsersController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public create = async (req: Request, res: Response) => {
    const { username, vocation, level, password } = req.body;
    console.log(req.body);
    const token = jwt.sign({ username, vocation, level, password }, JWT_SECRET, {
      expiresIn: '1d',
    });

    await this.userService.create({ username, vocation, level, password });
    return res.status(201).json({ token });
  };
}

export default UsersController;