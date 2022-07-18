window.addEventListener("load", ()=> {
    let long;
    let lat;
    let temperatureDescription=document.querySelector('.temperature-description');
    let temperatureDegree=document.querySelector('.temperature-degree');
    let locationTimezone=document.querySelector('.location-timezone');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            console.log(position);
            long= position.coords.longitude;
            lat=position.coords.latitude;

            const api= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=14674f2130e83fc4b8098bbc8c036c19`;
            fetch(api).then(Response =>{
                return Response.json();
            })
            .then(data =>{
                console.log(data);
                const temperature=parseInt((data.main.temp-273.15));
                temperatureDegree.textContent=temperature;
                const timezone=data.name+"\n"+data.sys.country;
                locationTimezone.textContent=timezone;
                const summary=data.weather;
                temperatureDescription.textContent=summary[0].description+` Enlem :${long} \nBoylam:\n${lat}`;
            });

        });
       }
});