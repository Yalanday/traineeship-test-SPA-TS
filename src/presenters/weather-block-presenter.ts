import {render} from "../core/render";
import WeatherBlockView from "../views/weather-block-view/weather-block-view";
import {setWeatherData} from "../model/api";

class WeatherBlockPresenter {
    private weatherBlockElement: WeatherBlockView | undefined;
    private readonly container: HTMLElement;

    constructor(container: HTMLElement) {
        this.container = container;
    }

    init() {
        this.weatherBlockElement = new WeatherBlockView();
        render(this.weatherBlockElement, this.container);
        const weatherBlockElementTemp = this.weatherBlockElement.element.querySelector('#weather-block__temp');
        const weatherBlockElementCity = this.weatherBlockElement.element.querySelector('#weather-block__city');
        const weatherIconElement = this.weatherBlockElement.element.querySelector('#weather-block__icon');
        setWeatherData(weatherBlockElementTemp, weatherBlockElementCity, weatherIconElement);
    }
}

export default WeatherBlockPresenter;
