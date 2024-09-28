"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.replace = exports.render = exports.createElement = exports.RenderPosition = void 0;
const abstract_view_1 = __importDefault(require("./abstract-view"));
/** @enum {string} Перечисление возможных позиций для отрисовки */
const RenderPosition = {
    BEFOREBEGIN: 'beforebegin',
    AFTERBEGIN: 'afterbegin',
    BEFOREEND: 'beforeend',
    AFTEREND: 'afterend',
};
exports.RenderPosition = RenderPosition;
const createElement = (template) => {
    const newElement = document.createElement('div');
    newElement.innerHTML = template;
    return newElement.firstElementChild;
};
exports.createElement = createElement;
const render = (component, container, place = RenderPosition.BEFOREEND) => {
    if (!(component instanceof abstract_view_1.default)) {
        throw new Error('Can render only components');
    }
    if (container === null) {
        throw new Error('Container element doesn\'t exist');
    }
    container.insertAdjacentElement(place, component.getElement());
};
exports.render = render;
const replace = (newComponent, oldComponent) => {
    if (!(newComponent instanceof abstract_view_1.default && oldComponent instanceof abstract_view_1.default)) {
        throw new Error('Can replace only components');
    }
    const newElement = newComponent.getElement();
    const oldElement = oldComponent.getElement();
    const parent = oldElement.parentElement;
    if (parent === null) {
        throw new Error('Parent element doesn\'t exist');
    }
    parent.replaceChild(newElement, oldElement);
};
exports.replace = replace;
const remove = (component) => {
    if (component === null) {
        return;
    }
    if (!(component instanceof abstract_view_1.default)) {
        throw new Error('Can remove only components');
    }
    component.getElement().remove();
    component.removeElement();
};
exports.remove = remove;
