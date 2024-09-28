import AbstractView from "../../core/abstract-view";
import {createWeatherBlockTemplate} from "./weather-block-template";

export default class WeatherBlockView extends AbstractView {
    constructor() {
        super();
    }

    getTemplate() {
        return createWeatherBlockTemplate();
    }
}
