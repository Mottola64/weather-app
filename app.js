const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=2bb8cbcf521913141f8bdacb2163852a&query=37.8267,-122.4233";

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
});
