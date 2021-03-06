const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiYWtpbGFyc2F0aCIsImEiOiJja3NxMnV2ajYwOTYzMnB0aHZ1NTN6bDM2In0.fdiHVL0nD-j4uGhqC5Ydmg&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude:body.features[0].geometry.coordinates[1],
                longitude: body.features[0].geometry.coordinates[0],
                location: body.query[0]
            })
        }
    })
}

module.exports = geocode

