const body = document.querySelector('body'); 

const container = document.querySelector('.container'); 

const search = document.querySelector('.search'); 
const locationIcon = document.querySelector('.location-icon'); 
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector('.search-btn');

const weather = document.querySelector('.weather');

const weatherMain = document.querySelector('.weather-main'); 

const mainImg = document.querySelector('.main-img');
const imgMain = document.querySelector('.img_main'); 
const mainTemp = document.querySelector('.main-temperature'); 
const mainWeather = document.querySelector('.main-weather'); 


const weatherAdd = document.querySelector('.weather-add'); 

const humidityValue = document.querySelector('.humidity-value'); 
const visibilityValue = document.querySelector('.visibility-value'); 
const windValue = document.querySelector('.wind-value'); 

const theme = document.querySelector('.theme'); 


//theme changing
function themeChange() {
    body.classList.toggle('themeBody'); 
    searchInput.classList.toggle('themeSearch')
}
theme.addEventListener("click", themeChange); 


//city search
   
    function searchClick() {

        const APIkey = '80f6af54d5ac9494f7c6db394b035563'; 
    
        const location = searchInput.value; 
    
        if(location === '') return;
    
        weather.classList.toggle('appear'); 
        
    
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIkey}`).then(response => response.json()).then(json => {
            
            if(json.cod === '404') {
                mainWeather.innerHTML = 'Not found'; 
                mainImg.style.display = 'none'; 
                mainTemp.style.display = 'none';
                weatherAdd.style.display = 'none'; 
      
                container.classList.remove('slideDown'); 
                container.classList.add('slideUp');     
                
            }
               
            else {
                container.classList.remove('slideUp'); 
                container.classList.add('slideDown'); 
                weather.classList.add('appear'); 
              
                switch(json.weather[0].main) {
                    case 'Clouds':
                        imgMain.src = 'img/clouds.png';
                        mainWeather.innerHTML = 'Clouds';
                    break;
    
                    case 'Rain':
                        imgMain.src = 'img/rain.png';
                        mainWeather.innerHTML = 'Rain';
                    break;
    
                    case 'Drizzle':
                        imgMain.src = 'img/rain.png';
                        mainWeather.innerHTML = 'Drizle';
                    break;
    
                    case 'Thunderstorm' :
                        imgMain.src = 'img/Thunderstorm.png';
                        mainWeather.innerHTML = 'Thunderstorm';
                    break;
    
                    case 'Fog' :
                        imgMain.src = 'img/fog.png';
                        mainWeather.innerHTML = 'Fog';
                    break;
    
                    case 'Mist' :
                        imgMain.src = 'img/fog.png';
                        mainWeather.innerHTML = 'Mist';
                    break;
    
                    case 'Haze' :
                        imgMain.src = 'img/fog.png';
                        mainWeather.innerHTML = 'Haze';
                    break; 
    
                    case 'Clear':
                        imgMain.src = 'img/clear.png';
                        mainWeather.innerHTML = 'Clear';
                    break;
    
                    case 'Snow':
                        imgMain.src = 'img/snow.png';
                        mainWeather.innerHTML = 'Snow';
                    break;
                    
                    default:
                        imgMain.src = '';   
                }
            }
            
                mainTemp.innerHTML = `${Math.round(json.main.temp - 273.15)} °C`
                humidityValue.innerHTML = `${json.main.humidity} %`; 
                visibilityValue.innerHTML = `${Math.round(json.visibility / 1000)} km`;
                windValue.innerHTML = `${Math.round(json.wind.speed)} km/h`
    
                mainImg.style.display = ''; 
                mainTemp.style.display = '';
                weatherAdd.style.display = '';
            console.log(json.coord)
        }); 
        
    }

    const APIkey = '80f6af54d5ac9494f7c6db394b035563'; 

    function locationClick() {
        const geoLocation = ''
        navigator.geolocation.getCurrentPosition(
            function(position) {
                console.log(position.coords)
            }
        )
    }
    locationIcon.addEventListener("click", locationClick); 
   

    searchButton.addEventListener("click", searchClick); 
    document.addEventListener("keydown", event => {
        if(event.code == "Enter") {
            searchClick(); 
        }
     }); 

    

    console.log(Geolocation.getCurrentPosition)



    

    function getLocation(latitude, longitude) {
        var geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(latitude, longitude);
      
        geocoder.geocode({ 'latLng': latlng }, function (results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            if (results[0]) {
              var addressComponents = results[0].address_components;
              var country, city;
      
              for (var i = 0; i < addressComponents.length; i++) {
                var types = addressComponents[i].types;
                if (types.indexOf('country') !== -1) {
                  country = addressComponents[i].long_name;
                }
                if (types.indexOf('locality') !== -1 || types.indexOf('administrative_area_level_1') !== -1) {
                  city = addressComponents[i].long_name;
                }
              }
      
              console.log('Страна: ' + country);
              console.log('Город: ' + city);
            } else {
              console.log('Нет результатов');
            }
          } else {
            console.log('Geocoder failed due to: ' + status);
          }
        });
      }
      
      // Пример использования
      var latitude = 37.7749; // Широта
      var longitude = -122.4194; // Долгота
      getLocation(latitude, longitude);
      