const input$$ = document.querySelector("input");

function erInput (event) {
    console.log(event.target.value)
}

input$$.addEventListener("input", erInput);