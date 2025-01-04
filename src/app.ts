import express from 'express';
import { UserRouter } from './app/module/user/user.router';
import { TourRouter } from './app/module/tour/tour.router';
const app = express();

// ! middleware
app.use(express.json());

// ! application api
app.use('/api/user', UserRouter);
app.use('/api/tour', TourRouter);

app.get('/', (req, res) => {
  res.send({ message: 'Server is Live 🚩🏴‍☠️🚨⚡🔥', status: true, code: 200 });
});

export default app;
