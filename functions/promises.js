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

const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
    typeof num === 'number' ? resolve(num * 2) : reject('Number must be
   provided')
    }, 2000)
   })

   getDataPromise(10).then((data) => {
    getDataPromise(data).then((data) => {
    console.log(data) // Will print "40"
    }).catch((err) => {
    console.log(err)
    })
   }).catch((err) => {
    console.log(err)
   })

   getDataPromise(10).then((data) => {
    return getDataPromise(data)
   }).then((data) => {
    console.log(data) // Will print "40"
   }).catch((err) => {
    console.log(err)
   })