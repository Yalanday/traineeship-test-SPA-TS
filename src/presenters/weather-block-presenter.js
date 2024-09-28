"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const render_1 = require("../core/render");
const weather_block_view_1 = __importDefault(require("../views/weather-block-view/weather-block-view"));
const api_1 = require("../model/api");
class WeatherBlockPresenter {
    constructor(container) {
        this.container = container;
    }
    init() {
        this.weatherBlockElement = new weather_block_view_1.default();
        (0, render_1.render)(this.weatherBlockElement, this.container);
        const weatherBlockElementTemp = this.weatherBlockElement.element.querySelector('#weather-block__temp');
        const weatherBlockElementCity = this.weatherBlockElement.element.querySelector('#weather-block__city');
        const weatherIconElement = this.weatherBlockElement.element.querySelector('#weather-block__icon');
        (0, api_1.setWeatherData)(weatherBlockElementTemp, weatherBlockElementCity, weatherIconElement);
    }
}
exports.default = WeatherBlockPresenter;
