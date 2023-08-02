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
let imgPokemon = document.querySelector('.imgPokemon')
// const pokeContainer = document.querySelector('.pokemon')
const pokemonCount = 150;



const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon);
    const data = await APIResponse.json();
    return data;

    console.log(data)
}

const renderPokemon = async (pokemon) => {

    const data = await fetchPokemon(pokemon);

    namePokemon.innerHTML = data.name;
    numberPokemon.innerHTML = '#' + data.id;
    imgPokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

}


fetchPokemon('25')
renderPokemon();