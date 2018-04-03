import * as fs from 'fs';

import { Action } from '../action';
import { TodoConfig, CONFIG_LOCATION } from './config';

export class MakeLocalAction implements Action {
	private filename : string; 

	constructor(filename : string) {
		this.filename = filename; 
	}

	public doAction() : void {
		let newConfig = new TodoConfig();
		if (this.filename != null) {
			newConfig.storageMode = {
				mode: "local",
				file: this.filename
			}
			let configJSON = JSON.stringify(newConfig);
			fs.writeFileSync(CONFIG_LOCATION, configJSON, "UTF-8");
			console.log("Current mode: local");
			console.log(`Current todo file: ${this.filename}`);
		} else {
			console.log("Cannot do local storage without a file.\nStaying in current storage mode");
		}
	}
}