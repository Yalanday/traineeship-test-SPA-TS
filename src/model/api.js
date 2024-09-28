"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setWeatherData = setWeatherData;
const API_KEY_OW = '9d50b8efe66d09bd318745385322968f';
const API_KEY_GEO = 'at_YNCHaC6VCEJMx8XereOGTuzgkkajk';
const defaultCity = {
    latitude: 45.0448400,
    longitude: 38.9760300
};
if (!localStorage.getItem('city')) {
    localStorage.setItem('city', JSON.stringify(defaultCity));
}
const getCity = () => {
    const city = localStorage.getItem('city') || '{}';
    return JSON.parse(city);
};
function getCoordinates() {
    return new Promise(function (resolve, reject) {
        if (!navigator.geolocation) {
            reject('');
            return;
        }
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}
function getWeatherData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const position = getCity();
            console.log(position);
            const API_URL_OW = `https://api.openweathermap.org/data/2.5/weather?lat=${defaultCity.latitude}&lon=${defaultCity.longitude}&appid=${API_KEY_OW}&units=metric`;
            const response = yield fetch(API_URL_OW);
            const dataWeather = yield response.json();
            console.log(dataWeather.main.temp);
            return dataWeather;
        }
        catch (error) {
            console.log('Ошибка при определении местоположения');
        }
    });
}
;
function setWeatherData(element, cityElement, iconElement) {
    return __awaiter(this, void 0, void 0, function* () {
        const dataWeather = yield getWeatherData();
        console.log(dataWeather);
        try {
            element.textContent = String(dataWeather.main.temp).slice(0, 2);
            dataWeather.name === 'Krasnodar' ? cityElement.textContent = 'Краснодар' : cityElement.textContent = dataWeather.name;
            iconElement.textContent = dataWeather.weather[0].main;
        }
        catch (error) {
            console.log('Ошибка при загрузке данных погоды');
        }
    });
}
