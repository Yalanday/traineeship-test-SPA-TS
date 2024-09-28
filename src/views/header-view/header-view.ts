import AbstractView from "../../core/abstract-view";
import {createHeaderViewTemplates} from "./header-view-templates";

class HeaderView extends AbstractView {
    constructor() {
        super();
    }

    getTemplate() {
        return createHeaderViewTemplates();
    }
}

export default HeaderView;
