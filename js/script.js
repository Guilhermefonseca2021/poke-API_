// dark-theme
let changeThemeBtn = document.querySelector("#change-theme")

changeThemeBtn.addEventListener('click', () => {
    // acesso o document p body e vejo a lista e dispao "toggle" dark meu tema para lista de classes
    let header = document.querySelector('header')

    document.body.classList.toggle("light-theme")
    header.classList.toggle('light-theme')
});


// pokemon list
let namePokemon = document.querySelector('.name')
let numberPokemon = document.querySelector('.number') 
const pokeContainer = document.querySelector('.pokemon')
const pokemonCount = 150;
const pokemonType = Object.keys(colorType);
const colorType = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}


const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon);
    const data = await APIResponse.json();
    return data;

    console.log(data)
    // const pokemonPromises = []
}

const renderPokemon = async (pokemon) => {

    const data = await fetchPokemon(pokemon)
    
    for(index = 1; index < pokemonCount; index++) {
        await APIResponse(index)
    }

    namePokemon.innerHTML = data.name;
    numberPokemon.innerHTML = '#' + data.id;
}

const createPokemonCard = (pokemon) => {
    const card = document.createElement('div')
    card.classList.add('pokemon')

    const name = pokemon.name[0].toUpperCase() + pokemonCount.name.slice[1]
    const id = pokemon.id.toString().padStart(3, '0')

    const pokemonType = pokemon.types.map(type => type.type.name)
    const type = mainTypes.find(type => pokemonType.indexOf(type) > -1)
    const color = colorType(type)

    card.style.backgroundColor = color;

    const pokemonInnerHTML = ´
    <div class="pokemon">
    <div class="imgContainer">
        <img src="./pokemon/001.png" alt="nome">
    </div>
    <div class="info">
        <span class="number">#01</span>
        <h3 class="name">Charmander</h3>
        <small class="type">type: <span>Fogo</span></small>
    </div>
    </div>   
´
}


fetchPokemon('25')
renderPokemon();