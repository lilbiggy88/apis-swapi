const characterContainer = document.querySelector('.character-container');

axios
.get('https://swapi.dev/api/planets/2')
.then(planetResponse => {
    planetResponse.data.residents.forEach((residentUrl) => {
        axios
        .get(residentUrl)
        .then((resident) => {
            const nameEl = document.createElement('h2')
            nameEl.textContent = resident.data.name
            characterContainer.appendChild(nameEl)
        })
    })
})
.catch()