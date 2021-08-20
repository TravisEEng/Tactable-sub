"use strict";
exports.__esModule = true;
var inversify_config_1 = require("../inversify.config");
var types_1 = require("../types/types");
var apiManager = inversify_config_1.myContainer.get(types_1.TYPES.Manager);
test("Should return the results from querying todo with ID 1", function () {
    expect(apiManager.fetchData(1)).toBe(1);
});
