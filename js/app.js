var menuBar = document.querySelector(".menu-bar");
var openMenu = document.querySelector(".open-menu");
var overLay = document.querySelector(".overlay")


openMenu.addEventListener(
    "click",
    function(){
        menuBar.classList.add("show");
        openMenu.className = "fa-solid fa-xmark";
        var closeMenu = document.querySelector(".fa-xmark")
        closeMenu.style.fontSize = "30px";
        overLay.classList.add("blink")
        
    }
)
overLay.addEventListener(
    "click",
    ()=>{
        openMenu.className = 'fa-solid fa-bars';
        menuBar.classList.remove("show");
        overLay.classList.remove("blink")

    }
)