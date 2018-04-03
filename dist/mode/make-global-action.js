"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const config_1 = require("./config");
class MakeGlobalAction {
    constructor() {
    }
    doAction() {
        let newConfig = new config_1.TodoConfig();
        newConfig.storageMode = {
            mode: "global",
            file: "./todo.txt"
        };
        let configJSON = JSON.stringify(newConfig);
        fs.writeFileSync(config_1.CONFIG_LOCATION, configJSON, "UTF-8");
        console.log("Current mode: global");
    }
}
exports.MakeGlobalAction = MakeGlobalAction;
//# sourceMappingURL=make-global-action.js.map