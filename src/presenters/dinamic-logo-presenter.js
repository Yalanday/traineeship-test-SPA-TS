"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const render_1 = require("../core/render");
const logo_view_1 = __importDefault(require("../views/logo-view/logo-view"));
class DinamicLogoPresenter {
    constructor(container) {
        this.container = container;
    }
    init() {
        this.weatherBlockElement = new logo_view_1.default();
        (0, render_1.render)(this.weatherBlockElement, this.container);
    }
}
exports.default = DinamicLogoPresenter;
