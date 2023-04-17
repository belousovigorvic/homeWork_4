var list =  [null, 123, undefined, null, "qwerty", 34, undefined, null, null, 43, "aerg", 'пкцйк', null, 'uioo'];

var typeNull = [];
var typeString = [];
var typeNumber = [];
var typeUndefined = [];

for (var i = 0; i < list.length; i++) {
    if (list[i] === null) {
        typeNull.push(list[i]);
    }
    if (typeof list[i] === "string") {
        typeString.push(list[i]);
    }
    if (typeof list[i] === "number") {
        typeNumber.push(list[i]);
    }
    if (typeof list[i] === 'undefined') {
        typeUndefined.push(list[i]);
    }
}

console.log(typeString);
console.log(typeNull);
console.log(typeUndefined);
console.log(typeNumber);

var typeData = []
typeData.push(typeNull, typeString, typeNumber, typeUndefined)
typeData.sort((a, b) => b.length - a.length)

console.log(typeData) // Отсортированные массивы



