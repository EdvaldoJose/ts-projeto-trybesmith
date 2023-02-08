import express from 'express';
import ProductRouters from './routes/products.routes';
import LoginRoutes from './routes/login.routes';

const app = express();

app.use(express.json());

app.use(ProductRouters);

app.use(LoginRoutes);

export default app;
