const ship1 = {name: "Banca rota", damage: 44, pv: 150};
const ship2 = {name: "Cacique pero no", damage: 66, pv: 124}

function attack( ship1, ship2){
    let saRoto =  Math.floor(Math.random() * ship1.damage +1) //el +1 hace que sea un nº entero,
     ship2.pv = ship2.pv - saRoto                             //  y no sea 0,algo (pa que empieze desde el 1)
     console.log(ship1)
     console.log(ship2)

}

attack(ship1, ship2);
console.log("-----");
attack(ship1, ship2);
console.log("-----");
attack(ship1, ship2);