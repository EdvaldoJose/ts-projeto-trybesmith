import express from 'express';
import ProductsRouters from './routes/products.routes';
import UsersRoutes from './routes/users.routes';
import OrdersRoutes from './routes/orders.routes';
import LoginsRoutes from './routes/logins.routes';

const app = express();

app.use(express.json());

app.use(ProductsRouters);
app.use(UsersRoutes);
app.use(OrdersRoutes);
app.use(LoginsRoutes);

export default app;
