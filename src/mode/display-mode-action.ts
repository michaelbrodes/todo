import * as fs from 'fs';

import { TodoConfig, CONFIG_LOCATION } from './config';
import { Action } from '../action';

export class DisplayModeAction implements Action {
	constructor() {

	}

	public doAction() : void {
		let configJSON = fs.readFileSync(CONFIG_LOCATION, "UTF-8");
		let config : TodoConfig = JSON.parse(configJSON);
		
		console.log(`Current mode: ${config.storageMode.mode}`);
		if (config.storageMode.mode == "local") {
			console.log(`Current todo file: ${config.storageMode.file}`);
		}
	}
}