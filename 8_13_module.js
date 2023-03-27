export default class ModuleClass {
    _result
    constructor(a, b, c) {
        this.result = a * b * c
    }
    get result() {
        return this._result
    }

    set result(x) {
        this._result = x
    }
}

export function colorIt(color, content) {
    return `<span style="color: ${color};">${content}</span>`
}

export function resizeIt(size, content) {
    return `<span style="font-size: ${size};">${content}</span>`
}

export const config = {
    publicUrl2: "...urlurlurl2...",
    projectName2: "...projct name2 ..."
}

//OR:
/* 
export default ModuleClass
export {colorIt, resizeIt, config} 
*/