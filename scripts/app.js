// Bro Code Youtube Video

let hpDisplay = document.getElementById('hpDisplay');
let hpBar = document.getElementById('hpBar');
let attackDisplay = document.getElementById('attackDisplay');
let defenseDisplay = document.getElementById('defenseDisplay');
let specialatkDisplay = document.getElementById('specialatkDisplay');
let specialdefDisplay = document.getElementById('specialdefDisplay');
let speedDisplay = document.getElementById('speedDisplay');


    async function fetchData() {
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
        const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await promise.json();
        console.log(data);
        let pokemonSprite = document.getElementById('pokemonSprite');
        pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        let pokeName = document.getElementById('pokeName');
        pokeName.innerText = data.species.name.toUpperCase();
        
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        hpDisplay.innerText = data.stats[0].base_stat;
        attackDisplay.innerText = data.stats[1].base_stat;
        defenseDisplay.innerText = data.stats[2].base_stat;
        specialatkDisplay.innerText = data.stats[3].base_stat;
        specialdefDisplay.innerText = data.stats[4].base_stat;
        speedDisplay.innerText = data.stats[5].base_stat;
    }

    let fetchButton = document.getElementById('fetchButton');

    fetchButton.addEventListener('click', () => {
        fetchData();
    })