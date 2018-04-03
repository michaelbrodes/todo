"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const todo_table_1 = require("./todo-table");
const config_1 = require("../mode/config");
const GLOBAL_TODO = './todo.txt';
class ManagementAction {
    constructor(parserArgument) {
        this.argument = parserArgument;
        this.appConfig = this.parseConfig();
        if (this.appConfig.storageMode.mode == "local") {
            this.todos = new todo_table_1.TodoTable(this.appConfig.storageMode.file);
        }
        else {
            this.todos = new todo_table_1.TodoTable(GLOBAL_TODO);
        }
    }
    parseConfig() {
        let config = fs.readFileSync(config_1.CONFIG_LOCATION, "UTF-8");
        return JSON.parse(config);
    }
    listAllTodos(ascendingOrder) {
        let outputTodos = null;
        if (ascendingOrder) {
            outputTodos = this.todos.getTodos().reverse();
        }
        else {
            outputTodos = this.todos.getTodos();
        }
        if (outputTodos.length == 0) {
            console.log("no current todos...");
        }
        else {
            for (let todo of outputTodos) {
                console.log(`${todo.getRow()}:\t ${todo.getMessage()}`);
            }
        }
    }
}
exports.ManagementAction = ManagementAction;
//# sourceMappingURL=management-action.js.map