function isEmptyString(str) {
    //return String(str).length === 0
    return String(str) === ""
}

console.log(isEmptyString(null))

//number check: isNaN
// returns true if it caannot be converted to number, eg.: '123' -> false, null->flase, 'x'-> true, '12s' -> true

console.log(isNaN('x'))
