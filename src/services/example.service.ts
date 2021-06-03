import { Example } from '../model/example.model';
import axios from 'axios';

export class ExampleService {
    private readonly text: Example;

    constructor() {
        this.text = new Example();
    }

    public readonly getExample = async (): Promise<string> => {
        return await this.text.getText();
    }

    public readonly setExample = (text: string) => {
        this.text.setText(text);
    }

    public readonly getRequest1 = async (): Promise<any> => {
        return await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
            .then(response => response.data)
            .catch(error => error);
    }

    public readonly getRequest2 = async (): Promise<any> => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
            return response.data;
        } catch (error) {
            return error;
        }
    }
}