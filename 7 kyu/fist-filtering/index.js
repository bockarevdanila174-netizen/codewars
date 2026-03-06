// В этом задании вы создадите функцию, которая принимает список неотрицательных целых чисел и строк и возвращает новый список, из которого будут удалены только строки.

function filter_list(arr) {
     return arr.filter(num =>   typeof num === "number" )
     
  // Return a new array with the strings filtered out
}
console.log(filter_list([1,2,'a','b']))