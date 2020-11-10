const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url =
      "http://api.weatherstack.com/current?access_key=2bb8cbcf521913141f8bdacb2163852a&query=" + encodeURIComponent(longitude) + "," + encodeURIComponent(latitude) + "&units=f";
    
    request({ url: url, json: true }, (error, response) => {
      if (error) {
        callback("Unable to connect to weather service!")
      } else if (response.body.length === 0) {
        callback("Unable to find location")
      } else {
        callback(undefined, 
          {data: response.body.current.weather_descriptions[0] +
            ". It is currently " +
            response.body.current.temperature +
            " degrees out. It feels like " +
            response.body.current.feelslike +
            " degrees out."
          })
      }
    });
}

module.exports = forecast