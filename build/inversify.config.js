"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myContainer = void 0;
var inversify_1 = require("inversify");
var types_1 = require("./types/types");
var entities_1 = require("./entities");
var myContainer = new inversify_1.Container();
exports.myContainer = myContainer;
myContainer.bind(types_1.TYPES.Manager).to(entities_1.ApiManager);
myContainer.bind(types_1.TYPES.TodoClient).to(entities_1.TodoClient);