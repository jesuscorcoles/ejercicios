const btn$$ = document.createElement("button");
btn$$.setAttribute("id", "btnToClick")


function tocaElBoton (event) {
    console.log(event);
}

document.body.appendChild(btn$$)
btn$$.addEventListener("click", tocaElBoton);