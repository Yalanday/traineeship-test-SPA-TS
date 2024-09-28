"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const time_block_presenter_1 = __importDefault(require("./time-block-presenter"));
const header_presenter_1 = __importDefault(require("./header-presenter"));
const task_block_presenter_1 = __importDefault(require("./task-block-presenter"));
const utils_time_block_1 = require("../utils/utils-time-block");
class AppPresenter {
    constructor() {
        this.container = document.body;
        this.timeBlockPresenter = new time_block_presenter_1.default(this.container);
        this.headerPresenter = new header_presenter_1.default(this.container);
        this.taskBlockPresenter = new task_block_presenter_1.default(this.container);
    }
    init() {
        this.container.style.backgroundImage = `url('./images/${(0, utils_time_block_1.setBackgroundBody)()}')`;
        this.headerPresenter.init();
        this.timeBlockPresenter.init();
        this.taskBlockPresenter.init();
    }
}
exports.default = AppPresenter;
