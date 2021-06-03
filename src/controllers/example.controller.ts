import { ExampleService } from '../services/example.service';

export class ExampleController {

    private readonly exampleService: ExampleService;

    constructor() {
        this.exampleService = new ExampleService();
    }

    public readonly getExample = async (request: any, response: any): Promise<Response> => {

        const text = await this.exampleService.getExample();

        return response.status(200).send(text);
    }

    public readonly setExample = (request: any, response: any): Promise<Response> => {
        this.exampleService.setExample('Hello');
        return response.status(201).send('Created..');
    }

    public readonly getExampleRequest = async (request: any, response: any): Promise<Response> => {
        const json = await this.exampleService.getRequest1();
        console.log(json)
        return response.status(200).send(json);
    }
}