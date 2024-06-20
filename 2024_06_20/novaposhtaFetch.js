
function npFetchCallBack(calledMethod, methodProperties, callback) {

    const cacheKey = {
        calledMethod: calledMethod,
        methodProperties: methodProperties
    }

    let cache = MyLocalStorage.get(cacheKey)


    if (cache) {
        myToastify('From Cache')
        callback(cache)
        return
    }

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
            Logger.info(jsonResponse)
            if (!jsonResponse.success) {
                throw  { message : 'Data Error '}
            }

            if(jsonResponse.info.totalCount)
                myToastify("Get records:" + jsonResponse.info.totalCount)

            MyLocalStorage.set(cacheKey, jsonResponse.data)
            callback(jsonResponse.data)

        })
        .catch(err => {
            myToastify("Error" + err.message, {
                background: "linear-gradient(to right, #550000, #ff0000)"
            })
            Logger.error(err)
        })

}