const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
};

export const fetchAPI = function (date) {
    const parsedDate = (date instanceof Date) ? date : new Date(date);

    let result = [];
    let random = seededRandom(parsedDate.getDate());

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.7) result.push(i + ':00');
        if (random() < 0.7) result.push(i + ':30');
    }

    if (result.length === 0) {
        result = ['18:00', '19:00', '20:00'];
    }

    return result;
};

export const submitAPI = function (formData) {
    console.log('[API] submitAPI called with:', formData);
    return true;
};