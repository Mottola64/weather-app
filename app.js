const request = require("request");

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

const geocode = (address, callback) => {
const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibW90dG9sYTY0IiwiYSI6ImNraDU4ejhqNTFnY2sycWxxbDloZ3hhcjcifQ.qcXH-pq2yl_Jv6rij6LlyA&limit=1'
request({ url: url, json: true}, (error, response) => {
  if (error) {
    callback("Unable to connect to location services!")
  } else if (response.body.features.length === 0) {
    callback("Unable to find location. Try another search.", undefined)
  } else {
    callback(undefined, {
      latitude: response.body.features[0].center[1],
      longitude: response.body.features[0].center[0],
      location: response.body.features[0].place_name
    })
  }
})
}
geocode('Philadelphia', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})