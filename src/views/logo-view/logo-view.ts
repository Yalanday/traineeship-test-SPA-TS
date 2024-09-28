import AbstractView from "../../core/abstract-view";
import {createDinamicLogoTemplate} from "./logo-template";


export default class LogoView extends AbstractView {
    constructor() {
        super();
    }

    getTemplate() {
        return createDinamicLogoTemplate();
    }
}
