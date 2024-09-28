"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDayWeek = void 0;
exports.setBackgroundBody = setBackgroundBody;
exports.setCurrentTimeOfDay = setCurrentTimeOfDay;
exports.renderTime = renderTime;
const days = [
    'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'
];
const months = [
    'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
];
const getDay = () => {
    return new Date().getDate();
};
const getMount = () => {
    return months[new Date().getMonth()].toLowerCase();
};
const getDayWeek = () => {
    return days[new Date().getDay()].toLowerCase();
};
const createComplexStringData = () => {
    return `${getDay()} ${getMount()}, ${getDayWeek()}`;
};
const setDayWeek = (element) => {
    element.innerText = createComplexStringData();
};
exports.setDayWeek = setDayWeek;
function getTime() {
    return (new Date()).toLocaleTimeString();
}
var TimeOfDay;
(function (TimeOfDay) {
    TimeOfDay["Morning"] = "\u0414\u043E\u0431\u0440\u043E\u0435 \u0443\u0442\u0440\u043E";
    TimeOfDay["Day"] = "\u0414\u043E\u0431\u0440\u044B\u0439 \u0434\u0435\u043D\u044C";
    TimeOfDay["Evening"] = "\u0414\u043E\u0431\u0440\u044B\u0439 \u0432\u0435\u0447\u0435\u0440";
    TimeOfDay["Night"] = "\u0414\u043E\u0431\u0440\u043E\u0439 \u043D\u043E\u0447\u0438";
})(TimeOfDay || (TimeOfDay = {}));
function getCurrentTimeOfDay() {
    if (new Date().getHours() >= 6 && new Date().getHours() < 12) {
        return TimeOfDay.Morning;
    }
    if (new Date().getHours() >= 12 && new Date().getHours() < 18) {
        return TimeOfDay.Day;
    }
    if (new Date().getHours() >= 18 && new Date().getHours() < 24) {
        return TimeOfDay.Evening;
    }
    if (new Date().getHours() >= 0 && new Date().getHours() < 6) {
        return TimeOfDay.Night;
    }
}
function setBackgroundBody() {
    if (new Date().getHours() >= 6 && new Date().getHours() < 12) {
        return '02.jpg';
    }
    if (new Date().getHours() >= 12 && new Date().getHours() < 18) {
        return '03.jpg';
    }
    if (new Date().getHours() >= 18 && new Date().getHours() < 24) {
        return '04.jpg';
    }
    return '01.jpg';
}
function setCurrentTimeOfDay(element) {
    element.textContent = getCurrentTimeOfDay();
    setTimeout(setCurrentTimeOfDay, 1000, element);
}
function renderTime(timer) {
    timer.textContent = getTime();
    setTimeout(renderTime, 1000, timer);
}
