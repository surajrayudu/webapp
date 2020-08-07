
  const request = require('request')
/*
  const forecast = (latitude, longitude, callback) => {
      const url = 'http://api.weatherstack.com/current?access_key=209162283709de6fb0ed5af2b2482f93&query=' + latitude + ',' + longitude+'&units=f'
  
      request({ url: url, json: true }, (error, response) => {
          if (error) {
              callback('Unable to connect to weather service!')
          } else if (response.body.error) {
              callback('Unable to find location')
          } else {
              callback(undefined,'the temperature outside is '+response.body.current.temperature+' but it feels like there is '+response.body.current.precip+'% chance of rain')
          }
      })
  }
  
  module.exports = forecast */

//destructuring method
  const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=209162283709de6fb0ed5af2b2482f93&query=' + latitude + ',' + longitude+'&units=f'

    request({ url, json: true }, (error, {body}={}) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined,'the temperature outside is '+body.current.temperature+' but it feels like there is '+body.current.precip+'% chance of rain')
        }
    })
}

module.exports = forecast
