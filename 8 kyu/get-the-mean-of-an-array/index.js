// Наступил конец учебного года, решающий момент для вашего школьного отчета. Необходимо рассчитать средние значения. Все ученики подходят к вам и умоляют рассчитать их средние баллы. Легко! Вам просто нужно написать скрипт.

// Верните среднее значение заданного массива, округленное до ближайшего целого числа в меньшую сторону.

// Массив никогда не будет пустым.
function getAverage(marks){
    let average = 0
    for(let i = 0; i < marks.length;i++){
        average += marks[i];
    }

    return Math.floor(average / marks.length)
  //TODO : calculate the downward rounded average of the marks array
}
console.log(getAverage([3,5,5,5,3]))