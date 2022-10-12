const countries = [{title: 'Alberto tonto', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Alberto tonto maximo', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'holi', imgUrl: 'https://picsum.photos/300/200?random=5'}];

const ul$$ = document.createElement("ul");

for (let i = 0; i < countries.length; i++) {
    const country = countries[i];

    const div$$ = document.createElement("div")

    div$$.innerHTML = `<h4>${country.title}</h4><img src=${country.imgUrl}>`

    document.body.appendChild(div$$)

   
}

const btn$$ = document.querySelector("button");

btn$$.addEventListener("click", function() {
    const dives$$ = document.querySelectorAll("div");
    dives$$[dives$$.length -1].remove();
});