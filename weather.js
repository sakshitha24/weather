async function weather() {
    let cityname = document.getElementById("cityName").value;
    console.log(cityname);
    let apikey = "43e230335b07f0f932dfb50b1d9b1b5e";
    let weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=metric`;

    const result = await fetch(weatherURL);
    let users = await result.json();
    let {
        name, main: {temp_min, temp_max }
    } = users;
    document.getElementById("div1").innerHTML = `Name of the city: ${name}<br/> Maximum Temperature: ${temp_max}<br/>Minimum Temperature: ${temp_min}`
}

