// API key from https://home.openweathermap.org/api_keys
var apiKey = "f5abdeb9818535349e07db956f98985c";
var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;
//var cityName = document.querySelector("city")
var city;
//7 day forcast from https://www.w3schools.com/js/js_dates.asp
var curr = new Date;
var firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));
var lastday = new Date(curr.setDate(curr.getDate() - curr.getDay()+6));

//Key tester
function getWeather(){
  fetch(requestUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}





// .then (res => console.log(apiKey))

//The question mark (?) marks the boundary between the base URL of the API call and the query terms of the API call.
//The ampersand character (&) indicates that we're adding another parameter after the query parameter.
