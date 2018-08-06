const getPuzzle = (callback) => {
//Making an HTTP Request
const request = new XMLHttpRequest()
request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        callback(undefined, data.puzzle)
    } else if (e.target.readyState === 4) {
       callback('An error has occured')
    }
})
request.open('GET' , 'http://puzzle.mead.io/puzzle?wordCount=2')
request.send()

}

const getCountryDetails = (countryCode, callback) => {
       const countryRequest = new XMLHttpRequest()

countryRequest.addEventListener('readystatechange', (e) => {
    if (e.target.status === 200 && e.target.readyState === 4) {
        const data = JSON.parse(e.target.responseText)
        const country = data.find((country) => country.alpha2Code === countryCode)
        callback(undefined, country)
        } else if (e.target.readyState === 4) {
                    callback('An error has occured')
                }
     
})
countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all')
countryRequest.send()

}