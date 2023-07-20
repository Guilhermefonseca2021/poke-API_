let changeThemeBtn = document.querySelector("#change-theme")

changeThemeBtn.addEventListener('click', () => {
    // acesso o document p body e vejo a lista e dispao "toggle" dark meu tema para lista de classes
    document.body.classList.toggle("light-theme")
});