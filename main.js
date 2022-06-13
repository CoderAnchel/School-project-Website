let variable1 = "uso los eventos";
const boton = document.querySelector(".button-apr");

window.addEventListener("load",()=> {
    console.log("site has charget 🥳👌")
})

boton.addEventListener("click", (e) => {
    console.log(e.target);
    console.log(variable1);
});

// nav

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-ul");

burger.addEventListener("click", ()=> {
    burger.classList.toggle("diss");
})