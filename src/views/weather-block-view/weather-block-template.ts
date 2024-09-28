export const createWeatherBlockTemplate= () => {

    return `<div class="weather-block">
                <div class="weather-block__container">
                        <p id="weather-block__city"></p>
                        <p> <span id="weather-block__temp"></span>&nbsp;C<sup>o</sup></p>
                        <p id="weather-block__icon"></p>
                </div>
            </div>`;
}
