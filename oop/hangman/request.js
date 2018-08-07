const getPuzzle = async (wordCount) => {
    const response = await
   fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
   
    if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
    } else {
    throw new Error('Unable to get puzzle')
    }
   }

const getCountryDetails = (countryCode) => {
    return fetch('https://restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200) {
            return response.json()            
        } else {
            throw new error
        }
    }).then((data) => {
        return data.find((country) => country.alpha2Code === countryCode)
        
    })
}

const getLocation = () => {
    return fetch('https://ipinfo.io/json?token=42b2e24b1f2741').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch data')
        }
    }).then((data) => {
        return data
    })
}