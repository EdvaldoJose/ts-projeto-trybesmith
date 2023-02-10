import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(userDate: User): Promise<User> {
    const { username, vocation, level, password } = userDate;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...userDate };
  }
}