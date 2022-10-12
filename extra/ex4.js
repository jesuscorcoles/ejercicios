const list = [
    {name: "La tulipán", gender: "pop", order: 3},
    {name: "Calle falsa 123", gender: "rap", order: 2},
    {name: "Z balvin", gender: "reggeaton", order: 4},
    {name: "Neng de castefa", gender: "pop", order: 1}
]

list.sort();

list.sort((a, b) => {
    return a.order - b.order
});


console.log(list)



//Método 2

// list.sort(function (a, b){
//     if (a.order > b.order) {
//         return 1;
//     } 
//     if (a.order < b.order) {
//         return -1;
//     }
// })

// console.log(list)