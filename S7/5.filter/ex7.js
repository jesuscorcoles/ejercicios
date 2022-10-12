const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

// const toFilterStreamers = streamers.filter( streamer => { 
//     streamer.name.includes('data-function="toFilterStreamers"')
//     return streamer.name;
// });

const input$$ = document.querySelector('input');
// imput$$.addEventListener("click", streamer.name.includes('data-function="toFilterStreamers"')
// );

// console.log(toFilterStreamers);

const escribeStreamer = (event) => {
    console.log(event);
    const filteredStreamers = streamers.filter( streamer => streamer.name.toLowerCase().includes(input$$.value.toLowerCase()))

    console.log(filteredStreamers);
}

input$$.addEventListener('input', escribeStreamer);