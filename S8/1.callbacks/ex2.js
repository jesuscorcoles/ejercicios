const userAnwsers = [];

function confirmExample(description){
    return confirm(description)
}

function promptExample(description){
   return prompt(description)
}

function father( description, callback){
    userAnwsers.push(callback(description));
}

father('Holiwi', confirmExample);
father('Miau!', promptExample);
father('Doble holiwi', confirmExample);



console.log(userAnwsers);