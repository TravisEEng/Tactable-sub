"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_config_1 = require("../inversify.config");
var types_1 = require("../types");
var todoClient_1 = require("../todoClient");
var apiManager_1 = require("../apiManager");
var apiManager = inversify_config_1.myContainer.get(types_1.TYPES.Manager);
test("Should return the results from querying todo with ID 1", function () {
    var finalValue = [{ "completed": false, "id": 1, "title": "delectus aut autem", "userId": 1 }]; //new  = '[{"completed": false, "id": 1, "title": delectus aut autem, "userId": 1}]';
    return apiManager.fetchData(1).then(function (data) {
        expect(data).toStrictEqual(finalValue);
    });
});
test("Should return the results from querying todo with ID 1", function () {
    var finalValue = [{ "completed": false, "id": 1, "title": "delectus aut autem", "userId": 1 }]; //new  = '[{"completed": false, "id": 1, "title": delectus aut autem, "userId": 1}]';
    return apiManager.fetchData(-1).then(function (data) {
        expect(data).toStrictEqual(finalValue);
    });
});
describe('Client', function () {
    var mockClient;
    var success = [];
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mockClient = new todoClient_1.TodoClient();
                    inversify_config_1.myContainer.rebind(types_1.TYPES.TodoClient).toConstantValue(new todoClient_1.TodoClient());
                    return [4 /*yield*/, mockClient.getInfo(1)];
                case 1:
                    success = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('get the correct todo information', function () {
        expect(success).toStrictEqual([{ "completed": false, "id": 1, "title": "delectus aut autem", "userId": 1 }]);
    });
    test('Testing Api Manager class', function () {
        jest.mock('../apiManager');
        expect(apiManager).toStrictEqual(new apiManager_1.ApiManager(new todoClient_1.TodoClient()));
    });
    jest.mock('../apiManager', function () {
        return {
            ApiManager: jest.fn().mockImplementation(function () {
                return {
                    fetchData: function () { },
                };
            })
        };
    });
});
