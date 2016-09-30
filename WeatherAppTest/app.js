$.ajax({
    url: "http://ipinfo.io/json",
    success: function(res) {
        console.log(res);
        $("#ciudad").html(res.city);
        $("#country").html(res.country);

        $.ajax({
          url: "http://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=aebb13fe929de5b1d6b3355ef5dc181c",
          success: function(res2) {
            console.log(res2);
            var tempCelsius = Math.round(res2.main.temp - 273.15);
            $("#Temp").html(tempCelsius);
            $("#Hum").html(res2.main.humidity);
            $("#weather").html(res2.weather[0].description);
            }
        });
    }
});
