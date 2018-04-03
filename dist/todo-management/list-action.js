"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const management_action_1 = require("./management-action");
class ListAction extends management_action_1.ManagementAction {
    constructor(argument) {
        super(argument);
    }
    doAction() {
        if (this.argument == "reverse") {
            this.listAllTodos(true);
        }
        else {
            this.listAllTodos(false);
        }
    }
}
exports.ListAction = ListAction;
//# sourceMappingURL=list-action.js.map