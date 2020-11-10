const request = require("request");
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url =
//   "http://api.weatherstack.com/current?access_key=2bb8cbcf521913141f8bdacb2163852a&query=37.8267,-122.4233&units=f";

// const mapboxurl =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoibW90dG9sYTY0IiwiYSI6ImNraDU4ejhqNTFnY2sycWxxbDloZ3hhcjcifQ.qcXH-pq2yl_Jv6rij6LlyA&limit=1";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     console.log(
//       response.body.current.weather_descriptions[0] +
//         ". It is currently " +
//         response.body.current.temperature +
//         " degrees out. It feels like " +
//         response.body.current.feelslike +
//         " degrees out."
//     );
//   }
// });

// request({ url: mapboxurl, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to map service");
//   } else if (response.body.features.length === 0) {
//     console.log("Unable to find location");
//   } else {
//     const latitude = response.body.features[0].center[1];
//     const longitude = response.body.features[0].center[0];
//     console.log(latitude, longitude);
//   }
// });


geocode('Boston', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})