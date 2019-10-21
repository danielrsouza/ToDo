export default class Todo {
    constructor(description) {
        this.description = description;
        this.id = Math.random().toString();
    }
}