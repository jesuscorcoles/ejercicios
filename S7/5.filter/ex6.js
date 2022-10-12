const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];


// const newStreamers = streamers.filter( streamer => streamer.gameMorePlayed.includes("Legends"));{
//     if (streamers.age > 35){
//         console.log(streamers.gameMorePlayed.toUpperCase);
//     }
// }
    const newStreamers = streamers.filter( streamer =>{ if (streamer.age > 35){
        return streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();    
    } else {
        return streamer.gameMorePlayed.includes("Legends");
    }
    });

console.log(newStreamers);