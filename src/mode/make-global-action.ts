import * as fs from 'fs';

import { TodoConfig, CONFIG_LOCATION } from './config';
import { Action } from '../action';

export class MakeGlobalAction implements Action {
	constructor() {

	}

	public doAction() : void {
		let newConfig = new TodoConfig(); 
		newConfig.storageMode = {
			mode: "global",
			file: "./todo.txt"
		};
		
		let configJSON = JSON.stringify(newConfig);
		fs.writeFileSync(CONFIG_LOCATION, configJSON, "UTF-8");
		console.log("Current mode: global");
	}
}