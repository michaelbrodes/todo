import { ManagementAction } from './management-action';
import { Todo } from './todo';

export class ListAction extends ManagementAction {
	constructor(argument : string) {
		super(argument);
	}

	public doAction() : void {
		if (this.argument == "reverse") {
			this.listAllTodos(true);
		} else {
			this.listAllTodos(false);
		}
	}
}