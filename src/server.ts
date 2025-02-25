import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import productRoutes from './routes/productRoutes';
import categoryRoutes from './routes/categoryRoutes';
import errorHandler from './utils/errorHandler';
import connectDB from './config/database';

const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

connectDB();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});