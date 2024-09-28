"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const render_1 = require("../core/render");
const task_block_view_1 = __importDefault(require("../views/task-block-view/task-block-view"));
class TaskBlockPresenter {
    constructor(container) {
        this.container = container;
    }
    init() {
        this.taskBlockElement = new task_block_view_1.default();
        (0, render_1.render)(this.taskBlockElement, this.container);
    }
}
exports.default = TaskBlockPresenter;
