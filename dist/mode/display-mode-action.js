"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const config_1 = require("./config");
class DisplayModeAction {
    constructor() {
    }
    doAction() {
        let configJSON = fs.readFileSync(config_1.CONFIG_LOCATION, "UTF-8");
        let config = JSON.parse(configJSON);
        console.log(`Current mode: ${config.storageMode.mode}`);
        if (config.storageMode.mode == "local") {
            console.log(`Current todo file: ${config.storageMode.file}`);
        }
    }
}
exports.DisplayModeAction = DisplayModeAction;
//# sourceMappingURL=display-mode-action.js.map