export function parseJson(jsonString) {
    const json = JSON.parse(jsonString);
    if (Array.isArray(json)) {
        return parseInternalForArray(json);
    } else {
        return parseInternalForObj(json);
    }
}

function parseInternalForArray(jsonArray) {
    return jsonArray.map(someWork);
}

function parseInternalForObj(json) {
    const obj = {};
    Object.entries(json).forEach(([key, value]) => obj[key] = someWork(value));
    return obj;
}

function someWork(value) {
    if (typeof value === 'string') {
        try {
            return parseJson(value);
        } catch (e) {
            return value;
        }
    }
    return value;
}
