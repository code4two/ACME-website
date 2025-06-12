document.addEventListener("DOMContentLoaded", () =>{
    const bag = document.getElementById("bag");
    const menu = document.getElementById('dropdownMenu');

    bag.addEventListener("click", () => {
        menu.classList.toogle('show');
    });

    bag.addEventListener("click", () => {
        menu.classList.toogle('hide');
    });
});

const kosoko = document.querySelector('.kosoko');

    kosoko.addEventListener('click', () =>{
    alert("Password Saved!");
});

const sade = document.querySelector('.johnson');

    sade.addEventListener('click', () =>{
    alert("Wrong Password!");
});