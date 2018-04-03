"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const todo_table_1 = require("./todo-table");
const CONFIG_FILE = './todo-config.json';
const GLOBAL_TODO = './todo.txt';
/**
 * Creates a new Todo and adds it to the top of the current todo file. If in
 * local mode then the todo file will be the storageMode.file setting in the
 * todo-config file, otherwise the todo file will be ./todo.txt
 */
function createTodo(message) {
    let config = parseConfig();
    let table = null;
    if (config.storageMode.mode == "local") {
        table = new todo_table_1.TodoTable(config.storageMode.file);
    }
    else {
        table = new todo_table_1.TodoTable(GLOBAL_TODO);
    }
    console.log(`adding todo "${message}" to "${config.storageMode.file}"`);
    if (message != null) {
        table.addTodo(message);
    }
    else {
        console.log("nothing to add...");
    }
    table.commit();
}
exports.createTodo = createTodo;
/**
 * loads in the JSON file representing the current todo config.
 */
function parseConfig() {
    let config = fs.readFileSync(CONFIG_FILE, "UTF-8");
    return JSON.parse(config);
}
//# sourceMappingURL=management-actions.js.map