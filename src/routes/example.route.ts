import express from 'express';

import { ExampleController } from '../controllers/example.controller';
// import { ExampleSchema } from '../schemas/example.schema';
// import { validate } from '../utils/validade';

const exampleController = new ExampleController();

export const ExampleRouter =  express.Router();

ExampleRouter.get(
    `/example`,
    exampleController.getExample
);

ExampleRouter.post(
    `/example`,
    // validate(ExampleSchema.post, 'body'),
    exampleController.setExample
);

ExampleRouter.get(
    `/example/request`,
    exampleController.getExampleRequest
)