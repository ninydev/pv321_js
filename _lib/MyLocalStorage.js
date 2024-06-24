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
        // Зберегти ttl - окремо
        localStorage.setItem(key, val)
    },

    get: (key) => {
        // Спочатку прочитати ttl
        // та якщо зминна ще актуальна - повернути зминну
        // якщо ні - видалити данні та ттл та мовернути нулл
        key = convertToJson(key)
        let result = localStorage.getItem(key)
        try {
            result = JSON.parse(result);
        } catch (error) {}

        return result;
    },
    remove: (key) => {
        key = convertToJson(key)
        // Видалити ттл
        localStorage.removeItem(key)
    }

}