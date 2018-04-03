"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A Todo in the todo file. A todo has a row number (its line in the todo file),
 * a message (what we want to do), and the date that the to do was created.
 */
class Todo {
    constructor(row, message, created) {
        this.row = row;
        this.message = message;
        this.created = created;
    }
    getRow() {
        return this.row;
    }
    getMessage() {
        return this.message;
    }
    getCreated() {
        return this.created;
    }
}
exports.Todo = Todo;
//# sourceMappingURL=todo.js.map