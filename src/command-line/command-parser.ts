	import { SubCommand } from './sub-command';

// these are the indices of the various command line arguments
const NODE = 0; 
const PROGRAM = 1;
const SUB_COMMAND = 2;
const SUB_COMMAND_ARGUMENT = 3;
// the amount of arguments required in order to run the application
const REQUIRED_ARGUMENTS = 2;
// the total amount of allowed arguments 
const ALL_ARGUMENTS = 4;

export class CommandParser {
	private subCommand: SubCommand;
	private subCommandArgument: string; 

	constructor(argv: string[]) {
		if (argv.length < REQUIRED_ARGUMENTS 
			|| argv.length > ALL_ARGUMENTS 
			|| argv[SUB_COMMAND] == "help") {
			this.showHelp(); 
			process.exit(0);
		} else if (argv.length == REQUIRED_ARGUMENTS) {
			// we didn't really recieve a subcommand so we should just list
			this.subCommand = SubCommand.LIST;
			this.subCommandArgument = null;
		}
		
		this.parseCommand(
			argv[SUB_COMMAND], 
			argv.length > 3 ? argv[SUB_COMMAND_ARGUMENT] : null);
	}

	public showHelp(): void {
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

	public getSubCommand() : SubCommand {
		return this.subCommand; 
	}

	public getArgument() : string {
		return this.subCommandArgument;
	}

	private parseCommand(subCommand: string, subCommandArg: string) : void {
	    this.subCommandArgument = subCommandArg;
		switch (subCommand) {
			case "list":
				this.subCommand = SubCommand.LIST;
				break; 
			case "new":
				this.subCommand = SubCommand.NEW;
				break; 
			case "delete":
				this.subCommand = SubCommand.DELETE;
				break;  
			case "local-mode":
				this.subCommand = SubCommand.LOCAL; 
				break;
			case "global-mode":
				this.subCommand = SubCommand.GLOBAL;
				break;  
			case "mode": 
				this.subCommand = SubCommand.MODE; 
				break; 
			default:
				this.showHelp(); 
				process.exit(1);
		}
	}
}