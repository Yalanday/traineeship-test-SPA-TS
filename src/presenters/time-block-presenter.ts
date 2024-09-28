import TimeBlockView from "../views/time-block-view/time-block-view";

import {setDayWeek, renderTime, setCurrentTimeOfDay} from "../utils/utils-time-block";

import {render} from "../core/render";
class TimeBlockPresenter {
    private timeBlockElement: TimeBlockView | undefined;
    private readonly container: HTMLElement;

    constructor(container: HTMLElement) {
        this.container = container;
    }

    init() {
        this.timeBlockElement = new TimeBlockView();
        render(this.timeBlockElement, this.container);
        const timeBlockTitle = this.timeBlockElement.element.querySelector('#time-block-title');
        const timeDayWeek = this.timeBlockElement.element.querySelector('#time-block-day-week');
        const timeBlockDescription = this.timeBlockElement.element.querySelector('#time-block-description');
        renderTime(timeBlockTitle);
        setDayWeek(timeDayWeek);
        setCurrentTimeOfDay(timeBlockDescription);
    }
}

export default TimeBlockPresenter;
