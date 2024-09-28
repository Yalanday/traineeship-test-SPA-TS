"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const render_1 = require("../core/render");
const header_view_1 = __importDefault(require("../views/header-view/header-view"));
const weather_block_presenter_1 = __importDefault(require("./weather-block-presenter"));
const dinamic_logo_presenter_1 = __importDefault(require("./dinamic-logo-presenter"));
class HeaderPresenter {
    constructor(container) {
        this.container = container;
    }
    init() {
        this.headerElement = new header_view_1.default();
        (0, render_1.render)(this.headerElement, this.container);
        this.dinamicLogoPresenter = new dinamic_logo_presenter_1.default(this.headerElement.element.querySelector('.header__container'));
        this.dinamicLogoPresenter.init();
        this.weatherBlockPresenter = new weather_block_presenter_1.default(this.headerElement.element.querySelector('.header__container'));
        this.weatherBlockPresenter.init();
    }
}
exports.default = HeaderPresenter;
