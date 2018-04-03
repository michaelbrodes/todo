import { Action } from './action';
import { CommandParser, SubCommand } from './command-line';
import { MakeGlobalAction, MakeLocalAction, DisplayModeAction } from './mode';
import { NewAction, ListAction, DeleteAction } from './todo-management';

const parser = new CommandParser(process.argv);
let action : Action = null;

switch(parser.getSubCommand()) {
	case SubCommand.LIST:
		action = new ListAction(parser.getArgument());
		break;
	case SubCommand.NEW:
		action = new NewAction(parser.getArgument());
		break; 
	case SubCommand.DELETE:
		action = new DeleteAction(parser.getArgument());
		break; 
	case SubCommand.LOCAL:
		action = new MakeLocalAction(parser.getArgument());
		break; 
	case SubCommand.GLOBAL:
		action = new MakeGlobalAction();
		break;
	case SubCommand.MODE:
		action = new DisplayModeAction();
		break;
	default: 
		console.log("Sub command is not currently supported.");
		parser.showHelp(); 
		process.exit(1); 
		break; 
}

action.doAction();