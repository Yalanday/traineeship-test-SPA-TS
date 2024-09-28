"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_view_1 = __importDefault(require("../../core/abstract-view"));
const task_block_template_1 = require("./task-block-template");
class TaskBlockView extends abstract_view_1.default {
    constructor() {
        super();
    }
    getTemplate() {
        return (0, task_block_template_1.createTaskBlockTemplate)();
    }
}
exports.default = TaskBlockView;
