const numbersList = [];

function sum(a, b){
    return a + b
}

function substract(a, b){
    return a - b
}

function father(a, b, callback){
    const resulta = callback(a, b);
    numbersList.push(resulta);
}

father(2, 2, sum);
// father(2, 2, substract);


console.log(numbersList);

