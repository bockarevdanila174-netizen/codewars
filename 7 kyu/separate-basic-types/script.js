function separateTypes(input) {
    let result = {}

for( let value of input){
    let type = typeof value
    if(!result[type]){
        result[type] = []
    }
    result[type].push(value)

}
return result
}

console.log(separateTypes(['a', 1, 2, false, 'b']))