const yosh = document.querySelector(".yosh");
const menu = document.querySelector(".menu-navegacion");

console.log(menu)
console.log(yosh)

yosh.addEventListener("click", () =>{
    menu.classList.toggle("spread")
})

window.addEventListener("click", e=>{
    if(menu.classList.contains("spread") && e.target != menu && e.target != yosh ){

        menu.classList,toggle("spread")
    } 

})

//galeria