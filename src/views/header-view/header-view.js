"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_view_1 = __importDefault(require("../../core/abstract-view"));
const header_view_templates_1 = require("./header-view-templates");
class HeaderView extends abstract_view_1.default {
    constructor() {
        super();
    }
    getTemplate() {
        return (0, header_view_templates_1.createHeaderViewTemplates)();
    }
}
exports.default = HeaderView;
