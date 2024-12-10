const _elements = {
    loading: document.querySelector(".loading"),
    switch: document.querySelector(".switch__track")
}

_elements.switch.addEventListener("click", () => {
    const isDark =  _elements.switch.classList.toggle("switch__track--darck");
    if (isDark){
        document.documentElement.setAttribute("data-theme", "dark");
    }

    else{
        document.documentElement.setAttribute("data-theme", "light");
    }
});