function toNumberArray(...stringArray){
  return   stringArray.map( Number)
}


console.log(toNumberArray(["1.2","2.2","3.3"]))