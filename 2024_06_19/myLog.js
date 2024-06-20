
const Logger = {
    info: (message) =>{
        console.log(message)
    },
    error: (message) =>{
        // fetch('http://api.ninydev.com/error/1/', {
        //     method: 'POST',
        //     body: JSON.stringify(message)
        // })
        console.error(message)
    }
}
