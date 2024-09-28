const API_KEY_OW = '9d50b8efe66d09bd318745385322968f';
const API_KEY_GEO = 'at_YNCHaC6VCEJMx8XereOGTuzgkkajk';

const defaultCity = {
    latitude: 45.0448400,
    longitude: 38.9760300
}

if (!localStorage.getItem('city')) {
    localStorage.setItem('city', JSON.stringify(defaultCity));
}

type CityType = {
    latitude: number;
    longitude: number;
}

const getCity = (): CityType => {
    const city = localStorage.getItem('city') || '{}';
    return JSON.parse(city);
}

function getCoordinates() {
    return new Promise(function (resolve, reject) {
        if (!navigator.geolocation) {
            reject('');
            return
        }
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

async function getWeatherData() {
    try {
        const position: CityType = getCity();
        console.log(position)
        const API_URL_OW = `https://api.openweathermap.org/data/2.5/weather?lat=${defaultCity.latitude}&lon=${defaultCity.longitude}&appid=${API_KEY_OW}&units=metric`;
        const response = await fetch(API_URL_OW);
        const dataWeather = await response.json();
        console.log(dataWeather.main.temp)

        return dataWeather
    } catch (error) {
        console.log('Ошибка при определении местоположения')
    }
};


export async function setWeatherData(element: HTMLElement, cityElement: HTMLElement, iconElement: HTMLElement) {
    const dataWeather = await getWeatherData();
    console.log(dataWeather)
    try {
        element.textContent = String(dataWeather.main.temp).slice(0, 2);
        dataWeather.name === 'Krasnodar' ? cityElement.textContent = 'Краснодар' : cityElement.textContent = dataWeather.name;
        iconElement.textContent = dataWeather.weather[0].main;
    } catch (error) {
        console.log('Ошибка при загрузке данных погоды')
    }
}


