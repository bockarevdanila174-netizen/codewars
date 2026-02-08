

// 1 test Multiply the number

// Джеку очень нравится число пять: хитрость здесь в том, что каждое число нужно умножить на 5 в степени, равной количеству цифр каждого числа, так что, например...

//  3 -->    15  (  3 * 5¹)
//  10 -->   250  ( 10 * 5²)
// 200 --> 25000  (200 * 5³)
//   0 -->     0  (  0 * 5¹)
//  -3 -->   -15  ( -3 * 5¹)

function multiply(number){
    // let digitsCount = String(number).length
    let digitsCount = Math.abs(number).toString().length;
   return number * Math.pow(5, digitsCount);
   //your code here
}
console.log(multiply(3))
console.log(multiply(10))
console.log(multiply(200))
console.log(multiply(0))
console.log(multiply(-3))

