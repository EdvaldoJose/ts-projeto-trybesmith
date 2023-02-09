import express from 'express';
import ProductRouters from './routes/products.routes';
import UsersRoutes from './routes/users.routes';
import OrdersRoutes from './routes/orders.routes';
import LoginRoutes from './routes/login.routes';

const app = express();

app.use(express.json());

app.use(ProductRouters);
app.use(UsersRoutes);
app.use(OrdersRoutes);
app.use(LoginRoutes);

export default app;
