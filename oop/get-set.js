const data = {
    get location() {
        return 'this is a test'
    }
}
//code that uses the data object
data.location = 'edmonton'

console.log(data.location)