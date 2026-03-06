// Напишите функцию, которая принимает в качестве аргумента массив строк и возвращает отсортированный массив, содержащий те же строки, упорядоченные от самой короткой к самой длинной.

// Например, если в качестве аргумента был передан следующий массив:

function sortByLength (array) {
  // Return an array containing the same strings,
  // ordered from shortest to longest
    return array.sort((a,b) => a.length - b.length);
}
console.log(sortByLength (["Beg", "Life", "I", "To"]))