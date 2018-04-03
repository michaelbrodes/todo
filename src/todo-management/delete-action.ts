import { ManagementAction } from './management-action';

export class DeleteAction extends ManagementAction {
	constructor(argument: string) {
		super(argument);
	}

	public doAction() : void {
		if (this.argument == null) {
			console.log("nothing to delete...");
		} else if (this.argument == "*") {
			this.todos.removeAll(); 
		} else if (!Number.isNaN(Number(this.argument))) {
			// if the argument can be parsed into a number
			let rowNumber = Number(this.argument);
			this.todos.removeAtRowNumber(rowNumber);
		} else {
			this.todos.remove(this.argument);
		}

		this.todos.commit(); 
		this.listAllTodos(false);
	}
}