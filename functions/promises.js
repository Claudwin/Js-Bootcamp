const getDataCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, 'this is dummy data')

    }, 2000) 
}

getDataCallback((err, data) => {
    if (err) {

    } else {
        console.log(data)
    }
})

//Promise

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('this is promise data')
        reject('this is promise error')
    }, 2000)
})

myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})