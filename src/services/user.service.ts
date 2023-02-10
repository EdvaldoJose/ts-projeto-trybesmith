import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async create(userDate: User): Promise<User> {
    const createUser = await this.model.create(userDate);
    return createUser;
  }
}

export default UserService;
