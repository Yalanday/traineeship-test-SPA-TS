import {createElement} from "./render";

export default class AbstractView {

    element: any | null = null;

    _callback = {};

    constructor() {
        if (new.target === AbstractView) {
            throw new Error('Can\'t instantiate AbstractView, only concrete one.');
        }
    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
        }

        return this.element;
    }

    getTemplate(): string {
        throw new Error('Abstract method not implemented: get template');
    }

    /** Метод для удаления элемента */
    removeElement() {
        this.element = null;
    }

}
