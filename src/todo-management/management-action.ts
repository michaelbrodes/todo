import * as fs from 'fs';

import { Todo } from './todo';
import { TodoTable } from './todo-table';
import { TodoConfig, CONFIG_LOCATION } from '../mode/config';
import { Action } from '../action';

const GLOBAL_TODO = './todo.txt';

export abstract class ManagementAction implements Action {
	protected todos : TodoTable;
	protected appConfig : TodoConfig; 
	protected filename : string; 
	protected argument : string; 

	constructor (parserArgument: string) {
		this.argument = parserArgument;
		this.appConfig = this.parseConfig();

		if (this.appConfig.storageMode.mode == "local") {
			this.todos = new TodoTable(this.appConfig.storageMode.file);
		} else {
			this.todos = new TodoTable(GLOBAL_TODO);
		}
	}

	abstract doAction(): void; 

	private parseConfig() : TodoConfig {
		let config = fs.readFileSync(CONFIG_LOCATION, "UTF-8");
		return JSON.parse(config);
	}

	protected listAllTodos(ascendingOrder: boolean) {
		let outputTodos: Todo[] = null;
		if (ascendingOrder) {
			outputTodos = this.todos.getTodos().reverse(); 
		} else {
			outputTodos = this.todos.getTodos(); 
		}

		if (outputTodos.length == 0) {
			console.log("no current todos...");
		} else {
			for (let todo of outputTodos) {
				console.log(`${todo.getRow()}:\t ${todo.getMessage()}`);
			}	
		}
	}
}