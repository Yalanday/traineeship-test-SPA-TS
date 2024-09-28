import TimeBlockPresenter from "./time-block-presenter";
import HeaderPresenter from "./header-presenter";
import TaskBlockPresenter from "./task-block-presenter";
import {setBackgroundBody} from "../utils/utils-time-block";

class AppPresenter {
    private container: HTMLElement = document.body;
    private timeBlockPresenter: TimeBlockPresenter;
    private headerPresenter: HeaderPresenter;
    private taskBlockPresenter: TaskBlockPresenter;

    constructor() {
        this.timeBlockPresenter = new TimeBlockPresenter(this.container);
        this.headerPresenter = new HeaderPresenter(this.container);
        this.taskBlockPresenter = new TaskBlockPresenter(this.container);
    }

    init() {
        this.container.style.backgroundImage = `url('./images/${setBackgroundBody()}')`;
        this.headerPresenter.init();
        this.timeBlockPresenter.init();
        this.taskBlockPresenter.init();
    }
}

export default AppPresenter;
