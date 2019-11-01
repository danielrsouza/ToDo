export default class TodoClass {
    constructor(text) {
        this.text = text;
        this.id = Math.random().toString();
    }
}
