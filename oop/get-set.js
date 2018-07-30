const data = {
    location: [],
    get location() {
        return 'this is a test'
    },
    set location(value) {
        this,this.location = value.trim()
        this.location.push(this._location)
    }
}
//code that uses the data object
data.location = 'edmonton'

console.log(data.location)