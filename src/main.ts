import express from 'express';

import { ExampleRouter } from './routes/example.route';
import { config } from './config/default';

const app = express();

app.use(express.json());

const router = express.Router();

router.use(ExampleRouter);

app.use(router);

app.listen(config.app.port, ()=>console.log("Serve is running.."));