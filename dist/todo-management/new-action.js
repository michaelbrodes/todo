"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const management_action_1 = require("./management-action");
class NewAction extends management_action_1.ManagementAction {
    constructor(parserArgument) {
        super(parserArgument);
    }
    doAction() {
        if (this.argument != null) {
            this.todos.addTodo(this.argument);
        }
        else {
            console.log("nothing to add...");
        }
        this.todos.commit();
        this.listAllTodos(false);
    }
}
exports.NewAction = NewAction;
//# sourceMappingURL=new-action.js.map