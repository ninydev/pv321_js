
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
            if (!jsonResponse.success) {
                throw  { message : 'Data Error '}
            }

            callback(jsonResponse.data)

        })
        .catch(err => {
            console.error('Error')
            console.error(err)
        })

}