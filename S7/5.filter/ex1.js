const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const newAges = ages.filter( function (age){
    return age >= 18;
} )

// const newAges = ages.filter( age => age > 18);

console.log(newAges);