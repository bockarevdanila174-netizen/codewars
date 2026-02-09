// 4 Test Grasshopper - Terminal game combat function

// Создайте боевую функцию, которая принимает текущее здоровье игрока и полученный урон, и возвращает новое значение здоровья игрока. Здоровье не может быть меньше 0.

function combat(health, damage) {
    
     health = health - damage
     if(health < 0){
        return 0
     }
   
     return health
    
     // Write your code here
    }
console.log(combat(70, 60))

    
  