"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const management_action_1 = require("./management-action");
class DeleteAction extends management_action_1.ManagementAction {
    constructor(argument) {
        super(argument);
    }
    doAction() {
        if (this.argument == null) {
            console.log("nothing to delete...");
        }
        else if (this.argument == "*") {
            this.todos.removeAll();
        }
        else if (!Number.isNaN(Number(this.argument))) {
            // if the argument can be parsed into a number
            let rowNumber = Number(this.argument);
            this.todos.removeAtRowNumber(rowNumber);
        }
        else {
            this.todos.remove(this.argument);
        }
        this.todos.commit();
        this.listAllTodos(false);
    }
}
exports.DeleteAction = DeleteAction;
//# sourceMappingURL=delete-action.js.map