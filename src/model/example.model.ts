export class Example {
    private text: string;

    constructor(text?: string) {
        this.text = text ? text : '';
    }

    getText(): string {
        return this.text;
    }

    setText(text: string) {
        this.text = text;
    }
}