let changeThemeBtn = document.querySelector("#change-theme")

changeThemeBtn.addEventListener('click', () => {
    // acesso o document p body e vejo a lista e dispao "toggle" dark meu tema para lista de classes
    let header = document.querySelector('header')

    document.body.classList.toggle("light-theme")
    header.classList.toggle('light-theme')
});


const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch('https://pokeapi.co/api/v2/pokemon/${pokemon}');
    const data = await APIResponse.json();
    return data;
}

fetchPokemon('25');
