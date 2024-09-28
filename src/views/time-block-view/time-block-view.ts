import AbstractView from "../../core/abstract-view";
import {createTimeBlockTemplates} from "./time-block-template";

class TimeBlockView extends AbstractView {

    constructor() {
        super();
    }

    getTemplate() {
        return createTimeBlockTemplates();
    }
}

export default TimeBlockView;
