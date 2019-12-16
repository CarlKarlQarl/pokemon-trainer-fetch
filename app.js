fetch(`http://localhost:3000/pokemons`)
    .then(response => response.json())
    .then(pokemons => {
        pokemons.forEach(pokemon => {
            const body = document.querySelector("body")
            const pokeDiv = document.createElement("p")

            pokeDiv.innerText = `${pokemon.name}`

            body.appendChild(pokeDiv)
        })
    })
    .catch(error => console.log(error))