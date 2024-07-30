import express from 'express';
import router from './routes/book.route';

const app = express();

app.use(router);

export default app;
