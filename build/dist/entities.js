"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); };
};
exports.__esModule = true;
exports.ApiManager = exports.TodoClient = void 0;
var inversify_1 = require("inversify");
require("reflect-metadata");
var types_1 = require("./types/types");
var fetch = require('node-fetch');
var ApiManager = /** @class */ (function () {
    function ApiManager(todoClient) {
        this._todoClient = todoClient;
    }
    ApiManager.prototype.fetchData = function (id) {
        this._todoClient.getInfo(id).then(function (result) { return console.log(result); });
    };
    ApiManager = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.TYPES.TodoClient))
    ], ApiManager);
    return ApiManager;
}());
exports.ApiManager = ApiManager;
var TodoClient = /** @class */ (function () {
    function TodoClient() {
    }
    TodoClient.prototype.getInfo = function (id) {
        return fetch("https://jsonplaceholder.typicode.com/todos/?id=" + id)
            .then(function (res) { return res.json(); })
            .then(function (res) { return res.map(function (todo) { return formatTodo(todo); }); });
    };
    TodoClient = __decorate([
        inversify_1.injectable()
    ], TodoClient);
    return TodoClient;
}());
exports.TodoClient = TodoClient;
function formatTodo(todo) {
    return { userId: todo.userId, id: todo.id, title: todo.title, completed: todo.completed };
}
