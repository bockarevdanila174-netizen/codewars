// 5 Test Terminal game move function

// В этой игре герой перемещается слева направо. Игрок бросает кубик и дважды перемещается на указанное кубиком количество клеток.

// Создайте функцию для конечной игры, которая принимает текущую позицию героя и результат броска (1-6) и возвращает новую позицию.

function move (position, roll) {
let newPosition =  position + (roll * 2)
return newPosition

  // return the new position
}
console.log(move (3,6 ))
