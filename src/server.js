import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import Routes from './api/routes/Routes.js';
import MongoooseConnection from './config/mongoose.js';

const app = express();

MongoooseConnection.connect(app);

app.use(express.json());

app.use('/api', Routes);

app.on('DBon', () => {
  app.listen(3000, () => console.log('http://localhost:3000/'));
});

export default app;
