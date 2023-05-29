
const container = document.querySelector('.container'); 

const search = document.querySelector('.search'); 
const locationIcon = document.querySelector('.location-icon'); 
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector('.search-btn');

const weather = document.querySelector('.weather');

const weatherMain = document.querySelector('.weather-main'); 

const mainImg = document.querySelector('.main-img');
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
    const APIkey = '80f6af54d5ac9494f7c6db394b035563'; 
    const location = searchInput.value; 
    
    if(location === '') return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${APIkey}`); 

    
})






