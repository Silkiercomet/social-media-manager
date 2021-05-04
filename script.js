let check = document.querySelector("#switcher");
let light = document.querySelectorAll(".light");

const togglerMode = () => {
    document.body.classList.toggle("dark-mode-b")
    light.forEach(element => element.classList.toggle("dark-mode"));
}

check.addEventListener('click',togglerMode)