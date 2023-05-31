
const container = document.querySelector('.container'); 

const search = document.querySelector('.search'); 
const locationIcon = document.querySelector('.location-icon'); 
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector('.search-btn');


const weather = document.querySelector('.weather');

const weatherMain = document.querySelector('.weather-main'); 

const mainImg = document.querySelector('.main-img');
const imgMain = document.querySelector('.img_main'); 
const mainTemp= document.querySelector('.main-temperature'); 
const mainWeather = document.querySelector('.main-weather'); 


const weatherAdd = document.querySelector('.weather-add'); 

const addHumidity = document.querySelector('.add-humidity'); 
const humidityTitle = document.querySelector('.humidity-title');
const humidityValue = document.querySelector('.humidity-value'); 

const addVisibility = document.querySelector('.add-visibility'); 
const visibilityTitle = document.querySelector('.visibility-title');
const visibilityValue = document.querySelector('.visibility-value'); 

const addWind = document.querySelector('.add-wind'); 
const windTitle = document.querySelector('.wind-title');
const windValue = document.querySelector('.wind-value'); 

searchButton.addEventListener("click", () => {
    //api url- https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    //api key- 80f6af54d5ac9494f7c6db394b035563
    // container.classList.add('.animation'); 

    const APIkey = '80f6af54d5ac9494f7c6db394b035563'; 

    const location = searchInput.value; 
    
    if(location === '') return;

    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIkey}`).then(response => response.json()).then(json => console.log(json));   

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIkey}`).then(response => response.json()).then(json => {
        if(json.cod === '404') {

            weather.style.display = 'block';
            mainWeather.innerHTML = 'Not found'; 

            mainImg.style.display = 'none'; 
            mainTemp.style.display = 'none';
            weatherAdd.style.display = 'none'
            
                    
        }

            weather.style.display = 'block'; 
            
            switch(json.weather[0].main) {
                case 'Clouds':
                    imgMain.src = 'img/clouds.png';
                    //mainWeather.innerHTML = json.weather[0].main
                    mainWeather.innerHTML = 'Clouds';
                    break;

                case 'Rain':
                    imgMain.src = 'img/rain.png';
                    //mainWeather.innerHTML = json.weather[0].main
                    mainWeather.innerHTML = 'Rain';
                    break;

                case 'Thunderstorm' :
                    imgMain.src = 'img/Thunderstorm.png';
                    //mainWeather.innerHTML = json.weather[0].main
                    mainWeather.innerHTML = 'Thunderstorm';
                    break;

                case 'Fog' :
                    imgMain.src = 'img/fog.png';
                    //mainWeather.innerHTML = json.weather[0].main
                    mainWeather.innerHTML = 'Fog';
                    break;

                    
                case 'Mist' :
                imgMain.src = 'img/fog.png';
                //mainWeather.innerHTML = json.weather[0].main
                mainWeather.innerHTML = 'Mist';
                break;

                case 'Haze' :
                imgMain.src = 'img/fog.png';
                //mainWeather.innerHTML = json.weather[0].main
                mainWeather.innerHTML = 'Haze';
                break; 

                case 'Clear':
                    imgMain.src = 'img/clear.png';
                    //mainWeather.innerHTML = json.weather[0].main
                    mainWeather.innerHTML = 'Clear';
                    break;

                case 'Snow':
                    imgMain.src = 'img/snow.png';
                    //mainWeather.innerHTML = json.weather[0].main
                    mainWeather.innerHTML = 'Snow';
                    break;
                
                default:
                    imgMain.src = '';   
            }
        
            mainTemp.innerHTML = `${Math.round(json.main.temp - 273.15)} °C`
            humidityValue.innerHTML = `${json.main.humidity} %`; 
            visibilityValue.innerHTML = `${json.visibility / 1000} km`;
            windValue.innerHTML = `${Math.round(json.wind.speed)} km/h`

            mainImg.style.display = ''; 
            mainTemp.style.display = '';
            weatherAdd.style.display = ''

            
            console.log(json)

    }); 
    
})



// Задайте смещение времени в минутах
var timezoneOffset = -300; // Например, -300 соответствует UTC-5

// Создайте новый объект Date
var currentTime = new Date();

// Получите текущее время в миллисекундах
var currentTimestamp = currentTime.getTime();

// Вычислите смещение времени в миллисекундах
var offsetMilliseconds = timezoneOffset * 60000;

// Получите новое время, добавив смещение к текущему времени
var targetTimestamp = currentTimestamp + offsetMilliseconds;

// Создайте новый объект Date с новым временем
var targetTime = new Date(targetTimestamp);

// Выведите время в определенном часовом поясе
console.log(targetTime);



