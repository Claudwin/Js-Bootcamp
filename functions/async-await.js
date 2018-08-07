const processData = async () => {
    return 101
   }
   processData().then((data) => {
    console.log(data) // Will print "101"
   }).catch((error) => {
    console.log(error)
   })

   const processData = async () => {
    throw new Error('Something went wrong!')
    return 101
   }
   processData().then((data) => {
    console.log(data)
   }).catch((error) => {
    console.log(error) // Will print error object
   })