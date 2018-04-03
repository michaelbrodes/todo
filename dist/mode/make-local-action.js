"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const config_1 = require("./config");
class MakeLocalAction {
    constructor(filename) {
        this.filename = filename;
    }
    doAction() {
        let newConfig = new config_1.TodoConfig();
        if (this.filename != null) {
            newConfig.storageMode = {
                mode: "local",
                file: this.filename
            };
            let configJSON = JSON.stringify(newConfig);
            fs.writeFileSync(config_1.CONFIG_LOCATION, configJSON, "UTF-8");
            console.log("Current mode: local");
            console.log(`Current todo file: ${this.filename}`);
        }
        else {
            console.log("Cannot do local storage without a file.\nStaying in current storage mode");
        }
    }
}
exports.MakeLocalAction = MakeLocalAction;
//# sourceMappingURL=make-local-action.js.map