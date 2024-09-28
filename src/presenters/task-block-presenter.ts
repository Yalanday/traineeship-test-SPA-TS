import {render} from "../core/render";
import TaskBlockView from "../views/task-block-view/task-block-view";


class TaskBlockPresenter {
    private taskBlockElement: TaskBlockView | undefined;
    private readonly container: HTMLElement;

    constructor(container: HTMLElement) {
        this.container = container;
    }

    init() {
        this.taskBlockElement = new TaskBlockView();
        render(this.taskBlockElement, this.container);
    }
}

export default TaskBlockPresenter;
