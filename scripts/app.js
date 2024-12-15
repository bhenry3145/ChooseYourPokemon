// Bro Code Youtube Video
fetchData()

    async function fetchData() {
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
        const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await promise.json();
        console.log(data);
        let pokemonSprite = document.getElementById('pokemonSprite');
        pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }

    let fetchButton = document.getElementById('fetchButton');

    fetchButton.addEventListener('click', () => {
        fetchData();

    })