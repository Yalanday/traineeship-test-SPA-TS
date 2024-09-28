"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_view_1 = __importDefault(require("../../core/abstract-view"));
const time_block_template_1 = require("./time-block-template");
class TimeBlockView extends abstract_view_1.default {
    constructor() {
        super();
    }
    getTemplate() {
        return (0, time_block_template_1.createTimeBlockTemplates)();
    }
}
exports.default = TimeBlockView;
