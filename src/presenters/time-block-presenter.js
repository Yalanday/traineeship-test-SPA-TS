"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const time_block_view_1 = __importDefault(require("../views/time-block-view/time-block-view"));
const utils_time_block_1 = require("../utils/utils-time-block");
const render_1 = require("../core/render");
class TimeBlockPresenter {
    constructor(container) {
        this.container = container;
    }
    init() {
        this.timeBlockElement = new time_block_view_1.default();
        (0, render_1.render)(this.timeBlockElement, this.container);
        const timeBlockTitle = this.timeBlockElement.element.querySelector('#time-block-title');
        const timeDayWeek = this.timeBlockElement.element.querySelector('#time-block-day-week');
        const timeBlockDescription = this.timeBlockElement.element.querySelector('#time-block-description');
        (0, utils_time_block_1.renderTime)(timeBlockTitle);
        (0, utils_time_block_1.setDayWeek)(timeDayWeek);
        (0, utils_time_block_1.setCurrentTimeOfDay)(timeBlockDescription);
    }
}
exports.default = TimeBlockPresenter;
