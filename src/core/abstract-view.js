"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const render_1 = require("./render");
class AbstractView {
    constructor() {
        this.element = null;
        this._callback = {};
        if (new.target === AbstractView) {
            throw new Error('Can\'t instantiate AbstractView, only concrete one.');
        }
    }
    getElement() {
        if (!this.element) {
            this.element = (0, render_1.createElement)(this.getTemplate());
        }
        return this.element;
    }
    getTemplate() {
        throw new Error('Abstract method not implemented: get template');
    }
    /** Метод для удаления элемента */
    removeElement() {
        this.element = null;
    }
}
exports.default = AbstractView;
