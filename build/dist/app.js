"use strict";
exports.__esModule = true;
var inversify_config_1 = require("./inversify.config");
var types_1 = require("./types/types");
var apiManager = inversify_config_1.myContainer.get(types_1.TYPES.Manager);
apiManager.fetchData(2);
