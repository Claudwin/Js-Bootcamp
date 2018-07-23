let resturant = {
    name: 'A&W',
    guestCap: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCap - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function(partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removePaty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

console.log(resturant)