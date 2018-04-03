/**
 * A Todo in the todo file. A todo has a row number (its line in the todo file),
 * a message (what we want to do), and the date that the to do was created. 
 */
export class Todo {
	private row: number; 
	private message: string; 
	private created: Date; 

	constructor(row: number, message: string, created: Date) {
		this.row = row; 
		this.message = message; 
		this.created = created; 		
	}

	public getRow(): number {
		return this.row; 
	}

	public getMessage(): string {
		return this.message; 
	}

	public getCreated() : Date {
		return this.created;
	}
}