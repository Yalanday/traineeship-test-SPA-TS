import {render} from "../core/render";
import LogoView from "../views/logo-view/logo-view";

class DinamicLogoPresenter {
    private weatherBlockElement: LogoView | undefined;
    private readonly container: HTMLElement;

    constructor(container: HTMLElement) {
        this.container = container;
    }

    init() {
        this.weatherBlockElement = new LogoView();
        render(this.weatherBlockElement, this.container);

    }
}

export default DinamicLogoPresenter;
