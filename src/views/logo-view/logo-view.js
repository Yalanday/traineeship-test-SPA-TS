"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_view_1 = __importDefault(require("../../core/abstract-view"));
const logo_template_1 = require("./logo-template");
class LogoView extends abstract_view_1.default {
    constructor() {
        super();
    }
    getTemplate() {
        return (0, logo_template_1.createDinamicLogoTemplate)();
    }
}
exports.default = LogoView;
