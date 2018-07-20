const request = require('request')

const geocodeAddress = (address, callback) => {
  //Use encode URI component address --> IMPORTANT METHOD!!
  //console.log(address.replace(/ /g, "%20"));
  const encodedAddress = encodeURIComponent(address);
  const key = "AIzaSyC0U1MAPY2zFGm3nwyp32RzGGvmwrWOOjU";

  //Following their documents (npm request options)
  //How to send an 'http' request
  request({
    //Takes url --> sends http request
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${key}`,
    //Tell them we want JSON back (other option would be text)
    //content-type: application/json
    json: true
  }, (error, response, body) => {
    if(body.status === "ZERO_RESULTS") {
      callback("This address doesn't exist", undefined)
    } else if (body.status === "OK") {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      })
    }
    //console.log(error); --> null if no problem
    //JSON.stringify can take three arguments: (value, replacer, space *indent*)
  })
}

module.exports = { geocodeAddress }
