let API_KEY = "";

let onGeoSuccess = (position)=>{
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json().then(data=>{
        let weather = document.querySelector("#weather span:first-child");
        let city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name;
    })); //js가 url을 요청. .then으로 응답까지 기다림.
}
//latitude, longitude
let onGeoError = ()=>{
    alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError)
