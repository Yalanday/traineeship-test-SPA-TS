const days = [
    'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'
];

const months = [
    'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
]


const getDay = () => {
    return new Date().getDate()
}
const getMount = () => {
    return months[new Date().getMonth()].toLowerCase()
};

const getDayWeek = () => {
    return days[new Date().getDay()].toLowerCase();
};

const createComplexStringData = () => {
    return `${getDay()} ${getMount()}, ${getDayWeek()}`
}

export const setDayWeek = (element: HTMLElement) => {
    element.innerText = createComplexStringData();
}

function getTime(): string {
    return (new Date()).toLocaleTimeString();
}

enum TimeOfDay {
    Morning = 'Доброе утро',
    Day = 'Добрый день',
    Evening = 'Добрый вечер',
    Night = 'Доброй ночи',
}

function getCurrentTimeOfDay(): any {
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

export function setBackgroundBody(): string {
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

export function setCurrentTimeOfDay(element: HTMLElement) {
    element.textContent = getCurrentTimeOfDay();
    setTimeout(setCurrentTimeOfDay, 1000, element);
}

export function renderTime(timer: HTMLElement) {
    timer.textContent = getTime();
    setTimeout(renderTime, 1000, timer);
}




