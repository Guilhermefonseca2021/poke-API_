let Theme = document.getElementById("theme")

Theme.addEventListener('click', () => {
    if (Theme.classList.contains("dark-theme")) {
        Theme.classList.remove("dark-theme")
        Theme.classList.add("lighttheme")
    }


});