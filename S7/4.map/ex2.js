const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

// const newUsers = users.map(function(user) {
//     if(user.name.includes("A")){
//         return user.name = "Anacleto";
//     } else {
//         return user.name;
//     }
// })

const newUsers = users.map(function(user) {
    if(user.name.includes("A")[0]){
        return user.name = "Anacleto";
    } else {
        return user.name;
    }
})



console.log(newUsers);
