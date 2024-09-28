import AbstractView from "../../core/abstract-view";
import {createTaskBlockTemplate} from "./task-block-template";

class TaskBlockView extends AbstractView {
    constructor() {
        super();
    }

    getTemplate() {
        return createTaskBlockTemplate();
    }
}

export default TaskBlockView;
