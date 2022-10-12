const phrase = `gracioso-pero-no-gracioso-de-risa-gracioso-de-raro`;


// Prueba 1

// let arra = phrase.split("-", 9);


// for (let index = 0; index < arra.length; index++) {
//     arra[index] = arra[index][0].toUpperCase() + arra[index].substr(1);
// }

// arra.join(" ");
// console.log(arra);




// // Prueba 2

// let newPhras = phrase.replace(/-/g, " ");

// for (let index = 0; index < newPhras.length; index++) {

//         if(newPhras[index] == " "){
//           //newPhras.substring [index +1] = newPhras.toUpperCase;
//           //newPhras.substring(0, 1).toUpperCase();
//         } 
          
//     }

// console.log(newPhras);




// Prueba 3

// let newText = "";
// let nextToUpper = true;

// for (let index = 0; index < phrase.length; index++) {
//     const char = phrase[index];

//     if( nextToUpper){
//         const copyText = char.toUpperCase();
//         newText += copyText;
//         nextToUpper = false;

//     } else if ( char === "-"){
//         nextToUpper = true;
//         newText += " ";
//     } else {
//         newText += char;
//     }
    
// }

// console.log(newText);




//prueba 4


let splitText = phrase.split("-");
let texto = [];
for (let i = 0; i < splitText.length; i++) {
    let element = splitText[i];
    let rS = element.slice(1);
    let pL = element.charAt(0).toUpperCase();
    texto.push(pL + rS);
}
let newText = phrase.join(" ");
console.log(newText);


