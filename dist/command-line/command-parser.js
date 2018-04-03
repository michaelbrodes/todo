"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sub_command_1 = require("./sub-command");
// these are the indices of the various command line arguments
const NODE = 0;
const PROGRAM = 1;
const SUB_COMMAND = 2;
const SUB_COMMAND_ARGUMENT = 3;
// the amount of arguments required in order to run the application
const REQUIRED_ARGUMENTS = 2;
// the total amount of allowed arguments 
const ALL_ARGUMENTS = 4;
class CommandParser {
    constructor(argv) {
        if (argv.length < REQUIRED_ARGUMENTS
            || argv.length > ALL_ARGUMENTS
            || argv[SUB_COMMAND] == "help") {
            this.showHelp();
            process.exit(0);
        }
        else if (argv.length == REQUIRED_ARGUMENTS) {
            // we didn't really recieve a subcommand so we should just list
            this.subCommand = sub_command_1.SubCommand.LIST;
            this.subCommandArgument = null;
        }
        this.parseCommand(argv[SUB_COMMAND], argv.length > 3 ? argv[SUB_COMMAND_ARGUMENT] : null);
    }
    showHelp() {
        console.log("todo: a command line utility that manages todo files.\n");
        console.log("USAGE: todo sub-command sub-command-argument");
        console.log("SUB COMMANDS:");
        console.log("\thelp - show this message");
        console.log("\tlist - list the contents of the todo file we are currently using.");
        console.log("\t       Each todo is in reverse chronological order. use the `reverse` ");
        console.log("\t       sub command argument for chronological order\n");
        console.log("\tnew *message* - log a new todo with the supplied message\m");
        console.log("\tdelete *message* - delete the todo matching the supplied message\n");
        console.log("\tdelete *row-number* - delete the todo with the matching row number ");
        console.log("\t                      (based on the output of `list`)\n");
        console.log("\tlocal-mode *filename* - start logging todos at the specified file location\m");
        console.log("\tglobal-mode - start logging at the global todo file");
        console.log("\tmode - display which mode we are currently in");
    }
    getSubCommand() {
        return this.subCommand;
    }
    getArgument() {
        return this.subCommandArgument;
    }
    parseCommand(subCommand, subCommandArg) {
        this.subCommandArgument = subCommandArg;
        switch (subCommand) {
            case "list":
                this.subCommand = sub_command_1.SubCommand.LIST;
                break;
            case "new":
                this.subCommand = sub_command_1.SubCommand.NEW;
                break;
            case "delete":
                this.subCommand = sub_command_1.SubCommand.DELETE;
                break;
            case "local-mode":
                this.subCommand = sub_command_1.SubCommand.LOCAL;
                break;
            case "global-mode":
                this.subCommand = sub_command_1.SubCommand.GLOBAL;
                break;
            case "mode":
                this.subCommand = sub_command_1.SubCommand.MODE;
                break;
            default:
                this.showHelp();
                process.exit(1);
        }
    }
}
exports.CommandParser = CommandParser;
//# sourceMappingURL=command-parser.js.map