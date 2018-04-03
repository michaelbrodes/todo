export const CONFIG_LOCATION = './todo-config.json';
/**
 * this is the object backing the todo-config.json file.
 */ 
export class TodoConfig {
	storageMode: {mode:string, file:string};
}