
function npFetchCallBack(calledMethod, methodProperties, callback) {

    fetch('https://api.novaposhta.ua/v2.0/json/', {
        method: 'POST',
        body: JSON.stringify({
            "apiKey": aptKey,
            "modelName": "AddressGeneral",
            "calledMethod": calledMethod,
            "methodProperties": methodProperties
        })
    })
        .then(res => res.json())
        .then(jsonResponse => {
            console.log(jsonResponse)
            if (!jsonResponse.success) {
                throw  { message : 'Data Error '}
            }

            console.log(jsonResponse)

            if(jsonResponse.info.totalCount)
                myToastify("Get records:" + jsonResponse.info.totalCount)

            callback(jsonResponse.data)

        })
        .catch(err => {
            myToastify("Error" + err.message, {
                background: "linear-gradient(to right, #550000, #ff0000)"
            })
            console.error('Error')
            console.error(err)
        })

}