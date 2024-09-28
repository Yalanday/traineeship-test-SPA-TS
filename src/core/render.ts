import AbstractView from "./abstract-view";

/** @enum {string} Перечисление возможных позиций для отрисовки */
const RenderPosition = {
    BEFOREBEGIN: 'beforebegin',
    AFTERBEGIN: 'afterbegin',
    BEFOREEND: 'beforeend',
    AFTEREND: 'afterend',
};


const createElement = (template: string) => {
    const newElement = document.createElement('div');
    newElement.innerHTML = template;

    return newElement.firstElementChild;
};


const render = (component: any, container: any, place = RenderPosition.BEFOREEND) => {
    if (!(component instanceof AbstractView)) {
        throw new Error('Can render only components');
    }

    if (container === null) {
        throw new Error('Container element doesn\'t exist');
    }

    container.insertAdjacentElement(place, component.getElement());
};

const replace = (newComponent: any, oldComponent: any) => {
    if (!(newComponent instanceof AbstractView && oldComponent instanceof AbstractView)) {
        throw new Error('Can replace only components');
    }

    const newElement: any = newComponent.getElement();
    const oldElement: any = oldComponent.getElement();

    const parent = oldElement.parentElement;

    if (parent === null) {
        throw new Error('Parent element doesn\'t exist');
    }

    parent.replaceChild(newElement, oldElement);
};

const remove = (component: any | null) => {
    if (component === null) {
        return;
    }

    if (!(component instanceof AbstractView)) {
        throw new Error('Can remove only components');
    }

    component.getElement().remove();
    component.removeElement();
};

export {RenderPosition, createElement, render, replace, remove};
