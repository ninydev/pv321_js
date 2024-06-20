function convertToJson (a) {
    if (typeof (a) !== "string") {
        a = JSON.stringify(a)
    }
    return a
}

const MyLocalStorage = {
    set: (key, val, ttl) => {
        key = convertToJson(key)
        val = convertToJson(val)
        localStorage.setItem(key, val)
    },

    get: (key) => {
        key = convertToJson(key)
        let result = localStorage.getItem(key)
        try {
            result = JSON.parse(result);
        } catch (error) {}

        return result;
    },
    remove: (key) => {
        key = convertToJson(key)
        localStorage.removeItem(key)
    }

}