import {render} from "../core/render";
import HeaderView from "../views/header-view/header-view";
import WeatherBlockPresenter from "./weather-block-presenter";
import DinamicLogoPresenter from "./dinamic-logo-presenter";

class HeaderPresenter {
    private headerElement: any;
    private weatherBlockPresenter: WeatherBlockPresenter | undefined;
    private dinamicLogoPresenter: DinamicLogoPresenter | undefined;
    private readonly container: HTMLElement;



    constructor(container: HTMLElement, ) {
        this.container = container;
    }

    init() {
        this.headerElement = new HeaderView();
        render(this.headerElement, this.container);
        this.dinamicLogoPresenter = new DinamicLogoPresenter(this.headerElement.element.querySelector('.header__container'));
        this.dinamicLogoPresenter.init();
        this.weatherBlockPresenter = new WeatherBlockPresenter(this.headerElement.element.querySelector('.header__container'));
        this.weatherBlockPresenter.init();
    }
}

export default HeaderPresenter;
