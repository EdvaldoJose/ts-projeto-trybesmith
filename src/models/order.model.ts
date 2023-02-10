import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const result = await this.connection.execute(`SELECT ord.id,
    ord.user_id, JSON_ARRAYAGG(pro.id) as productsIds FROM Trybesmith
      .orders as ord INNER JOIN Trybesmith.products as pro ON ord
      .id = pro.orderId GROUP BY ord.id ORDER BY ord.user_id`);

    const [rows] = result;
    return rows as Order[];
  }
}