function getWeather(){
    var apiKey = "852e0b8950922b6f9b63ac5c7618c3cc"
    const currentWeather = `https://api.openweathermap.org/data/2.5/weather?q=jeddah&appid=${apiKey}`
    fetch(currentWeather)
    .then(response => response.json())
    .then(data => {displayWeather(data)})
    .catch(error => {console.log("Error fetching weather ",error);
        alert("Error");
    })
    var d = new Date();
    document.getElementById("day").innerHTML = d.getDate();		
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    document.getElementById("month").innerHTML = month[d.getMonth()];
}
function displayWeather(data){
    let temp = document.getElementById("temp")
    let desc = document.getElementById("desc")
    if(data.cod === '404'){
        alert('error');
    } else{
        temp.innerText = "";
        desc.innerText = "";
        temp.innerText = Math.round(data.main.temp - 273.15) + "°";
        desc.innerText = data.weather[0].description;
    }
}
