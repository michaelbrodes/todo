import * as fs from 'fs';
import { Todo } from './todo'

const ROW_INDEX = 0; 
const MESSAGE_INDEX = 1; 
const DATE_INDEX = 2; 

/**
 * This is the object backing the Todo file. It contains a list of todos sorted
 * by chronological descending order. 
 */
export class TodoTable {
	private todos: Todo[];
	private todoFile: string; 
	
	constructor(filename: string) {
		this.todoFile = filename; 
		this.todos = [];
		
		if (!fs.existsSync(filename)) {
			fs.closeSync(fs.openSync(filename, "w"));
		}

		let fileContents = fs.readFileSync(filename, "UTF-8");
		let todoLines = fileContents.split("\n");

		for (let line of todoLines) {
			if (line != "") {
				let fields = line.split(",");
				this.todos.push(new Todo(parseInt(fields[ROW_INDEX], 10), fields[MESSAGE_INDEX], new Date(fields[DATE_INDEX])));	
			}
		}
	}

	/**
	 * Add a new todo to the todo file. This pushes all other todos down by one
	 * (keeping consistent with the chronological descending order).
	 */
	public addTodo(message: string) {
		let addedTodo = new Todo(0, message, new Date());
		// we are adding a todo to the front of the list so we are pushing every row number back by one
		let pushedForward = this.todos.map(previousTodo => 
			new Todo(previousTodo.getRow() + 1, previousTodo.getMessage(), previousTodo.getCreated()));
		pushedForward.unshift(addedTodo);

		this.todos = pushedForward;
	}

	public getTodos() : Todo[] {
		return this.todos; 
	}

	public removeAtRowNumber(rowNumber: number) : void {
		let subset : Todo[] = [];
		let decrement = false; 

		for (let todo of this.todos) {
			if (decrement) {
				// we already found our todo so decrement what is after it
				let newTodo = new Todo(todo.getRow() - 1, todo.getMessage(), todo.getCreated());
				subset.push(newTodo);				
			} else if (todo.getRow() == rowNumber) {
				// omit the current row
				decrement = true; 
			} else {
				// only add rows that don't match the one we are looking for
				subset.push(todo);
			}
		}

		this.todos = subset; 
	}

	public remove(message: string) : void {
		let subset : Todo[] = [];
		let decrement = false; 

		for (let todo of this.todos) {
			if (decrement) {
				// we already found our todo so decrement what is after it
				let newTodo = new Todo(todo.getRow() - 1, todo.getMessage(), todo.getCreated());
				subset.push(newTodo);				
			} else if (todo.getMessage().trim().toUpperCase() == message.trim().toUpperCase()) {
				// omit the current row
				decrement = true; 
			} else {
				// only add rows that don't match the one we are looking for
				subset.push(todo);
			}
		}

		this.todos = subset; 
	}

	public removeAll() : void {
		this.todos = [];
	}

	/**
	 * Save all added todos to the todo file. 
	 */
	public commit() : void {
		fs.writeFileSync(this.todoFile, "", "UTF-8");
		for (let todo of this.todos) {
			fs.appendFileSync(this.todoFile, `${todo.getRow()},${todo.getMessage()},${todo.getCreated().toDateString()}\n`, "UTF-8");
		}
	}
}