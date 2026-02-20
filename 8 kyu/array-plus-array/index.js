// Я новичок в программировании, и мне нужно получить сумму двух массивов... Точнее, сумму всех их элементов. Буду благодарен за помощь.

// P.S. Каждый массив содержит только целые числа. Результатом также будет число.

function arrayPlusArray(arr1, arr2) {
    let sumArr1 = 0
    let sumArr2 = 0
    
    for(let i = 0; i < arr1.length;i++){
    sumArr1 += arr1[i]
    }
    for(let i = 0; i < arr2.length;i++){
    sumArr2 +=  arr2[i]
    }
  return sumArr1 + sumArr2; //something went wrong
}
console.log(arrayPlusArray([1,2,3],[2,5,6,6]))