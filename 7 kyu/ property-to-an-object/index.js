// Напишите функцию, которая добавляет именованное свойство к объекту. Должна быть возможность установить новое значение для этого свойства. Если свойство уже существует в объекте, должна быть выброшена ошибка.


const object = {
    name: "Danila",
    age: 29,
    from: "Rostov"
}


function addProperty(obj,prop,value){
if( obj in prop){
    throw new Error("Did not throw expected error")
}
 obj[prop] = value
 return obj
}

console.log(addProperty(object, "name","Dan"))




