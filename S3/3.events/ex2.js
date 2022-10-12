const input$$ = document.querySelector("input");

function crearFocus (event) {
    console.log(event.target.value)
}

input$$.addEventListener("focus", crearFocus);