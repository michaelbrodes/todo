"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_line_1 = require("./command-line");
const mode_1 = require("./mode");
const todo_management_1 = require("./todo-management");
const parser = new command_line_1.CommandParser(process.argv);
let action = null;
switch (parser.getSubCommand()) {
    case command_line_1.SubCommand.LIST:
        action = new todo_management_1.ListAction(parser.getArgument());
        break;
    case command_line_1.SubCommand.NEW:
        action = new todo_management_1.NewAction(parser.getArgument());
        break;
    case command_line_1.SubCommand.DELETE:
        action = new todo_management_1.DeleteAction(parser.getArgument());
        break;
    case command_line_1.SubCommand.LOCAL:
        action = new mode_1.MakeLocalAction(parser.getArgument());
        break;
    case command_line_1.SubCommand.GLOBAL:
        action = new mode_1.MakeGlobalAction();
        break;
    case command_line_1.SubCommand.MODE:
        action = new mode_1.DisplayModeAction();
        break;
    default:
        console.log("Sub command is not currently supported.");
        parser.showHelp();
        process.exit(1);
        break;
}
action.doAction();
//# sourceMappingURL=index.js.map