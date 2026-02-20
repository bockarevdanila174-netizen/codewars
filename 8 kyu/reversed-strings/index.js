function solution(str){
let  reversArr = ""
for(let i = str.length -1;i >= 0; i-- ){
reversArr += (str[i])
}


return reversArr;
}
console.log(solution('world'))