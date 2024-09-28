"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_presenter_1 = __importDefault(require("./presenters/app-presenter"));
require("./model/api");
require("./index.css");
require("./model/todo");
const app = new app_presenter_1.default();
app.init();
