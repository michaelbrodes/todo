import { ManagementAction } from './management-action';

export class NewAction extends ManagementAction {
	constructor (parserArgument: string) {
		super(parserArgument);
	}	

	public doAction() : void {
		if(this.argument != null) {
			this.todos.addTodo(this.argument);
		} else {
			console.log("nothing to add...");
		}

		this.todos.commit();	
		this.listAllTodos(false);
	}
}